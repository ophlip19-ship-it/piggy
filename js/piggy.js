const harmMenu = document.querySelector('.harm-menu');
const offscreenMenu = document.querySelector('.off-screenMenu');
harmMenu.addEventListener ('click', () =>{
    harmMenu.classList.toggle('active');
    offscreenMenu.classList.toggle('active');
})
