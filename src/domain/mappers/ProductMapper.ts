// Mapper de los productos
import type { Producto } from "../entities/Product";
import type { CrearProductoDTO, ActualizarProductoDTO, ProductoDTO } from "../dtos/ProductDTO";

/* Función para mapear de Producto a CrearProductoDTO */
export function createProductoDTOToProducto(producto: CrearProductoDTO): Producto {
    const now = new Date();

    return {
        id_producto: 0, // La base de datos asignará el ID
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        cantidad: producto.cantidad,
        estatus: producto.estatus,
        imei: producto.imei,
        fotografia1: producto.fotografia1,
        fotografia2: producto.fotografia2,
        fecha_creacion: now,
        fecha_modificacion: now
    }
}

/* Función para mapear de ActualizarProductoDTO a Producto */   
export function applyActualizarProductoDTOToProducto(productoExistente: Producto, productoActualizado: ActualizarProductoDTO): Producto {
    return {
        ...productoExistente,
        ...productoActualizado,
        fecha_modificacion: new Date() // Actualizamos la fecha de modificación mediante la fecha actual
    }
}

/*| Función para mapear de Producto a ProductoDTO */
export function EntityToProductoDTO(producto: Producto): ProductoDTO {
    return {
        id_producto: producto.id_producto,
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        cantidad: producto.cantidad,
        estatus: producto.estatus,
        imei: producto.imei,
        fotografia1: producto.fotografia1,
        fotografia2: producto.fotografia2,
        fecha_creacion: producto.fecha_creacion,
        fecha_modificacion: producto.fecha_modificacion
    }
}