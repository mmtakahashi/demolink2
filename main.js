window.addEventListener('DOMContentLoaded', ()=> {
    const container = document.querySelector('.snow-container');
  
    const createSnow = () => {
      const snowEl = document.createElement('span');
      snowEl.className = 'snow';
      const minSize = 10;
      const maxSize = 20;
      const size = Math.random() * (maxSize - minSize) + minSize;
      snowEl.style.width = `${size}px`;
      snowEl.style.height = `${size}px`;
      snowEl.style.left = Math.random() * 100 + '%';
      container.appendChild(snowEl);
  
      setTimeout(() => {
        snowEl.remove();
      }, 10000);
    }
  
    setInterval(createSnow, 100);
  });