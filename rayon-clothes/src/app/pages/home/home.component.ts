import { Component, OnInit } from '@angular/core';
import { PopularService } from '../../shared/services/popular.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  catalog: Array<any> = [];
  constructor(private popularService: PopularService) { }

  ngOnInit(): void {
    this.getCloth();
  }

  private getCloth(): void {
    this.popularService.getJSONCloth().subscribe((data) => {
      this.catalog = data;
    })
  }
 

}
