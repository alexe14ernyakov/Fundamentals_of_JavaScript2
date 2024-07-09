//const forbiddenCountries = ['Russia', 'Belarus', 'Afganistan', 'China', 'Venezuela', 'Iran']
async function checkCountryIP(ip) {
    let data = await fetch(`https://json.geoiplookup.io/${ip}`)
    let info = await data.json()
    return info
}

async function checkIPs() {
    const ic = document.getElementById("results");
    
    for (let i = 0; i < 5; i++) {
        let ip = prompt(`Введите IP-адрес №${i+1}:`)
        let paragraph = document.createElement('p')
        
        try {
            let info = await checkCountryIP(ip)
            if (info.country_name === 'Russia' || info.country_name === 'Belarus' || info.country_name === 'Afganistan' || info.country_name === 'China' || info.country_name === 'Venezuela' || info.country_name === 'Iran'){
                paragraph.textContent = `${ip} - Our services are not available in your country`
            }
            else{
                paragraph.textContent = `${ip} - Welcome to our website!`     
            }
 
            ic.append(paragraph)
        } catch (error) {
            alert(error.message)
        }
    }
}

checkIPs()