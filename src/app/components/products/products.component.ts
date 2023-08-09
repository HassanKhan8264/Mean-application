import { Component, Input } from '@angular/core';
import { NetworkService } from './../network.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  @Input() product : any
  // products: any[] = []



  // constructor(private NetworkService: NetworkService) {}
  
  // ngOnInit() {
  //   this.fetchProducts();
  // }
  
  // fetchProducts() {
  //   this.NetworkService.getProducts().subscribe((res:any)=>{
  //     this.products = res.data;
  //     console.log('products',this.products);

  //   })
  // }

}
