// Přepínání světlo/tma
document.querySelector('.toggle-theme').addEventListener('click', () => {
    const html = document.documentElement;
    const isLight = html.getAttribute('data-theme') === 'light';
    html.setAttribute('data-theme', isLight ? 'dark' : 'light');
  });

  // Blur sledující myš
  const blur = document.getElementById('cursor-blur');
  document.addEventListener('mousemove', (e) => {
    blur.style.left = e.clientX + 'px';
    blur.style.top = e.clientY + 'px';
  });
  