import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

function getPrintableRoot() {
  return (
    document.querySelector('#app') ||
    document.querySelector('main') ||
    document.body
  )
}

/**
 * Exports the current page (rendered DOM) into a multi-page A4 PDF and triggers a download.
 *
 * Note: This is a client-side render-to-canvas approach. It captures what is currently rendered
 * (including styling) and may not perfectly reproduce complex media (e.g., videos/iframes).
 */
export async function exportCurrentPageToPdf({
  filename = 'portfolio.pdf',
  rootElement = null,
  marginMm = 10,
  scale = 2
} = {}) {
  const element = rootElement || getPrintableRoot()
  if (!element) throw new Error('Could not find a root element to export.')

  // Improve odds that text is captured with correct fonts.
  if (document.fonts && typeof document.fonts.ready?.then === 'function') {
    try {
      await document.fonts.ready
    } catch {
      // ignore
    }
  }

  const previousScrollY = window.scrollY

  // Ensure the capture starts from a stable scroll position.
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

  // Let layout settle.
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))

  const canvas = await html2canvas(element, {
    backgroundColor: null,
    useCORS: true,
    allowTaint: true,
    scale,
    scrollX: 0,
    scrollY: -window.scrollY,
    windowWidth: document.documentElement.scrollWidth,
    windowHeight: document.documentElement.scrollHeight
  })

  window.scrollTo({ top: previousScrollY, left: 0, behavior: 'instant' })

  const imgData = canvas.toDataURL('image/png', 1.0)

  const pdf = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'a4',
    compress: true
  })

  const pageWidth = pdf.internal.pageSize.getWidth()
  const pageHeight = pdf.internal.pageSize.getHeight()

  const contentWidth = pageWidth - marginMm * 2
  const imgHeight = (canvas.height * contentWidth) / canvas.width

  const usablePageHeight = pageHeight - marginMm * 2

  let heightLeft = imgHeight
  let positionY = marginMm

  // First page
  pdf.addImage(imgData, 'PNG', marginMm, positionY, contentWidth, imgHeight)
  heightLeft -= usablePageHeight

  // Additional pages by shifting the same large image upward.
  while (heightLeft > 0) {
    pdf.addPage()
    positionY = marginMm - (imgHeight - heightLeft)
    pdf.addImage(imgData, 'PNG', marginMm, positionY, contentWidth, imgHeight)
    heightLeft -= usablePageHeight
  }

  pdf.save(filename)
}
