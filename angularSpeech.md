# **Angular**
```
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
```

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
##ng功能组件
|name|description|格式|
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

###angular.element
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

##directive
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
```
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
```
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
    
    
    

    
    













