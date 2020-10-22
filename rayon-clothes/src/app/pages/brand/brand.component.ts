import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  mainTitle: string = 'Brand';
  mainDesc: string = 'Some other text';
  constructor() { }

  ngOnInit(): void {
  }

}
