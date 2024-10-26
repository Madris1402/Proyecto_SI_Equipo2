let shipments = [];
let editIndex = -1;

// Datos de prueba
const sampleShipments = [
    { insid: '001', cantidad: '20', desc: 'Metros de Licra Azul', disp: "Disponible" },
    { insid: '002', cantidad: '0', desc: 'Botes de Pintura Textil Azul', disp: "No Disponible" },
    { insid: '003', cantidad: '3', desc: 'Metros de Elástico', disp: "Disponible" }
];

// Cargar datos de prueba al inicio
function loadSampleData() {
    shipments = sampleShipments;
    renderTable();
}

document.getElementById('shippingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const insid = document.getElementById('insid').value;
    const cantidad = document.getElementById('cantidad').value;
    const desc = document.getElementById('desc').value;
    const disp = document.getElementById('disp').value;

    if (editIndex === -1) {
        // Agregar nuevo envío
        shipments.push({ insid, cantidad, desc, disp });
    } else {
        // Editar envío existente
        shipments[editIndex] = { insid, cantidad, desc, disp };
        editIndex = -1; // Resetear el índice de edición
    }

    renderTable();
    document.getElementById('shippingForm').reset();
});

function renderTable() {
    const tbody = document.querySelector('#shippingTable tbody');
    tbody.innerHTML = '';

    shipments.forEach((shipment, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${shipment.insid}</td>
            <td>${shipment.cantidad}</td>
            <td>${shipment.desc}</td>
            <td>${shipment.disp}</td>
            <td>
                <button onclick="editShipment(${index})">Editar</button>
                <button onclick="deleteShipment(${index})">Eliminar</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function editShipment(index) {
    const shipment = shipments[index];
    document.getElementById('insid').value = shipment.insid;
    document.getElementById('cantidad').value = shipment.cantidad;
    document.getElementById('desc').value = shipment.desc
    document.getElementById('disp').value = shipment.disp;

    editIndex = index;
}

function deleteShipment(index) {
    shipments.splice(index, 1);
    renderTable();
}

// Cargar datos de prueba al iniciar
loadSampleData();
