import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { WeatherService } from "./weather.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  Arr = Array; //Array type captured in a variable
  length: number = 9;

  @Input()
  results: Observable<any>;

  constructor(private WeatherService: WeatherService) {}

  ngOnInit() {
    // this.WeatherService.getWeather().subscribe(data => {
    //   this.results = data;
    //   console.log(this.results);
    // });
  }
}
