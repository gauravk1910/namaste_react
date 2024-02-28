/* Parcel does
* HMR
* File Watcher Algo - c++
* Bindling
* Minify
* Clean your code
*Dev and production build
*Super fast build algo
*Image Optimization
*Caching while development
Compression
compatible with older version of browser
https on dev
port number
consistent hashing algofig bundler
zero con 
*/




import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";


/*const heading=React.createElement(
    "h1",
    {
        id: "title",
        key: "h1",
    },
    "First react app!"
);

const heading2=React.createElement(
    "h2",
    {
        id: "name",
        key: "h2",
    },
    "gaurav is here"
);

const container=React.createElement(
    "div",
    {
        id: "container",
    },
    [heading,heading2]
);
console.log(heading);*/

// React element
/*
const heading = (
    <h1 id="title" key="h1">
        Namaste REact
    </h1>
);
*/


const AppLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />   
        </div>
        
    )
}

const approuter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            }
        ]
    },
]);


 
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing  a react element
root.render(<RouterProvider router={approuter} />);