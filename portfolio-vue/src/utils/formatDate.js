export function formatDate(isoDateString) {
  if (!isoDateString) return ''
  const d = new Date(isoDateString)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('vi-VN')
}