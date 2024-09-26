import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { gettingData } from './js/pixabay-api.js';
import { renderData } from './js/render-functions.js';

import iconUrl from './img/error.svg';

const bodySelect = document.querySelector('body');
const firstHtml = `<div class="container">
    <form class="formFetchEl">
		<input type="text" class="search-input" name="search" />
		<button type="submit" class="btnEl">Search</button>
    </form>
    <span class="loader">Loading</span>
	  <ul class="galleryEl"></ul>
      <span class="loader-more">Loading</span>
      <button type="button" class="btnMorePostsEl">Load more</button>
</div>`;

bodySelect.insertAdjacentHTML('afterbegin', firstHtml);

const loader = document.querySelector('.loader');
const loaderMore = document.querySelector('.loader-more');
const btnMorePosts = document.querySelector('.btnMorePostsEl');
const input = document.querySelector('.search-input');

loader.style.display = 'none';
loaderMore.style.display = 'none';
btnMorePosts.style.display = 'none';

let gallery = new SimpleLightbox('.galleryEl a', {
  caption: true,
  captionDelay: 250,
  captionsData: 'alt',
});

const gettingUserForm = document.querySelector('.formFetchEl');
const userList = document.querySelector('.galleryEl');
let pageGrowthJs = 1;
let inputSearchListener;

async function addImage(InputSearch, pageGrowthJs, eventCome) {
  const comingsImg = await gettingData(InputSearch, pageGrowthJs);
  try {
    if ('message' in comingsImg) {
      throw comingsImg.message;
    } else if (comingsImg.hits.length === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching <br> your search query. Please try again!',
        messageColor: '#000',
        messageSize: '18px',
        messageLineHeight: '20px',
        backgroundColor: 'rgb(255,153,102)',
        position: 'topRight',
        iconUrl: iconUrl,
        imageWidth: 30,
      });
      const iziToastElStyle = document.querySelector('.iziToast');
      iziToastElStyle.style.borderRadius = '10px';
      iziToastElStyle.style.overflow = 'hidden';
      const iziToastImgStyle = document.querySelector('.iziToast-wrapper');
      iziToastImgStyle.style.backgroundColor = 'transparent';
      iziToastImgStyle.style.left = '10px';

      btnMorePosts.style.display = 'none';
    } else {
      if (eventCome?.type === 'submit') {
        loader.style.display = 'block';
      } else {
        loaderMore.style.display = 'block';
      }
      renderData(comingsImg.hits, userList);
      if (eventCome?.type === 'submit') {
        btnMorePosts.style.display = 'block';
      }

      const li = userList.querySelectorAll('li');
      if (comingsImg.totalHits <= li.length) {
        btnMorePosts.style.display = 'none';
        iziToast.show({
          message: "We're sorry, but you've reached the end of search results.",
          messageColor: '#000',
          messageSize: '18px',
          messageLineHeight: '20px',
          backgroundColor: 'rgb(37, 150, 190)',
          position: 'topRight',
          timeout: 5000000,
        });
        const iziToastElStyle = document.querySelector('.iziToast');
        iziToastElStyle.style.borderRadius = '10px';
        iziToastElStyle.style.overflow = 'hidden';
        const iziToastEl = document.querySelector('.iziToast-wrapper');
        iziToastEl.style.position = 'fixed';

        if (eventCome?.type === 'submit') {
          loader.style.display = 'none';
          loaderMore.style.display = 'none';
        } else {
          loaderMore.style.display = 'none';
        }
        return;
      }

      gallery.refresh();

      function loadImage(img) {
        return new Promise((resolve, reject) => {
          img.onload = () => resolve(img);
          img.onerror = () =>
            reject(new Error(`Failed to load image: ${img.src}`));
        });
      }

      const images = userList.querySelectorAll('img');

      const imagesToLoad = Array.from(images).slice(-15);

      const imagePromises = imagesToLoad.map(loadImage);

      Promise.all(imagePromises)
        .then(() => {
          loader.style.display = 'none';
          loaderMore.style.display = 'none';
        })
        .catch(error => {
          console.error('Error loading images:', error);
        });
    }
  } catch (error) {
    loader.style.display = 'none';
    loaderMore.style.display = 'none';
    btnMorePosts.style.display = 'none';
    iziToast.show({
      message: `Sorry, ${error}. Please try again!`,
      messageColor: '#000',
      messageSize: '18px',
      messageLineHeight: '20px',
      backgroundColor: 'rgb(255,153,102)',
      position: 'topRight',
    });

    const iziToastElStyle = document.querySelector('.iziToast');
    iziToastElStyle.style.borderRadius = '10px';

    const iziToastEl = document.querySelector('.iziToast-wrapper');
    iziToastEl.style.position = 'fixed';
    iziToastElStyle.style.overflow = 'hidden';
  }
}

gettingUserForm.addEventListener('submit', event => {
  event.preventDefault();
  userList.innerHTML = '';

  pageGrowthJs = 1;
  inputSearchListener = event.currentTarget.elements.search.value
    .toLowerCase()
    .trim();

  if (!inputSearchListener) {
    btnMorePosts.style.display = 'none';
    return;
  }
  addImage(inputSearchListener, pageGrowthJs, event);
  pageGrowthJs++;
});

btnMorePosts.addEventListener('click', async event => {
  pageGrowthJs++;

  if (!inputSearchListener) {
    return;
  }
  await addImage(inputSearchListener, pageGrowthJs);

  const elem = document.querySelector('.gallery-list-item');

  if (elem) {
    const rect = elem.getBoundingClientRect().height * 2;

    window.scrollBy({
      top: rect,
      behavior: 'smooth',
    });
  }
});
