import { NetworkService } from './../network.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit{
  usersList: any [] = []
  isShow = true
  userForm!:FormGroup
  constructor(public fb:FormBuilder,public NetworkService:NetworkService){

  }
  ngOnInit(): void {

this.fetchProducts()
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required]
    });
  }



  fetchProducts() {
    this.NetworkService.getUsers().subscribe((res: any) => {
      let data = res.data
      data.reverse()
      this.usersList = data;
      console.log('products', this.usersList);

    })
  }
  onSubmit() {
    if (this.userForm.valid) {
      console.log('form values',this.userForm.value);
     let data = this.userForm.value
        this.NetworkService.addUser(data).subscribe((res: any) => {
          // this.users = res.data;
          console.log('user', res);
          this.fetchProducts()
        })

    }
  }



  selectUserById(userId: any) {
    const id = userId.id;
    this.isShow = false

    this.NetworkService.getUserById(id).subscribe(
      (res: any) => {
        console.log('res',res.data[0]);

        if (res.data.length > 0) {
          const selectedUser = res.data[0];
          this.userForm.patchValue({
            username: selectedUser.username,
            email: selectedUser.email,
            mobile: selectedUser.mobile
          });
        }
      },
      (error) => {
        console.error('Error fetching product:', error);
      }
    );
  }
  updateUser(userId: any) {
    // Implement edit logic here
    const id = userId.id;
    this.NetworkService.updateUserById(id).subscribe((res: any) => {
      // this.usersList = res.data;
      console.log('products', res);
      this.fetchProducts()

    })
  }
  deleteUser(userId: any) {
    // Implement delete logic here
    const id = userId.id;
    this.NetworkService.deleteUserById(id).subscribe((res: any) => {
      // this.usersList = res.data;
      console.log('products', res);
      this.fetchProducts()

    })
  }

}
