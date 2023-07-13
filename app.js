const zaman = () => {
  const clock = document.querySelector("#saat");
  let bugun = new Date();
  let sa = bugun.getHours();
  let dk = bugun.getMinutes();
  let sn = bugun.getSeconds();
  let pm = sa < 12 ? `<span>AM</span>` : `<span>PM</span>`;
  //onceki yukaridaki kodu yazariz sonra ssat 12den buyukse asagidaki kod devreye girer

  sa = sa > 12 ? sa - 12 : sa;

  //sa, dk, sn 10dan kucuk olursa

  sa = ondanKucuk(sa);
  dk = ondanKucuk(dk);
  sn = ondanKucuk(sn);

  clock.innerHTML = `${sa}:${dk}:${sn} ${pm}`;

  setTimeout(function () {
    zaman(), 500;
  }); //zaman ayarinda settimeoutta 500 milisn kullanilabilir
};

const ondanKucuk = (i) => {
  i < 10 ? (i = "0" + i) : null;
  return i;
};

zaman();
