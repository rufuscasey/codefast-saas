import Link from "next/link";   
// this sends user to dashboard if logged in, else shows login button
const ButtonLogin = ({ isLoggedIn, name, extraStyle}) => {
    console.log(extraStyle);
    if (isLoggedIn) {
        return (
        <Link 
        href="/dashboard" 
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
        >
        Welcome back, {name}
        </Link>
        );
        
    } 
    return <button>Login</button>;
};
export default ButtonLogin;