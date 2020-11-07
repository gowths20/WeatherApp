import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { WeatherService } from "../app/weather.service";
@Component({
  selector: "my-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent {
  cardData = [
    {
      selected: false,
      data: "",
      main: {},
      inputVal: "",
      error: false
    },
    {
      selected: false,
      data: "",
      inputVal: "",
      error: false
    },
    {
      selected: false,
      data: "",
      inputVal: "",
      error: false
    },
    {
      selected: false,
      data: "",
      inputVal: "",
      error: false
    },
    {
      selected: false,
      data: "",
      inputVal: "",
      error: false
    },
    {
      selected: false,
      data: "",
      inputVal: "",
      error: false
    },
    {
      selected: false,
      data: "",
      inputVal: ""
    },
    {
      selected: false,
      data: "",
      inputVal: ""
    },
    {
      selected: false,
      data: "",
      inputVal: ""
    }
  ];

  @Input()
  results: Observable<any>;
  loading = false;
  constructor(private WeatherService: WeatherService) {}

  ngOnInit() {
    if (this.readSessionStorage("weatherData")) {
      this.cardData = this.readSessionStorage("weatherData");
    } else {
      this.writeSessionStorage(this.cardData, "weatherData");
    }
  }
  readSessionStorage(name) {
    return JSON.parse(sessionStorage.getItem(name));
  }
  writeSessionStorage(data, name) {
    this.loading = false;
    sessionStorage.setItem(name, JSON.stringify(data));
  }
  enableInput(data) {
    data.selected = !data.selected;
    this.writeSessionStorage(this.cardData, "weatherData");
  }
  updateData(data) {
    this.loading = true;
    this.WeatherService.getWeather(data.inputVal).subscribe(
      res => {
        this.results = res;
        console.log(this.results);
        data.data = this.results;
        console.log(this.cardData);
        this.writeSessionStorage(this.cardData, "weatherData");
      },
      err => {
        data.inputVal = "";
        data.selected = false;
        data.error = true;
        this.writeSessionStorage(this.cardData, "weatherData");
      }
    );
  }

  editData(card) {
    card.data = "";
    card.inputVal = "";
    card.selected = true;
    this.writeSessionStorage(this.cardData, "weatherData");
  }
}
