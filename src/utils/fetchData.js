export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'dd3e196504mshf00dbceaf9e0423p1045f6jsnd1a24773a32a',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
  method: 'GET',
  
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'dd3e196504mshf00dbceaf9e0423p1045f6jsnd1a24773a32a',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
