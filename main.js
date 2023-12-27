let nombre = prompt("ingrese su nombre")//Pide el nombre al usuario
console.log(nombre)
let saludoCompleto = "hola "+ nombre;
alert(saludoCompleto);
alert("simulador carrito de compras") 

const productos = [
    {nombreProducto: "harina", precio: 50},
    {nombreProducto: "gaseosa",  precio: 150},
    {nombreProducto: "cerveza",  precio: 250},
    {nombreProducto: "leche", precio: 350},
    {nombreProducto: "pan", precio: 30},
];

let carrito =[]



function seleccionCarrito () {
    let seleccion = prompt("hola desea comprar algun producto, escriba si o no") 
    while(seleccion != "si" && seleccion !="no"){
        alert("por favor ingresa si o no")
        seleccion = prompt("hola desea comprar algun producto, escriba si o no")
    }
    if (seleccion == "si"){
        alert("ahi se le muestra la lista de productos")
        let todoslosProductos = productos.map((producto)=>  producto.nombreProducto + " "+ producto.precio +"$");
        alert(todoslosProductos.join(" / "))
    }else if (seleccion =="no"){
        alert("gracias por visitar")
    }
    while (seleccion !="no"){
        let producto = prompt("agrega un producto a tu carrito")
        let precio = 0; //se va modificando segun el procucto que se elija
        if (producto =="harina" || producto =="gaseosa" || producto =="cerveza" || producto =="leche" || producto =="pan" ){
           switch(producto) {
            case "harina":
                precio= 50
            break;
            case "gaseosa":
                precio= 150
            break;
            case "cerveza":
                precio= 250
            break;
            case "leche":
                precio= 350
            break;
            case "pan":
                precio= 30
            break;
            default:
                break;
           }
           let unidades = parseInt(prompt("cuantas unidades quiere llevar"))

           carrito.push({producto, unidades,precio})
        } else{
            alert("no tenemos ese producto")
        }
        seleccion =prompt("desea seguir comprando?")
        while (seleccion=="no"){
            alert("gracias por la compra!")
            carrito.forEach((carritoFinal)=>{
                console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio} `)
            })
            break;
        }
    }
    const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)//acumulador
    
    return alert(`el total a pagar por su compra es: ${total} `)
}

seleccionCarrito ()