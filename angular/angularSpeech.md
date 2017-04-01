# **Angular**

## 有哪些框架规范？
  - 常见的框架MVC 和 MVVM
  - MVC  M model 数据模型层 ，用来存放数据的 
         V view 视图层 ，页面展示的内容，特别厚重,业务逻辑部署在这里
         C controller 控制层 ，特别薄弱，只是实现了路由的功能
         代表Backbone (基本被淘汰)
  - MVVM    M model 数据模型层 ，用来存放数据的 
            V view 视图层 ，页面展示的内容
            VM  viewModel 视图模型 ，业务逻辑主要部署在这里
            angularJS(viewModel可以认为是$scope)
            vue

## 什么是 AngularJS？

```
    AngularJS 使得开发现代的单一页面应用程序（SPAs：Single Page Applications）变得更加容易。
    AngularJS 把应用程序数据绑定到 HTML 元素。
    AngularJS 可以克隆和重复 HTML 元素。
    AngularJS 可以隐藏和显示 HTML 元素。
    AngularJS 可以在 HTML 元素"背后"添加代码。
    AngularJS 支持输入验证。
    AngularJS 扩展了 HTML
    AngularJS 通过 ng-directives 扩展了 HTML。
    AngularJS 模块（Module） 定义了 AngularJS 应用。
    AngularJS 控制器（Controller） 用于控制 AngularJS 应用。
    当网页加载完毕，AngularJS 自动开启。
```
  
##  angularJS的双向数据绑定
```
     - 双向数据绑定 ，主要体现在ng-model
       - angularJS生命周期:两个阶段
         - 编译阶段 ：对DOM元素进行转换   ng-repeat 迭代
         - 链接阶段 ：把作用域和DOM进行绑定
         - 编写自定义指令的时候，编译阶段很罕见，主要用到的就是链接阶段
```

## angular两个基本概念

```
    1. 指令 （内置指令）
        1)在我们的html结构中以 ng- 或者 data-ng- 为前缀的都是我们angular的内置指令
        2)是绑定在我们DOM元素上的一个函数
        3)同一个DOM元素上的指令有优先级的问题

    2. 框架的核心功能之一数据绑定 表达式 {{ }} 两个嵌套的花括号就是angular表达式
        1)它是ng-bind 的缩写
        2)可以把数据绑定到HTML，类似Javascript代码片段，可以包含文字、运算符和变量，通常在绑定数据中用到，表达式可以绑定数字、字符串、对象、数组。

    3. ng-app
        1)告诉angular，整个浏览器都归它管；
        2)会产生一个$rootScope， 根作用域

    4. ng-init
        1)初始化数据，在其作用域内可以调用，
        2)初始化的值可以使是数字，数组等
        3)如果没有加单引号就是我们scope上的值
        4)只用于小的demo，真正的项目不会在这里初始化值的；
```

## AngularJS 指令

```
    ng-app    指令定义一个 AngularJS 应用程序。告诉 AngularJS某元素是 AngularJS 应用程序 的"所有者"。 
    ng-controller    定义了当前应用下的控制器。 同意app下可以定义多个controller，会产生不同的作用域，类似于原型继承的机制。
    ng-model  指令把元素值（比如输入域的值）绑定到应用程序实现双向数据绑定。（input select 和textarea或者自定义表单）
    ng-bind   指令把应用程序数据绑定到 HTML 视图。  
    ng-repeat 遍历他所存在的那个DOM元素，每次遍历生成的DOM元素都会形成一个私有作用域
        - 与原生js的区别
            - 1)不用获取DOM元素
            - 2)不用拼接字符串
            - 3)不用for循环
        - {{$index}} 当前项的索引
        - {{$first}} boolean 值，是否为第一项
        - {{$last}}  boolean 值，是否为最后一项
        - {{$odd}}   boolean 值，是否索引为奇数
        - {{$even}}  boolean 值，是否所索引为偶数
    ng-class  给DOM元素动态添加样式类名的指令 值为对象形式
        - 语法有两种
            - 1)  ng-class="{true:'c1',false:'c2'}[flag]"  如果flag为true就显示C1的样式，如果flag为false就显示c2的值
            - 2)  ng-class="{bg1:flag1,c1:flag2}" 如果flag1为true时，bg1有效，否则就无效；flag2同理
    ng-click  给当前元素绑定一个点击事件，当点击的时候执行其后面的方法
    ng-if     值为boolean类型的值 true DOM元素存在 false DOM元素不存在
    ng-show   值为boolean类型的值 true DOM元素显示 false DOM元素不显示
    ng-hide   跟ng-show相反 值为boolean类型的值 false DOM元素显示， true DOM元素不显示
                （ng-show，ng-hide 用CSS样式控制的）
    ng-include 引入外部的html片段到当前的应用中
    ng-style  给DOM元素增加行内样式的指令  值为对象形式的css样式类
    ng-href   超链接  与href区别就是：只有我们的链接加载完成之后才能点击链接进行跳转
    ng-src    加载图片  与src区别就是：只有我们的图片加载完成之后才能出现图片
    ng-model-options   和 ng-model 配合使用的  当光标离开的时候页面才会出现我们选择的结果 
                每次输入数据的时候angularJS,是时刻监听这变化，只是没有改变页面效果，当光标离开的时候，再次触发，angular的检查机制，进行页面的刷新
    ng-change 监听ng-model对应的变量所存储的数据的变化，要用ng-change,一定要有ng-model
    ng-copy   当我使用复制命令的时候，触发ng-copy后面的方法
    ng-paste  当我们使用粘贴命令的时候，触发ng-paste 后面的方法
    ng-cut    当我们使用剪切命令的时候，会触发ng-cut后面的方法
    ng-disabled  如果为true 是不可点击状态，false为点击状态
    ng-options   用在select标签上，循环显示出option的值
```

## angular 过滤器

```
    1. currency 货币过滤器
        <input type="text" ng-model="name">
        {{name | currency : '￥'}}
        {{name | currency : '£'}}
    2. date 日期过滤器
        {{1469603978903 |date: 'yyyy-MM-dd HH:mm:ss' }}
    3. json 把普通的对象转换成json格式的对象
        {{ {name:'lalala'} | json}}
    4. uppercase lowercase
        <input type="text" ng-model="name">
        {{name | uppercase}}
        {{name | lowercase}}
    5. number 定义小数点的位数
        <input type="text" ng-model="name">
        {{name | number:2}}
    6. limitTo 截取字符串的长度，数组的长度
        {{'鹅鹅鹅鹅鹅鹅' | limitTo:2}}
        {{[1,2,3,4] | limitTo:2}}
    7.filter 
       1) 给定的数组中过滤器其子集以一个新的数组的形式返回 例如用于搜索框
       2) 它的第一个参数可以是字符串，也可以是对象还还可以是函数（用来在数组中选择元素）
       3) 都二个参数有三种情况：true(严格比较) false(不区分大小写的比较) 函数(函数的结果为真就接受这个元素)
    8. orderBy 
        1)可以用表达式对指定的数组进行排序
        2)接受两个参数 第一个必须(函数 字符串 数组) 确定数组排序的方向 第二个可选 （为true 结果进行反转）
```

## 常用的方法

```
    1.  uppercase lowercase 转换大小写
        var str = angular.uppercase('liuwei');/*转换为大写*/
        var str1 = angular.lowercase('liuwei');转换为小写
    2.  equals   相当于 ===
        var flag=angular.equals(NaN,NaN);返回结果为true
        var flag1=angular.equals(/^\d+$/,/^\d+$/);返回结果为true
    3.extend 继承
        var obj1={name:'liuwei'},obj2={age:8};
        angular.extend(obj1,obj2);
    4.copy 复制
        var obj1={name:'liuwei'},obj2={age:8};
        angular.copy(obj1,obj2);
    5.toJson(JSON.stringify)  fromJson(JSON.parse)
        var obj3={name:'zhangsan'};
        var obj4 = angular.toJson(obj3);
        var obj5 = angular.fromJson(obj4);
    6.forEach 遍历循环数组
        参数 1）要遍历的数组，2）function，3)改变this指向
        var arr=['zhangsan','lisi','wangwu'];
        var arr1={name:'liuwei'};
        angular.forEach(arr,function (item,index) {
            console.log(this.name, item ,index)
        },arr1);
    7.bind  预处理this的指向
        参数1）this指向，参数2）要改this的方法fn，参数3）及之后的参数 都是给fn传递的参数
        var obj6={name:'liuwei'};
        function fn(age){
            console.log(this.name+"已经"+age+"岁了");
        }
        var fn1 = angular.bind(obj6,fn,8);
        fn1();
    8.isArray isFunction isObject 返回的都是boolean类型 true 或者false
        var flag2 = angular.isObject(null);

    9.angular.element() 转换原生的DOM元素为jQuery对象 虽然内置了jQuery但是不能直接用
    10. angular.bootstrap  手动开启ng-app
        1) 获取的页面中的DOM元素，
        2) 数组中加入要在哪一个模板下执行
```

## angular注入的方法

```
    模块与模块之间是可以依赖注入的。
    1. $scope.$apply();
        实现强制刷新的作用，让页面中的变量对应的值跟着模型上的该变而发生改变;
    2. $interval，$timeout
        angular自带定时器，使用方法同原生js
    3. $scope.$watch()
        监听该作用域中数据的变化
        $watch 第一个参数是存储数据的变量也可以是一个函数，取得是他的返回值，第二个为回调函数
        回调函数中第一个参数新的value的值，第二个参数是旧的value值
    4. $scope.$on
        1. $on 监听的是$emit 或者 $broadcast 所传播的事件
        2. 参数1)$emit 或者 $broadcast 所传播的事件名称，参数2)监听事件触发的回调函数，回调函数的参数 1 事件对象，后面的参数是 由$emit 或者 $broadcast传播回来的值
        3. 主要用来实现不同作用域之间的数据传递
    5. $scope.$emit
        发射事件 (从子集作用域向父集作用域发射事件)
        第一参数是事件的名字（自己起），第二参数是要传递的数据...即后面的参数都是要传递的数据
    6. $scope.$broadcast
        广播事件 （从父集作用域向子集作用域广播事件）
        第一参数是事件的名字（自己起），第二参数是要传递的数据...即后面的参数都是要传递的数据
        必须有一个触发事件，当事件被触发的时候，广播才可以执行的
    7. $scope.$http
        请求后台数据的服务 封装了jquery的部分方法，可以实现异步请求 
        结果是一个httpPromise,返回值成功时调用success，失败时调用error
        $http.get()  $http.delete()
            参数 ：1) url地址 ：字符串
                  2) config ：配置项
        $http.post()  $http.put()
            参数 ：1) url地址 ：字符串
                  2) data : 请求体
                  3) config ：配置项
        $http.jsonp()
        参数：url 路径参数 回调函数必须等于 JSON_CALLBACK
    8. $scope.$rootScope
        angular自带的顶级作用域，少量的数据可以绑定到上面
    9. $scope.$filter
        angular自带的过滤器，可以使用angular内定的过滤方式 $filter('uppercase')($scope.name)
        自定义过滤器则是通过 过滤器的名字+Filter后缀，注入到函数中
```

## angular自定义指令

```
    页面使用时要用 - 将自定义指令的驼峰命名改变 liuweiDr --> liuwei-dr
    <!--E-->
    <liuwei-dr>8岁了</liuwei-dr>
    <!--C-->
    <div class="liuwei-dr"></div>
    <!--A-->
    <div liuwei-dr></div>
    <!--M-->
    <!-- directive:liuwei-dr -->
```

```javascript

    var app2 = angular.module('myApp2', []);
    app2.directive('liuweiDr',function () {
    参数1 ，自定义指令的名字 ；参数2，函数，返回一个对象（定义指令的属性）
        return{
            template:'<div>\
            <span ng-transclude></span></div>',
            //定义指令的模板
            //如果模板是多行的，以\为结尾 或者 直接使用字符串拼接
            templateUrl:'templateUrl.html',
            //如果用在注释中 templateUrl.html ，模板中只能有一个顶级标签(最外层只能有一个标签)
            //引入一个模板
            restrict:'ECMA',
              //规定自定义指令用的位置
              //默认值是EA
              //E  element 元素标签 ，用于标签
              //C  class   样式类名
              //M  comment  可以用在注释
              //A  attribute 用在属性上
            replace:true,
            //替换原有的DOM元素
            transclude:true,
            //包含页面中元素中的内容，和ng-transclude一起使用
            scope:true,
            //为true 会生成自己独立的作用域 ，为false会自动找上级作用域
            //@ 取得是拥有自定义指令的 xxx属性所对应的字面量的值
            //= 取得是拥有自定义指令的 xxx属性对应的name变量的值
            //& 在这里最终取得是指定作用域中的函数方法
            link:function (scope, element, attrs) {
                //实现链接阶段的功能 指定当前自定义指令中使用的方法
                //属于私有部分，不能被其他的指令获取到
            },
            controller:function ($scope, $element, $attrs, $transclude) {
                //定义可复用的公用部分，可以引入到其他自定义指令中，实现自定义指令之间的交互
                //如果想在其他指令里面引用，首先用require把需要引用controller所在的指令引入进来，然后在link里面添加第四个参数（就是controller的一个实例）
            },
            compile: function (tElement, tAttrs) {
                //tElement : template element 是jQuery对象 -> 原始的DOM节点，
                //tAttrs  : template attribute -> 原始的DOM节点的属性
            }
        }
    });
```

## angular 服务

```
    provider
    最强大的定义服务的一个方法，并不是最常用的一种方法
    当注入服务的时候获取的值，定义的函数中的实例中的this.$get方法返回的一个对象(最终获取的是对象)
    用provider 定义的服务，可以调用配置函数 config
    factory
    把provider定义服务时，$get的返回值，直接作为函数的返回值，不在存在$get ,是项目中最常种的一个方法，
    不能使用配置函数 config
    service
    注入服务的时候获取的是定义的服务的一个实例
    不可以使用配置函数 config
```

## 其他angular插件

```
    angular拥有众多的插件，可以大大提升开发效率
    例如：angular-route
        1.将angular-route.js文件引进来
        2.找到该文件的模板名字，依赖到操作的模板中
        3.通过config配置的单页面路由进行页面之间的跳转 注入$routeProvider
        4.路径中通过template,templateUrl控制显示内容，通过controller添加相应的控制器。还可以设置默认的跳转地址 otherwise('/')
        4.页面写入ng-view标签，限定显示区域
        5.页面跳转链接地址需要添加 # 限定为单页面跳转 以免跳转到根目录
```

## 解决页面加载时闪烁的问题

```
    - ng-bind 只能跟一个属性    {{}}是ng-bind的缩写，
    - ng-bind-template 可以跟多个属性
    - ng-cloak 1)添加ng-cloak指令 2)添加样式类名 class="ng-cloak"
             3) 添加样式 .ng-cloak{dispaly:none;}
    最常用的是直接写 ng-cloak
```

## 详解directive中的scope

```


```

## angular.element

```
将DOM元素或者html字符串，包装成一个jquery对象，是angular自带的方法（jqLite）
格式：angular.element(element);
element:需要被包装成jquery对象的dom元素或者html字符串
jqLite提供的方法：
	- addClass()
	- after()
	- append()
	- attr()
	- bind() 不支持命名空间，选择器和事件数据
	- children() 不支持选择器
	- clone()
	- contents()
	- css()
	- data()
	- empty()
	- eq()
	- find() 限定通过标签名称查找
	- hasClass()
	- html()
	- next() 不支持选择器
	- on() 不支持命名空间或选择器
	- off() 不支持命名空间或选择器
	- one() 不支持命名空间或选择器
	- parent() 不支持选择器
	- prepend()
	- prop()
	- ready()
	- remove()
	- removeAttr()
	- removeClass()
	- removeData()
	- replaceWith()
	- text()
	- toggleClass()
	- triggerHandler() 通过一个虚拟事件对象来处理
	- unbind() 不支持命名空间
	- val()
	- wrap()
事件：
	- $destory:当dom呗移除时，angular拦截所有的jqLite或者jqeuryDom对象，贤惠api和事件。这个事件能在dom呗移除前来清除任何dom上的相关api和事件。
方法：
	- controller(name):检索当前元素或其父元素的controller,默认情况下，检索与ngController相关的controller，如果name是已驼峰模式命名的指令名称，那么这个指令的controller就是这样（如‘ngModel’）
	- injector():检索当前元素或其父元素的依赖注入
	- scope(): 检索当前元素或其父元素的scope
	- isolateScope():如果有一个scope直接附着在当前元素，检索一个隔离的scope，这仅用于元素包含一个创建了新的隔离的scope的指令，这个元素调用scope() 总是返回原来的非隔离的scope
	- inheritedData():和data一样，但是会沿着dom走到值呗找到或者走到顶级dom元素，（由此课件，应该是向上传播了）
### 在controller中操作dom是要剁手的。如果要操作建议通过指令操作。
```
### angular控制器问题
	1.在使用自定义指令时，不要在指令中以及指令内嵌的页面中重复添加相同的controller名称，会出现数据重复加载的问题。所以二选一。
    2.设置顶级变量后也会有可能因为组件作用域的问题造成无法共享对应值，最好是把每个组件都设置单独的作用域，使用scope属性传值。

----------------------------------------

# 官方文档翻译

## ng功能组件

|name|description|format|
|:-----|:-----|:-----|
|angular.lowercase|将指定的字符串转换为小写|1.7被弃用，格式为：angular.lowercase(string);|
|angular.uppercase|将指定的字符串转换为大写|1.7被弃用angular.uppercase(string);|
|angular.forEach|调用迭代器对obj的每一项进行迭代|格式为：angular.forEach(values,function(value,key){}|
|angular.extend|扩展对象，可以指定多个src对象到指定的dst对象上|格式为:angular.extend(dst, src);如果想要保留原有对象，可以在第一个参数位置加一个空对象，例如angular.extend({}, object1, object2)|
|angular.merge|深度扩展对象，同样可以指定多个src对象到指定的dst对象上|angular.merge(dst, src);|
|angular.noop|一个函数可以执行任何操作|angular.noop()|
|angular.identity|一个函数，返回第一个参数|格式为：angular.identity(value);|
|angular.isUndefined|判断是否是undefined|angular.isUndefined(value);|
|angular.isDefined|判断是否defined|angular.isDefined(value);|
|angular.isObject|判断是否对象|格式为：angular.isObject(value);|
|angular.isString|判断是否字符串|格式为：angular.isString(value);|
|angular.isNumber|判断是否数字|格式为：angular.isNumber(value);|
|angular.isDate|判断是否日期|angular.isDate(value);|
|angular.isArray|判断是否数组集合|angular.isArray(value);|
|angular.isFunction|判断是否函数方法|格式为：angular.isFunction(value);|
|angular.isElement|判断是否dom元素|
|angular.copy|创建一个深度拷贝的源，应该是对象或数组|格式为angular.copy(指定的源, 复制的目标);|
|angular.equals|判断两个值是否一样，支持值类型，正则，数组和对象|格式为：angular.equals(o1, o2); 相当于===。但在这里两个NaN是true，两个正则也是true|
|angular.bind|函数绑定，返回一个函数调用，允许带参。这一特性也成为部分应用，有别于函数局部套用。|格式为angular.bind(上下文对象, fn, 可选prebound方法);|
|angular.toJson|格式化为json格式的字符串输入|angular.toJson(obj, pretty可选);pretty如果设置为true,那么JSON输出将包含换行和空白。如果设置为int,JSON输出将包含许多空间/压痕。|
|angular.fromJson|反序列化json字符串|格式为：angular.fromJson(json);|
|angular.bootstrap|手动按需加载angular的应用|格式为angular.bootstrap(指定dom元素, 引用模块名称,可选应用程序配置对象默认false);|
|angular.reloadWidthDebugInfo|重新加载当前应用的调试信息，优先级大于$compileProvider.debugInfoEnabled(false)|
|angular.injector|创建一个注入对象用来检索服务和依赖注入|格式为：angular.injector(模块名或模块列表, [strictDi]默认false);|
|angular.element|将原始的dom元素包装成jquery对象|格式为angular.element(element);}
|angular.module|全局的模块，任何地方都可以创建，注册和检索。所有的模块（包括第三方模块）都应该给应用程序使用这种机制注册|angular.module(name, [requires], [可配置方法]);|

### angular.element
	Angular's jqLite提供了以下方法：
    addClass(),
    after(),
    append(),
    attr(),
    bind(),
    children(),
    clone(),
    contents(),
    css(),
    data(),
    detach(),
    empty(),
    eq(),
    find(),
    hasClass(),
    html(),
    next(),
    on(),
    off(),
    one(),
    parent(),
    prepend(),
    prop(),
    ready(),
    remove(),
    removeAttr(),
    removeClass(),
    removeDate(),
    replaceWidth(),
    text(),
    toggleClass(),
    triggerHandler(),
    unbind(),
    val(),
    wrap().
    除此之外angular还提供了以下方法：
    1.$destroy 用于拦截所有jqLite和jQuery的dom api对节点的破坏性删除。
    2.controller(name)获取当前元素或者其父辈的控制器，默认情况下检索控制器于ngController相关指令。
    3.injector() 检索当前元素和其父辈的注入
    4.scope() 检索当前元素或父辈的作用域范围
    5.isolateScope() 检索一个隔离范围，如果有一个隔离范围附加到了当前元素上，那么应该使用getter元素包含一个指令，启动一个新的分离范围。调用这个scope时返回的总是元素的non-isolate。
    6.inheritedDate() 方法等同于data(),但是走的是dom，直到找到一个值或者父元素。

## directive
a
	
    修改默认行为的html标签，默认操作时防止href属性是空的。动态创建href属性的标签，详见ngHref指令。这个指令的优先级为0。
    
form

	一个实例化的FormController指令，如果指定了name属性，那么会以控制器形式发布到这个名字下的作用域范围内。
    别名是：ngForm，在angular中允许被嵌套，外部形式和他的子级都是有效的。由于浏览器不允许出现嵌套的form标签，所以angular提供了ngForm指令，表现出相同的形式，但支持嵌套。
    ngForm中的CSS类：
    1.ng-valed表单设置是有效的
    2.ng-invalid表单设置是无效的
    3.ng-pending表单设置是等待
    4.ng-prisine表单设置是原始的
    5.ng-dirty表单已经被修改过
    6.ng-submitted表单被提交过
    7.ng-animate 添加和删除的时候，可以检测到每一个类。
    提交表单和阻止默认动作
    angular的应用程序形式不同与其他往返程序，他会让浏览器不能将表单提交到一个完整的页面重载，将数据发送到服务器。而不是像其他一些js逻辑应该触发应用程序特定的方式才能处理表单提交。
    出于这个原因，angular组织了表单提交到服务器的默认动作,chufei form元素有一个动作属性指定。
    可以使用以下两种方式指定提交：
    	1.ngSubmit指令
    	2.ngClick指令的第一个按钮或输入字段类型提交（输入type=submit）
    	为了防止出现多次执行，只允许使用一个ngSubmit或者ngClick指令
    表单提交规范：
    	如果只有一个输入字段进入即可出发表达提交(ngSubmit)
        如果一个表单没有2个或2个以上的输入字段和按钮或者type=submit的按钮，按下enter键也不会出发提交
        如果有一个或多个输入字段或多个按钮或type=submit的按钮，按下enter键将出发单击并处理程序，在第一个按钮和type=submit的ng-click和ng-submit封闭形式中处理函数
        任何ngModelOptions更改提交表单时将立即封闭。注意ngClick事件发生前的模型更新。实用ngSubmit访问更新的模型
    动画
    	动画是在ngForm中任何相关的css类被添加和删除时出发。这些类有：ng-pristine，ng-dirty，ng-invaled和ng-valid以及任何表单验证。动画在ngClass，ngForm类似于他们的工作方式类似于css的转换关键帧和js动画。
    	下面的事例显示了一个简单的方法，这种方法利用css转换风格表单元素，呈现为无效后验证：
        
```css
//be sure to include ngAnimate as a module to hook into more
//advanced animations
.my-form {
  transition:0.5s linear all;
  background: white;
}
.my-form.ng-invalid {
  background: red;
  color:white;
}
```

    指令信息
    	这个指令的执行优先级为0
	使用
    	元素
        
```html
<form
  [name="string"]>
...
</form>
```
	参数
|Param|Type|Details|
|:-----|:-----|:-----|
|name(optional)|string|表格的名称，如果指定，控制器将发送到相应的名字范围|

input
	
    HTML输入元素控制。当ngModel一起使用时，他体统了数据绑定，输入控制和验证。输入控制遵循HTML5输入类型和填写内容，验证老版本浏览器对HTML5行为的支持。
    注意：不是每个功能提供的输入类型都可用。具体来说，数据绑定和事件处理是通过ng-model。input[file]是不支持的
    指令信息
    	这个指令的执行优先级为0
    使用元素
    
```html
<input
  ng-model="string"
  [name="string"]
  [required="string"]
  [ng-required="boolean"]
  [ng-minlength="number"]
  [ng-maxlength="number"]
  [ng-pattern="string"]
  [ng-change="string"]
  [ng-trim="boolean"]>
...
</input>
```
	参数
|Param|Type|Details|
|:-----|:-----|:-----|
|ngModel|string|可运行的angular数据绑定表达式|
|name(optional)|string|属性名形式控制输入|
|required(optional)|string|必填|
|ngRequired(optional)|boolean|必填项，如果设置为所需值为true|
|ngMinlength(optional)|number|输入值得最小长度|
|ngMaxlength(optional)|nnumber|输入值的最大长度|
|ngPattern(optional)|string|匹配模式，参数可以是正则表达式也可以是字符串(字符串会被转化为一个RegExp，^和&字符串包装)，用来确保输入的值能够匹配指定的正则表达式。注意：避免使用RegExp的g标志，因为他会导致每个连续搜索开始在索引的搜索匹配，因此不考虑整个输入值|
|ngChange(optional)|string|当输入内容发生变化的时候执行对应的angular表达式|
|ngTrim(optional)|boolean|当设置为false时不会自动处理，会自动忽略type=password类型，默认是true|

input[checkbox] -input in nodule ng
	
    html checkbox.
    指令信息
    	这个指令的执行优先级为0
    使用元素
    
```css
<input type="checkbox"
       ng-model="string"
       [name="string"]
       [ng-true-value="expression"]
       [ng-false-value="expression"]
       [ng-change="string"]>
```
	参数
|Param|Type|Details|
|:-----|:-----|:-----|
|ng-model|string|angular数据表达式|
|name(optional)|string|可控制的属性名|
|ngTrueValue(optional)|expression|设置什么时候可以选中|
|ngFalseValue(optional)|expression|设置什么时候不可以选中|
|ngChange(optional)|string|当输入的内容发生变化的时候触发|

input[date]
	输入日期验证和转换。当浏览器不支持HTML5日期输入时，将使用一个文本元素。载这种情况下，文本必须输入一个有效ISO-8601日期格式(yyyy-MM-dd)，例如2009-01-06.因为许多现在浏览器还不支持这个输入类型，重要的是在预期的输入格式中通过一个占位符或标签为用户提供提示。
    模型必须是一个对象，否则会抛出一个错误。无效的日期对象(取得时间的方法getTime为NaN)将会出现一个空字符串
    要使用时区来读写日期可以定义在模型中，可使用ngModelOptions实例。默认情况是浏览器的时区。
	指令信息
    	这个指令的执行优先级为0
    使用元素
    
```css
<input type="date"
       ng-model="string"
       [name="string"]
       [min="string"]
       [max="string"]
       [ng-min=""]
       [ng-max=""]
       [required="string"]
       [ng-required="string"]
       [ng-change="string"]>
```

	参数
|Param|Type|Details|
|:-----|:-----|:-----|
|ngModel|string|angular数据表达式|
|name(optional)|string|可控制的属性名|
|min(optional)|string|设置最小关键错误验证，如果输入的值小于了最小值这一定是一个有效的iso日期字符串(yyyy-MM-dd)，可以使用属性过滤min="{{minDate|date:'yyyy-MM-dd'}}".注：min也会增加html5约束验证|
|max(optional)|string|设置最大关键错误验证，如果输入的值大于了最大值这一定是一个有效的iso日期字符串(yyyy-MM-dd)，可以使用属性过滤max="{{maxDate|date:'yyyy-MM-dd'}}".注：max也会增加html5约束验证|
|ngMin(optional)|date,string|设置最小验证约束的日期/ ISO日期ngMin表达式的求值结果为字符串。注意,它不用设置最小属性。|
|ngMax(optional)|date,string|设置最大验证约束日期/ ISO日期验证表达式约束日期字符串ngMax。注意,它不用设置max属性。|
|required(optional)|string|必填项|
|ngRequired(optional)|string|当 ngRequired 表达式计算结果为 true 时向元素添加必需的属性和所需的验证约束。使用 ngRequired 而不是要求当你想要的数据绑定到所需的属性。|
|ngChange(optional)|string|当用户输入的时候，值发生改变的时候触发|

input[datetime-local]
	
	输入日期时间验证与转型。尚不支持 HTML5 日期输入的浏览器，将使用一个文本元素。在这种情况下，必须在有效的 ISO 8601 本地日期时间格式输入的文本 (yyyy-毫米-ddTHH:mm:ss)，例如︰ 2010年-12-28T14:57:00。该模型必须始终是一个 Date 对象，否则角将抛出一个错误。无效日期对象 （日期的 getTime() 是南） 将呈现为一个空字符串。可以使用 ngModelOptions 来定义时区用于读/写日期实例模型中。默认情况下，这是浏览器的时区。
    指令信息
    	这个指令的执行优先级为0
    使用元素
    
```css
<input type="datetime-local"
       ng-model="string"
       [name="string"]
       [min="string"]
       [max="string"]
       [ng-min=""]
       [ng-max=""]
       [required="string"]
       [ng-required="string"]
       [ng-change="string"]>
```

	参数
|Param|Type|Details|
|:-----|:-----|:-----|
|ngModel|string|angular数据绑定表达式|
|name(string)|string|控件的属性名称|
|min(string)|string|如果输入的值是小于最小值，设置时间会出错。这必须是一个有效的 ISO 日期时间格式 (yyyy-MM-ddTHH:mm:ss)。您还可以使用此属性内的插值 (如 min ="{{minDatetimeLocal | 日期:'yyyy-MM-ddTHH:mm:ss 的}}")。请注意这 min 还将添加本机 HTML5 约束验证。|
|max(string)|string|设置最大值验证，如果输入的值大于最大值则报错。这必须是一个有效的 ISO 日期时间格式 (yyyy-MM-ddTHH:mm:ss)。您还可以使用此属性内的插值 (例如最大 ="{{maxDatetimeLocal | 日期:'yyyy-MM-ddTHH:mm:ss 的}}")。请注意，最大值还将添加本机 HTML5 约束验证。|
|ngMin(string)|date,string|将最小验证错误值设置为日期 / ngMin 表达式结果为ISO 日期时间字符串 。请注意它不设置 min 属性。|
|ngMax(string)|date,string|设置最大验证错误值为日期 / ngMax 表达式结果为ISO 日期时间字符串 。请注意它不设置 max 属性。|
|required(string)|string|如果不输入值就会出错。必填项|
|ngRequired(string)|string|当 ngRequired 表达式结果为 true 时向元素添加必需的属性和所需的验证约束。使用 ngRequired 而不是要求当你想要的数据绑定到所需的属性。|
|ngChange(string)|string|当输入的值发生改变的时候触发|

input[email]
	
    一个设置电子邮件验证的属性，如果输入的值不是一个有效的电子邮件地址会报错。注：这里使用的是一个正则表达式来验证在页面中的输入。如果需要更加严格的验证（如一个顶级域名）你需要使用ng-pattern模式或者修改内置的验证
    指令信息
    	这个指令的执行优先级为0
    使用元素
    
```css
<input type="email"
       ng-model="string"
       [name="string"]
       [required="string"]
       [ng-required="string"]
       [ng-minlength="number"]
       [ng-maxlength="number"]
       [pattern="string"]
       [ng-pattern="string"]
       [ng-change="string"]>
```

	参数
|Param|Type|Details|
|:-----|:-----|:-----|
|ngModel|string|angular的数据绑定表达式|
|name(optional)|string|控件的属性名称|
|required (optional)|string|必填项|
|ngRequired(optional)|string|当 ngRequired 表达式计算结果为 true 时向元素添加必需的属性和所需的验证约束。使用 ngRequired 而不是要求当你想要的数据绑定到所需的属性。|
|ngMinlength(optional)|number|如果该值小于 minlength，设置 minlength 验证时会报错。|
|ngMaxlength(optional)|number|如果值的长度超过 maxlength，设置 maxlength 验证时报错。将属性设置为负或非数字值，允许查看任意长度的值。|
|pattern(optional)|string|类似ngPattern，除了是属性值是实际的字符串，其中包含江北转换为ngPattern执行和正则表达式|
|ngPattern(optional)|string|pattern验证错误的属性，如果ngModel的 $viewValue发现输入值与正则表达式不匹配会报错。如果正则表达式计算结果为一个正则表达式对象，可以直接使用。如果表达式的结果为一个字符串，那么在计算后他将被转换为RegExp('^abc&')。注：避免在正则中使用g，因为他会导致每次都搜索上次匹配到的内容，因此不考虑在整个输入值时使用|
|ngChange(optional)|string|当输入的值发生改变的时候触发|

input[month]

	输入的月份验证和转换。尚不支持html5中月份输入的浏览器，将使用一个文本元素。在这种情况下文本必须输入一个有效的iso8601的月份格式(yyyy-MM).该模式必须始终是一个date对象，否则angular将抛出一个错误。错误的日期对象（日期的getTime()是NaN）将显示为一个空字符串。如果模式未设置为第一个月份，一个视图模型更新会将它设置为第一个月份。可以使用ngModelOptions来定义时区用于读写日期模型。默认情况下为浏览器的时区。
    指令信息
    	这个指令的执行优先级为0
    使用元素

```javascript
<input type="month"
       ng-model="string"
       [name="string"]
       [min="string"]
       [max="string"]
       [ng-min=""]
       [ng-max=""]
       [required="string"]
       [ng-required="string"]
       [ng-change="string"]>
```

    参数
|Param|Type|Details|
|:-----|:-----|:-----|
|ngModel|string|angular的数据绑定表达式|
|name(optional)|string|控件的属性名称|
|min|string|如果输入的值小于min设置的值，则触发最小验证错误。 并且输入的值必须是有效的ISO月份格式（yyyy-MM）。 您还可以在此属性内使用插值（例如，min =“{{minMonth | date：'yyyy-MM'}}”）。 注，min也会自动添加HTML5自带约束验证|
|max(optional)|string|如果输入的值大于max设置的值，则触发验证错误。并且输入的值必须是有效的ISO月份格式（yyyy-MM）。您还可以在此属性（例如max="{{maxMonth | date:'yyyy-MM'}}"）中使用插值。注，max也会自动添加本机HTML5自带约束验证|
|ngMin(optional)|date/string|将min设置为最小验证约束的IOS标准日期，ngMin表达式的求值结果为字符串。注,设置ngMin后不用设置min属性。|
|ngMax(optional)|date/string|将max设置为最小验证约束的IOS标准日期，ngMax表达式的求值结果为字符串。注,设置ngMax后不用设置min属性。|
|required(optional)|string|必填项|
|ngRequired(optional)|string|当ngRequired表达式的求值结果为true时，向元素添加required属性和required验证约束。但使用ngRequired并不是 将值绑定到required属性上。|
|ngChange(optional)|string|当输入因用户与输入元素的交互而更改时，将执行Angular表达式。|

input[number]

	文本输入数字验证和转换，如果输入的值没有一个是有效的数字，那么需要设置错误提示。
    
```
	模型必须是数字类型的否则AngularJS将抛出一个错误。注意,字符串包含数字是不够的。有关更多信息,请参见numfmt错误文档,会给您一个模型的例子
```

	HTML5约束验证问题
    在浏览器中HTML5的规范。当输入[数字]与ngModelOptions.allowInvalid并没有像预期的那样工作。如果non-number进入输入中,浏览器会将输入的值作为一个空字符串,这意味着ngModel视图/模型值和随后的范围值也将获取到的是一个空字符串。
    指令信息
    	这个指令的执行优先级为0
    使用元素

```javascript
	<input type="number"
       ng-model="string"
       [name="string"]
       [min="string"]
       [max="string"]
       [ng-min="string"]
       [ng-max="string"]
       [step="string"]
       [ng-step="string"]
       [required="string"]
       [ng-required="string"]
       [ng-minlength="number"]
       [ng-maxlength="number"]
       [pattern="string"]
       [ng-pattern="string"]
       [ng-change="string"]>
```

	参数
|Param|Type|Details|
|:-----|:-----|:-----|
|ngModel|string|angular的数据绑定表达式|
|name(optional)|string|当前input的名称|
|min(optional)|string|设置最小输入数字，如果输入的数字小于设置数字会有提示|
|max(optional)|string|设置最大输入数字，如果输入的数字大于设置数字会有提示|
|ngMin(optional)|string|类似最小输入数字，支持的是表达式，如果输入的数字小于ngMin设置的数字，会报错，但不会出发html5自带的验证约束|
|ngMax(optional)|string|类似最大输入数字，支持的是表达式，如果输入的数字大于ngMax设置的数字，会报错，但不会出发html5自带的验证约束|
|step(optional)|string|如果输入的值不符合约束，可以设置步骤来验证错误|
|ngStep(optional)|string|支持表达式。类似于step，用于设置步骤验证操作。如果输入的值不符合ngStep约束,会报错但不触发HTML5验证约束，|
|required(optional)|string|必填项|
|ngRequired(optional)|string|当ngRequired表达式的求值结果为true时，向元素添加required属性和required验证约束。但使用ngRequired并不是 将值绑定到required属性上。|
|ngMinlength(optional)|number|设置最小的输入长度，如果输入的值小于ngMinlength设置的值则报错|
|ngMaxlength(optional)|number|设置最大的输入长度，如果输入的值大于ngMaxlength设置的值则报错|
|pattern(optional)|string|类似于ngPattern，但输入的值为实际的字符串，该字符串将被转化为正则表达式ngPattern指令|
|ngPattern(optional)|string|设置pattern的值，如果ngModel捕获到的值不匹配REGEXP，那么将给出属性值，如果表达式的求值结果为一个正则表达式对象，那么可以直接使用，如果表达式的值为字符串，那么将转化为一个regexp对象（例如,“abc”将被转换成新的正则表达式(“^abc美元$”）注意:避免使用RegExp g标志,因为它会导致每个连续搜索开始在索引的搜索匹配,因此不考虑整个输入值。|
|ngChange(optional)|string|当输入因用户与输入元素的交互而更改时，将执行Angular表达式。|

input[radio]

	html单选按钮
    指令信息
    	这个指令的执行优先级为0
    使用元素
    
```javascript
<input type="radio"
       ng-model="string"
       value="string"
       [name="string"]
       [ng-change="string"]
       ng-value="string">
```

	参数
|Param|Type|Details|
|:-----|:-----|:-----|
|ngModel|string|angular的数据绑定表达式|
|value|string|在ngModel被选中后获取的值，注意,只支持字符串值,即scope model需要一个字符串，当你需要使用复杂的模型(数量、对象,……)可使用ngValue|
|ngValue|string|以属性名的形式来监听控制器的输入|
|name(optional)|string|radio控件名称|
|ngChange(optional)|string|当输入因用户与输入元素的交互而更改时，将执行Angular表达式。|

input[range]

```
本机范围输入验证和转换。
model输入的必须是一个数字。
IE9和其他浏览器不支持一个文本输入没有任何默认值min, max和step返回范围类型。模型绑定、验证和解析数量仍然支持。
支持范围的浏览器(Chrome,Safari,Firefox,Edge)的input[range]标签,不允许输入无效的值。这意味着:
任何非数值值设置为(max/min)/2
任何输入的数值小于当前最小的值,或大于当前最大值，自动将值设置为最小/最大值。
此外,当前步骤是的权重很高,所以最近的输入值满足一个step就可以使用。)。
这对AngularJS有以下影响:
输入元素值应当反映当前的model的值,输入范围将绑定ngModel表达式的值,浏览器设置输入元素。例如,在下面输入< input type = "range" ng-model =”model.value”>,如果是应用程序集模型。value=null,浏览器将设置“50”的输入。AngularJS将模型设置为50,防止输入和model值不同步。
这意味着model范围将立即被设置为50 ngModel后初始化。这也意味着一系列输入可以从来没有所需的错误。
这不仅影响模型的变化值,但也值的min,max,step属性。当这些改变的方式会导致浏览器修改输入值时,AngularJS也将更新模型值。
自动调整参数也意味着输入元素不能有设置其他属性要求,比如min最小值或max最大值。
然而,step是目前只完全由Firefox实现。其他浏览器出现问题时会当成一个step，他们不能正确调整元素值,而是可能设置stepMismatch错误。如果是这样的话,AngularJS将设置步骤错误输入,并设置模型来定义。
注意，input(type=range)与ngMax,,ngMin,ngStep,不兼容。因为他们不用设置最小和最大的属性,这意味着浏览器不会基于他们的设置自动调节输入值,并将总是假设min= 0,max = 100,step= 1。
	指令信息
    	这个指令的执行优先级为0
    使用元素
    
```javascript
<input type="range"
       ng-model="string"
       [name="string"]
       [min="string"]
       [max="string"]
       [step="string"]
       [ng-change="string"]
       [ng-checked="expression"]>
```

	参数
|Param|Type|Details|
|:-----|:-----|:-----|
|ngModel|string|angular的数据绑定表达式|
|name(optional)|string|当前控件的属性名|
|min(optional)|string|设置最小验证以确保所输入的值大于最小值。可以插入。|
|max(optional)|string|设置最大验证以确保所输入的值小于最大值。可以插入。|
|step(optional)|string|设置step验证以确保所输入的值匹配step。可以插入。|
|ngChange(optional)|string|当输入因用户与输入元素的交互而更改时，将执行Angular表达式。|
|ngChecked(optional)|expression|如果表达式是true,那么检查属性的元素将被设置。注意:ngChecked ngModel不应一起使用。检出用ngChecked使用。|

input[text]

	标准的HTML文本输入与AngularJS数据绑定,继承了大部分的输入元素。
    指令信息
    	这个指令的执行优先级为0
    使用元素
    
```javascript
	<input type="text"
       ng-model="string"
       [name="string"]
       [required="string"]
       [ng-required="string"]
       [ng-minlength="number"]
       [ng-maxlength="number"]
       [pattern="string"]
       [ng-pattern="string"]
       [ng-change="string"]
       [ng-trim="boolean"]>
```

	参数
|Param|Type|Details|
|:-----|:-----|:-----|
|ngModel|string|angular的数据绑定表达式|
|name(optional)|string|当前控件的属性名|
|required(optional)|string|必填项|
|ngRequired(optional)|string|当ngRequired表达式的求值结果为true时，向元素添加required属性和required验证约束。但使用ngRequired并不是 将值绑定到required属性上。|
|ngMinlength(optional)|number|设置最小的输入长度，如果输入的值小于ngMinlength设置的值则报错|
|ngMaxlength(optional)|number|设置最大的输入长度，如果输入的值大于ngMinlength设置的值则报错|
|pattern(optional)|string|类似于ngPattern，但输入的值为实际的字符串，该字符串将被转化为正则表达式ngPattern指令|
|ngPattern(optional)|string|设置pattern的值，如果ngModel捕获到的值不匹配REGEXP，那么将给出属性值，如果表达式的求值结果为一个正则表达式对象，那么可以直接使用，如果表达式的值为字符串，那么将转化为一个regexp对象（例如,“abc”将被转换成新的正则表达式(“^abc美元$”）注意:避免使用RegExp g标志,因为它会导致每个连续搜索开始在索引的搜索匹配,因此不考虑整个输入值。|
|ngChange(optional)|string|当输入因用户与输入元素的交互而更改时，将执行Angular表达式。|
|ngTrim(optional)|boolean|如果设置为false，AngularJS不会自动输入。将忽略此参数input(type=password),它永远不会减少输入。默认是true|

input[time]

	输入时间验证和转换。当浏览器还不支持HTML5的时间输入,将使用一个文本元素。在这种情况下,文本必须输入一个有效的iso - 8601的当地时间格式(HH:mm:ss),例如:14:57:00。模型必须是一个dateObject。这总是会输出一个日期对象绑定到模型的January 1, 1970,或当地new Date(1970, 0, 1, HH, mm, ss).
	模型必须是一个模型必须是一个dateObject,否则AngularJS将抛出一个错误。无效的日期对象(取得时间的日期为bull)将呈现为一个空字符串。
	要使用的时区来读/写日期可以定义在模型中使用ngModelOptions实例。默认情况下,这是浏览器的时区。
	指令信息
    	这个指令的执行优先级为0
    使用元素
    
```javascript
<input type="time"
       ng-model="string"
       [name="string"]
       [min="string"]
       [max="string"]
       [ng-min=""]
       [ng-max=""]
       [required="string"]
       [ng-required="string"]
       [ng-change="string"]>
```

	参数
|Param|Type|Details|
|:-----|:-----|:-----|
|ngModel|string|angular的数据绑定表达式|
|name(optional)|string|当前控件的属性名|
|min(optional)|string|设置最小验证以确保所输入的值大于最小值。可以插入。|
|max(optional)|string|设置最大验证以确保所输入的值小于最大值。可以插入。|
|ngMin(optional)|string|类似最小输入数字，支持的是表达式，如果输入的数字小于ngMin设置的数字，会报错，但不会出发html5自带的验证约束|
|ngMax(optional)|string|类似最大输入数字，支持的是表达式，如果输入的数字大于ngMax设置的数字，会报错，但不会出发html5自带的验证约束|
|required(optional)|string|必填项|
|ngRequired(optional)|string|当ngRequired表达式的求值结果为true时，向元素添加required属性和required验证约束。但使用ngRequired并不是 将值绑定到required属性上。|
|ngChange(optional)|string|当输入因用户与输入元素的交互而更改时，将执行Angular表达式。|

input[url]
	URL文本输入验证。如果内容不是一个有效的url时可以设置url验证错误信息
    注意:input[url]使用一个正则表达式来验证url。如果你需要更严格的验证,您可以使用ng-pattern或修改内置正则验证器
	指令信息
    	这个指令的执行优先级为0
    使用元素
    
```javascript
	<input type="url"
       ng-model="string"
       [name="string"]
       [required="string"]
       [ng-required="string"]
       [ng-minlength="number"]
       [ng-maxlength="number"]
       [pattern="string"]
       [ng-pattern="string"]
       [ng-change="string"]>
```

	参数
|Param|Type|Details|
|:-----|:-----|:-----|
|ngModel|string|angular的数据绑定表达式|
|name(optional)|string|当前控件的属性名|
|required(optional)|string|必填项|
|ngRequired(optional)|string|当ngRequired表达式的求值结果为true时，向元素添加required属性和required验证约束。但使用ngRequired并不是 将值绑定到required属性上。|
|ngMinlength(optional)|number|设置最小的输入长度，如果输入的值小于ngMinlength设置的值则报错|
|ngMaxlength(optional)|number|设置最大的输入长度，如果输入的值大于ngMinlength设置的值则报错|
|pattern(optional)|string|类似于ngPattern，但输入的值为实际的字符串，该字符串将被转化为正则表达式ngPattern指令|
|ngPattern(optional)|string|设置pattern的值，如果ngModel捕获到的值不匹配REGEXP，那么将给出属性值，如果表达式的求值结果为一个正则表达式对象，那么可以直接使用，如果表达式的值为字符串，那么将转化为一个regexp对象（例如,“abc”将被转换成新的正则表达式(“^abc美元$”）注意:避免使用RegExp g标志,因为它会导致每个连续搜索开始在索引的搜索匹配,因此不考虑整个输入值。|
|ngChange(optional)|string|当输入因用户与输入元素的交互而更改时，将执行Angular表达式。|

input[week] 

	输入与一年中的有效星期验证和转换。浏览器还不支持HTML5周输入,将使用一个文本元素。在这种情况下,输入的文本必须在一个有效的iso - 8601周格式(yyyy-W##),例如:2013-w02。
	model必须是一个dateObject,否则AngularJS将抛出一个错误。无效的日期对象(取得时间的日期是null)将呈现为一个空字符串。
	要使用的时区来读/写日期可以定义在model中使用ngModelOptions实例。默认情况下,这是浏览器的当前时区。
	指令信息
    	这个指令的执行优先级为0
    使用元素
    
```javascript
<input type="week"
       ng-model="string"
       [name="string"]
       [min="string"]
       [max="string"]
       [ng-min=""]
       [ng-max=""]
       [required="string"]
       [ng-required="string"]
       [ng-change="string"]>
```

	参数
|Param|Type|Details|
|:-----|:-----|:-----|
|ngModel|string|angular的数据绑定表达式|
|name(optional)|string|当前控件的属性名|
|min(optional)|string|设置最小验证以确保所输入的值大于最小值。可以插入。|
|max(optional)|string|设置最大验证以确保所输入的值小于最大值。可以插入。|
|ngMin(optional)|string|类似最小输入数字，支持的是表达式，如果输入的数字小于ngMin设置的数字，会报错，但不会出发html5自带的验证约束|
|ngMax(optional)|string|类似最大输入数字，支持的是表达式，如果输入的数字大于ngMax设置的数字，会报错，但不会出发html5自带的验证约束|
|required(optional)|string|必填项|
|ngRequired(optional)|string|当ngRequired表达式的求值结果为true时，向元素添加required属性和required验证约束。但使用ngRequired并不是 将值绑定到required属性上。|
|ngChange(optional)|string|当输入因用户与输入元素的交互而更改时，将执行Angular表达式。|
    
ngApp
	使用该指令来自动引导(bootstrap)angularjs的应用。ngApp是指令指定的根元素的应用并且通常放置在根元素附近的页面-例如在<body>或<html>。
    当使用ngApp时有些事情需要注意：
    - angularjs只有一个应用，它可以被自动引导到HTML的document中。首先ngApp在document中运行，将用于定义根元素自动加载应用。运行多个应用程序在同一个HTML文档中必须使用手动angular.bootstrap引导代替它们使用。
    - angularjs应用不能够嵌套。
    - 不能在指令中在使用transclusion在ngApp元素上。该指令包括诸如ngif，nginclude，ngview。这种错位的APP和$rootelement，会导致动画停止运行，并使注入器无法获取外面的APP。
    您可以指定angularjs模块，用来做为根节点模块的应用。该模块将被加载$injector时会被自动加载。它应该包含应用代码或依赖于其他模块，将包含该代码。可以查看angular.module的更多信息。
    
```html
<div ng-app="ngAppStrictDemo" ng-strict-di>
    <div ng-controller="GoodController1">
        I can add: {{a}} + {{b}} =  {{ a+b }}

        <p>This renders because the controller does not fail to
           instantiate, by using explicit annotation style (see
           script.js for details)
        </p>
    </div>

    <div ng-controller="GoodController2">
        Name: <input ng-model="name"><br />
        Hello, {{name}}!

        <p>This renders because the controller does not fail to
           instantiate, by using explicit annotation style
           (see script.js for details)
        </p>
    </div>

    <div ng-controller="BadController">
        I can add: {{a}} + {{b}} =  {{ a+b }}

        <p>The controller could not be instantiated, due to relying
           on automatic function annotations (which are disabled in
           strict mode). As such, the content of this section is not
           interpolated, and there should be an error in your web console.
        </p>
    </div>
</div>
```

```javascript
angular.module('ngAppStrictDemo', [])
// BadController will fail to instantiate, due to relying on automatic function annotation,
// rather than an explicit annotation
.controller('BadController', function($scope) {
  $scope.a = 1;
  $scope.b = 2;
})
// Unlike BadController, GoodController1 and GoodController2 will not fail to be instantiated,
// due to using explicit annotations using the array style and $inject property, respectively.
.controller('GoodController1', ['$scope', function($scope) {
  $scope.a = 1;
  $scope.b = 2;
}])
.controller('GoodController2', GoodController2);
function GoodController2($scope) {
  $scope.name = 'World';
}
GoodController2.$inject = ['$scope'];
```

```css
div[ng-controller] {
    margin-bottom: 1em;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    border: 1px solid;
    padding: .5em;
}
div[ng-controller^=Good] {
    border-color: #d6e9c6;
    background-color: #dff0d8;
    color: #3c763d;
}
div[ng-controller^=Bad] {
    border-color: #ebccd1;
    background-color: #f2dede;
    color: #a94442;
    margin-bottom: 0;
}
```

用法
作为元素：(本指令可以作为自定义元素，但是IE会有限制--9+)。

```
<ng-app
  ng-app="angular.Module"
  [ng-strict-di="boolean"]>
...
</ng-app>
```

属性为:

```
<ANY
  ng-app="angular.Module"
  [ng-strict-di="boolean"]>
...
</ANY>
```

参数

|Param|Type|Details|
|:-----|:-----|:----|
|ngApp|angular.Module|可选的模块名称用于加载。|
|ngStrictDi(optional)|boolean|如果此属性存在于app element中时，注入器将被创建在“strict-di”严格模式。这意味着，该应用程序将不能调用功能，而不使用显式注释功能(且因此不适用于缩小)，如依赖注入的方法和有用的调试信息，将协助追踪这些错误的根源。|

ngBind

	该属性ngbind告诉angularjs在html元素中替换文字内容中指定的表达式的值，当表达式的值的变化时更新文本内容。
    通常，您不使用直接ngbind，而是你使用双重标记的大括号{{}}表达，这样显示的比较直观。
    优先使用ngbind代替{{表达式}}，在页面在原始状态时angularjs会找到并编译它，但是模版会暂时在浏览器显示。因为ngbind是元素属性，当页面被加载时，用户看不到数据绑定。（译者：如果数据量过大页面会暂时显示出表达式，而后显示正确的值）
    该问题的替换解决方法是使用ngcloak指令。
    
    指令信息
    	这个指令的执行优先级为0
        
用法
属性为

```javascript
<ANY
  ng-bind="expression">
...
</ANY>
```

CSS类
```javascript
<ANY class="ng-bind: expression;"> ... </ANY>
```

参数

|Param|Type|Details|
|:-----|:-----|:----|
|ngbind|表达式|表达式|

ngBindHtml

	指令是通一个安全的方式将内容绑定到 HTML 元素上。默认情况下，所得到的HTML内容通过$sanitize服务使用。利用这个功能，确保$sanitize可用，诸如，通过包括ngSanitize模块依存关系(没有核心的angularjs)。为了使用ngsanitize在模块的依赖关系，需要在应用中引入 "angular-santize.js" 模块，使用 ngSanitize 函数来检测代码的安全性。当你想让 AngularJS 在你的应用中写入 HTML，你就需要去通过这个检测一些危险代码。
    你也可以回避你所知道的正确的值。为此，结合需明确信任值$sce.trustashtml。
    注：如果$sanitize服务是不可用的和绑定值是不可信的，你也会有例外(代替使用。)
    
    指令信息
    	这个指令的执行优先级为0
用法
作为元素：(本指令可以作为自定义元素，但是IE会有限制--9+)。

```javascript
<ng-bind-html
  ng-bind-html="expression">
...
</ng-bind-html>
```

属性为：

```javascript
<ANY
  ng-bind-html="expression">
...
</ANY>
```

参数

|Param|Type|Details|
|:-----|:-----|:----|
|ngBindHtml|表达式|表达式|

ngBindTemplate

	ngbindtemplate指令将指定该元素文本内容中的内插模板ngbindtemplate属性。不像ngbind，ngbindtemplate可以包含多个表达式{{}}。这个指令是不必要的，因为某些HTML元素(比如title和option)可以不包含span元素
    
    指令信息
    	这个指令的执行优先级为0
用法
作为元素：(本指令可以作为自定义元素，但是IE会有限制--9+)。

```javascript
<ng-bind-template
  ng-bind-template="string">
...
</ng-bind-template>
```

属性为：

```javascript
<ANY
  ng-bind-template="string">
...
</ANY>
```

参数

|Param|Type|Details|
|:-----|:-----|:----|
|ngBindHtml|表达式|模版的形式为{{表达式}}|

ngBlur

	指定html元素时区焦点事件
    当事件被激活的时候目标元素已经时区了焦点
    （译：用于告诉 AngularJS HTML 元素在失去焦点时需要执行的表达式）
    注：由于事件同步执行DOM操作期间(例如去除聚焦输入)，执行使用angularjs表达试。如果scope.$evalasync事件出发过程中来确保一致的状态。
    
    指令信息
    	这个指令的执行优先级为0
用法
作为元素：(本指令可以作为自定义元素，但是IE会有限制--9+)。

```javascript
<ng-blur
  ng-blur="expression">
...
</ng-blur>
```

属性为：

```javascript
<window, input, select, textarea, a
  ng-blur="expression">
...
</window, input, select, textarea, a>
```

参数

|Param|Type|Details|
|:-----|:-----|:----|
|ngBlur|表达式|默认表达式在模版的显示形式为{{表达式}}|

ngChange

	当用户更改输入时，计算给定表达式。与JavaScript的onchange事件不同在于只有触发器才能改变(通常，当用户离开表单元素或按下return键)。
    （菜鸟教程：
    ng-change 指令用于告诉 AngularJS 在 HTML 元素值改变时需要执行的操作。
    ng-change 指令需要搭配 ng-model 指令使用。
    AngularJS ng-change 指令指令不会覆盖原生的 onchange 事件, 如果触发该事件，ng-change 表达式与原生的 onchange 事件都会执行。
    ng-change 事件在值的每次改变时触发，它不需要等待一个完成的修改过程，或等待失去焦点的动作。
    ng-change 事件只针对输入框值的真实修改，而不是通过 JavaScript 来修改。）
    更改时，该ngChange表达式只计算输入的新值。
    它不会被计算：
    	- 如果当前值返回给$parsers解析，通道不会改变
    	- 如果输入的值时一个无效的，因为该model将为空
    	- 如果model是以编程方式更改的，而不是通过对输入值的更改
	注意，该指令要求ngModel存在。
    指令信息
    	这个指令的执行优先级为0
用法
作为元素：(本指令可以作为自定义元素，但是IE会有限制--9+)。

```javascript
	<ng-change
      ng-change="expression">
    ...
    </ng-change>
```

属性为

```javascript
<input
  ng-change="expression">
...
</input>
```

   参数

|Param|Type|Details|
|:-----|:-----|:----|
|ngChange|表达式|要计算的表达式|


> 吐槽：angular4都除了，还在翻译1.5.8的版本。。。。

ngChecked

    如果表达式是选中的，那么给元素设置选中属性。
    不要将此命令和ngModel一起使用，会导致错误发生。
    特定的指令检查是必要的，因为我们不能用checked属性。
    指令信息
    	这个指令的执行优先级为100
    	
用法：
属性为：
```html
<INPUT
  ng-checked="expression">
...
</INPUT>
```

参数

|Param|Type|Details|
|:-----|:-----|:----|
|ngChecked|表达式|如果表达式的结果是true，那么该元素将被设置为选中状态|

ngClass

    该ngClass指令允许动态地通过数据绑定表达式来设置HTML元素的CSS类，它包含要添加的所有类。
    该指令在三种不同的方式下运作，具体取决于三种类型的表达式的计算结果：
        1.如果表达式的计算结果为一个字符串，该字符串中的一个或多个类名应用空格分隔开。
        2.如果表达式的计算结果为对象，那么对象键值对结果为true的键才是类名
        3.如果表达式的计算结果为一个数组，数组的每个元素应为要么是字符串要么是对象。这意味着可以在数组中字符串和对象混合在一起来控制更多的CSS类。
    如果已经设置了一个特定类，该指令不会重复添加相同类名。
    当表达式计算后js开始操作时，会先更改，删除以前添加的类，然后是添加新的类。

已知的问题

 > 在同一个元素使用ngClass指令时，你不应该使用插入值类的属性（js变量）
 
用法：
属性：
```html
<ANY
  ng-class="expression">
...
</ANY>
```

css类的方式

```html
<ANY class="ng-class: expression;"> ... </ANY>
```

参数

|Param|Type|Details|
|:-----|:-----|:----|
|ngClass|表达式|计算表达式。 结果可以是一个字符串，值为空格分隔的类名、数组或类名的map为布尔值。在map的情况下， truthy值的属性将添加到元素的css类中|

动画效果

|Animation|Occurs|
|:-----|:-----|
|addClass|给当前元素添加类名|
|removeClass|删除当前元素的指定类名|

ngClassEven

    用于配合ngClass指令工作的ngClassOdd和ngClassEven，需要结合ngRepeat并对其执行效果奇(偶)行操作
    这一指令只应用在ngRepeat范围内。
    指令信息
    	这个指令的执行优先级为0

用法：
属性为：

```html
<ANY
  ng-class-even="expression">
...
</ANY>
```

css类的方式

```html
<ANY class="ng-class-even: expression;"> ... </ANY>
```

参数

|Param|Type|Details|
|:-----|:-----|:----|
|ngClassEven|表达式|计算表达式。 结果可以是一个字符串，值为空格分隔的类名、数组或类名的map为布尔值。在map的情况下， truthy值的属性将添加到元素的css类中|

ngClassOdd

    用于配合ngClass指令工作的ngClassOdd和ngClassEven，需要结合ngRepeat并对其执行效果奇(偶)行操作
    这一指令只应用在ngRepeat范围内。
    指令信息
    	这个指令的执行优先级为0
    	
用法：
属性为：

```html
<ANY
  ng-class-odd="expression">
...
</ANY>
```

css类的方式

```html
<ANY class="ng-class-odd: expression;"> ... </ANY>
```

参数

|Param|Type|Details|
|:-----|:-----|:----|
|ngClassOdd|表达式|计算表达式。 结果可以是一个字符串，值为空格分隔的类名、数组或类名的map为布尔值。在map的情况下， truthy值的属性将添加到元素的css类中|   

ngClick

    该ngClick指令允许您指定单击一个元素的自定义行为。
    指令信息
    	这个指令的执行优先级为0

用法：
作为元素：(本指令可以作为自定义元素，但是IE会有限制--9+)。
```html
<ng-click
  ng-click="expression">
...
</ng-click>
```

属性为：

```html
<ANY
  ng-click="expression">
...
</ANY>
```

参数：

|Param|Type|Details|
|:-----|:-----|:----|
|ngClick|表达式|单击时计算表达式，（需要包含参数$event）|

ngCloak

    该ngCloak指令是用来防止AngularJS html模板被某些浏览器显示原始(编译)窗体应用程序加载时。使用此 指令，避免html不良模板造成的显示闪烁。
    此指令可以被应用到元素，但首选的用法是应用到小组件上。页面的多个ngCloak会逐渐呈现浏览器视图效果。
    ngCloak在与下面的css规则嵌入在angular.js和angular.min.js合作工作。在CSP模式下请添加angular-csp.css。到您的html文件中(详见ngCsp)
```css
[ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
  display: none !important;
}
```
    当css是由浏览器加载期间，包括子元素在内的所有html元素标记ngCloak指令的都会隐藏。当AngularJS时遇到此指令时会在编译模板元素中删除ngCloak属性，显示已编译的元素。
    为获得最佳结果angular.js脚本必须在html的head部分中加载文件，或者css规则必须包含在外部样式表中。
    指令信息
    	这个指令的执行优先级为0
    	
用法：
属性方式：
```html
<ANY>
...
</ANY>
```

css类方式：
```
<ANY class=""> ... </ANY>
```

ngController

    ngController指令是控制器类的视图。这是angular.js的一个关键，由Model-View-Controller设计模式支持。
    angular中的MVC组件：
        - Model 模型的属性范围；范围是可以通过绑定附加到DOM属性上。
        - View  在视图呈现的模板(HTML和数据绑定)
        - Controller  ngController指令指定一个控制器，该控制器包含业务视图的应用范围以外的功能和逻辑。
    注意，您也可以将控制器通过在路由 $route 定义中声明它附加到DOM。一个常见的错误是发布控制器时再次使用相同控制器模板。这将导致附加控制器执行两次。
    
优先级：

    此指令创建新的作用域，他的优先级是500。
    

用法：
作为元素：(本指令可以作为自定义元素，但是IE会有限制--9+)。 
```html
<ng-controller
  ng-controller="expression">
...
</ng-controller>
```

作为属性：
```
<ANY
  ng-controller="expression">
...
</ANY>
```

参数：

|Param|Type|Details|
|:-----|:-----|:----|
|ngController|表达式|在当前名为$controllerProvider和一个表达式，在当前作用域的计算结果为一个构造函数。控制器实例可以由一个scope属性指定。ng-controller="as propertyName".|

ngCopy

    指定复制事件上的自定义行为
    优先级：
        它的优先级是0。
    
用法：
作为元素：(本指令可以作为自定义元素，但是IE会有限制--9+)。 
```html
<ng-copy
  ng-copy="expression">
...
</ng-copy>
```

作为属性：

```
<window, input, select, textarea, a
  ng-copy="expression">
...
</window, input, select, textarea, a>
```

参数：
|Param|Type|Details|
|:-----|:-----|:----|
|ngCopy|表达式|要计算的表达式（参数需要包含$event）|

ngCsp

    AngularJS具有一些功能，当使用时，可能会发生冲突或者受制于应用的某些限制CSP(内容安全政策)规则。  
    如果你打算使用这些规则来实现CSP那么你必须告诉AngularJS不使用这些功能。
    当开发Google Chrome扩展或普遍的Windows应用程序之类的东西时，这是必要的。
    CSP中的下列默认规则会影响AngularJS：
        - 从字符串的代码使用eval()，function(string)和类似的功能来动态创建和执行是被禁止的。AngularJS利用$parse的解析服务提供一个速度增加30%的angularjs表达式。（该CSP规则可以 禁用不符合安全评估规则的CSP关键字，但它通常不推荐，因为它会削弱CSP提供的保护）。
        - 使用内联资源，如内联元素<script>和<style>是禁止的。这样可以防止从直接注入自定义样式应用到文档中。AngularJS利用一些CSS规则(例如。ngCloak和ngHide)。当这些自定义指令工作的时候，CSP规则开始工作，阻止内敛样式时，你必须用angular-csp.css手动指向你的HTML。该CSP规则使用CSP关键字可以禁用不安全的内联，但是一般不推荐，因为它会削弱CSP提供的保护。如果你不使用ngCsp，然后AngularJS尝试使用CSP自动检测并阻碍动态代码创建字符串(例如。unsafe-eval不安全评估中未指定CSP标题)并自动停用此功能的解析服务。这是自动检测，然而CSP会触发错误被记录到控制台。
```
Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of
script in the following Content Security Policy directive: "default-src 'self'". Note that
'script-src' was not explicitly set, so 'default-src' is used as a fallback.
拒绝评估一个JavaScript字符串,因为“unsafe-eval”是不允许的脚本在以下内容安全政策指令:“default-src‘self’”。请注意,“script-src”并不是显式地设置,所以default-src作为后备。
```
    
    此错误虽然讨厌但是无害。防止错误显示，把ngCsp关联到一个HTML文档的元素，它出现tag之前加载angular.js。
    注意：此命令仅在ng-csp 和 data-ng-csp属性上
    您可以指定CSP的相关AngularJS停止供应ng-csp属性的值。 选项如下：
        - no-inline-style:这将暂停AngularJS注入到DOM中的CSS样式
        - no-unsafe-eval: 这将暂停AngularJS解析优化与安全的字符串
        - 一个简单的ng-csp(或data-ng-csp)属性将告诉AngularJS停用两个内联样式和安全评估
        - 这是向后兼容的angularjs版本
        - 仅指定no-unsafe-eval，告诉AngularJS。我们不能使用eval，但我们可以插入内联样式。E.g. <body ng-csp="no-unsafe-eval">
        - 仅将no-inline-style告诉AngularJS，我们不能使用注入的方式，但我们可以运行eval-将会不自动检查安全 E.g. <body ng-csp="no-inline-style">
        - 仅指定no-unsafe-eval和no-inline-style告诉AngularJS，我们不能使用注入样式或使用eval，这是空的。E.g.<body ng-csp="no-inline-style;no-unsafe-eval">
        
优先级：

    这个指令的优先级为0。
    
用法：
对于属性：
```html
<ANY>
...
</ANY>
```

ngCut

    指定剪切事件的自定义行为。
    
优先级：

    这个指令的优先级为0。    

用法：
作为元素：(本指令可以作为自定义元素，但是IE会有限制--9+)。 
```html
<ng-cut
  ng-cut="expression">
...
</ng-cut>
```

对于属性：

```html
<window, input, select, textarea, a
  ng-cut="expression">
...
</window, input, select, textarea, a>
```

参数
|Param|Type|Details|
|:-----|:-----|:----|
|ngCut|表达式|剪切是计算表达式，事件对象为$event|

ngDblclick

    该ngDblclick指令允许您指定在dblclick事件的自定义行为
    
优先级：

    这个指令的优先级为0。    

用法：
作为元素：(本指令可以作为自定义元素，但是IE会有限制--9+)。 
```html   
<INPUT
  ng-disabled="expression">
...
</INPUT>
```

参数
|Param|Type|Details|
|:-----|:-----|:----|
|ngDblclick|表达式|如果表达式的结果是true，那么元素上的disabled将被设置|

ngFocus

    对焦点事件指定自定义行为
    注意：当调用焦点事件时，input.focus()也会同步执行。AngularJS使用scope.$evalAsync执行表达式。如果激活了$apply后可以保持数据一致。

优先级：

    这个指令的优先级为0。    
    
用法：
作为元素：(本指令可以作为自定义元素，但是IE会有限制--9+)。 
```html
<ng-focus
  ng-focus="expression">
...
</ng-focus>
```

作为属性：
```html
<window, input, select, textarea, a
  ng-focus="expression">
...
</window, input, select, textarea, a>
```

参数
|Param|Type|Details|
|:-----|:-----|:----|
|ngFocus|表达式|获取焦点时计算表达式|

ngForm

    form指令的可嵌套别名。HTML不允许嵌套表单元素。这个nest形式是很有用，例如，如果一个的有效的控件的分组。
    注意：ngForm的目的是对控件进行分组，但是却无法代替form标签的所有功能（eg:发送到服务器...）
    
优先级：

    这个指令的优先级为0。 
    
用法：
作为元素：(本指令可以作为自定义元素，但是IE会有限制--9+)。 
```html
<ng-form
  [name="string"]>
...
</ng-form>
```

作为属性：
```html
<ANY
  [ng-form="string"]>
...
</ANY>
```    

作为css类：
```html
<ANY class="[ng-form: string;]"> ... </ANY>
```

参数：
|Param|Type|Details|
|:-----|:-----|:----|
|ngForm | name(可选)|字符串|表单的名称。 在这个名下指定了表单控制器的有关范围|

ngHide

    该ngHide指令用于显示或隐藏，HTML元素根据所提供的表达式计算控制ngHide属性。
    元素的显示或隐藏是通过删除或添加元素的CSS属性（ngHide属性）。该.ng-hide CSS类是根据angularjs的预定义属性，（使用 !important标记）。CSP模式请添加angular-csp.css到页面上（详见ngCsp）
    
```html
<!-- when $scope.myValue is truthy (element is hidden) -->
<div ng-hide="myValue" class="ng-hide"></div>

<!-- when $scope.myValue is falsy (element is visible) -->
<div ng-hide="myValue"></div>
```

    如果ngHide表达式计算结果为true，则.nghide CSS类会被添加到类属性上性使其变为隐藏的元素。结果为false时.ng-hide CSS类是从元素中移除使其显示隐藏的元素。
    
为什么使用 !important
    
    您可能想知道为什么！ 要使用!important设置.nghideCSS类。这是因为.nghide可以很容易的重写选择器。例如：任何东西都可以通过简单的更改使一个HTML列表项中将隐藏元素的样式显示可见。在处理CSS框架时，这也成为一个更大的问题。
    通过使用!important，show和hide行为将按预期方式工作，尽管存在任何于当前CSS选择器冲突的特异性(当!important不能与任何冲突的样式一起使用)。如果开发人员选择重写样式以更改如何隐藏元素的方式然后它只是在自己的CSS代码中使用!important。
    
重要：.ng-hide

    默认情况下，.ng-hide类样式是 display: none !important，如果你要通过ngShow/ngHide来更改隐藏行为，你可以简单的覆盖掉.ng-hide样式。请注意，选择器需要使用是正确的.ng-hide:not(.ng-hide-animate)，以应对添加额外的动画类。
```css
.ng-hide:not(.ng-hide-animate) {
  /* These are just alternative ways of hiding an element */
  display: block!important;
  position: absolute;
  top: -9999px;
  left: -9999px;
}
```

    默认情况下你什么都不需要重写,在CSS和animations将解决显示样式。

关于动画的标记 nghide

    在ngShow/ngHide的动画工作过程中，显示和隐藏时触发的事件指令表达式为true和false，该系统的工作原理是动画系统中出现除了ngClass还必须包括!important的标志用来覆盖显示属性元素,实际上不是在动画期间隐藏。
```css
/* A working example can be found at the bottom of this page. */
.my-element.ng-hide-add, .my-element.ng-hide-remove {
  transition: all 0.5s linear;
}

.my-element.ng-hide-add { ... }
.my-element.ng-hide-add.ng-hide-add-active { ... }
.my-element.ng-hide-remove { ... }
.my-element.ng-hide-remove.ng-hide-remove-active { ... }
```

    请记住，自AngularJS 1.3版后，在动画期间不需要改变显示属性，ngAnimate将自动为您式切换处理样式。
    
优先级：

    这个指令的优先级为0。 
    这个指令可以是多元的。
    
用法：
作为元素：(本指令可以作为自定义元素，但是IE会有限制--9+)。 
```html
<ng-hide
  ng-hide="expression">
...
</ng-hide>
```

作为属性：
```html
<ANY
  ng-hide="expression">
...
</ANY>
```  

参数：
|Param|Type|Details|
|:-----|:-----|:----|
|ngHide|表达式|如果表达式结果为true/false,那么元素的结果为隐藏/显示|

动画
|Animation|Occurs|
|:-----|:-----|
|addClass .ng-hide|ngHide表达式计算结果为truthy值后，就在内容设置为隐藏|
|removeClass .ng-hide|ngHide表达式计算结果为false值后，就在内容设置为显示|

ngHref

    使用AngularJS标记象{{hash}}的href属性将链接到错误的URL之前如果用户单击AngularJS就有机会将{{hash}}标记替换为它本身的值。直到AngularJS替换标记链接规则将被打破,很可能会返回一个404错误。ngHref指令可以解决这个问题。
    错误的方式来写：
```html
<a href="http://www.gravatar.com/avatar/{{hash}}">link1</a>
```

    正确的方式来写：
    
```html
<a ng-href="http://www.gravatar.com/avatar/{{hash}}">link1</a>
```

优先级：

    这个指令的优先级为99
    
用法：
对于属性

```html
<A
  ng-href="template">
...
</A>
```

参数
|Param|Type|Details|
|:-----|:-----|:----|
|ngHref|模版|可以再{{}}中包含任意字符串|

ngIf

    该ngif指令会根据表达式的结果增加或删除掉dom中的一部分。如果表达式分配给ngif的计算结果为false那么该元素的值是从DOM中移除，否则克隆新元素重新插入到DOM元素中。
    ngif不用于ngshow或者nghide，ngif是通过删除clone来控制dom的隐藏显示，ngshow和ngif是通过css类的display属性控制隐藏显示。一个共同的问题是，当差异显著时在dom上使用css选择器，比如:first-child 和 :last-child伪类。
    注意，在使用ngif移除元素时，他会破坏当前作用域，在元素恢复时会创建新的作用域。在当前作用域内使用ngif会使用原型继承继承他的父作用域。一个重要的含义是，当ngmodel绑定到ngif作用域中时他会通过javascript包含父作用域。在这种情况下所做的任何修改 变量在子范围内将覆盖(隐藏)的父作用域中的值。
    此外，ngif重新创建元素并使用它们的编译状态。此行为的示例如果一个元素的class属性直接修改编译后，使用类似jQuery的addClass()方法，稍后将被删除的元素。在ngif时，重新创建元素并添加丢失的类，因为原始编译状态用于生成元素。
    此外，您还可以通过ngAnimate模块提供动画动态进入和离开的效果。
    
优先级：

    此指令会创建新的作用域。
    此指令的优先级为600.
    此指令是多元的。
    
用法：
作为属性：
```html
<ANY
  ng-if="expression">
...
</ANY>
```

参数：
|Param|Type|Details|
|:-----|:-----|:----|
|ngIf|表达式|如果表达式的值时false，那么就从dom中删除元素，如果是true，那么会复制一个副本添加到dom中|

动画
|Animation|Occurs|
|:-----|:-----|
|enter|只是ngif内容更改后，将创建一个新的DOM元素并注入ngif所在容器|
|leave|ngif容器从dom中移除|

ngInclude

    拿到并编译一个外部HTML片段。
    默认情况下，模板URL仅限于相同的域和协议下的申请文件。这是通过调用$sce.getTrustedResourceUrl实现。加载来自其他域的模板或协议您可以加入白名单或包装他们是值成信赖的值。
    此外，浏览器的同源策略与源交叉资源共享(CORS)政策可能会进一步限制能否成功加载模板。例如：ngInclude 不会在所有浏览器和跨域请求工作 file:// 只在某些浏览器中访问。
    
优先级：

    此指令会创建新的作用域。
    此指令的优先级为400。
    
用法：
作为元素：(本指令可以作为自定义元素，但是IE会有限制--9+)。 
```html
<ng-include
  src="string"
  [onload="string"]
  [autoscroll="string"]>
...
</ng-include>
```

作为属性：
```html
<ANY
  ng-include="string"
  [onload="string"]
  [autoscroll="string"]>
...
</ANY>
```

作为class类
```html
<ANY class="ng-include: string; [onload: string;] [autoscroll: string;]"> ... </ANY>
```

参数：
|Param|Type|Details|
|:-----|:-----|:----|
|ngInclude/src |string|AngularJS计算为URL的表达式。如果源字符串是常量，请确保你把它包在单引号中|
|onload(optional)|string|当加载新页面时，会计算新的表达式.`注：当在IE11中加载使用SVG元素时，浏览器将尝试在窗口元素调用函数名称，通常引发"未定义函数"的错误。要解决此问题，您可以使用数据onload=或匹配不同形式onload`|
|autoscroll(optional)|string|ngInclude是否应调用$anchorScroll在加载内容后滚动视图|

事件
$includeContentRequested
每次发出ngInclude内容请求。
type：emit
目标：
ngInclude作用域范围内。

参数
|Param|Type|Details|
|:-----|:-----|:----|
|angularEvent|object|合成事件对象|
|src|string|要加载的URL内容|

$includeContentLoaded
每次发出ngInclude内容都会重新加载

Type:
emit

Target：
当前ngInclude范围内

参数
|Param|Type|Details|
|:-----|:-----|:----|
|angularEvent|object|合成事件对象|
|src|string|要加载的URL内容|

$includeContentError

模板时发出HTTP请求生成一个错误响应(status < 200 || status > 299)

type:
emit

Target:
当前ngInclude范围内

参数：
|Param|Type|Details|
|:-----|:-----|:----|
|angularEvent|object|合成事件对象|
|src|string|要加载的URL内容|

Animations
|Animation|Occurs|
|:-----|:-----|
|enter|当表达式改变时会包含一个新的|
|leave|当表达式改变时会回到旧的状态|

进入和离开动画同时发生的。

ngInit

    该ngInit指令允许您初始化当前作用域中的表达式。
    `此指令可以被滥用，不需要大量的逻辑添加到您的模板。只有少数适当ngInit的使用，如特殊性质的ngRepeat，如以下示例所示，通过注入数据服务器端脚本。除了这些少数情况下，您应该使用控制器而不是ngInit上的初始化值范围。`
    注意：如果你有ngInit转让以及一个过滤器，请确定你有括号，以确保正确的运算符优先级：
    ```html
    <div ng-init="test1 = ($index | toString)"></div>
    ```
    
优先级
    此指令的优先级为450
    
用法：
作为属性：
```html
<ANY
  ng-init="expression">
...
</ANY>
```

作为css类
```html
<ANY class="ng-init: expression;"> ... </ANY>
```

参数：
|Param|Type|Details|
|:-----|:-----|:----|
|ngInit|表达式|计算初始化表达式|

ngJq

    强制使用angular.element指令库。这应该是在窗口下用于强制或者jqLite 留ng-jq空白或设置jquery的名称变量。
    从AngularJS寻找这个指令后加载时(不等待DOMContentLoaded事件)，它必须放在angular脚本之前的第一个元素加载。 此外，只有ng-jq的第一个实例将被使用,所有其他被忽略。

优先级
    此指令的优先级为0
    
用法：
作为元素：(本指令可以作为自定义元素，但是IE会有限制--9+)。 
```html
<ng-jq
  [ng-jq="string"]>
...
</ng-jq>
```

作为属性：
```html
<ANY
  [ng-jq="string"]>
...
</ANY>
```

参数：
|Param|Type|Details|
|:-----|:-----|:----|
|ngJq(optional)|string|库的名称根据window用来angular.element|

ngKeydown

    keydown事件上指定的自定义行为
    
优先级
    此指令的优先级为0
   
用法：
作为元素：(本指令可以作为自定义元素，但是IE会有限制--9+)。 
```html
<ng-keydown
  ng-keydown="expression">
...
</ng-keydown>
```

作为属性

```html
<ANY
  ng-keydown="expression">
...
</ANY>
```

参数：
|Param|Type|Details|
|:-----|:-----|:----|
|ngKeydown|表达式|按下时计算表达式（事件对象是可看作$event，可以询问号码，交替键等）|

ngKeypress

    keypress 事件上指定的自定义行为
    
优先级
    此指令的优先级为0
   
用法：
作为元素：(本指令可以作为自定义元素，但是IE会有限制--9+)。 
```html
<ng-keypress
  ng-keypress="expression">
...
</ng-keypress>
```

作为属性

```html
<ANY
  ng-keypress="expression">
...
</ANY>
```

参数：
|Param|Type|Details|
|:-----|:-----|:----|
|ngKeypress|表达式|按键时计算表达式（事件对象是可看作$event，可以询问号码，交替键等）|

ngKeyup

    ngKeyup 事件上指定的自定义行为
    
优先级
    此指令的优先级为0
   
用法：
作为元素：(本指令可以作为自定义元素，但是IE会有限制--9+)。 
```html
<ng-keyup
  ng-keyup="expression">
...
</ng-keyup>
```

作为属性

```html
<ANY
  ng-keyup="expression">
...
</ANY>
```

参数：
|Param|Type|Details|
|:-----|:-----|:----|
|ngKeyup|表达式|按键放开抬起时计算表达式（事件对象是可看作$event，可以询问号码，交替键等）|

ngList

    文本之间进行转换的输入分隔的字符串和一个字符串的数组。默认分隔符后面跟空格，相当于ng-list=", "。您可以指定自定义 分隔符为ngList属性的值，例如ng-list=" | ".
    指令的行为是收到ngTrim特性的影响。
        - 如果ngTrim的值时false，然后在两个分隔符，每个空白列表项被重视。这意味着用户的指令负责处理空白，但还允许您使用空格作为分隔符，例如制表符或换行字符。
        - 否则当分割时，忽略空格分隔符两侧（虽然这是重视空格在加入时，复合列表项）每个列表项都是被添加到模型之前去掉了周围的空白。
 
优先级
    此指令的优先级为0
    
用法：
作为元素：(本指令可以作为自定义元素，但是IE会有限制--9+)。 
```html
<ng-list
  [ng-list="string"]>
...
</ng-list>
```

作为属性：
```html
<input
  [ng-list="string"]>
...
</input>
```

参数：
|Param|Type|Details|
|:-----|:-----|:----|
|ngList(optional)|string|应使用的可选分隔符拆分|

ngMaxlength

	ngMaxlength是maxlength验证器添加到ngModel。这是最经常用于基于文本的输入控件，但也可以应用到自定义文本控件上。
	如果该ngModel，设置了错误的maxlength验证程序。如果ngModel.$viewValue的值长于AngularJS中给出的表达式计算后得到的整数ngMaxlength属性值。

```
注：本指令也会被添加在页面内，当以使用原生的maxlength属性，会有区别：
	1.ngMaxlength不用设置maxlength属性，因此HTML5约束验证不可用
	2.该ngMaxlength属性必须是表达式，而最大长度值必须插值
```

优先级

    此指令的优先级为0

用法：
作为元素：(本指令可以作为自定义元素，但是IE会有限制--9+)。 
```html
<ng-maxlength>
...
</ng-maxlength>
```

作为属性：

```
<ANY>
...
</ANY>
```

ngMinlength

	ngMaxlength是maxlength验证器添加到ngModel。这是最常用的基于文本的输入控件，但也可以运用到自定义文本控件。
	如果该ngModel，设置了错误的minlength验证程序。如果ngModel.$viewValue的值小于AngularJS中给出的表达式计算后得到的整数ngMinlength属性值。

```
注：本指令也会被添加在页面内，当以使用原生的minlength属性，会有区别：
	1.ngMinlength不用设置minlength属性，因此HTML5约束验证不可用
	2.该ngMinlength属性必须是表达式，而最大长度值必须插值
```

优先级

    此指令的优先级为0

用法：
作为元素：(本指令可以作为自定义元素，但是IE会有限制--9+)。 
```html
<ng-minlength>
...
</ng-minlength>
```

作为属性：

```html
<ANY>
...
</ANY>
```

ngModel

	ngModel指令可以绑定到input，select，textarea(或自定义窗体控件)可以作为属性在NgModelController范围内使用，要创建和公开的这项指令。

ngModel的负责项：
	1.视图绑定到模型中，其他指令，如要求input, textarea，select
	2.提供验证行为： (i.e. required, number, email, url).
	3.保持控件的状态(有效/无效，已修改/未修改，触及/未触及，验证错误)。
	4.元素上设置相关的css类（ng-valid, ng-invalid, ng-dirty, ng-pristine, ng-touched, ng-untouched, ng-empty, ng-not-empty），包括动画
	5.注册控件与其父窗体

注意：ngModel会尝试在当前作用域中绑定到给定属性值，如果当前作用域中不存在该属性，将会自动创建一个隐藏的属性添加到当前作用域。

如何使用ngModel基本的例子：input(text,checkbox,radio,number,email,url,date,datetime-local,time,month,week),select,textarea.

复杂模型(对象或集合)

	默认情况下，ngModel监听模型，而不是值。这是重要的知识，当输入绑定到模型对象(例如。日期)或集合(例如。 阵列)。如果唯一的属性是对象或集合被更改，ngModel将不会收到通知，所以输入不会呈现出来。
	在一个重新绘制将发生之前，必须将模型分配一个全新的对象或集合。
	一些指令选项，将导致他们使用一个$watchCollection元模型表达式
		- 例如：ngOptions，将在track by子句中时，包含理解表达式，或如果选择多个属性
	$watchCollection() 方法只做一个浅比较，更改属性的含义深度比较第一级对象(或如果它是一个数组，只改变一个集合中的项的属性)仍将不会触发模型的重新绘制。

CSS classes

	下面的CSS类根据模型的有效性在 input/select/textarea元素上添加和删除关联。
	    - ng-valid: 该模型是有效的
	    - ng-invalid: 该模型是有效的
	    - ng-valid-[key]: 通过 $setValidity 给每一个添加有效的key
	    - ng-invalid-[key]: 通过 $setValidity 给每一个添加无效的key
	    - ng-pristine: 控制尚未与之交互
	    - ng-dirty: 控制与之交互
	    - ng-touched: 控制已经变得模糊
	    - ng-untouched: 控制没有模糊
	    - ng-pending: $asyncValidators 未满足
	    - ng-empty: 视图不包含一个值或“null”的值,是由ngModel定义。NgModelController提供方法
	    - ng-not-empty: 视图包含一个非空值
	 请记住，ngAnimate当添加和移除时，可以检测以上每个类。

Animation Hooks

	当任何关联的CSS类添加和删除时，会在模型内输入元素上触发动画，这是附加到模型上的。这些类包括：.ng-pristine, .ng-dirty, .ng-invalid 和 .ng-valid，以及任何其他验证执行的的模型本身上。在ngModel内触发的动画是类似于在ngClass工作方式和动画可以连接并使用CSS转换，以及JS动画的关键帧。
	下面的示例演示一个简单的方法来利用CSS转换输入元素的样式在它已经过验证后，一直呈现为无效：
```css
//be sure to include ngAnimate as a module to hook into more
//advanced animations
.my-input {
  transition:0.5s linear all;
  background: white;
}
.my-input.ng-invalid {
  background: red;
  color:white;
}
```

优先级

    此指令的优先级为1

用法：
作为元素：(本指令可以作为自定义元素，但是IE会有限制--9+)。 
```html
<ng-model>
...
</ng-model>
```
作为属性：
```html
<input ng-model="">
...
</input>
```








    
    
    


    









    
    
    

    
    



    
    
    





    


    
    

    



    

















