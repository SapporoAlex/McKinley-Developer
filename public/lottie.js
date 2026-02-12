const anim = lottie.loadAnimation({
  container: document.getElementById('lottie_opening'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'opening.json'
});

// Force SVG to stretch to fill container
anim.addEventListener('DOMLoaded', function() {
  const svg = document.querySelector('#lottie_opening svg');
  if (svg) {
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.style.width = '100%';
    svg.style.height = '100vh';
    svg.style.minWidth = '100%';
    svg.style.minHeight = '100vh';
  }
});
