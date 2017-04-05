## mongoose基础知识
> 参考 http://cnodejs.org/topic/504b4924e2b84515770103dd  版本可能略旧，但是讲的比较细入门是不错的
> 参考 http://www.nodeclass.com/api/mongoose.html	
> 参考 http://mongoosejs.com/docs/api.html			

### 名词解释

|名称|含义|
|:--|:--|
|Schema|一种以文件形式存储的数据库模型骨架，不具备数据库的操作能力|
|Model|由Schema发布生成的模型，具有抽象属性和行为的数据库操作对|
|Entity|由Model创建的实体，他的操作也会影响数据库|

**注意**:

命名规范：本学习文档采用`严格命名方式`来区别不同对象，例如：

```javascript
var PersonSchema;   //Person的文本属性
var PersonModel;    //Person的数据库模型
var PersonEntity;   //Person实体
```

#### Schema、Model、Entity的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性

### 开始使用

> 1.首先要安装mongodb和nodejs

> 2.项目中只能创建一个数据库链接（不同环境下可以使用不同的环境变量来切换数据库）

```javascript
var mongoose = require('mongoose');    //引用mongoose模块
var db = mongoose.createConnection('localhost','test'); //创建一个数据库连接
// createConnection有两个参数，参数1是数据库的网络地址，参数2是数据库的名称
```

> 3.打开本机localhost的test数据库时，我们可以监测是否有异常

```javascript
db.on('error',console.error.bind(console,'连接错误:'));
db.once('open',function(){
  //一次打开记录
});
```

**注意**:

成功开启数据库后，就可以执行数据库相应操作，假设以下代码都在回调中处理

> 4.定义Schema

```javascript
var PersonSchema = new mongoose.Schema({
    name:String   //定义一个属性name，类型为String
});
```

> 5.将该Schema发布为Model

```javascript
var PersonModel = db.model('Person',PersonSchema);
//如果该Model已经发布，则可以直接通过名字索引到，如下：
//var PersonModel = db.model('Person');
//如果没有发布，上一段代码将会异常
```

> 6.用Model创建Entity

```javascript
var personEntity = new PersonModel({name:'Krouky'});
//打印这个实体的名字看看
console.log(personEntity.name); // 结果为 Krouky
```

> 7.我们可以为此Schema创建方法(实际开发过程中可以将一些原生简单的方法封装到这里，日后直接调用)

```javascript
//为Schema模型追加speak方法
PersonSchema.methos.speak = function(){
	console.log('我的名字叫'+this.name);
}
var PersonModel = db.model('Person',PersonSchema);
var personEntity = new PersonModel({name:'Krouky'});
personEntity.speak();//我的名字叫Krouky
```

> 8.Entity是具有具体的数据库操作CRUD的

	personEntity.save();  //执行完成后，数据库就有该数据了

> 9.如果要执行查询，需要依赖Model，当然Entity也是可以做到的(具体的mongoose方法在我的另一篇常用方法介绍里)

```javascript
PersonModel.find(function(err,persons){
	//查询到的所有person
});
```

**注意**

1. 具体的如何配置Schema、Model以及Model和Entity的相关操作，我们会在后面进行

2. Model和Entity都有能影响数据库的操作，但仍有区别，后面我们也会做解释


----------------------------------------

### Schema——纯洁的数据库原型

**什么是Schema？**

> 和作者有些分歧，我认为就是一个数据库模型，数据属性的模型。

**如何定义Schema?**

```javascript
var BlogSchema = new Schema({
	title:String,
	author:String
	//new Schema()中传入一个JSON对象，该对象形如 xxx:yyyy ,
	/xxx是一个字符串，定义了属性，yyy是一个Schema.Type，定义了属性类型
});
```

**什么是Schema.Type？**

`Schema.Type`是由`Mongoose`内定的一些数据类型，基本数据类型都在其中，他也内置了一些`Mongoose`特有的`Schema.Type`。当然，你也可以自定义Schema.Type，只有满足Schema.Type的类型才能定义在Schema内。

**Schema.Types详解**

`NodeJS`中的基本数据类型都属于`Schema.Type`，另外`Mongoose`还定义了自己的类型

```javascript
//举例：
var ExampleSchema = new Schema({
	name:String,
	binary:Buffer,
	living:Boolean,
	updated:Date,
	age:Number,
	mixed:Schema.Types.Mixed, //该混合类型等同于nested
	_id:Schema.Types.ObjectId,  //主键
	_fk:Schema.Types.ObjectId,  //外键
	array:[],
	arrOfString:[String],
	arrOfNumber:[Number],
	arrOfDate:[Date],
	arrOfBuffer:[Buffer],
	arrOfBoolean:[Boolean],
	arrOfMixed:[Schema.Types.Mixed],
	arrOfObjectId:[Schema.Types.ObjectId]
	nested:{
	stuff:String,
	}
});
```

**关于Buffer**

`Buffer`和`ArrayBuffer`是Nodejs两种隐藏的对象，相关内容请查看`NodeJS-API`(个人理解：二进制数据，存储方式类似于C中的指针)

**关于Mixed**

`Schema.Types.Mixed`是`Mongoose`定义个混合类型，该混合类型如果未定义具体形式。因此,如果定义具体内容，就直接使用`{}`来定义，以下两句等价

```javascript
var AnySchema = new Schema({any:{}});
var AnySchema = new Schema({any:Schema.Types.Mixed});
```

混合类型因为没有特定约束，因此可以任意修改，一旦修改了原型，则必须调用`markModified()`

```javascript
person.anything = {x:[3,4,{y:'change'}]}
person.markModified('anything');//传入anything，表示该属性类型发生变化
person.save();   // 保存的方法
```

**关于ObjectId**

主键，一种特殊而且非常重要的类型，每个Schema都会默认配置这个属性（无需自己配置），属性名为_id，除非自己定义，方可覆盖（所有数据库中都有主键，可以把mongodb玩成类似关系型数据库）

```javascript
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var StudentSchema = new Schema({});				//默认会有_id:ObjectId
var TeacherSchema = new Schema({id:ObjectId});	//只有id:ObjectId
```

该类型的值由系统自己生成，从某种意义上几乎不会重复，生成过程比较复杂，有兴趣的朋友可以查看源码。

**关于Array**

`Array`在JavaScript编程语言中并不叫数组，而是`集合`，因此里面可以存入不同的值，以下代码等价：(原作者认为不是数组，但我认为就是数组，也许我学的没有原作者好吧)

```javascript
var ExampleSchema1 = new Schema({array:[]});
var ExampleSchema2 = new Schema({array:Array});
var ExampleSchema3 = new Schema({array:[Schema.Types.Mixed]});
var ExampleSchema4 = new Schema({array:[{}]});
```

**附言**

Schema不仅定义了`文档结构`和`使用性能`，还可以有`扩展插件`、`实例方法`、`静态方法`、`复合索引`、`文档生命周期钩子`

Schema可以定义插件，并且插件具有良好的`可拔插性`，请有兴趣的读者继续往后阅读或者查阅官方资料。

### Schema的扩展

**实例方法**

有的时候，我们创造的`Schema`不仅要为后面的`Model`和`Entity`提供公共的属性，还要提供`公共的方法`。

下面例子比快速通道的例子更加高级，可以进行高级扩展：

```javascript
var PersonSchema = new Schema({name:String,type:String});
//查询类似数据
PersonSchema.methods.findSimilarTypes = function(cb){
  return this.model('Person').find({type:this.type},cb);
}
```

使用如下：

```javascript
var PersonModel = mongoose.model('Person',PersonSchema);
var krouky = new PersonSchema({name:'krouky',type:'前端工程师'});
krouky.findSimilarTypes(function(err,persons){
  //persons中就能查询到其他前端工程师
});
```

**静态方法**

静态方法在`Model`层就能使用，如下：

```javascript
PersonSchema.statics.findByName = function(name,cb){
	this.find({name:new RegExp(name,'i'),cb});
}
var PersonModel = mongoose.model('Person',PersonSchema);
	PersonModel.findByName('krouky',function(err,persons){
	//找到所有名字叫krouky的人
});
```

**索引**

索引或者复合索引能让搜索更加高效，默认索引就是主键索引ObjectId，属性名为_id， 索引会作为一个专题来讲解

**虚拟属性**

Schema中如果定义了虚拟属性，那么该属性将不写入数据库，例如：

```javascript
var PersonSchema = new Schema({
	name:{
		first:String,
		last:String
	}
});
var PersonModel = mongoose.model('Person',PersonSchema);
var krouky = new PersonModel({
	name:{first:'krouky',last:'han'}
});
```

如果每次想使用全名就得这样

	console.log(krouky.name.first + ' ' + krouky.name.last);

显然这是很麻烦的，我们可以定义`虚拟属性`：

```javascript
PersonSchema.virtual('name.full').get(function(){
	return this.name.first + ' ' + this.name.last;
});
```

那么就能用krouky.name.full来调用全名了，反之如果知道full，也可以反向解析first和last属性

```javascript
 PersonSchema.virtual('name.full').set(function(name){
	var split = name.split(' ');
	this.name.first = split[0];
	this.name.last = split[1];
});
var PersonModel = mongoose.model('Person',PersonSchema);
var krouky = new PersonModel({});
krouky.name.full = 'krouky han';	//会被自动分解
console.log(krouky.name.first);		//krouky
```

**配置项**

在使用`new Schema(config)`时，我们可以追加一个参数`options`来配置`Schema`的配置，形如：

	var ExampleSchema = new Schema(config,options);

或者使用

	var ExampleSchema = new Schema(config);
    ExampleSchema.set(option,value);

可供配置项有：`safe`、`strict`、`capped`、`versionKey`、`autoIndex`

**safe——安全属性（默认安全）**

一般可做如下配置：

	new Schema({...},{safe:true});

当然我们也可以这样

	new Schema({...},{safe:{j:1,w:2,wtimeout:10000}});

j表示做1份日志，w表示做2个副本（尚不明确），超时时间10秒

**strict——严格配置（默认启用）**

确保`Entity`的值存入数据库前会被自动验证，如果你没有充足的理由，请不要停用，例子：

```javascript
var ThingSchema = new Schema({a:String});
var ThingModel = db.model('Thing',SchemaSchema);
var thing = new Thing({iAmNotInTheThingSchema:true});
thing.save();//iAmNotInTheThingSchema这个属性将无法被存储
```

如果取消严格选项，`iAmNotInTheThingSchema`将会被存入数据库

该选项也可以在构造实例时使用，例如：

```javascript
var ThingModel = db.model('Thing');
var thing1 = new ThingModel(doc,true);  //启用严格
var thing2 = new ThingModel(doc,false); //禁用严格
```

**注意**:

`strict`也可以设置为`throw`，表示出现问题将会抛出错误

**shardKey**

需要`mongodb`做分布式，才会使用该属性

**capped——上限设置**

如果有数据库的批量操作，该属性能限制一次操作的量，例如：

	new Schema({...},{capped:1024});  //一次操作上线1024条数据

当然该参数也可是JSON对象，包含size、max、autiIndexId属性

	new Schema({...},{capped:{size:1024,max:100,autoIndexId:true}});

**versionKey——版本锁**

版本锁是Mongoose默认配置（__v属性）的，如果你想自己定制，如下：

	new Schema({...},{versionKey:'__someElse'});

此时存入数据库的版本锁就不是__v属性，而是__someElse，相当于是给版本锁取名字。

具体怎么存入都是由Mongoose和MongoDB自己决定，当然，这个属性你也可以去除

	new Schema({...},{versionKey:false});

除非你知道你在做什么，并且你知道这样做的后果

**autoIndex——自动索引**

该内容将在索引章节单独讲解

### Documents

`Document`是与`MongoDB`文档一一对应的模型，Document可`等同于`Entity，具有属性和操作性.

**注意**：

`Document`的`CRUD`都必须经过严格验证的，参看 **2.5.2 Schema的strict严格配置**

具体 `增删改查` 方法可以查看另一篇mongoose常用方法文章。

**Sub Docs**

如同`SQL`数据库中2张表有主外关系，Mongoose将2个`Document`的嵌套叫做`Sub-Docs`（子文档）

简单的说就是一个`Document嵌套`另外一个`Document`或者`Documents`:

```javascript
var ChildSchema1 = new Schema({name:String});
var ChildSchema2 = new Schema({name:String});
var ParentSchema = new Schema({
	children1:ChildSchema1,   //嵌套Document
	children2:[ChildSchema2]  //嵌套Documents
});
```

`Sub-Docs`享受和`Documents`一样的操作，但是`Sub-Docs`的操作都由`父类`去执行

```javascript
var ParentModel = db.model('Parent',parentSchema);
var parent = new ParentModel({
	children2:[{name:'c1'},{name:'c2'}]
});
parent.children2[0].name = 'd';
parent.save(callback);
```

`parent`在执行保存时，由于包含`children2`，他是一个`数据库模型对象`，因此会先保存chilren2[0]和chilren2[1]。

如果子文档在更新时出现错误，将直接报在父类文档中，可以这样处理：

```javascript
ChildrenSchema.pre('save',function(next){
	if('x' === this.name) return next(new Error('#err:not-x'));
	next();
});
var parent = new ParentModel({children1:{name:'not-x'}});
parent.save(function(err){
	console.log(err.message); //#err:not-x
});
```

**查询子文档**

如果`children`是`parent`的子文档，可以通过如下方法查询到children

	 var child = parent.children.id(id);

**Sub-Docs 新增、删除、更新**

子文档是父文档的一个属性，因此按照属性的操作即可，不同的是在新增父类的时候，子文档是会被先加入进去的。

如果`ChildrenSchema`是临时的一个子文档，不作为数据库映射集合，可以这样：

```javascript
var ParentSchema = new Schema({
	children:{
		name:String
	}
});
//其实就是匿名混合模式
```

### Model

**什么是Model**

`Model`模型，是经过`Schema` `构造`来的，除了Schema定义的数据库骨架以外，还具有数据库行为模型，他相当于管理数据库属性、行为的类

**如何创建Model**

你必须通过Schema来创建，如下：

```javascript
//先创建Schema
var TankSchema = new Schema({
	name:'String',
	size:'String' 
});
//通过Schema创建Model
var TankModel = mongoose.model('Tank',TankSchema);
```

**如何操作Model**

该模型就能直接拿来操作，具体查看API，例如：

```javascript
var tank = {'something',size:'small'};
TankModel.create(tank);
```

**注意**

你可以使用`Model`来创建`Entity`，Entity实体是一个特有Model具体对象，但是他并`不具备Model的方法`，只能用自己的方法。

```javascript
//通过Model创建Entity
var tankEntity = new TankModel('someother','size:big');
tankEntity.save();
```

**Query** (具体查看另一篇常用方法文章)

查询是数据库中运用最多也是最麻烦的地方，这里对Query解读的并不完善，仅仅是自己的一点领悟而已。(与原作者不同，幸好之前我干过java接触过oracle和sqlserver。。。)

**Validation**

数据的存储是需要验证的，不是什么数据都能往数据库里丢或者显示到客户端的，数据的验证需要记住以下规则：

> * 验证始终定义在SchemaType中
> * 验证是一个内部中间件
> * 验证是在一个Document被保存时默认启用的，除非你关闭验证
> * 验证是异步递归的，如果你的SubDoc验证失败，Document也将无法保存
> * 验证并不关心错误类型，而通过ValidationError这个对象可以访问

**验证器**

|属性|作用|
|:--|:--|
|required|非空验证|
|min/max|范围验证（边值验证）|
|enum/match|枚举验证/匹配验证|
|validate|自定义验证规则|

以下是综合案例：

```javascript
var PersonSchema = new Schema({
	name:{
		type:'String',
		required:true //姓名非空
	},
	age:{
		type:'Nunmer',
		min:18,       //年龄最小18
		max:120     //年龄最大120
	},
	city:{
		type:'String',
		enum:['北京','上海']  //只能是北京、上海人
	},
	other:{
		type:'String',
		validate:[validator,err]  //validator是一个验证函数，err是验证失败的错误信息
	}
});
```

**验证失败**

如果验证失败，则会返回`err信息`，err是一个对象该对象属性如下

|属性|作用|
|:--|:--|
|err.errors|错误集合（对象）|
|err.errors.color|错误属性(Schema的color属性)|
|err.errors.color.message|错误属性信息|
|err.errors.path|错误属性路径|
|err.errors.type|错误类型|
|err.name|错误名称|
|err.message|错误消息|

一旦验证失败，`Model`和`Entity`都将具有和`err`一样的`errors属性`

### Middleware中间件

**什么是中间件**

中间件是一种控制函数，类似插件，能控制流程中的`init`、`validate`、`save`、`remove`方法

**中间件的分类** 

中间件分为两类:`Serial串行`,`Parallel并行`

**Serial串行**

串行使用`pre`方法，执行下一个方法使用`next`调用

```javascript
var schema = new Schema(...);
schema.pre('save',function(next){
	//做点什么
	next();
});
```

**Parallel并行**

并行提供更具细粒度的操作

```javascript
var schema = new Schema(...);
schema.pre('save',function(next,done){
	//下一个要执行的中间件并行执行
	next();
	doAsync(done);
});
```

**中间件特点**

一旦定义了中间件，就会在`全部中间件执行完后`执行其他操作，使用中间件可以`雾化模型`，`避免`异步操作的层层迭代嵌套

**使用范畴**

* 复杂的验证
* 删除有主外关联的doc
* 异步默认
* 某个特定动作触发异步任务，例如触发自定义事件和通知

例如，可以用来做自定义错误处理

```javascript
schema.pre('save',function(next){
	var err = new Eerror('some err');
	next(err);
});
entity.save(function(err){
	console.log(err.message); //some err
});
```






















