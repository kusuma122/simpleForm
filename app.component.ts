import { Component } from '@angular/core';
import {FormGroup,FormBuilder, Validators, FormControl} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simpleForm';
  userForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { 
    this.userForm = this.formBuilder.group({
      'recipient': ['',[Validators.required,this.commaSeperatedRcpnts]],
      'message': ['',[Validators.required]],
      'tokens': ['',[Validators.required]]
    });
  }
  isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
  }
  commaSeperatedRcpnts(control:FormControl){
    let rcpnts = control.value;
    let commaSep = rcpnts.split(',').length-1;
    if(commaSep <= 0){
      return {
        nonSep:{
          commaReq: null
        }
      }
    }
    return null;
  }
  get f(){return this.userForm.controls}
  onSubmit(){
    this.submitted = true;
    if(this.userForm.invalid){
      return;
    }else{
      console.log('submitted');
    }
  }
  ngOnInit() {
  }
}
