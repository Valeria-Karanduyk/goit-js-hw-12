import { gettingData } from './js/pixabay-api.js';
import {
  renderData,
  galleryClear,
  loaderShow,
  loaderHide,
  loaderMore,
  loaderMoreHide,
  showMessage,
} from './js/render-functions.js';

const formFetch = document.querySelector('.formFetchEl');
const btnMorePosts = document.createElement('button');
btnMorePosts.classList.add('loader-more');
btnMorePosts.textContent = 'Load more';
btnMorePosts.style.display = 'none';
document.body.appendChild(btnMorePosts);

let inputSearch = '';
let pageGrowth = 1;
let totalHits = 0;

formFetch.addEventListener('submit', async event => {
  event.preventDefault();

  inputSearch = document.querySelector('input[name="search"]').value.trim();
  pageGrowth = 1;
  if (!inputSearch) {
    iziToast.error({
      title: 'Error',
      message: 'Search query cannot be empty.',
    });
    return;
  }

  galleryClear();
  loaderMoreHide();

  try {
    loaderShow();
    const data = await gettingData(inputSearch, pageGrowth);
    totalHits = data.totalHits;

    if (data.hits.length > 0) {
      renderData(data.hits);
      loaderMore();
    }

    if (data.hits.length < 15 || pageGrowth * 15 >= totalHits) {
      loaderMoreHide();
      showMessage();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  } finally {
    loaderHide();
  }
});

btnMorePosts.addEventListener('click', async () => {
  pageGrowth++;

  try {
    loaderShow();
    const data = await gettingData(inputSearch, pageGrowth);
    renderData(data.hits);

    if (pageGrowth * 15 >= totalHits) {
      loaderMoreHide();
      showMessage();
    }

    const gallery = document.querySelector('.gallery');
    const { height: cardHeight } =
      gallery.firstElementChild.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching <br> your search query. Please try again!',
    });
  } finally {
    loaderHide();
  }
});
