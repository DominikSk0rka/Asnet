import Image from "next/image";
import { SlUser } from "react-icons/sl";

interface AvatarProps{
    src?: string | null | undefined
}

const Avatar:React.FC<AvatarProps> = ({src}) => {
    if(src){
        return(
        <Image 
        src={src}
        alt="Avatar"
        className="rounded-full"
        height='30'
        width='30'/>);
    }
    return <SlUser size={24}/>;
};
 
export default Avatar;