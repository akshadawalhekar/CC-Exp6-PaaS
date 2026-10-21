document.getElementById("actionBtn").addEventListener("click", () => {
  const outputDiv = document.getElementById("output");
  const now = new Date();

  outputDiv.innerHTML = `
    <strong>Cloud Platform:</strong> AWS Amplify Hosting<br>
    <strong>Runtime:</strong> Managed Web Service<br>
    <strong>Client Timestamp:</strong> ${now.toLocaleString()}<br>
    <strong>Status:</strong> Continuous deployment configured successfully.
  `;
  outputDiv.classList.remove("hidden");
});