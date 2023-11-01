import { useState } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import "./App.css";
import Sidebar from "./assets/components/Sidebar/Sidebar";
import PedidoDeCompra from "./assets/components/PedidoDeCompra/PedidoDeCompra";
import Procesadores from "./assets/components/Procesadores/Procesadores";
import NuevoPedidoDeCompra from "./assets/components/NuevoPedidoDeCompra/NuevoPedidoDeCompra";
import MultipleSelect from "./assets/components/MultipleSelect/MultipleSelect";
import DetallePedido from "./assets/components/DetallePedido/DetallePedido";
import EditarLinea from "./assets/components/EditarLinea/EditarLinea";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <BrowserRouter>
    <Sidebar>
    <Routes>
      <Route path="/" element={<PedidoDeCompra/>}/>
      <Route path="/nuevopedidodecompra" element={<NuevoPedidoDeCompra/>}/>
      <Route path="/detallepedido" element={<DetallePedido/>}/>
      <Route path="/editarlinea/:articulo1/:cantidad/:costoUnitario/:subtotal" element={<EditarLinea/>}/>


    </Routes>
    </Sidebar>
    </BrowserRouter>
    
    </>
  );
}

export default App;
