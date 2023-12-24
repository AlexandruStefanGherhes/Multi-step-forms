import { useState } from "react";
import { useContext } from "react";
import { CounterContext } from "../contexts/counteContext";
export const Sidebar = () =>{
    const {counter} = useContext(CounterContext)
    console.log(counter)
    const data = [
        {
            id: 1,
            step: "step 1",
            title: "your info",
        },
        {
            id: 2,
            step: "step 2",
            title: "select plan",
        },
        {
            id: 3,
            step: "step 3",
            title: "add-ons",
        },
        {
            id: 4,
            step: "step 4",
            title: "summary",
        },
    ];

    return(
        <div className="absolute top-0 left-0 sm:relative sm:w-fit sm:basis-[30%] w-[100vw] h-40 sm:h-[100%] sm:z-[0] z-[-10] bg-[url('./assets/bg-sidebar-mobile.svg')] bg-cover sm:bg-[url('./assets/bg-sidebar-desktop.svg')] sm:bg-center sm:rounded-lg flex sm:flex-col justify-center gap-10 sm:gap-4 sm:justify-start sm:p-10">
            {data.map((each,id)=>{
                return(
                <div className="flex items-center mb-12 sm:mb-0" key={id}>
                    <p className={`${counter === id ? "bg-neutral-magnolia text-black" : "bg-transparent text-white"} sm:pr-5 w-9 h-9 text-neutral-lightGray font-[500] rounded-full border-2 sm:mr-4 align-self-center flex p-2.5 items-center`}>{each.id}</p>
                    <div className="hidden sm:block">
                        <p className="uppercase text-neutral-coolGray text-[14px]">{each.step}</p>
                        <h4 className="uppercase text-neutral-lightGray font-[500] tracking-wider">{each.title}</h4>
                    </div>
                </div>
                )
            })}
            
            
        </div>
    )
}