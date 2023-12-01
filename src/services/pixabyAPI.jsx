import axios from 'axios';

const baseURL =
  'https://pixabay.com/api/?key=39840691-deed82df9d56c5b25606cb90f';

export default async function getItems(querry) {
  const url = `${baseURL}&q=${querry}s&image_type=photo&orientation=horizontal&per_page=12`;
  const response = await axios.get(url);

  return response;
}
