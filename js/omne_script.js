// --- 1) Načíst motiv jako úplně první věc ---
const savedTheme = localStorage.getItem('theme');
document.documentElement.setAttribute('data-theme', savedTheme || 'light');


// --- 2) Zbytek tvého kódu ---

document.querySelector('.toggle-theme').addEventListener('click', () => {
    const html = document.documentElement;
    const isLight = html.getAttribute('data-theme') === 'light';
    const newTheme = isLight ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});


  // Blur sledující myš
  const blur = document.getElementById('cursor-blur');
  document.addEventListener('mousemove', (e) => {
    blur.style.left = e.clientX + 'px';
    blur.style.top = e.clientY + 'px';
  });
  