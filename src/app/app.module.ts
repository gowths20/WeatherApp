import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { WeatherService } from "./weather.service";
import { IndexedDBService } from "./indexdb.service";
import { CardComponent } from "../cards/card.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, CardComponent],
  providers: [WeatherService, IndexedDBService],
  bootstrap: [AppComponent]
})
export class AppModule {}
