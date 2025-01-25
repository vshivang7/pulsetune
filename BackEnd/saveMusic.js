const connectdb = require('./connectDb');
const Music = require('./Models/musicSchema');
const fetchData = async () => {
    let response = await fetch(`https://v1.nocodeapi.com/vshivang/spotify/dTkOvSBZSnjjGDpb/search?q=kk&type=track`)
    let data = await response.json();
    return data;
}

const saveMusic = async() => {
    await connectdb();
    let datas = await fetchData();
    datas = datas.tracks.items;
    // console.log(datas);
    for(let data of datas) {
        if(data.preview_url==null) continue;
        let m = new Music({
            image: data.album.images[0].url,
            song_name: data.name,
            artist: data.artists[0].name,
            url: data.preview_url,
        })
        console.log(m);
        await m.save();
    }
}

saveMusic()