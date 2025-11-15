import type { Usuario } from "../entities/User";

export interface RepositorioUsuario {
    crearUsuario(usuario: Usuario): Promise<Usuario>;
    obtenerUsuarioPorUsuario(usuario: string): Promise<Usuario | null>;
    actualizarUsuario(id: number, usuario: Usuario): Promise<Usuario | null>;
    eliminarUsuario(id: number): Promise<boolean>;
}