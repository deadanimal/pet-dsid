import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-database-vendor',
  templateUrl: './database-vendor.component.html',
  styleUrls: ['./database-vendor.component.scss']
})
export class DatabaseVendorComponent implements OnInit {

  defaultModal: BsModalRef;
  default = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  openDefaultModal(modalDefault: TemplateRef<any>) {
    this.defaultModal = this.modalService.show(modalDefault, this.default);
  }

}
