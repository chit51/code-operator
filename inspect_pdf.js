const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

async function inspect() {
  const pdfBytes = fs.readFileSync('Code_Operators_Offer_Letter_v3.pdf');
  const pdfDoc = await PDFDocument.load(pdfBytes);
  
  const form = pdfDoc.getForm();
  const fields = form.getFields();
  console.log('Form Fields:', fields.map(f => f.getName()));
}

inspect().catch(console.error);
