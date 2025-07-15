window.addEventListener('DOMContentLoaded', () => {
  const downloadBtn = document.getElementById('download-pdf');

  if (!downloadBtn) return;

  downloadBtn.addEventListener('click', () => {
    const element = document.getElementById('resume-wrapper');

    const opt = {
      margin:       [20, 20, 20, 20], // top, left, bottom, right in px
      filename:     'markam_resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  {
        scale: 2,
        useCORS: true,
        scrollX: 0,
        scrollY: -window.scrollY,
        windowWidth: document.documentElement.scrollWidth,
        windowHeight: document.documentElement.scrollHeight,
      },
      jsPDF: {
        unit: 'pt',
        format: 'a4',
        orientation: 'portrait',
      },
      pagebreak: {
        mode: ['css', 'legacy'], // support @media print and CSS rules
        avoid: ['.job', '.skill-group'] // avoid cutting jobs and skills mid-way
      }
    };

    window.scrollTo(0, 0); // make sure top is visible before capture

    html2pdf().set(opt).from(element).save();
  });
});

