import { createBrowserRouter } from "react-router-dom"
import Main from "./layout/Main"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element:<h1>Hello world</h1>
        },
        {
            path:'/about',
            element:<h1>This is about section</h1>
        }
    ]
  },
])

export default router
