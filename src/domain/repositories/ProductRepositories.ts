/* REPOSITORIO DE LOS PRODUCTOS */
import type { Producto } from "../entities/Product";

export interface RepositorioProducto {
    obtenerProductos(): Promise<Producto[]>;
    obtenerProductoPorId(id: number): Promise<Producto | null>;
    obtenerProductoPorImei(imei: number): Promise<Producto | null>;
    obtenerProductosPorEstatus(estatus: string): Promise<Producto[]>;
    crearProducto(producto: Producto): Promise<Producto>;
    actualizarProducto(id: number, producto: Producto): Promise<Producto | null>;
    eliminarProducto(id: number): Promise<boolean>;
}