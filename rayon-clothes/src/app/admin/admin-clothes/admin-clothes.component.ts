import { Component, OnInit, TemplateRef } from '@angular/core';
import { ICloth } from '../../shared/interfaces/cloth.interface';
import { ClothService } from '../../shared/services/cloth.service';
import { ICategory } from 'src/app/shared/interfaces/category.interface';
import { CategoryService } from '../../shared/services/category.service';
import { Cloth } from '../../shared/models/cloth.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-admin-clothes',
  templateUrl: './admin-clothes.component.html',
  styleUrls: ['./admin-clothes.component.scss']
})
export class AdminClothesComponent implements OnInit {
  categories: Array<ICategory> = [];
  adminClothes: Array<ICloth> = [];
  categoryName: string;

  clothID: number;
  clothCategory: ICategory = { nameEN: 'jacket', id: 1};
  clothDescription: string;
  clothColor: string;
  clothMaterial: string;
  clothPrice: number;
  clothImage: string;
  clothSize = ['S', 'M', 'ML', 'Xl'];

  uploadProgress: Observable<number>;
  editStatus: boolean;
  imageStatus: boolean;

  modalRef: BsModalRef;
  constructor(private clothService: ClothService,
    private catService: CategoryService,
    private afStorage: AngularFireStorage,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getAdminCloth();
    this.getAdminCategory();
  }

  getAdminCloth(): void {
    this.clothService.getJSONCloth().subscribe(data => {
      this.adminClothes = data;
    })
  }
  getAdminCategory(): void {
    this.catService.getJSONCategory().subscribe(data => {
      this.categories = data;
    })
  }

  setCategory(): void {
    this.clothCategory = this.categories.filter(cat => cat.nameEN === this.categoryName)[0];
  }

  uploadFile(event): void {
    const file = event.target.files[0];
    const type = file.type.slice(file.type.indexOf('/') + 1);
    const name = file.name.slice(0, file.name.lastIndexOf('.')).toLowerCase();
    const filePath = `images/${name}.${type}`;
    const upload = this.afStorage.upload(filePath, file);
    this.uploadProgress = upload.percentageChanges();
    upload.then(image => {
      this.afStorage.ref(`images/${image.metadata.name}`).getDownloadURL().subscribe(url => {
        this.clothImage = url;
        this.imageStatus = true;
      });
    });
  }

  addCloth(): void {
    let newCloth = new Cloth(1,
      this.clothCategory,
      this.clothDescription,
      this.clothColor,
      this.clothMaterial,
      this.clothImage,
      this.clothPrice,
      1,
      this.clothSize);
    delete newCloth.id;
    this.clothService.postJSONCloth(newCloth).subscribe(() => {
      this.getAdminCloth();
    })
    this.resetForm();
  }
  editCloth(cloth: ICloth): void {
    this.clothID = cloth.id;
    this.categoryName = cloth.category.nameEN;
    this.clothDescription = cloth.description;
    this.clothColor = cloth.color;
    this.clothImage = cloth.image;
    this.clothMaterial = cloth.material;
    this.clothPrice = cloth.price;
    this.imageStatus = true;
    this.editStatus = true;
    this.clothCategory = cloth.category;

  }
  saveCloth(): void {
    let newCloth = new Cloth(this.clothID,
      this.clothCategory,
      this.clothDescription,
      this.clothColor,
      this.clothMaterial,
      this.clothImage,
      this.clothPrice,
      1,
      this.clothSize);
    this.clothService.updateJSONCloth(newCloth).subscribe(() => {
      this.getAdminCloth();
    })
    this.resetForm();
    this.editStatus = false;
  }
  deleteCloth(id: number): void {
    this.clothService.deleteJSONCloth(id).subscribe(() => {
      this.getAdminCloth();
    })
  }

  deleteImage(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }

  confirmImage(): void {
    this.afStorage.storage.refFromURL(this.clothImage).delete();
    this.modalRef.hide();
    this.imageStatus = false;
  }

  declineImage(): void {
    this.modalRef.hide();
  }

  private resetForm(): void {
    this.clothDescription = '';
    this.clothColor = '';
    this.clothMaterial = '';
    this.clothPrice = null;
    this.clothCategory = this.categories[0];
    this.clothImage = '';
    this.imageStatus = false;
  }
}
