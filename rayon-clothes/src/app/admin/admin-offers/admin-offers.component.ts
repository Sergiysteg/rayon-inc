import { Component, OnInit } from '@angular/core';
import { ICloth } from 'src/app/shared/interfaces/cloth.interface';
import { OffersService } from '../../shared/services/offers.service';
import { ClothService } from 'src/app/shared/services/cloth.service';

@Component({
  selector: 'app-admin-offers',
  templateUrl: './admin-offers.component.html',
  styleUrls: ['./admin-offers.component.scss'],
})
export class AdminOffersComponent implements OnInit {
  adminCloth: Array<ICloth> = [];
  adminOffers: Array<ICloth> = [];
  adminAvailableCloth: Array<ICloth> = [];
  constructor(private offersService: OffersService,
              private clothService: ClothService) { }

  ngOnInit(): void {
    this.getCloth(); 
  }

  getCloth(): void {
    this.clothService.getJSONCloth().subscribe(data => {
      this.adminCloth = data;
    });
    this.offersService.getJSONCloth().subscribe(data => {
      this.adminOffers = data;
      this.getAvailablecloth();
    });
  }

  private getAvailablecloth(): void {
    for (let i = 0; i < this.adminOffers.length; i++){
      let index = this.adminCloth.findIndex(elem => elem.id == this.adminOffers[i].id);
      this.adminCloth.splice(index, 1);
    }
  }

  deleteCloth(id: number): void {
    this.offersService.deleteJSONCloth(id).subscribe(() => {
      this.getCloth();
    })
  }

  addToPopular(cloth: ICloth): void {
    this.offersService.postJSONCloth(cloth).subscribe(() => {
      this.getCloth();
    })
  }

}
