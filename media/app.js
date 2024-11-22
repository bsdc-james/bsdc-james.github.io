const medias = [
  { src: "/media/1984.mp4", type: "vid" },
  { src: "/media/1984transition2.mp4", type: "vid" },
  { src: "/media/pptheme.mp3", type: "snd" },
  { src: "/media/daveygif.gif", type: "img" },
  { src: "/media/jonkler.gif", type: "img" },
  { src: "/media/App-Devs.png", type: "img" },
  { src: "/media/bobminecraft.png", type: "img" },
  { src: "/media/cryingman.png", type: "img" },
  { src: "/media/davetiergod.png", type: "img" },
  { src: "/media/davey.jpg", type: "img" },
  { src: "/media/depressobob.png", type: "img" },
  { src: "/media/freakydevs.png", type: "img" },
  { src: "/media/joe.png", type: "img" },
  { src: "/media/lovebanner.png", type: "img" },
  { src: "/media/man.jpg", type: "img" },
  { src: "/media/mikey.jpg", type: "img" },
  { src: "/media/moderator_stark.png", type: "img" },
  { src: "/media/pokemonimage.jpg", type: "img" },
  { src: "/media/prison.png", type: "img" },
  { src: "/media/realistic_bart.webp", type: "img" },
  { src: "/media/SSAgent.png", type: "img" },
  { src: "/media/SSSLogo.png", type: "img" },
  { src: "/media/swayfakepng.png", type: "img" },
  { src: "/media/sweetdreams.png", type: "img" },
  { src: "/media/TarksonLogo.png", type: "img" },
  { src: "/media/tomisalilkinky.png", type: "img" },
  { src: "/media/tomkinkybutagif.gif", type: "img" },
  { src: "/media/true_love.gif", type: "img" },
  { src: "/media/zamn.png", type: "img" },
];
console.log("arraylog: ", medias);

const container = document.getElementById("mediaContainer");
console.log("containerlog: ", container);

for (i = 0; i < medias.length; i++) {
  if (medias[i].type == "vid") {
    const card = document.createElement("div");
    card.style ="width:90%;margin-left:auto;margin-right:auto;";
    card.innerHTML = `<div class="card"><video src="https://bsdc-james.github.io/media/1984.mp4" controls playsinline>ur browser dont support html video<br /><br />peasant</video><div class="card-body"><p class="card-text">https://bsdc-james.github.io${medias[i].src}</p></div></div>`;
    container.appendChild(card);
    const breakdiv = document.createElement("div");
    breakdiv.className = "break";
    container.appendChild(breakdiv);


  } else if (medias[i].type == "img") {
    const card = document.createElement("div");
    card.style ="width:90%;margin-left:auto;margin-right:auto;";
    card.innerHTML = `<div class="card"><img src="${medias[i].src}" class="card-img-top" alt="..." /><div class="card-body"><p class="card-text">https://bsdc-james.github.io${medias[i].src}</p></div></div>`;
    container.appendChild(card);
    const breakdiv = document.createElement("div");
    breakdiv.className = "break";
    container.appendChild(breakdiv);
  } else if (medias[i].type == "snd") {
    const card = document.createElement("div");
    card.style ="width:90%;margin-left:auto;margin-right:auto;";
    card.innerHTML = `<div class="card"><audio src="${medias[i].src}" controls></audio><div class="card-body"><p class="card-text">https://bsdc-james.github.io${medias[i].src}</p></div></div>`;
    container.appendChild(card);
    const breakdiv = document.createElement("div");
    breakdiv.className = "break";
    container.appendChild(breakdiv);
}}