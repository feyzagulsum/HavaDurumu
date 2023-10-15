API_KEY = '5fceba9a4518c3fa99e0b1c4c3846b02';

const sehirList = document.querySelectorAll(".sehirList li")
var changedSehir = "Istanbul"

const weatherIcons = {
    "01d": "bulut-günes.png",
    "01n": "bulut-günes.png",
    "02d": "az-bulutlu.png",
    "02n": "az-bulutlu.png",
    "03d": "az-bulutlu.png",
    "03n": "az-bulutlu.png",
    "04d": "az-bulutlu.png",
    "04n": "az-bulutlu.png",
    "09d": "yagisli.png",
    "09n": "yagisli.png",
    "10d": "yagisli.png",
    "10n": "yagisli.png",
    "13d": "kar.png",
    "13n": "kar.png",
    "50d": "sisli",
    "50n": "sisli",
};


havaDrm()


sehirList.forEach((item, index) => {
    item.addEventListener("click", () => {
        const itemSpan = item.querySelector("span");
        changedSehir = itemSpan.innerHTML;
        havaDrm();
    });
});


var searchButton = document.getElementById('searchButton');

searchButton.addEventListener("click", () => {
    var data = document.getElementById('DataGet').value;
    changedSehir = data;
    havaDrm();
});


async function havaDrm() {
    const city = `${changedSehir},tr`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

    console.log(url)

    try {
        const response = await fetch(url);
        const weather_data = await response.json();


        const weatherIconCode = weather_data.weather[0].icon;
        const weatherIconFileName = weatherIcons[weatherIconCode];

        const iconElement = document.querySelector(".havaImg img");
        iconElement.src = `asset/img/icon/${weatherIconFileName}`;



        const celsius = (weather_data.main.temp - 273.15).toFixed(1);
        const celsius_max = (weather_data.main.temp_max - 273.15).toFixed(1);
        const hissedilen = (weather_data.main.feels_like - 273.15).toFixed(1);


        let city_name = weather_data.name;

        if (city_name.includes("Province")) {
            city_name = city_name.replace("Province", "").trim();
        }

        const temperature = celsius;
        const havaDurumu = weather_data.weather[0].description;
        const hissedilenHava = hissedilen;
        const ruzgarHizi = weather_data.wind.speed;
        const nemOrani = weather_data.main.humidity;
        const gorusMesafesi = weather_data.visibility;
        const yogusmaOrani = weather_data.clouds.all;
        const enYuksekSicaklik = celsius_max;

        const YenHava = HavaDurumuTurkish(havaDurumu);

        // Verileri dışarıda kullanmak için başka bir işlevi çağırabilirsiniz
        useWeatherData(city_name, temperature, YenHava, hissedilenHava, ruzgarHizi, nemOrani, gorusMesafesi, yogusmaOrani, enYuksekSicaklik);

        // Async işlem tamamlandıktan sonra burada verileri kullanabilirsiniz
        // console.log("Veriler alındı:", city_name, temperature, YenHava, hissedilenHava, ruzgarHizi, nemOrani, gorusMesafesi, yogusmaOrani, enYuksekSicaklik);
    } catch (error) {
        console.error("Hava durumu bilgisi alınamadı.", error);
    }
}



function useWeatherData(sehir, sicaklik, havaDurum, hissedilen, ruzgarHizi, Nem, Gorus, Yogusma, YuksekSicaklik) {
    const sehirAdi = document.getElementById("sehirAdi")
    console.log(sehirAdi)
    sehirAdi.innerHTML = sehir

    const tarih = new Date();
    const tarihSaat = tarih.getHours()
    const tarihDakika = tarih.getMinutes()

    const sehirSaat = document.getElementById("sehirSaat")
    sehirSaat.innerHTML = tarihSaat + ":" + tarihDakika

    const sehirSicaklik = document.getElementById("sehirSicaklik")
    sehirSicaklik.innerHTML = sicaklik

    const havaDurumu = document.getElementById("havaDurumu")
    havaDurumu.innerHTML = havaDurum

    const hissedilenHava = document.getElementById("hissedilenHava")
    hissedilenHava.innerHTML = hissedilen

    const ruzgarHiz = document.getElementById("ruzgarHizi")
    ruzgarHiz.innerHTML = ruzgarHizi + " km/s"

    const nemOrani = document.getElementById("nemOrani")
    nemOrani.innerHTML = Nem + " %"

    const gorusMesafesi = document.getElementById("gorusMesafesi")
    gorusMesafesi.innerHTML = Gorus + " km"

    const yogusmaOrani = document.getElementById("yogusmaOrani")
    yogusmaOrani.innerHTML = Yogusma + " °C"

    const yuksekSicak = document.getElementById("YuksekSicaklik")
    yuksekSicak.innerHTML = YuksekSicaklik + " °C"


}

function HavaDurumuTurkish(havaDurumu) {
    var hava = "";

    if (havaDurumu === "few clouds") {
        hava = "Az Bulutlu";
    } else if (havaDurumu === "clear sky") {
        hava = "Açık Hava";
    } else if (havaDurumu === "scattered clouds") {
        hava = "Parçalı Bulutlu";
    } else if (havaDurumu === "broken clouds") {
        hava = "Yer Yer Bulutlu";
    } else if (havaDurumu === "overcast clouds") {
        hava = "Çok Bulutlu";
    } else if (havaDurumu === "light rain") {
        hava = "Hafif Yağmurlu";
    } else if (havaDurumu === "moderate rain") {
        hava = "Orta Şiddetli Yağmurlu";
    } else if (havaDurumu === "heavy intensity rain") {
        hava = "Yoğun Yağmurlu";
    }

    return hava
}