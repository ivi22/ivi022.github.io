class Cliente{

    constructor(nombre,apellido,contraseña){

        this.nombre= nombre;

        this.apellido = apellido;

        this.contraseña = contraseña;

}}

const arrayClientes = {};
        function crearUsuario(){
        
            let nombre = prompt("ingrese su nombre:");
        
            let apellido = prompt("ingrese su apellido:");
        
            let contraseña = parseInt(prompt("Ingrese una contraseña"));

            let cliente = new Cliente(nombre, apellido, contraseña);

            arrayClientes.push(cliente);
        
            alert("Bienvenido a nuestro sitio web");
        
            console.log(arrayClientes);
            }



const producto = document.getElementById("productos");

    const hamburguesa = new producto("Hamburguesa con cheddar",1000,"img/concheddar.jpeg" );

    const hamburguesaSimple = new producto("Hamburguesa Simple",600,"img/simple.jpeg" );
    
    const pizza = new producto("Pizza",1200,"img/pizza.jpeg" );
    
    const lasaña = new producto("Lasaña",900,"img/lasaña.jpeg" );
    
    const picada = new producto("Picada",2000,"img/picada.jpg" );
    
    
    
    const arrayProductos = [hamburguesa, hamburguesaSimple, pizza, lasaña, picada];
    
    
    
    arrayProductos.forEach(producto => {
    
        const div = document.createElement("div");
    
        div.className = "caja";
    
        div.innerHTML = `<p class = "titulo">Nombre: ${producto.nombre}</p>
    
                        <p>Precio: ${producto.precio}</p>
    
                        <img class = "comidita" src ="${producto.url}">
    
                        <button>Me lo llevo</button>`;
    
                        
    
                        producto.appendChild(div);
    
                                   
    
    })
    
const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    const indice = carrito.indexOg (producto);
    if(producto.cantidad === 1){
        carrito.splice(indice, 1);
    } else {
        producto.cantidad--
    }
    mostrarCarrito();

    localStorage.setItem("carrito", JSON.stringify(carrito));
    }    

const btnCarrito = document.getElementById("btn");

btnCarrito.addEventListener("click", () => {
    console.log("Agregaste el producto al carrito");
    alert("Agregaste el producto al carrito");
})
 const total = document.getElementById("total");

 const montoTotal = () => { 
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
    })
    total.innerHTML = `Total: $$(totalCompra)`;
 }
