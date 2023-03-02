

import giphyApi from './bases/11-axios'


const getImage = async () => {
    try {

        const { data } = (await giphyApi.get('/random')).data
        const { url } = data.images.original
        console.log(url);

        const img = document.createElement('img')
        img.src = url

        document.body.append( img )
        return 'Todo OK'

    } catch (error) {

        // console.log('error en la peticion', error.message)

        throw error.message

    }
}

getImage()
.then( valor => console.log( 'THEN exitoso', valor))
.catch( err => console.log( 'error:', err ))

