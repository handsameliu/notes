> 同事离职，之前他一人负责微信端的开发。由于近期物价上涨，找一个价格合理的前端是很难的，然后作为前端中还不错的我就接任了他的活，他只留下一个交接文档，当面说了几分钟后就没有然后了。自学吧

> 项目由react+redux+webpack搭建使用react-weui写页面，后台接口node提供，也需要自己写。所以需要学习的还有很多。

> 根据目录中文件的功能来介绍，估计只有我自己懂是啥意思了。

> webpack先不理会，目前已经配置好了。

`Components`: 放置UI组件（页面中所有渲染的内容。负责渲染和吧从Container里拿到的数据放到页面上）

```javascript
import React from 'react'
const 变量名=(props)=>{
    let data = props.state.data;
    return(
        <Page className="panel">
			...
        </Page>
    )
};
export default 变量名;
```

`Containers`: 放置容器组件（负责管理数据和业务逻辑），由两个方法组成mapStateToProps,mapDispatchToProps

```javascript
import {connect} from 'react-redux';
import UI组件 from '../components/UI组件';
import {init} from '../action/actionName'
const mapStateToProps=(state)=>{
     return{
        state:state.data
     }
};

const mapDispatchToProps=(dispatch,props)=>{
    dispatch(init());							//当页面加载时需要执行方法要加在这里
    return{

    }
};
export default connect(mapStateToProps,mapDispatchToProps)(UI组件);
```

> 1. connect方法主要有两个参数，mapStateToProps主要将state映射到UI组件的参数（props），mapDispatchToProps主要将action映射到UI组件的参数（props）
> 2. mapDispatchToProps中拿到state，return后，在对应的components的props上就可以拿到这些state对页面进行渲染了。mapDispatchToProps也是同理，在props中也可以访问到相应的逻辑方法。

`Reducer`：包含一系列的Reducer，他接受Action和当前State作为参数，返回一个新的State（这个文件中可以定义初始化的state）

```javascript
//	以下代码可固定写死，当有多个state时增加switch中的case即可。

import Immutable from 'immutable';
import {UPDATE_STATUS} from '../actions/文件名';  

const 方法名 = (state=initState,action)=>{
    let next_state = Immutable.fromJS(state);
    switch(action.type){
        case UPDATE_STATUS:
            return next_state.set(action.key,action.value).toJS();
        default:return state;
    }
};

export default 方法名;
```

> 在Reducer中可以将多个小的reducer合并成一个大的reducer，这样也方便管理。
> 可以使用redux中的 combineReducers 合并。

```javascript
import {combineReducers} from 'redux';
import {signUp} from 'signUp';
import {signOut} from 'signOut';

const reducers = combineReducers({
    signUp,
    signOut,
  });
export default reducers;
```

`Actions`：主要负责与后台的交互，并修改state的相关操作。
> 建议在这里的方法都是用promise写，以免出现不必要的麻烦。
> 这里会有一个dispatch函数，这个函数的作用就是改变state的值，然后页面就会重新渲染。他的值时key，value。在redux中唯一能修改state的方法就是dispatch了。
> 在这个文件中还需要定义一个常量，用来定义他所对应的state。
> 还需设置一个修改方法，dispatch就是调用这个方法来修改state。

```javascript
export const UPDATE_STATUS = 'UPDATE_STATUS';  //reducer文件会调用到这个全局变量，也就是state了，其实一个页面中所有的方法都可以绑定到这上面
const update = (key,value)=>{
    return {
        type:UPDATE_STATUS,
        key,
        value
    }
};
const init = ()=>{
	return (dispatch,getState)=>{		//这两个参数也是写死的
		...		//交互方法
	}
};
const submit = ()=>{
	return (dispatch,getState)=>{
		...		//交互方法
	}
};
export {init,submit};		//这里填写的方法名是这里定义的一些方法，想要暴露那个就写到这里
```

路由使用`react-router`，由于是使用现成的所以就没怎么洋酒，先完成任务节点再说，以后再详细看。




