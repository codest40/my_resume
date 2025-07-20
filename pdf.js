window.addEventListener('DOMContentLoaded', () => {
  const downloadBtn = document.getElementById('download-pdf');

  if (!downloadBtn) return;

  downloadBtn.addEventListener('click', () => {
    // --- DISABLED DOWNLOAD ---
    showToast("Download currently disabled.");
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
    background: red;
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

