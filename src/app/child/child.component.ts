import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input()
  child!:string;

  @Output() 
  onRegister = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  @Input() title: string = 'I\'m a nested component';
  
  ngOnChanges(changes: any): void {
    // console.log('changes in child:' + JSON.stringify(changes));
  }

  passData(){
    this.onRegister.emit("This message is coming on Child Component.")
  }
}
