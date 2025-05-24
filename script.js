const icon = document.getElementById("logo");
const imagem = document.querySelector("#image-cover img");

const firstImage = "images/cover.png";
const secondImage = "images/cover-2.png";

function changePhoto() {
  if (imagem.src.includes("cover.png")) {
    imagem.src = secondImage;
  } else {
    imagem.src = firstImage;
  }
}

icon.addEventListener("click", changePhoto);

