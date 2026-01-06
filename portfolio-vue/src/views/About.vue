<template>
	<div class="page">
		<section class="hero">
			<div class="container">
				<div class="hero-grid">
					<div class="stack">
						<p class="kicker">Portfolio • Lập trình viên</p>
						<h1 class="title">Xin chào, mình là <span class="nowrap">[Tên của bạn]</span></h1>
						<p class="lead">
							Mình xây dựng sản phẩm web hiện đại, tập trung vào hiệu năng, trải nghiệm người dùng,
							và chất lượng mã nguồn. Đây là nơi tổng hợp kỹ năng, dự án và hành trình nghề nghiệp.
						</p>

						<div class="actions">
							<RouterLink class="btn" to="/du-an">Xem dự án</RouterLink>
							<RouterLink class="btn btn-ghost" to="/lien-he">Liên hệ</RouterLink>
						</div>

						<div class="chips">
							<span class="chip">Frontend</span>
							<span class="chip">Vue 3</span>
							<span class="chip">UI/UX</span>
							<span class="chip">Performance</span>
						</div>
					</div>

					<aside class="hero-aside" aria-label="Tóm tắt nhanh">
						<div class="card">
							<h2 class="card-title">Tóm tắt</h2>
							<dl class="stats">
								<div>
									<dt>Kinh nghiệm</dt>
									<dd>— năm</dd>
								</div>
								<div>
									<dt>Dự án tiêu biểu</dt>
									<dd>—</dd>
								</div>
								<div>
									<dt>Vai trò</dt>
									<dd>Frontend / Fullstack</dd>
								</div>
								<div>
									<dt>Địa điểm</dt>
									<dd>—</dd>
								</div>
							</dl>
							<p class="muted">
								Gợi ý: bạn có thể thay “—” bằng thông tin thật sau khi chốt nội dung.
							</p>
						</div>
					</aside>
				</div>
			</div>
		</section>

		<section class="section">
			<div class="container">
				<h2 class="section-title">Mình có thể giúp gì?</h2>
				<p class="muted">
					Tập trung vào các phần quan trọng của sản phẩm: tốc độ tải, khả năng mở rộng, tính ổn định
					và trải nghiệm người dùng.
				</p>

				<div class="grid-3">
					<div class="card">
						<h3 class="card-title">Giao diện rõ ràng</h3>
						<p class="muted">Thiết kế theo hướng hệ thống, dễ mở rộng, dễ bảo trì.</p>
					</div>
					<div class="card">
						<h3 class="card-title">Hiệu năng tốt</h3>
						<p class="muted">Tối ưu bundle, caching, rendering và trải nghiệm tương tác.</p>
					</div>
					<div class="card">
						<h3 class="card-title">Chất lượng code</h3>
						<p class="muted">Code rõ ràng, testable, dễ review và dễ onboard.</p>
					</div>
				</div>
			</div>
		</section>

		<section class="section">
			<div class="container">
				<h2 class="section-title">Điều hướng nhanh</h2>
				<div class="quick-links">
					<RouterLink class="quick" to="/ky-nang">
						<span class="quick-title">Kỹ năng</span>
						<span class="muted">Tech stack & công cụ</span>
					</RouterLink>
					<RouterLink class="quick" to="/du-an">
						<span class="quick-title">Dự án</span>
						<span class="muted">Sản phẩm & case study</span>
					</RouterLink>
					<RouterLink class="quick" to="/kinh-nghiem">
						<span class="quick-title">Kinh nghiệm</span>
						<span class="muted">Vai trò & trách nhiệm</span>
					</RouterLink>
					<RouterLink class="quick" to="/lien-he">
						<span class="quick-title">Liên hệ</span>
						<span class="muted">Email & mạng xã hội</span>
					</RouterLink>
					<RouterLink class="quick" to="/ky-niem">
						<span class="quick-title">Kỷ niệm</span>
						<span class="muted">Ảnh / viết ngắn</span>
					</RouterLink>
				</div>
			</div>
		</section>
	</div>
</template>