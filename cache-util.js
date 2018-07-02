/**=============================================================================
#     FileName: cache-util.js
#         Name: cache工具类
#       Author: yangxi
#         Desc: 1.set() 2.get() 3.delete() 4.clean()
                2.本地变量存储
=============================================================================*/
class CacheUtil {
    _fkCaches = {};
    //设置缓存
    set(_key, _value, _life, _canUpdate = true, _canDelete = true) {
        try {
            let cached = this.get(name);
            cache = this.formData(_value, _life, _canUpdate, _canDelete)
            if (cached) { //有缓存==修改
                if (cached.canUpdate) {
                    this.delete(_key)
                    this._fkCaches[_key] = cache;
                } else {
                    return;
                }
            } else { //无缓存==新增
                if (_life typeof number) { //有生命周期
                    _key = setTimeout(() => {
                        this.delete(_key)
                    }, _life)
                }
                this._fkCaches[_key] = cache;
            }
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }
    //缓存的固定格式
    formData(_life, _canUpdate, _canDelete) {
        return {
            value: _value,
            life: _life,
            canUpdate: _canUpdate,
            canDelete: _canDelete
        }
    }
    //获取缓存
    get(_key) {
        return this._fkCaches[_key]
    }
    //直接获取值
    getValue(_key) {
        let cache = this.get(_key) || {};
        return cache.value;
    }
    //删除指定的缓存
    delete(_key) {
        if (this._fkCaches[_key].canUpdate) {
            clearTimeout(_key)
            delete this._fkCaches[_key]
        } else {
            return;
        }
    }
    //清空缓存
    clean(_power) {
        Object.keys(this._fkCaches).forEach((i) => {
            if (_power === 'sudo' || this._fkCaches[i].canDelete) {
                this.delete(i);
            }
        })
    }
}
export default CacheUtil;