import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { IndexedDBService } from "../app/indexdb.service";
import { WeatherService } from "../app/weather.service";
@Component({
  selector: "my-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent {
  cardData = [
    {
      selected: true,
      data: {
        name: "Madurai",
        id: 701,
        weather: [{ main: "Mist" }],
        main: {
          description: "mist",
          temp: 298.15,
          feels_like: 302.9,
          humidity: 94
        }
      },
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

  constructor(private WeatherService: WeatherService) {}

  ngOnInit() {
    // this.WeatherService.getWeather().subscribe(data => {
    //   this.results = data;
    //   console.log(this.results);
    // });
  }

  enableInput(data) {
    data.selected = !data.selected;
  }
  updateData(data) {
    this.WeatherService.getWeather(data.inputVal).subscribe(
      res => {
        this.results = res;
        console.log(this.results);
        data.data = this.results;
      },
      err => {
        data.inputVal = "";
        data.selected = false;
        data.error = true;
      }
    );
  }

  editData(card) {
    card.data = "";
    card.inputVal = "";
    card.selected = true;
  }
}
