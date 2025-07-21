// pdf.js

document.getElementById("download-pdf").addEventListener("click", function () {
  const resume = document.getElementById("resume-container");

  // Options for formatting
  const opt = {
    margin:       0.5,
    filename:     'Markam_DevOps_Resume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      scrollX: 0,
      scrollY: -window.scrollY
    },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  // Use html2pdf
  html2pdf().set(opt).from(resume).save();
});
