/**=============================================================================
#     FileName: events-bind.js
#         Desc: 本地事件绑定触发
#       Author: yangxi
#      History:
=============================================================================*/

export default class MovEvents {
    _MovEvents = {}
    emit(name, data) {
        if (!this._MovEvents[name]) {
            return;
        }
        this._MovEvents[name].forEach((v) => {
            v.fun(data);
            if (v.count > 0) {
                v.count -= 1;
            }
        })
        this._MovEvents[name] = this._MovEvents[name].filter((v) => {
            return v.count != 0;
        })
    }
    on(eName, fun, count = -1) {
        if (!eName) {
            return;
        }
        let nameInfo = eName.split(".")
        let name = nameInfo[0];
        if (!this._MovEvents[name]) {
            this._MovEvents[name] = []
        }
        this._MovEvents[name].push({
            fun: fun,
            count: count,
            key: nameInfo[1]
        })
    }
    once(name, fun) {
        this.on(name, fun, 1);
    }
    off(eName, fun) {
        if (!eName) {
            return;
        }
        let nameInfo = eName.split(".")
        let name = nameInfo[0];
        let key = nameInfo[1];
        if (!this._MovEvents[name]) {
            return;
        }
        if (!key) {
            if (!fun) {
                this._MovEvents[name] = undefined;
                return;
            }
            this._MovEvents[name] = this._MovEvents[name].filter((v) => {
                return v.fun != fun;
            });
            return;
        }

        if (key) {
            if (fun) {
                this._MovEvents[name] = this._MovEvents[name].filter((v) => {
                    return v.key != key && v.fun == fun;
                });
                return;
            }
            this._MovEvents[name] = this._MovEvents[name].filter((v) => {
                return v.key != key;
            });
        }
    }
}