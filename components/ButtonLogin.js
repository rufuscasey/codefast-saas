import Link from "next/link";   
// this sends user to dashboard if logged in, else shows login button
const ButtonLogin = ({ isLoggedIn, name}) => {
    if (isLoggedIn) {
        return <Link href="/dashboard">View Your Dashboard, {name}</Link>;
    } 
    return <button>Login</button>;
};
export default ButtonLogin;