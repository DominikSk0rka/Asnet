"use client";

import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/input";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";

import { FcGoogle } from "react-icons/Fc"
import { BsFacebook } from "react-icons/Bs"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { SafeUser } from "@/types";

interface LoginFormProps{
    currentUser: SafeUser | null;
}




const LoginForm:React.FC<LoginFormProps> = ({currentUser}) => {
const [isLoading, setIsLoading] = useState(false);
const {
    register, 
    handleSubmit, 
    formState:{errors},  
} = useForm<FieldValues>({
    defaultValues:{
        email: '',
        password: '',

    },
});


    const router = useRouter();

    useEffect(() => {
        if(currentUser){
            router.push("/");
            router.refresh;
        }
    }, []);


    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        signIn('credentials',{
            ...data,
            redirect: false
        }).then((callback)=>{
            setIsLoading(false)

            if (callback?.ok){
                router.push("/");
                router.refresh();
                toast.success("Zalogowano");
            }
            
            if(callback?.error){
                toast.error(callback.error);
            }

        })

    };


if(currentUser){
    return <p className="text-center flex-center text-2xl">Jesteś już zalogowany, przekierowuje...</p>
}


{/* ------------------------------------------------------------------------------------------------ */}
    return ( 
    <>
    <Heading title="Zaloguj się do Asnet"/>
    <hr className="bg-slate-300 w-full h-px"/>

    
    <Input
    id="email"
    label="E-mail"
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
    <Button label = {isLoading ? "Ładuje  się" : "Zaloguj się"} onClick={handleSubmit(onSubmit)}
    /> 
    <p className="text-sm ">
      Nie masz konta?
       <Link className="underline" href="/register" style={{ marginLeft: '10px' }}>
      Zarejestruj się
       </Link> 
    </p>



    {/* -----------------------------------zaloguj sie poprzez:----------------------------------------- */}
<div className="gap-2 flex flex-center">
        <Button
        outline
        label="Kontynuj z Google"
        icon={FcGoogle}
        onClick={() => {}}
        />
         <Button
        outline
        label="Kontynuj z Facebook"
        icon={BsFacebook}
        onClick={() => {}}
        />
</div>
{/* ------------------------------------------------------------------------------------------------ */}
    </> 

    );
};
 
export default LoginForm;