import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit{
 myForm: FormGroup;
 onSubmit(){
     console.log(this.myForm);
     this.myForm.reset();
 }

 ngOnInit(){
     this.myForm = new FormGroup({
       firstName: new FormControl(null, Validators.required), 
       lastName: new FormControl(null, Validators.required), 
        email: new FormControl(null,[
            Validators.required,
            Validators.pattern("/^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]" +
        "([a-zA-Z]{2,9})$/")
    ]),
       password: new FormControl(null,Validators.required)
     });
 }


}