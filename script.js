function filterProjects() {
  const filterInput = document
    .getElementById("filter-input")
    .value.toLowerCase();
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    const technology = project.dataset.technology.toLowerCase();
    if (technology.includes(filterInput)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}
