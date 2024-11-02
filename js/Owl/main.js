/*acao para os botoes iniciais*/

function ouvir(){
   
   window.location.href="https://tim.blog/podcast/";
  
}

function info(){
   
   window.location.href="https://tim.blog/about/";
  
}

window.onscroll = function () {
   const btn = document.getElementById("scrollToTopBtn");
   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
       btn.style.display = "block";
   } else {
       btn.style.display = "none";
   }
};

document.getElementById("scrollToTopBtn").onclick = function () {
   window.scrollTo({ top: 0, behavior: 'smooth' });
};

function playPodcast() {
   const player = document.getElementById("spotifyPlayer");
   const iframe = document.getElementById("spotifyIframe");

   // Exibe o player
   player.style.display = "block";

   // Toca o podcast
   const audio = iframe.contentWindow.document.querySelector('audio');
   if (audio) {
       audio.play();
   }
}
