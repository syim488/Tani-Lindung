const tipsDatabase = [
  {
    id: "ekstrak_bawang_putih",
    cat: "pestisida",
    tag: "Pestisida Nabati",
    title: "Ramuan Ekstrak Bawang Putih Pengusir Kutu Daun",
    desc: "Kandungan alisin dan minyak atsiri alami pada bawang putih sangat efektif mengusir kutu kebul dan ulat tanpa merusak daun tanaman.",
    img: "bawang putih.jpg"
  },
  {
    id: "jajar_legowo_sawah",
    cat: "budidaya",
    tag: "Teknik Budidaya",
    title: "Mengurangi Lembab Sawah dengan Pola Jajar Legowo",
    desc: "Pola tanam sistematis ini menciptakan sirkulasi udara optimal dan akses sinar matahari langsung di lorong sawah.",
    img: "legowo.jpg"
  },
  {
    id: "sanitasi_gulma_inang",
    cat: "musim",
    tag: "Sanitasi Lahan",
    title: "Sanitasi Gulma Rutin Sebagai Pencegah Inang Hama",
    desc: "Membersihkan pematang secara berkala memutus siklus bertahan hidup wereng dan ulat grayak antar musim tanam.",
    img: "gulma.jpg"
  },
  {
    id: "pestisida_daun_nimba",
    cat: "pestisida",
    tag: "Pestisida Nabati",
    title: "Aplikasi Daun Nimba Sebagai Anti-Makan Ulat",
    desc: "Senyawa azadirachtin pada daun mimba/nimba melumpuhkan nafsu makan larva ulat secara alami dan aman bagi lingkungan.",
    img: "nimba.jpg"
  },
  {
    id: "antisipasi_musim_hujan",
    cat: "musim",
    tag: "Panduan Musim Hujan",
    title: "Manajemen Drainase Bedengan di Puncak Musim Hujan",
    desc: "Mencegah genangan air berlebih di pangkal akar cabai dan tomat untuk menghindari infeksi busuk batang dan serangan jamur patogen.",
    img: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "pupuk_organik_cair",
    cat: "nutrisi",
    tag: "Kompos & Nutrisi",
    title: "Pembuatan Pupuk Organik Cair dari Limbah Dapur",
    desc: "Memanfaatkan air cucian beras dan molase untuk membiakkan mikroorganisme lokal penyubur tanah dan perangsang akar.",
    img: "pupuk.jpg"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('tipsGridContainer');
  const tagButtons = document.querySelectorAll('.tag-btn');
  let activeCategory = 'all';

  function renderTips() {
    if (!container) return;
    container.innerHTML = '';

    const filtered = tipsDatabase.filter(item => {
      return activeCategory === 'all' || item.cat === activeCategory;
    });

    filtered.forEach(tip => {
      const card = document.createElement('article');
      card.className = 'tip-card';
      card.innerHTML = `
        <div class="tip-card-img">
          <img src="${tip.img}" alt="${tip.title}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80';">
        </div>
        <div class="tip-card-content">
          <div class="tip-meta">
            <span class="tip-badge">${tip.tag}</span>
          </div>
          <h3 class="tip-title">${tip.title}</h3>
          <p class="tip-desc">${tip.desc}</p>
          <a href="detail-tips.html?id=${tip.id}" class="tip-link">
            Baca Panduan Lengkap <span>&rarr;</span>
          </a>
        </div>
      `;
      container.appendChild(card);
    });
  }

  tagButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tagButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-cat');
      renderTips();
    });
  });

  renderTips();
});