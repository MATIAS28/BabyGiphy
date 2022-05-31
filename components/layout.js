import Link from "next/link"
import { useState, useEffect } from "react"
import Head from "next/head"
export default function Layout (){

    const [search, setSearch] = useState('')
    return(
        <>
        
        <Head>
        <title>BabyGiphy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"/>
        </Head>

        <div className="bs">
        <Link href='/'>
            <h1>BabyGiphy</h1>
        </Link>    
        <div className="field" id="searchform">
        <input type="text" id="searchterm" onChange={(e) => setSearch(e.target.value)} placeholder="Busca un Gif" />
        <Link href={{ pathname: '/search', query: { s: search } }} >
        <button type="button" id="search">Buscar</button>
        </Link>
        </div>
        </div>
    
    
        <style jsx>
        {`
        
@font-face {
    font-family: 'Righteous-Regular';
    src: url('/f/Righteous-Regular.ttf');
    font-style: normal;
    font-weight: normal;
}

*{
font-family: 'Righteous-Regular', serif;
}

.bs{
    padding: 1.5rem;
    margin: 0px;
    background-color: #9933ff;
    box-shadow: 0px 2px 7px 0px #000000d4;
    margin-bottom: 4rem;
}

h1{
    display: flex;
    justify-content: center;
    color: white;
    margin-top: 4rem;
    cursor: pointer;
}

    body {
    background-color:#34495e;
    }

    .field {
    display:flex;
    position:realtive;
    margin: 0px auto;
    margin-bottom: 1rem;
    width:50%;
    flex-direction:row;
    box-shadow:
    1px 1px 0 rgb(22, 160, 133),
    2px 2px 0 rgb(22, 160, 133),
    3px 3px 0 rgb(22, 160, 133),
    4px 4px 0 rgb(22, 160, 133),
    5px 5px 0 rgb(22, 160, 133),
    6px 6px 0 rgb(22, 160, 133),
    7px 7px 0 rgb(22, 160, 133)
    ;
    }

    .field>input[type=text],
    .field>button {
    display:block;
    font:1.2em 'Montserrat Alternates';
    }

    .field>input[type=text] {
    flex:1;
    padding:0.6em;
    border:0.2em solid rgb(26, 188, 156);
    }

    .field>button {
    padding:0.6em 0.8em;
    background-color:rgb(26, 188, 156);
    color:white;
    border:none;
    }

        @media (max-width: 600px) {
            .field{
            width: 100%;
            display: flex;
            justify-content: center;
        }

        #searchterm{
            width: 60%;
        }
        }

        `}
        </style>
    </>
  )
}