fetch('sentence.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('loadingText');

    // Shuffle and pick 3 sentences
    const shuffled = data.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    let index = 0;

    // Show first sentence immediately
    container.textContent = selected[index];

    // Rotate every 2 seconds
    const interval = setInterval(() => {
      index++;
      if (index < selected.length) {
        container.textContent = selected[index];
      } else {
        clearInterval(interval); // Stop after 3 sentences
      }
    }, 2000);
  })
  .catch(error => {
    console.error('Error loading sentences:', error);
    document.getElementById('loadingText').textContent = 'Preparing immersive experience...';
  });
