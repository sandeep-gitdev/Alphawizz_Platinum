import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { RiMailOpenLine } from "react-icons/ri";

const ContactUs = () => {

      return(
         <>
                <div className="heading  ">
                         <div className="content flex justify-between items-center bg-[#addadd] border-1 border-white h-20 p-10">
                          <h1 className="text-xl">CONTACT US</h1>
                          <div className="flex ">
                          <p>Home /</p>
                          <p>Contact Us</p>  
                          
                          </div>
                         </div>
        </div>    
          <div className="flex flex-col md:flex-row justify-center items-center gap-4  m-8">
               <div className="Map w-full md:w-[50%] ">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.335179746721!2d75.89112842477894!3d22.75293912936366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302af403406fb%3A0x5b50834b117f8bab!2sVijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1727351802610!5m2!1sen!2sin" className="w-full h-[350px] md:h-[550px] border-2 rounded-md"   loading="lazy"></iframe> 
               </div>

               <div className="contact_us w-full md:w-[40%] border-2 flex flex-col gap-5 justify-around p-10 box-border">
                          
                         <h1 className="text-center text-xl font-semibold">Contact us</h1>
                         <form className="flex gap-3 font-semibold">
                             <p className="font-medium">Register as*:</p>
                             <input type="radio" name="user_type" id="vendor" />
                             <label htmlFor="vendor" className="font-medium">Vendor</label>
                             <input type="radio" name="user_type" id="customer" />
                             <label htmlFor="customer" className="font-medium">Customer</label>
                         </form>

                         <div className="flex flex-col">
                            <label htmlFor="">Username</label>
                            <input type="text" placeholder="Your Name" className="border-2 text-lg outline-[#49A6A2] w-60"/>
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder="Your Email" className="border-2 text-lg outline-[#49A6A2] w-60"/>
                         </div>

                         <div className="flex flex-col">
                            <label htmlFor="">Number</label>
                            <input type="text" placeholder="Your Number" className="border-2 text-lg outline-[#49A6A2] w-60"/>
                            <label htmlFor="">City</label>
                            <input type="text" placeholder="Your City" className="border-2 text-lg outline-[#49A6A2] w-60"/>
                         </div>

                         <div className="">
                          <label htmlFor="">Message</label>
                           <textarea name="message" rows="4" cols="58" id="" className="border-2 w-full px-4 outline-[#49A6A2]"></textarea>
                         </div>

                         <button className="bg-[#4aa6a3] p-3 w-[100%] text-lg text-white ">Send Message</button>
                  </div>
         </div>

         <div className="flex flex-col md:flex-row sm:w-[50%] md:w-[80%] m-auto justify-center items-center gap-6 md:gap-2 my-16">
                     <div className=" w-full flex flex-col justify-center items-center py-8 px-3 border-2 rounded-md  relative">
                         <span className="absolute top-[-18px] text-4xl"><FaMapMarkerAlt className="text-[#4aa6a3]"/></span>
                         <h3>Find Us</h3>
                         <p className="text-gray-400">Vijay Nagar Indore</p>
                     </div>
                     <div className="w-[100%] flex flex-col justify-center items-center  border-2 py-8 px-3 rounded-md relative">
                         <span className="absolute top-[-18px] text-4xl"><IoCall className="text-[#4aa6a3]"/></span>
                         <h3>Contact us</h3>
                         <p className="text-gray-400">9876543210</p>
                     </div>
                     <div className="w-[100%] flex flex-col justify-center items-center border-2 py-8 px-3 rounded-md  relative"> 
                         <span className="absolute top-[-18px] text-4xl" ><RiMailOpenLine className="text-[#4aa6a3]"/>
                         </span>
                         <h3>Email Us</h3>
                         <p className="text-gray-400">support@alphaplatinum.in</p>
                     </div>
                  </div>

         </>
      )
}

export default ContactUs;