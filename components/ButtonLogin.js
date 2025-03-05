import Link from "next/link";   
// this sends user to dashboard if logged in, else shows login button
const ButtonLogin = ({ isLoggedIn, name}) => {
    if (isLoggedIn) {
        return <Link href="/dashboard" className="btn btn-primary">Welcome back, {name}</Link>;
    } 
    return <button>Login</button>;
};
export default ButtonLogin;