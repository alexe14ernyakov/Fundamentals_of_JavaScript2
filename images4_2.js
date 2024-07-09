async function loadImage(url) {
    return new Promise(function(resolve, reject) {
        let image = new Image()
        image.src = url
        image.onload = () => resolve(image)
        image.onerror = () => reject(new Error(`Can't load image ${url}`))
    });
}

async function loadImages() {
    const ic = document.getElementById("image-container")
    let promises = []
    
    for (let i = 0; i < 5; i++) {
        let url = prompt(`Введите URL изображения №${i+1}`)
        promises.push(loadImage(url))
    }

    try {
        let images = await Promise.allSettled(promises)
        images.forEach(result => {
            if (result.status === 'fulfilled') {
                ic.append(result.value);
            } else {
                let paragraph = document.createElement('p')
                paragraph.textContent = result.reason.message
                ic.appendChild(paragraph)
            }
        })
    } catch (error) {
        console.error("Error:", error)
    }
}

loadImages()