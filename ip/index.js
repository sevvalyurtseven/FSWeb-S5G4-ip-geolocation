//axios import buraya gelecek

import axios from "axios";

var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	NOT: API'den gelen bayrak url'i çalışmazsa alternatif olarak: https://flagsapi.com/
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek

ipAdresimiAl().then(() => {
  const apiUrl = "https://apis.ergineer.com/ipgeoapi/" + benimIP;

  axios
    .get(apiUrl)
    .then((response) => {
      cardMaker(response.data);
	  console.log(response.data);
    })
    .catch((error) => {
      console.error("Hata oluştu: " + error);
    });
});

//ADIM 3

function cardMaker(obje) {
	console.log(obje);
  const div = document.createElement("div"); //div nesnesi
  div.className = "card"; //class name atadik


  //ADIM 4

  const BigBox = document.querySelector(".cards"); //büyük box'in icine kucuk boxi koyduk
  BigBox.append(div);

  //ADIM 3 DEVAM

  const img = document.createElement("img"); //img nesnesi
  img.setAttribute(
    "src",
    "https://cdn.pixabay.com/photo/2012/04/10/23/02/turkey-26820_1280.png"
  );
  div.append(img);

  const cardInfo = document.createElement("div"); //div nesnesi
  cardInfo.className = "card-info";
  div.append(cardInfo);

  const h3 = document.createElement("h3");
  h3.className = "ip";
  h3.textContent = obje.sorgu;
  cardInfo.append(h3);

  const countryP = document.createElement("p");
  countryP.className = "ulke";
  countryP.textContent = `${obje.ülke} (${obje.ülkeKodu})`;
  cardInfo.append(countryP);

  const latP = document.createElement("p");
  latP.textContent = `Enlem: ${obje.enlem} Boylam: ${obje.boylam}`;
  cardInfo.append(latP);

  const sehirP = document.createElement("p");
  sehirP.textContent = `Şehir: ${obje.şehir}`;
  cardInfo.append(sehirP);

  const saatP = document.createElement("p");
  saatP.textContent = `Saat dilimi: ${obje.saatdilimi}`;
  cardInfo.append(saatP);

  const paraP = document.createElement("p");
  paraP.textContent = `Para birimi: ${obje.parabirimi}`;
  cardInfo.append(paraP);

  const isp = document.createElement("p");
  isp.textContent = `ISP: ${obje.isp}`;
  cardInfo.append(isp);





  return div;
}
