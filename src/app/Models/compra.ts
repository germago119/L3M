export class Compra {
  constructor(
    public descripcionCompra: string,
    public fechaRealCompra: Date,
    public fechaRegistroCompra: Date,
    public proveedorCompra: string,
    public fotoCompra: string,
    public sucursalRegistraCompra: string
  ) {
  }
}
