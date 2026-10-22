// ===== Perhitungan =====
function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

// ===== Validasi =====
function nilaiValid(teks) {
  const n = Number(teks);
  return teks.trim() !== "" && !Number.isNaN(n) && n >= 0 && n <= 100;
}

// ===== Tampilan =====
function tampilkan(html, adaError) {
  const kotak = document.getElementById("hasil");
  kotak.className = adaError ? "error" : "";
  kotak.innerHTML = html;
}

function proses() {
  const teksTugas = document.getElementById("tugas").value;
  const teksUts = document.getElementById("uts").value;
  const teksUas = document.getElementById("uas").value;

  if (!nilaiValid(teksTugas) || !nilaiValid(teksUts) || !nilaiValid(teksUas)) {
    tampilkan("Semua nilai wajib diisi dan harus berada pada rentang 0–100.", true);
    return;
  }

  const akhir = hitungNilaiAkhir(Number(teksTugas), Number(teksUts), Number(teksUas));
  const predikat = tentukanPredikat(akhir);
  const status = akhir >= 60 ? "Lulus" : "Belum lulus";

  console.log("Nilai akhir:", akhir.toFixed(2), "| Predikat:", predikat, "| Status:", status);
  tampilkan(
    "<strong>Nilai akhir:</strong> " + akhir.toFixed(2) + "<br>" +
    "<strong>Predikat:</strong> " + predikat + "<br>" +
    "<strong>Status:</strong> " + status,
    false
  );
}
