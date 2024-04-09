//axios import buraya gelecek

import axios from "axios";

var benimIP = "";
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
ipAdresimiAl().then(() => {
  const URL = "https://apis.ergineer.com/ipgeoapi/" + benimIP;

  axios
    .get(URL)
    .then((response) => {
      //console.log(response.data);
      const component = IP(response.data);
      document.querySelector(".cards").appendChild(component);
    })
    .catch((error) => {
      console.err(error);
    });
});

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

const IP = (data) => {
  //class'i card olan div'i olusturduk

  const card = document.createElement("div");
  card.classList.add("card");

  //img tag'i olusturduk ve source degeri set ettik

  const img = document.createElement("img");
  img.setAttribute("src", data.ülkebayrağı);

  //class'i card-info olan div'i olusturduk

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  //class'i ip olan h3'i olusturduk ve ip degerini set ettik

  const ip = document.createElement("h3");
  ip.classList.add("ip");
  ip.textContent = data.sorgu;

  //class'i ulke olan p'i olusturduk ve ulke degerini ve ulke kodunu set ettik

  const ulke = document.createElement("p");
  ulke.classList.add("ulke");
  ulke.textContent = `${data.ülke} (${data.ülkeKodu})`;

  //p tag'lerini olusturduk ve enlem, boylam, sehir, saatdilimi, parabirimi, isp bilgilerini set ettik

  const enlem = document.createElement("p");
  enlem.textContent = `Enlem: ${data.enlem} Boylam: ${data.boylam}`;

  const sehir = document.createElement("p");
  sehir.textContent = `Şehir: ${data.şehir}`;

  const saatDilimi = document.createElement("p");
  saatDilimi.textContent = `Saat dilimi: ${data.saatdilimi}`;

  const paraBirimi = document.createElement("p");
  paraBirimi.textContent = `Para birimi: ${data.parabirimi}`;

  const isp = document.createElement("p");
  isp.textContent = `ISP: ${data.isp}`;

  //card divinin icine img, cardInfo divini ekledik

  card.append(img, cardInfo);

  //cardInfo divinin icine h3 ve p tag'lerini ekledik
  cardInfo.append(ip, ulke, enlem, sehir, saatDilimi, paraBirimi, isp);

  return card;
};

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

export async function getData() {}
