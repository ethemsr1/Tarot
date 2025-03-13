document.addEventListener("DOMContentLoaded", function () {
    const splashScreen = document.getElementById("splash-screen");
    const mainContent = document.getElementById("main-content");
    const logo = document.getElementById("logo");

    // localStorage test et, yoksa yenisini oluştur
    if (!localStorage.getItem("animationPlayed")) {
        localStorage.setItem("animationPlayed", "false");
    }

    // Daha önce animasyon oynatıldı mı?
    if (localStorage.getItem("animationPlayed") === "true") {
        splashScreen.style.display = "none";
        mainContent.style.display = "block";
        document.body.classList.add("loaded");
        document.body.style.overflowY = "auto";
        document.documentElement.style.overflowY = "auto";
        return; // Animasyonu tekrar oynatma
    }

    // Mobilde animasyonu oynat
    if (window.innerWidth <= 768) {
        setTimeout(() => {
            logo.classList.add("fly-away");
        }, 1000);

        setTimeout(() => {
            splashScreen.style.display = "none";
            mainContent.style.display = "block";
            document.body.classList.add("loaded");

            // Scroll kilidini kaldır
            document.body.style.overflowY = "auto";
            document.documentElement.style.overflowY = "auto";

            // Animasyonun oynatıldığını kaydet
            localStorage.setItem("animationPlayed", "true");
        }, 1907);
    } else {
        // Bilgisayarda direkt aç
        splashScreen.style.display = "none";
        mainContent.style.display = "block";
        document.body.classList.add("loaded");
        document.body.style.overflowY = "auto";
        document.documentElement.style.overflowY = "auto";
    }
});
// para animasyonu borsa sayfsı için
document.querySelector(".menu-icon").addEventListener("click", function() {
    for (let i = 0; i < 15; i++) {  // 15 adet para düşsün
        let para = document.createElement("div");
        para.classList.add("para");

        // Rastgele pozisyon oluştur
        let leftPos = Math.random() * window.innerWidth;  
        let delay = Math.random() * 2;  // 0 ile 2 saniye arasında gecikme
        let duration = 2 + Math.random() * 2; // 2-4 saniye süren animasyon

        para.style.left = `${leftPos}px`;
        para.style.animationDelay = `${delay}s`;
        para.style.animationDuration = `${duration}s`;

        document.body.appendChild(para);

        // Animasyon bittikten sonra parayı kaldır
        setTimeout(() => {
            para.remove();
        }, duration * 1000);
    }
});
//farklı emoji
document.addEventListener("DOMContentLoaded", function () {
    let menuIcon = document.querySelector(".menu-icon");

    if (menuIcon) {
        menuIcon.addEventListener("click", function() {
            for (let i = 0; i < 15; i++) {
                let para = document.createElement("div");
                para.classList.add("para");
                para.innerHTML = "💰"; // Emoji veya görsel kullanılabilir

                // Rastgele yatay pozisyon
                let leftPos = Math.random() * window.innerWidth;  
                let delay = Math.random() * 2;  // 0 ile 2 saniye arasında gecikme
                let duration = 2 + Math.random() * 2; // 2-4 saniye süren animasyon

                para.style.left = `${leftPos}px`;
                para.style.position = "fixed";
                para.style.top = "-50px";
                para.style.fontSize = "24px";
                para.style.animation = `para-dusme ${duration}s linear`;
                para.style.animationDelay = `${delay}s`;
                para.style.zIndex = "9999";

                document.body.appendChild(para);

                // Animasyon bittikten sonra DOM'dan kaldır
                setTimeout(() => {
                    para.remove();
                }, duration * 1000);
            }
        });
    } else {
        console.error("HATA: .menu-icon elementi bulunamadı!");
    }
});

//borsa grafiği
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('stockChart').getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Pzt", "Sal", "Çar", "Per", "Cum"],
            datasets: [{
                label: 'BIST 100',
                data: [7500, 7550, 7480, 7600, 7700],
                borderColor: '#007bff',
                borderWidth: 2,
                fill: false,
                pointRadius: 2,
                pointBackgroundColor: '#007bff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: { display: false },
                y: { display: false }
            }
        }
    });
});





