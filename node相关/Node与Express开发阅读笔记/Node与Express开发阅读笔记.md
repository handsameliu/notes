# Node与Express开发阅读笔记

标签（空格分隔）： node express

---

## 第一章 初识Express

  - Express最吸引人的特性之一就是精简，灵活。Express的哲学是在你的想法和服务器之间充当薄薄的一层。这边行不以为这他不够健壮，或者没有足够的游泳特性，而是尽量少干预你，让你充分表达自己的思想，同事提供一些游泳的东西。
  - Express哲学中的另一个关键点是可扩展。express提供了一个非常精简的框架，你可以根据自己的需要添加express功能中的不同部分，替换掉不能满足需要的部分。
  - 使用express可以开发出Web程序框架，单页web程序，多页和混合的web程序。
  - 相对于3.0，4.0的升级了好多
     - Connect在整个版本中被去掉了，所以除了static中间件，还需要自己安装相应的connect开发包。
     - body-parser也有自己的包了。
     - 不必再将express router链接到程序里。应该从已有的express3.0中去掉app.use(app.route)。
     - app.configure被去掉了，只要检查app.get(env)(用switch或if语句)就可以去到该方法。
  - Node跟其他流行的web服务器有很多的共同点。
    - node实现web服务器的方式更express很想，也非常精简。node单间和配置非常容易，不想iis或apache要花费多年的时间才能掌握精髓。当然要让node服务器在生产环境下发挥出最有的性能，进行调优也绝非易事，只不过是配置选项更简单，也更直接了。
    - node与传统的web服务器之间的另一个主要区别是：`node是单线程的`。乍一看可能觉得这是倒退。但事实证明，这是天才之举。单项城极大的简化了web程序的编写，如果你需要多项城程序的性能，只需要启用更多的node实例，就可以得到多项城的性能优势。有人可能觉得我说的是烟雾弹。毕竟，通过服务器并行（相对于程序的并行）的多项城只是把复杂性转移了，但并没有消除它。但依我之见，他是把复杂性放到了他应该存在的地方。更进一步说，随着云计算的日益流行，以及将服务器当做普通商品看待的祛湿越来越明显，这种方式也变得更有意义了。iis和apahce确实强大，并且他们的设计目标是要榨取如今强大的硬件设施的最后一点性能。但那时需要付出代价的。既他需要相当专业的设置和调优才能榨取那些性能。
    - 在编写方式上，相对于.net和java程序，node程序更像php或ruby。尽管node所用的javascript引擎（谷歌的v8）确实会将javascript变异为本地机器码(更像c或c++),但这一操作都是透明的（即时编译），所以从用户的角度来看，他表现的还是想纯粹的解释型语言一样。没有单独的编译步骤，这减少了维护和部署的麻烦。你所要做的知识更新javascript文件，然后你的修改就自动生效了。
    - node程序的另一个好处就是它的平台无关性。任何平台都能简单的实现node。
  - node生态系统
    - node处于这个技术栈的核心位置。就是他让javascript从浏览器中分离出来，得意在服务器上运行，今儿可以使用javascript携程的框架（比如express）。灵位一个组件就是数据库。除了最简单的web程序，所有的程序都需要数据库，并且node生态系统中的数据库更多。（nosql型）
    - 当前主流关系型数据库（mysql，mariadb,postgresql,oracle,sql server）的接口都有，这一点并不奇怪，因为护士那些已经成熟的巨无霸太不明智了，然而node开发的出现带动了一种新式的数据库存储方式，这种方式呗成为“nosql数据库”。用否定的方式来下定义有时并不恰当，所以我们更准确的称之为“文档数据库”或“键/值对数据库”。他们提供了一种概念上更简单的数据存储方式。这种数据库很多，但mongodb是其中的佼佼者，也是我们要学习的数据库。
    - 由于构建一个功能性质的网站需要使用到很多的技术，因此衍生出一种用来描述网站构建基础的“技术栈”的缩略词。比如说：linux,apache,mysql和php被称为lamp栈。mongodb的工程师发明了mean，只带mongo，express，angular和node。尽管他朗朗上口，却又其局限性：可选的数据库和应用程序框架有很多mean无法体现这个生态系统的多样性（他还漏掉了我认为非常重要的组件：模版引擎）
  - 授权
    - 开发node时会遇到授权问题，node生态上（npm）中存在大量可用的开发包，然后那些包都有其自身的授权，每个包可能还依赖于其他的包，也就是说要明白你写的程序的所有授权是很难的。
        - npm中可以搜索license-sniffer或license-spelunker。来帮助我们确定每个包中的授权。
    - 最常见的授权是MIT，但也可能遇到：
        - GNU通用公共授权
        - apache2.0
        - 伯克利软件分发（BSD）
    - 自己开发的包最后选一个授权并在文档中正确声明，对于一个开发人员来说，没有什么比深挖源码才能确定所用开发包的授权更恐怖的了，或者更糟的是发现他根本没有授权。

----------

## 第二章 从Node开始

- 首先获取node，可以通过官网下载
- 学会使用终端（可以找自己熟练的终端使用，或者使用git的git bash，或者使用虚拟机VM），学会使用终端命令，学会后可以大大帮助你，提升开发效率。
- 编译器：可以找到自己喜欢的编译器来编写node，目前使用最多的是webstorm因为他集成了好多功能（atom，vscode，eclipse，visual studio ，emacs，vim，sublime等等）
- npm是随处可见的node开发包管理器，从广义上来讲包管理器的两个主要职责是安装开发包和管理依赖项。npm是一个快速高能并且毫不费力的包管理器，在node生态系统的告高速成长和多样化过程中发挥了重要作用。
    - 当你安装node时npm就被装上了（目前已经集成到一起，我使用的是6.6版本）
    - 在使用npm是最用的命令是install。既安装。例如：npm install -g angular-cli
    - -g的意识是告诉npm这个包是全局安装的，既全局都能访问到他
    - 还可以使用nvm来管理node的版本
- 用node来实现简单的web服务器，首先第一句话：holle world。先创建一个holleworld.js文件
```javascript
var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hello world');
}).listen(3000);
console.log('server started on localhost:3000; press ctrl-c to terminate...');
```
- 确保和holleworld.js在同一个目录下，在终端输入node holleworld.js。然后打开浏览器访问localhost:3000即可。
    - 但这里返回的知识文字，并未html文件。只要把text/plain换成text/html即可，再把'hello world'换成一个邮箱的html字符串就行了，但是我们要`避免在javascript中写html`。至于原因我们会在第七章深入探讨。
- node的核心理念是时间驱动变成。这意味着你必须知道有哪些事件，以及如何响应这些事件。因为事件驱动编程真的是很直观的。在服务器上响应事件这种概念性的跳跃可能会比较难，但原理是一样的。
- 在之前的例子中时间是隐含的：http请求就是要处理的事件，http.createServer方法将函数作为一个参数，每次有http请求发送过来就会调用那个函数。
- 路由是指向客户端提供他所发出的请求内容的机制。对基于web的客户端/服务器端程序而言，客户端在url中知名他想要的内容，具体来说就是路径和查询字符串（第六章会详细讲解url的组成部分）。
- 接下来我们加入路由的功能，但返回的任然是普通的文本。
```javascript
var http = require('http');
http.createServer(function(req,res){
    // 规范化url，去掉查询字符串，可选的反斜杠，并把它变成小写
    var path = req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();
    switch(path){
        case '':
                res.writeHead(200,{'Content-Type':'text/plain'});
                res.end('homepage');
                break;
        case '/about':
                res.writeHead(200,{'Content-Type':'text/plain'});
                res.end('about');
                break;
        default:
                res.writeHead(404,{'Content-Type':'text/plain'});
                res.end('node found');
                break;
    }
}).listen(3000);
console.log('server started on localhost:3000; press ctrl-c to terminate...');
```
- 以上代码运行时你会发现，当你方位首页（http://localhost:3000）和关于页面（http://localhost:3000/about）时你的所有字符串都会被忽略（http://localhost:3000?foo=bar也返回首页），并且其他的url返回的都是未找到页面。
- 静态资源服务
    - 静态资源只适用于初期的小型项目，对于比较大的项目，你应该会想用nginx或cdn之类的代理服务器来提供静态资源。对此第16章会介绍。
    - 如果你用过apache或iis，可能习惯于值创建一个html文件，访问他然后他自动发送到客户端。node不是这样的：`node会打开文件，读取其中的内容，然后将这些内容发送给浏览器`。所以我们要新建一个名为'public'的目录（下一张你就明白为什么不管他叫static）。接下来修改代码。
```javascript
var http = require('http'),fs = require('fs');
function serveStaticFile(res,path,contentType,responseCode){
    if(!responseCode)responseCode=200;
    fs.readFile(__dirname+path,function(err,data){
        if(err){
            res.writeHead(500,{'Content-Type':'text/plain'});
            res.end('500 - internal error');
        }else{
            res.writeHead(500,{'Content-Type':'contentType'});
            res.end(data);
        }
    })
};
http.createServer(function(req,res){
    // 规范化url，去掉查询字符串，可选的反斜杠，并把它变成小写
    var path = req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();
    switch(path){
        case '':
                serveStaticFile(res,'/public/home.html','text/html');
                break;
        case '/about':
                serveStaticFile(res,'/public/about.html','text/html');
                break;
        case '/img/logo.jpg':
                serveStaticFile(res,'/public/img/logo.jpg','image/jpeg');
                break;
        default:
                serveStaticFile(res,'/public/404.html','image/jpeg',404);
                break;
    }
}).listen(3000);
console.log('server started on localhost:3000; press ctrl-c to terminate...');
```
- fs.readFile是读取文件的异步方法，整个函数有同步版本，fs.readFileSync，但这种异步的西靠问题的方式最好接触的越早越好。这个函数并不复杂：它调用fs.readFile读取制定文件中的内容。fs.readFile读取完文件后执行毁掉函数，如果文件不存在，或者读取文件时遇到许可权限方面的问题，会设定err变量，并且会返回一个HTTP500的状态码表明服务器错误。如果文件读取成功，文件会呆着特定的响应吗和内容类型发给客户端。（第六章会讨论状态码）
    - `__dirname 会被解析为正在执行的脚本所在的目录。`所以如果你的脚本放在/home/sites/app.js中，则__dirname会被解析为/home/sites。这个全局变量用起来都很方便。如果不这么做，在不同的目录中运行你的程序是很可能会出现难以诊断的错误。
- （感受：啥也没讲只是简单的概括了node的性质，读到这里建议有node基础的人看这本书吧，没有的可以看看其他的教程先补充一点简单的。。）


----------

## 第三章 省时省力的Express

- 脚手架：脚手架并不是一个新的想法，但很多人（包括我自己）都是荣国ruby才接触到这个概念的。这个想法很简单：大多数项目都需要一定数量的"套路化"代码，那么久创建一个通用的项目骨架，每次开始新项目时，只需复制这个骨架，或者或是模版。RoR把这个概念向前推进了异步，他提供了一个可以自动生成脚手架的程序。相对于从一堆模版中做出选择，这种方式的有点事可以生成更复杂的框架。express借鉴了ror的这一个做法，提供了一个生成脚手架的工具，从而可以让你开始一个新的express项目（可配合其他模版语言一起使用）。
- npm在package.json文件中管理项目的依赖项以及项目的元数据。可以通过运行npm init来创建。他会问一系列的问题，然后生成一个package.json文件帮助管理包文件。
    - 如果项目中package.json文件中没有指定存储库的URL地址，以及一个非空的README.md文件，name每次运行npm时都会提示警告。
- 第一步 安装express。运行 npm install --save express .
    - 运行npm install会把指定名称的包安装到node_modules目录中。--save指的是会写入到package.json中。由于node_modules随时都可以用npm重新生成，所以不用把这个目录也保存到代码库中。可以创建.gitignore文件来避免把node_modules加入到代码库中
```json
# ignore packages installed by npm
node_modules

# put any other files you don't want to check in here,
# such as .DS_Store(OSX),*.bak,etc.
```

接下来可以创建app.js或server.js(学习的例子一般都是app.js,目前公司是server.js)

```javascript
var express = require('express');
var app = express();
app.set('port',process.env.PORT||3000);
//定制404页面
app.use(function(req,res){
    res.type('text/plain');
    res.status('404');
    res.send('404 - Not Fount');
});
//定制500页面
app.use(function(req,res){
    res.type('text/plain');
    res.status('500');
    res.send('500 - Server Error');
});
app.listen(app.get('port'),function(){
    console.log('Express started on http://localhost:'+app.get('port')+';press Ctrl-C to terminate.');
});
```
 > (书的作者认为项目中主文件名称应该是和项目名称一致的，但大多数情况下express的脚手架生成器会建议你把主文件命名为app.js（或者有时是index.js或server.js）这样是没有什么道理的。因为凡是曾在编辑器里见过一堆index.html标签的人都会立刻明白这样做的好处。`npm init默认是用index.js`，如果要使用其他的主文件名，要记得修改package.json文件中的main属性。)
 
- 到这里目前是有了一个express服务器，但是启动后会失望，因为没有任何的路由信息，所以他会返回一个404页面，表示你访问的页面不存在。
> 注意我们制定端口的方式：app.set(port,process.env.PORT || 3000)。这样我们可以额在启动服务器钱通过设置环境变量覆盖端口。（不同环境下的端口 如测试，开发，生产）。如果发现运行例子时发现他监听的并不是3000端口，检查一下是否设置了环境变量PORT。
- 我们来给首页和关于页面加上路由。在404处理器之前加上两个新路由。
```javascript
app.get('/',function(){
    res.type('text/plain');
    res.send('Meadowlark Travel');
});
app.get('/about',function(){
    res.type('text/plain');
    res.send('About Meadowlark Travel');
});
app.use(function(req,res,next){
    res.type('text/plain');
    res.status(404);
    res.send('404 Not Found');
});
```
- app.get是我们添加路由的方法
    - 在express文档中写的是app.VERB。这并不意味着存在一个叫VERB的方法，他是用来只带HTTP动词的（最常见的是get和post）这个方法有两个参数：一个路径和一个函数。
    - 路由就是这个路径定义的。app.VERB帮我们做了很多工作：他默认忽略了大小写或反斜杠，并且在进行匹配时也不考虑查询字符串。
    - 路由匹配上之后就会调用你提供的函数,并把请求和相应对象作为参数传给这个函数。第六章会详细介绍。现在只返回状态码为200的普通文本（express默认的状态为200，不用显示指定）。
    - 这次试用的不是node的res.end，而是换成了express的扩展res.send。我们还用res.set和res.status替换了node的res.writehead.express还提供了res.type方法，可以方便的设置响应头Content-Type。尽管可以使用node自带的res.writehead和res.end,但也没有必要推荐使用了。
- 我们刚才指定404和500页面的处理和对普通页面的处理应有所区别：用的不是app.get，而是app.use。`app.use是express添加中间件的一种方法`。我们会在第十章深入探讨中间件，现在可以把它看做处理所有没有路由匹配路径的处理器。
- 这里涉及一个非常重要的知识点：`在express中，路由和中间件的添加顺序直观重要`。如果我们把404处理器放在所有路由上面就，那首页和关于页面就不能用了，访问这些url得到的都是404.现在我们的路由相当简单，但其实他们还能支持通配符，这回导致顺序上的问题。
    - 比如，要给关于页面添加子页面，比如/about/contact和/about/directions会怎么样？？
```javascript
app.get('/about*',function(req,res){
    //发送内容....
});
app.get('/about/contact',function(req,res){
    //发送内容....
});
app.get('/about/directions',function(req,res){
    //发送内容....
});
```
- 本例中的两个路由将永远都无法匹配到，因为第一个处理器的路径中用了通配符：/about*
- express可以根据毁掉函数中参数的个数区分404和500处理器。第10章和第12章会详细介绍。




    




