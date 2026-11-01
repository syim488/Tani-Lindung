const tipsDatabase = [
  // ===================== TIPS AWAL (6) =====================
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
  },

  // ===================== PESTISIDA NABATI & HAYATI (11) =====================
  {
    id: "ekstrak_tembakau",
    cat: "pestisida",
    tag: "Pestisida Nabati",
    title: "Rendaman Tembakau untuk Mengendalikan Ulat dan Kutu Daun",
    desc: "Nikotin pada daun atau puntung tembakau bekerja sebagai racun kontak bagi serangga lunak. Gunakan sarung tangan dan jangan semprot saat tanaman hendak dipanen.",
    img: "tembakau.jpg"
  },
  {
    id: "semprotan_serai_wangi",
    cat: "pestisida",
    tag: "Pestisida Nabati",
    title: "Semprotan Serai Wangi Pengusir Hama Penghisap",
    desc: "Aroma kuat minyak atsiri serai wangi membuat kutu, thrips, dan walang sangit enggan mendekat. Cukup haluskan batang serai, rendam semalam, lalu saring.",
    img: "serai.jpg"
  },
  {
    id: "ekstrak_cabai_rawit",
    cat: "pestisida",
    tag: "Pestisida Nabati",
    title: "Ekstrak Cabai Rawit Pengusir Semut dan Kutu Putih",
    desc: "Kapsaisin pada cabai rawit menimbulkan rasa panas yang tidak disukai serangga. Campurkan sedikit sabun cair agar larutan menempel merata pada daun.",
    img: "cabai-rawit.jpg"
  },
  {
    id: "larutan_sabun_cair",
    cat: "pestisida",
    tag: "Pestisida Nabati",
    title: "Larutan Sabun Cair untuk Memberantas Kutu Putih dan Tungau",
    desc: "Sabun cair tanpa pemutih dan pelembut dilarutkan dalam air bersih untuk melemahkan lapisan pelindung tubuh serangga lunak. Uji di satu daun dulu sebelum disemprot menyeluruh.",
    img: "sabun.jpg"
  },
  {
    id: "perangkap_kuning",
    cat: "pestisida",
    tag: "Pengendalian Hayati",
    title: "Perangkap Lekat Kuning untuk Kutu Kebul dan Lalat Buah",
    desc: "Serangga tertarik pada warna kuning dan menempel pada permukaan berperekat. Pasang sedikit di atas tajuk tanaman dan ganti jika sudah penuh.",
    img: "perangkap-kuning.jpg"
  },
  {
    id: "metil_eugenol_lalat_buah",
    cat: "pestisida",
    tag: "Pengendalian Hayati",
    title: "Perangkap Metil Eugenol untuk Lalat Buah Cabai dan Mangga",
    desc: "Zat penarik lalat buah jantan diteteskan pada kapas di dalam botol perangkap. Populasi jantan yang menurun mengurangi pembuahan dan kerusakan buah.",
    img: "lalat-buah.jpg"
  },
  {
    id: "jamur_trichoderma",
    cat: "pestisida",
    tag: "Agen Hayati",
    title: "Trichoderma Pelindung Akar dari Jamur Penyakit Tanah",
    desc: "Jamur antagonis ini menekan Fusarium dan Phytophthora sekaligus membantu penguraian bahan organik. Campurkan dengan pupuk kandang sebelum tanam.",
    img: "trichoderma.jpg"
  },
  {
    id: "beauveria_bassiana",
    cat: "pestisida",
    tag: "Agen Hayati",
    title: "Jamur Beauveria bassiana untuk Wereng dan Penggerek",
    desc: "Spora jamur entomopatogen ini menginfeksi tubuh serangga hama hingga mati. Semprot pada sore hari agar spora tidak rusak oleh sinar matahari langsung.",
    img: "beauveria.jpg"
  },
  {
    id: "ekstrak_daun_pepaya",
    cat: "pestisida",
    tag: "Pestisida Nabati",
    title: "Ekstrak Daun Pepaya untuk Menekan Ulat dan Kutu Daun",
    desc: "Getah dan senyawa papain pada daun pepaya mengganggu pencernaan serangga. Tumbuk daun segar, rendam sehari, lalu saring sebelum disemprotkan.",
    img: "daun-pepaya.jpg"
  },
  {
    id: "kunyit_jahe_antijamur",
    cat: "pestisida",
    tag: "Pestisida Nabati",
    title: "Larutan Kunyit dan Jahe Pencegah Jamur pada Daun",
    desc: "Kandungan kurkumin dan gingerol berperan sebagai antijamur alami untuk mencegah bercak daun pada cabai, tomat, dan sayuran daun.",
    img: "kunyit-jahe.jpg"
  },
  {
    id: "tanaman_refugia",
    cat: "pestisida",
    tag: "Pengendalian Hayati",
    title: "Tanaman Refugia di Pematang untuk Mengundang Musuh Alami",
    desc: "Bunga kenikir, bunga matahari, dan kemangi di tepi lahan menyediakan nektar bagi laba-laba, kumbang koksi, dan tawon parasitoid yang memangsa hama.",
    img: "refugia.jpg"
  },

  // ===================== TEKNIK BUDIDAYA (11) =====================
  {
    id: "tumpangsari_jagung_kacang",
    cat: "budidaya",
    tag: "Teknik Budidaya",
    title: "Tumpangsari Jagung dan Kacang Tanah untuk Menekan Hama",
    desc: "Kombinasi dua jenis tanaman membingungkan hama dan memanfaatkan ruang secara efisien. Kacang tanah juga membantu menambah nitrogen di dalam tanah.",
    img: "tumpangsari.jpg"
  },
  {
    id: "rotasi_tanaman",
    cat: "budidaya",
    tag: "Teknik Budidaya",
    title: "Rotasi Tanaman untuk Memutus Siklus Hama dan Penyakit",
    desc: "Bergantian menanam famili yang berbeda, misalnya cabai lalu jagung atau kacang-kacangan, mencegah penumpukan patogen tular tanah di lahan yang sama.",
    img: "rotasi.jpg"
  },
  {
    id: "mulsa_plastik_hitam_perak",
    cat: "budidaya",
    tag: "Teknik Budidaya",
    title: "Mulsa Plastik Hitam Perak untuk Cabai dan Melon",
    desc: "Mulsa menekan gulma, menjaga kelembapan, dan permukaan peraknya memantulkan cahaya sehingga mengurangi kunjungan kutu daun dan thrips.",
    img: "mulsa.jpg"
  },
  {
    id: "jarak_tanam_ideal",
    cat: "budidaya",
    tag: "Teknik Budidaya",
    title: "Atur Jarak Tanam Ideal agar Tanaman Tidak Saling Menaungi",
    desc: "Jarak tanam yang terlalu rapat memicu kelembapan tinggi dan penyakit jamur. Sesuaikan jarak dengan varietas dan kesuburan tanah di lahan Anda.",
    img: "jarak-tanam.jpg"
  },
  {
    id: "seleksi_benih_rendam_garam",
    cat: "budidaya",
    tag: "Persiapan Benih",
    title: "Seleksi Benih Padi dengan Larutan Garam",
    desc: "Benih yang bernas akan tenggelam, sedangkan yang hampa mengapung. Bilas bersih setelah seleksi agar sisa garam tidak menghambat perkecambahan.",
    img: "seleksi-benih.jpg"
  },
  {
    id: "pemangkasan_tunas_air_tomat",
    cat: "budidaya",
    tag: "Teknik Budidaya",
    title: "Pangkas Tunas Air Tomat agar Buah Lebih Besar",
    desc: "Tunas yang tumbuh di ketiak daun menyerap energi tanaman. Pangkas saat masih kecil menggunakan gunting bersih untuk mengurangi risiko penularan penyakit.",
    img: "tunas-air.jpg"
  },
  {
    id: "ajir_lanjaran_sayuran_rambat",
    cat: "budidaya",
    tag: "Teknik Budidaya",
    title: "Pasang Ajir dan Lanjaran untuk Mentimun, Kacang Panjang, dan Tomat",
    desc: "Tanaman yang merambat di penyangga terhindar dari kontak tanah, lebih sehat, mudah dipanen, dan buahnya tidak mudah busuk.",
    img: "ajir.jpg"
  },
  {
    id: "tagetes_pelindung_nematoda",
    cat: "budidaya",
    tag: "Tanaman Pelindung",
    title: "Tanam Tagetes di Sela Bedengan untuk Menekan Nematoda",
    desc: "Akar bunga tagetes (marigold) mengeluarkan senyawa yang menghambat nematoda puru akar, dan bunganya sekaligus mempercantik kebun.",
    img: "tagetes.jpg"
  },
  {
    id: "irigasi_tetes_sederhana",
    cat: "budidaya",
    tag: "Pengairan",
    title: "Irigasi Tetes Sederhana Hemat Air untuk Lahan Sayuran",
    desc: "Air menetes langsung ke zona akar sehingga lebih hemat dan daun tetap kering. Sistem ini bisa dirakit dari selang kecil dan ember bertekanan rendah.",
    img: "irigasi-tetes.jpg"
  },
  {
    id: "pengairan_berselang_padi",
    cat: "budidaya",
    tag: "Pengairan",
    title: "Pengairan Berselang pada Padi untuk Akar Lebih Kuat",
    desc: "Sawah digenangi dan dikeringkan secara bergantian agar akar mendapat oksigen, anakan lebih produktif, dan penggunaan air lebih hemat.",
    img: "pengairan-berselang.jpg"
  },
  {
    id: "solarisasi_tanah",
    cat: "budidaya",
    tag: "Persiapan Lahan",
    title: "Solarisasi Tanah dengan Plastik Bening Sebelum Tanam",
    desc: "Tutup bedengan lembap dengan plastik transparan selama beberapa minggu di musim terik. Panas yang terperangkap menekan jamur, nematoda, dan biji gulma.",
    img: "solarisasi.jpg"
  },

  // ===================== MUSIM & SANITASI LAHAN (11) =====================
  {
    id: "mulsa_jerami_kemarau",
    cat: "musim",
    tag: "Panduan Musim Kemarau",
    title: "Mulsa Jerami Menjaga Kelembapan Tanah di Musim Kemarau",
    desc: "Lapisan jerami mengurangi penguapan, menurunkan suhu tanah, dan menekan gulma. Jerami yang lapuk juga menambah bahan organik.",
    img: "mulsa-jerami.jpg"
  },
  {
    id: "tanam_serentak",
    cat: "musim",
    tag: "Manajemen Hamparan",
    title: "Tanam Serentak untuk Memutus Ketersediaan Pakan Hama",
    desc: "Waktu tanam yang seragam dalam satu hamparan membatasi hama berpindah dari lahan yang panen ke lahan yang baru tumbuh. Koordinasikan dengan kelompok tani.",
    img: "tanam-serentak.jpg"
  },
  {
    id: "waspada_blast_padi_hujan",
    cat: "musim",
    tag: "Panduan Musim Hujan",
    title: "Waspada Penyakit Blast pada Padi Saat Musim Hujan",
    desc: "Kelembapan tinggi dan pemupukan nitrogen berlebih memicu bercak berbentuk belah ketupat pada daun. Gunakan varietas tahan dan hindari pupuk urea berlebihan.",
    img: "blast-padi.jpg"
  },
  {
    id: "pengamatan_rutin_mingguan",
    cat: "musim",
    tag: "Pemantauan Lahan",
    title: "Pengamatan Rutin Mingguan sebelum Memutuskan Penyemprotan",
    desc: "Periksa beberapa tanaman contoh di titik berbeda setiap pekan. Semprot hanya jika serangan sudah melewati ambang kendali agar biaya dan residu tetap rendah.",
    img: "pengamatan.jpg"
  },
  {
    id: "persiapan_pancaroba",
    cat: "musim",
    tag: "Panduan Pancaroba",
    title: "Siaga Pancaroba: Cuaca Tak Menentu, Hama Mudah Meledak",
    desc: "Perubahan suhu dan kelembapan yang mendadak membuat tanaman stres. Perkuat daya tahan dengan pemupukan seimbang dan perketat pengamatan lahan.",
    img: "pancaroba.jpg"
  },
  {
    id: "embung_penampung_air",
    cat: "musim",
    tag: "Panduan Musim Kemarau",
    title: "Embung Mini sebagai Cadangan Air saat Kemarau Panjang",
    desc: "Kolam penampung air hujan di sudut lahan menyimpan cadangan pengairan. Lapisi dasar embung agar air tidak cepat meresap ke dalam tanah.",
    img: "embung.jpg"
  },
  {
    id: "paranet_naungan_terik",
    cat: "musim",
    tag: "Panduan Musim Kemarau",
    title: "Paranet Peneduh Melindungi Sayuran dari Terik Siang",
    desc: "Naungan dengan tingkat 30-50 persen menurunkan suhu di sekitar tanaman dan mengurangi daun terbakar pada sayuran daun seperti bayam dan selada.",
    img: "paranet.jpg"
  },
  {
    id: "pengelolaan_jerami_pascapanen",
    cat: "musim",
    tag: "Sanitasi Lahan",
    title: "Kelola Jerami Pascapanen: Jangan Dibakar, Kembalikan ke Tanah",
    desc: "Jerami dibenamkan atau dikomposkan agar unsur hara dan bahan organik kembali ke sawah. Pembakaran justru mematikan mikroba tanah yang bermanfaat.",
    img: "jerami.jpg"
  },
  {
    id: "bera_dan_pengolahan_tanah",
    cat: "musim",
    tag: "Sanitasi Lahan",
    title: "Masa Bera dan Pengolahan Tanah untuk Memutus Daur Hama",
    desc: "Membiarkan lahan istirahat atau menanam penutup tanah memberi waktu bagi tanah memulihkan diri dan menekan populasi hama serta penyakit tertinggal.",
    img: "bera.jpg"
  },
  {
    id: "pemulihan_pascabanjir",
    cat: "musim",
    tag: "Panduan Musim Hujan",
    title: "Langkah Pemulihan Tanaman Pascabanjir",
    desc: "Segera keringkan lahan, buang lumpur dari daun dan pangkal batang, lalu semprot fungisida nabati serta beri pupuk daun ringan agar tanaman cepat pulih.",
    img: "pascabanjir.jpg"
  },
  {
    id: "kalender_tanam_terpadu",
    cat: "musim",
    tag: "Perencanaan Tanam",
    title: "Gunakan Kalender Tanam Terpadu sebagai Acuan Waktu Tanam",
    desc: "Kalender tanam memperkirakan awal musim dan potensi kekeringan atau banjir di wilayah Anda. Konsultasikan dengan penyuluh pertanian setempat.",
    img: "kalender-tanam.jpg"
  },

  // ===================== KOMPOS & NUTRISI (11) =====================
  {
    id: "kompos_jerami_cepat",
    cat: "nutrisi",
    tag: "Kompos & Nutrisi",
    title: "Kompos Jerami Cepat Matang dengan Dekomposer",
    desc: "Susun jerami berlapis dengan pupuk kandang dan larutan dekomposer, jaga kelembapan, dan balik tumpukan setiap beberapa pekan hingga berwarna gelap dan gembur.",
    img: "kompos-jerami.jpg"
  },
  {
    id: "fermentasi_pupuk_kandang",
    cat: "nutrisi",
    tag: "Kompos & Nutrisi",
    title: "Fermentasi Pupuk Kandang agar Aman bagi Akar Tanaman",
    desc: "Kotoran ternak segar bersuhu tinggi dan bisa membakar akar. Fermentasikan dahulu hingga tidak berbau menyengat dan tidak panas saat disentuh.",
    img: "pupuk-kandang.jpg"
  },
  {
    id: "mol_bonggol_pisang",
    cat: "nutrisi",
    tag: "Kompos & Nutrisi",
    title: "MOL Bonggol Pisang sebagai Perangsang Pertumbuhan",
    desc: "Mikroorganisme lokal dari bonggol pisang yang difermentasi bersama gula merah dan air cucian beras kaya hormon alami untuk mendukung pertumbuhan akar dan tunas.",
    img: "mol-bonggol.jpg"
  },
  {
    id: "azolla_pupuk_hijau_padi",
    cat: "nutrisi",
    tag: "Pupuk Hijau",
    title: "Azolla sebagai Pupuk Hijau Penambat Nitrogen di Sawah",
    desc: "Tanaman air mini ini bersimbiosis dengan sianobakteri penambat nitrogen. Tebarkan di sawah, lalu benamkan saat pengolahan tanah untuk menambah hara bagi padi.",
    img: "azolla.jpg"
  },
  {
    id: "biochar_sekam",
    cat: "nutrisi",
    tag: "Perbaikan Tanah",
    title: "Arang Sekam dan Biochar untuk Memperbaiki Struktur Tanah",
    desc: "Biochar menahan air dan hara serta menjadi rumah bagi mikroba tanah. Campurkan dengan kompos sebelum diaplikasikan agar hara tidak terserap sia-sia.",
    img: "biochar.jpg"
  },
  {
    id: "rhizobium_kedelai",
    cat: "nutrisi",
    tag: "Pupuk Hayati",
    title: "Inokulasi Rhizobium pada Benih Kedelai dan Kacang-Kacangan",
    desc: "Bakteri Rhizobium membentuk bintil akar yang menambat nitrogen dari udara sehingga kebutuhan pupuk urea dapat berkurang.",
    img: "rhizobium.jpg"
  },
  {
    id: "kapur_dolomit_ph_tanah",
    cat: "nutrisi",
    tag: "Perbaikan Tanah",
    title: "Kapur Dolomit untuk Menaikkan pH Tanah Masam",
    desc: "Tanah yang terlalu masam membuat hara sulit diserap akar. Ukur pH terlebih dahulu, lalu taburkan dolomit sesuai anjuran beberapa minggu sebelum tanam.",
    img: "dolomit.jpg"
  },
  {
    id: "kascing_pupuk_cacing",
    cat: "nutrisi",
    tag: "Kompos & Nutrisi",
    title: "Kascing, Pupuk Kotoran Cacing yang Kaya Hara Mikro",
    desc: "Cacing tanah mengubah sampah organik menjadi kascing yang gembur dan kaya mikroba. Cocok untuk media semai maupun pupuk dasar tanaman sayuran.",
    img: "kascing.jpg"
  },
  {
    id: "gamal_pupuk_hijau",
    cat: "nutrisi",
    tag: "Pupuk Hijau",
    title: "Daun Gamal dan Lamtoro sebagai Pupuk Hijau Murah",
    desc: "Daun legum pohon ini kaya nitrogen dan cepat terurai. Pangkas, cacah, dan benamkan di bedengan sebelum tanam sebagai sumber hara alami.",
    img: "gamal.jpg"
  },
  {
    id: "pemupukan_berimbang_uji_tanah",
    cat: "nutrisi",
    tag: "Pemupukan Berimbang",
    title: "Pemupukan Berimbang Berdasarkan Uji Tanah",
    desc: "Uji kandungan N, P, dan K tanah agar dosis pupuk tepat sasaran. Pemupukan sesuai kebutuhan menghemat biaya dan mencegah kerusakan lingkungan.",
    img: "uji-tanah.jpg"
  },
  {
    id: "ecoenzyme_kulit_buah",
    cat: "nutrisi",
    tag: "Kompos & Nutrisi",
    title: "Ecoenzyme dari Kulit Buah untuk Penyubur dan Pembersih Lahan",
    desc: "Fermentasi kulit buah, gula merah, dan air dengan perbandingan 3:1:10 selama tiga bulan menghasilkan cairan serbaguna. Encerkan dahulu sebelum disiramkan ke tanaman.",
    img: "ecoenzyme.jpg"
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