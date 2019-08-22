export class Producto {
  constructor(
    public codigoBarraProducto: number,
    public nombreProducto: string,
    public descripcionProducto: string,
    public proveedorProducto: string,
    public precioProducto: number,
    public impuestoProducto: string,
    public descuentoProducto: string,
    public sucursalProducto: string
  ) {}
}
