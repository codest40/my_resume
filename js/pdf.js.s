window.addEventListener('DOMContentLoaded', () => {
  const downloadBtn = document.getElementById('download-pdf');

  if (!downloadBtn) return;

  downloadBtn.addEventListener('click', () => {
    // --- TEMP DISABLE PDF GENERATION ---
    showToast("Download currently disabled.");  // 👈 toast message
    return;

    /*
    const element = document.getElementById('resume-wrapper');

    const opt = {
      margin:       [20, 20, 20, 20],
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
        mode: ['css', 'legacy'],
        avoid: ['.job', '.skill-group']
      }
    };

    window.scrollTo(0, 0);
    html2pdf().set(opt).from(element).save();
    */
  });
});

// ===== Simple Toast Function =====
function showToast(message, duration = 3000) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    background: #333;
    color: #fff;
    padding: 12px 20px;
    border-radius: 6px;
    font-size: 14px;
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.3s ease;
  `;
  document.body.appendChild(toast);
  setTimeout(() => (toast.style.opacity = 1), 100); // fade in
  setTimeout(() => {
    toast.style.opacity = 0; // fade out
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

