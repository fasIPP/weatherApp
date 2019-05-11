import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public currentWeather: Weather;
  

  constructor( private http: HttpClient) {
    
  }


  getWeather(lat :number, lon :number) : Observable<Weather>  {
    return this.http.get<Weather>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=YOUR_KEY`);
  }

  getLocation(callback): void {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          
          callback(position.coords.latitude, position.coords.longitude );
        },
        (failure) => {
          if (failure.message.indexOf("Only secure origins are allowed") == 0) {
            alert('Only secure origins are allowed by your browser.');
          }
        }
      );
    }
    else {
      console.log("Your browser doesn't support geolocation");
    }
  }
}


export interface Weather {
  main: weatherMain;
}

interface weatherMain {
  humidity: number;
  temp: number;
}