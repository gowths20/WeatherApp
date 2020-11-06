import { NgxIndexedDBService } from "ngx-indexed-db";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class IndexedDBService {
  constructor(private dbService: NgxIndexedDBService) {}

  add(name, obj) {
    this.dbService.add(name, obj).subscribe(key => {
      console.log("key: ", key);
    });
  }
  update(name, obj) {
    this.dbService.update(name, obj).subscribe(storeData => {
      console.log("storeData: ", storeData);
    });
  }

  get(name) {
    this.dbService.getAll(name).subscribe(name => {
      console.log(name);
    });
  }
}
