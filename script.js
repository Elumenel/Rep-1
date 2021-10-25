function calcularDescuento(){
  var cantidadTickets = document.getElementById("cantidad").value
  var categoriaDesc = document.getElementById("categoria").value
  var totalPagar = document.getElementById("total-pagar")

  precioBruto = 200 * cantidadTickets
  precioFinal = precioBruto - precioBruto * categoriaDesc / 100

  totalPagar.value = ("Total a Pagar: $ " + precioFinal)
}
