document.addEventListener("DOMContentLoaded", function () {
  const getStartedButton = document.querySelector(".get-started-button");
  const container = document.querySelector(".container");
  const content = document.querySelector(".content");
  const loginDetails = document.querySelector(".login-details");
  const loginForm = document.getElementById("login-form");
  const template2 = document.querySelector(".template-2");
  const continueButton = document.querySelector(".continue-button");
  const hospitalListContainer = document.querySelector(
    ".hospital-list-container"
  );
  const doctorListContainer = document.querySelector(".doctor-list-container");
  const slotListContainer = document.querySelector(".slot-list-container");
  const appointmentForm = document.querySelector(".appointment-form");
  const confirmationMessage = document.querySelector(".confirmation-message");
  const returnButton = document.querySelector(".return-button");

  getStartedButton.addEventListener("click", function () {
    container.removeChild(content);
    getStartedButton.style.display = "none";
    loginDetails.style.display = "block";
  });

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Simulate successful login
    container.style.display = "none";
    template2.style.display = "block";
    // Simulate successful login message
    document.querySelector(".success-message").style.display = "block";
  });

  continueButton.addEventListener("click", function () {
    // Hide success message
    document.querySelector(".success-message").style.display = "none";

    // Show hospital list
    hospitalListContainer.style.display = "block";
  });

  // Sample hospital data
  const hospitals = ["Hospital A", "Hospital B", "Hospital C", "Hospital D"];

  // Populate hospital list
  const hospitalList = document.querySelector(".hospital-list");
  hospitals.forEach(function (hospital) {
    const listItem = document.createElement("li");
    listItem.textContent = hospital;
    hospitalList.appendChild(listItem);
  });

  // Show doctor list when hospital is selected
  hospitalList.addEventListener("click", function (event) {
    const selectedHospital = event.target.textContent;
    doctorListContainer.style.display = "block";
    hospitalListContainer.style.display = "none"; // Hide hospital list
    // Sample doctor data
    const doctors = ["Dr. Smith", "Dr. Johnson", "Dr. Brown", "Dr. Taylor"];
    // Populate doctor list
    const doctorList = document.querySelector(".doctor-list");
    doctorList.innerHTML = ""; // Clear previous list
    doctors.forEach(function (doctor) {
      const listItem = document.createElement("li");
      listItem.textContent = doctor;
      doctorList.appendChild(listItem);
    });
  });

  // Show available slots when doctor is selected
  doctorListContainer.addEventListener("click", function (event) {
    const selectedDoctor = event.target.textContent;
    slotListContainer.style.display = "block";
    doctorListContainer.style.display = "none"; // Hide doctor list
    // Sample slot data
    const slots = [
      "Slot 1: 9:00 AM",
      "Slot 2: 10:00 AM",
      "Slot 3: 11:00 AM",
      "Slot 4: 12:00 PM"
    ];
    // Populate slot list
    const slotList = document.querySelector(".slot-list");
    slotList.innerHTML = ""; // Clear previous list
    slots.forEach(function (slot) {
      const listItem = document.createElement("li");
      listItem.textContent = slot;
      slotList.appendChild(listItem);
    });
  });

  // Show appointment form when slot is selected
  slotListContainer.addEventListener("click", function (event) {
    appointmentForm.style.display = "block";
    slotListContainer.style.display = "none"; // Hide slot list
  });

  // Show confirmation message when appointment is confirmed
  appointmentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    confirmationMessage.style.display = "block";
    appointmentForm.style.display = "none"; // Hide appointment form
  });

  // Return to starting template
  returnButton.addEventListener("click", function () {
    confirmationMessage.style.display = "none"; // Hide confirmation message
    container.style.display = "block";
    getStartedButton.style.display = "block";
  });
});
