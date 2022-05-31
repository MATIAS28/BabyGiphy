import 'bootstrap/dist/css/bootstrap.css'
import Footer from '../components/footer'
import Layout from '../components/layout'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return(
    <>
    <Layout/>
    <div className='container'>
    <Component {...pageProps} />
    </div>
    <Footer/>
    
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

    `}
    </style>


    </>
  )
}

export default MyApp
