//función formatear precio para que el valor aparezca con punto
const formatearPrecio = (precio) =>
  precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

export { formatearPrecio };