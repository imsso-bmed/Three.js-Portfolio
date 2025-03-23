const projects = [
    { title: "Water Ripple Shader", url: "https://project1-yourname.vercel.app", thumbnail: "thumbnails/project1.jpg", description: "A wavy water surface effect." },
    // 이후 프로젝트 추가
  ];
  
  const projectGrid = document.getElementById("project-grid");
  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <img src="${project.thumbnail}" alt="${project.title}">
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <a href="${project.url}" target="_blank">View Project</a>
    `;
    projectGrid.appendChild(card);
  });