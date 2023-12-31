import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NetworkService } from '../network.service'

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  productForm!: FormGroup;
  selectedproduct:any
  selectedImage: any;

  products : any [] = []
  constructor(private NetworkService: NetworkService, private fb: FormBuilder) {}


  ngOnInit() {
    this.fetchProducts();
    this.productForm = this.fb.group({
      image: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  fetchProducts() {
    this.NetworkService.getProducts().subscribe((res: any) => {
      this.products = res.data;
      console.log('products', this.products);

    })
  }
  onSubmit() {
    if (this.productForm.valid) {
      console.log('form values',this.productForm.value);
     let data = this.productForm.value
        this.NetworkService.addProduct(data).subscribe((res: any) => {
          // this.users = res.data;
          console.log('products', res);

        })

    }
  }



  selectProductById(productId: any) {
    const id = productId.id;

    this.NetworkService.getProductsById(id).subscribe(
      (res: any) => {
        console.log('res',res.data[0].name);

        if (res.data.length > 0) {
          const selectedProduct = res.data[0];
          this.productForm.patchValue({
            name: selectedProduct.name,
            price: selectedProduct.price,
            description: selectedProduct.description
          });
        }
      },
      (error) => {
        console.error('Error fetching product:', error);
      }
    );
  }
  updateProduct(productId: any) {
    // Implement edit logic here
  }
  deleteProduct(productId: any) {
    // Implement delete logic here
  }

}
