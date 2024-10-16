function showMessage() {
    const message = document.getElementById('message');
    message.textContent = "Aku sayang kamu, dan aku akan selalu mencintaimu selamanya ❤️";

    // Ubah link WhatsApp saat pesan ditampilkan
    const whatsappButton = document.getElementById('whatsappButton');
    const encodedMessage = encodeURIComponent("Aku sayang kamu, dan aku akan selalu mencintaimu selamanya ❤️");
    const phoneNumber = '628123456789'; // Ganti dengan nomor WhatsApp tujuan
    whatsappButton.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
