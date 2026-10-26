// Mengambil elemen halaman pembuka.
const cover = document.getElementById("cover");

// Mengambil elemen isi undangan.
const invitation = document.getElementById("invitation");

// Mengambil tombol buka undangan.
const openButton = document.getElementById("openInvitation");

// Mengambil elemen musik latar.
const weddingMusic = document.getElementById("weddingMusic");

// Menjalankan fungsi ketika tombol diklik.
openButton.addEventListener("click", function () {

    // Menyembunyikan halaman pembuka.
    cover.classList.add("d-none");

    // Menampilkan isi undangan.
    invitation.classList.remove("d-none");

    // Memutar musik latar.
weddingMusic.play();

    // Mengarahkan tampilan ke awal isi undangan.
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
// Tanggal dan waktu acara: 24 Desember 2026, pukul 10.00 WIB.
const weddingDate = new Date("2026-12-24T10:00:00-08:00").getTime();

// Memperbarui countdown.
function updateCountdown() {

    const now = Date.now();

    const difference = weddingDate - now;

    const countdownMessage = document.getElementById("countdownMessage");

    // Jika waktu acara sudah tiba atau terlewati.
    if (difference <= 0) {

        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";

        countdownMessage.textContent = "Hari bahagia telah tiba!";

        clearInterval(countdownInterval);

        return;
    }

    // Menghitung sisa hari, jam, menit, dan detik.
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    // Menampilkan hasil ke halaman.
    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent = hours;

    document.getElementById("minutes").textContent = minutes;

    document.getElementById("seconds").textContent = seconds;

    countdownMessage.textContent = "Kami menantikan kehadiran Anda.";
}

// Jalankan sekali agar angka langsung muncul.
updateCountdown();

// Perbarui setiap satu detik.
const countdownInterval = setInterval(updateCountdown, 1000);   

// Mengambil elemen formulir RSVP.
const rsvpForm = document.getElementById("rsvpForm");

const attendance = document.getElementById("attendance");

const guestCountGroup = document.getElementById("guestCountGroup");

const rsvpMessage = document.getElementById("rsvpMessage");

// Menampilkan pilihan jumlah tamu hanya jika memilih hadir.
attendance.addEventListener("change", function () {

    if (attendance.value === "hadir") {
        guestCountGroup.style.display = "block";
    } else {
        guestCountGroup.style.display = "none";
    }

});

// Mengatur tampilan awal jumlah tamu.
guestCountGroup.style.display = "none";

// Memproses formulir saat tombol diklik.
rsvpForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("guestName").value.trim();

    const attendanceValue = attendance.value;

    const guestCount = document.getElementById("guestCount").value;

    if (attendanceValue === "hadir") {

        rsvpMessage.textContent =
            `Terima kasih, ${name}! Konfirmasi kehadiran untuk ${guestCount} orang berhasil ditampilkan.`;

    } else {

        rsvpMessage.textContent =
            `Terima kasih atas konfirmasinya, ${name}. Semoga kita dapat bertemu di kesempatan lain.`;

    }

   rsvpForm.reset();

guestCountGroup.style.display = "none";
// Hapus pesan lama ketika pengunjung mulai mengubah formulir.
rsvpForm.addEventListener("input", function () {
    rsvpMessage.textContent = "";
});

rsvpForm.addEventListener("change", function () {
    rsvpMessage.textContent = "";
});

});