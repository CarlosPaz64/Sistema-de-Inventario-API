/* DTO PARA LOS PRODUCTOS */
/* EXPLICACION: Data Transfer Object para la creación, actualización y representación de productos en el sistema */
export interface CrearProductoDTO {
    nombre: string;
    descripcion: string;
    cantidad: number;
    estatus: string;
    imei?: string;
    fotografia1?: string;
    fotografia2?: string;
}

export interface ActualizarProductoDTO {
    nombre?: string;
    descripcion?: string;
    cantidad?: number;
    estatus?: string;
    imei?: string;
    fotografia1?: string;
    fotografia2?: string;
}

export interface ProductoDTO{
    id_producto: number;
    nombre: string;
    descripcion: string;
    cantidad: number;
    estatus: string;
    imei?: string;
    fotografia1?: string;
    fotografia2?: string;
    fecha_creacion?: Date;
    fecha_modificacion?: Date;
}