let previousPage = null;

function showPage(pageId) {
  const currentVisible = document.querySelector('.page:not([style*="display: none"])');
  previousPage = currentVisible ? currentVisible.id : 'homepage';

  document.getElementById('homepage').style.display = 'none';
  document.querySelectorAll('.page').forEach(page => {
    page.style.display = 'none';
  });
  document.getElementById(pageId).style.display = 'block';
}

function goBack() {
  if (previousPage) {
    showPage(previousPage);
    previousPage = null;
  } else {
    document.getElementById('homepage').style.display = 'block';
    document.querySelectorAll('.page').forEach(page => {
      page.style.display = 'none';
    });
  }
}

function mulaiAplikasi() {
  const nama = document.getElementById('nama-user').value.trim();
  if (!nama) {
    alert("Silakan masukkan nama terlebih dahulu.");
    return;
  }

  // Sembunyikan halaman awal dan tampilkan konten utama
  document.getElementById('halaman-awal').style.display = 'none';
  document.querySelector('header').style.display = 'flex';
  document.getElementById('homepage').style.display = 'block';
 // welcome text
  document.getElementById('welcome-text').textContent = `Welcome to Homiework, ${nama}💪🏻`;

  // (opsional) Simpan nama jika ingin dipakai nanti
  localStorage.setItem('namaUser', nama);
}

document.getElementById('upper-btn').addEventListener('click', () => {
  showPage('upper-page');
});
document.getElementById('lower-btn').addEventListener('click', () => {
  showPage('lower-page');
});
document.getElementById('fitur-btn').addEventListener('click', () => {
  showPage('fitur-page');
});

function hitungBeratIdeal() {
  const tinggi = document.getElementById('tinggi').value;
  const hasil = document.getElementById('hasil-berat');
  const lang = document.getElementById('language-select').value;

  if (!tinggi || tinggi < 100) {
    hasil.textContent = lang === 'en' 
      ? "Please enter a valid height (minimum 100 cm)."
      : "Masukkan tinggi badan yang valid (minimal 100 cm).";
    return;
  }

  const ideal = (tinggi - 100) - ((tinggi - 100) * 0.15);

  hasil.textContent = lang === 'en'
    ? `Your ideal weight is ${ideal.toFixed(1)} kg`
    : `Berat badan ideal Anda adalah sekitar ${ideal.toFixed(1)} kg`;
}
function hitungKalori() {
  const berat = parseFloat(document.getElementById('berat').value);
  const tinggi = parseFloat(document.getElementById('tinggi-bmr').value);
  const umur = parseInt(document.getElementById('umur').value);
  const hasil = document.getElementById('hasil-bmr');
  const lang = document.getElementById('language-select').value;

  if (!berat || berat <= 0) {
    hasil.textContent = lang === 'en' 
      ? "Please enter a valid weight."
      : "Masukkan berat badan yang valid.";
    return;
  }
  if (!tinggi || tinggi <= 0) {
    hasil.textContent = lang === 'en' 
      ? "Please enter a valid height."
      : "Masukkan tinggi badan yang valid.";
    return;
  }
  if (!umur || umur <= 0) {
    hasil.textContent = lang === 'en' 
      ? "Please enter a valid age."
      : "Masukkan umur yang valid.";
    return;
  }

  const bmr = 10 * berat + 6.25 * tinggi - 5 * umur - 161;

  hasil.textContent = lang === 'en'
    ? `Your daily calorie need is ${bmr.toFixed(0)} calories.`
    : `Kalori yang anda butuhkan adalah sekitar ${bmr.toFixed(0)} kalori per hari.`;
}
function openKalkulator() {
  showPage('kalkulator-page');
}
function openKalori() {
  showPage('kalori-page');
}

// ubah bahasa
function changeLanguage() {
  const lang = document.getElementById('language-select').value;

  if (lang === 'en') {
    // Home
    document.querySelector('.title').textContent = 'HOME WORKOUT';
    document.querySelector('.subtitle').textContent = 'Enter Your Name';
    document.querySelector('.submit-btn').textContent = 'START';
    document.querySelector('#homepage .subtitle').textContent = 'For Women';

    // Body buttons
    document.querySelector('#upper-btn .body-label').textContent = 'Upper Body';
    document.querySelector('#lower-btn .body-label').textContent = 'Lower Body';
    document.querySelector('#fitur-btn .body-label').textContent = 'Other Features';

    // Feature pages titles
    document.querySelector('#fitur-page h2').textContent = 'Choose Feature';
    document.querySelector('#kalkulator-page h2').textContent = 'Ideal Weight Calculator';
    document.querySelector('#kalori-page h2').textContent = 'Calories Calculator (BMR)';

    // Fitur buttons
    document.querySelectorAll('#fitur-page .fitur-option')[0].textContent = 'Ideal Weight by Height';
    document.querySelectorAll('#fitur-page .fitur-option')[1].textContent = 'Calories Needed';

    // Kalkulator Berat Ideal
    document.querySelector('#kalkulator-page label[for="tinggi"]').textContent = 'Height (cm)';
    document.querySelector('#tinggi').placeholder = 'Enter your height';
    document.querySelector('#kalkulator-page .submit-btn').textContent = 'Calculate';
    document.getElementById('hasil-berat').textContent = '';

    // Kalkulator BMR
    document.querySelector('#kalori-page label[for="berat"]').textContent = 'Weight (kg)';
    document.querySelector('#kalori-page label[for="tinggi-bmr"]').textContent = 'Height (cm)';
    document.querySelector('#kalori-page label[for="umur"]').textContent = 'Age (years)';
    document.querySelector('#berat').placeholder = 'e.g. 55';
    document.querySelector('#tinggi-bmr').placeholder = 'e.g. 160';
    document.querySelector('#umur').placeholder = 'e.g. 25';
    document.querySelector('#kalori-page .submit-btn').textContent = 'Calculate BMR';
    document.getElementById('hasil-bmr').textContent = '';

    // Tombol kembali
    document.querySelectorAll('.back-btn').forEach(btn => btn.textContent = '← Back');

    // Checkbox
    const checks = document.querySelectorAll('.checkbox-container p');
    checks[0].innerHTML = `<input type="checkbox" checked> I agree that any injury risks from workout activities are my own responsibility, and Homiework is not responsible for it.`;
    checks[1].innerHTML = `<input type="checkbox" checked> I agree that my personal name will be used according to Homiework's policy to improve the website.`;

    // Footer
    document.querySelector('.footer').textContent = 'Users can access this application anytime, anywhere, and with anyone. Please use it wisely and regularly so that every movement provides the desired results. Always be careful when doing the movements to avoid injury.';
  } else {
    // Bahasa Indonesia
    document.querySelector('.title').textContent = 'HOME WORKOUT';
    document.querySelector('.subtitle').textContent = 'Masukkan Nama Anda';
    document.querySelector('.submit-btn').textContent = 'MULAI';
    document.querySelector('#homepage .subtitle').textContent = 'Untuk Wanita';

    // Body buttons
    document.querySelector('#upper-btn .body-label').textContent = 'Badan Bagian Atas';
    document.querySelector('#lower-btn .body-label').textContent = 'Badan Bagian Bawah';
    document.querySelector('#fitur-btn .body-label').textContent = 'Fitur Lainnya';

    // Feature pages titles
    document.querySelector('#fitur-page h2').textContent = 'Pilih Fitur';
    document.querySelector('#kalkulator-page h2').textContent = 'Kalkulator Berat Badan Ideal';
    document.querySelector('#kalori-page h2').textContent = 'Kalkulator Kalori (BMR)';

    // Fitur buttons
    document.querySelectorAll('#fitur-page .fitur-option')[0].textContent = 'Kalkulator Berat Ideal Berdasarkan Tinggi';
    document.querySelectorAll('#fitur-page .fitur-option')[1].textContent = 'Kalori yang dibutuhkan';

    // Kalkulator Berat Ideal
    document.querySelector('#kalkulator-page label[for="tinggi"]').textContent = 'Tinggi Badan (cm)';
    document.querySelector('#tinggi').placeholder = 'Masukkan tinggi Anda';
    document.querySelector('#kalkulator-page .submit-btn').textContent = 'Hitung';
    document.getElementById('hasil-berat').textContent = '';

    // Kalkulator BMR
    document.querySelector('#kalori-page label[for="berat"]').textContent = 'Berat Badan (kg)';
    document.querySelector('#kalori-page label[for="tinggi-bmr"]').textContent = 'Tinggi Badan (cm)';
    document.querySelector('#kalori-page label[for="umur"]').textContent = 'Umur (tahun)';
    document.querySelector('#berat').placeholder = 'Contoh: 55';
    document.querySelector('#tinggi-bmr').placeholder = 'Contoh: 160';
    document.querySelector('#umur').placeholder = 'Contoh: 25';
    document.querySelector('#kalori-page .submit-btn').textContent = 'Hitung BMR';
    document.getElementById('hasil-bmr').textContent = '';

    // Tombol kembali
    document.querySelectorAll('.back-btn').forEach(btn => btn.textContent = '← Kembali');

    // Checkbox
    const checks = document.querySelectorAll('.checkbox-container p');
    checks[0].innerHTML = `<input type="checkbox" checked> Saya menyetujui bahwa segala risiko cedera akibat aktivitas latihan menjadi tanggung jawab pribadi, dan Homiework tidak bertanggung jawab atas hal tersebut.`;
    checks[1].innerHTML = `<input type="checkbox" checked> Saya menyetujui bahwa nama pribadi saya akan digunakan sesuai dengan kebijakan Homiework untuk meningkatkan website.`;

    // Footer
    document.querySelector('.footer').textContent = 'Pengguna dapat mengakses aplikasi ini di mana saja, kapan saja, dan bersama siapa pun. Diharapkan untuk menggunakan secara bijak dan teratur agar setiap gerakan memberikan hasil yang diinginkan. Selalu berhati-hati saat melakukan gerakan untuk menghindari cedera.';
  }
}