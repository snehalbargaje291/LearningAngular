import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = [];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.fetchProductDetails();
  }
  fetchProductDetails(): void {
    this.http.get<any>('http://3.111.47.3:24051/api/v1/viewproductDetails').subscribe(
      (response) => {
        if (response.success && response.data&& Array.isArray(response.data)) {
          this.products = response.data;
        } else {
          console.error('Error fetching product details:', response.message);
        }
      }
    );
  }
}
