import { movies } from './data.js';

// Exibe a lista de vídeos por categoria
movies.forEach(video => {
  const item = generateVideoItem(video);
  document.getElementById(video.category).appendChild(item);
});

// Adiciona click event para abrir os vídeos
document.querySelectorAll('.video-title').forEach(video => {
  video.addEventListener('click', () => showVideoPlayer(video.dataset.url));
});

document.getElementById('watch-button').addEventListener('click', () => {
  showVideoPlayer('https://www.youtube.com/embed/7OWT3lfHYvE');
});

// Limpa player de vídeo ao ocultar modal
document.addEventListener('hidden.bs.modal', () => {
  document.getElementById('video-player').innerHTML = '';
});

function generateVideoItem(video) {
  const div = document.createElement('div');
  div.classList.add('video');
  div.innerHTML = `
    <img class="w-100" src="${video.img}" alt="Thumbnail ${video.title}">
    <p class="video-title m-0 pb-4 px-2" data-url="${video.link}">
      <img src="./assets/images/play-circle.svg" class="my-1" width="40" alt="Play">
      <span class="align-self-center">${video.title}</span>
    </p>
  `;

  const col = document.createElement('div');
  col.classList.add('col-12', 'col-sm-6', 'col-lg-3', 'mb-3');
  col.appendChild(div);
  return col;
}

function showVideoPlayer(url) {
  const videoModal = new bootstrap.Modal(document.getElementById('video-modal'));
  videoModal.show();

  document.getElementById('video-player').innerHTML = `
    <iframe src="${url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  `;
}