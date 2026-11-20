var totalNode;

function init() {
    totalNode = document.getElementById("totalBayar");
    hitungTotal();
}

function hitungTotal() {
    var harga = parseFloat(document.getElementById("harga").value);
    var diskon = parseFloat(document.getElementById("diskon").value);

    var infoHemat = document.getElementById("infoHemat");

    if (isNaN(diskon) || diskon < 0 || diskon > 100) {
        totalNode.style.color = "red";
        totalNode.innerHTML = "Diskon tidak valid!";
        infoHemat.innerHTML = "Anda hemat: Rp0";
    } else {
        var potongan = harga * (diskon / 100);
        var akhir = harga - potongan;

        totalNode.style.color = "green";
        totalNode.innerHTML = akhir;

        infoHemat.innerHTML = "Anda hemat: Rp" + potongan;
    }
}