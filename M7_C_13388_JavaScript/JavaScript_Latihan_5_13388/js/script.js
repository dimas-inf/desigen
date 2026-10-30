function fn_ValForm() {
    var kosong = "";
    var sNama = document.getElementById("nama").value;
    var sEmail = document.getElementById("email").value;
    var sUmur = document.getElementById("umur").value;
    var sKategori = document.getElementById("kategori").value;
    var cekValidasiEmail = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

    if (sNama == "") {
        kosong += "\n* Format Nama belum diisi";
    }

    if (sEmail == "") {
        kosong += "\n* Email belum diisi";
    } else {

        if (!cekValidasiEmail.test(sEmail)) {
            kosong += "\n* Format email tidak valid";
        }
    }

    if (sUmur == "") {
        kosong += "\n* Umur belum diisi";
    } else {
        if (isNaN(sUmur) || !/^\d+$/.test(sUmur) || sUmur < 7 || sUmur > 70) {
            kosong += "\n* Umur harus berupa angka antara 7 sampai 70";
        }
    }

    if (sKategori == "") {
        kosong += "\n* Koleksi favorit belum dipilih";
    }

    if (kosong != "") {
        alert("Peringatan:\n" + kosong);
        return false;
    } else {
        var sInfo;

        if (sUmur <= 17) {
            sInfo = "Anggota Pelajar";
        } else {
            sInfo = "Anggota Umum";
        }

        var sPilihan;

        switch (sKategori) {
            case "F":
                sPilihan = "Fiksi";
                break;

            case "N":
                sPilihan = "Non-Fiksi";
                break;

            case "J":
                sPilihan = "Jurnal Ilmiah";
                break;
        }

        alert("Terima kasih " + sNama + " ! Anda terdaftar di koleksi " + sPilihan + " (" + sInfo + ").");

        return true;
    }
}