import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import About from "./components/About"
import Error from "./components/Error"
import Contacts from "./components/Contacts"
import RestaurantMenu from "./components/RestaurantMenu"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = ()=>{
    return (
        <div>
            <Header />
            <Outlet />
           

        </div>
    )
}

const appRouter = createBrowserRouter(
    [{
        path: "/",
        element:<App />,
        children:[
            {
                path: "/",
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contacts />
            },
            {
                path: '/restaurant/:resId',
                element:<RestaurantMenu />
            }
        ],
        errorElement: <Error/>
    }]
)
const root =  ReactDOM.createRoot(document.getElementById("root"));
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App></App>)
root.render(<RouterProvider router = {appRouter} />)
export default App;