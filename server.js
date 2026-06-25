require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const Razorpay = require("razorpay");
const path = require("path");
const crypto = require("crypto");
const fs = require("fs");
const { PDFDocument } = require("pdf-lib");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static("public"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// ==================== DATABASE ====================
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/thedevarena", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✓ MongoDB connected"))
  .catch(err => console.error("✗ MongoDB connection failed:", err.message));

// Application Schema
const applicationSchema = new mongoose.Schema({
  applicationId: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  degree: { type: String, required: true },
  university: { type: String, required: true },
  internship: { type: String, required: true },
  idPlan: { type: String, enum: ["Standard ID Card", "Premium ID Card"], default: "Standard ID Card" },
  status: { type: String, enum: ["submitted", "email_sent", "payment_pending", "payment_completed", "rejected"], default: "submitted" },
  paymentId: String,
  orderId: String,
  paymentStatus: { type: String, enum: ["pending", "completed", "failed"], default: "pending" },
  paymentAmount: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Application = mongoose.model("Application", applicationSchema);

// Payment Schema
const paymentSchema = new mongoose.Schema({
  orderId: { type: String, unique: true, required: true },
  paymentId: String,
  applicationId: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, default: "INR" },
  status: { type: String, enum: ["created", "completed", "failed"], default: "created" },
  studentEmail: String,
  createdAt: { type: Date, default: Date.now },
});

const Payment = mongoose.model("Payment", paymentSchema);

// ==================== EMAIL SERVICE ====================
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendApplicationEmail(applicant, paymentUrl) {
  const emailContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Inter', Arial, sans-serif; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 8px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { background: white; padding: 30px; border-radius: 8px; margin: 20px 0; }
        .button { display: inline-block; padding: 12px 30px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
        .details { background: #f0f0f0; padding: 15px; border-radius: 5px; margin: 15px 0; }
        .footer { text-align: center; font-size: 12px; color: #666; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Application Received! 🎉</h1>
        </div>
        <div class="content">
          <p>Dear <strong>${applicant.name}</strong>,</p>
          <p>Thank you for submitting your application to <strong>${process.env.COMPANY_NAME}</strong>. We're excited to have you on board!</p>
          
          <div class="details">
            <strong>Application Details:</strong><br>
            Application ID: ${applicant.applicationId}<br>
            Internship: ${applicant.internship}<br>
            ID Plan: ${applicant.idPlan}<br>
            Amount: ₹${getPlanPrice(applicant.idPlan) / 100}
          </div>

          <p><strong>Next Step:</strong> Complete your payment to activate your ID card and access premium internship resources.</p>

          <a href="${paymentUrl}" class="button">Proceed to ID Card Payment →</a>

          <p style="color: #666; font-size: 14px;">
            If the button doesn't work, copy and paste this link in your browser:<br>
            <code>${paymentUrl}</code>
          </p>

          <div style="background: #e8f4f8; padding: 15px; border-left: 4px solid #667eea; margin: 20px 0; border-radius: 5px;">
            <strong>What happens next?</strong><br>
            1. Click the payment button<br>
            2. Complete secure payment via Razorpay<br>
            3. Receive your Digital ID Card<br>
            4. Access all internship resources & tasks
          </div>

          <p style="margin-top: 30px; color: #999; font-size: 12px;">
            This is an automated email. Please don't reply to this address.<br>
            For support, contact: support@thedevelopersarena.com
          </p>
        </div>
        <div class="footer">
          <p>&copy; 2024 ${process.env.COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: applicant.email,
      subject: `Application Confirmed - Complete Your Payment | ${process.env.COMPANY_NAME}`,
      html: emailContent,
    });
    console.log(`✓ Email sent to ${applicant.email}`);
    return true;
  } catch (error) {
    console.error("✗ Email sending failed:", error.message);
    return false;
  }
}

// ==================== RAZORPAY ====================
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

function getPlanPrice(planName) {
  const plans = {
    "Standard ID Card": 29900, // ₹299 in paise
    "Premium ID Card": 59900,  // ₹599 in paise
  };
  return plans[planName] || 29900;
}

// ==================== API ENDPOINTS ====================

// Main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Application submission endpoint
app.post("/api/apply", async (req, res) => {
  try {
    const { name, email, phone, degree, university, internship, idPlan } = req.body;

    // Validation
    if (!name || !email || !phone || !degree || !university || !internship) {
      return res.status(400).json({ ok: false, error: "All fields are required" });
    }

    // Generate unique application ID
    const applicationId = `TDA-${Date.now()}-${crypto.randomBytes(3).toString("hex").toUpperCase()}`;

    // Create application record
    const application = new Application({
      applicationId,
      name,
      email,
      phone,
      degree,
      university,
      internship,
      idPlan: idPlan || "Standard ID Card",
      status: "submitted",
      paymentAmount: getPlanPrice(idPlan || "Standard ID Card"),
    });

    await application.save();

    // Generate payment link
    const paymentUrl = `${process.env.APP_URL || "http://localhost:3000"}/payment?appId=${applicationId}`;

    // Send confirmation email with payment link
    const emailSent = await sendApplicationEmail(
      { ...application.toObject(), applicationId },
      paymentUrl
    );

    if (emailSent) {
      await Application.updateOne({ applicationId }, { status: "email_sent" });
    }

    res.status(201).json({
      ok: true,
      applicationId,
      paymentUrl,
      message: "Application received. Check your email for payment instructions.",
    });
  } catch (error) {
    console.error("Application error:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
});

// Create Razorpay order endpoint
app.post("/api/create-order", async (req, res) => {
  try {
    const { applicationId } = req.body;

    const application = await Application.findOne({ applicationId });
    if (!application) {
      return res.status(404).json({ ok: false, error: "Application not found" });
    }

    const options = {
      amount: application.paymentAmount, // Amount in paise
      currency: "INR",
      receipt: applicationId,
      notes: {
        applicationId,
        studentEmail: application.email,
        internship: application.internship,
      },
    };

    const order = await razorpay.orders.create(options);

    // Save order to database
    const payment = new Payment({
      orderId: order.id,
      applicationId,
      amount: application.paymentAmount / 100,
      studentEmail: application.email,
      status: "created",
    });

    await payment.save();
    await Application.updateOne({ applicationId }, { orderId: order.id, status: "payment_pending" });

    res.json({
      ok: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error("Order creation error:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
});

// Payment success endpoint
app.post("/api/verify-payment", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET).update(body).digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ ok: false, error: "Invalid signature" });
    }

    // Update payment record
    const payment = await Payment.findOneAndUpdate(
      { orderId: razorpay_order_id },
      { paymentId: razorpay_payment_id, status: "completed" },
      { new: true }
    );

    if (payment) {
      // Update application record
      const app = await Application.findOneAndUpdate(
        { applicationId: payment.applicationId },
        { paymentId: razorpay_payment_id, paymentStatus: "completed", status: "payment_completed" },
        { new: true }
      );

      // Send success email
      await sendSuccessEmail(app);
    }

    res.json({
      ok: true,
      message: "Payment verified successfully",
      applicationId: payment.applicationId,
    });
  } catch (error) {
    console.error("Payment verification error:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
});

// Send success email after payment
async function sendSuccessEmail(application) {
  const emailContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Inter', Arial, sans-serif; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 8px; }
        .header { background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color: white; padding: 20px; border-radius: 8px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { background: white; padding: 30px; border-radius: 8px; margin: 20px 0; }
        .badge { display: inline-block; background: #38ef7d; color: white; padding: 8px 15px; border-radius: 20px; font-weight: bold; margin: 10px 0; }
        .card-preview { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center; }
        .button { display: inline-block; padding: 12px 30px; background: #11998e; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Payment Successful! ✓</h1>
        </div>
        <div class="content">
          <p>Congratulations <strong>${application.name}</strong>!</p>
          <p>Your payment has been received and verified. Your Digital ID Card is now active!</p>

          <div class="badge">✓ VERIFIED INTERN</div>

          <div class="card-preview">
            <h2 style="margin: 0;">YOUR DIGITAL ID CARD</h2>
            <p style="font-size: 12px; margin: 10px 0;">ID: ${application.applicationId}</p>
            <p style="font-size: 18px; margin: 10px 0;"><strong>${application.name}</strong></p>
            <p style="font-size: 14px; margin: 0;">${application.internship}</p>
          </div>

          <div style="background: #f0f0f0; padding: 15px; border-radius: 5px;">
            <strong>What's Next:</strong><br>
            ✓ Digital ID Card activated<br>
            ✓ Access to all ${application.internship} tasks<br>
            ✓ Certification upon completion<br>
            ✓ Portfolio builder enabled<br>
            ✓ Priority support activated
          </div>

          <a href="${process.env.APP_URL || "http://localhost:3000"}/dashboard" class="button">Access Your Dashboard →</a>

          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            <strong>Payment Details:</strong><br>
            Amount: ₹${(application.paymentAmount / 100).toFixed(2)}<br>
            Payment ID: ${application.paymentId}<br>
            Order ID: ${application.orderId}
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: application.email,
      subject: `🎉 Welcome! Your Digital ID Card is Active | ${process.env.COMPANY_NAME}`,
      html: emailContent,
    });
  } catch (error) {
    console.error("Success email error:", error);
  }
}

// Get application status
app.get("/api/application/:applicationId", async (req, res) => {
  try {
    const app = await Application.findOne({ applicationId: req.params.applicationId });
    if (!app) {
      return res.status(404).json({ ok: false, error: "Application not found" });
    }
    res.json({ ok: true, application: app });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ ok: true, status: "Server running", env: process.env.NODE_ENV });
});

// Generate PDF Offer Letter
app.post("/api/generate-offer", async (req, res) => {
  try {
    const { name, program, duration, email, batchDate, startDate } = req.body;
    
    const templatePath = path.join(__dirname, "Code_Operators_Offer_Letter_v3.pdf");
    if (!fs.existsSync(templatePath)) {
      return res.status(404).json({ ok: false, error: "PDF Template not found" });
    }
    
    const existingPdfBytes = fs.readFileSync(templatePath);
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    
    // Default placeholder coordinates (will likely need tuning based on the actual PDF design)
    // We draw the text. If there's placeholder text under it, we might need to draw a white box first, 
    // but we'll start by just drawing the text.
    firstPage.drawText(name || "Student Name", { x: 120, y: 600, size: 14 });
    firstPage.drawText(program || "Internship Position", { x: 120, y: 570, size: 12 });
    firstPage.drawText(duration ? duration + " Month(s)" : "1 Month", { x: 120, y: 550, size: 12 });
    if(email) firstPage.drawText(email, { x: 120, y: 530, size: 12 });
    firstPage.drawText(startDate || new Date().toLocaleDateString(), { x: 120, y: 510, size: 12 });
    if(batchDate) firstPage.drawText(batchDate, { x: 120, y: 490, size: 12 });

    const pdfBytes = await pdfDoc.save();
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${name ? name.replace(/\s+/g, '_') : 'Student'}_Offer_Letter.pdf"`);
    res.send(Buffer.from(pdfBytes));
  } catch (error) {
    console.error("PDF generation error:", error);
    res.status(500).json({ ok: false, error: "Failed to generate PDF" });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`\n✓ Server running on ${process.env.APP_URL || `http://localhost:${PORT}`}`);
  console.log(`✓ Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`✓ Database: Connected to MongoDB`);
  console.log(`✓ Email: ${process.env.SMTP_USER}`);
  console.log(`✓ Razorpay: ${process.env.RAZORPAY_KEY_ID ? "Configured" : "Not configured"}\n`);
});

module.exports = app;
