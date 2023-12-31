import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import LoginForm from "./LoginForm";

const Login = async() => {
    const crrentUser = await getCurrentUser()

    return ( 
    <Container>
        <FormWrap>
            <LoginForm currentUser = {crrentUser}/>
        </FormWrap>
    </Container> );
}
 
export default Login;