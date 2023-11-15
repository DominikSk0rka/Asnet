"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import BackDrop from "./BackDrop";



const UserMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);



    return ( <>
    <div className="relative z-30">
        <div onClick={toggleOpen} className="
        flex
        flex-row
        cursor-pointer
        transition
        text-slate-900"
        >
            <AiOutlineMenu style={{ fontSize: '2em' }}/>
        </div>
        {isOpen && (
            <div className="absolute
            rounded-mb
            shadow-mb
            w-[170px]
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
            flex
            flex-col
            curser-pointer">


                <div>
                    <Link href="/orders">
                        <MenuItem onClick={toggleOpen}>Twoje Zamówienia</MenuItem>
                    </Link>
                    <Link href="/admin">
                        <MenuItem onClick={toggleOpen}>Panel Admina</MenuItem>
                        <MenuItem onClick={() => {
                            toggleOpen();
                            signOut();
                        }}>Wyloguj</MenuItem>
                    </Link>
                </div>

                        <div>
                    <Link href="/login">
                        <MenuItem onClick={toggleOpen}>Zaloguj się</MenuItem>
                    </Link>
                    <Link href="/register">
                        <MenuItem onClick={toggleOpen}>Zarejestruj się</MenuItem>
                    </Link>
                        </div>


            </div>
        )}
    </div>
    {isOpen ? <BackDrop onClick={toggleOpen}/> : null}
    </> 
    );
};
 
export default UserMenu;