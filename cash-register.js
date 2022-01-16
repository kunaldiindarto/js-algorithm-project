function checkCashRegister(price, cash, cid) {
  // todo Cari total kembalian (dikali 100)
  let totalKembalian = cash * 100 - price * 100;

  // hitung jumlah uang di mesin kasir (dikali 100)
  let totalUangDiMesinKasir = cid
    .map((el) => el[1])
    .reduce((acc, curr) => acc + curr * 100, 0);

  // panduan satuan dan pecahan (sudah dikalikan seratus)
  const rumusSlot = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    DOLLAR: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    "ONE HUNDRED": 10000,
  };

  // !pengecekan kondisi
  //*kondisi satu, ketika kembalian tidak cukup
  //*kodisi dua, ketika kembalian sama dengan yang ada di kasir
  // *kondisi ketiga, menghitung kembalian dan dipecahkan dan urutkan dari yang terbesar sampai yang terkecil

  if (totalKembalian > totalUangDiMesinKasir) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalKembalian === totalUangDiMesinKasir) {
    return { status: "CLOSED", change: cid };
  } else {
    //   urutkan uang dikasir dari paling yang besar
    cid = cid.reverse();

    // siapkan uang kembaliannya (dalam bentuk array)
    let jumlahUangYangDikembalikan = [];

    // telusuri dari setiap slot di mesin kasir
    cid.forEach((slot) => {
      // set kondisi awal dari slot baru
      let kondisiSlotBaru = [slot[0], 0];

      // satuan(nama pecahannnya)
      let satuan = slot[0];

      //   jumlah uang(dalam slot)
      let pecahan = slot[1] * 100;

      //   cek uang berdasarkan satuan, kurangi jika kembalian masih memenuhi
      while (totalKembalian >= rumusSlot[satuan] && pecahan > 0) {
        totalKembalian -= rumusSlot[satuan];
        pecahan -= rumusSlot[satuan];
        kondisiSlotBaru[1] += rumusSlot[satuan] / 100;
      }

      if (kondisiSlotBaru[1] > 0) {
        jumlahUangYangDikembalikan.push(kondisiSlotBaru);
      }
    });

    // cek jika uang ada tapi pecahannnya tidak ada
    if (totalKembalian > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change: jumlahUangYangDikembalikan };
  }
}

// total harga 19.5
// uang yang diberikan 20
// kembalian 0.5
// hasilnya{'quarter, 0.5}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
