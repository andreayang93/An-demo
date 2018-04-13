import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
// 第一个参数是数组，第二个参数是要需要搜索的属性（title,第三个参数 就是你输入的关键字
  transform(list: any[], filterField: string, keyword: string): any {
    // no filterField and no keyword
    if (!filterField || !keyword) {
      return list;
    }
    // get the item from the list
    return list.filter(item => {
      /*filterField 在应用中指定是 标题还是描述还是id */
      const fieldValue = item[filterField];
      return fieldValue.indexOf(keyword) >= 0;
    });
  }

}
