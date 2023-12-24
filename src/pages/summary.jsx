import { useContext } from "react";
import { useNavigate } from "react-router";
import { AddonContext } from "../contexts/addonContext";
import PlansContext from "../contexts/planContext";
import { CounterContext } from "../contexts/counteContext";

const Summary = () =>{
    const {selectedAddon} = useContext(AddonContext)
    const {selectedMonthlyPlan} = useContext(PlansContext)
    const {selectedYearlyPlan} = useContext(PlansContext)
    const {setSelectedAddon} = useContext(AddonContext)
    const {counter,setCounter} = useContext(CounterContext)

    const navigate = useNavigate()
    const onSubmit = (e) =>{
        e.preventDefault()
        navigate("/thanks")
    }

    const clearAddon = () =>{
        setSelectedAddon([])
        navigate('/addon')
    }
    const totalAddon = selectedAddon.reduce((acc,val)=> acc + val.price,0)
    const total = selectedMonthlyPlan.price + selectedYearlyPlan.price + totalAddon
    console.log(selectedYearlyPlan.price)

    return(
        <form className="sm:basis-[60%] w-[300px] sm:w-[100%] h-[auto] sm:pr-[80px] " onSubmit={onSubmit}>
            <div className="">
                <h1 className="sm:mt-10 text-3xl font-[800] mb-2 text-primary-marineBlue">Finishing up</h1>
                <h4 className="text-neutral-coolGray mb-6 sm:block">Double-check everything looks OK before confirming.</h4>
            </div>
            <div className="flex flex-col bg-neutral-alabaster rounded-lg p-5">
                <div className="flex place-content-between items-center">
                    <div className="flex flex-col">
                        <h4 className="text-primary-marineBlue font-[800]">{selectedMonthlyPlan.name}{selectedYearlyPlan.name} ({selectedMonthlyPlan.name ?"monthly" : 'yearly'})</h4>
                        <span className="text-neutral-coolGray underline cursor-pointer" onClick={()=>navigate('/plan')}>Change</span>                      
                    </div>
                    <p className="text-primary-marineBlue font-[500]">${selectedYearlyPlan.price}{selectedMonthlyPlan.price}/mo</p>
                </div>
                    <div class="flex-grow border-t border-gray-400 mt-2 mb-2" ></div>
                {selectedAddon.map((plan,id)=>{
                    return(
                    <div className="flex place-content-between" key={id}>
                        <p className="text-neutral-coolGray ">{plan.title}</p>
                        <p className="text-primary-marineBlue font-[500]">+${plan.price}/mo</p>
                    </div>
                    )
                })}
                

            </div>
                <div className="flex place-content-between p-5">
                    <p className="text-neutral-coolGray ">Total</p>
                    <p className="text-primary-purplishBlue font-[500]">+${total}/mo</p>
                </div>
            <div className="flex sm:relative absolute bg-white sm:w-[100%] w-[100vw] h-[10vh] left-0 bottom-0 justify-between items-center">
                <button type="" className="text-neutral-coolGray font-[500] capitalize transition-all duration-300 hover:text-primary-marineBlue cursor-pointer ml-4 sm:ml-0" onClick={()=>{clearAddon();setCounter(counter - 1)}}>Go back</button>
                <button type="submit" className="ml-auto bg-primary-marineBlue text-white border-0 rounded-md px-6 py-3 hover:opacity-75 mr-4 sm:mr-0">Confirm</button>
            </div>
        </form>
    )
}
export default Summary