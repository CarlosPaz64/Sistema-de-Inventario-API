/* ENTIDAD RELACIONADA A LA TABLA DE USUARIOS */
export interface Usuario {
    id: number;
    usuario: string;
    contrasenia: string;
    foto_de_perfil?: string; // URL o base64
}