// After last biometric success notification
function initiateFacialVerification() {
  // Blinking "Facial Verification Starting..." notification
  let blinkCount = 0;
  const blinkInterval = setInterval(() => {
    showNotification("Facial Verification Starting...", blinkCount % 2 === 0);
    blinkCount++;
    if(blinkCount >= 6) { // 3 blinks (on-off cycles)
      clearInterval(blinkInterval);
      showFailureScreen();
    }
  }, 500);
}

function showFailureScreen() {
  // Create red overlay
  const overlay = document.createElement('div');
  overlay.style = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(231, 76, 60, 0.85);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    color: white;
    text-align: center;
    padding: 20px;
    animation: blink 2s;
  `;
  
  overlay.innerHTML = `
    <img src="Genesislogo.png" style="width: 80px; margin-bottom: 20px;">
    <h2 style="margin-bottom: 10px;">FACIAL VERIFICATION PROCESSES FAILED</h2>
    <p style="margin-bottom: 20px; font-family: monospace; font-size: 18px;">
      cOnTaCt FaCiAl VeRiFicAtIoN dEpArTmEnT
    </p>
    <p style="font-size: 16px;">
      • You are only required to pay the SuM of $250 (USD)..<br>
      report if you're told to pay more than $250
    </p>
  `;
  
  document.body.appendChild(overlay);
  
  // Start blinking after 2 seconds
  setTimeout(() => {
    overlay.style.animation = "blink 1s infinite";
    
    // Optional: Add fast consecutive blinking later
    setTimeout(() => {
      overlay.style.animation = "fastBlink 0.3s infinite";
    }, 4000);
  }, 2000);
}

// CSS for blinking effect
const style = document.createElement('style');
style.textContent = `
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
  @keyframes fastBlink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;
document.head.appendChild(style);