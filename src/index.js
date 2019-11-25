
const getAPIRes = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Can not fetch ${url}` +
            `error ${res.status}`)
    }


    const resultApi = await res.json();
    return resultApi;
};

getAPIRes('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=yLdrlHcI879YU86fgDcpwxbUBHkbh5tobw26qvyF')
    .then((resultApi) => {
        console.log(resultApi);
    })
    .catch((error) => {
        console.error("Can not fetch", error);
    })

