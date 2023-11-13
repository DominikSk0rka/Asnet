"use client";

import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/input";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";

import { FcGoogle } from "react-icons/Fc"
import { BsFacebook } from "react-icons/Bs"


const RegisterForm = () => {

const [isLoading, setIsLoading] = useState(false);
const {register, handleSubmit, formState:{errors},  
} = useForm<FieldValues>({
    defaultValues:{
        name: '',
        email: '',
        password: '',

    },
});

    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        console.log(data);

    };


{/* ------------------------------------------------------------------------------------------------ */}
    return ( 
    <>
    <Heading title="Zaloguj się do Asnet"/>
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
    <Button label = {isLoading ? "Ładuje  się" : "Zaloguj się"} onClick={handleSubmit(onSubmit)}
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
        label="Zaloguj się przez Google"
        icon={FcGoogle}
        onClick={() => {}}
        />
         <Button
        outline
        label="Zaloguj się przez Facebook"
        icon={BsFacebook}
        onClick={() => {}}
        />
</div>
{/* ------------------------------------------------------------------------------------------------ */}
    </> 

    );
};
 
export default RegisterForm;