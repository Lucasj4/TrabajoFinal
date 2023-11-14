import { useState } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import "./App.css";
import Sidebar from "./assets/components/Sidebar/Sidebar";
import PedidoDeCompra from "./assets/components/PedidoDeCompra/PedidoDeCompra";
import NuevoPedidoDeCompra from "./assets/components/NuevoPedidoDeCompra/NuevoPedidoDeCompra";
import DetallePedido from "./assets/components/DetallePedido/DetallePedido";
import EditarLinea from "./assets/components/EditarLinea/EditarLinea";
import Register from "./assets/components/Register/Register";
import Login from "./assets/components/Login/Login";
import OlvidarContraseña from "./assets/components/OlvidarContraseña/OlvidarContraseña";
import GestionMercaderia from "./assets/components/GestionMercaderia/Mercaderia/GestionMercaderia";
import DetalleMercaderia from "./assets/components/GestionMercaderia/DetalleMercaderia/DetalleMercaderia";
import NuevaMercaderia from "./assets/components/GestionMercaderia/NuevaMercaderia/NuevaMercaderia";
import AdministrarUsuario from "./assets/components/AdministradorDeUsuarios/AdministrarUsuario/AdministrarUsuario";
import EditarUsuario from "./assets/components/AdministradorDeUsuarios/EditarUsuario/EditarUsuario";
import NuevoUsuario from "./assets/components/AdministradorDeUsuarios/NuevoUsuario/NuevoUsuario";
import EditarMercaderia from "./assets/components/GestionMercaderia/EditarMercaderia/EditarMercaderia";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <BrowserRouter>
    <Sidebar>
    <Routes>
      <Route path="/" element={<PedidoDeCompra/>}/>
      <Route path="/nuevalinea" element={<NuevoPedidoDeCompra/>}/>
      <Route path="/detallepedido" element={<DetallePedido/>}/>
      <Route path="/editarlinea/:articulo1/:cantidad/:costoUnitario/:subtotal" element={<EditarLinea/>}/>
      <Route path="/registro" element={<Register/>}/>
      <Route path="/iniciosesion" element={<Login/>}/>
      <Route path="/recuperarcontraseña" element={<OlvidarContraseña/>}/>
      <Route path="/mercaderia" element={<GestionMercaderia/>}/>
      <Route path="/detalleMercaderia" element={<DetalleMercaderia/>}/>
      <Route path="/nuevaMercaderia" element={<NuevaMercaderia/>}/>
      <Route path="/administrarUsuario" element={<AdministrarUsuario/>}/>
      <Route path="/editarUsuario" element={<EditarUsuario/>}/>
      <Route path="/nuevoUsuario" element={<NuevoUsuario/>}/>
      <Route path="/editarMercaderia" element={<EditarMercaderia/>}/>


    </Routes>

    </Sidebar>
   
    </BrowserRouter>
    
    </>
  );
}

export default App;
