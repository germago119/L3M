export class Producto {
  constructor(
    public nombre: string,
    public descripcion: string,
    public barcode: string,
    public proveedor: string,
    public precioCosto: number,
    public descuento: boolean,
    public impuesto: boolean,
    public precioSucursal: number
  ) {
  }
}
