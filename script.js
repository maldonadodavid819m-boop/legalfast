function generarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const tipo = document.getElementById("tipo").value;
  const nombre = document.getElementById("nombre").value.trim();
  const cedula = document.getElementById("cedula").value.trim();
  const entidad = document.getElementById("entidad").value.trim();
  const motivo = document.getElementById("motivo").value.trim();

  if (!nombre || !cedula || !entidad || !motivo) {
    alert("⚠️ Completa todos los campos");
    return;
  }

  const fecha = new Date().toLocaleDateString();

  // 🧠 ENCABEZADO PRO
  doc.setFont("times", "bold");
  doc.setFontSize(16);
  doc.text("DOCUMENTO LEGAL FORMAL", 105, 20, null, null, "center");

  doc.setFontSize(11);
  doc.setFont("times", "normal");
  doc.text(`Tipo de documento: ${tipo}`, 20, 35);
  doc.text(`Fecha: ${fecha}`, 20, 42);

  // 📄 DESTINATARIO
  doc.setFont("times", "bold");
  doc.text("Señores:", 20, 55);
  doc.setFont("times", "normal");
  doc.text(entidad, 20, 62);

  // 👤 DATOS PERSONALES
  doc.setFont("times", "bold");
  doc.text("Yo:", 20, 75);
  doc.setFont("times", "normal");
  doc.text(`${nombre}, identificado con cédula ${cedula}`, 20, 82);

  // 🧾 CUERPO
  doc.setFont("times", "bold");
  doc.text("Solicitud:", 20, 100);

  const texto = doc.splitTextToSize(motivo, 170);
  doc.setFont("times", "normal");
  doc.text(texto, 20, 110);

  // ✍️ FIRMA
  doc.text("Atentamente,", 20, 150);
  doc.text(nombre, 20, 160);

  // 📥 DESCARGA
  doc.save(`${tipo}_${nombre}.pdf`);
}
