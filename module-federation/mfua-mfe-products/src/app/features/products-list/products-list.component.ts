import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../model/product";
import {ProductsService} from "../../core/services/products.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'mfua-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products = new Observable<Product>();
  @Input() id = '';

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.products = this.productsService.getProduct(this.id);
  }

  addProduct() {

  }

  addCosignee() {
    
  }

}
