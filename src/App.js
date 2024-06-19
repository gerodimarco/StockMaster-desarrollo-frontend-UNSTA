import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';
import Tabla from './components/Tabla';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [productos, setProductos] = useState([]);
  const [productoAEditar, setProductoAEditar] = useState(null);

  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
  };

  const actualizarProducto = (productoEditado) => {
    const productosActualizados = productos.map((producto) =>
      producto.id === productoEditado.id ? productoEditado : producto
    );
    setProductos(productosActualizados);
    setProductoAEditar(null);
  };

  const eliminarProducto = (id) => {
    const productosActualizados = productos.filter((producto) => producto.id !== id);
    setProductos(productosActualizados);
  };

  return (
    <div className="container">
      <Navbar />
      <Formulario
        agregarProducto={agregarProducto}
        actualizarProducto={actualizarProducto}
        productoAEditar={productoAEditar}
      />
      <Tabla
        productos={productos}
        setProductoAEditar={setProductoAEditar}
        eliminarProducto={eliminarProducto}
      />
      <Footer />
    </div>
  );
}

export default App;
