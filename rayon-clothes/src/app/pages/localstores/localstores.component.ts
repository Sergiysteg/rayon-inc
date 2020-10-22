import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localstores',
  templateUrl: './localstores.component.html',
  styleUrls: ['./localstores.component.scss']
})
export class LocalstoresComponent implements OnInit {
  mainTitle: string = 'Local Stores';
  mainDesc: string = 'Find a store near you';

  firstMap: string = '1map';
  secondMap: string = '2map';
  thirdMap: string = '3map';
  map: string = '1map';
  constructor() { }

  ngOnInit(): void {
  
  }

  changeMapStatus(mapValue: string): void {
    switch (true) {
      case mapValue === this.firstMap:
        this.map = this.firstMap;
        break;
      case mapValue === this.secondMap:
        this.map = this.secondMap;
        break;
      case mapValue === this.thirdMap:
        this.map = this.thirdMap;
        break;
    }
  }

}
