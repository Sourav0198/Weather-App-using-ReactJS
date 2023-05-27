import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import './App.css';
import Spinner from './Spinner';
import Navbar from "./navbar";

function App() {
  


  const apiKey = "d53f8560efd3f6d3b35ff8509f3b057d"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false);


  const getWetherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      setIsLoading(true);
      console.log("setloading(true)")
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("errffcs", err)
      setData(
        {
          name:"Not found"
        }
      )

    })
    .finally(() => {
        setIsLoading(false);
        console.log("setloading=false")
      })
     
  }

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWetherDetails(inputCity)
  }
  const sanitise=(x)=> {
    if (isNaN(x)) {
      return "No Location Found";
    }
    return (x- 273.15).toFixed(2)+" °C";
  }
 // {((data?.main?.temp) - 273.15).toFixed(2)}°C


  return (
   
    <div className="col-md-12">
       {/* <Navbar/> */}
      <div className="wetherBg">
        <h1 className="heading">Weather App</h1>

        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control"
            value={inputCity}
            onChange={handleChangeInput} />
          <button className="btn btn-primary" type="button"
            onClick={handleSearch}
          >Search</button>
        </div>
      </div>

      {isLoading ? (
        <div className="col-md-12 text-center mt-5">
          <Spinner />
        </div>
      ) : Object.keys(data).length > 0 ? (
        <div className="col-md-12 text-center mt-5">
          <div className="shadow rounded wetherResultBox">
            <img
              className="weathorIcon"
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
            />
            <h5 className="weathorCity">{data?.name}</h5>
            <h6 className="weathorTemp">{sanitise(data?.main?.temp)}</h6>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
