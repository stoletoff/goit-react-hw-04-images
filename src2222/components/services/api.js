import axios from 'axios';
const API = 'https://pixabay.com/api/';
export const findImages = async (value, page) => {
  try {
    const response = await axios.get(`${API}`, {
      params: {
        key: '35263263-87e16adcb3e852982f83f3522',
        q: value,
        lang: 'ru',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 12,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
