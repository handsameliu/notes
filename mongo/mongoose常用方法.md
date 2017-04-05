> http://www.nodeclass.com/api/mongoose.html   官方文档

### Model.find

```javascript
Model.find(query, fields, options, callback)
// 共四个参数，但是fields 和 options 都是可选参数
// 参数1忽略,或为空对象则返回所有集合文档
```

> 一般使用方法

```javascript
Model.find({ '性别': '0' }, function (err, docs) { // docs 是查询的结果数组，默认返回单条内所有字段数据 });
```

> 返回指定键数据的方法（过滤查询）

```javascript
Model.find({}, ['age', 'name'], function (err, docs) {
  // docs 此时只包含文档的部分键值
  // 参数2页可使用对象  {'name':1,'age':0} 查询文档的返回结果包含name , 不包含age.(_id默认是1)
})

Model.find({},null,{limit:20});		//过滤查询,参数3: 游标操作 limit限制返回结果数量为20个,如不足20个则返回所有.


```

### Model.findOne
> 与 Model.find 相同，但只返回查询到的第一个文档对象，

```javascript
Model.findOne({'age': 18}, function (err, doc){
  // doc 是单个文档对象
});
```

### Model.findById
> 与 findOne 相同，但它接收文档的 _id 作为参数，返回单个文档。_id 可以是字符串或 ObjectId 对象。

```javascript
Model.findById(obj._id, function (err, doc){
  // doc 是单个文档
});
```

### Model.count
> 返回符合条件的文档数。

```javascript
Model.count(conditions, callback);
```

### Model.create
> 在集合中创建一个文档

```
Model.create({'name':'liu','age':18}, callback))
```

### Model.remove
> 删除符合条件的文档。

```javascript
Model.remove(conditions, callback);
```

### Model.distinct
> 查询符合条件的文档并返回根据键分组的结果。

```javascript
Model.distinct(field, conditions, callback);
```

### Model.where
> 当查询条件比较复杂时使用where语句

```javascript
Model
	.where('age').gte(25)
	.where('tags').in(['movie', 'music', 'art'])
	.select('name', 'age', 'tags')
	.skip(20)
	.limit(10)
	.asc('age')
	.slaveOk()
	.hint({ age: 1, name: 1 })
	.run(callback);
```

### Model.$where
> 有时我们需要在 mongodb 中使用 javascript 表达式进行查询，这时可以用 find({$where : javascript}) 方式，$where 是一种快捷方式，并支持链式调用查询。

```javascript
Model.$where('this.firstname === this.lastname').exec(callback)
```

### Model.update
> 使用 update 子句更新符合指定条件的文档.
> 更新数据在发送到数据库服务器之前会改变模型的类型。

```javascript
var conditions = { name: 'borne' }, update = { $inc: { visits: 1 }}, options = { multi: true };
Model.update(conditions, update, options, callback)
// 参数1:查询条件, 参数2:更新对象,可以使用MondoDB的更新修改器
```

> 注意：为了向后兼容，所有顶级更新键如果不是原子操作命名的，会统一被按 $set 操作处理，例如：

```javascript
var query = { name: 'borne' };
Model.update(query, { name: 'jason borne' }, options, callback)

// 会被这样发送到数据库服务器，可以直接写成这个样子

Model.update(query, { $set: { name: 'jason borne' }}, options, callback)
```

### 查询 API
> 如果不提供回调函数，所有这些方法都返回 Query 对象，它们都可以被再次修改（比如增加选项、键等），直到调用 exec 方法。

```javascript
var query = Model.find({});

query.where('field', 5);
query.limit(5);
query.skip(100);

query.exec(function (err, docs) {
  // called when the `query.complete` or `query.error` are called
  // internally
});
```

### 修改器和更新器

#### 更新修改器:

**'$inc'** :增减修改器,只对数字有效.下面的实例: 找到 age=22的文档,修改文档的age值自增1

	Model.update({'age':22}, {'$inc':{'age':1} } ); // 执行后: age=23

**'$set'** :指定一个键的值,这个键不存在就创建它.可以是任何MondoDB支持的类型.

	Model.update({'age':22}, {'$set':{'age':'haha'} } ); // 执行后: age='haha'

**'$unset'** :同上取反,删除一个键

	Model.update({'age':22}, {'$unset':{'age':'haha'} } ); // 执行后: age键不存在

#### 数组修改器:

**'$push'** :给一个键push一个数组成员,键不存在会创建

	Model.update({'age':22}, {'$push':{'array':10} } ); // 执行后: 增加一个 array 键,类型为数组, 有一个成员 10

**'$addToSet'** :向数组中添加一个元素,如果存在就不添加

	Model.update({'age':22}, {'$addToSet':{'array':10} } ); // 执行后: array中有10所以不会添加

**'$each'** :遍历数组, 和 $push 修改器配合可以插入多个值

	Model.update({'age':22}, {'$push':{'array':{'$each': [1,2,3,4,5]}} } ); // 执行后: array : [10,1,2,3,4,5]

**'$pop'** :向数组中尾部删除一个元素

	Model.update({'age':22}, {'$pop':{'array':1} } ); // 执行后: array : [10,1,2,3,4] tips: 将1改成-1可以删除数组首部元素

**'$pull'** :向数组中删除指定元素

	Model.update({'age':22}, {'$pull':{'array':10} } ); // 执行后: array : [1,2,3,4] 匹配到array中的10后将其删除

#### 条件查询:

|条件|功能|
|:--|:--|
|$lt|小于|
|$lte|小于等于|
|$gt|大于|
|$gte|大于等于|
|$ne|不等于|

```javascript
Model.find({"age":{ "$get":18 , "$lte":30 } } );
// 查询 age 大于等于18并小于等于30的文档
```

#### 或查询 OR:

|条件|功能|
|:--|:--|
|$in|一个键对应多个值|
|$nin|同上取反, 一个键不对应指定值|
|$or|多个条件匹配, 可以嵌套 $in 使用|
|$not|同上取反, 查询与特定模式不匹配的文档|

```javascript
Model.find({"age":{ "$in":[20,21,22.'haha']} } );
// 查询 age等于20或21或21或'haha'的文档

Model.find({"$or" : [ {'age':18} , {'name':'xueyou'} ] }); 
// 查询 age等于18 或 name等于'xueyou' 的文档
```

#### 类型查询:

null 能匹配自身和不存在的值, 想要匹配键的值 为null, 就要通过 “$exists” 条件判定键值已经存在 “$exists” (表示是否存在的意思)

> Model.find(“age” : { “$in” : [null] , “exists” : true } ); 查询 age值为null的文档

```javascript
Model.find({name: {$exists: true}},function(error,docs){
  //查询所有存在name属性的文档
});

Model.find({telephone: {$exists: false}},function(error,docs){
  //查询所有不存在telephone属性的文档
});
```

#### 正则表达式:

MongoDb 使用 Prel兼容的正则表达式库来匹配正则表达式

```javascript
find( {"name" : /joe/i } )
查询name为 joe 的文档, 并忽略大小写

find( {"name" : /joe?/i } ) 查询匹配各种大小写组合
```

#### 查询数组:

```javascript
Model.find({"array":10} ); 
// 查询 array(数组类型)键中有10的文档, array : [1,2,3,4,5,10] 会匹配到

Model.find({"array[5]":10} ); 
// 查询 array(数组类型)键中下标5对应的值是10, array : [1,2,3,4,5,10] 会匹配到
```

#### '$all' 匹配数组中多个元素

```javascript
Model.find({"array":[5,10]} ); 查询 匹配array数组中 既有5又有10的文档
```

#### '$size' 匹配数组长度

```javascript
Model.find({"array":{"$size" : 3} } ); 查询 匹配array数组长度为3 的文档
```

#### '$slice' 查询子集合返回

```javascript
Model.find({"array":{"$skice" : 10} } ); 
// 查询 匹配array数组的前10个元素
Model.find({"array":{"$skice" : [5,10] } } ); 
// 查询 匹配array数组的第5个到第10个元素
```

#### where

用它可以执行任意javacript语句作为查询的一部分,如果回调函数返回 true 文档就作为结果的一部分返回

```javascript
find({"$where":function(){
	for( var x in this ){
	 //这个函数中的 this 就是文档
	}
	if(this.x !== null && this.y !== null){
		return this.x + this.y === 10 ? true : false;
	}else{
		return true;
	}
}})

// 简化版本

find( {"$where":"this.x + this.y === 10"})
find( {"$where":"function(){return this.x + this.y ===10;}"})
```
