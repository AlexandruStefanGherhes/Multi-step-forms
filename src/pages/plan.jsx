import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PlansContext from "../contexts/planContext";
import { CounterContext } from "../contexts/counteContext";

const Plan = () =>{
    const navigate = useNavigate()
    const [toggleYearly,setToggleYearly] = useState(true)
    const [num,setNum] = useState(0)
    const {monthlyPlans} = useContext(PlansContext)
    const {yearlyPlans} = useContext(PlansContext)
    const {selectedMonthlyPlan} = useContext(PlansContext)
    const {selectedYearlyPlan} = useContext(PlansContext)
    const {setSelectedMonthlyPlan} = useContext(PlansContext)
    const {setSelectedYearlyPlan} = useContext(PlansContext)
    const [planAlert,setPlanAlert] = useState(false)
    const {counter,setCounter} = useContext(CounterContext)

    const onSubmit = (e) =>{
        e.preventDefault()
        if(selectedMonthlyPlan.price){
            navigate("/addon")
            setCounter(counter+1)
        }else if(selectedYearlyPlan.price){
            navigate("/addon")
            setCounter(counter+1)
        }else{
            setPlanAlert(true)
            setTimeout(()=>setPlanAlert(false),3000)
        }
    }

    const handleToggleYearly = () =>{
        setToggleYearly(prev => !prev)
    }

    const getMonthlyDetails = (id) =>{
        setSelectedMonthlyPlan({
            name: monthlyPlans[id].title,
            price: monthlyPlans[id].price
        })
        setSelectedYearlyPlan({
            name:'',
            price:null
        })
        setNum(id + 1)
    }

    const getYearlyDetails = (id) =>{
        setSelectedYearlyPlan({
            name: yearlyPlans[id].title,
            price:yearlyPlans[id].price
        })
        setSelectedMonthlyPlan({
            name:'',
            price:null
        })
        setNum(id + 1)
    }



    return(
        <form className="sm:basis-[60%] w-[300px] sm:w-[100%] h-[29rem] sm:pr-[80px] " onSubmit={onSubmit} >
            <div className="">
                <h1 className="sm:mt-10 mt-1 text-2xl md:text-3xl font-[800] mb-2 text-primary-marineBlue">Select your plan</h1>
                <h4 className="text-neutral-coolGray  w-4/5 md:w-full mb-6">You have the option of monthly or yearly billing</h4>
            </div>
            <div className={`${toggleYearly ? 'block' : 'hidden'} mb-8 flex flex-col sm:flex-row cursor-pointer gap-3 `}>
                {monthlyPlans.map((plan,id)=>{
                    return (
                    <div className={`flex ${
                        num != id + 1 ? "bg-white" : "bg-primary-lightBlue"
                    } border-2 ${
                        num != id + 1
                        ? "border-neutral-lightGray"
                        : "border-primary-purplishBlue"
                    } rounded-md p-4 flex sm:mb-0 items-center sm:block basis-[31%] transition-all duration-300 hover:border-primary-purplishBlue`} key={id} onClick={()=>getMonthlyDetails(id)}>
                        <div className="">
                            <img src={plan.img} alt="plan-icon"  className="sm:mb-10"/>
                        </div>
                        <div className="ml-5 sm:ml-0">
                            <h3 className="text-primary-marineBlue font-[500]">{plan.title}</h3>
                            <p className="text-neutral-coolGray text-[14px] font-[500]">${plan.price}/mo</p>
                        </div>
                    </div>
                )})}
            </div>
            <div className={`${toggleYearly ? 'hidden' : 'block'} mb-5 sm:mb-8 flex flex-col sm:flex-row  cursor-pointer sm:gap-3`}>
                {yearlyPlans.map((plan,id)=>{
                    return (
                    <div className={`flex ${
                        num != id + 1 ? "bg-white" : "bg-primary-lightBlue"
                    } border-2 ${
                        num != id + 1
                        ? "border-neutral-lightGray"
                        : "border-primary-purplishBlue"
                    } rounded-md p-4 flex items-center mb-3 sm:mb-0 sm:block basis-[31%] transition-all duration-300 hover:border-primary-purplishBlue`}key={id} onClick={()=>getYearlyDetails(id)}>
                        <div className="">
                            <img src={plan.img} alt="plan-icon"className="sm:mb-10"/>
                        </div>
                        <div className="ml-5 sm:ml-0">
                            <h3 className="text-primary-marineBlue font-[500]">{plan.title}</h3>
                            <p className="text-neutral-coolGray text-[14px] font-[500]">${plan.price}/yr</p>
                        </div>
                    </div>
                )})}
            </div>
            {/* <p className={`${planAlert ? "block" : "hidden"} text-primary-strawberryRed pb-5`}>Please select a plan before continuing</p> */}
            <div
        className={`bg-neutral-alabaster flex justify-center items-center py-1 space-x-8 rounded-md ${
            toggleYearly ? "mb-[77px]" : "mb-[77px]"
        } ${
            toggleYearly ? "sm:mb-[77px]" : "sm:mb-[77px]"
        }`}
        >
        <p
            className={`${
            toggleYearly ? "text-neutral-coolGray" : "text-primary-marineBlue"
            } text-[14px] font-[500]`}
        >
            Monthly
        </p>
        <label className="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div
            onClick={handleToggleYearly}
            className="w-11 h-6 peer-focus:outline-none  rounded-full peer dark:bg-primary-marineBlue peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600"
            ></div>
        </label>
        <p
            className={`${
            toggleYearly
                ? "text-primary-marineBlue"
                : "text-neutral-coolGray "
            } text-[14px] font-[500]`}
        >
            Yearly
        </p>
        </div>
            <div className="flex sm:relative absolute bg-white sm:w-[100%] w-[100vw] h-[10vh] left-0 bottom-0 justify-between items-center">
                <button type="" className="text-neutral-coolGray font-[500] capitalize transition-all duration-300 hover:text-primary-marineBlue cursor-pointer ml-4 sm:ml-0" onClick={()=>{navigate("/") ; setCounter(counter - 1)}}>Go back</button>
                <button type="submit" className="ml-auto bg-primary-marineBlue text-white border-0 rounded-md px-6 py-3 hover:opacity-75 mr-4 sm:mr-0">Next step</button>
            </div>
        </form>
    )
}

export default Plan