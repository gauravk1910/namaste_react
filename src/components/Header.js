import { useState } from "react";
import { Link } from "react-router-dom";



const Title = () => (
    <a href="/">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNx76pUGIu1KXqWiqRHteqox-vTDYnsMp6PQ&usqp=CAU" 
        alt="logo"
        className="logo" 
        />
    </a>
)

const Header = () => {

    function LoginUser(data){
        setIsLogin(data);
    }

    

    const [islogin, setIsLogin]=useState(false)
    return (
        <div className="header">
            <Title />
            
            <div className="nav-items">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About Us</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
            {islogin?
                <button onClick={()=> LoginUser(false)}>Logout</button>
                :
                <button onClick={()=>LoginUser(true)}>Login</button>
            }
        </div>
        
    )
}

export default Header;