# The Developers Arena - Complete Application System

A production-ready internship application system with automated email notifications, Razorpay payment integration, and MongoDB database.

## System Workflow

```
Student Submits Application Form
           ↓
Backend Saves to MongoDB
           ↓
Automated Email Sent (with Payment Link)
           ↓
Email Contains "Proceed to ID Card Payment" Button
           ↓
Student Clicks → Razorpay Payment Gateway
           ↓
Payment Verification
           ↓
Success Email with Digital ID Card
```

## Features

✅ **Student Application Form** - Collect student details (name, email, phone, degree, university, internship type)
✅ **Automated Email Notifications** - Confirmation email with payment link sent automatically
✅ **Razorpay Integration** - Secure payment gateway for ID card purchases
✅ **MongoDB Database** - Store applications and payment records
✅ **Payment Verification** - Cryptographic signature verification for security
✅ **Digital ID Cards** - Two tiers: Standard (₹299) and Premium (₹599)
✅ **Production Ready** - Deployable globally on internet

## Prerequisites

- **Node.js** v14+
- **MongoDB** (Cloud: MongoDB Atlas, or Local)
- **Razorpay Account** (for payment processing)
- **Email Service** (Gmail with app password, SendGrid, or similar)

## Installation & Setup

### 1. Clone Repository
```bash
cd thedevelopersarena
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
# Copy from .env.example
cp .env.example .env
```

Edit `.env` with your actual credentials:

```env
# MongoDB Setup (Required)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/thedevarena?retryWrites=true&w=majority
DB_NAME=thedevarena_db

# Email Setup (Gmail Example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-company-email@gmail.com
SMTP_PASS=your-app-specific-password
EMAIL_FROM=noreply@thedevelopersarena.com
COMPANY_NAME=The Developers Arena

# Razorpay Setup (Required)
RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxx

# Server Configuration
PORT=3000
NODE_ENV=production
APP_URL=https://yourdomain.com
```

## Getting Credentials

### MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/thedevarena?retryWrites=true&w=majority`

### Gmail App Password

1. Enable 2-Factor Authentication in Gmail
2. Generate App Password: [Gmail App Passwords](https://myaccount.google.com/apppasswords)
3. Use generated password in `SMTP_PASS`

### Razorpay API Keys

1. Sign up at [Razorpay](https://razorpay.com)
2. Go to Dashboard → Settings → API Keys
3. Copy Key ID and Key Secret
4. Use in `.env` as `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET`

## Local Development

### Start Server

```bash
npm start
```

Server runs at `http://localhost:3000`

### Test Endpoints

**Submit Application:**
```bash
curl -X POST http://localhost:3000/api/apply \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "degree": "BTech",
    "university": "IIT Delhi",
    "internship": "Full Stack Java",
    "idPlan": "Standard ID Card"
  }'
```

**Check Application Status:**
```bash
curl http://localhost:3000/api/application/TDA-1234567890-ABC123
```

**Health Check:**
```bash
curl http://localhost:3000/api/health
```

## Global Internet Deployment

### Option 1: Heroku (Recommended for Quick Deploy)

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku App**
   ```bash
   heroku create your-app-name
   ```

4. **Set Environment Variables**
   ```bash
   heroku config:set MONGODB_URI="mongodb+srv://..."
   heroku config:set RAZORPAY_KEY_ID="rzp_live_xxx"
   heroku config:set RAZORPAY_KEY_SECRET="xxx"
   heroku config:set SMTP_USER="your-email@gmail.com"
   heroku config:set SMTP_PASS="your-app-password"
   heroku config:set APP_URL="https://your-app-name.herokuapp.com"
   ```

5. **Deploy**
   ```bash
   git push heroku main
   ```

### Option 2: AWS EC2

1. **Launch EC2 Instance**
   - Use Ubuntu 20.04 LTS
   - Open ports: 80, 443, 3000

2. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Install PM2 (Process Manager)**
   ```bash
   npm install -g pm2
   ```

4. **Setup Application**
   ```bash
   git clone <your-repo>
   cd thedevelopersarena
   npm install
   ```

5. **Create `.env` file with credentials**

6. **Start with PM2**
   ```bash
   pm2 start server.js --name "tda-app"
   pm2 startup
   pm2 save
   ```

7. **Setup Nginx Reverse Proxy**
   ```bash
   sudo apt-get install nginx
   sudo nano /etc/nginx/sites-available/default
   ```

   Add:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
       }
   }
   ```

   Restart: `sudo systemctl restart nginx`

8. **Setup SSL with Let's Encrypt**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

### Option 3: Railway (Simple Alternative)

1. Go to [Railway.app](https://railway.app)
2. Connect GitHub repository
3. Add environment variables in dashboard
4. Deploy (auto-deploys on git push)

### Option 4: DigitalOcean App Platform

1. Go to DigitalOcean App Platform
2. Connect GitHub repository
3. Set environment variables
4. Deploy (similar to Railway)

## Database Management

### View Applications in MongoDB

```javascript
// Connect to MongoDB Compass or Atlas
// Collection: applications
// View all applications with their status
```

### Common Queries

```bash
# Count completed payments
db.applications.countDocuments({ paymentStatus: "completed" })

# Find applications by email
db.applications.find({ email: "student@example.com" })

# Get total revenue
db.payments.aggregate([{ $group: { _id: null, total: { $sum: "$amount" } } }])
```

## Email Template Customization

Edit email templates in `server.js`:
- `sendApplicationEmail()` - Initial confirmation email
- `sendSuccessEmail()` - Payment success email

Change company name, colors, links to customize for your brand.

## API Reference

### POST /api/apply
Submit a new application

**Request:**
```json
{
  "name": "Student Name",
  "email": "student@email.com",
  "phone": "9876543210",
  "degree": "BTech",
  "university": "University Name",
  "internship": "Full Stack Java",
  "idPlan": "Standard ID Card"
}
```

**Response:**
```json
{
  "ok": true,
  "applicationId": "TDA-1234567890-ABC123",
  "paymentUrl": "https://yourdomain.com/payment?appId=TDA-1234567890-ABC123",
  "message": "Application received. Check your email for payment instructions."
}
```

### POST /api/create-order
Create Razorpay payment order

**Request:**
```json
{
  "applicationId": "TDA-1234567890-ABC123"
}
```

**Response:**
```json
{
  "ok": true,
  "orderId": "order_1234567890",
  "amount": 29900,
  "currency": "INR",
  "keyId": "rzp_live_xxx"
}
```

### POST /api/verify-payment
Verify Razorpay payment

**Request:**
```json
{
  "razorpay_order_id": "order_1234567890",
  "razorpay_payment_id": "pay_1234567890",
  "razorpay_signature": "signature_hash"
}
```

### GET /api/application/:applicationId
Get application status

**Response:**
```json
{
  "ok": true,
  "application": {
    "applicationId": "TDA-1234567890-ABC123",
    "name": "Student Name",
    "email": "student@email.com",
    "status": "payment_completed",
    "paymentStatus": "completed",
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

## Troubleshooting

### Email Not Sending
- Check Gmail app password is correct
- Enable "Less secure apps" if needed
- Check spam folder
- Verify SMTP_USER and SMTP_PASS in .env

### Payment Not Processing
- Verify Razorpay credentials (key and secret)
- Check environment is set to "production"
- Ensure Razorpay account is activated
- Check browser console for JavaScript errors

### Database Connection Failed
- Verify MongoDB URI is correct
- Check IP whitelist in MongoDB Atlas (add 0.0.0.0/0)
- Ensure DATABASE_NAME exists
- Test connection string manually

### Port Already in Use
- Change PORT in .env file
- Or kill existing process: `lsof -i :3000` then `kill -9 <PID>`

## Security Checklist

- [ ] Enable HTTPS/SSL certificate
- [ ] Use strong environment variables
- [ ] Enable MongoDB IP whitelist
- [ ] Set NODE_ENV=production
- [ ] Use secure passwords for all services
- [ ] Enable CORS only for your domain
- [ ] Implement rate limiting for API
- [ ] Regular database backups
- [ ] Monitor application logs
- [ ] Update dependencies regularly

## Performance Optimization

- MongoDB indexing on frequently queried fields
- Implement caching for static pages
- Use CDN for static assets
- Compress email attachments
- Batch process emails during off-peak hours

## Support & Documentation

- **Razorpay Docs:** https://razorpay.com/docs
- **MongoDB Atlas:** https://docs.atlas.mongodb.com
- **Node.js Docs:** https://nodejs.org/docs
- **Express.js:** https://expressjs.com

## License

This project is proprietary to The Developers Arena.

## Contact

For issues or support, contact: support@thedevelopersarena.com
