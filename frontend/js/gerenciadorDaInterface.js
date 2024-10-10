import api from "./api.js";
import usuarioLogado from "./usuarioLogado.js";

const rota = "http://localhost:3000/uploads/";

class gerenciadorDaInterface {
  async renderizarTodosOsVideos() {
    try {
      const videos = await api("videos");

      const videosArea = document.querySelector(".videos__area");

      for (const video of videos) {
        const canal = await api(`canais/${video.canalID}`);

        videosArea.innerHTML += `
          <div class="video__container">
            <img
              class="video__thumbnail"
              src="${rota + video.imagem}"
              alt="Thumb do ${video.titulo}"
            />
            <div class="video__info">
              <img
                class="channel__avatar"
                src="./images/main/profile-youtube.svg"
                alt="Avatar do ${canal.nome}"
              />
              <div class="video__details">
                <h2>${video.titulo}</h2>
                <span>
                  ${canal.nome}
                  <img
                    class="verified__icon"
                    src="./images/main/check-circle.svg"
                    alt="Verificado"
                  />
                </span>
                <p>${video.descricao}</p>
              </div>
              <button class="options__button">
                <img src="./images/main/options.svg" alt="Ícone de opções" />
              </button>
            </div>
          </div>
        `;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async renderizarIncricoesDoUsuario() {
    try {
      const usuario = await usuarioLogado;
      const canais = await api(`usuarios/${usuario.id}/canais`);

      const ulArea = document.querySelector("#incricoesArea");

      for (const canal of canais) {
        ulArea.innerHTML += `
          <li>
            <a href="/">
              <img src="${canal.imagem}" alt="Canal ${canal.nome}" />
              ${canal.nome}
            </a>
          </li>
        `;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async renderizarFotoDePefilNoHeader() {
    const usuario = await usuarioLogado;

    const fotoDePerfilArea = document.querySelector("#fotoDePerfil");
    fotoDePerfilArea.innerHTML = `
      <img
        class="perfil__photo"
        src=${`http://localhost:3000/uploads/${usuario.imagem}`}
        alt="Foto do ${usuario.nome}"
      />
    `;
  }
}

export default new gerenciadorDaInterface();
