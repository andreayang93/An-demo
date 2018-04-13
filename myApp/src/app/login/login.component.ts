import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { equalValidator, customValidator, numberValidator} from '../validata/validata';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public passGroup: string[];
  public password: string[];
  public confpass: string[];
  public name: string;
  public phoneNumber: string[];
  constructor(private fb: FormBuilder, private router: Router ) {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      phoneNumber: ['', [Validators.required, numberValidator]],
      passGroup: this.fb.group({
        password: ['', [Validators.required, customValidator]],
        confpass: ['', [Validators.required]]
      }, {
        // add the custom validator group
        validator: equalValidator
      })
    });
  }
  ngOnInit() {
  }
  public onSubmit() {
    const isValid: boolean = this.loginForm.get('name').valid;
    // const cdcnj = this.loginForm.controls.name.hasError('required');
    // const cdscscs = this.loginForm.controls.passGroup.hasError('equal');
    // const dcdc = this.loginForm.controls.password.hasError('required');
    // console.log(dcdc + 'password的校验结果');
    // console.log(cdscscs + 'passgroup的校验结果');
    // console.log(cdcnj + 'name的校验结果');
    console.log(this.loginForm.value);
  }
  public login() {
    localStorage.setItem('isSignnedIn', 'true');
    localStorage.setItem('user', this.name);

    if (this.name === 'admin') {
        this.router.navigateByUrl('home');
    } else {
        this.router.navigateByUrl('home/contact');
    }
}

public logout() {
  localStorage.removeItem('user');
  this.router.navigateByUrl('home');
}

}
