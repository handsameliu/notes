最近使用reactweui做公众号，在iso设备上出现readonly失效的情况，找了一下原因是ios系统的问题，虽然设置了只读，但是失效了，安卓下完美。所以找到几种方法。最好用的是让当前元素支取焦点，其次是两个css3webkit属性

document.activeElement.blur();
在focus的时候e.blur();
unselectable="on"
onselectstart="return false;"
-webkit-user-select:none;
ime-mode:disabled;
-webkit-touch-callout:none;