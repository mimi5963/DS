
//객체 

var car = {
    name : '아반떼',
    color : 'white',
    price: 2000,
    accell:function(){
        console.log('전진');
        console.log(this.company);
    }
};

console.log(car);

//속성을 불러오는 두가지 방법
console.log(car.name);
console.log(car['name']); 
car.accell();

//속성 동적 추가 이건 쫌 아니지 않냐
//단 추가한 시점부터 사용할 수 있음!! 
car.company= '현대';
console.log(car.company);
car.accell();

//생성자함수 
function Student(name, age){
    var n = name;
    var a = age;
    this.n2 = name;   //여기서 this가 가리키는 것은 앞으로 생성될 객체..? 
    this.eat = function (){ //함수도 객체니까 함수 안에다가 생성이라고하면,
        console.log('밥먹기'); // new 는 함수를 객체로 바꿔줌 
        this.menu = '짜장면';
    }
  
    return 1;
}

//동적으로 추가되냐 왜..

var st1 = new Student('워워',21);
//console.log(st1.n); //접근불가 
console.log(st1.n2);
//console.log(st1.eat()); //안됨
console.log(st1.menu);
st1.eat()
console.log(st1.menu);
console.log(st1.dkkk);

console.log(Student('홍길동',30)); //진짜 좆같다 


//class 
class Student2 {
    constructor(name, age){ //생성자
        this.name = name;
        this.age = age;
        console.log('생성자 실행');
    }
    eat(){
        console.log('아니 샹' + this.name);
        
    }
}

var ssss = new Student2('김길동',40);
ssss.eat();

//멤버를 추가하는 방법이 객체.새로운멤버 혹은 생성자함수나 클래스에서 this로 넣기 
//그냥 동적으로 생성하면, 생성 된 후에 사용됨 
//생성자 함수를 객체로 만들어버리면, 함수안에 지역변수 접근 불가 
//함수와 객체 분리 new로 인해..