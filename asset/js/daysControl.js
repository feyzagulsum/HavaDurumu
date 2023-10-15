// Tarih değişkeni oluşturduk.//* günleri koyduk.
const tarih = new Date()
const gunler = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi","Pazar"] 

// HTML de ki //* günleri aldık.
const days = document.querySelector(".days")
const day = document.querySelectorAll("li")

day.forEach((item, index) => {

    //* Sınıf Kaldırdık.
    item.classList.remove("active")
    

    if(item.innerHTML == gunler[tarih.getDay()-1])
    {

        //*sadece bugunun tarihi neyse o güne aktivitesyoruz.
        item.classList.add("active","position-relative")
    }

    item.addEventListener("click", () => {

        // Tıklanan gün diğer günlerde active sınıfı varsa kaldır
        day.forEach((item, index) => {
            item.classList.remove("active", "position-relative")
        })

        // Tıklanan günü aktif et.
        item.classList.add("active", "position-relative")

    })
    
}) 
