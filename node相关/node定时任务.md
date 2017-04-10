工作中需要使用到定时任务，完成`推送`信息，所以找到了 `node-schedule` 这个包。

> 参考 http://www.cnblogs.com/zhongweiv/p/node_schedule.html 

首先下载 `npm install node-schedule --save` , 并导入到js文件中 `const schedule = require('node-schedule')`;

由于项目只有一个推送所以目前只用到了一个方法 `scheduleJob(date,function)`;（建议单起一个线程来执行推送任务 `process.nextTick()`）

date是一个时间，他主要设置方法在什么时候执行。

> 这里的时间可以是一个对象，也可以是一个格式化后的字符串。

```
1. 日期对象可以使用 moment.js 包来格式化，或者自己按照schedule时间对象格式来设置 
2. Cron字符串是特定的格式由6个字符组成，可以使用通配符*（任意时间都可以触发）。时间按照秒，分，时，日，月，周的顺序设置。
3. new Date的日期也可以，但要注意月份要减1
例：Cron字符串
	* * * * * *
	┬ ┬ ┬ ┬ ┬ ┬
	│ │ │ │ │ |
	│ │ │ │ │ └ day of week (0 - 7) (0 or 7 is Sun)
	│ │ │ │ └───── month (1 - 12)
	│ │ │ └────────── day of month (1 - 31)
	│ │ └─────────────── hour (0 - 23)
	│ └──────────────────── minute (0 - 59)
	└───────────────────────── second (0 - 59, OPTIONAL)
```

> * 每分钟的第30秒触发： '30 * * * * *'

> * 每小时的1分30秒触发 ：'30 1 * * * *'

> * 每天的凌晨1点1分30秒触发 ：'30 1 1 * * *'

> * 每月的1日1点1分30秒触发 ：'30 1 1 1 * *'

> * 2016年的1月1日1点1分30秒触发 ：'30 1 1 1 2016 *'

> * 每周1的1点1分30秒触发 ：'30 1 1 * * 1'

> * 具体可以根据自己的需求自行实现效果。

**Cron字符串方式**

```javascript
schedule.scheduleJob('1 1 * * * *', function(){		// 每小时的1秒触发内部的
	console.log('scheduleCronstyle:' + new Date());
}); 
```

**还可以使用schedule自带的方法设置触发时间**：

```javascript
var schedule = require('node-schedule');

function scheduleRecurrenceRule(){

    var rule = new schedule.RecurrenceRule();
    // rule.dayOfWeek = 2;
    // rule.month = 3;
    // rule.dayOfMonth = 1;
    // rule.hour = 1;
    // rule.minute = 42;
    rule.second = 0;
	//rule.minute = [1,6,11,16];	//数组格式，会按照数组内的数组执行
    
    schedule.scheduleJob(rule, function(){
       console.log('scheduleRecurrenceRule:' + new Date());
    });
}

scheduleRecurrenceRule();

// 每到0秒的时候就会执行一次
// 这里的日期可以设置为数组，程序会按照数组内的数字执行方法
```

**使用对象方式设置时间**

```javascript
var schedule = require('node-schedule');

function scheduleObjectLiteralSyntax(){

    //dayOfWeek
    //month
    //dayOfMonth
    //hour
    //minute
    //second

    schedule.scheduleJob({hour: 16, minute: 11, dayOfWeek: 1}, function(){
        console.log('scheduleObjectLiteralSyntax:' + new Date());
    });
}
scheduleObjectLiteralSyntax();

// 每周一的16点11分执行，其他时间可以根据注释中的名称来自由搭配
```

**取消定时器**

```javascript
var schedule = require('node-schedule');

function scheduleCancel(){
    var counter = 1;
    var j = schedule.scheduleJob('* * * * * *', function(){
        console.log('定时器触发次数：' + counter);
        counter++;
    });
    setTimeout(function() {
        console.log('定时器取消')
        j.cancel();   
    }, 5000);
}

scheduleCancel();

// 五秒后停止定时器
```









