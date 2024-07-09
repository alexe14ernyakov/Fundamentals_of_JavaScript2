function loadImage(url) {
    return new Promise(function(resolve, reject) {
        let image = new Image()
        image.src = url
        image.onload = () => resolve(image)
        image.onerror = () => reject(new Error(`Can't load image ${url}`))
    })
}

let url
const ic = document.getElementById("image-container")
for (let i = 0; i < 5; i++) {
    url = prompt(`Введите URL изображения №${i+1}`)
    loadImage(url)
    .then(function(image) {
        ic.append(image)
    })
    .catch(function(error) {
        let paragraph = document.createElement('p')
        paragraph.textContent = error.message
        ic.append(paragraph)
    })
}
