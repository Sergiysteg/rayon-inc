import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICloth } from '../../shared/interfaces/cloth.interface';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() cloth: ICloth;
  @Output() changeCount = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  clothCount(status: boolean): void {
    if (status) {
      this.cloth.count++;
    }
    else {
      if (this.cloth.count > 1){
        this.cloth.count--;
      }
    }
    this.changeCount.emit(true);
  }
}
