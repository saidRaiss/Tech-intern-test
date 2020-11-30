import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() title: string;
  payClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  pay(): void{
    this.payClicked = true;
  }

}
