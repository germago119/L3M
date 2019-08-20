export class Trabajador {
  constructor(
    public nombre: string,
    public nacimiento: Date,
    public sucursal: string,
    public cedula: number,
    public salario: number,
    public ingreso: Date
  ) {
  }
}
