export const spoiler = ():any => {
  document.querySelectorAll('.spoiler_action').forEach(btn => {
    btn.addEventListener('click', ()=> {
      const content = btn.nextElementSibling;
      const plus = content.nextElementSibling;
      plus.classList.toggle('rotate')
      btn.classList.toggle('active-button')
      content.style.maxHeight ? 
      content.style.maxHeight = null: 
        content.style.maxHeight = content.scrollHeight + "px";
    })
  })
}