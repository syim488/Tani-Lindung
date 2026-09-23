const SAFE_PLACEHOLDER_IMG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'%3E%3Crect width='800' height='500' fill='%23eaf3ed'/%3E%3Cpath d='M400 120 C320 200 300 320 400 380 C500 320 480 200 400 120 Z' fill='%232d6a4f' opacity='0.25'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='22' font-weight='bold' fill='%23183624'%3EDokumentasi Hama TaniLindung%3C/text%3E%3Ctext x='50%25' y='57%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' fill='%235c6f62'%3E(Simpan foto di folder images/)%3C/text%3E%3C/svg%3E";

const pestDetailData = {
  // 1. Wereng Cokelat
  wereng_cokelat: {
    id: "wereng_cokelat", name: "Wereng Cokelat", latin: "Nilaparvata lugens", crop: "Padi",
    threat: "Tingkat Ancaman: Sangat Tinggi", img: "warreng.png",
    caption: "Foto dokumentasi: Nimfa dan wereng dewasa menghisap pangkal pelepah padi.",
    paragraphs: [
      "Wereng cokelat adalah serangga penghisap cairan sel tanaman padi yang tinggal di bagian pangkal rumpun yang rimbun dan lembap.",
      "Menyebabkan daun mengering seperti terbakar (hopperburn) dan menjadi vektor utama virus kerdil rumput serta kerdil hampa."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Serangga kecil cokelat ukuran 2–4 mm, melompat aktif saat tersentuh." },
      { label: "Lokasi Serangan", desc: "Pangkal pelepah batang padi dekat muka air sawah." },
      { label: "Gejala Kasat Mata", desc: "Tanaman mengering kecokelatan melingkar mirip terbakar (hopperburn)." },
      { label: "Dampak Lanjutan", desc: "Tanaman puso dan anakan gagal bertunas." }
    ],
    solutionSummary: "Keringkan petakan sawah berkala dan aplikasikan agens hayati Beauveria bassiana tepat sasaran."
  },

  // 2. Ulat Grayak Jagung
  ulat_grayak_jagung: {
    id: "ulat_grayak_jagung", name: "Ulat Grayak", latin: "Spodoptera frugiperda", crop: "Jagung & Sayuran",
    threat: "Tingkat Ancaman: Sangat Tinggi", img: "ulat.jpg",
    caption: "Foto dokumentasi: Larva ulat grayak merusak pucuk daun jagung.",
    paragraphs: [
      "Larva ngengat invasif yang sangat rakus memakan titik tumbuh, pucuk, dan daun muda tanaman jagung.",
      "Mampu menghabiskan helaian daun dalam semalam dan hanya menyisakan tulang daun utama."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Kepala bercorak huruf Y terbalik dan ada 4 bintik gelap di ujung tubuh." },
      { label: "Lokasi Serangan", desc: "Corong daun pucuk jagung dan sela ketiak pelepah." },
      { label: "Gejala Kasat Mata", desc: "Daun berlubang besar compang-camping dan ada kotoran basah serbuk gergaji." },
      { label: "Dampak Lanjutan", desc: "Pucuk patah dan tanaman jagung gagal bertongkol." }
    ],
    solutionSummary: "Lakukan pencarian ulat manual pagi hari, pasang perangkap feromon, dan semprot Bacillus thuringiensis."
  },

  // 3. Kutu Kebul
  kutu_kebul: {
    id: "kutu_kebul", name: "Kutu Kebul", latin: "Bemisia tabaci", crop: "Cabai & Tomat",
    threat: "Tingkat Ancaman: Tinggi", img: "kutu kebul.png",
    caption: "Foto dokumentasi: Koloni kutu berselimut tepung putih di balik daun.",
    paragraphs: [
      "Serangga mikro bersayap putih yang mengisap getah floem di permukaan bawah helaian daun.",
      "Menghasilkan embun jelaga hitam dan menjadi vektor penular penyakit virus kuning (Gemini virus)."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Ukuran tubuh 1 mm dengan lapisan lilin putih menyerupai tepung." },
      { label: "Lokasi Serangan", desc: "Permukaan bawah helaian daun muda." },
      { label: "Gejala Kasat Mata", desc: "Mengepul putih saat daun digoyang dan helaian daun mengkerut kaku." },
      { label: "Dampak Lanjutan", desc: "Daun kuning klorosis dan tanaman kerdil gagal berbuah." }
    ],
    solutionSummary: "Pasang perangkap lem kuning (yellow sticky trap), pasang mulsa perak, dan semprot minyak nimba."
  },

  // 4. Babi Hutan
  babi_hutan: {
    id: "babi_hutan", name: "Babi Hutan / Celeng", latin: "Sus scrofa", crop: "Singkong & Jagung",
    threat: "Tingkat Ancaman: Sangat Tinggi", img: "babi.jpg",
    caption: "Foto dokumentasi: Mamalia liar di batas kebun dan hutan.",
    paragraphs: [
      "Hama mamalia nokturnal bertubuh besar yang merusak kebun yang berbatasan dengan semak dan hutan.",
      "Membongkar tanah guludan umbi menggunakan moncongnya dan merobohkan tegakan tanaman."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Tubuh besar berbulu kasar hitam dengan taring dan moncong kuat." },
      { label: "Lokasi Serangan", desc: "Areal tanaman umbi dan perimeter terluar kebun." },
      { label: "Gejala Kasat Mata", desc: "Bedengan tanah terbongkar berlubang dan batang roboh berserakan." },
      { label: "Dampak Lanjutan", desc: "Kerusakan fisik lahan dalam skala luas dalam satu malam." }
    ],
    solutionSummary: "Pasang pagar kawat/bambu 1,5 meter, tabur serbuk belerang di batas kebun, dan aktifkan ronda malam."
  },

  // 5. Burung Pipit
  burung_pipit_padi: {
    id: "burung_pipit_padi", name: "Burung Pipit / Bondol", latin: "Lonchura spp.", crop: "Padi",
    threat: "Tingkat Ancaman: Tinggi", img: "pipit.jpg",
    caption: "Foto dokumentasi: Kawanan burung pipit memeras bulir padi masak susu.",
    paragraphs: [
      "Menyerang hamparan tanaman padi fase masak susu secara berkelompok dalam jumlah ratusan ekor.",
      "Memeras cairan pati bulir padi hingga bulir menjadi gepeng hampa dan malai patah terkulai."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Burung kecil dengan paruh pendek runcing pemakan biji-bijian." },
      { label: "Lokasi Serangan", desc: "Bagian atas kanopi malai padi." },
      { label: "Gejala Kasat Mata", desc: "Tangkai malai patah dan bulir padi hampa putih mengering." },
      { label: "Dampak Lanjutan", desc: "Penurunan bobot gabah panen secara langsung." }
    ],
    solutionSummary: "Pasang jaring nilon (bird netting) di atas kanopi dan rentangkan pita hologram pemantul cahaya."
  },

  // 6. Lalat Buah
  lalat_buah: {
    id: "lalat_buah", name: "Lalat Buah", latin: "Bactrocera dorsalis", crop: "Cabai & Buah",
    threat: "Tingkat Ancaman: Tinggi", img: "lalat.jpg",
    caption: "Foto dokumentasi: Lalat buah meletakkan telur di bawah kulit buah.",
    paragraphs: [
      "Menusukkan telur ke dalam buah muda. Belatung yang menetas memakan daging buah dari dalam.",
      "Memicu pembusukan basah oleh bakteri sehingga buah rontok sebelum mencapai masa panen."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Ukuran 6–8 mm dengan pola kuning-hitam di dada dan sayap bercak bening." },
      { label: "Lokasi Serangan", desc: "Daging buah muda hingga buah menjelang matang." },
      { label: "Gejala Kasat Mata", desc: "Titik noda hitam bekas tusukan dan buah membusuk basah rontok." },
      { label: "Dampak Lanjutan", desc: "Daging buah hancur berair dan dipenuhi belatung putih." }
    ],
    solutionSummary: "Kubur buah rontok sedalam 50 cm, bungkus buah muda, dan pasang perangkap metil eugenol."
  },

  // 7. Tikus Sawah
  tikus_sawah: {
    id: "tikus_sawah", name: "Tikus Sawah", latin: "Rattus argentiventer", crop: "Padi",
    threat: "Tingkat Ancaman: Sangat Tinggi", img: "tikus.jpg",
    caption: "Foto dokumentasi: Bekas kerat rapi miring 45 derajat pada batang padi.",
    paragraphs: [
      "Hama mamalia pengerat nokturnal yang memotong batang padi untuk mengasah gigi serinya.",
      "Mampu merusak petakan sawah secara menyeluruh mulai dari fase persemaian hingga bunting."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Pengerat berbulu kelabu cokelat dengan moncong tumpul." },
      { label: "Lokasi Serangan", desc: "Pangkal batang rumpun padi." },
      { label: "Gejala Kasat Mata", desc: "Batang terpotong rapi miring 45 derajat menyerupai sabetan sabit." },
      { label: "Dampak Lanjutan", desc: "Kerusakan melingkar bersih di tengah sawah (crop circle)." }
    ],
    solutionSummary: "Gropyokan massal saat olah tanah, pasang pagar plastik TBS, dan pasang Rumah Burung Hantu."
  },

  // 8. Keong Mas
  keong_mas: {
    id: "keong_mas", name: "Keong Mas", latin: "Pomacea canaliculata", crop: "Padi",
    threat: "Tingkat Ancaman: Tinggi", img: "keong mas.jpg",
    caption: "Foto dokumentasi: Telur merah muda keong mas di pematang sawah.",
    paragraphs: [
      "Moluska air tawar pemakan bibit padi muda umur 1–15 hari setelah tanam.",
      "Memotong pangkal bibit yang masih lunak di dalam air hingga rumpun bibit putus terapung."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Cangkang bulat kuning keemasan sampai cokelat berpenutup rapat." },
      { label: "Lokasi Serangan", desc: "Pangkal bibit padi di bawah permukaan air irigasi." },
      { label: "Gejala Kasat Mata", desc: "Bibit terapung putus dan terlihat kelompok telur berwarna merah muda." },
      { label: "Dampak Lanjutan", desc: "Petakan sawah gundul sehingga petani harus menyulam ulang." }
    ],
    solutionSummary: "Atur air sawah macak-macak (1 cm), pasang kawat kasa di pintu air, dan hancurkan telur secara manual."
  },

  // 9. Belalang Kembara
  belalang_kembara: {
    id: "belalang_kembara", name: "Belalang Kembara", latin: "Locusta migratoria", crop: "Jagung & Padi",
    threat: "Tingkat Ancaman: Sangat Tinggi", img: "belalang kembara.jpg",
    caption: "Foto dokumentasi: Kawanan belalang melahap tajuk tanaman pangan.",
    paragraphs: [
      "Serangga pelompat yang pada fase gregarius membentuk kawanan jutaan ekor pemakan daun.",
      "Mampu menggunduli dedaunan tanaman jagung dan padi dalam tempo yang sangat singkat."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Serangga lonjong dengan kaki belakang besar dan sayap terbang kuat." },
      { label: "Lokasi Serangan", desc: "Tajuk helaian daun tanaman pangan." },
      { label: "Gejala Kasat Mata", desc: "Helaian daun robek kasar dan habis dimakan mulai dari tepian." },
      { label: "Dampak Lanjutan", desc: "Tanaman kehilangan organ fotosintesis dan mengering." }
    ],
    solutionSummary: "Tangkap dengan jaring pada pagi hari dan semprot agens hayati jamur Metarhizium acridum."
  },

  // 10. Walang Sangit
  walang_sangit: {
    id: "walang_sangit", name: "Walang Sangit", latin: "Leptocorisa oratorius", crop: "Padi",
    threat: "Tingkat Ancaman: Tinggi", img: "walang sangit.jpg",
    caption: "Foto dokumentasi: Walang sangit menusuk bulir padi masak susu.",
    paragraphs: [
      "Menusuk bulir padi yang sedang mengisi cairan pati masak susu menggunakan stilet mulutnya.",
      "Menyebabkan bulir menjadi hampa dan meninggalkan bintik noda hitam berbau sangit."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Tubuh ramping cokelat kehijauan berkaki panjang dengan aroma menyengat." },
      { label: "Lokasi Serangan", desc: "Malai bulir padi fase masak susu." },
      { label: "Gejala Kasat Mata", desc: "Aroma sangit di pematang dan bulir berbintik cokelat kehitaman." },
      { label: "Dampak Lanjutan", desc: "Bulir gabah hampa dan beras remuk saat digiling." }
    ],
    solutionSummary: "Pasang umpan bangkai ketam/keong busuk di tiang bambu dan semprotkan Beauveria bassiana."
  },

  // 11. Thrips Cabai
  thrips: {
    id: "thrips", name: "Hama Thrips Cabai", latin: "Thrips parvispinus", crop: "Cabai",
    threat: "Tingkat Ancaman: Tinggi", img: "trips cabai.jpg",
    caption: "Foto dokumentasi: Daun cabai melengkung kaku ke atas akibat hisapan thrips.",
    paragraphs: [
      "Serangga renik pemarut dan penghisap cairan mesofil daun muda cabai.",
      "Permukaan bawah daun menjadi mengkilap keperakan dan helaian daun melengkung kaku seperti mangkok."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Ukuran mikro di bawah 1,5 mm berwarna kekuningan sampai cokelat gelap." },
      { label: "Lokasi Serangan", desc: "Kuncup pucuk muda dan permukaan bawah daun." },
      { label: "Gejala Kasat Mata", desc: "Tepi daun melengkung kaku ke atas dan bagian bawah keperakan." },
      { label: "Dampak Lanjutan", desc: "Bunga gugur dan pucuk tanaman kerdil." }
    ],
    solutionSummary: "Pasang perangkap lekat biru (blue sticky trap) dan semprot larutan minyak mimba."
  },

  // 12. Penggerek Batang Kuning
  penggerek_batang_kuning: {
    id: "penggerek_batang_kuning", name: "Penggerek Batang Padi", latin: "Scirpophaga incertulas", crop: "Padi",
    threat: "Tingkat Ancaman: Sangat Tinggi", img: "Penggerek Batang Kuning.jpg",
    caption: "Foto dokumentasi: Larva menggerek poros dalam batang padi hingga sundep/beluk.",
    paragraphs: [
      "Larva ngengat mengebor ke dalam poros batang padi dan memakan pembuluh pengangkut tanaman.",
      "Menyebabkan pucuk mati mudah dicabut (Sundep) atau malai padi tegak putih hampa (Beluk)."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Ngengat kuning jerami bertitik hitam; larva putih di dalam batang." },
      { label: "Lokasi Serangan", desc: "Rongga dalam batang padi." },
      { label: "Gejala Kasat Mata", desc: "Pucuk layu kering (sundep) atau malai tegak putih tanpa gabah (beluk)." },
      { label: "Dampak Lanjutan", desc: "Anakan produktif mati dan malai gagal berbobot." }
    ],
    solutionSummary: "Potong pucuk daun bibit sebelum tanam, pasang lampu perangkap, dan lepas Trichogramma."
  },

  // 13. Kumbang Tanduk Sawit
  kumbang_tanduk_sawit: {
    id: "kumbang_tanduk_sawit", name: "Kumbang Tanduk Sawit", latin: "Oryctes rhinoceros", crop: "Kelapa Sawit",
    threat: "Tingkat Ancaman: Tinggi", img: "kumbang tanduk sawit.jpg",
    caption: "Foto dokumentasi: Pelepah sawit merekah patah membentuk huruf V.",
    paragraphs: [
      "Kumbang dewasa mengebor pupus pelepah mahkota tanaman kelapa sawit muda yang belum menghasilkan.",
      "Saat daun muda membuka, helai daun tampak terpotong simetris menyerupai bentuk huruf V."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Kumbang hitam mengkilap dengan tanduk cula di kepala." },
      { label: "Lokasi Serangan", desc: "Pupus ketiak daun muda mahkota sawit." },
      { label: "Gejala Kasat Mata", desc: "Pelepah daun muda merekah terpotong rapi membentuk huruf V." },
      { label: "Dampak Lanjutan", desc: "Titik tumbuh membusuk dan pohon sawit mati terputus." }
    ],
    solutionSummary: "Pasang perangkap feromon (oryctalure) dan taburkan jamur Metarhizium anisopliae di seresah kayu."
  },

  // 14. Lalat Penggorok Daun
  lalat_penggorok_daun: {
    id: "lalat_penggorok_daun", name: "Lalat Penggorok Daun", latin: "Liriomyza chinensis", crop: "Bawang & Sayuran",
    threat: "Tingkat Ancaman: Tinggi", img: "lalat Penggorok Dau.jpg",
    caption: "Foto dokumentasi: Liukan alur putih zig-zag mirip peta di daun bawang.",
    paragraphs: [
      "Larva lalat mini memakan jaringan mesofil klorofil di antara dua lapisan kulit daun.",
      "Aktivitas makan meninggalkan alur berliku keputihan yang menyerupai garis peta pada daun."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Larva belatung mini kekuningan di dalam lapisan helaian daun." },
      { label: "Lokasi Serangan", desc: "Jaringan mesofil daun bawang merah atau tomat." },
      { label: "Gejala Kasat Mata", desc: "Garis alur putih meliuk-liuk zig-zag menyerupai peta di daun." },
      { label: "Dampak Lanjutan", desc: "Daun mengering keropos dan umbi bawang gagal membesar." }
    ],
    solutionSummary: "Pasang yellow sticky trap untuk lalat dewasa dan semprot biopestisida ekstrak daun nimba."
  },

  // 15. Ulat Grayak Cabai
  ulat_grayak_cabai: {
    id: "ulat_grayak_cabai", name: "Ulat Grayak Cabai", latin: "Spodoptera litura", crop: "Cabai & Kedelai",
    threat: "Tingkat Ancaman: Tinggi", img: "Ulat Grayak Cabai.jpg",
    caption: "Foto dokumentasi: Ulat grayak memakan helaian daun cabai di malam hari.",
    paragraphs: [
      "Larva ngengat nokturnal yang memakan helaian daun cabai hingga berlubang besar dan menyisakan tulang daun.",
      "Pada serangan berat, larva juga melubangi buah cabai muda dan menyebabkan buah gugur busuk."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Ulat berwarna cokelat gelap dengan garis kuning membujur dan bintik hitam." },
      { label: "Lokasi Serangan", desc: "Helaian daun dan buah cabai muda." },
      { label: "Gejala Kasat Mata", desc: "Daun berlubang compang-camping dan buah cabai bolong terkulai." },
      { label: "Dampak Lanjutan", desc: "Tanaman kehilangan daun dan gagal menghasilkan panen buah sehat." }
    ],
    solutionSummary: "Kumpulkan kelompok telur di balik daun dan semprotkan bioinsektisida Bacillus thuringiensis."
  },

  // 16. Tungau Kuning
  tungau_kuning: {
    id: "tungau_kuning", name: "Tungau Kuning Cabai", latin: "Polyphagotarsonemus latus", crop: "Cabai",
    threat: "Tingkat Ancaman: Tinggi", img: "tungau kuning.jpg",
    caption: "Foto dokumentasi: Tepi daun melengkung kaku ke bawah menyerupai cakar ayam.",
    paragraphs: [
      "Arakhnida mikro yang menghisap cairan sel pucuk tanaman cabai.",
      "Air liurnya mengandung racun yang menyebabkan tepi daun melengkung kaku ke bawah mirip cakar ayam."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Tungau mikroskopis tembus pandang kekuningan di balik daun." },
      { label: "Lokasi Serangan", desc: "Tunas pucuk muda dan permukaan bawah daun muda." },
      { label: "Gejala Kasat Mata", desc: "Daun melengkung kaku ke bawah, menebal, dan berwarna perunggu kusam." },
      { label: "Dampak Lanjutan", desc: "Titik tumbuh kerdil dan tunas baru gagal membuka." }
    ],
    solutionSummary: "Semprotkan akarisida nabati ekstrak belerang atau rebusan daun tembakau terukur."
  },

  // 17. Tungau Merah
  tungau_merah: {
    id: "tungau_merah", name: "Tungau Merah Singkong", latin: "Tetranychus urticae", crop: "Singkong & Terung",
    threat: "Tingkat Ancaman: Sedang", img: "tungau merah.jpg",
    caption: "Foto dokumentasi: Jaring laba-laba halus di permukaan bawah daun singkong.",
    paragraphs: [
      "Tungau merah berkoloni di permukaan bawah daun dan membuat anyaman benang jaring halus.",
      "Hisapan cairan selnya membuat klorofil rusak hingga helaian daun berubah warna menjadi perunggu."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Bintik merah kecil bergerak aktif dengan jaring sutra laba-laba halus." },
      { label: "Lokasi Serangan", desc: "Permukaan bawah helaian daun tua dan menengah." },
      { label: "Gejala Kasat Mata", desc: "Bintik kuning menyatu menjadi warna perunggu kecokelatan kusam." },
      { label: "Dampak Lanjutan", desc: "Daun gugur dini dan pembentukan umbi singkong terhenti." }
    ],
    solutionSummary: "Lakukan penyemprotan kabut air pada siang hari dan semprot ekstrak mimba."
  },

  // 18. Kutu Daun Persik
  kutu_daun_persik: {
    id: "kutu_daun_persik", name: "Kutu Daun Persik (Aphids)", latin: "Myzus persicae", crop: "Cabai & Sayuran",
    threat: "Tingkat Ancaman: Tinggi", img: "Kutu Daun Persik.jpg",
    caption: "Foto dokumentasi: Koloni kutu daun berkerumun menghisap pupus muda cabai.",
    paragraphs: [
      "Serangga bertubuh lunak yang hidup bergerombol menghisap cairan pucuk dan kuncup bunga.",
      "Kutu ini mengekskresikan embun madu yang memicu jamur jelaga dan menjadi vektor virus mosaik."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Tubuh kecil lunak berbentuk buah pir berwarna hijau muda hingga kekuningan." },
      { label: "Lokasi Serangan", desc: "Pucuk daun muda, tangkai bunga, dan ketiak daun." },
      { label: "Gejala Kasat Mata", desc: "Daun muda mengkerut keriting dan permukaan daun lengket berjelaga." },
      { label: "Dampak Lanjutan", desc: "Tanaman kerdil dan penularan virus mosaik meluas." }
    ],
    solutionSummary: "Semprotkan air sabun kalium lembut atau larutan minyak mimba untuk melarutkan kulit kutu."
  },

  // 19. Ulat Daun Kubis
  ulat_daun_kubis: {
    id: "ulat_daun_kubis", name: "Ulat Daun Kubis (Plutella)", latin: "Plutella xylostella", crop: "Kubis",
    threat: "Tingkat Ancaman: Tinggi", img: "Ulat Daun Kubis.jpg",
    caption: "Foto dokumentasi: Jendela lubang transparan pada helai daun kubis.",
    paragraphs: [
      "Larva hijau kecil pemakan epidermis daun kubis yang sangat cepat berkembang biak.",
      "Ulat ini memakan daun dengan meninggalkan selaput tipis transparan menyerupai jendela kaca."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Ulat kecil hijau cerah yang meliuk aktif dan menjatuhkan diri dengan benang." },
      { label: "Lokasi Serangan", desc: "Permukaan bawah helaian daun kubis dan sawi." },
      { label: "Gejala Kasat Mata", desc: "Daun berlubang jendela transparan menerawang." },
      { label: "Dampak Lanjutan", desc: "Daun kubis berlubang parah dan krop gagal terbentuk padat." }
    ],
    solutionSummary: "Gunakan bioinsektisida Bacillus thuringiensis dan lakukan pergiliran tanaman bukan famili kubis."
  },

  // 20. Ulat Krop Kubis
  ulat_krop_kubis: {
    id: "ulat_krop_kubis", name: "Ulat Krop Kubis", latin: "Crocidolomia pavonana", crop: "Kubis & Brokoli",
    threat: "Tingkat Ancaman: Tinggi", img: "Ulat krop Kubis.jpg",
    caption: "Foto dokumentasi: Larva menggerek titik tumbuh pembentukan krop kubis.",
    paragraphs: [
      "Ulat bergaris yang menggerek titik tumbuh calon krop kubis pada fase awal pembentukan krop.",
      "Kotoran basah yang ditinggalkan memicu pembusukan lunak berbau menyengat pada jantung tanaman."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Ulat berwarna hijau bergaris putih membujur dengan kepala cokelat terang." },
      { label: "Lokasi Serangan", desc: "Titik tumbuh jantung daun kubis." },
      { label: "Gejala Kasat Mata", desc: "Jantung kubis berlubang kotor berbau busuk basah." },
      { label: "Dampak Lanjutan", desc: "Krop kubis hancur membusuk dari bagian dalam." }
    ],
    solutionSummary: "Pasang perangkap lampu malam hari dan aplikasikan bioinsektisida sebelum krop menutup."
  },

  // 21. Ulat Tanah
  ulat_tanah: {
    id: "ulat_tanah", name: "Ulat Tanah (Agrotis)", latin: "Agrotis ipsilon", crop: "Semua Bibit Sayuran",
    threat: "Tingkat Ancaman: Tinggi", img: "ulat tanah.jpg",
    caption: "Foto dokumentasi: Ulat kelabu memotong pangkal bibit muda hingga roboh.",
    paragraphs: [
      "Larva ngengat yang bersembunyi di dalam tanah pada siang hari dan keluar memotong bibit di malam hari.",
      "Bibit tanaman muda yang baru dipindah tanam dipotong tepat di batas permukaan tanah."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Ulat gemuk kehitaman kelabu yang melingkar membentuk huruf C saat disentuh." },
      { label: "Lokasi Serangan", desc: "Pangkal batang bibit muda di permukaan tanah." },
      { label: "Gejala Kasat Mata", desc: "Bibit tanaman terpotong rebah di atas tanah pada pagi hari." },
      { label: "Dampak Lanjutan", desc: "Populasi bibit di bedengan habis terpotong satu per satu." }
    ],
    solutionSummary: "Olah tanah matang agar ulat terjemur dan tebarkan umpan bekatul berinsektisida hayati."
  },

  // 22. Kumbang Oteng-Oteng
  oteng_oteng: {
    id: "oteng_oteng", name: "Kumbang Oteng-Oteng", latin: "Aulacophora foveicollis", crop: "Semangka & Melon",
    threat: "Tingkat Ancaman: Sedang", img: "Kumbang Oteng-Oteng.jpg",
    caption: "Foto dokumentasi: Kumbang jingga memakan daun semangka membentuk lubang melingkar.",
    paragraphs: [
      "Kumbang daun pemakan helaian tanaman famili Cucurbitaceae (labu, semangka, dan melon).",
      "Kumbang dewasa memotong helai daun membentuk pola lingkaran bersih sebelum memakannya."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Kumbang mengkilap berwarna jingga kemerahan berukuran 6–8 mm." },
      { label: "Lokasi Serangan", desc: "Helaian daun muda dan bunga tanaman labu-labuan." },
      { label: "Gejala Kasat Mata", desc: "Lubang-lubang melingkar teratur di permukaan daun." },
      { label: "Dampak Lanjutan", desc: "Tanaman muda meranggas dan pertumbuhan sulur terhenti." }
    ],
    solutionSummary: "Tangkap kumbang pada pagi hari saat masih lamban dan taburkan abu sekam di pangkal batang."
  },

  // 23. Nematoda Puru Akar
  nematoda_puru_akar: {
    id: "nematoda_puru_akar", name: "Nematoda Puru Akar", latin: "Meloidogyne spp.", crop: "Tomat & Cabai",
    threat: "Tingkat Ancaman: Sangat Tinggi", img: "images/nematoda_puru_akar.jpg",
    caption: "Foto dokumentasi: Bintil kutil bengkak pada perakaran tomat akibat nematoda.",
    paragraphs: [
      "Cacing mikro parasit tanah yang menginfeksi sistem perakaran tanaman hortikultura.",
      "Menyebabkan akar membengkak membentuk bintil puru sehingga transportasi air dan hara terhenti total."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Cacing mikroskopis tidak kasat mata di dalam jaringan bintil akar." },
      { label: "Lokasi Serangan", desc: "Sistem perakaran serabut dan akar tunggang." },
      { label: "Gejala Kasat Mata", desc: "Akar berbintil bengkak seperti kutil dan tanaman layu saat siang terik." },
      { label: "Dampak Lanjutan", desc: "Layu permanen, daun klorosis, dan tanaman mati perlahan." }
    ],
    solutionSummary: "Terapkan rotasi tanaman dengan tagetes (bunga marigold) dan gunakan agens jamur Trichoderma."
  },

  // 24. Penggerek Polong Kedelai
  penggerek_polong_kedelai: {
    id: "penggerek_polong_kedelai", name: "Penggerek Polong Kedelai", latin: "Etiella zinckenella", crop: "Kedelai",
    threat: "Tingkat Ancaman: Tinggi", img: "images/penggerek_polong_kedelai.jpg",
    caption: "Foto dokumentasi: Lubang gerek kecil pada kulit polong kedelai.",
    paragraphs: [
      "Larva ngengat yang mengebor masuk menembus kulit polong kedelai muda.",
      "Memakan habis biji kedelai di dalam polong dan meninggalkan kotoran di rongga polong."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Larva hijau kekuningan berada di dalam rongga polong berbiji." },
      { label: "Lokasi Serangan", desc: "Dinding kulit polong kedelai dan biji muda." },
      { label: "Gejala Kasat Mata", desc: "Titik lubang kecil pada kulit polong dan biji di dalam rusak hancur." },
      { label: "Dampak Lanjutan", desc: "Polong hampa dan biji kedelai rusak berjamur." }
    ],
    solutionSummary: "Tanam serempak, semprot biopestisida pada saat fase pembentukan polong, dan pasang light trap."
  },

  // 25. Kepik Hijau Kedelai
  kepik_hijau_kedelai: {
    id: "kepik_hijau_kedelai", name: "Kepik Hijau Kedelai", latin: "Nezara viridula", crop: "Kedelai & Padi",
    threat: "Tingkat Ancaman: Sedang", img: "images/kepik_hijau_kedelai.jpg",
    caption: "Foto dokumentasi: Kepik perisai hijau menusuk polong kedelai.",
    paragraphs: [
      "Kepik berbentuk perisai hijau yang menusukkan stilet mulutnya ke dalam polong kedelai muda.",
      "Hisapan cairan biji menyebabkan biji kedelai menjadi kempis, berkerut, dan berbintik hitam."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Kepik berbentuk perisai berwarna hijau terang berbau menyengat." },
      { label: "Lokasi Serangan", desc: "Polong kedelai fase pengisian biji." },
      { label: "Gejala Kasat Mata", desc: "Bintik cokelat hitam pada kulit polong dan biji di dalam keriput." },
      { label: "Dampak Lanjutan", desc: "Kualitas daya tumbuh benih menurun dan bobot panen anjlok." }
    ],
    solutionSummary: "Kumpulkan kepik secara mekanis pagi hari dan aplikasikan agens hayati Beauveria bassiana."
  },

  // 26. Ulat Tongkol Jagung
  ulat_tongkol_jagung: {
    id: "ulat_tongkol_jagung", name: "Ulat Tongkol Jagung", latin: "Helicoverpa armigera", crop: "Jagung & Tomat",
    threat: "Tingkat Ancaman: Tinggi", img: "images/ulat_tongkol_jagung.jpg",
    caption: "Foto dokumentasi: Larva ulat melahap deretan biji di ujung tongkol jagung.",
    paragraphs: [
      "Ngengat meletakkan telur pada rambut jagung muda. Larva yang menetas mengebor masuk ke ujung tongkol.",
      "Larva melahap barisan biji jagung muda dan meninggalkan kotoran basah di ujung tongkol."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Ulat bertubuh kasar dengan garis samping terang dan bintik gelap berambut halus." },
      { label: "Lokasi Serangan", desc: "Rambut jagung dan barisan biji di ujung tongkol." },
      { label: "Gejala Kasat Mata", desc: "Rambut jagung terpotong dan ujung kelobot berlubang kotor." },
      { label: "Dampak Lanjutan", desc: "Tongkol membusuk basah akibat infeksi jamur sekunder." }
    ],
    solutionSummary: "Semprotkan bioinsektisida Bacillus thuringiensis tepat ke arah rambut tongkol saat baru keluar."
  },

  // 27. Lalat Bibit Jagung
  lalat_bibit_jagung: {
    id: "lalat_bibit_jagung", name: "Lalat Bibit Jagung", latin: "Atherigona oryzae", crop: "Jagung Muda",
    threat: "Tingkat Ancaman: Sedang", img: "images/lalat_bibit_jagung.jpg",
    caption: "Foto dokumentasi: Pucuk bibit jagung mengering mati akibat larva lalat bibit.",
    paragraphs: [
      "Lalat kecil yang meletakkan telur pada pelepah bibit jagung yang baru berkecambah umur 1–2 minggu.",
      "Larva mengebor masuk ke titik tumbuh tunas sehingga pucuk tanaman layu, mengering, dan mati."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Lalat kecil abu-abu kekuningan menyerupai lalat rumah berukuran mini." },
      { label: "Lokasi Serangan", desc: "Titik tumbuh tunas bibit jagung muda." },
      { label: "Gejala Kasat Mata", desc: "Pucuk daun termuda layu kekuningan dan mudah dicabut." },
      { label: "Dampak Lanjutan", desc: "Tanaman mati muda dan tegakan bibit di petakan berkurang drastis." }
    ],
    solutionSummary: "Gunakan perlakuan benih (seed treatment) dan lakukan penanaman serempak di awal musim hujan."
  },

  // 28. Kumbang Moncong Umbi Ubi
  kumbang_moncong_ubi: {
    id: "kumbang_moncong_ubi", name: "Kumbang Moncong Umbi Ubi", latin: "Cylas formicarius", crop: "Ubi Jalar",
    threat: "Tingkat Ancaman: Tinggi", img: "images/kumbang_moncong_ubi.jpg",
    caption: "Foto dokumentasi: Lubang terowongan gerekan pada umbi ubi jalar.",
    paragraphs: [
      "Kumbang moncong yang melubangi pangkal batang dan umbi ubi jalar di dalam tanah.",
      "Sebagai respon serangan, umbi memproduksi zat terpenoid yang membuat umbi berbau busuk tajam dan pahit beracun."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Kumbang ramping mirip semut dengan moncong panjang dan sayap biru kehitaman." },
      { label: "Lokasi Serangan", desc: "Pangkal batang tanaman dan daging umbi di dalam tanah." },
      { label: "Gejala Kasat Mata", desc: "Kulit umbi berlubang hitam dan daging umbi berongga terowongan berbau pahit." },
      { label: "Dampak Lanjutan", desc: "Umbi tidak laku dijual dan tidak aman dikonsumsi." }
    ],
    solutionSummary: "Bumbun tanah guludan secara berkala agar tanah tidak retak dan gunakan stek benih yang sehat bebas hama."
  },

  // 29. Kutu Putih Pepaya
  kutu_putih_pepaya: {
    id: "kutu_putih_pepaya", name: "Kutu Putih Pepaya", latin: "Paracoccus marginatus", crop: "Pepaya",
    threat: "Tingkat Ancaman: Tinggi", img: "images/kutu_putih_pepaya.jpg",
    caption: "Foto dokumentasi: Lapisan lilin putih menutupi buah pepaya muda.",
    paragraphs: [
      "Kutu berselaput lilin putih yang mengerubungi buah, daun, dan pucuk pohon pepaya.",
      "Hisapan cairan getah membuat daun mengeriting kerdil dan permukaan buah dipenuhi jelaga hitam kusam."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Tubuh lonjong tertutup lapisan lilin putih tebal dengan filamen pendek di tepi." },
      { label: "Lokasi Serangan", desc: "Kulit buah, ketiak tangkai daun, dan permukaan bawah daun." },
      { label: "Gejala Kasat Mata", desc: "Gumpalan putih seperti kapas menutupi buah dan daun mengkerut menguning." },
      { label: "Dampak Lanjutan", desc: "Buah cacat bentuk dan pohon berhenti menghasilkan tunas baru." }
    ],
    solutionSummary: "Semprotkan air bertekanan untuk merontokkan lilin kutu dan lepaskan predator kumbang Coccinellidae."
  },

  // 30. Ulat Api Kelapa Sawit
  ulat_api_sawit: {
    id: "ulat_api_sawit", name: "Ulat Api Kelapa Sawit", latin: "Setothosea asigna", crop: "Kelapa Sawit",
    threat: "Tingkat Ancaman: Sangat Tinggi", img: "images/ulat_api_sawit.jpg",
    caption: "Foto dokumentasi: Ulat berduri penyengat melahap helaian daun kelapa sawit.",
    paragraphs: [
      "Ulat bertubuh cerah dengan duri beracun yang melahap helai anak daun kelapa sawit secara masif.",
      "Dapat mengakibatkan defoliasi berat sehingga tanaman sawit hanya menyisakan lidi daun saja."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Ulat pipih hijau terang dengan duri-duri tajam penyengat di sekujur punggung." },
      { label: "Lokasi Serangan", desc: "Helaian anak daun pelepah tengah dan bawah." },
      { label: "Gejala Kasat Mata", desc: "Anak daun habis termakan meluas dan hanya tersisa tulang lidi daun." },
      { label: "Dampak Lanjutan", desc: "Penurunan produksi tandan buah segar (TBS) sawit hingga 60%." }
    ],
    solutionSummary: "Tanam bunga inang nektar (Turnera subulata) untuk tawon parasitoid dan semprot bioinsektisida Bt."
  },

  // 31. Ulat Kantung Sawit
  ulat_kantung_sawit: {
    id: "ulat_kantung_sawit", name: "Ulat Kantung Sawit", latin: "Metisa plana", crop: "Kelapa Sawit",
    threat: "Tingkat Ancaman: Tinggi", img: "images/ulat_kantung_sawit.jpg",
    caption: "Foto dokumentasi: Kantung kepompong kerucut menggantung di bawah daun sawit.",
    paragraphs: [
      "Larva pembuat kantung perlindungan kerucut dari potongan daun kering yang menggantung di balik daun.",
      "Mengikis lapisan epidermis daun hingga daun berlubang kecil-kecil dan akhirnya mengering kecokelatan."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Kantung kerucut cokelat keabu-abuan menggantung di permukaan bawah daun." },
      { label: "Lokasi Serangan", desc: "Permukaan bawah helaian anak daun pelepah sawit." },
      { label: "Gejala Kasat Mata", desc: "Bercak lubang goresan kering dan daun berangsur memerah terbakar." },
      { label: "Dampak Lanjutan", desc: "Pelepah bawah mengering prematur dan daun runtuh." }
    ],
    solutionSummary: "Lakukan injeksi batang terukur pada tanaman tua dan lestarikan predator alami kepik reduviid."
  },

  // 32. Penggerek Buah Kakao
  penggerek_buah_kakao: {
    id: "penggerek_buah_kakao", name: "Penggerek Buah Kakao (PBK)", latin: "Conopomorpha cramerella", crop: "Kakao",
    threat: "Tingkat Ancaman: Sangat Tinggi", img: "images/penggerek_buah_kakao.jpg",
    caption: "Foto dokumentasi: Buah kakao masak belang dengan biji lengket keras di dalam.",
    paragraphs: [
      "Larva ngengat kecil yang mengebor masuk ke dalam plasenta dan saluran pembuluh biji buah kakao.",
      "Menyebabkan biji saling melengket keras, tidak berkembang, dan buah masak belang dengan bobot ringan."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Ngengat kecil kelabu bercak putih; larva kecil putih krem di dalam buah." },
      { label: "Lokasi Serangan", desc: "Daging plasenta dan ruang biji buah kakao." },
      { label: "Gejala Kasat Mata", desc: "Kulit buah masak sebelum waktunya dengan corak belang kuning-hijau tidak merata." },
      { label: "Dampak Lanjutan", desc: "Biji kakao lengket menyatu dan tidak dapat difermentasi dengan baik." }
    ],
    solutionSummary: "Bungkus buah muda kakao (kondomisasi) sejak panjang 8 cm dan lakukan pemangkasan teratur kanopi pohon."
  },

  // 33. Kepik Penghisap Buah Kakao
  kepik_penghisap_kakao: {
    id: "kepik_penghisap_kakao", name: "Kepik Penghisap Buah Kakao", latin: "Helopeltis antonii", crop: "Kakao & Jambu",
    threat: "Tingkat Ancaman: Tinggi", img: "images/kepik_penghisap_kakao.jpg",
    caption: "Foto dokumentasi: Bercak cekung cokelat kehitaman pada kulit buah kakao muda.",
    paragraphs: [
      "Kepik bertubuh ramping yang menusukkan stilet mulutnya ke kulit pentil buah kakao muda dan pucuk muda.",
      "Air liur kepik meracuni jaringan sel hingga timbul bercak cekung hitam berkerak dan buah mengering mati."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Kepik ramping dengan tonjolan menyerupai jarum di bagian punggung dada." },
      { label: "Lokasi Serangan", desc: "Pentil buah kakao muda dan pucuk cabang air (chupon)." },
      { label: "Gejala Kasat Mata", desc: "Bercak-bercak cekung cokelat kehitaman melingkar pada kulit buah." },
      { label: "Dampak Lanjutan", desc: "Buah muda mengeras kerdil (cherelle wilt) dan gagal panen." }
    ],
    solutionSummary: "Manfaatkan semut hitam (Dolichoderus thoracicus) sebagai musuh alami pengusir kepik di pohon kakao."
  },

  // 34. Penggerek Buah Kopi
  penggerek_buah_kopi: {
    id: "penggerek_buah_kopi", name: "Penggerek Buah Kopi (PBKo)", latin: "Hypothenemus hampei", crop: "Kopi",
    threat: "Tingkat Ancaman: Sangat Tinggi", img: "images/penggerek_buah_kopi.jpg",
    caption: "Foto dokumentasi: Lubang gerek melingkar tepat di kubah pusar buah kopi.",
    paragraphs: [
      "Kumbang bubuk mikro yang melubangi ujung buah kopi dan bertelur di dalam biji kopi.",
      "Larva memakan keping biji kopi hingga biji di dalam berlubang keropos dan bobot biji anjlok drastis."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Kumbang hitam sangat kecil berukuran 1,5–2 mm bertubuh silindris." },
      { label: "Lokasi Serangan", desc: "Kubah pusar (ujung) buah kopi yang mulai mengeras." },
      { label: "Gejala Kasat Mata", desc: "Lubang gerek bundar kecil tepat di pusar buah kopi." },
      { label: "Dampak Lanjutan", desc: "Biji kopi berlubang keropos dan mutu cita rasa kopi rusak." }
    ],
    solutionSummary: "Petik bubuk (sanitasi petik habis buah kopi yang terserang) dan pasang perangkap berumpan senyawa alkohol."
  },

  // 35. Kutu Dompolan Kopi
  kutu_dompolan_kopi: {
    id: "kutu_dompolan_kopi", name: "Kutu Dompolan Kopi", latin: "Planococcus citri", crop: "Kopi",
    threat: "Tingkat Ancaman: Sedang", img: "images/kutu_dompolan_kopi.jpg",
    caption: "Foto dokumentasi: Gumpalan tepung putih menutupi dompolan bunga dan buah kopi.",
    paragraphs: [
      "Kutu berselaput lilin putih yang bersimbiosis dengan semut hitam pada dompolan bunga dan buah kopi.",
      "Menghisap cairan tangkai buah hingga buah muda menguning dan gugur rontok secara massal."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Kutu pipih bertepung putih yang menempel rapat di celah dompolan buah." },
      { label: "Lokasi Serangan", desc: "Tangkai tandan dompolan buah dan bunga kopi." },
      { label: "Gejala Kasat Mata", desc: "Gumpalan putih seperti kapas menutupi dompolan buah disertai semut hitam." },
      { label: "Dampak Lanjutan", desc: "Bunga dan pentil buah kopi muda gugur massal." }
    ],
    solutionSummary: "Pangkas pohon pelindung kopi agar sinar matahari masuk dan semprot biopestisida sabun nimba."
  },

  // 36. Rayap Tanah Kebun
  rayap_tanah_kebun: {
    id: "rayap_tanah_kebun", name: "Rayap Tanah Kebun", latin: "Coptotermes curvignathus", crop: "Kelapa Sawit & Karet",
    threat: "Tingkat Ancaman: Tinggi", img: "images/rayap_tanah_kebun.jpg",
    caption: "Foto dokumentasi: Terowongan tanah rayap membungkus batang pohon sawit.",
    paragraphs: [
      "Rayap kayu hidup yang membangun terowongan tanah membungkus pangkal pokok batang pohon sawit.",
      "Mengebor ke dalam jaringan kayu bagian dalam hingga poros pohon keropos dan tumbang saat angin kencang."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Serangga putih lunak bertubuh ramping dengan kasta prajurit berkepala capit." },
      { label: "Lokasi Serangan", desc: "Pangkal pokok batang dan jaringan kambium kayu bagian dalam." },
      { label: "Gejala Kasat Mata", desc: "Terowongan tanah basah membungkus kulit batang pohon." },
      { label: "Dampak Lanjutan", desc: "Bagian dalam batang keropos dan pohon tumbang mendadak." }
    ],
    solutionSummary: "Bongkar tunggul kayu lapuk sisa pembukaan lahan dan aplikasikan jamur Metarhizium di jalur sarang."
  },

  // 37. Kumbang Moncong Merah
  kumbang_moncong_merah: {
    id: "kumbang_moncong_merah", name: "Kumbang Moncong Merah", latin: "Rhynchophorus ferrugineus", crop: "Kelapa",
    threat: "Tingkat Ancaman: Sangat Tinggi", img: "images/kumbang_moncong_merah.jpg",
    caption: "Foto dokumentasi: Pucuk mahkota kelapa patah terkulai mirip payung rusak.",
    paragraphs: [
      "Kumbang moncong besar yang meletakkan telur pada luka di batang atau ketiak pelepah kelapa.",
      "Larva berukuran besar melahap habis empulur titik tumbuh di dalam tajuk mahkota hingga mahkota roboh."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Kumbang besar berwarna merah karat kecokelatan dengan moncong melengkung khas." },
      { label: "Lokasi Serangan", desc: "Empulur titik tumbuh di dalam mahkota tajuk pohon kelapa." },
      { label: "Gejala Kasat Mata", desc: "Terdengar suara gerekan di dalam batang dan pelepah tengah patah terkulai." },
      { label: "Dampak Lanjutan", desc: "Mahkota daun kelapa ambruk dan pohon mati tegak." }
    ],
    solutionSummary: "Hindari melukai batang kelapa secara sembarangan dan pasang perangkap feromon penangkap kumbang."
  },

  // 38. Ulat Grayak Bawang
  ulat_grayak_bawang: {
    id: "ulat_grayak_bawang", name: "Ulat Grayak Bawang", latin: "Spodoptera exigua", crop: "Bawang Merah",
    threat: "Tingkat Ancaman: Tinggi", img: "images/ulat_grayak_bawang.jpg",
    caption: "Foto dokumentasi: Ulat hijau berada di dalam rongga silinder daun bawang.",
    paragraphs: [
      "Larva ngengat yang mengebor masuk ke dalam rongga silinder daun bawang merah.",
      "Memakan dinding klorofil bagian dalam daun sehingga daun bawang tampak transparan menerawang sebelum patah."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Ulat hijau ramping dengan garis kuning pucat di sisi tubuhnya." },
      { label: "Lokasi Serangan", desc: "Bagian dalam rongga silinder daun bawang merah." },
      { label: "Gejala Kasat Mata", desc: "Daun bawang tampak berbintik putih transparan menerawang lalu terkulai." },
      { label: "Dampak Lanjutan", desc: "Fotosintesis lumpuh total dan umbi bawang gagal mengisi." }
    ],
    solutionSummary: "Pasang perangkap feromon jantan di sentra bedengan dan semprotkan virus SeNPV spesifik Spodoptera."
  },

  // 39. Kutu Loncat Jeruk
  kutu_loncat_jeruk: {
    id: "kutu_loncat_jeruk", name: "Kutu Loncat Jeruk", latin: "Diaphorina citri", crop: "Jeruk",
    threat: "Tingkat Ancaman: Sangat Tinggi", img: "images/kutu_loncat_jeruk.jpg",
    caption: "Foto dokumentasi: Kutu bertengger miring 45 derajat pada kuncup tunas jeruk.",
    paragraphs: [
      "Serangga kecil penghisap kuncup tunas muda jeruk yang bertengger membentuk sudut 45 derajat.",
      "Merupakan vektor penular utama bakteri Liberibacter asiaticus penyebab penyakit mematikan CVPD pada jeruk."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Serangga kecil kecokelatan bertengger menungging membentuk sudut 45 derajat." },
      { label: "Lokasi Serangan", desc: "Kuncup tunas pupus muda tanaman jeruk." },
      { label: "Gejala Kasat Mata", desc: "Kuncup daun muda melintir mengering dan timbul embun madu berjelaga." },
      { label: "Dampak Lanjutan", desc: "Penularan penyakit CVPD yang menyebabkan pohon jeruk mati perlahan." }
    ],
    solutionSummary: "Gunakan bibit jeruk bersertifikat bebas penyakit dan aplikasikan minyak mineral pengusir kutu loncat."
  },

  // 40. Kutu Sisik Hijau
  kutu_sisik_hijau: {
    id: "kutu_sisik_hijau", name: "Kutu Sisik Hijau", latin: "Coccus viridis", crop: "Kopi & Jeruk",
    threat: "Tingkat Ancaman: Sedang", img: "images/kutu_sisik_hijau.jpg",
    caption: "Foto dokumentasi: Kepingan sisik pipih hijau menempel di tulang daun kopi.",
    paragraphs: [
      "Kutu pipih hijau yang menempel rapat di tulang punggung permukaan bawah daun dan ranting muda.",
      "Menghisap cairan getah terus-menerus dan mengeluarkan cairan manis yang memicu jelaga hitam tebal."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Kepingan sisik pipih lonjong hijau pucat menempel statis pada daun." },
      { label: "Lokasi Serangan", desc: "Tulang punggung bawah daun dan kulit ranting hijau muda." },
      { label: "Gejala Kasat Mata", desc: "Daun tertutup lapisan jamur jelaga hitam dan ranting mengering." },
      { label: "Dampak Lanjutan", desc: "Kemampuan fotosintesis daun menurun drastis dan bunga rontok." }
    ],
    solutionSummary: "Pangkas cabang yang terlalu rimbun agar terkena sinar matahari langsung dan semprot larutan deterjen nabati."
  },

  // 41. Hama Putih Palsu Padi
  hama_putih_palsu: {
    id: "hama_putih_palsu", name: "Hama Putih Palsu Padi", latin: "Cnaphalocrocis medinalis", crop: "Padi",
    threat: "Tingkat Ancaman: Sedang", img: "images/hama_putih_palsu.jpg",
    caption: "Foto dokumentasi: Daun padi terlipat membujur dengan selaput putih membran.",
    paragraphs: [
      "Larva ulat yang melipat helaian daun padi secara membujur menggunakan benang sutra perekat.",
      "Ulat hidup di dalam gulungan daun dan mengikis lapisan hijau daun menyisakan selaput putih menerawang."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Ulat hijau ramping bergerak lincah di dalam lipatan helaian daun." },
      { label: "Lokasi Serangan", desc: "Helaian daun padi fase anakan vegetatif hingga bunting." },
      { label: "Gejala Kasat Mata", desc: "Daun padi terlipat memanjang dan tampak bercak putih transparan kering." },
      { label: "Dampak Lanjutan", desc: "Luas permukaan daun hijau berkurang sehingga pengisian malai terganggu." }
    ],
    solutionSummary: "Hindari pemakaian pupuk urea yang terlalu berlebihan dan biarkan musuh alami laba-laba berkembang."
  },

  // 42. Wereng Hijau Padi
  wereng_hijau: {
    id: "wereng_hijau", name: "Wereng Hijau Padi", latin: "Nephotettix virescens", crop: "Padi",
    threat: "Tingkat Ancaman: Tinggi", img: "images/wereng_hijau.jpg",
    caption: "Foto dokumentasi: Serangga hijau menusuk helaian daun padi pembawa virus tungro.",
    paragraphs: [
      "Serangga penusuk-penghisap daun padi yang aktif bergerak di tajuk atas daun tanaman padi.",
      "Merupakan vektor utama virus tungro yang membuat daun padi berubah warna menjadi oranye menyala dan tanaman kerdil."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Serangga ramping hijau terang dengan bercak hitam di ujung sayap pada jantan." },
      { label: "Lokasi Serangan", desc: "Helaian daun dan pelepah bagian atas kanopi padi." },
      { label: "Gejala Kasat Mata", desc: "Daun padi menguning oranye mulai dari ujung dan jumlah anakan sedikit." },
      { label: "Dampak Lanjutan", desc: "Penyebaran virus tungro yang memicu kegagalan panen malai padi." }
    ],
    solutionSummary: "Gunakan varietas padi tahan tungro (Inpari 9 atau Inpari 36) dan tanam serempak dalam satu hamparan."
  },

  // 43. Wereng Punggung Putih
  wereng_punggung_putih: {
    id: "wereng_punggung_putih", name: "Wereng Punggung Putih", latin: "Sogatella furcifera", crop: "Padi",
    threat: "Tingkat Ancaman: Sedang", img: "images/wereng_punggung_putih.jpg",
    caption: "Foto dokumentasi: Wereng dengan garis putih membujur di bagian punggung.",
    paragraphs: [
      "Menghisap cairan pelepah daun padi terutama pada fase vegetatif awal tanaman padi.",
      "Mengakibatkan daun menguning melintir dan mengurangi jumlah anakan produktif per rumpun."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Wereng kecil dengan garis strip putih membujur yang kontras di punggung dada." },
      { label: "Lokasi Serangan", desc: "Pelepah batang padi bagian bawah dekat pangkal akar." },
      { label: "Gejala Kasat Mata", desc: "Daun menguning melintir dan pelepah dipenuhi bercak kotoran manis." },
      { label: "Dampak Lanjutan", desc: "Pertumbuhan anakan padi terhambat dan rumpun menjadi kerdil." }
    ],
    solutionSummary: "Lakukan pengeringan berkala petakan sawah dan semprotkan suspensi spora Beauveria bassiana."
  },

  // 44. Hama Ganjur Padi
  ganjur_padi: {
    id: "ganjur_padi", name: "Hama Ganjur Padi", latin: "Orseolia oryzae", crop: "Padi",
    threat: "Tingkat Ancaman: Sedang", img: "images/ganjur_padi.jpg",
    caption: "Foto dokumentasi: Tunas padi tumbuh silindris menyerupai pipa daun bawang.",
    paragraphs: [
      "Larva lalat ganjur menyerang titik tumbuh tunas bibit padi muda pada musim hujan berkabut.",
      "Menstimulasi pembentukan puru silindris berongga sehingga tunas daun tumbuh mirip tabung pipa daun bawang."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Larva kecil transparan di dalam tabung tunas; lalat dewasa mirip nyamuk merah." },
      { label: "Lokasi Serangan", desc: "Titik tumbuh tunas anakan bibit padi muda." },
      { label: "Gejala Kasat Mata", desc: "Tunas daun berubah menjadi tabung silindris memanjang menyerupai daun bawang." },
      { label: "Dampak Lanjutan", desc: "Tunas anakan tersebut mandul dan tidak mampu menghasilkan malai gabah." }
    ],
    solutionSummary: "Hindari penanaman terlambat di musim penghujan dan manfaatkan tawon parasitoid Platygaster oryzae."
  },

  // 45. Kepinding Tanah Padi
  kepinding_tanah: {
    id: "kepinding_tanah", name: "Kepinding Tanah Padi", latin: "Scotinophara coarctata", crop: "Padi",
    threat: "Tingkat Ancaman: Sedang", img: "images/kepinding_tanah.jpg",
    caption: "Foto dokumentasi: Kepik hitam berbau menyengat bergerombol di pangkal batang padi.",
    paragraphs: [
      "Kepik hitam yang hidup bergerombol di pangkal rumpun padi dekat permukaan tanah berlumpur.",
      "Menghisap cairan batang padi hingga tanaman layu kemerahan dan pertumbuhan anakan terhenti."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Kepik berwarna hitam kecokelatan kusam berkulit keras dan berbau busuk." },
      { label: "Lokasi Serangan", desc: "Pangkal batang padi tepat di atas permukaan tanah sawah." },
      { label: "Gejala Kasat Mata", desc: "Daun bagian bawah menguning kemerahan dan batang padi tampak kerdil." },
      { label: "Dampak Lanjutan", desc: "Rumpun padi kerdil dan malai keluar tidak sempurna." }
    ],
    solutionSummary: "Genangi petakan sawah sesaat untuk memaksa kepik naik ke atas tajuk lalu semprotkan jamur Beauveria."
  },

  // 46. Orong-Orong Sawah
  orong_orong: {
    id: "orong_orong", name: "Orong-Orong / Anjing Tanah", latin: "Gryllotalpa orientalis", crop: "Padi & Sayuran",
    threat: "Tingkat Ancaman: Sedang", img: "images/orong_orong.jpg",
    caption: "Foto dokumentasi: Serangga penggali tanah bertungkai depan kuat memotong akar bibit.",
    paragraphs: [
      "Serangga penggali tanah yang bergerak aktif di lapisan lumpur dangkal bedengan persemaian.",
      "Memotong perakaran dan pangkal batang bibit muda di bawah permukaan tanah hingga bibit roboh kering."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Tubuh cokelat berotot dengan sepasang kaki depan pipih bergerigi untuk menggali tanah." },
      { label: "Lokasi Serangan", desc: "Sistem perakaran di dalam lapisan tanah dangkal." },
      { label: "Gejala Kasat Mata", desc: "Ada jejak alur galian terowongan tanah dan bibit padi muda layu terapung." },
      { label: "Dampak Lanjutan", desc: "Petakan persemaian gundul karena bibit terpotong akarnya." }
    ],
    solutionSummary: "Genangi petakan persemaian dengan air secara merata agar serangga keluar dari liang galian."
  },

  // 47. Kepik Cokelat Polong Kedelai
  kepik_cokelat_polong: {
    id: "kepik_cokelat_polong", name: "Kepik Cokelat Polong", latin: "Riptortus linearis", crop: "Kedelai",
    threat: "Tingkat Ancaman: Sedang", img: "images/kepik_cokelat_polong.jpg",
    caption: "Foto dokumentasi: Kepik cokelat bertungkai belakang besar menusuk polong kedelai.",
    paragraphs: [
      "Kepik bertubuh ramping dengan garis samping kuning yang menusukkan stilet ke dinding polong kedelai.",
      "Menyuntikkan cairan yang membuat biji kedelai muda di dalam polong menjadi keriput kempis dan membusuk."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Kepik cokelat ramping dengan paha kaki belakang membesar berduri." },
      { label: "Lokasi Serangan", desc: "Polong tanaman kedelai pada fase pengisian biji." },
      { label: "Gejala Kasat Mata", desc: "Bintik hitam tusukan pada kulit polong dan biji di dalam kempis berkerut." },
      { label: "Dampak Lanjutan", desc: "Polong gugur dini dan bobot panen biji kedelai anjlok." }
    ],
    solutionSummary: "Tanam tanaman perangkap sesbania di perimeter petakan kedelai dan semprot biopestisida mimba."
  },

  // 48. Ulat Jengkal Kedelai
  ulat_jengkal: {
    id: "ulat_jengkal", name: "Ulat Jengkal Kedelai", latin: "Chrysodeixis chalcites", crop: "Kedelai & Tomat",
    threat: "Tingkat Ancaman: Sedang", img: "images/ulat_jengkal.jpg",
    caption: "Foto dokumentasi: Ulat hijau melengkung seperti jengkal tangan memakan daun.",
    paragraphs: [
      "Larva ngengat yang memiliki cara berjalan khas melengkungkan tubuhnya menyerupai jengkal tangan.",
      "Memakan helaian daun kedelai dan tomat dari bagian bawah di sela-sela tulang daun utama."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Ulat hijau cerah yang bergerak melengkung seperti busur jengkal tangan." },
      { label: "Lokasi Serangan", desc: "Permukaan bawah helaian daun kedelai dan tomat." },
      { label: "Gejala Kasat Mata", desc: "Daun berlubang-lubang tidak beraturan menyisakan urat tulang daun." },
      { label: "Dampak Lanjutan", desc: "Penurunan luas daun fotosintesis tanaman kedelai." }
    ],
    solutionSummary: "Semprotkan bioinsektisida Bacillus thuringiensis pada pagi hari saat ulat berada di permukaan daun."
  },

  // 49. Penggerek Batang Jagung
  penggerek_batang_jagung: {
    id: "penggerek_batang_jagung", name: "Penggerek Batang Jagung", latin: "Ostrinia furnacalis", crop: "Jagung",
    threat: "Tingkat Ancaman: Tinggi", img: "images/penggerek_batang_jagung.jpg",
    caption: "Foto dokumentasi: Batang jagung berlubang gerek dan mudah patah tertiup angin.",
    paragraphs: [
      "Larva ngengat yang mengebor masuk ke dalam ruas batang tanaman jagung yang sedang tumbuh.",
      "Mengakibatkan batang berlubang keropos sehingga tanaman mudah patah saat tertiup angin kencang."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Larva putih krem dengan bintik cokelat di setiap ruas tubuhnya." },
      { label: "Lokasi Serangan", desc: "Ruas batang jagung dan pangkal tangkai tongkol." },
      { label: "Gejala Kasat Mata", desc: "Ditemukan lubang gerek kecil pada ruas batang disertai kotoran serbuk gergaji." },
      { label: "Dampak Lanjutan", desc: "Batang jagung patah sebelum masa panen dan pengisian tongkol terhenti." }
    ],
    solutionSummary: "Tebarkan parasitoid telur Trichogramma ostriniae dan potong batang sisa panen untuk dibakar."
  },

  // 50. Kepik Pengisap Daun Teh
  kepik_pengisap_teh: {
    id: "kepik_pengisap_teh", name: "Kepik Pengisap Daun Teh", latin: "Helopeltis theivora", crop: "Teh",
    threat: "Tingkat Ancaman: Sedang", img: "images/kepik_pengisap_teh.jpg",
    caption: "Foto dokumentasi: Pucuk peko daun teh mengering kecokelatan mirip terbakar.",
    paragraphs: [
      "Kepik ramping yang menusukkan stilet mulutnya ke pucuk peko daun teh muda yang baru bertunas.",
      "Menyuntikkan cairan racun yang membuat helaian daun muda berbercak cokelat dan mengering keriting."
    ],
    features: [
      { label: "Ciri Fisik", desc: "Kepik ramping hitam oranye dengan spina jarum mencuat di punggung dada." },
      { label: "Lokasi Serangan", desc: "Pucuk peko muda dan kuncup daun teh yang baru merekah." },
      { label: "Gejala Kasat Mata", desc: "Bercak-bercak cekung cokelat kehitaman pada pucuk muda mirip luka bakar." },
      { label: "Dampak Lanjutan", desc: "Pucuk teh mengering kaku sehingga tidak dapat dipetik untuk bahan teh bermutu." }
    ],
    solutionSummary: "Lakukan pemetikan pucuk secara teratur (break out) dan semprot biopestisida ekstrak daun mimba."
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const pestId = urlParams.get('id') || 'wereng_cokelat';
  const data = pestDetailData[pestId] || pestDetailData.wereng_cokelat;
  const elCrumb = document.getElementById('crumbPestName');
  const elName = document.getElementById('detPestName');
  const elMeta = document.getElementById('detPestMeta');
  const elThreat = document.getElementById('detThreatBadge');
  const elImg = document.getElementById('detPestImg');
  const elCaption = document.getElementById('detImgCaption');
  const elAboutTitle = document.getElementById('detAboutTitle');

  if (elCrumb) elCrumb.innerText = `${data.name} (${data.crop})`;
  if (elName) elName.innerText = data.name;
  if (elMeta) elMeta.innerText = `${data.latin} • Hama Utama ${data.crop}`;
  if (elThreat) elThreat.innerText = data.threat;
  if (elCaption) elCaption.innerText = data.caption;
  if (elAboutTitle) elAboutTitle.innerText = `Mengenal ${data.name}`;

  if (elImg) {
    elImg.src = data.img;
    elImg.onerror = function() {
      this.onerror = null;
      this.src = SAFE_PLACEHOLDER_IMG;
    };
  }

  const narrativeContainer = document.getElementById('detLongDesc');
  if (narrativeContainer) {
    narrativeContainer.innerHTML = '';
    data.paragraphs.forEach(pText => {
      const p = document.createElement('p');
      p.innerText = pText;
      narrativeContainer.appendChild(p);
    });
  }

  const checklistContainer = document.getElementById('detSymptomsList');
  if (checklistContainer) {
    checklistContainer.innerHTML = '';
    data.features.forEach(feat => {
      const li = document.createElement('li');
      li.className = 'check-item';
      li.innerHTML = `
        <div class="check-icon-box">✓</div>
        <div class="check-text-box">
          <strong>${feat.label}</strong>
          <span>${feat.desc}</span>
        </div>
      `;
      checklistContainer.appendChild(li);
    });
  }

  const elSolSummary = document.getElementById('detSolutionSummary');
  if (elSolSummary) elSolSummary.innerText = data.solutionSummary;

  const btnSolusi = document.getElementById('btnGoToSolution');
  if (btnSolusi) {
    btnSolusi.addEventListener('click', (e) => {
      e.preventDefault();
      sessionStorage.setItem('hamaTerpilih', data.id);
      window.location.href = 'solusi-hama.html';
    });
  }
});