/**=============================================================================
#     FileName: storage-util.js
#         Name: storage工具类
#       Author: yangxi
#         Desc: 1.sessionStorage=>生命周期为浏览器的打开和关闭
                2.localStorage=>保存到磁盘的长期存储
=============================================================================*/

class StorageUtil {
    addLocalStorage(_key, _value) {
        if (typeof(_value) === 'object') {
            localStorage.setItem(_key, JSON.stringify[_value])
        } else {
            localStorage.setItem(_key, _value)
        }
    }
    removeLocalStorage(_key) {
        localStorage.removeItem(_key)
    }
    getLocalStorage(_key) {
        let _value = localStorage.getItem(_key);
        if (!_value) {
            return;
        }
        let value = _value;
        try {
            value = JSON.parse(_value)
            return value;
        } catch (e) {
            return _value;
        }
    }
    addSessionStorage(_key, _value) {
        if (typeof(_value) === 'object') {
            sessionStorage.setItem(_key, JSON.stringify[_value])
        } else {
            sessionStorage.setItem(_key, _value)
        }
    }
    removeSessionStorage(_key) {
        sessionStorage.removeItem(_key)
    }
    getSessionStorage(_key) {
        let _value = sessionStorage.getItem(_key);
        if (!_value) {
            return;
        }
        let value = _value;
        try {
            value = JSON.parse(_value)
            return value;
        } catch (e) {
            return _value;
        }
    }
}
export default new StorageUtil;