function finalizarPedido() {
    // Obtener datos de cotizador de localStorage
    const cotizadorData = JSON.parse(localStorage.getItem('cotizadorData'));
    const consumidor = document.getElementById('consumidor').value;
    const contacto = document.getElementById('contacto').value;
    
    const pedidoData = {
        id_cotizacion: document.getElementById('idCotizacion').value,
        tecnica: cotizadorData.tecnica,
        producto: cotizadorData.producto,
        cantidad: cotizadorData.cantidad,
        fecha_requerida: cotizadorData.fecha_requerida,
        costo: cotizadorData.costo,
        consumidor: consumidor,
        contacto: contacto
    };
    
    // Guardar datos en localStorage
    let pedidosActivos = JSON.parse(localStorage.getItem('pedidosActivos')) || [];
    pedidosActivos.push(pedidoData);
    localStorage.setItem('pedidosActivos', JSON.stringify(pedidosActivos));
    
    
    // Redirigir a pedidos activos
    window.location.href = '../Pedidos Activos/Activos.html';

}

function generarID() {
    // Genera un número aleatorio de 6 dígitos
    const id = Math.floor(100000 + Math.random() * 900000);
    document.getElementById("idCotizacion").textContent = id;
}

// Ejecuta la función al cargar la página
window.onload = generarID;


function openNav() {
    document.getElementById("mySidebar").classList.add("open");
}

function closeNav() {
    document.getElementById("mySidebar").classList.remove("open");
}


