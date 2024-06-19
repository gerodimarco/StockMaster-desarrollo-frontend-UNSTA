import React, { useState, useEffect } from 'react';

function Formulario({ agregarProducto, productoAEditar, actualizarProducto }) {
    const [id, setId] = useState('');
    const [categoria, setCategoria] = useState('');
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [precioUnitario, setPrecioUnitario] = useState('');

    useEffect(() => {
        if (productoAEditar) {
        setId(productoAEditar.id);
        setCategoria(productoAEditar.categoria);
        setNombre(productoAEditar.nombre);
        setCantidad(productoAEditar.cantidad);
        setPrecioUnitario(productoAEditar.precioUnitario);
        } else {
        setId('');
        setCategoria('');
        setNombre('');
        setCantidad('');
        setPrecioUnitario('');
        }
    }, [productoAEditar]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoProducto = {
        id: id || Date.now(),
        categoria,
        nombre,
        cantidad: parseInt(cantidad),
        precioUnitario: parseFloat(precioUnitario),
        };

        if (productoAEditar) {
        actualizarProducto(nuevoProducto);
        } else {
        agregarProducto(nuevoProducto);
        }

        setId('');
        setCategoria('');
        setNombre('');
        setCantidad('');
        setPrecioUnitario('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-5 pt-5">
            <label htmlFor="categoria" className="form-label">Categoría</label>
            <select
            id="categoria"
            className="form-select"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
            >
            <option value="">Seleccione una categoría</option>
            <option value="Limpieza">Limpieza</option>
            <option value="Comestibles">Comestibles</option>
            <option value="Descartables">Descartables</option>
            <option value="Bebidas">Bebidas</option>
            </select>
        </div>
        
        <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Producto</label>
            <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            />
        </div>

        <div className="mb-3">
            <label htmlFor="cantidad" className="form-label">Cantidad</label>
            <input
            type="number"
            className="form-control"
            id="cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            required
            />
        </div>

        <div className="mb-3">
            <label htmlFor="precioUnitario" className="form-label">Precio Unitario $</label>
            <input
            type="number"
            step="0.01"
            className="form-control"
            id="precioUnitario"
            value={precioUnitario}
            onChange={(e) => setPrecioUnitario(e.target.value)}
            required
            />
        </div>

        <button type="submit" className="btn btn-success">
            {productoAEditar ? 'Actualizar' : 'Agregar'}
        </button>
        </form>
    );
}

export default Formulario;
