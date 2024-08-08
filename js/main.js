const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 120);
    
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
 // Hapus hanya jika menu tidak aktif
 if (!menu.classList.contains('bx-x')) {
    navlist.classList.remove('active');
}
};


document.getElementById('download-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const link = document.createElement('a');
    link.href = '../assets/Curiculum Vitae.pdf'; // Ganti dengan URL file yang ingin Anda unduh
    link.download = 'CV_Zeapli Pebriawan.pdf'; // Nama file yang akan diunduh
    link.click();
});

// circle skill
const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i = 0; i < dots; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;
    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent ; i++){
        pointsMarked[i].classList.add('marked');
    }
});



let isChatboxVisible = false;
const chatbox = document.querySelector(".WA_Chat_Widget .WA_ChatBox");
function hideChatbox() {
    isChatboxVisible = false;
    chatbox.style.display = "none";
}
function toggleChatbox() {
    isChatboxVisible = !isChatboxVisible;
    chatbox.style.display = isChatboxVisible ? "block" : "none";
};
 // Nomor telepon dinamis, bisa diubah sesuai kebutuhan
 const phoneNumber = '085798858438';
 const waLink = document.getElementById('wa-link');
 waLink.href = `https://wa.me/${phoneNumber}`;


 function toggleReadMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("moreText");
    var readMoreBtn = document.getElementById("readMoreBtn");
    var readLessBtn = document.getElementById("readLessBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        readMoreBtn.style.display = "inline-flex";
        readLessBtn.style.display = "none";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        readMoreBtn.style.display = "none";
        readLessBtn.style.display = "inline-flex";
        moreText.style.display = "inline";
    }
}

// Initialize the read more/less button functionality
document.getElementById("readMoreBtn").onclick = toggleReadMore;
document.getElementById("readLessBtn").onclick = toggleReadMore;