(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{450:function(e,o,n){"use strict";n.r(o);var d=n(34),l=Object(d.a)({},(function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"diff-算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#diff-算法"}},[e._v("#")]),e._v(" diff 算法")]),e._v(" "),n("ol",[n("li",[e._v("设置值时触发 setter => Dep.notify 触发订阅者 Watcher，订阅者调用 patch 打补丁方法")]),e._v(" "),n("li",[e._v("patch(oldVnode，vnode)  vnode 和 oldVnode 属于同一类型的节点sameVnode 调用patchVnode(oldVnode,vnode)\n不同的话把获取oldVnode的真实dom oldEl，再获取到真实oldEl的父元素parentEl，将vnode.el插入到parentEl，移出oldVnode.el oldVnode=null释放内存")]),e._v(" "),n("li",[e._v("patchVnode(oldVnode,vnode) oldVnode===vnode 直接return，获取真实dom elm 获取新旧虚拟节点的子节点oldCh ch\n如果vnode是text节点 elm设置为vnode.text\n如果vnode不为text节点 oldCh ch都存在对比子节点 updateChildren(elm,oldCh,ch)\noldCh 存在 ch不存在 删除oldCh\noldCh存在且为 text节点 设置elm为空\nch存在oldCh不存在 elm添加子节点ch")]),e._v(" "),n("li",[e._v("oldS oldE newS newE 创建新旧子节点首位索引\noldSVnode oldEVnode newSVnode newEVnode 创建新旧子节点首位节点变量\n首位指针法 oldSVnode==newSVnode oldSVnode==newEVnode oldEVnode==newSVnode oldEVnode==newEVnode 节点一样继续patchVnode 对应索引移动\n如果这四种不匹配 把所有旧的子节点的key做一个映射到旧节点下标的key-》index表 用新vnode的key去找在旧节点中可以复用的位置 找不到可以复用的位置 创建节点插入到真实dom 找到了并且节点相同继续patchVnode 反之创建新节点\n如果旧节点先循环完毕 说明新的还没有循环")])])])}),[],!1,null,null,null);o.default=l.exports}}]);