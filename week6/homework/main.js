const itemCotainer = document.querySelector('.item-container')
const url = 'https://api.itbook.store/1.0/new'

const getData = () => {
  $.ajax({
    type: 'GET',
    url,
    async: false,
    data: {},
    success: res => {
      booksData = res.books
    },
  })
}

const createCardHandler = () => {
  const card = document.createElement('div')
  card.setAttribute('class', 'card')

  return card
}

const createImageHandler = (image, subtitle, url) => {
  const imgLink = document.createElement('a')
  imgLink.setAttribute('href', url)
  const img = document.createElement('img')
  img.setAttribute('class', 'image')
  img.setAttribute('src', image)
  img.setAttribute('alt', subtitle)
  imgLink.appendChild(img)

  return imgLink
}

const createSubContainerHandler = () => {
  const subContainer = document.createElement('div')
  subContainer.setAttribute('class', 'sub-container')

  return subContainer
}

const createStrongHandler = (title, url) => {
  const strongLink = document.createElement('a')
  strongLink.setAttribute('href', url)
  const strong = document.createElement('strong')
  strong.setAttribute('class', 'title')
  strong.innerText = title
  strongLink.appendChild(strong)

  return strongLink
}

const createSpanHandler = (price, url) => {
  const spanLink = document.createElement('a')
  spanLink.setAttribute('href', url)
  const span = document.createElement('span')
  span.setAttribute('class', 'price')
  span.innerText = price
  spanLink.appendChild(span)

  return spanLink
}

const appendHandler = ({ card, img, subContainer, strong, span }) => {
  card.appendChild(img)
  subContainer.appendChild(strong)
  subContainer.appendChild(span)
  card.appendChild(subContainer)
  itemCotainer.appendChild(card)
}

const createItemHandler = ({ title, image, price, subtitle, url }) => {
  const elem = {
    card: createCardHandler(),
    img: createImageHandler(image, subtitle, url),
    subContainer: createSubContainerHandler(),
    strong: createStrongHandler(title, url),
    span: createSpanHandler(price, url),
  }
  appendHandler(elem)
}

const init = () => {
  getData()
  booksData.map(item => {
    createItemHandler(item)
  })
}

init()
