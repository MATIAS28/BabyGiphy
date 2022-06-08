export default function Footer (){
    return(
        <>
        <div className="footer-basic">
        <footer>
            <div className="social">
            <a target="_blanck" href="https://www.linkedin.com/in/matias-mu%C3%B1oz-00a7581b6/">
            <i className="icon ion-social-linkedin-outline"></i>
            </a>
            <a target="_blanck" href="https://www.instagram.com/mati.kbn/">
            <i className="icon ion-social-instagram"></i>
            </a>
            <a target="_blanck" href="https://github.com/MATIAS28">
            <i className="icon ion-social-github"></i>
            </a>
            </div>
            <h6 className="text-center gmail">matiasmunoz.dev@gmail.com</h6>
            <p className="copyright">Matias Muñoz © 2022</p>
        </footer>
        </div>

        <style jsx>
        {`
        .footer-basic {
            padding:40px 0;
            background-color: #ffff;;
            color:#4b4c4d;
            }

            .footer-basic .social {
            text-align:center;
            padding-bottom:25px;
            }

            .footer-basic .social > a {
            font-size:24px;
            width:40px;
            height:40px;
            line-height:40px;
            display:inline-block;
            text-align:center;
            margin:0 8px;
            color:inherit;
            opacity:0.75;
            }

            .footer-basic .social > a:hover {
            opacity: 1;
            }

            .footer-basic .copyright {
            margin-top:15px;
            text-align:center;
            font-size:13px;
            color:#aaa;
            margin-bottom:0;
            }
            
            .ion-social-linkedin-outline{
                color: #0a66c2;
            }

            .ion-social-github{
                color: black;
            }

            .ion-social-instagram{
                color: #b7279a;
            }

            .gmail{
                color: gray;
                font-weight: 450;
            }
        `}
        </style>
        </>
    )    
}
