import { Component, OnInit , Input , OnChanges} from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { contactInfo } from './contactInfo';
import { numberValidator } from '../validata/validata';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnChanges {
  /**明确把 heroForm 属性的类型声明为 FormGroup，稍后你会初始化它。
把 FormBuilder 注入到构造函数中。
添加一个名叫 createForm() 的新方法，它会用 FormBuilder 来定义 heroForm。
在构造函数中调用 createForm() */
  public contactInfo = contactInfo;
  myForm: FormGroup;
  constructor(private myLocation: Location, private fbuild: FormBuilder) {
    this.createForm();
   }
  ngOnChanges () {
    this.rebuildForm ();
  }
  public rebuildForm() {
    this.myForm.reset({
      // 当表单信息发生变化时要实现的方法

    });
  }
  public createForm() {
    // formbuilder.group()方法接受一个对象，对象的键值对分别是 FormControl 的名字和它的定义(yanzheng)；
    this.myForm = this.fbuild.group({
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.minLength(9), numberValidator]],
      questionTxt: ['', Validators.required],
    });
  }
  public getValidatorsMes(formcontrol: AbstractControl) {
    if (!formcontrol.untouched || formcontrol.valid) {
      if (!!formcontrol.errors) {
        if (formcontrol.errors.required) {
          return 'This field is requried';
        }
        if (formcontrol.errors.minLength) {
          return 'This field requries more than 9 characters';
        }
      }
    }
    return '';
  }
  public goBack() {
    this.myLocation.back();
  }
  public getFormValue() {
    // 从服务获取数据啥的
  }
}
