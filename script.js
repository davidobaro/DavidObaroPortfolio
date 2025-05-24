function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const projectDescriptions = {
  0: `Designed and implemented a Python-based analysis tool to evaluate 200+ Pittsburgh neighborhoods using public health and safety data from the Western Pennsylvania Regional Data Center. 
  Processed datasets on housing quality, arrest rates, and median age at death to engineer features and calculate composite scores. Automated data cleaning, normalization, and ranking using pandas and NumPy. 
  Delivered visual insights and scoring logic to support data-driven decision-making for community evaluation.`,
  1: `Built an iOS kiosk app for university CECs to streamline visitor
  check-ins. 
  Developed the frontend in SwiftUI and helped build REST
  APIs with Flask. 
  Used PostgreSQL for data storage and deployed the
  full stack on Heroku. 
  Collaborated in a team setting, focusing on
  clean UI and reliable backend integration.`,
  2: `Developed a classic Snake game in MIPS assembly using the MARS
  simulator. 
  Implemented real-time keyboard input, dynamic screen
  rendering, and game logic entirely at the instruction level.
  Demonstrated proficiency in low-level programming, memory
  management, and system I/O operations.`,
  3: `Developed a C program that hides and extracts secret messages in
  .bmp image files using least significant bit (LSB) encoding.
  Implemented custom file parsing, bitwise data manipulation, and
  message recovery without altering the image’s appearance.
  Showcases skills in low-level systems programming, file I/O, and
  binary operations.`,
  4: `Collaborated with a partner to implement a sample rental system using Test Driven Development (TDD) principles and employing concepts from the SDLC.
Developed and wrote unit tests for the classes using JUnit and Mockito, ensuring a 90% coverage for the codebase.`,
  5: `The Stock Portfolio Tracker is a full-stack web application designed to provide users with real-time and historical stock market insights. Built using Flask for the backend and Streamlit for the frontend, the app integrates both Finnhub and Yahoo Finance APIs to deliver comprehensive and reliable stock data across thousands of symbols. The application features interactive dashboards powered by Plotly, allowing users to explore price trends, trading volumes, and technical indicators for informed decision-making. It also includes robust error handling, secure API key management, and CI/CD pipelines for seamless deployment on Render (backend) and Streamlit Cloud (frontend).
`,
  6: `----`,
  7: `----`,
  8: `----`,
};

function openModal(index) {
  document.getElementById("modal-text").innerText = projectDescriptions[index];
  document.getElementById("project-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("project-modal").style.display = "none";
}
