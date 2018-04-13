import { Directive } from '@angular/core';
import {numberValidator} from '../validata/validata';
import {NG_VALIDATORS, FormControl} from '@angular/forms';
// 模板表单制作自定义验证器，将其封装在自定自定义指令，直接使用就可以
@Directive({
  selector: '[appVali]',
  providers: [{provide: NG_VALIDATORS, useValue: numberValidator, multi: true}]
})
export class ValidatorDirective {
}
