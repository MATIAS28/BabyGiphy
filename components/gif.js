import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
export  const Gif =  (props) => {
  return(
        <>
  <li className='col'>
    <a href={props.l} target='_blanck' className="card">
    <Image
      src={props.gf}
      alt="Picture of the author"
      layout='fill'
    />
      <div className="card__overlay">
        <div className="card__header">                   
          <div className="card__header-text">
            <h3 className="card__title">{props.name}</h3>            
            <span className="card__status">{props.f}</span>
          </div>
        </div>
        <p className="card__description">{props.title}</p>
      </div>
    </a>      
  </li>

<style jsx>
{`

.card {
    position: relative;
    display: block;
    height: 200px;  
    border-radius: calc(var(--curve) * 1px);
    overflow: hidden;
    text-decoration: none;
    border: none;
    border-radius: 12px;
    }

    .card__image {      
    width: 100%;
    
    }

    .card__overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;      
    border-radius: calc(var(--curve) * 1px);    
    background-color: var(--surface-color);      
    transform: translateY(100%);
    transition: .2s ease-in-out;
    }

    .card:hover .card__overlay {
    transform: translateY(0);
    }

    .card__header {
    position: relative;
    display: flex;
    align-items: center;
    gap: 2em;
    padding: 2em;
    border-radius: calc(var(--curve) * 1px) 0 0 0;    
    background-color: var(--surface-color);
    transform: translateY(-100%);
    transition: .2s ease-in-out;
    }

    .card__arc {
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: 100%;
    right: 0;      
    z-index: 1;
    }

    .card__arc path {
    fill: var(--surface-color);
    d: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z");
    }       

    .card:hover .card__header {
    transform: translateY(0);
    }

    .card__thumb {
    flex-shrink: 0;
    width: 50px;
    height: 50px;      
    border-radius: 50%;      
    }

    .card__title {
    font-size: 1em;
    margin: 0 0 .3em;
    color: #6A515E;
    filter: invert(1);
    }

    .card__tagline {
    display: block;
    margin: 1em 0;
    font-family: "MockFlowFont";  
    font-size: .8em; 
    color: #D7BDCA;  
    }

    .card__status {
    font-size: .8em;
    color: #D7BDCA;
    }

    .card__description {
    padding: 0 2em 2em;
    margin: 0;
    color: #D7BDCA;
    font-family: "MockFlowFont";   
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    }    

    @media (max-width: 600px) {
      
      .card__header-text,
      .card__description{
        display: none;
      }

      #searchterm{
          width: 60%;
      }

      .li{
        width: 150px;
        height: 150px;
      }
      }

`}
</style>

  </>
)
}