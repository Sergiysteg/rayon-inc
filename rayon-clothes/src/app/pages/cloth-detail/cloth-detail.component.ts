import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
import { ICloth } from 'src/app/shared/interfaces/cloth.interface';
import { ActivatedRoute } from '@angular/router';
import { ClothService } from '../../shared/services/cloth.service';
import { OrderService } from '../../shared/services/order.service';


@Component({
  selector: 'app-cloth-detail',
  templateUrl: './cloth-detail.component.html',
  styleUrls: ['./cloth-detail.component.scss']
})
export class ClothDetailComponent implements OnInit {
  @ViewChild('nav') slider: NgImageSliderComponent;
  cloth: ICloth;
  clothSize: Array<string> = [];
  allSizes: Array<string> = [];
  size: string = 'S';
  imageObject = [];
  posValue: any = 0;
  posCounter: number = 0;
  constructor(private actRoute: ActivatedRoute,
    private clothService: ClothService,
    private orderService: OrderService) { }

  ngOnInit(): void {
    this.getViewCloth();
  }

  private getImages(): void {
    const image = {
      image: this.cloth.image,
      thumbImage: this.cloth.image
    }
    const image2 = {
      image: this.cloth.image,
      thumbImage: this.cloth.image
    }
    this.imageObject.push(image, image2);
  }

  private getViewCloth(): void {
    const id = +this.actRoute.snapshot.paramMap.get('id');
    this.clothService.getOneCloth(id).subscribe(data => {
      this.cloth = data;
      this.allSizes = data.size;
      this.getImages();
    });
  }

  slideImage(status: boolean): void {
    if (status) {
      if(this.posCounter !== -100){
        this.posValue = (parseInt(this.posValue) - 100) + '%';
        this.posCounter += -100;
      }
    }
    else {
      if(this.posCounter !== 0){
        this.posValue = (parseInt(this.posValue) + 100) + '%';
        this.posCounter += 100;
      }
    }
  }

  clothCount(status: boolean): void {
    if (status) {
      this.cloth.count++;
    } else {
      if (this.cloth.count > 1) {
        this.cloth.count--;
      }
    }
  }

  setSize(): void {
    this.clothSize = this.allSizes.filter(size => size === this.size);
  }

  toBasket(cloth: ICloth): void {
    this.orderService.addBasket(cloth);
    cloth.count = 1;
    this.size = 'S';
  }

}
