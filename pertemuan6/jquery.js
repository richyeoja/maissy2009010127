$("#simpan").click(function(){
    var kode_produk = $("#kode_produk").val()
    if (kode_produk == "") {
        $("#lihat_kode_produk").text("Kode Produk Masih Kosong")
    }else{
        $("#lihat_kode_produk").text("")
    }

    var nama_produk = $("#nama_produk").val()
    if (nama_produk == "") {
        $("#lihat_nama_produk").text("Nama Produk Masih Kosong")
    }else{
        $("#lihat_nama_produk").text("")
    }

    var jenis_produk = $("#jenis_produk").val()
    if (jenis_produk == "") {
        $("#lihat_jenis_produk").text("Jenis Produk Masih Kosong")
    }else{
        $("#lihat_jenis_produk").text("")
    }

    var harga_produk = $("#harga_produk").val()
    if (harga_produk == "") {
        $("#lihat_harga_produk").text("Harga Produk Masih Kosong")
    }else{
        $("#lihat_harga_produk").text("")
    }

    var stock_produk = $("#stock_produk").val()
    if (stock_produk == "") {
        $("#lihat_stock_produk").text("Stock Produk Masih Kosong")
    }else{
        $("#lihat_stock_produk").text("")
    }
    
    var stock_produk = $("#stock_produk").val()
    if (stock_produk == "") {
        $("#lihat_stock_produk").text("Stock Produk Masih Kosong")
    }else{
        $("#lihat_stock_produk").text("")
    }


    if (kode_produk != "" && nama_produk != "" && harga_produk != "" && stock_produk != "" ){
    $("#notif").html(`
    <div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong> Add Succesfully!</strong> Data berhasil ditambahkan.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    `)

    var tabel_produk = document.getElementById("tabel_produk")
    var baris = tabel_produk.insertRow(1)

    var kolom_no = baris.interCell(0)
    var kolom_kode_produk = baris.insertCell(1)
    var kolom_nama_produk = baris.insertCell(2)
    var kolom_jenis_produk = baris.insertCell(3)
    var kolom_harga = baris.insertCell(4)
    var kolom_stok = baris.insertCell(5)

    var no = 0

    kolom_kode_produk.innerHtml = kode_produk
    kolom_nama_produk.innerHtml = nama_produk
    kolom_jenis_produk.innerHtml = jenis_produk
    kolom_harga.innerHtml = harga_produk
    kolom_stok.innerHtml = stok 
    kolom_no = no+1


    }
})