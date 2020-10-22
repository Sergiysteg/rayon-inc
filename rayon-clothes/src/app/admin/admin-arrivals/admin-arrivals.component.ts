import { Component, OnInit } from '@angular/core';
import { ICloth } from 'src/app/shared/interfaces/cloth.interface';
import { ArrivalsService } from 'src/app/shared/services/arrivals.service';
import { ClothService } from 'src/app/shared/services/cloth.service';

@Component({
  selector: 'app-admin-arrivals',
  templateUrl: './admin-arrivals.component.html',
  styleUrls: ['./admin-arrivals.component.scss']
})
export class AdminArrivalsComponent implements OnInit {
  adminCloth: Array<ICloth> = [];
  adminArrivals: Array<ICloth> = [];
  adminAvailableCloth: Array<ICloth> = [];
  constructor(private arrivalsService: ArrivalsService,
              private clothService: ClothService) { }

  ngOnInit(): void {
    this.getCloth(); 
  }

  getCloth(): void {
    this.clothService.getJSONCloth().subscribe(data => {
      this.adminCloth = data;
    });
    this.arrivalsService.getJSONCloth().subscribe(data => {
      this.adminArrivals = data;
      this.getAvailablecloth();
    });
  }

  private getAvailablecloth(): void {
    for (let i = 0; i < this.adminArrivals.length; i++){
      let index = this.adminCloth.findIndex(elem => elem.id == this.adminArrivals[i].id);
      this.adminCloth.splice(index, 1);
    }
  }

  deleteCloth(id: number): void {
    this.arrivalsService.deleteJSONCloth(id).subscribe(() => {
      this.getCloth();
    })
  }

  addToPopular(cloth: ICloth): void {
    this.arrivalsService.postJSONCloth(cloth).subscribe(() => {
      this.getCloth();
    })
  }

}
