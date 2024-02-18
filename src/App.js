import React ,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
//import About from "./components/About"
import Error from "./components/Error"
import Contacts from "./components/Contacts"
import RestaurantMenu from "./components/RestaurantMenu"
import Shimmer from "./components/Shimmer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = ()=>{
    return (
        <div className="main-container">
            <Header />
            <Outlet />
        </div>
    )
}

const About = lazy(()=> import("./components/About"))
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
                element: <Suspense fallback = {<Shimmer> </Shimmer>}><About /></Suspense>
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