import React from 'react';

function Tabla({ productos, setProductoAEditar, eliminarProducto }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Categoría</th>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio Unitario</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id}>
            <td>{producto.categoria}</td>
            <td>{producto.nombre}</td>
            <td>{producto.cantidad}</td>
            <td>${producto.precioUnitario.toFixed(2)}</td>
            <td>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setProductoAEditar(producto)}
              >
                Editar
              </button>
              {' '}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => eliminarProducto(producto.id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;
