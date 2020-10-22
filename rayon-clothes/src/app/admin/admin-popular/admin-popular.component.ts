import { Component, OnInit } from '@angular/core';
import { ICloth } from 'src/app/shared/interfaces/cloth.interface';
import { PopularService } from 'src/app/shared/services/popular.service';
import { ClothService } from 'src/app/shared/services/cloth.service';

@Component({
  selector: 'app-admin-popular',
  templateUrl: './admin-popular.component.html',
  styleUrls: ['./admin-popular.component.scss']
})
export class AdminPopularComponent implements OnInit {
  adminCloth: Array<ICloth> = [];
  adminPopular: Array<ICloth> = [];
  adminAvailableCloth: Array<ICloth> = [];
  constructor(private popularService: PopularService,
              private clothService: ClothService) { }

  ngOnInit(): void {
    this.getCloth(); 
  }

  getCloth(): void {
    this.clothService.getJSONCloth().subscribe(data => {
      this.adminCloth = data;
    });
    this.popularService.getJSONCloth().subscribe(data => {
      this.adminPopular = data;
      this.getAvailablecloth();
    });
  }

  private getAvailablecloth(): void {
    for (let i = 0; i < this.adminPopular.length; i++){
      let index = this.adminCloth.findIndex(elem => elem.id == this.adminPopular[i].id);
      this.adminCloth.splice(index, 1);
    }
  }

  deleteCloth(id: number): void {
    this.popularService.deleteJSONCloth(id).subscribe(() => {
      this.getCloth();
    })
  }

  addToPopular(cloth: ICloth): void {
    this.popularService.postJSONCloth(cloth).subscribe(() => {
      this.getCloth();
    })
  }
}
