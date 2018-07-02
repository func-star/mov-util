/**=============================================================================
#     FileName: css-util.js
#         Name: css操作工具类
#       Author: yangxi
#         Desc: ...
=============================================================================*/

class CssUtil {
    prefixList = [
        'transform',
        'transition'
    ];
    css(dom, data) {
        //换个方式实现，性能应该会有比较大的提升
        let _data = this.parseStyleObj(data);
        Object.keys(_data).forEach((v) => {
            dom.style.setProperty(v, _data[v])
        })
    }

    removeCss(dom, props) {
        dom.style.removeProperty(props)
        if (this.prefixList.indexOf(props)) {
            dom.style.removeProperty("-webkit-" + props);
        }
    }

    //将样式对象转化为可使用的样式对象
    parseStyleObj(data) {
        let cssNumber = [
            "columnCount",
            "fillOpacity",
            "fontWeight",
            "lineHeight",
            "opacity",
            "order",
            "orphans",
            "widows",
            "zIndex",
            "zoom"
        ];

        let _data = Object.assign({}, data);
        Object.keys(_data).forEach((v) => {
            if (this.prefixList.indexOf(v) >= 0) {
                _data["-webkit-" + v] = _data[v];
            }
            if (typeof(_data[v]) == 'number' && cssNumber.indexOf(v) < 0) {
                _data[v] = _data[v] + 'px';
            }
        })
        return _data;
    }
}
export default new CssUtil