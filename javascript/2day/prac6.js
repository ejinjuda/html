'use strict'
const str = prompt('문자열을 입력하시오(&:구분자사용)');
let flag = false;
while(!flag){
  if (str.indexOf('&') != -1) {
    const array = str.split('&');
    for(let i=0; i<array.length; i++) {
      console.log(array[i]);
      document.write(array[i]);
    }
  }else {
    console.log('&를 포함한 문자열을 입력하세요!!');
  }
}  