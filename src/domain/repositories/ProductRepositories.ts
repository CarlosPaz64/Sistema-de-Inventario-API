/* REPOSITORIO DE LOS PRODUCTOS */
import type { Producto } from "../entities/Product";
import type { CrearProductoDTO, ActualizarProductoDTO } from "../dtos/ProductDTO";

export interface RepositorioProducto {
    crearProducto(producto: CrearProductoDTO): Promise<Producto>;
    obtenerTodosLosProductos(): Promise<Producto[]>;
    obtenerProductoPorId(id_producto: number): Promise<Producto | null>;
    obtenerProductosPorEstatus(estatus: string): Promise<Producto[]>;
    obtenerProductosPorNombre(nombre: string): Promise<Producto[]>;
    obtenerProductosPorImei(imei: string): Promise<Producto[]>;
    actualizarProducto(id_producto: number, producto: ActualizarProductoDTO): Promise<Producto | null>;
    eliminarProducto(id_producto: number): Promise<boolean>;
}