

const apiKey   = 'e66ca69c205aa60bee787369e38c5075'
const endPoint = 'api.openweathermap.org/data/2.5/weather'
const unit     = 'metric'


const btnSearch     = document.querySelector('.btn-search')
const inputSearch   = document.querySelector('.input-search')
const content       = document.querySelector('.content')

btnSearch.addEventListener('click', async () => {
    try {
        let query = inputSearch.value
        const data = await getData(query)
        updateUI(data)
    }catch (err) {
        console.log(err)
    }
})

inputSearch.addEventListener('keypress', async x => {
    try {
        if (x.key === 'Enter') {
            let query = inputSearch.value
            const data = await getData(query)
            updateUI(data)
        }
    }catch (err) {
        console.log(err)
    }
})

const getData = city => {
    return fetch(`http://${endPoint}?appid=${apiKey}&q=${city}&units=${unit}&lang=id`)
            .then(res => res.json())
            .then(res => res)
}

const updateUI = res => {
    let temp = Math.floor(res.main.temp)
    let kembali = `<div class="animate__animated animate__zoomIn">
                    <div class="celcius">
                        <h1>${temp}°C</h1>
                    </div>
                    <div class="keadaan">
                        ${res.weather[0].description}
                    </div>
                    <h4 class="mt-4">${res.name}, ${res.sys.country}<s/h4>
                    </div>`

    content.innerHTML = kembali;
}