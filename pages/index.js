import { Gif } from '../components/gif'

export default function Home({data}) {
  const Gifs = data.data

  return (
    <>        
<ul className="cards">
  {
  Gifs.map((gif, i) => {
    return(
     <Gif key={i} name={gif.username} f={gif.import_datetime} w={gif.images.fixed_height.width} h={gif.images.fixed_height.height} title={gif.title} gf={gif.images.fixed_height.url} l={gif.url} />
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


export async function getServerSideProps() {
  const res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=QuzfUtrhbv5hUDJ5MrKEwRZDYQhmwJ4S&limit=12&rating=g`)
  const data = await res.json()

  return { props: { data } }
}
