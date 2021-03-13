import React from "react";
import { useForm } from "react-hook-form";

function LoginForm({ onSubmit, loading = false }) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input autoFocus name="email" type="email" required ref={register}/>
      <input name="password" type="password" required ref={register}/>

      <input disabled={loading} type="submit" value="Login" />
    </form>
  )
}


export default LoginForm;