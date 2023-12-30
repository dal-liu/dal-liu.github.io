document.querySelector('.arrow-down').addEventListener('click', (e) => {
  e.preventDefault();
  const info = document.querySelector('#info');

  if (info) {
    window.scrollTo({
      top: info.offsetTop,
      behavior: 'smooth',
    });
  }
});
