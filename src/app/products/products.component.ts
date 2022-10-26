import { Component, OnInit } from '@angular/core';
import { ProductsdataService } from '../productsdata.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  members: any;

  constructor(private productsdata: ProductsdataService) { }

  ngOnInit(): void {
    this.productsdata.getData().subscribe(productsdata => {
      this.members = productsdata
      console.log(this.members)
      })
  }

}
