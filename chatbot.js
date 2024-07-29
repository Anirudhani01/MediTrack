
  
  function sendMessage() {
    const userText = document.getElementById('userInput').value.trim();
    const chatOutput = document.getElementById('chatOutput');
  
    if (userText === "") {
      chatOutput.innerHTML += "<div>You must enter a query.</div>";
      return;
    }
  
    chatOutput.innerHTML += `<div>You: ${userText}</div>`;
  
    
    if (userText.toLowerCase().includes("appointment.html")) {
      chatOutput.innerHTML += "<div>Chatbot: You can book, cancel or reschedule appointments from the 'Appointments' section.</div>";
    } else if (userText.toLowerCase().includes("lab test") || userText.toLowerCase().includes("results")) {
      chatOutput.innerHTML += "<div>Chatbot: You can view your lab test results by navigating to the 'Lab Test Results' section.</div>";
    } else if (userText.toLowerCase().includes("insurance")) {
      chatOutput.innerHTML += "<div>Chatbot: For insurance information and suggestions, please visit the 'Insurance Suggestions' section.</div>";
    } else {
      chatOutput.innerHTML += "<div>Chatbot: I'm not sure how to answer that. Can you please rephrase your question or contact our support for further assistance?</div>";
    }
  
    document.getElementById('userInput').value = '';
  }
  