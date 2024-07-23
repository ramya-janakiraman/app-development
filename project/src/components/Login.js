import {useRef, useState} from "react";
import '../assets/css/Login.css';
function Login(){
    //const inputRef=useRef(null);
    const [formData,setFormData]=useState({
        email:'',
        password:''
    });
    const[error,setError]=useState({
        email:"",
        password:"",
});
    const handleChange=(event)=>{
         //console.log(event.current.value);
         //setFormData(event.target.value);
         const {name,value}=event.target;
         setFormData({...formData, [name]:value});
         setError({...error,[name]:""});
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
       // console.log(inputRef.current.value);
       const formErrors={};
       if(formData.email.trim() === ""){
        formErrors.email="Enter Email";
       }
       if(formData.password.trim() === ""){
          formErrors.password="Enter Password";
       }
       setError(formErrors);
       console.log(formData);
    };
    return(
        <body>
      <div class="bg-img">
         <div class="content">
            <header>Login Now</header>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>UserName</label>
                <input type="email" placeholder="Enter Email" 
                //ref={inputRef}
                name="email"
                value={formData.email}//useState
                onChange={handleChange}
                />
                {error.email && <p style={{color:"red"}}>{error.email}</p>}<br></br><br></br>
                <lable>Password</lable>
                <input type="password" placeholder="Enter Password"
                 value={formData.password} 
                 onChange={handleChange} 
                 name="password">
                 </input>
                 {error.password && <p style={{color:"red"}}>{error.password}</p>}<br></br>
                <button type="submit">Login</button>
            </form>
            <div class="login">
               Or login with
            </div>
            <div class="links">
               <div class="facebook">
                  <i class="fab fa-facebook-f"><span>Facebook</span></i>
               </div>
               <div class="instagram">
                  <i class="fab fa-instagram"><span>Instagram</span></i>
               </div>
            </div>
            <div class="signup">
               Don't have account?
               <a href="signup.html">Signup Now</a>
               </div>
        </div>
        </div>
        </body>
    );
}
export default Login;