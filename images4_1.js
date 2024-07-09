async function loadImage(url) {
    return new Promise(function(resolve, reject) {
        let image = new Image()
        image.src = url
        image.onload = () => resolve(image)
        image.onerror = () => reject(new Error(`Can't load image ${url}`))
    })
}

async function loadImages() {
    const ic = document.getElementById("image-container");
    
    for (let i = 0; i < 5; i++) {
        let url = prompt(`Введите URL изображения №${i+1}`)
        try {
            let image = await loadImage(url)
            ic.append(image)
        } catch (error) {
            let paragraph = document.createElement('p')
            paragraph.textContent = error.message
            ic.appendChild(paragraph)
        }
    }
}

loadImages()