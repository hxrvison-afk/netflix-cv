document.querySelectorAll('.card .more').forEach(btn=>{
  btn.addEventListener('click', e=>{
    const card = btn.closest('.card');
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    card.toggleAttribute('open');
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
