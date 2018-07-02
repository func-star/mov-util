/**=============================================================================
#     FileName: url-util.js
#         Name: url链接的操作
#         Desc: 拼接url、拼接获取get形式下的参数值
=============================================================================*/

class UrlUtil {
    constructor(path) {
        let _def = {
            hash: '',
            host: '',
            hostname: '',
            href: '',
            username: '',
            password: '',
            origin: '',
            pathname: '',
            port: '',
            protocol: '',
            search: '',
        };
        let _a = null;
        _a = document.createElement("a");
        _a.href = path;
        for (let i in _def) {
            this[i] = _a[i] ? _a[i] : _def[i];
        }
    }
    toString() {
        return (
            (this.protocol && (this.protocol + '://')) +
            (this.username && (this.useranme + (this.password && (':' + this.password)) + '@')) +
            (this.host) +
            (this.port && (':' + this.port)) +
            (this.path) +
            (this.search) +
            (this.hash)
        );
    }
    //拼接url
    static param(data) {
        let _t = [];
        Object.keys(data).forEach(function(vi) {
            if (data[vi] !== undefined) {
                _t.push(vi + "=" + data[vi]);
            }
        });
        return _t.join("&");
    }
    //拼接获取get形式下的参数值
    static parseParam(search) {
        if (search.indexOf("?") === 0) {
            search = search.substring(1);
        }
        let _t = search.split("&");
        let params = {};
        _t.forEach(function(vi) {
            let _p = vi.split("=");
            if (_p.length !== 2) {
                return;
            }
            params[_p[0]] = _p[1];
        })
        return params;
    }
}
export default UrlUtil;