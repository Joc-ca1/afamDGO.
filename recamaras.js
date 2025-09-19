// Funcionalidad del modal
function openModal(title, imageSrc, type, description) {
    document.getElementById('modal').classList.add('active');
    document.getElementById('modal-image').src = imageSrc;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-type').textContent = type;
    document.getElementById('modal-description').textContent = description;
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

// Cerrar modal al hacer clic fuera de él
document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

//filto 
function filterByMuebleria(nombre) {
  const productos = document.querySelectorAll('.muebleria');

  productos.forEach(producto => {
    const textos = producto.querySelectorAll('.info p');
    let perteneceAMuebleria = false;

    textos.forEach(p => {
      if (p.textContent.toLowerCase().includes(nombre.toLowerCase())) {
        perteneceAMuebleria = true;
      }
    });

    if (nombre === 'todos' || perteneceAMuebleria) {
      producto.style.display = 'block';
    } else {
      producto.style.display = 'none';
    }
  });
}



// Funcionalidad del header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('mobileNav').classList.toggle('active');
});