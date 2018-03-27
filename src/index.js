import PDFDocument from 'pdfkit'
import blobStream from 'blob-stream';

const doc = new PDFDocument();
const stream = doc.pipe(blobStream());
stream.on('finish', () => {
  const blob = stream.toBlob('application/pdf');

  const anchor = document.createElement('a');
  document.body.appendChild(anchor);
  anchor.style = 'display: none';
  const url = window.URL.createObjectURL(blob);
  anchor.href = url;
  anchor.download = 'pdfkit-and-webpack.pdf';
  anchor.click();
  window.URL.revokeObjectURL(url);
})

doc.fontSize(25).text('Some text with an embedded font!', 100, 100);

doc.moveTo(100, 150).lineTo(100, 250).lineTo(200, 250).fill('#f00');

doc.end();

