import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from '../Layouts/Layout.js'
import HomePage from '../Pages/Home/home.js'
import DetailPage from '../Pages/detail/detail.js'
const route = (
    <Route element={<Layout/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
    </Route>
);

const rootRouter = createBrowserRouter(
    createRoutesFromElements(route));
export default rootRouter