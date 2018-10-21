import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  //public sliderOptions: any = {items: 3, dots: false, nav: true, margin: 120, loop: true, responsive:{ 0:{ items: 1, margin: 60 }, 600:{ items: 2, margin: 20 }, 767:{ items: 2, margin: 40 }, 991:{ items: 2, margin: 120 }, 1200:{ items: 3 }}};
  public sliderOptions: any = {items: 1, dots: false, nav: true, margin: 120, loop: true, responsive:{ 0:{ items: 1, margin: 60 }, 600:{ items: 1, margin: 20 }, 767:{ items: 1, margin: 40 }, 991:{ items: 1, margin: 120 }, 1200:{ items: 1 }}};

  constructor() { }

  ngOnInit() {
  }

}
