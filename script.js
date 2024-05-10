window.addEventListener('load', function() {
    const heartsContainer = document.createElement('div');
    heartsContainer.className = 'hearts-container';
    document.body.appendChild(heartsContainer);
  
    for (let i = 0; i < 30; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * 100 + 'vw';
      heartsContainer.appendChild(heart);
    }
  });
  
  