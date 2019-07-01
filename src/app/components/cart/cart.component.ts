import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  numbers: any[];
  constructor() {
    this.numbers = Array(10)
      .fill(0)
      .map((x, i) => i);
  }

  ngOnInit() {}
}
