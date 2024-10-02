import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a');

export const renderData = dataImgArr => {
  const gallery = document.querySelector('.gallery');

  if (dataImgArr.length === 0) {
    iziToast.show({
      message:
        'Sorry, there are no images matching <br> your search query. Please try again!',
      messageColor: '#000',
      messageSize: '18px',
      messageLineHeight: '20px',
      backgroundColor: 'rgb(255,153,102)',
      position: 'topRight',
      imageWidth: 30,
    });
    return;
  }

  const markup = dataImgArr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-list-item">
                    <a class="gallery-link" href="${largeImageURL}">
                        <img class="img" src="${webformatURL}" 
                        alt="${tags}" 
                        title="${tags}" />
                    </a>
                    <ul class="data-list">
                        <li class="data-item">
                            <p class="data-item-name">Likes</p>
                            <p class="data-numbers">${likes}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Views</p>
                            <p class="data-numbers">${views}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Comments</p>
                            <p class="data-numbers">${comments}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Downloads</p>
                            <p class="data-numbers">${downloads}</p>
                        </li>
                    </ul> 
          </li>`;
      }
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
};

export const galleryClear = () => {
  document.querySelector('.gallery').innerHTML = '';
};

export const loaderShow = () => {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.style.display = 'block';
  }
};

export const loaderHide = () => {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.style.display = 'none';
  }
};

export const loaderMore = () => {
  const loaderMoreBtn = document.querySelector('.loader-more');
  loaderMoreBtn.style.display = 'block';
};

export const loaderMoreHide = () => {
  const loaderMoreBtn = document.querySelector('.loader-more');
  loaderMoreBtn.style.display = 'none';
};

export const showMessage = () => {
  iziToast.show({
    message: "We're sorry, but you've reached the end of search results.",
    messageColor: '#000',
    messageSize: '18px',
    messageLineHeight: '20px',
    backgroundColor: 'rgb(37, 150, 190)',
    position: 'topRight',
    timeout: 5000,
  });
};
