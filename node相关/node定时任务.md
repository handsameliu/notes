��������Ҫʹ�õ���ʱ�������`����`��Ϣ�������ҵ��� `node-schedule` �������

> �ο� http://www.cnblogs.com/zhongweiv/p/node_schedule.html 

�������� `npm install node-schedule --save` , �����뵽js�ļ��� `const schedule = require('node-schedule')`;

������Ŀֻ��һ����������Ŀǰֻ�õ���һ������ `scheduleJob(date,function)`;�����鵥��һ���߳���ִ���������� `process.nextTick()`��

date��һ��ʱ�䣬����Ҫ���÷�����ʲôʱ��ִ�С�

> �����ʱ�������һ������Ҳ������һ����ʽ������ַ�����

```
1. ���ڶ������ʹ�� moment.js ������ʽ���������Լ�����scheduleʱ������ʽ������ 
2. Cron�ַ������ض��ĸ�ʽ��6���ַ���ɣ�����ʹ��ͨ���*������ʱ�䶼���Դ�������ʱ�䰴���룬�֣�ʱ���գ��£��ܵ�˳�����á�
3. new Date������Ҳ���ԣ���Ҫע���·�Ҫ��1
����Cron�ַ���
	* * * * * *
	�� �� �� �� �� ��
	�� �� �� �� �� |
	�� �� �� �� �� �� day of week (0 - 7) (0 or 7 is Sun)
	�� �� �� �� ������������ month (1 - 12)
	�� �� �� ���������������������� day of month (1 - 31)
	�� �� �������������������������������� hour (0 - 23)
	�� ������������������������������������������ minute (0 - 59)
	���������������������������������������������������� second (0 - 59, OPTIONAL)
```

> * ÿ���ӵĵ�30�봥���� '30 * * * * *'

> * ÿСʱ��1��30�봥�� ��'30 1 * * * *'

> * ÿ����賿1��1��30�봥�� ��'30 1 1 * * *'

> * ÿ�µ�1��1��1��30�봥�� ��'30 1 1 1 * *'

> * 2016���1��1��1��1��30�봥�� ��'30 1 1 1 2016 *'

> * ÿ��1��1��1��30�봥�� ��'30 1 1 * * 1'

> * ������Ը����Լ�����������ʵ��Ч����

**Cron�ַ�����ʽ**

```javascript
schedule.scheduleJob('1 1 * * * *', function(){		// ÿСʱ��1�봥���ڲ���
	console.log('scheduleCronstyle:' + new Date());
}); 
```

**������ʹ��schedule�Դ��ķ������ô���ʱ��**��

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
	//rule.minute = [1,6,11,16];	//�����ʽ���ᰴ�������ڵ�����ִ��
    
    schedule.scheduleJob(rule, function(){
       console.log('scheduleRecurrenceRule:' + new Date());
    });
}

scheduleRecurrenceRule();

// ÿ��0���ʱ��ͻ�ִ��һ��
// ��������ڿ�������Ϊ���飬����ᰴ�������ڵ�����ִ�з���
```

**ʹ�ö���ʽ����ʱ��**

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

// ÿ��һ��16��11��ִ�У�����ʱ����Ը���ע���е����������ɴ���
```

**ȡ����ʱ��**

```javascript
var schedule = require('node-schedule');

function scheduleCancel(){
    var counter = 1;
    var j = schedule.scheduleJob('* * * * * *', function(){
        console.log('��ʱ������������' + counter);
        counter++;
    });
    setTimeout(function() {
        console.log('��ʱ��ȡ��')
        j.cancel();   
    }, 5000);
}

scheduleCancel();

// �����ֹͣ��ʱ��
```









