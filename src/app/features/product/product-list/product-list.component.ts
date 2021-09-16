import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product.service';
import { PagingInfo } from 'src/app/shared/models/paging-info';
import * as AllCartActions from '../../../store/actions/cart-actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading: boolean = true;
  pagingInfo: PagingInfo = { pageSize: 10, currentPage: 0, pageCount: 0 };
  pageArray: number[] = [];
  filterText: string = '';

  constructor(private productService: ProductService, private store: Store<any>) {}

  ngOnInit(): void {
    this.delay(500);
    this.getProductsByPage(1);
  }

  addToCart(product: Product) {
    this.store.dispatch(new AllCartActions.AddToCart(product)); //AKSİYONLAR CLASS OLDUGUNDAN DEĞİŞMESİ İÇİN NEW LİYORUZ.
    //dispatch: Bir metodu çağır.
  }

  async delay(ms: number) {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), ms)).then(
      () => {
        this.productService.getProducts().subscribe((data) => {
          this.loading = false;
          this.pagingInfo.pageCount = Math.ceil(
            data.length / this.pagingInfo.pageSize
          );
          this.generatePageArray(this.pagingInfo.pageCount);
        });
      }
    );
  }

  generatePageArray(pageCount: number) {
    for (let i = 0; i < pageCount; i++) {
      this.pageArray.push(i);
    }
  }

  getProductsByPage(page: number) {
    this.productService.getProductsByPage(page).subscribe((data) => {
      this.products = data;
      this.pagingInfo.currentPage = page;
    });
  }

  getCurrentPageStyle(index: number): string {
    if (index + 1 === this.pagingInfo.currentPage) {
      return 'page-item active';
    } else {
      return 'page-item';
    }
  }
}
