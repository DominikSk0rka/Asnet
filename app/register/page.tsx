import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import RegisterForm from "./RegisterForm";

const register = async() => {

    const currentUser = await getCurrentUser()
   
    return ( <Container>    
        <FormWrap>
            <RegisterForm currentUser={currentUser}/>
        </FormWrap>
    </Container> );
}
 
export default register;


//Sava component zbiermy wszystkie dane tutaj