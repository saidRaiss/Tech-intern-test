import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  breakpoint = 4;
  breakpointText = 2;
  constructor() { }
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 600) ? 2 : 4;
    this.breakpointText = (this.breakpoint == 2) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 2 : 4;
    this.breakpointText = (this.breakpoint == 2) ? 1 : 2;
  }
  // ngOnInit(): void {
  // }

}
