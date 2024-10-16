function showMessage() {
    const message = document.getElementById('message');
    message.textContent = "Aku sayang kamu, dan aku akan selalu mencintaimu selamanya ❤️";

    // Ubah link WhatsApp saat pesan ditampilkan
    const whatsappButton = document.getElementById('whatsappButton');
    const encodedMessage = encodeURIComponent("Aku sayang kamu, dan aku akan selalu mencintaimu selamanya,oh iya sama jangan ngeselin yaa sayang,jangan ngomong kasar, love you sayang Firanti Anjani nya akuuu ❤️");
    const phoneNumber = '62882000611369'; // Ganti dengan nomor WhatsApp tujuan
    whatsappButton.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
