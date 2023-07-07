export const exerciseOptions = {
  method: "GET",
 
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": '3c77e0271cmsh52b0f24b3f333e8p1e46d1jsn6a2680b160aa',
  },
};


export const youtubeOptions ={
  method: 'GET',
  headers: {
    'X-RapidAPI_Host' : 'youtube-search-and-download.p.rapidapi.com/',
    'X-RapidAPI-Key' : '3c77e0271cmsh52b0f24b3f333e8p1e46d1jsn6a2680b160aa',
  }
}

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
