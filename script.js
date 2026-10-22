// ===== Latihan 1 — Output =====
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

// ===== Latihan 2 — Alert dan prompt =====
function latihan2() {
  const namaPengguna = prompt("Masukkan nama Anda:", "");
  if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
  } else {
    alert("Nama belum diisi.");
  }
}

// ===== Latihan 3 — Function dan operasi aritmetika =====
function operasiDasar(a, b) {
  const baris = [
    "Penjumlahan: " + (a + b),
    "Pengurangan: " + (a - b),
    "Perkalian: " + (a * b),
    "Pembagian: " + (b !== 0 ? a / b : "Tidak dapat dibagi nol"),
    "Modulus: " + (b !== 0 ? a % b : "Tidak dapat dibagi nol")
  ];
  baris.forEach((teks) => console.log(teks));
  document.getElementById("hasilOperasi").textContent = baris.join("\n");
}

// Eksperimen 1 — dua nilai dari prompt, dikonversi ke number
function eksperimen1() {
  const a = Number(prompt("Masukkan bilangan pertama:"));
  const b = Number(prompt("Masukkan bilangan kedua:"));
  if (Number.isNaN(a) || Number.isNaN(b)) {
    alert("Input harus berupa angka.");
    return;
  }
  operasiDasar(a, b);
}

// ===== Latihan 4 — if–else =====
function latihan4() {
  const inputNilai = prompt("Masukkan nilai (0–100):");
  const nilaiMahasiswa = Number(inputNilai);

  if (inputNilai === null || inputNilai.trim() === "" ||
      Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
    alert("Input nilai tidak valid.");
  } else if (nilaiMahasiswa >= 60) {
    alert("Lulus");
  } else {
    alert("Belum lulus");
  }
}

// ===== Latihan 5 — switch =====
function latihan5() {
  const inputPilihan = prompt("Masukkan angka 1–5:");
  switch (inputPilihan) {
    case "1": alert("Bilangan satu"); break;
    case "2": alert("Bilangan dua"); break;
    case "3": alert("Bilangan tiga"); break;
    case "4": alert("Bilangan empat"); break;
    case "5": alert("Bilangan lima"); break;
    default: alert("Pilihan tidak tersedia");
  }
}

// ===== Latihan 6 — Genap atau ganjil =====
function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");

  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}

// ===== Latihan 7 — Warna latar =====
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}

// ===== Latihan 8 — Checkbox menu =====
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
  item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
  let total = 0;
  daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
  });
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

// ===== Eksperimen Mandiri =====
// Eksperimen 2 — tabel perkalian
function tabelPerkalian(n) {
  let teks = "";
  for (let i = 1; i <= 10; i++) {
    teks += n + " x " + i + " = " + (n * i) + "\n";
  }
  document.getElementById("hasilEksperimen").textContent = teks;
  console.log(teks);
}

// Eksperimen 3 — function cekGenap
function cekGenap(angka) {
  return angka % 2 === 0;
}

function ujiCekGenap() {
  const uji = [4, 7, 0, -2];
  const teks = uji.map((x) => "cekGenap(" + x + ") = " + cekGenap(x)).join("\n");
  document.getElementById("hasilEksperimen").textContent = teks;
  console.log(teks);
}

// Eksperimen 6 — sembunyikan / tampilkan elemen
function toggleKotak() {
  const kotak = document.getElementById("kotakToggle");
  kotak.style.display = (kotak.style.display === "none") ? "block" : "none";
}

// ===== Tugas H.7 / Eksperimen 4 — Validasi form =====
function validasiForm() {
  const nama = document.getElementById("namaForm").value.trim();
  const nilaiTeks = document.getElementById("nilaiForm").value.trim();
  const nilai = Number(nilaiTeks);
  const hasil = document.getElementById("hasilForm");

  if (nama === "") {
    hasil.style.color = "red";
    hasil.textContent = "Nama tidak boleh kosong.";
  } else if (nilaiTeks === "" || Number.isNaN(nilai)) {
    hasil.style.color = "red";
    hasil.textContent = "Nilai tidak boleh kosong dan harus berupa angka.";
  } else if (nilai < 0 || nilai > 100) {
    hasil.style.color = "red";
    hasil.textContent = "Nilai harus berada pada rentang 0–100.";
  } else {
    hasil.style.color = "green";
    hasil.textContent = "Data valid: " + nama + " (nilai " + nilai + ").";
  }
}
