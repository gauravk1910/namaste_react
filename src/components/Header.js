import { useState } from "react";



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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
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