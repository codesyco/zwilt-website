import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { RootLayout } from "../Layout/RootLayout.jsx";
import Error from "../Error/Error.jsx";
import Home from "../Pages/Home.jsx";

const router = createBrowserRouter(createRoutesFromElements(
    <Route errorElement={<Error/>}>
        <Route element={<RootLayout/>}>
            <Route index element={<Home/>}/>
        </Route>
    </Route>
));

export default router;
