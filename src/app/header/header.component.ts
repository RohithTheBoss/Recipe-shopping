import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
//@Output() selectedFeature=new EventEmitter<string>();
  constructor( ) { }
  // onSelect(option:string)
  // {
  //   this.selectedFeature.emit(option);
  // }

  //commented because of us eof routers

  ngOnInit() {
  }

}
