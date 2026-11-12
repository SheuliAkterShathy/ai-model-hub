import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Models from "./components/Models";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels();

function App() {
  const [activeTab, setActiveTab] = useState("models");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <Navbar />
      <Banner />
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Models"
          onClick={()=>setActiveTab("models")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label={`cart (${carts.length})`}
        onClick={()=>setActiveTab("cart")}
        />
       
      </div>
     {activeTab ==="models" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />}
     {activeTab ==="cart" &&  <Cart carts={carts} setCarts={setCarts}/>}
     
      <Footer />
      <ToastContainer/>
    </>
  );
}

export default App;
