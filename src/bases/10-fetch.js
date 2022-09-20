

const apiKey = 'awopjL4O67ZztqyBCtvJ4W5XQkh215zm'
// https://api.giphy.com/v1/gifs/random?api_key=awopjL4O67ZztqyBCtvJ4W5XQkh215zm


console.log('Inicio')


fetch( `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}` )
    .then( resp => resp.json())
    .then( ({data}) => {
        const {url} = data.images.original
        console.log(url)

        const img = document.createElement('img')
        img.src = url
        document.body.append( img )
    })
    .catch ( err => {
        console.log(err)
    })
