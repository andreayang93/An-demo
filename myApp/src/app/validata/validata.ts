import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
// cutomized the group validator
export function equalValidator(group: FormGroup): any {
    const password: FormControl = group.get('password') as FormControl;
    const confpass: FormControl = group.get('confpass') as FormControl;
    const valid: boolean = (password.value === confpass.value);
    console.log( '校验结果:' + valid);
    return valid ? null : {equal: true};
  }
  // customized the cpntrol validator
  export function customValidator(control: FormControl): any {
    // 正则：密码(由数字/大写字母/小写字母/标点符号组成，四种都必有，8位以上)
    const reg = /^(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?=.*[A-Z])(?=.*[a-z])(?!.*\n).*$/;
    const valid = reg.test(control.value);
    console.log('校验结果' + valid );
    return valid ? null : {password: true};
  }
  /**单个control的验证*/
  export function numberValidator(control: FormControl): any {
// 检验美国电话的正则表达式
// 可以匹配一下内容555-555-5555
    const regNum = /^(1\s?)?(\(\d{3}\)|\d{3})\s?-?\d{3}-?\s?\d{4}$/;
    const valid = regNum.test(control.value);
    console.log('校验结果' + valid);
    return valid ? null : {teleNum: true};
  }

  /**异步自定义校验器 5秒 处于pending状态 */
  export function mobileNum(control: FormControl): any {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})\s?-?\d{3}-?\s?\d{4}$/;
    const valid = regex.test(control.value);
    return Observable.of(valid ? null : {mobile : true}).delay(5000);
  }
