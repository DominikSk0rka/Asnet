"use client";

import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/input";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import { FcGoogle } from "react-icons/Fc";
import { BsFacebook } from "react-icons/Bs";


import axios from "axios";
import { toast } from "react-hot-toast";
import {signIn} from "next-auth/react";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";

interface RegisterFormProps{
    currentUser: SafeUser | null;
}

const RegisterForm:React.FC<RegisterFormProps> = ({currentUser}) => {
const [isLoading, setIsLoading] = useState(false);
const {
     register,
     handleSubmit, 
     formState: {errors},  
} = useForm<FieldValues>({
    defaultValues: {
        name: "",
        email: "",
        password: "",

    },
});

{/* ------------------------------------------------------------------------------------------------ */}




    const router = useRouter();
    useEffect(() => {
        if(currentUser){
            router.push("/");
            router.refresh;
        }
    }, []);



    const onSubmit: SubmitHandler<FieldValues> = (data) =>
        {
        setIsLoading(true);

        axios
        .post("/api/register", data)
        .then(() => {
            toast.success("Konto utworzone");

     
            signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: false,
              }).then((callback) => {
                if (callback?.ok){
                    router.push("/");
                    router.refresh();
                    toast.success("Zalogowano");
                }
                
                if(callback?.error){
                    toast.error(callback.error);
                }
              });  
        })
        .catch(() => toast.error("Coś poszło nie tak"))
          .finally(() => {
            setIsLoading(false);
        });
    };



    if(currentUser){
        return <p className="text-center flex-center text-2xl">Jesteś już zalogowany, przekierowuje...</p>}

{/* ------------------------------------------------------------------------------------------------ */}
    return ( 
    <>
    <Heading title="Zarejestruj się do Asnet"/>
    <hr className="bg-slate-300 w-full h-px"/>


    <Input
    id="name"
    label="Imię"
    disabled={isLoading}
    register={register}
    errors={errors}
    required
    />
    
    <Input
    id="email"
    label="Kowalski@gmail.com"
    disabled={isLoading}
    register={register}
    errors={errors}
    required
    />
    
    <Input
    id="password"
    label="Hasło"
    disabled={isLoading}
    register={register}
    errors={errors}
    required
    type="password"
    />    
    <Button label = {isLoading ? "Ładuje  się" : "Zarejestruj się"} onClick={handleSubmit(onSubmit)}
    /> 
    <p className="text-sm ">
       Masz już konto? 
       <Link className="underline" href="/login" style={{ marginLeft: '10px' }}>
       Zaloguj się
       </Link> 
    </p>



    {/* -----------------------------------zaloguj sie poprzez:----------------------------------------- */}
<div className="gap-2 flex flex-center">
        <Button
        outline
        label="Kontynuj przez Google"
        icon={FcGoogle}
        onClick={() => {signIn("google")}}
        />
         <Button
        outline
        label="Kontynuj przez Facebook"
        icon={BsFacebook}
        onClick={() => {}}
        />
</div>
{/* ------------------------------------------------------------------------------------------------ */}
    </> 

    );
};
 
export default RegisterForm;