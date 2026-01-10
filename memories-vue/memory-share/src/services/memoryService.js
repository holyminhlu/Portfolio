function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const BAO_CAO_QTDA_IMAGE_URL = new URL(
  '../assets/images/memories/BaoCaoQTDA.jpg',
  import.meta.url
).href

const SAMPLE_MEMORIES = [
  {
    id: '3',
    title: 'Báo cáo quản trị dự án CNTT cùng team',
    date: '2025-12-17',
    imageUrl: BAO_CAO_QTDA_IMAGE_URL,
    excerpt:
      'Hình ảnh ghi lại khoảnh khắc nhóm chúng tôi trong buổi báo cáo đồ án môn Quản trị Dự án CNTT, thể hiện tinh thần làm việc nhóm, sự chuẩn bị nghiêm túc và trách nhiệm trong quá trình thực hiện đề tài.',
    content:
      'Hình ảnh ghi lại khoảnh khắc nhóm chúng tôi trong buổi báo cáo đồ án môn Quản trị Dự án CNTT, thể hiện tinh thần làm việc nhóm, sự chuẩn bị nghiêm túc và trách nhiệm trong quá trình thực hiện đề tài.'
  },
  {
    id: '1',
    title: 'Kỷ niệm đầu tiên',
    date: '2025-01-10',
    excerpt: 'Một ngày rất đặc biệt — mình bắt đầu ghi lại những điều nhỏ bé.',
    content:
      'Đây là nội dung mẫu cho kỷ niệm #1. Bạn có thể thay bằng dữ liệu thật (API/DB) sau.'
  },
  {
    id: '2',
    title: 'Chuyến đi ngắn',
    date: '2025-06-21',
    excerpt: 'Một chuyến đi ngắn nhưng đáng nhớ.',
    content: 'Đây là nội dung mẫu cho kỷ niệm #2.'
  }
]

export async function getMemories() {
  await sleep(250)
  return [...SAMPLE_MEMORIES]
}
