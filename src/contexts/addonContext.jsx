import { createContext, useState } from "react";

export const AddonContext = createContext()

export const AddonProvider = ({children}) =>{
    const [addons,setAddons] = useState([
        {
            id:1,
            title:"Online Service",
            info:"Access to multiplayer games",
            price:1
        },
        {
            id:2,
            title:"Larger Storage",
            info:"Extra 1TB of cloud storage",
            price:2
        },
        {
            id:3,
            title:"Customizable Profile",
            info:"Custom theme on your profile",
            price:2
        }
    ])

    const [selectedAddon,setSelectedAddon] = useState([])
    return(
        <AddonContext.Provider value={{
            addons,
            setAddons,
            selectedAddon,
            setSelectedAddon
        }}>
            {children}
        </AddonContext.Provider>
    )
}