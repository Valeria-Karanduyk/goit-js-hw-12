import axios from 'axios';

export async function gettingData(inputSearch, pageGrowth = 1) {
  axios.defaults.baseURL = 'https://pixabay.com';

  const response = await axios
    .get('/api/', {
      params: {
        key: '46020847-b0dc78394505c5145868b7f5c',
        q: `${inputSearch}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: `${pageGrowth}`,
        per_page: 15,
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
  return response;
}
