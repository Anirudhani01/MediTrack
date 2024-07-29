document.addEventListener('DOMContentLoaded', function () {

    const storedData = localStorage.getItem('appointmentData');

    if (storedData) {
        const appointmentData = JSON.parse(storedData);
        displayAppointmentData(appointmentData);
    } else {
        document.getElementById('appointmentDetails').innerHTML = 'No appointment data found.';
    }
});

function displayAppointmentData(data) {
    const displayContainer = document.getElementById('appointmentDetails');
    const htmlContent = `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Phone No.:</strong> ${data.phone}</p>
      <p><strong>Gender:</strong> ${data.gender}</p>
      <p><strong>Specialty:</strong> ${data.specialty}</p>
      <p><strong>Date:</strong> ${data.date}</p>
      <p><strong>Time:</strong> ${data.time}</p>
    `;
    displayContainer.innerHTML = htmlContent;
}
