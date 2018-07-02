/**=============================================================================
#     FileName: event-util.js
#         Name: event对象的操作
#       Author: yangxi
#         Desc: ....
=============================================================================*/

class EventUtil {
    //添加事件
    addHandler(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false); //使用DOM2级方法添加事件
        } else if (element.attachEvent) { //使用IE方法添加事件
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler; //使用DOM0级方法添加事件
        }
    }
    //取消事件
    removeHandler(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    }
    //使用这个方法跨浏览器取得event对象
    getEvent(event) {
        return event ? event : window.event;
    }
    //返回事件的实际目标
    getTarget(event) {
        return event.target || event.srcElement;
    }
    //阻止事件的默认行为
    preventDefault(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
    //立即停止事件在DOM中的传播
    stopPropagation(event) {
        //避免触发注册在document.body上面的事件处理程序
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
    //以跨浏览器取得相同的字符编码，需在keypress事件中使用
    getCharCode(event) {
        if (typeof event.charCode == "number") {
            return event.charCode;
        } else {
            return event.keyCode;
        }
    }
}
export default new EventUtil