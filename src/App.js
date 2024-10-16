import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Provider } from "react-redux";
//import Navbar from './components/Navbar';
import Body from './components/Body';
import Login from './components/Login';
import appStore from './utils/appStore';
import Home from './components/Home';
import Customize from './components/Customize';
import CustomizeMen from './components/CustomizeMen';
import ShirtsCustomization from "./components/ShirtsCustomization";
import Details from './components/ShirtDetails';
import PhantCustomizationPage from './components/PhantCustomizationPage';
import PhantDetails from './components/PhantDetails';
import SeeCart from './components/SeeCart';
import WaistCustomizationPage from './components/WaistCustomizationPage';
import DressDetails from './components/DressDetails';
import GenerateImage from './components/GenerateImage';
import Signup from './components/Signup';
function App() {
  return (
    <>
  <Provider store ={appStore} >
  <BrowserRouter basename='/'>
    <Routes>
      <Route path="/" element={<Body/>} >
      <Route path="/" element={<Home/>} />
      <Route path="/customize" element={<Customize/>} />
      <Route path="/mencustomization" element={<CustomizeMen/>} />
      <Route path="/shirtcustomization" element={<ShirtsCustomization/>} />
      <Route path="/shirtdetails" element={<Details/>} />
      <Route path="/phantcustomization" element={<PhantCustomizationPage/>} />
      <Route path="/phantdetails" element={<PhantDetails/>} />
      <Route path="/waistcustomization" element={<WaistCustomizationPage/>} />
      <Route path="/dressdetails" element={<DressDetails/>} />
      <Route path="/seecart" element={<SeeCart/>} />
      <Route path="/aigeneration" element={<GenerateImage/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      </Route>
    </Routes>
   
    </BrowserRouter>


  </Provider>
    </>
  );
}

export default App;
