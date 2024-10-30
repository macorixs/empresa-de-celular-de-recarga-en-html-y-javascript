// Función para realizar la recarga
function realizarRecarga() {
    const compania = document.getElementById("compania").value;
    const numero = document.getElementById("numero").value;
    const monto = document.getElementById("monto").value;

    if (!compania || !numero || !monto) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Verifica el monto
    if (monto < 30 || monto > 5000) {
        alert("El monto debe estar entre 30 y 5000.");
        return;
    }

    // Actualiza el ticket
    document.getElementById("ticketCompania").innerText = compania;
    document.getElementById("ticketNumero").innerText = numero;
    document.getElementById("ticketMonto").innerText = monto;

    // Muestra el ticket
    document.getElementById("ticket").style.display = "block";
}

// Función para imprimir el ticket
function imprimirTicket() {
    const ticketContent = document.getElementById("ticket").innerHTML;
    const ventanaImpresion = window.open("", "", "width=600,height=400");
    ventanaImpresion.document.write("<html><head><title>Ticket de Recarga</title></head><body>");
    ventanaImpresion.document.write(ticketContent);
    ventanaImpresion.document.write("</body></html>");
    ventanaImpresion.document.close();
    ventanaImpresion.print();
}