import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Err() {
    const router =  useRouter()
    useEffect(() => {
        setTimeout(() =>{
            router.replace('/')
        }, 3000)
    })

    return(
        <>
        <div className="container h">
        <h1 className="text-danger">La pagina que solicitas no existe</h1>
        <h6>Seràs redirigido a la pagina principal</h6>
        </div>

        <style jsx>
        {`
            .h{
                height: 400px;
            }
        `}
        </style>
        </>
    )
}