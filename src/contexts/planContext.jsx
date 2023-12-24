import { createContext,useState } from "react";
import arcade from "../assets/icon-arcade.svg"
import advanced from "../assets/icon-advanced.svg"
import pro from "../assets/icon-pro.svg"

const PlansContext = createContext()

export const PlanProvider = ({children}) =>{
    const [monthlyPlans,setMonthlyPlans] = useState([
        {
            id:1,
            img:arcade,
            title:"Arcade",
            price:9
        },
        {
            id:2,
            img:advanced,
            title:"Advanced",
            price:12
        },
        {
            id:3,
            img:pro,
            title:"Pro",
            price:15
        }
    ])

    const [yearlyPlans,setYearlyPlans] =useState([
        {
            id:1,
            img:arcade,
            title:"Arcade",
            price:90
        },
        {
            id:2,
            img:advanced,
            title:"Advanced",
            price:120
        },
        {
            id:3,
            img:pro,
            title:"Pro",
            price:150
        }
    ])

    const [selectedMonthlyPlan,setSelectedMonthlyPlan] = useState([
        {
            name:'',
            price:null
        }
    ])

    const [selectedYearlyPlan,setSelectedYearlyPlan] = useState([
        {
            name:'',
            price:null
        }
    ])

    return(
        <PlansContext.Provider value={{
            monthlyPlans,
            setMonthlyPlans,
            yearlyPlans,
            setYearlyPlans,
            selectedMonthlyPlan,
            setSelectedMonthlyPlan,
            selectedYearlyPlan,
            setSelectedYearlyPlan
        }}>
            {children}
        </PlansContext.Provider>
    )
}

export default PlansContext