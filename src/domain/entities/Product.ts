/* CREACIÓN DE LA PRIMERA ENTIDAD DE NUESTRO SISTEMA */
export interface Producto {
     id: number;
     nombre: string;
     descripcion: string;
     cantidad: number;
     estatus: string;
     imei: number;
     fotografia1: string;
     fotografia2: string;
     fecha_creacion: Date;
     fecha_modificacion: Date;
}