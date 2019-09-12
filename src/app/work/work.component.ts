import { Component, OnInit } from '@angular/core';
import { ProductsGQL, Product } from '../../generated/graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  products$: Observable<Partial<Product>[]>;

  constructor(private productService: ProductsGQL) {
    this.products$ = productService.fetch().pipe(
      map(res => res.data.productCollection.items)
    );
  }

  ngOnInit() {
  }

}
