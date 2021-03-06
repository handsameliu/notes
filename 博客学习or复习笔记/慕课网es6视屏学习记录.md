
由于最近使用的是react做微信端，所以就深入接触了es6，之前es6语法很少使用,所以看了阮一峰老师和网上的教程深入学习了一下。

> 列出了常用到的一些新的语法，感觉和后端越来越像了，而且简单了。

> http://www.cnblogs.com/Wayou/p/es6_new_features.html   参考

### 箭头函数

首当其冲的就是es6的箭头函数了，它简化了函数的书写。操作符左边为输入的参数，而右边则是进行的操作以及返回的值。

```javascript
(prams)=>{
	// 处理代码的表达式
}
```

而且箭头函数还没有作用域问题，它本身没有作用域。会自动向上查找。

写回调也很方便

```javascript
arr.forEach(x = > console.log(x))  //值较少，操作简单时可以省略括号和大括号
```

### let与const 关键字

```javascript
可以把let看成var，只是它定义的变量被限定在了特定范围内才能使用，而离开这个范围则无效。const则很直观，用来定义常量，即无法被更改值的变量。
```

### class 类

es6中增加了对类class的支持，对象的创建和继承就更加直观了，并且父类方法的调用，构造函数，静态方法，实例化都更加形象，由于我之前是java工作者（其他没学过），所以看着相当亲切

```javascript
//类的定义
class Person {				//开头建议大写，完全按照类的要求去写
	//ES6中的新型构造器
    constructor(name) {
        this.name = name;
    }
    //实例方法
    sayName() {
        console.log('My name is '+this.name);
    }
}
//类的继承
class XiaoMing extends Person {
    constructor(name) {
    	//直接调用super父类构造器进行初始化
        super(name);
    }
    program() {
        console.log("I'm xiaoming...");
    }
}
//测试我们的类
var person=new Person('baby'),en=new XiaoMing('xiaoming');
person.sayName();			//输出 My name is baby
en.sayName();				//输出 My name is xiaoming
en.program();				//输出 I'm xiaoming...
```

### 字符串模板

字符串模板相对简单易懂些。ES6中允许使用反引号 ` 来创建字符串，此种方法创建的字符串里面可以包含由美元符号加花括号包裹的变量 ${vraible} 。

```javascript
let name = 'liu';
console.log(`my name is  ${name}`);
```

### 解构

自动解析数组或对象中的值。直接返回一个数组，然后数组中的值会自动被解析到对应接收该值的变量中。

```javascript
var [x,y]=getVal(),//函数返回值的解构
    [name,,age]=['小二','male','18'];//数组解构

function getVal() {
    return [ 1, 2 ];
}

console.log('x:'+x+', y:'+y);//输出：x:1, y:2 
console.log('name:'+name+', age:'+age);//输出： name:小二, age:18
```

### 参数默认值，不定参数，拓展参数

现在可以在定义函数的时候指定参数的默认值了，而不用像以前那样通过逻辑或操作符来达到目。

```
function sayHello(name){
	//传统的指定默认参数的方式
	var name=name||'dude';
	console.log('Hello '+name);
}
//运用ES6的默认参数
function sayHello2(name='dude'){
	console.log(`Hello ${name}`);
}
sayHello();//输出：Hello dude
sayHello('Wayou');//输出：Hello Wayou
sayHello2();//输出：Hello dude
sayHello2('Wayou');//输出：Hello Wayou
```

#### 不定参数

不定参数是在函数中使用命名参数同时接收不定数量的未命名参数。这只是一种语法糖，在以前的JavaScript代码中我们可以通过arguments变量来达到这一目的。不定参数的格式是三个句点后跟代表所有不定参数的变量名。比如下面这个例子中，…x代表了所有传入add函数的参数。

```javascript
/将所有参数相加的函数
function add(...x){
	return x.reduce((m,n)=>m+n);
}
//传递任意个数的参数
console.log(add(1,2,3));//输出：6
console.log(add(1,2,3,4,5));//输出：15
```

#### 拓展参数

拓展参数则是另一种形式的语法糖，它允许传递数组或者类数组直接做为函数的参数而不用通过apply。

```javascript
var people=['Wayou','John','Sherlock'];
//sayHello函数本来接收三个单独的参数人妖，人二和人三
function sayHello(people1,people2,people3){
	console.log(`Hello ${people1},${people2},${people3}`);
}
//但是我们将一个数组以拓展参数的形式传递，它能很好地映射到每个单独的参数
sayHello(...people);//输出：Hello Wayou,John,Sherlock 

//而在以前，如果需要传递数组当参数，我们需要使用函数的apply方法
sayHello.apply(null,people);//输出：Hello Wayou,John,Sherlock
```

### 模块

在ES6标准中，JavaScript原生支持module了。这种将JS代码分割成不同功能的小块进行模块化的概念是在一些三方规范中流行起来的，比如CommonJS和AMD模式

将不同功能的代码分别写在不同文件中，各模块只需导出公共接口部分，然后通过模块的导入的方式可以在其他地方使用   下面的例子来自tutsplus:

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
//声明引用的模块
module point from "/point.js";
//这里可以看出，尽管声明了引用的模块，还是可以通过指定需要的部分进行导入
import Point from "point";
 
var origin = new Point(0, 0);
console.log(origin);
```

### Promises

Promises是处理异步操作的一种模式，之前在很多三方库中有实现，比如jQuery的deferred 对象。当你发起一个异步请求，并绑定了.when(), .done()等事件处理程序时，其实就是在应用promise模式。

```
//创建promise
var promise = new Promise(function(resolve, reject) {
    // 进行一些异步或耗时操作
    if ( /*如果成功 */ ) {
        resolve("Stuff worked!");
    } else {
        reject(Error("It broke"));
    }
});
//绑定处理程序
promise.then(function(result) {
	//promise成功的话会执行这里
    console.log(result); // "Stuff worked!"
}, function(err) {
	//promise失败会执行这里
    console.log(err); // Error: "It broke"
});
```

### for of 值遍历

我们都知道for in 循环用于遍历数组，类数组或对象，ES6中新引入的for of循环功能相似，不同的是每次循环它提供的不是序号而是值。

```javascript
var someArray = [ "a", "b", "c" ];
 
for (v of someArray) {
    console.log(v);//输出 a,b,c
}
```