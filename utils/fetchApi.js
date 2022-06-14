import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': 'c317e6e466msh8f72351435fd2efp172c94jsn419f32c41644',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  })

  return data;
}