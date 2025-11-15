/* CREACIÓN DE LA PRIMERA ENTIDAD DE NUESTRO SISTEMA */
export interface Producto {
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
     // Los campos de las fechas son opcionales ya que la base de datos los puede asignar automáticamente
}