export class Trabajador {
  constructor(
    public cedulaTrabajador: number,
    public nombreCompletoTrabajador: string,
    public fechaNacimientoTrabajador: Date,
    public fechaIngresoTrabajador: Date,
    public sucursalTrabajador: string,
    public salarioHoraTrabajador: number,
    public horasLaboradasTrabajador: number,
    public horasExtraTrabajador: number
  ) {
  }
}
