import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent {
@Input() users:any

ngOnInit(){
  // console.log('input',this.users);
  // console.log('input',this.users.username);


}

}
