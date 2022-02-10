const items = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
]

let cambiaImmagine = 0

// Creare un div per mettere l'immagine.
const containerImg = document.querySelector (".slide")
console.log(containerImg)



// Ho appeso le immagini dentro al contenitore
for (let i = 0; i < items.length; i++){
  const crItem = document.createElement ('div')
  crItem.classList.add('cr_item')
  containerImg.append(crItem)

  crItem.innerHTML = `<img src="${items[i]}"></img>`

  }

  const crItemActive = [...document.getElementsByClassName('cr_item')]
  console.log(crItemActive)

  crItemActive[cambiaImmagine].classList.add('cr_active')



