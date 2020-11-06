import { Component } from "@angular/core";

@Component({
  selector: "my-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent {
  cardData = [
    {
      imageUrl: "https://miro.medium.com/max/1250/0*Q2EFk7g36R0h8dAZ",
      alt: "img",
      selected: false,
      data: {
        name: "Madurai",
        id: 701,
        main: "Mist",
        description: "mist",
        temp: 298.15,
        feels_like: 302.9,
        humidity: 94
      },
      main: {},
      inputVal: ""
    },
    {
      imageUrl: "https://miro.medium.com/max/1250/0*Q2EFk7g36R0h8dAZ",
      alt: "img",
      selected: false,
      data: "",
      inputVal: ""
    },
    {
      imageUrl: "https://miro.medium.com/max/1250/0*Q2EFk7g36R0h8dAZ",
      alt: "img",
      selected: false,
      data: "",
      inputVal: ""
    },
    {
      imageUrl: "https://miro.medium.com/max/1250/0*Q2EFk7g36R0h8dAZ",
      alt: "img",
      selected: false,
      data: "",
      inputVal: ""
    },
    {
      imageUrl: "https://miro.medium.com/max/1250/0*Q2EFk7g36R0h8dAZ",
      alt: "img",
      selected: false,
      data: "",
      inputVal: ""
    },
    {
      imageUrl: "https://miro.medium.com/max/1250/0*Q2EFk7g36R0h8dAZ",
      alt: "img",
      selected: false,
      data: "",
      inputVal: ""
    },
    {
      imageUrl: "https://miro.medium.com/max/1250/0*Q2EFk7g36R0h8dAZ",
      alt: "img",
      selected: false,
      data: "",
      inputVal: ""
    },
    {
      imageUrl: "https://miro.medium.com/max/1250/0*Q2EFk7g36R0h8dAZ",
      alt: "img",
      selected: false,
      data: "",
      inputVal: ""
    },
    {
      imageUrl: "https://miro.medium.com/max/1250/0*Q2EFk7g36R0h8dAZ",
      alt: "img",
      selected: false,
      data: "",
      inputVal: ""
    }
  ];

  enableInput(index) {
    this.cardData[index].selected = !this.cardData[index].selected;
  }
  updateData(index) {}
}
