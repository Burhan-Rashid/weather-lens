const API_KEY = "15c61ae507c67e1ac0bdb16b295a4b3a";

export const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_KEY}`;
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            const data = await response.json();
            return data;
        } else {
            return null;
        }
    } catch (err) {
        console.log(err);
    }
}


