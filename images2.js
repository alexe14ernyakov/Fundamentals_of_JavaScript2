function loadImage(url) {
    return new Promise(function(resolve, reject) {
        let image = new Image()
        image.src = url
        image.onload = () => resolve(image)
        image.onerror = () => reject(new Error(`Can't load image ${url}`))
    })
}


let url
let promises = []
for(let i = 0; i < 5; i++){
    url = prompt(`Введите URL изображения №${i+1}`)
    promises.push(loadImage(url))
}

const ic = document.getElementById("image-container")
let images
Promise.allSettled(promises)
.then(function(results){
    results.forEach( (result, index) => {
        if(result.status === 'fulfilled'){
            ic.append(result.value)
        }
        else{
            let paragraph = document.createElement("p")
            paragraph.textContent = result.reason
            ic.appendChild(paragraph)     
        }
    })
})
