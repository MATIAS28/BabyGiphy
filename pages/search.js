import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Gif } from '../components/gif'

export default function Search(){
    const router  = useRouter()
    const search = router.query.s
    const [gifsF, setGifsF] = useState([])
    
    useEffect(() => {
        async function gifSearch(){
            const gifS = await axios.get('https://api.giphy.com/v1/gifs/search?api_key=QuzfUtrhbv5hUDJ5MrKEwRZDYQhmwJ4S&q='+search+'&limit=12&offset=0&rating=g&lang=es')
            const gifs = gifS.data.data
            if (gifs.length === 0) {
              setGifsF(false)
            }else{
              setGifsF(gifs)
            }
        }
     gifSearch()   
    }, [search])

    
    return(
    <>      
      <ul className="cards">
      
      {gifsF === false ?
        (<h1>no se encontraron resultados para {search} </h1>)
        :
        gifsF.map((gif, i) => {
          return(
            <Gif key={i} name={gif.username} f={gif.import_datetime} w={gif.images.fixed_height.width} h={gif.images.fixed_height.height} title={gif.title} gf={gif.images.fixed_height.url} l={gif.url}/>
          )
        })
      }
      </ul>
      <style jsx>
      {`
      :root {
            --surface-color: #fff;
            --curve: 40;
          }

          * {
            box-sizing: border-box;
          }
          .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin: 4rem 5vw;
            padding: 0;
            list-style-type: none;
          }
      `}
      </style>
    </>
    )
}

