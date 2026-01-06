<template>
  <div class="home">
    <!-- (2) Hero -->
    <section class="hero" aria-label="Hero">
      <div class="container hero-grid">
        <div class="hero-content">
          <p class="kicker">Portfolio</p>
          <h1 class="title">Hồ Lý Minh Lữ</h1>
          <h2 class="subtitle">Database Engineer & Frontend-Backend Developer</h2>
          <p class="lead">
            Mình xây dựng các hệ thống web và cơ sở dữ liệu hiệu năng cao, tập trung vào kiến trúc rõ ràng,
            trải nghiệm người dùng, và chất lượng mã nguồn.<br />
            Xây dựng hệ thống UI có cấu trúc rõ ràng, tối ưu hiệu năng và thiết kế kiến trúc frontend theo hướng dễ mở rộng, dễ bảo trì.<br />
            Phát triển backend theo mô hình tách lớp rõ ràng, đảm bảo xử lý nghiệp vụ hiệu quả, bảo mật và khả năng mở rộng hệ thống.<br />
            Thiết kế và triển khai các hệ thống thông tin ổn định, hiệu quả, đáp ứng tốt yêu cầu nghiệp vụ và vận hành lâu dài.<br />
          </p>

          <div class="actions">
            <a class="btn" href="#projects">View Projects</a>
            <button class="btn btn-ghost" type="button" :disabled="isExporting" @click="onExportPdf">
              {{ isExporting ? 'Đang tạo PDF…' : 'Download CV' }}
            </button>
          </div>

          <div class="meta">
            <span class="meta-item">Location: Vinh Long, Vietnam</span>
            <span class="meta-item">Email: holyminhludauden@gmail.com   </span>
          </div>
        </div>

        <aside class="hero-aside" aria-label="Quick summary">
          <div class="card">
            <h2 class="card-title">Summary</h2>
            <dl class="stats">
              <div>
                <dt>Experience</dt>
                <dd>— years</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Vue, Node.js, Next.js</dd>
              </div>
              <div>
                <dt>Strength</dt>
                <dd>System thinking</dd>
              </div>
              <div>
                <dt>Availability</dt>
                <dd>Open to opportunities</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </section>

    <!-- (3) About Summary -->
    <section id="about" class="section" aria-label="About summary">
      <div class="container">
        <h2 class="section-title">About</h2>
        <p class="muted">
          Sinh viên Công nghệ Thông tin với nền tảng phát triển web, tập trung vào xây dựng frontend có kiến trúc rõ ràng, kết hợp backend và cơ sở dữ liệu để phát triển các hệ thống thông tin ổn định, hiệu quả và dễ mở rộng.        </p>
        <div class="grid-3">
          <div class="card">
            <h3 class="card-title">Foundation</h3>
            <p class="muted">Nắm vững kiến thức cơ bản về lập trình, cấu trúc dữ liệu đơn giản và cách xây dựng ứng dụng web</p>
          </div>
          <div class="card">
            <h3 class="card-title">Direction</h3>
            <p class="muted">Học tập và thực hành xây dựng các ứng dụng web thực tế, tập trung vào code rõ ràng, dễ hiểu và đúng yêu cầu.</p>
          </div>
          <div class="card">
            <h3 class="card-title">Core stack</h3>
            <p class="muted">Vue.js, HTML, CSS, JavaScript, Git, REST API.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- (4) Skills / Tech Stack -->
    <section id="skills" class="section" aria-label="Skills and tech stack">
      <div class="container">
        <h2 class="section-title">Skills</h2>

        <div class="grid-2">
          <div class="card">
            <h3 class="card-title">Frontend</h3>
            <SkillList :skills="skills.frontend" />
          </div>
          <div class="card">
            <h3 class="card-title">Backend</h3>
            <SkillList :skills="skills.backend" />
          </div>
          <div class="card">
            <h3 class="card-title">Database</h3>
            <SkillList :skills="skills.database" />
          </div>
          <div class="card">
            <h3 class="card-title">Tools / DevOps</h3>
            <SkillList :skills="skills.tools" />
          </div>
        </div>
      </div>
    </section>

    <!-- (5) Featured Projects -->
    <section id="projects" class="section" aria-label="Featured projects">
      <div class="container">
        <div class="section-head">
          <h2 class="section-title">Featured Projects</h2>
         <!-- <p class="muted">3–4 dự án tiêu biểu, mô tả theo hướng bài toán + kiến trúc + tác động.</p>-->
        </div>

        <div class="grid-2">
          <ProjectCard v-for="p in projects" :key="p.id" :project="p" />
        </div>
      </div>
    </section>

    <!-- (6) Experience / Education -->
    <section id="experience" class="section" aria-label="Experience and education">
      <div class="container">
        <h2 class="section-title">Experience / Education</h2>

        <div class="timeline">
          <div v-for="item in experience" :key="item.id" class="timeline-item">
            <div class="timeline-time">{{ item.time }}</div>
            <div class="timeline-body">
              <div class="timeline-title">{{ item.title }}</div>
              <div class="muted">{{ item.subtitle }}</div>
              <ul class="bullets">
                <li v-for="b in item.bullets" :key="b">{{ b }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- (7) Call To Action -->
    <section id="contact" class="section" aria-label="Call to action">
      <div class="container">
        <div class="cta">
          <div>
            <h2 class="section-title">Let’s talk</h2>
            <p class="muted">
Tôi luôn sẵn sàng trao đổi về các cơ hội thực tập, vị trí Junior hoặc dự án hợp tác liên quan đến phát triển web, backend và cơ sở dữ liệu.
<br />
Nếu bạn đang tìm kiếm một lập trình viên có tư duy hệ thống, nghiêm túc với chất lượng sản phẩm và sẵn sàng học hỏi trong môi trường thực tế, đừng ngần ngại liên hệ với tôi.            </p>
          </div>
          <div class="actions">
            <a class="btn" href="mailto:holyminhlu@gmail.com">Contact</a>
            <a class="btn btn-ghost" href="https://github.com/holyminhlu" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import SkillList from '../components/SkillList.vue'
import { exportCurrentPageToPdf } from '../utils/exportPortfolioPdf'

const isExporting = ref(false)

async function onExportPdf() {
  if (isExporting.value) return

  isExporting.value = true
  try {
    await exportCurrentPageToPdf({ filename: 'Ho-Ly-Minh-Lu-portfolio.pdf' })
  } finally {
    isExporting.value = false
  }
}

const skills = {
  frontend: ['Vue 3', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Vite', 'Vue Router'],
  backend: ['Node.js', 'REST API', 'Auth/JWT'],
  database: ['MongoDB', 'MySQL',],
  tools: ['Git', 'CI/CD', 'Docker (basic)',]
}

const projects = [
  {
    id: 1,
    name: 'Phần mềm quản lý điểm sinh viên (Personal Project)',
    description: 'Ứng dụng quản lý điểm: nhập liệu, tra cứu, tổng hợp và chuẩn hoá dữ liệu điểm theo cấu trúc rõ ràng.',
    tech: ['C#', 'SQL'],
    github: 'https://github.com/holyminhlu/csn-da22ttb-holyminhlu-quanlydiemthi-csharp',
    highlights: ['Thiết kế bảng/quan hệ dữ liệu', 'Tách lớp nghiệp vụ cơ bản', 'Quy trình nhập–xuất dữ liệu rõ ràng']
  },
  {
    id: 2,
    name: 'Open Learning Foundation — Website chia sẻ tài liệu (Personal Project)',
    description: 'Nền tảng chia sẻ tài liệu và học tập trực tuyến, hướng đến luồng người dùng rõ ràng và mở rộng tính năng.',
    tech: ['HTML', 'CSS', 'Vue.js', 'Node.js', 'Express', 'MongoDB', 'Bootstrap', 'Dotenv', 'PayOS'],
    github: 'https://github.com/holyminhlu/cn-da22ttb-holyminhlu-chiasetailieu-nodejs',
    highlights: ['Thiết kế API theo tài nguyên', 'Xử lý auth/role cơ bản', 'Tích hợp thanh toán (PayOS)']
  },
  {
    id: 3,
    name: 'Phân tích & thiết kế hệ thống mượn trả thiết bị giảng đường (Team Project)',
    description: 'Phân tích yêu cầu và thiết kế hệ thống quản lý mượn–trả thiết bị: luồng nghiệp vụ, dữ liệu và phân quyền.',
    tech: ['C#', 'SQL'],
    github: '',
    highlights: ['Mô hình hoá nghiệp vụ (mượn/trả, kiểm kê)', 'Thiết kế dữ liệu theo thực thể–quan hệ', 'Phân quyền theo vai trò']
  },
  {
    id: 4,
    name: 'Website quản lý mượn trả thiết bị giảng dạy (Team Project)',
    description: 'Web quản lý mượn–trả thiết bị phục vụ giảng dạy: theo dõi trạng thái thiết bị, lịch sử và quy trình duyệt.',
    tech: ['PHP', 'MySQL'],
    github: 'https://github.com/holyminhlu/WebOS_EquipmentManagement',
    highlights: ['Chuẩn hoá CRUD & validation', 'Thiết kế bảng dữ liệu theo nghiệp vụ', 'Theo dõi lịch sử mượn–trả']
  },
  {
    id: 5,
    name: 'TechStore — Website bán điện thoại & phụ kiện (Team Project)',
    description: 'Website bán hàng với luồng duyệt sản phẩm, giỏ hàng và quản lý dữ liệu sản phẩm theo cấu trúc rõ ràng.',
    tech: ['HTML', 'CSS', 'Vue.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/holyminhlu/DA_PTUDHDV-BAK',
    highlights: ['Thiết kế schema sản phẩm', 'API cho danh mục & tìm kiếm cơ bản', 'Tổ chức component UI theo module']
  },
  {
    id: 6,
    name: 'CheapTrip — Website đặt tour du lịch/nghỉ dưỡng (Team Project)',
    description: 'Hệ thống đặt tour: quản lý tour, đặt chỗ và vận hành theo luồng nghiệp vụ rõ ràng; có CI/CD.',
    tech: ['HTML', 'CSS', 'Vue.js', 'Node.js', 'MongoDB', 'CI/CD'],
    github: 'https://github.com/holyminhlu/CNPM-K22-Product3in1-Dattourdulich',
    highlights: ['Tách lớp backend theo module', 'Chuẩn hoá luồng đặt tour', 'Thiết lập pipeline CI/CD']
  },
  {
    id: 7,
    name: 'Web tĩnh bóng đá (Team Project)',
    description: 'Website tĩnh: tập trung layout, cấu trúc nội dung và khả năng mở rộng trang theo module.',
    tech: ['HTML', 'CSS'],
    github: 'https://github.com/holyminhlu/Web-LOF',
    highlights: ['Cấu trúc layout rõ ràng', 'Tối ưu tổ chức CSS', 'Chuẩn hoá component theo section']
  }
]

const experience = [
  {
    id: 1,
    time: '2025 — Present',
    title: 'Frontend - Backend - Database / Team - university Projects',
    subtitle: 'Full-stack development with backend and database fundamentals',
    },
  {
    id: 2,
    time: '2021 — 2025',
    title: 'Education — Major / University',
    subtitle: 'Nền tảng thuật toán và hệ thống',
  }
]
</script>