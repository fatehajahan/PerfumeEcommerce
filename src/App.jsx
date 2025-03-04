import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import './App.css'
import Home from "./mainPage/Home/Home"
import Navbar from "./components/Home/Navbar/Navbar";
import BroughtPage from "./mainPage/BroughtPageBlue/BroughtPage";
import BroughtPageOrange from "./mainPage/BroughtPageOrange/BroughtPageOrange";
import Contact from "./components/Contact/Contact";
// import BroughtPage from "./mainPage/Home/BroughtPage1/BroughtPage";
// import BroughtPage from "./components/Home/BroughtPage/BroughtPage";
// import Navbar from "./components/Navbar/Navbar";


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/bluePerfume" element={<BroughtPage />} />
      <Route path="/orangePerfume" element={<BroughtPageOrange />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
