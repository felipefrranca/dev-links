function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/profile-img.jpg")
    img.setAttribute("alt", "Foto de Felipe sendo bonito")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/profile-img.jpg")
    img.setAttribute("alt", "Foto de Felipe sendo bonito")
  }

  // toggle abaixo ja faz o código acima

  // pegar a tag img

  // substituir a imagem
}
