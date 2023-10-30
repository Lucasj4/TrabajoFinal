import { useState } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import "./App.css";
import Sidebar from "./assets/components/Sidebar/Sidebar";
import PedidoDeCompra from "./assets/components/PedidoDeCompra/PedidoDeCompra";
import Procesadores from "./assets/components/Procesadores/Procesadores";
import NuevoPedidoDeCompra from "./assets/components/NuevoPedidoDeCompra/NuevoPedidoDeCompra";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <BrowserRouter>
    <Sidebar>
    <Routes>
      <Route path="/" element={<PedidoDeCompra/>}/>
      <Route path="/nuevopedidodecompra" element={<NuevoPedidoDeCompra/>}/>
      <Route path="/procesadores" element={<Procesadores/>}/>
    </Routes>
    </Sidebar>
    </BrowserRouter>
    
    </>
  );
}

export default App;
