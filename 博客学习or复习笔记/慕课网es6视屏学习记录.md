
�������ʹ�õ���react��΢�Ŷˣ����Ծ�����Ӵ���es6��֮ǰes6�﷨����ʹ��,���Կ�����һ����ʦ�����ϵĽ̳�����ѧϰ��һ�¡�

> �г��˳��õ���һЩ�µ��﷨���о��ͺ��Խ��Խ���ˣ����Ҽ��ˡ�

> http://www.cnblogs.com/Wayou/p/es6_new_features.html   �ο�

### ��ͷ����

�׵����ľ���es6�ļ�ͷ�����ˣ������˺�������д�����������Ϊ����Ĳ��������ұ����ǽ��еĲ����Լ����ص�ֵ��

```javascript
(prams)=>{
	// �������ı��ʽ
}
```

���Ҽ�ͷ������û�����������⣬������û�������򡣻��Զ����ϲ��ҡ�

д�ص�Ҳ�ܷ���

```javascript
arr.forEach(x = > console.log(x))  //ֵ���٣�������ʱ����ʡ�����źʹ�����
```

### let��const �ؼ���

```javascript
���԰�let����var��ֻ��������ı������޶������ض���Χ�ڲ���ʹ�ã����뿪�����Χ����Ч��const���ֱ�ۣ��������峣�������޷�������ֵ�ı�����
```

### class ��

es6�������˶���class��֧�֣�����Ĵ����ͼ̳о͸���ֱ���ˣ����Ҹ��෽���ĵ��ã����캯������̬������ʵ��������������������֮ǰ��java�����ߣ�����ûѧ���������Կ����൱����

```javascript
//��Ķ���
class Person {				//��ͷ�����д����ȫ�������Ҫ��ȥд
	//ES6�е����͹�����
    constructor(name) {
        this.name = name;
    }
    //ʵ������
    sayName() {
        console.log('My name is '+this.name);
    }
}
//��ļ̳�
class XiaoMing extends Person {
    constructor(name) {
    	//ֱ�ӵ���super���๹�������г�ʼ��
        super(name);
    }
    program() {
        console.log("I'm xiaoming...");
    }
}
//�������ǵ���
var person=new Person('baby'),en=new XiaoMing('xiaoming');
person.sayName();			//��� My name is baby
en.sayName();				//��� My name is xiaoming
en.program();				//��� I'm xiaoming...
```

### �ַ���ģ��

�ַ���ģ����Լ��׶�Щ��ES6������ʹ�÷����� ` �������ַ��������ַ����������ַ���������԰�������Ԫ���żӻ����Ű����ı��� ${vraible} ��

```javascript
let name = 'liu';
console.log(`my name is  ${name}`);
```

### �⹹

�Զ��������������е�ֵ��ֱ�ӷ���һ�����飬Ȼ�������е�ֵ���Զ�����������Ӧ���ո�ֵ�ı����С�

```javascript
var [x,y]=getVal(),//��������ֵ�Ľ⹹
    [name,,age]=['С��','male','18'];//����⹹

function getVal() {
    return [ 1, 2 ];
}

console.log('x:'+x+', y:'+y);//�����x:1, y:2 
console.log('name:'+name+', age:'+age);//����� name:С��, age:18
```

### ����Ĭ��ֵ��������������չ����

���ڿ����ڶ��庯����ʱ��ָ��������Ĭ��ֵ�ˣ�����������ǰ����ͨ���߼�����������ﵽĿ��

```
function sayHello(name){
	//��ͳ��ָ��Ĭ�ϲ����ķ�ʽ
	var name=name||'dude';
	console.log('Hello '+name);
}
//����ES6��Ĭ�ϲ���
function sayHello2(name='dude'){
	console.log(`Hello ${name}`);
}
sayHello();//�����Hello dude
sayHello('Wayou');//�����Hello Wayou
sayHello2();//�����Hello dude
sayHello2('Wayou');//�����Hello Wayou
```

#### ��������

�����������ں�����ʹ����������ͬʱ���ղ���������δ������������ֻ��һ���﷨�ǣ�����ǰ��JavaScript���������ǿ���ͨ��arguments�������ﵽ��һĿ�ġ����������ĸ�ʽ������������������в��������ı�����������������������У���x���������д���add�����Ĳ�����

```javascript
/�����в�����ӵĺ���
function add(...x){
	return x.reduce((m,n)=>m+n);
}
//������������Ĳ���
console.log(add(1,2,3));//�����6
console.log(add(1,2,3,4,5));//�����15
```

#### ��չ����

��չ����������һ����ʽ���﷨�ǣ����������������������ֱ����Ϊ�����Ĳ���������ͨ��apply��

```javascript
var people=['Wayou','John','Sherlock'];
//sayHello���������������������Ĳ����������˶�������
function sayHello(people1,people2,people3){
	console.log(`Hello ${people1},${people2},${people3}`);
}
//�������ǽ�һ����������չ��������ʽ���ݣ����ܺܺõ�ӳ�䵽ÿ�������Ĳ���
sayHello(...people);//�����Hello Wayou,John,Sherlock 

//������ǰ�������Ҫ�������鵱������������Ҫʹ�ú�����apply����
sayHello.apply(null,people);//�����Hello Wayou,John,Sherlock
```

### ģ��

��ES6��׼�У�JavaScriptԭ��֧��module�ˡ����ֽ�JS����ָ�ɲ�ͬ���ܵ�С�����ģ�黯�ĸ�������һЩ�����淶�����������ģ�����CommonJS��AMDģʽ

����ͬ���ܵĴ���ֱ�д�ڲ�ͬ�ļ��У���ģ��ֻ�赼�������ӿڲ��֣�Ȼ��ͨ��ģ��ĵ���ķ�ʽ�����������ط�ʹ��   �������������tutsplus:

```javascript
// point.js
module "point" {
    export class Point {
        constructor (x, y) {
            public x = x;
            public y = y;
        }
    }
}
 
// myapp.js
//�������õ�ģ��
module point from "/point.js";
//������Կ������������������õ�ģ�飬���ǿ���ͨ��ָ����Ҫ�Ĳ��ֽ��е���
import Point from "point";
 
var origin = new Point(0, 0);
console.log(origin);
```

### Promises

Promises�Ǵ����첽������һ��ģʽ��֮ǰ�ںܶ�����������ʵ�֣�����jQuery��deferred ���󡣵��㷢��һ���첽���󣬲�����.when(), .done()���¼��������ʱ����ʵ������Ӧ��promiseģʽ��

```
//����promise
var promise = new Promise(function(resolve, reject) {
    // ����һЩ�첽���ʱ����
    if ( /*����ɹ� */ ) {
        resolve("Stuff worked!");
    } else {
        reject(Error("It broke"));
    }
});
//�󶨴������
promise.then(function(result) {
	//promise�ɹ��Ļ���ִ������
    console.log(result); // "Stuff worked!"
}, function(err) {
	//promiseʧ�ܻ�ִ������
    console.log(err); // Error: "It broke"
});
```

### for of ֵ����

���Ƕ�֪��for in ѭ�����ڱ������飬����������ES6���������for ofѭ���������ƣ���ͬ����ÿ��ѭ�����ṩ�Ĳ�����Ŷ���ֵ��

```javascript
var someArray = [ "a", "b", "c" ];
 
for (v of someArray) {
    console.log(v);//��� a,b,c
}
```