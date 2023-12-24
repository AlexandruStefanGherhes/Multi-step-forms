import { useContext } from "react";
import thanks from "../assets/icon-thank-you.svg"
 const Thanks = () =>{
    return(
        <div className="sm:basis-[60%] w-[300px] sm:w-[100%] h-[100%] sm:pr-[80px] flex flex-col justify-center items-center">
            <img className="h-[80px] w-[80px]" src={thanks} alt="" />
            <h1 className="mt-10 text-3xl font-[800] mb-2 text-primary-marineBlue">
                Thank you!
            </h1>
            <p className="text-neutral-coolGray mt-3 text-center">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
        </div>
    )
}

export default Thanks