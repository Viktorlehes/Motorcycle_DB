//  Dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, useRouteError } from "react-router-dom";

// Components, loaders, actions 
import App from './App';

function ErrorBoundary() {
    let error = useRouteError();
    console.error(error);
    return <div>Dang!</div>;
}  

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        errorElement: <ErrorBoundary />,
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
  