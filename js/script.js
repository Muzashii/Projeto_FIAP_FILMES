function card(filme){
    let card = document.createElement("div")
card.classList.add("card")

let poster = document.createElement("img")
poster.src = filme.poster
poster.alt = "Poster do filme do batman"

let titulo = document.createElement("span")
titulo.classList.add("titulo")
titulo.innerText = filme.titulo


let nota = document.createElement("div")
nota.classList.add("nota")

let estrela= document.createElement("span")
estrela.classList.add("estrela")
estrela.classList.add("material-icons")
estrela.innerText = "star"

let numero = document.createElement("span")
numero.innerText = filme.nota



nota.appendChild(estrela)
nota.appendChild(numero)

let detalhes = document.createElement("a")
detalhes.classList.add("button")
detalhes.innerText = "detalhes"
detalhes.href = "#"

card.appendChild(poster)
card.appendChild(titulo)
card.appendChild(nota)
card.appendChild(detalhes)

return card
}

const filme2 = {
    poster : "./images/Batman.jpg",
    titulo: "batman",
    nota: "8.5"
}
const filme3 = {
    poster : "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/u8LAG1JI57U9p0s8TyEEeoykR5d.jpg",
    titulo: "O Poderoso Chefão",
    nota: "8.7"
}
const filme4 = {
    poster : "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/tptjnB2LDbuUWya9Cx5sQtv5hqb.jpg",
    titulo: "Pulp Fiction: Tempo de Violência",
    nota: "8.5"
}
const filme5 = {
    poster : "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ArWn6gCi61b3b3hclD2L0LOk66k.jpg",
    titulo: "Liga da Justiça de Zack Snyder",
    nota: "8.3"
}
const filme6 = {
    poster : "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/d8CNgb0AtZz7CSORffdwODK66iK.jpg",
    titulo: "Nasce uma Estrela",
    nota: "7.5"
}



let filmes = document.querySelector("#filmes")
filmes.appendChild(card(filme2))
filmes.appendChild(card(filme3))
filmes.appendChild(card(filme4))
filmes.appendChild(card(filme5))
filmes.appendChild(card(filme6))


let serie = document.querySelector("#serie")

const serie2 = {
    poster : "https://www.themoviedb.org/t/p/original/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg",
    titulo: "The Boys",
    nota: "8.5"
}
const serie3 = {
    poster : "https://www.themoviedb.org/t/p/w220_and_h330_face/vNbGwybrD2vEc3asMTF36W0bVds.jpg",
    titulo: "Demolidor",
    nota: "8.1"
}
const serie4 = {
    poster : "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/phuYuzqWW9ru8EA3HVjE9W2Rr3M.jpg",
    titulo: "Boku no Hero Academia",
    nota: "8.7"
}
const serie5 = {
    poster : "https://www.themoviedb.org/t/p/w220_and_h330_face/sAbUOlcRE3CD1eAWat5I6uS3j9F.jpg",
    titulo: "Bates Motel",
    nota: "8.1"
}
const serie6 = {
    poster : "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/d09X5AzxBq4GkHL6j8pmkDPySfA.jpg",
    titulo: "Ruptura",
    nota: "8.3"
}

serie.appendChild(card(serie2))
serie.appendChild(card(serie3))
serie.appendChild(card(serie4))
serie.appendChild(card(serie5))
serie.appendChild(card(serie6))