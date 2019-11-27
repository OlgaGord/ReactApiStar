

export default class ServicePicNasa {
    async getRes(url) {
        const getResPic = await fetch(url);
        if (!getResPic.ok) {
            throw new Error(`Can not fetch ${url}` +
                `error ${getResPic.status}`)
        }

        return await getResPic.json();
    };
    getPictOfDay() {
        return this.getRes('https://api.nasa.gov/planetary/apod?api_key=yLdrlHcI879YU86fgDcpwxbUBHkbh5tobw26qvyF');
    }

}
// const servPic = new ServicePicNasa();

// servPic.getRes('https://api.nasa.gov/planetary/apod?api_key=yLdrlHcI879YU86fgDcpwxbUBHkbh5tobw26qvyF').then((picture) => {

// })

// servPic.getRes('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=yLdrlHcI879YU86fgDcpwxbUBHkbh5tobw26qvyF')
//     .then((photos) => {

//     })

