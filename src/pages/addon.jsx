import { useContext, useState } from "react";
import { useNavigate, useNavigationType } from "react-router-dom";
import { AddonContext } from "../contexts/addonContext";
import { CounterContext } from "../contexts/counteContext";
const Addon = () =>{
    const navigate = useNavigate()
    const {addons} = useContext(AddonContext)
    const {setSelectedAddon} = useContext(AddonContext)
    const {selectedAddon} = useContext(AddonContext)
    const [num,setNum] = useState(0)
    const [addonAlert,setAddonAlert] = useState(false)
    const {counter,setCounter} = useContext(CounterContext)

    const onChange = (id)=>{
        const selectedItem = addons[id]
        setSelectedAddon(prev=>{
            const exists = prev.some(item=>item.id === selectedItem.id)
            if (exists){
                return prev.filter(item=>item.id !== selectedItem.id)
            }else{
                return [...prev,selectedItem]
            }
        })
        setNum(id + 1)
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        if(selectedAddon.length !== 0){
            navigate("/summary")
            setCounter(counter + 1)
        }else{
            setAddonAlert(true)
            setTimeout(()=>setAddonAlert(false),3000)
        }
    }
    return(
        <form className="sm:basis-[60%] w-[300px] sm:w-[100%] h-[auto] sm:pr-[80px] mb-16" onSubmit={onSubmit}>
            <div className="mb-6">
                <h1 className="sm:mt-10 mt-1 text-2xl md:text-3xl font-[800] mb-2 text-primary-marineBlue">Pick add-ons</h1>
                <h4 className="text-neutral-coolGray ">Add-ons help enhance your gaming experience</h4>
                {/* <p className={`${addonAlert ? "block" : "hidden"} text-primary-strawberryRed pt-2`}>Please select an addon before continuing</p> */}
            </div>
            <div className="flex flex-col gap-2">
                {addons.map((addon,id)=>{
                    return (
                        <div className={`${
                            num != id + 1 ? "bg-white" : "bg-primary-lightBlue"
                        } border-2 ${
                            num != id + 1
                            ? "border-neutral-lightGray"
                            : "border-primary-purplishBlue"
                        } rounded-md flex items-center justify-between p-4 cursor-pointer transition-all duration-300 hover:border-primary-purplishBlue`} key={id} >
                            <input 
                            className="h-5 w-5 cursor-pointer"
                            type="checkbox" 
                            onChange={()=>onChange(id)} 
                            value={addon.title}/>
                            <div className="flex flex-col ml-3">
                                <h4 className="font-[800] text-primary-marineBlue text-base">{addon.title}</h4>
                                <p className="text-neutral-coolGray text-sm">{addon.info}</p>
                            </div>
                            <p className="ml-auto text-sm text-primary-purplishBlue">${addon.price}/mo</p>
                        </div>
                    )
                })}
            </div>
            <div className="flex sm:relative absolute bg-white sm:w-[100%] w-[100vw] h-[8vh] left-0 bottom-0 justify-between items-center sm:mt-11">
                <button type="" className="text-neutral-coolGray font-[500] capitalize transition-all duration-300 hover:text-primary-marineBlue cursor-pointer ml-4 sm:ml-0" onClick={()=>{navigate('/plan');setCounter(counter -1)}}>Go back</button>
                <button type="submit" className="ml-auto bg-primary-marineBlue text-white border-0 rounded-md px-6 py-3 hover:opacity-75 mr-4 sm:mr-0">Next step</button>
            </div>
        </form>
    )
}

export default Addon