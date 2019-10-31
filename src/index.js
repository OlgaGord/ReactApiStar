
const getAPIRes = async (url) => {
    const res = await fetch(url);
    const resultApi = await res.json();
    return resultApi;
};

getAPIRes('https://api.nasa.gov/planetary/apod?api_key=yLdrlHcI879YU86fgDcpwxbUBHkbh5tobw26qvyF')
    .then((resultApi) => {
        console.log(resultApi);
    });

