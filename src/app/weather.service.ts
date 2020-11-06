import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  // URL which returns list of JSON items (API end-point URL)
  private readonly URL = "https://openweathermap.org/data/2.5/weather";
  constructor(private http: HttpClient) {}
  // create a method named: resolveItems()
  // this method returns list-of-items in form of Observable
  // every HTTTP call returns Observable object
  getWeather(): Observable<any> {
    console.log("Request is sent!");
    // Using the POST method
    const headers = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded",
        
      })
    };

    return this.http.post(
      this.URL,
      {
        q: "chennai",
        appid: "f78451a4ed7c152ae23b2ec1df401dee"
      },
      headers
    );
  }
}
