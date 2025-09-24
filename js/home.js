import { movies } from './data.js';

movies.forEach(video  => {
  const div = document.createElement('div');
  div.classList.add('video');
  div.innerHTML = `
    <img class="w-100" src="${video.img}" alt="Thumbnail ${video.title}">
    <p class="video-title m-0 pb-4 px-2" data-url="${video.link}">
      <img src="./assets/images/play-circle.svg" class="my-1" width="40" alt="Play">
      <span>${video.title}</span>
    </p>
  `;

  const col = document.createElement('div');
  col.classList.add('col-12', 'col-sm-6', 'col-lg-3', 'mb-3');
  col.appendChild(div);
  document.getElementById(video.category).appendChild(col);
});