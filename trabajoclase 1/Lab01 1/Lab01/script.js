document.addEventListener("DOMContentLoaded", () => {
  const cities = [];

  const PagoForm = document.getElementById("addPagoForm");

  PagoForm.addEventListener("submit", e => {
    e.preventDefault();

    const esTarjetad = document.getElementById("esTarjetad").value;
    const esTrasnferencia = document.getElementById("esTrasnferencia").value;
    const esTarjetac = document.getElementById("esTarjetac").value;
    const esContrae = document.getElementById("esContrae").value;

    if (!esTarjetad || !esTrasnferencia || !esTarjetac || !esContrae) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const pago = { esTarjetac, esTarjetad, esTrasnferencia, esContrae };
    cities.push(pago);

    updatePagoTable(cities);
    PagoForm.reset();
  });

  function updatePagoTable(data) {
    const tableBody = document.getElementById("PagoTableBody");
    tableBody.innerHTML = "";
    data.forEach(pago => {
      const row = `
        <tr>
          <td>${pago.esTarjetac}</td>
          <td>${pago.esTarjetad}</td>
          <td>${pago.esTrasnferencia}</td>
          <td>${pago.esContrae}</td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  }
  
});

