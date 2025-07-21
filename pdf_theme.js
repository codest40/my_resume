// If resume is in darkm mode, throw light on texts and downlaod, else go direct

document.getElementById("download-pdf").addEventListener("click", function () {
  const resume = document.getElementById("resume-container");
  const savedTheme = localStorage.getItem("theme") || "light";

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

  // Inject high-contrast style ONLY if dark mode is active
  let darkPatchStyle = null;
  if (savedTheme === "dark") {
    darkPatchStyle = document.createElement("style");
    darkPatchStyle.id = "pdf-dark-patch";

    darkPatchStyle.innerHTML = `
      /* General override */
      #resume-container,
      #resume-container * {
        color: #ffffff !important;
        background-color: transparent !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }

      /* Specific Fixes for Top Header */
      #name, #title {
        color: #ffffff !important;
      }

      #contact-links a {
        color: #66ccff !important;
        text-decoration: none !important;
      }

      #contact-meta {
        color: #dddddd !important;
      }

      /* Summary Paragraph */
      #summary-text {
        color: #cccccc !important;
      }

      /* Headings */
      #resume-container h2,
      #resume-container h3 {
        color: #ffffff !important;
      }

      /* Body Text */
      #resume-container p,
      #resume-container li {
        color: #dddddd !important;
      }

      /* Links */
      #resume-container a {
        color: #66ccff !important;
      }

      /* Skill Blocks */
      .skill-block {
        border: 1px solid #444 !important;
        background-color: #1e1e1e !important;
      }

      .job-block {
        border: 1px solid #555 !important;
        background-color: #202020 !important;
      }

      /* Section Backgrounds */
      #skills, #experience, #edu-certs {
        background-color: #121212 !important;
      }
    `;

    // ✅ Append to document
    document.head.appendChild(darkPatchStyle);
  }

  // Small delay to let styles apply before capturing
  setTimeout(() => {
    html2pdf().set(opt).from(resume).save().then(() => {
      // Remove temporary patch after PDF is created
      if (darkPatchStyle) {
        document.head.removeChild(darkPatchStyle);
      }
    });
  }, 150);
});
