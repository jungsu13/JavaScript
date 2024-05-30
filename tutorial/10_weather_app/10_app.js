// api_key = 26a8f813a56d73684d04cdff5a1f7720
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// http://openweathermap.org/img/wn/${a.weather[0].icon}@2x.png


class WeatherApp {
    constructor(){
        this.APT_KEY = `26a8f813a56d73684d04cdff5a1f7720`
        this.city = document.querySelector('.city')
        this.des = document.querySelector('.des')
        this.degree = document.querySelector('.degree span')
        this.icon = document.querySelector('.icon')
        this.init()
    }

    paintWeather(data){
        console.log(data);
        this.city.innerText = data.name
        this.des.innerText = data.weather[0].description
        this.degree.innerText = data.main.temp
        this.icon.src = `http://openweathermap.org/img/wn/${a.weather[0].icon}@2x.png`
    }

    async fetchData(baseURL){
        const res = await fetch(baseURL)
        const data = await res.json()
        this.paintWeather
    }

    init(){
        console.log('안녕');
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position=>{
            const lat = position.coords.latitude
            const lon = position.coords.longitude

            const baseURL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
            
            this.fetchData(baseURL)
            })
        }
    }
}

const weather = new WeatherApp()