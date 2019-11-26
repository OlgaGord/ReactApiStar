const getResDayPic = async (url2) => {
    const resResPicDay = await fetch(url2);
    if (!resResPicDay.ok) {
        throw new Error(`Can not fetch ${url2}` +
            `error ${resResPicDay.status}`)
    }


    const resultApiDayPic = await resResPicDay.json();
    return resultApiDayPic;
};
getResDayPic('https://api.nasa.gov/planetary/apod?api_key=yLdrlHcI879YU86fgDcpwxbUBHkbh5tobw26qvyF')
    .then((resultApiDayPic) => {
        console.log(resultApiDayPic);
    })
    .catch((error) => {
        console.error("Can not fetch", error);
    })

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

