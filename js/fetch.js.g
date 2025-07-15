document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch("json/resume_data.json");
    const data = await res.json();

    renderHeader(data);
    renderSummary(data);
    renderSkills(data.skills);
    renderCertifications(data.certifications);
    renderEducation(data.education);
    renderExperience(data.experience);
  } catch (error) {
    console.error("Failed to load resume data:", error);
  }
});

// ---- RENDER FUNCTIONS ----

function renderHeader(data) {
  const header = document.getElementById("resume-header");
  header.innerHTML = `
    <h1>${data.name}</h1>
    <p>${data.title}</p>
  `;
}

function renderSummary(data) {
  const summary = document.getElementById("summary");
  summary.innerHTML = `<p>${data.summary}</p>`;
}

function renderSkills(skills) {
  const container = document.getElementById("skills");
  container.innerHTML = `<h2>Skills</h2>`;
  
  skills.forEach(group => {
    const groupEl = document.createElement("div");
    groupEl.classList.add("skill-group");

    const title = document.createElement("h3");
    title.textContent = group.group;
    groupEl.appendChild(title);

    const ul = document.createElement("ul");
    group.items.forEach(skill => {
      const li = document.createElement("li");
      li.textContent = skill;
      ul.appendChild(li);
    });

    groupEl.appendChild(ul);
    container.appendChild(groupEl);
  });
}

function renderCertifications(certs) {
  const container = document.getElementById("certifications");
  container.innerHTML = `<h2>Certifications</h2>`;
  
  const ul = document.createElement("ul");
  certs.forEach(cert => {
    const li = document.createElement("li");
    li.textContent = cert;
    ul.appendChild(li);
  });

  container.appendChild(ul);
}

function renderEducation(education) {
  const container = document.getElementById("education");
  container.innerHTML = `<h2>Education</h2>`;
  
  education.forEach(edu => {
    const degree = document.createElement("p");
    degree.innerHTML = `<strong>${edu.degree}</strong>`;
    
    const school = document.createElement("p");
    school.textContent = `${edu.institution}, ${edu.year}`;

    container.appendChild(degree);
    container.appendChild(school);
  });
}

function renderExperience(experience) {
  const container = document.getElementById("experience");
  container.innerHTML = `<h2>Experience</h2>`;

  experience.forEach(job => {
    const jobDiv = document.createElement("div");
    jobDiv.classList.add("job");

    jobDiv.innerHTML = `
      <h3>${job.title}</h3>
      <p><em>${job.period}</em></p>
    `;

    const ul = document.createElement("ul");
    job.responsibilities.forEach(task => {
      const li = document.createElement("li");
      li.textContent = task;
      ul.appendChild(li);
    });

    jobDiv.appendChild(ul);
    container.appendChild(jobDiv);
  });
}
