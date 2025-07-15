document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('json/resume_data.json');
    const data = await response.json();
    console.log("Fetched resume data:", data);

    if (!data || typeof data !== 'object') throw new Error("Invalid JSON structure");

    renderHeader(data);
    renderSummary(data.summary);
    renderSkills(data.skills);
    renderExperience(data.experience);
    renderEducation(data.education);
    renderCertifications(data.certifications);
  } catch (err) {
    console.error("Failed to load resume data:", err);
  }
});

// ========== Render Functions ==========

function renderHeader(data) {
  const nameEl = document.getElementById('name');
  const titleEl = document.getElementById('title');
  const contactLinks = document.getElementById('contact-links');
  const contactMeta = document.getElementById('contact-meta');

  if (nameEl) nameEl.textContent = data.name || '';
  if (titleEl) titleEl.textContent = data.title || '';

  if (contactLinks && Array.isArray(data.contact_links)) {
    contactLinks.innerHTML = data.contact_links.map(link => `
      <a href="${link.href}" target="_blank">${link.label}</a>
    `).join(' | ');
  }

  if (contactMeta && data.contact_meta) {
    contactMeta.innerHTML = `
      <p>Mobile: ${data.contact_meta.mobile || ''} 
      <span>Location: ${data.contact_meta.location || ''}</span></p>`;
  }
}

function renderSummary(summary) {
  const el = document.getElementById('summary-text');
  if (el) el.textContent = summary || '';
}

function renderSkills(skills) {
  const container = document.getElementById('skills-container');
  if (!container || !Array.isArray(skills)) return;

  container.innerHTML = skills.map(skill => `
    <div class="skill-block">
      <h3>${skill.category}</h3>
      <ul>
        ${(skill.items || []).map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderExperience(experiences) {
  const container = document.getElementById('experience-container');
  if (!container || !Array.isArray(experiences)) return;

  container.innerHTML = experiences.map(job => `
    <div class="job-block">
      <h3>${job.role}</h3>
      <div class="job-details">${job.duration} | ${job.location}</div>
      <ul class="responsibilities">
        ${(job.responsibilities || []).map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderEducation(education) {
  const list = document.getElementById('education-list');
  if (!list || !Array.isArray(education)) return;

  list.innerHTML = education.map(item => `
    <li>
      <strong>${item.degree}</strong><br />
      ${item.institution ? `${item.institution}, ` : ''}${item.year}
    </li>
  `).join('');
}

function renderCertifications(certifications) {
  const list = document.getElementById('certification-list');
  if (!list || !Array.isArray(certifications)) {
    console.warn("Missing or invalid certifications data.");
    return;
  }

  list.innerHTML = certifications.map(cert => `<li>${cert}</li>`).join('');
}

