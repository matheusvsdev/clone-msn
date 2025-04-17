const openBtnMSN = document.getElementById("icon-msn");
const closeBtnMSN = document.querySelector(".fa-xmark");

const maximizeBtn = document.querySelector(".fa-window-maximize");
const loginContainer = document.getElementById("login-container");

const minimizeBtnMSN = document.querySelector(".fa-window-minimize");

const btnLogin = document.querySelector(".btn-login");
const windowContent = document.querySelector(".window-content");

function selectIcon() {
  openBtnMSN.classList.toggle("select");
}

function removeSelect(event) {
  if (!openBtnMSN.contains(event.target)) {
    openBtnMSN.classList.remove("select");
  }
}

function openMSN() {
  document.getElementById("login-container").classList.remove("hidden");
}

function closeMSN() {
  document.getElementById("login-container").classList.add("hidden");
}

function toggleFullscreen() {
  loginContainer.classList.toggle("fullscreen");
}

function adicionarNovoConteudo() {
  windowContent.innerHTML = `
      <h2>Bem-vindo ao MSN Messenger!</h2>
      <div id="contact-list">
        <p>Seus contatos aparecerão aqui...</p>
      </div>
    `; // Substitui o conteúdo da janela por novos elementos
}

openBtnMSN.addEventListener("click", selectIcon);
document.addEventListener("click", removeSelect);
openBtnMSN.addEventListener("dblclick", openMSN);
closeBtnMSN.addEventListener("click", closeMSN);
minimizeBtnMSN.addEventListener("click", closeMSN);
maximizeBtn.addEventListener("click", toggleFullscreen);
btnLogin.addEventListener("click", (event) => {
  event.preventDefault(); // Evita recarregar a página
  adicionarNovoConteudo(); // Adiciona nova tela ao clicar no botão
});
