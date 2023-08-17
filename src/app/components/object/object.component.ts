import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent {

  @Input() name:any
  objectValue: any = {}
  myForm!:FormGroup
  constructor( private fb: FormBuilder){

  }
  ngOnInit(){

    this.myForm = this.fb.group({
      value: ['', Validators.required]
    });
    // console.log("name",this.name);
  }
  onSubmit(){

      const inputValue = this.myForm.controls['value'].value;
      const matchingElement = this.name.find((element: any) => element.name === inputValue);

      if (matchingElement) {
        this.objectValue = matchingElement;
        console.log('value',this.objectValue);

      } else {
        console.log({ err: "No match found" });
      }
    }

}
