/**=============================================================================
#     FileName: json-util.js
#         Name: json操作工具类
#       Author: yangxi
#         Desc: ...
=============================================================================*/

class JsonUtil {
    each(_obj, _callback, _args) {
        let name,
            isObj = typeof(_obj) === "object" && Object.prototype.toString.call(_obj).toLowerCase() == "[object object]" && !_obj.length;
        if (_args) {
            if (isObj) {
                for (name in _obj) {
                    if (_callback.apply(_obj[name], _args) === false) {
                        break;
                    }
                }
            } else {
                throw new Error('请检查数据类型是否为json对象')
            }

        } else {
            if (isObj) {
                for (name in _obj) {
                    if (_callback.call(_obj[name], name, _obj[name]) === false) {
                        break;
                    }
                }
            } else {
                throw new Error('请检查数据类型是否为json对象')
            }
        }
        return _obj;
    }
}
export default new JsonUtil
