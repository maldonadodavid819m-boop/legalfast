function generar() {
  const tipo = document.getElementById("tipo").value;
  const nombre = document.getElementById("nombre").value.trim();
  const cedula = document.getElementById("cedula").value.trim();
  const entidad = document.getElementById("entidad").value.trim();
  const motivo = document.getElementById("motivo").value.trim();

  const resultado = document.getElementById("resultado");

  // 🔴 Validación básica (evita errores)
  if (!nombre || !cedula || !entidad || !motivo) {
    resultado.innerText = "⚠️ Por favor completa todos los campos antes de generar el documento.";
    return;
  }

  // 🧾 Documento generado
  const texto = `
━━━━━━━━━━━━━━━━━━━━━━
📄 ${tipo.toUpperCase()}
━━━━━━━━━━━━━━━━━━━━━━

Señores:
${entidad}

Yo, ${nombre}, identificado con cédula de ciudadanía ${cedula}, presento respetuosamente la siguiente solicitud:

${motivo}

━━━━━━━━━━━━━━━━━━━━━━
Atentamente,
${nombre}
━━━━━━━━━━━━━━━━━━━━━━
`;

  resultado.innerText = texto;
}
