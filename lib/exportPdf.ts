import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export async function exportLabelPDF() {
  const element = document.getElementById("label-preview")

  if (!element) {
    alert("Preview not found")
    return
  }

  // Capture HTML as image
  const canvas = await html2canvas(element, {
    scale: 2, // better quality
  })

  const imgData = canvas.toDataURL("image/png")

  // 4x6 inch PDF (288 x 432 points)
  const pdf = new jsPDF({
    unit: "pt",
    format: [288, 432],
  })

  pdf.addImage(imgData, "PNG", 0, 0, 288, 432)
  pdf.save("label.pdf")
}