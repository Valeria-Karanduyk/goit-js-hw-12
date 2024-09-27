import axios from 'axios';

export async function gettingData(inputSearch, pageGrowth = 1) {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '46020847-b0dc78394505c5145868b7f5c',
        q: inputSearch,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: pageGrowth,
        per_page: 15,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return error;
  }
}
