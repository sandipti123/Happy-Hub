import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
    <h2>Products</h2>
    <div class="products-container">
      <div *ngFor="let product of products" class="product-item">
        <img [src]="product.image" [alt]="product.name" class="product-image">
        <div class="product-details">
          <h3>{{ product.name }}</h3>
          <p>Price: {{ product.price }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .products-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .product-item {
      width: 200px;
      margin: 1rem;
      text-align: center;
    }

    .product-image {
      width: 100%;
      max-height: 200px;
      object-fit: cover;
      margin-bottom: 0.5rem;
    }

    .product-details {
      background-color: #f1f1f1;
      padding: 0.5rem;
      border-radius: 4px;
    }
  `]
})
export class ProductsComponent {
  products = [
    {
      name: 'Dress 1',
      image: '/assets/dress1.jpg',
      price: '$50'
    },
    {
      name: 'Dress 2',
      image: '/assets/dress2.jpg',
      price: '$65'
    },
    {
      name: 'Dress 3',
      image: '/assets/dress3.jpg',
      price: '$80'
    },
    // Add more dress objects as needed
  ];
}
