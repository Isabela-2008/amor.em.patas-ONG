/* scripts.js - máscaras, menu, dropdown mobile, modal/toast e validação básica */

document.addEventListener('DOMContentLoaded', () => {
  // -----------------------
  // Máscaras simples (CPF, telefone, CEP)
  // -----------------------
  const cpf = document.getElementById('cpf');
  const telefone = document.getElementById('telefone');
  const cep = document.getElementById('cep');

  function maskCPF(v){
    return v.replace(/\D/g,'')
            .replace(/(\d{3})(\d)/,'$1.$2')
            .replace(/(\d{3})(\d)/,'$1.$2')
            .replace(/(\d{3})(\d{1,2})$/,'$1-$2')
            .slice(0,14);
  }

  function maskTel(v){
    return v.replace(/\D/g,'')
            .replace(/(\d{2})(\d)/,'($1) $2')
            .replace(/(\d{5})(\d)/,'$1-$2')
            .slice(0,15);
  }

  function maskCEP(v){
    return v.replace(/\D/g,'').replace(/(\d{5})(\d)/,'$1-$2').slice(0,9);
  }

  if(cpf){
    cpf.addEventListener('input', e => { e.target.value = maskCPF(e.target.value); });
  }
  if(telefone){
    telefone.addEventListener('input', e => { e.target.value = maskTel(e.target.value); });
  }
  if(cep){
    cep.addEventListener('input', e => { e.target.value = maskCEP(e.target.value); });
  }

  // -----------------------
  // Menu hambúrguer (toggle)
  // -----------------------
  const hamburgers = document.querySelectorAll('.hamburger');
  hamburgers.forEach(btn => {
    btn.addEventListener('click', () => {
      const menu = document.getElementById('main-menu');
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if(menu){
        menu.classList.toggle('show');
      }
    });
  });

  // -----------------------
  // Dropdown submenu accessible (mobile)
  // -----------------------
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(drop => {
    // on small screens, make the top link toggle submenu on click
    const link = drop.querySelector('a');
    const submenu = drop.querySelector('.submenu');
    if(!link || !submenu) return;

    link.addEventListener('click', (e) => {
      // If menu is visible (mobile), toggle submenu instead of navigating
      const menu = document.getElementById('main-menu');
      if(menu && window.getComputedStyle(menu).display !== 'flex' && window.innerWidth <= 768){
        e.preventDefault();
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      }
    });
  });

  // -----------------------
  // Form submit: simple validation, modal and toast
  // -----------------------
  const form = document.getElementById('cadastroForm');
  const modal = document.getElementById('modalSucesso');
  const fecharModal = document.getElementById('fecharModal');
  const toast = document.getElementById('toast');
  const formAlert = document.getElementById('formAlert');

  function showToast(message){
    if(!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(()=> toast.hidden = true, 250);
    }, 3000);
  }

  function openModal(){
    if(!modal) return;
    modal.setAttribute('aria-hidden','false');
    modal.style.display = 'flex';
    // focus management
    const focusable = modal.querySelector('button, [href], input, select, textarea');
    if(focusable) focusable.focus();
  }

  function closeModal(){
    if(!modal) return;
    modal.setAttribute('aria-hidden','true');
    modal.style.display = 'none';
  }

  // Basic validation helper
  function validateForm(formElement){
    let valid = true;
    const requireds = formElement.querySelectorAll('[required]');
    requireds.forEach(input => {
      input.classList.remove('input-invalid','input-valid');
      if(!input.value || input.value.trim() === ''){
        input.classList.add('input-invalid');
        valid = false;
      } else {
        input.classList.add('input-valid');
      }
    });
    return valid;
  }

  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      formAlert.hidden = true;

      const isValid = validateForm(form);
      if(!isValid){
        // show visual alert
        if(formAlert){
          formAlert.className = 'alert alert-error';
          formAlert.textContent = 'Por favor, preencha todos os campos obrigatórios corretamente.';
          formAlert.hidden = false;
        }
        return;
      }

      // show modal and toast
      openModal();
      showToast('Cadastro enviado com sucesso! 🐾');

      // optional: limpar o formulário depois de um tempo
      setTimeout(()=> {
        form.reset();
        // remove validation classes
        form.querySelectorAll('.input-valid').forEach(i => i.classList.remove('input-valid'));
      }, 1000);
    });
  }

  if(fecharModal){
    fecharModal.addEventListener('click', () => {
      closeModal();
    });
  }

  // close modal on ESC
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
      if(modal && modal.getAttribute('aria-hidden') === 'false'){
        closeModal();
      }
    }
  });

  // close modal when clicking outside content
  if(modal){
    modal.addEventListener('click', (e) => {
      if(e.target === modal){
        closeModal();
      }
    });
  }

  // Accessibility: ensure submenu closes when clicking elsewhere
  document.addEventListener('click', (e) => {
    const menus = document.querySelectorAll('.submenu');
    menus.forEach(sm => {
      const dropParent = sm.parentElement;
      if(!dropParent.contains(e.target) && window.innerWidth <= 768){
        sm.style.display = 'none';
      }
    });
  });

});
