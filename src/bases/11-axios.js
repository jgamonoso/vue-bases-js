import axios from 'axios';

console.log('Inicio')

const apiKey = 'awopjL4O67ZztqyBCtvJ4W5XQkh215zm'
// https://api.giphy.com/v1/gifs/random?api_key=awopjL4O67ZztqyBCtvJ4W5XQkh215zm


const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

export default giphyApi

// giphyApi.get('/random')
//     .then( resp  => {

//         const { data } = resp.data
//         const { url } = data.images.original

//         const img = document.createElement('img')
//         img.src = url

//         document.body.append( img )
//     })
