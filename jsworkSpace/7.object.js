let name='apple';
let color='red';

let apple ={
    name:'apple',
    color:'red'
};

console.log(apple.name);

//let 재할당이 가능
// const 재할당이 불가능
// 1. 상수 2. 상수변수 
//const는 상수에 사용 혹은 재할당이 불가능한 상수변수
//특히 객체(함수도객체임) 할당하고 주로 사용 
const text ='hello';
let s = 10; 
console.log(s);

//function에서 몰랐던(까먹었던 것)
//함수 선언문: 걍 function만들기 (이름있음)
//함수 표현식 : 변수에 함수 할당하는 것 (익명함수)
//람다식 () => 일케 씀
//생성자함수 const object = new Function() ..

//함수에서 return을 명시적으로 적지 않으면, undefined가 자동반환됨
function add(a,b){
    console.log(arguments);
    s=11;
    //함수의 인자에 뭐가 전달되었는지 출력 이때 사용안한(못한) 매개변수도 다나옴
    //매개변수의 정보는 함수 내부에서 접근이 가능한 arguments객체에 저장됨
    //a =1 b=2 등 기본값을 지정해 줄 수도 있다 
    k =20;
}
const result = add(1,2);
console.log(result);
console.log(s);
//마지막 3은 무시됨 
add(1,2,3);

function add2 (...numbers){
    //rest매개변수 numbers로 배열로 받음 (가변인자 거의 안쓰지만..)
}

(function run(){

})(); //함수 바로 사용하기 

//콜백함수 (일급함수 -> 함수가 매개변수, 함수가 반환, 할당명령(함수 변수에 할당), 동일 비교 대상)
//고차함수 인자로 함수로 받거나 함수를 반환하는게 고차함수 
//콜백함수는 특정 함수 안에서 실행되는 함수임 보통 실행제어에서 많이 쓰임
//외부로 부터 전달받는 함수, 전달하면서 함수 실행하는게 아니라 전달받고 특정 상황에서 실행
//const add =(a,b) => a+b;
const muti = (a,b) => a*b;

function caculator(a,b,action){
    let result = action(a,b);
    console.log(result);
    return result;
}

let val =20;

function f1 (val){
    console.log(val);
    val = 22;
}
console.log(val);
f1(30);


function eee(){
    console.log(arguments);
}

eee(1,2,3,4,5,6,7); //이게 왜.............

function sss(a){

}
sss(1,2);

