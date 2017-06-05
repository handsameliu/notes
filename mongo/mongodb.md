	������ʽ�� mongod --dbpath D:\Mongodb\data 

> D:\MongodbΪ��װ��ַ


## MongoDB���ݿ�����÷�

|����|����|
|:--|:--| 
|show dbs|��ʾ���ݿ��б� |
|show collections|��ʾ��ǰ���ݿ��еļ��ϣ����ƹ�ϵ���ݿ��еı�|
|show users|��ʾ�û�|
|use <db name>|�л���ǰ���ݿ⣬���MS-SQL�������˼һ��|
|db.help()|��ʾ���ݿ������������кܶ������ |
|db.foo.help()|��ʾ���ϲ������ͬ���кܶ�����fooָ���ǵ�ǰ���ݿ��£�һ����foo�ļ��ϣ��������������ϵ����� |
|db.foo.find()|���ڵ�ǰ���ݿ��е�foo���Ͻ������ݲ��ң�����û�����������г��������ݣ�|
|db.foo.find( { a : 1 } )|���ڵ�ǰ���ݿ��е�foo���Ͻ��в��ң���������������һ�����Խ�a����a��ֵΪ1|

> MongoDBû�д������ݿ������������Ƶ�����磺������봴��һ����myTest�������ݿ⣬������use myTest���֮�����һЩ�������磺db.createCollection('user')��,�����Ϳ��Դ���һ�����С�myTest�������ݿ⡣

## ���ݿⳣ������

### 1��Help�鿴������ʾ

|����|����|
|:--|:--|
|db.help()||
|db.yourColl.help()||
|db.youColl.find().help()||
|rs.help()||

### 2���л�/�������ݿ�

	use yourDB; ������һ������(table)��ʱ����Զ�������ǰ���ݿ�

### 3����ѯ�������ݿ�

	show dbs;

### 4��ɾ����ǰʹ�����ݿ�

	db.dropDatabase();

### 5����ָ�������Ͽ�¡���ݿ�

	db.cloneDatabase(��127.0.0.1��); ��ָ�������ϵ����ݿ�����ݿ�¡����ǰ���ݿ�  

### 6����ָ���Ļ����ϸ���ָ�����ݿ����ݵ�ĳ�����ݿ�
	
	db.copyDatabase("mydb", "temp", "127.0.0.1");��������mydb�����ݸ��Ƶ�temp���ݿ���    db.copyDatabase('atl_db','atl_db','192.168.3.44:27017');   in��out��Ŀ��ip��ַ

### 7���޸���ǰ���ݿ�

	db.repairDatabase();

### 8���鿴��ǰʹ�õ����ݿ�

	db.getName();
	db; db��getName������һ����Ч���������Բ�ѯ��ǰʹ�õ����ݿ�

### 9����ʾ��ǰdb״̬

	 db.stats();

### 10����ǰdb�汾

	 db.version();

### 11���鿴��ǰdb�����ӻ�����ַ

	 db.getMongo();

## Collection�ۼ�����

###1������һ���ۼ����ϣ�table��

	db.createCollection(��collName��, {size: 20, capped: 5, max: 100});

###2���õ�ָ�����Ƶľۼ����ϣ�table��

	db.getCollection("account");

###3���õ���ǰdb�����оۼ�����

	db.getCollectionNames();

###4����ʾ��ǰdb���оۼ�������״̬

	db.printCollectionStats();

## �û����

### 1�����һ���û�
	
	db.addUser("name");
	db.addUser("userName", "pwd123", true); ����û����������롢�Ƿ�ֻ��
### 2�����ݿ���֤����ȫģʽ

	db.auth("userName", "123123");

### 3����ʾ��ǰ�����û�

	show users;

### 4��ɾ���û�

	db.removeUser("userName");

## ����

### 1����ѯ֮ǰ�Ĵ�����Ϣ

	db.getPrevError();

### 2����������¼

	db.resetError();

## �鿴�ۼ����ϻ�����Ϣ

|����|����|
|:--|:--|
|db.yourColl.help()|�鿴��ǰ���ϵİ���|
|db.yourColl.count()|��ѯ��ǰ���ϵ���������|
|db.userInfo.dataSize()|�鿴userInfo���ϵ����ݿռ��С|
|db.userInfo.getDB()|�鿴userInfo���ϵ����ڵ�db|
|db.userInfo.stats()|�鿴userInfo���ϵ�״̬|
|db.userInfo.totalSize()|�鿴userInfo���ϵ��ܴ�С|
|db.userInfo.storageSize()|�鿴userInfo���ϵĴ���ռ��С|
|db.userInfo.getShardVersion()|�鿴userInfo���ϵ�Shard�汾��Ϣ|
|db.userInfo.renameCollection("users")|userInfo���ϵ�������|
|db.userInfo.drop()|ɾ��userInfo����|

## �ۼ����ϲ�ѯ

> ��userInfo��Ϊ��

|����|����|����|
|:--|:--|:--|
|��ѯ���м�¼|db.userInfo.find()|�൱�ڣ�select* from userInfo;Ĭ��ÿҳ��ʾ20����¼������ʾ���µ�����£�������it���������ѯ��һҳ���ݡ�ע�⣺����it����ܴ��������������������ÿҳ��ʾ���ݵĴ�С����DBQuery.shellBatchSize= 50;����ÿҳ����ʾ50����¼�ˡ�|
|��ѯȥ����ĵ�ǰ�ۼ������е�ĳ�е��ظ�����|db.userInfo.distinct("name")|����˵�name�е���ͬ���ݣ��൱�ڣ�select distict name from userInfo;|
|��ѯage = 22�ļ�¼|db.userInfo.find({"age": 22})|�൱�ڣ� select * from userInfo where age = 22;|
|��ѯage > 22�ļ�¼|db.userInfo.find({age: {$gt: 22}})|�൱�ڣ�select * from userInfo where age >22;|
|��ѯage < 22�ļ�¼|db.userInfo.find({age: {$lt: 22}})|�൱�ڣ�select * from userInfo where age <22;|
|��ѯage >= 25�ļ�¼|db.userInfo.find({age: {$gte: 25}})|�൱�ڣ�select * from userInfo where age >= 25;|
|��ѯage <= 25�ļ�¼|db.userInfo.find({age: {$lte: 25}})|�൱�ڣ�select * from userInfo where age <= 25;|
|��ѯage >= 23 ���� age <= 26|db.userInfo.find({age: {$gte: 23, $lte: 26}})|�൱��: select * from userInfo where age>=23 && age<=26|
|��ѯname�а��� mongo������|db.userInfo.find({name: /mongo/});|//�൱��%%  select * from userInfo where name like ��%mongo%';|
|��ѯname����mongo��ͷ��|db.userInfo.find({name: /^mongo/})|select * from userInfo where name like ��mongo%'|
|��ѯָ����name��age����|db.userInfo.find({}, {name: 1, age: 1})|�൱�ڣ�select name, age from userInfo;��ȻnameҲ������true��false,����ture������º�name:1Ч��һ���������false�����ų�name����ʾname���������Ϣ|
|��ѯָ����name��age����, age > 25|db.userInfo.find({age: {$gt: 25}}, {name: 1, age: 1})|�൱�ڣ�select name, age from userInfo where age >25|
|������������|����db.userInfo.find().sort({age: 1});
����db.userInfo.find().sort({age: -1})||
|��ѯname = zhangsan, age = 22������|db.userInfo.find({name: 'zhangsan', age: 22})|�൱�ڣ�select * from userInfo where name = ��zhangsan' and age = ��22'|
|��ѯǰ5������|db.userInfo.find().limit(5)|�൱�ڣ�selecttop 5 * from userInfo|
|��ѯ10���Ժ������|db.userInfo.find().skip(10);|�൱�ڣ�select * from userInfo where id not in (selecttop 10 * from userInfo)|
|��ѯ��5-10֮�������|db.userInfo.find().limit(10).skip(5);|�����ڷ�ҳ��limit��pageSize��skip�ǵڼ�ҳ*pageSize|
|or�� ��ѯ|db.userInfo.find({$or: [{age: 22}, {age: 25}]})|�൱�ڣ�select * from userInfo where age = 22 or age = 25|
|��ѯ��һ������|db.userInfo.findOne()|�൱�ڣ�selecttop 1 * from userInfo;db.userInfo.find().limit(1);|
|��ѯĳ��������ļ�¼����|db.userInfo.find({age: {$gte: 25}}).count()|�൱�ڣ�select count(*) from userInfo where age >= 20;|
|����ĳ�н�������|db.userInfo.find({xxx: {$exists: true}}).count() | �൱�ڣ�select count(xxx) from userInfo;|

## ����

### 1����������

	db.userInfo.ensureIndex({name: 1});
	db.userInfo.ensureIndex({name: 1, ts: -1});

### 2����ѯ��ǰ�ۼ�������������

	db.userInfo.getIndexes();

### 3���鿴��������¼��С

	db.userInfo.totalIndexSize();

### 4����ȡ��ǰ���ϵ�����index��Ϣ

	db.users.reIndex();

### 5��ɾ��ָ������

	db.users.dropIndex("name_1");

### 6��ɾ��������������

	db.users.dropIndexes();

## �޸ġ���ӡ�ɾ����������

### ���

	db.users.save({name: ��zhangsan', age: 25, ***: true});
	��ӵ����ݵ������У�û�й̶���������ӵ�����Ϊ׼

### ɾ��

	db.users.remove({age: 132});

### �޸�

	db.users.update({age: 25}, {$set: {name: 'changeName'}}, false, true);
	�൱�ڣ�update users set name = ��changeName' where age = 25;
	db.users.update({name: 'Lisi'}, {$inc: {age: 50}}, false, true);
	�൱�ڣ�update users set age = age + 50 where name = ��Lisi';
	db.users.update({name: 'Lisi'}, {$inc: {age: 50}, $set: {name: 'hoho'}}, false, true);
	�൱�ڣ�update users set age = age + 50, name = ��hoho' where name = ��Lisi';

### ��ѯ�޸�ɾ��

	db.users.findAndModify({
	  query: {age: {$gte: 25}}, 
	  sort: {age: -1}, 
	  update: {$set: {name: 'a2'}, $inc: {age: 2}},
	  remove: true
	});
	db.runCommand({ findandmodify : "users", 
	  query: {age: {$gte: 25}}, 
	  sort: {age: -1}, 
	  update: {$set: {name: 'a2'}, $inc: {age: 2}},
	  remove: true
	});

|����|���|Ĭ��ֵ|
|:--|:--|:--|
|query|��ѯ��������|{}|
|sort|�������ĵ����ϲ�ѯ�������������Ըò���ָ�������з�ʽѡ���������λ�Ķ��󣬸ö��󽫱�����|{}|
|remove|��Ϊtrue����ѡ�ж����ڷ���ǰ��ɾ��|N/A|
|update|һ�� �޸�������|N/A|
|new|��Ϊtrue���������޸ĺ�Ķ��������ԭʼ������ɾ�������У��ò��������ԡ�|false|
|fields|�μ�Retrieving a Subset of Fields (1.5.0+)|All fields|
|upsert|�����¶�������ѯ���Ϊ�ա� ʾ�� (1.5.4+)|false|

## �������

### 1����Hello World

	print("Hello World!");
	����д��������print��������ֱ��д��"Hello World!"��Ч����һ���ģ�

### 2����һ������ת����json

	tojson(new Object());
	tojson(new Object('a'));

### 3��ѭ���������

	> for (var i = 0; i < 30; i++) {
	... db.users.save({name: "u_" + i, age: 22 + i, ***: i % 2});
	... };
	������ѭ�������30�����ݣ�ͬ��Ҳ����ʡ�����ŵ�д��
	> for (var i = 0; i < 30; i++) db.users.save({name: "u_" + i, age: 22 + i, ***: i % 2});
	Ҳ�ǿ��Եģ�������db.users.find()��ѯ��ʱ����ʾ�������ݶ��޷�һҳ��ʾ������£�������it�鿴��һҳ����Ϣ��

### 4��find �α��ѯ

	>var cursor = db.users.find();
	> while (cursor.hasNext()) { 
	  printjson(cursor.next()); 
	}
	�����Ͳ�ѯ���е�users��Ϣ��ͬ����������д
	var cursor = db.users.find();
	while (cursor.hasNext()) { printjson(cursor.next); }
	ͬ������ʡ��{}��

### 5��forEach����ѭ��

	db.users.find().forEach(printjson);
	forEach�б��봫��һ������������ÿ��������������Ϣ

### 6����find�α굱���鴦��

	var cursor = db.users.find();
	cursor[4];
	ȡ���±�����Ϊ4����������
	��Ȼ���Ե������鴦����ô�Ϳ��Ի�����ĳ��ȣ�cursor.length();����cursor.count();
	��������Ҳ������ѭ����ʾ����
	for (var i = 0, len = c.length(); i < len; i++) printjson(c[i]);

### 7����find�α�ת��������

	> var arr = db.users.find().toArray();
	> printjson(arr[2]);
	��toArray��������ת��Ϊ����

### 8�����������Լ��Ĳ�ѯ���

	ֻ��ʾage <= 28�Ĳ���ֻ��ʾage��������
	db.users.find({age: {$lte: 28}}, {age: 1}).forEach(printjson);
	db.users.find({age: {$lte: 28}}, {age: true}).forEach(printjson);
	�ų�age����
	db.users.find({age: {$lte: 28}}, {age: false}).forEach(printjson);

### 9��forEach���ݺ�����ʾ��Ϣ
	
	db.things.find({x:4}).forEach(function(x) {print(tojson(x));});

### 10����ѯʱ��

	db.users.find({createTime:new Date(time)});
	db.users.find({createTime:{$gt:new Date(time),$lt:new Date(time)}}); 


