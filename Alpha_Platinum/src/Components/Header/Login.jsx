import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Country_code from "./Country_code.json";
import axios from "axios";

const LogModal = ({ closeModal }) => {
  const [lrClick, setLRClick] = useState(true);
  const [isLogin, setIsLogin] = useState("login");
  const [formData, setFormData] = useState({ password: "", email: "", device_name: "12",});
  const [register, setRegisterData] = useState({email:"sandeep@gmail.com", first_name: "mungeri", last_name: "laal", phone: "", password:"sandeep", term: "1"})
  const [err, setErr] = useState({});

  const handleemailBtn = (e) => {
    e.preventDefault();
    console.log(formData.email);
  };

  const handleLogin = () => {
    setLRClick(true);
    setIsLogin("login");
  };

  const handleRegister = () => {
    setLRClick(false);
    setIsLogin("Register");
  };

  const validate = () => {
    const Errors = {};
    if (formData.email.length < 10) {
      Errors.email = "Enter a valid email number";
    }

    if (formData.password.length < 6) {
      Errors.password = "Password must be at least 6 characters long";
    }

    return Errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (err[name]) {
      setErr((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr({});

    const validationErr = validate();
    if (Object.keys(validationErr).length > 0) {
      setErr(validationErr);
      return;
    }

    console.log("Logging in with:", formData);
    
    try {
      const response = await axios.post('https://hellostay.com/api/auth/login', formData
      );
  
      console.log('Logging successful', response.data);
      // Handle successful login (e.g., redirect, store tokens, etc.)
      localStorage.setItem("user", JSON.stringify(response.data.user))
      closeModal()
    } catch (error) {
      console.error('Error logging in:', error);
      setErr({ message: error.response?.data?.message || 'Login failed' });
    }
  };

  // Register form
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setErr({});

    // const validationErr = validate();
    // if (Object.keys(validationErr).length > 0) {
    //   setErr(validationErr);
    //   return;
    // }

    console.log("Logging in with:", register);
    
    try {
      const response = await axios.post('https://hellostay.com/api/auth/register', register
      );
  
      console.log('Logging successful', response.data);
      // Handle successful login (e.g., redirect, store tokens, etc.)
      localStorage.setItem("user", JSON.stringify(response.data.data))
    } catch (error) {
      console.error('Error logging in:', error);
      setErr({ message: error.response?.data?.message || 'Login failed' });
    }
  };

    const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));

    if (err[name]) {
      setErr((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center bg-gray-400" style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: "3" }}>
        <div className="bg-white w-[600px] h-[400px] relative flex flex-col gap-8 mx-auto">
          <div className="btn flex justify-around items-center ">
            <button
              className={`w-full text-center p-5 ${isLogin === "login" ? "bg-[#49A6A2] text-white" : "bg-white text-slate-500"}`}
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className={`w-full text-center p-5 ${isLogin === "Register" ? "bg-[#49A6A2] text-white" : "bg-white text-slate-500"}`}
              onClick={handleRegister}
            >
              Register
            </button>
          </div>

          {lrClick ? (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-7 mx-10 h-fit">
                <input
                  type="text"
                  name="email"
                  placeholder="email number"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="outline-[#49A6A2] border-2 text-lg p-2"
                />
                {err.email && <span className="text-red-600">{err.email}</span>}

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="outline-[#49A6A2] border-2 text-lg p-2"
                />
                {err.password && <span className="text-red-600">{err.password}</span>}

                <p className="text-red-700 text-right">Forgot Password?</p>

                <button type="submit" className="border-2 bg-[#49A6A2] p-3 text-white">
                  Login
                </button>
              </div>
            </form>
          ) : (

            // resgistion form

            <form onSubmit={handleRegisterSubmit}>
            <div className="flex flex-col gap-7 mx-10">
              <div className="flex border-2">
                <select name="countryCode" className="p-2">
                  {Country_code.map((country) => (
                    <option value={country.dial_code} key={country.code}>
                      {country.emoji} {country.dial_code}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  name="phone"
                  placeholder="Enter phone Number"
                  value={register.phone}
                  onChange={handleRegisterChange}
                  className="border-none outline-none p-2 w-full"
                />
              </div>

              {err.email && <span className="text-red-600">{err.email}</span>}

              <div className="robot py-5 border-2 w-[250px] ml-36">
                <div className="flex gap-5 px-4">
                  <input type="checkbox" name="robot" id="robot" />
                  <p>I'm not a robot</p>
                </div>
              </div>

              <div className="border-2 flex justify-around mt-2">
                <button className="w-full p-4 bg-[#aaaaaa] text-center" onClick={closeModal}>
                  Cancel
                </button>
                <button className="w-full p-4 bg-[#49A6A2] text-center" type="submit" >
                  Send OTP
                </button>
              </div>
            </div>
            </form>
          )}

          <button className="absolute top-[-15px] right-[-10px] bg-gray-300 text-lg rounded-full p-3" onClick={closeModal}>
            <IoClose />
          </button>
        </div>
      </div>
    </>
  );
};

export default LogModal;


