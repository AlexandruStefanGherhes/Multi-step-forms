import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CounterContext } from "../contexts/counteContext";
const Info = () =>{
    const navigate = useNavigate()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")

    const [nameError,setNameError] = useState(false)
    const [emailError,setEmailError] = useState(false)
    const [phoneErorr,setPhoneError] = useState(false)

    const {counter,setCounter} = useContext(CounterContext)

    const onSubmit = (e) =>{
        e.preventDefault()
        if(name === ""){
            setNameError(true)
            setTimeout(()=>setNameError(false),3000)
        }else{
            setNameError(false)
        }
        if(email === ""){
            setEmailError(true)
            setTimeout(()=>setEmailError(false),3000)
        }else{
            setEmailError(false)
        }
        if(phone === ""){
            setPhoneError(true)
            setTimeout(()=>setPhoneError(false),3000)
        }else{
            setPhoneError(false)
        }

        if(name && email && phone){
            navigate("/plan")
            setCounter(counter + 1)
        }

    }
    return(
        <form className="sm:basis-[60%] w-[300px] sm:w-[100%]  h-[auto] mb-14 sm:pr-[80px] z-10" onSubmit={onSubmit}>
            <div className="md:mb-6 mb-2">
                <h1 className="sm:mt-10 mt-1 text-2xl md:text-3xl font-[800] mb-2 text-primary-marineBlue">Personal Info</h1>
                <h4 className="text-neutral-coolGray  w-4/5 md:w-full">Please provide your name, email address and phone number</h4>
            </div>
            <div className="form-wrapper flex flex-col relative">
                <div className="flex place-content-between">
                    <label htmlFor='name' className="text-primary-marineBlue sm:font-[500] font-[200] mb-1 text-sm md:text-base">Name</label>
                    <p className={`${nameError 
                        ? 'block' 
                        : 'hidden'} text-primary-strawberryRed`}>This field is required</p>
                </div>
                <input 
                className={`${nameError 
                    ? "outline-primary-strawberryRed" 
                    : "outline-neutral-coolGray"} md:mb-6 mb-3 outline outline-1 outline-neutral-lightGray rounded-[2px] md:p-3 p-2`}
                type="text" 
                id="name" 
                value={name} 
                placeholder="e.g Stephen King"
                onChange={(e)=>setName(e.target.value)}/>
                <div className="flex place-content-between">
                    <label htmlFor='email' className="text-primary-marineBlue sm:font-[500] font-[200] mb-1 text-sm md:text-base">Email Address</label>
                    <p className={`${emailError 
                        ? 'block' 
                        : 'hidden'} text-primary-strawberryRed`}>This field is required</p>
                </div>
                <input 
                className={`${emailError 
                    ? "outline-primary-strawberryRed" 
                    : "outline-neutral-coolGray"} md:mb-6 mb-3 outline outline-1 outline-neutral-lightGray rounded-[2px] md:p-3 p-2`}
                type="email" 
                id="email" 
                value={email} 
                placeholder="e.g stephenking@lorem.com"
                onChange={(e)=>setEmail(e.target.value)}/>
                <div className="flex place-content-between">
                    <label htmlFor='number' className="text-primary-marineBlue sm:font-[500] font-[200] mb-1 text-sm md:text-base">Phone Number</label>
                    <p className={`${phoneErorr 
                        ? 'block' 
                        : 'hidden'} text-primary-strawberryRed`}>This field is required</p>
                </div>
                <input 
                className={`${phoneErorr 
                    ? "outline-primary-strawberryRed" 
                    : "outline-neutral-coolGray"} md:mb-6 mb-1 outline outline-1 outline-neutral-lightGray rounded-[2px] md:p-3 p-2`}
                type="text" 
                id="number" 
                value={phone} 
                placeholder="e.g +1 234 567 890"
                onChange={(e)=>setPhone(e.target.value)}/>
            </div>
            <div className="flex sm:relative absolute bg-white sm:w-[100%] w-[100vw] h-[10vh] left-0 bottom-0 items-center">
                <button type="submit" className="ml-auto bg-primary-marineBlue text-white border-0 rounded-md px-6 py-3 hover:opacity-75 mr-4 sm:mr-0">Next step</button>
            </div>
        </form>
    )
}
export default Info