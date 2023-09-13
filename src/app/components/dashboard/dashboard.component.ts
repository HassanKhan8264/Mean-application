import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NetworkService } from '../network.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @ViewChild('fileInput', { static: false })
  fileInput!: ElementRef<any>;


  products: any[] = []
  users: any[] = []
  isShow = true

  arrayOfObjects = [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' },
    // Add more objects as needed
  ];


  constructor(private NetworkService: NetworkService) {

  }
  ngOnInit() {



    this.fetchProducts();
    this.fecthUsers();
  }

  fetchProducts() {
    this.NetworkService.getProducts().subscribe((res: any) => {
      this.products = res.data;
      console.log('products', this.products);

    })
  }
  fecthUsers() {
    this.NetworkService.getUsers().subscribe((res: any) => {
      this.users = res.data;
      console.log('products', this.users);

    })
  }
  uploadImage() {
    const fileInput = this.fileInput.nativeElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const formData = new FormData();
      formData.append('image', file);
      console.log('image', file);
      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      this.NetworkService.uploadImg(formData).subscribe((res:any) => {
        console.log('image',res);

      })


    }
  }
}
