export interface IUsuarioS
{
    token:string,
    usuario: string,
    rol: string
}

export class UsuarioS implements IUsuarioS
{
    token:string;
    usuario: string;
    rol: string;
}

