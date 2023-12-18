import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com"


const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/auto-complete/',
  params: {
    q: 'desp',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': 'bb84c6dce9mshdc4201acbba8b11p10160bjsn52ff36103fb2',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};
  

 export  const fetchDataFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  }