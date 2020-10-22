import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CategoryService } from '../../shared/services/category.service';
import { ICategory } from '../../shared/interfaces/category.interface';
import { Category } from '../../shared/models/category.model';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent implements OnInit {
  adminCategory: Array<ICategory> = [];

  searchCategory: string;
  nameEN: string = '';
  IDFormDelete: number;

  modalRef: BsModalRef;

  modalStatus: boolean;

  // -----OrderPipe-----
  sortedCollection: Array<any> = [];
  order: string = 'nameEN';
  reverse: boolean = false;
  // -----OrderPipe-----

  constructor(private modalService: BsModalService, 
              private catService: CategoryService,
              private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.adminCategory, 'nameEN');
  }

  ngOnInit(): void {
    this.adminJSONCategory();
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
  }

  openAddModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-dialog-centered'});
  }

  openDeleteModal(template: TemplateRef<any>, id: number) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm modal-dialog-centered'});
    this.IDFormDelete = id;
  }

  private adminJSONCategory(): void {
    this.catService.getJSONCategory().subscribe(data => {
      this.adminCategory = data;
    })
  }

  addCategory(): void {
    let newCat = new Category(1, this.nameEN);
    delete newCat.id;
    this.catService.postJSONCateory(newCat).subscribe(() => {
      this.adminJSONCategory();
      this.closeModal();
    });
  }

  deleteCategory(): void {
    this.catService.deleteJSONCategory(this.IDFormDelete).subscribe(() => {
      this.adminJSONCategory();
      this.IDFormDelete = null;
      this.closeModal();
    });
  }

  closeModal(): void {
    this.nameEN = '';
    this.modalRef.hide();
  }
}
