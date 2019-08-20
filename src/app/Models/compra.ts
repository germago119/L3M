export class Compra {
  constructor(
    public descripcion: string,
    public fechaReal: Date,
    public fechaRegistro: Date,
    public proveedor: string,
    public foto: string,
    public sucursal: string
  ) {
  }
}
