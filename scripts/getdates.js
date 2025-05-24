// get current year
const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// get last modified date
document.getElementById("lastModified").textContent = `Last Modified ${document.lastModified}`;
