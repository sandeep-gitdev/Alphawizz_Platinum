import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import Country_code from "./Country_code.json"

   const LogModal = ({closeModal}) => {
                
     const [lrClick, setLRClick] = useState(true)
     const [isLogin, setIsLogin] = useState('login')
     const [mobile , setMobile] = useState("");
     const [err, setErr] = useState("");

     const handleMobile=(e)=>{
      setMobile(e.target.value);
      // if(mobile.length < 10){
      //    setErr("less then Ten")
      // }
   }

     const handleMobileBtn=(e)=>{
      e.preventDefault()
      console.log(mobile)
     }

    const handleLogin = () => {
           setLRClick(true)
           setIsLogin('login')
          
    };

    const handleRegister = () => {
           setLRClick(false)
           setIsLogin('Register')
         
    }

    // Country dail code
   //  onClick={() =>   className= {`border-2 p-3 text-white  `}

  

    return (
       <>
           <div className=" w-[100%] h-[100%] right-0 left-0 bottom-0 top-0 flex items-center bg-gray-400 fixed" style={{backgroundColor:"rgba(0,0,0,0.5)", zIndex:"3"}} >
           <div className="fixed top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4
           bg-white w-[600px] h-[400px] 
            flex flex-col gap-8" >
              <div className="btn flex justify-around  items-center ">
               
                <button className={`w-[100%] text-center p-5 ${isLogin === 'login' ? 'bg-[#49A6A2] text-white' : 'bg-white text-slate-500' }`} onClick={handleLogin}>Login</button>
               
               
               
                <button className={`text-center w-[100%] p-5 ${isLogin === 'Register' ? 'bg-[#49A6A2] text-white' : 'bg-white text-slate-500' }`} onClick={handleRegister} >Register</button>

                
               
             </div>

                   {
                     lrClick ? (<div className=" flex flex-col gap-7 mx-10">
                        <input type="text" placeholder="Mobile number" className="outline-[#49A6A2] border-2 text-lg p-2"/>
                        <input type="text" placeholder="Password"
                              className="outline-[#49A6A2] border-2 text-lg p-2"/>
                         <p className="text-red-700 text-right">Forgot Password ?</p>
                                  
                          <button  className="border-2 bg-[#49A6A2] p-3 text-white">Login</button>
                          </div>)
                          :
                          (
                           
                           <div className="flex flex-col gap-7  mx-10">
                              <div className="flex  hover:border-sky-500 border-2">
                              <select name="" id="" className="">
                              {
                                       Country_code.map((country)=> {
                                                 return( 
                                                   <>
                             <option value={country.dial_code} key={country.code} className="">           
                                    
                                      <div className="flex items-center border-none outline-none ">
                                       <div className="">{country.emoji}</div><div className="">{country.dial_code}</div>
                                       <div className=""><FaCaretDown />
                                       </div>
                                       </div>
                                      
                                 
                                 </option>  
                                                   </>
                                                 )
                                       })
                              }
                              </select>

                              <div className="border-2 flex gap-2 text-lg p-2 w-[100%]">
                              <input value={mobile} onChange={handleMobile} type="text" placeholder="Enter Mobile Number" className="border-none outline-none"/>
                              </div>
                              </div>


                                 <div>{err}</div>

                               {/* not a robot */}
                                  <div className="robot py-5 border-2 w-[250px] ml-36">
                                      <div className="flex gap-5 px-4">
                                       <input type="checkbox" name="" id="" className="text-lg"/>
                                       <p>I'm not a robot</p>
                                      </div>
                                  </div>



                               <div className="border-2 flex justify-around mt-[2rem] ">
                              
                                 <button className="w-[100%] p-4 bg-[#aaaaaa] text-center">Cancel</button>
                                  <button onClick={handleMobileBtn} className="w-[100%] p-4 bg-[#49A6A2] text-center" >Send OTP</button>
                                 
                                
                               </div>
                            </div>
                        )

                   }
                          {/* loging box */}

               


                        {/* Register box */}

                        

                  <button className="absolute top-[-15px] right-[-10px] bg-gray-300 text-lg rounded-full p-3" onClick={closeModal}><IoClose /></button>
           </div>
          
         
           </div>
       </>
    )
}

export default LogModal;


// https://gist.github.com/anubhavshrimal/75f6183458db8c453306f93521e93d37?permalink_comment_id=4493502#gistcomment-4493502