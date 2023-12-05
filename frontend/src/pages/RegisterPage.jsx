import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoPersonAdd, IoLogIn } from "react-icons/io5";
import ReCaptcha from "react-google-recaptcha";

function RegisterPage() {
  const{register, handleSubmit, formState:{errors} } = useForm();
  const{signup, isAuthenticated, errors:registerErrors} = useAuth();
  const[captchaValue, setCaptchaValue]= useState(null)
  const navigate = useNavigate();

  useEffect( ()=>{
    if(isAuthenticated)
        navigate('/products')
  },[isAuthenticated])

  const onSubmit = handleSubmit( async (values) => {
    signup(values);
  });

    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-amber-200 max-w-md p-10 rounded-md">
           
          {
            registerErrors.map( (error, i)=>(
              <div className="bg-red-500 p-2 my-2 text-white" key={i}>
                {error}
              </div>
            ))
          }
          <form onSubmit={onSubmit}>
          <h1 className="text-2xl font-bold">Sign Up</h1>
          <label htmlFor="username">Username</label>
            <input type="text" className="w-full bg-amber-400 text-amber-950 px-4 py-2 rounded-md my-2"
            placeholder="Username"{
              ...register("username", {required: true, minLength:5})
            }/>
  
            { errors.username?.type==='required'&& (
              <p className="text-red-500">Nombre de usuario requerido</p>
            )}
            { errors.username?.type==='minLength'&& (
              <p className="text-red-500">La Longitud minima es de 5 caracteres</p>
            )}

            <label htmlFor="password">Password</label>
            <input type="email" className="w-full bg-amber-400 text-amber-950 px-4 py-2 rounded-md my-2"
            placeholder="Email"{
              ...register("email", {required: true})
            }/>
  
            { errors.email?.type && (
              <p className="text-red-500">Email es Requerido</p>
            )}

            <label htmlFor="password">Password</label>
            <input type="password" className="w-full bg-amber-400 text-amber-950 px-4 py-2 rounded-md my-2"
            placeholder="Password"{
              ...register("password", {required: true,minLength:6})
            }/>
  
            { errors.password?.type==='required'&& (
              <p className="text-red-500">Password requerido</p>
            )}
            { errors.password?.type==='minLength'&& (
              <p className="text-red-500">La Longitud minima es de 6 caracteres</p>
            )}
  
            <button className="bg-amber-400 px-3 py-3 my-3 rounded-md"
                    type="submit" disabled={!captchaValue}><IoPersonAdd size={30}/></button>
            
            <ReCaptcha sitekey="6LcucyMpAAAAAMirX1-9gi8hElBze4bxh3RDTCJX"
                     onChange={ (value)=> setCaptchaValue(value)}/>
          </form>
          <p className="flex gap-x-2 justify-between pt-5 mt-5">
            ¿Ya tienes una cuenta?
            <Link to="/login" className="text-amber-800">
               <div className="flex mx-2 px-2 items-start">
                  !Iniciar sesión!<IoLogIn size={30} className="mx-1"/>
                </div>  
            </Link>
          </p>
        </div>
      </div>
    )
  }

export default RegisterPage