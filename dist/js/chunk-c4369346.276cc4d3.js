(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4369346","chunk-0568f6a4","chunk-2d0cfe94","chunk-2d2165c9"],{"0d34":function(e,t,a){"use strict";a.r(t),a.d(t,"loadEnabledTypes",(function(){return f}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.syncToApp||e.syncToLocal?a("span",[e.enabledTypes.wechatEnterprise?a("j-third-app-dropdown",e._g(e._b({attrs:{type:"wechatEnterprise",name:"企微"}},"j-third-app-dropdown",e.bindAttrs,!1),e.bindEvents)):e._e(),e.enabledTypes.dingtalk?a("j-third-app-dropdown",e._g(e._b({attrs:{type:"dingtalk",name:"钉钉"}},"j-third-app-dropdown",e.bindAttrs,!1),e.bindEvents)):e._e()],1):a("span",[e._v("未设置任何同步方向")])},o=[],n=a("a34a"),l=a.n(n),s=a("0fea"),i=a("ca00"),d=a("fe28");function c(e,t,a,r,o,n,l){try{var s=e[n](l),i=s.value}catch(d){return void a(d)}s.done?t(i):Promise.resolve(i).then(r,o)}function u(e){return function(){var t=this,a=arguments;return new Promise((function(r,o){var n=e.apply(t,a);function l(e){c(n,r,o,l,s,"next",e)}function s(e){c(n,r,o,l,s,"throw",e)}l(void 0)}))}}var p={getEnabledType:"/sys/thirdApp/getEnabledType",wechatEnterprise:{user:"/sys/thirdApp/sync/wechatEnterprise/user",depart:"/sys/thirdApp/sync/wechatEnterprise/depart"},dingtalk:{user:"/sys/thirdApp/sync/dingtalk/user",depart:"/sys/thirdApp/sync/dingtalk/depart"}},h={name:"JThirdAppButton",components:{JThirdAppDropdown:d["default"]},props:{bizType:{type:String,required:!0},syncToApp:Boolean,syncToLocal:Boolean,selectedRowKeys:Array},data:function(){return{enabledTypes:{},attrs:{dingtalk:{}}}},computed:{bindAttrs:function(){return{syncToApp:this.syncToApp,syncToLocal:this.syncToLocal}},bindEvents:function(){return{"to-app":this.onToApp,"to-local":this.onToLocal}}},created:function(){this.loadEnabledTypes()},methods:{handleMenuClick:function(){},onToApp:function(e){this.doSync(e.type,"/toApp")},onToLocal:function(e){this.doSync(e.type,"/toLocal")},loadEnabledTypes:function(){var e=u(l.a.mark((function e(){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:this.enabledTypes=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),doSync:function(e,t){var a=this,r=p[e];if(r&&r[this.bizType]){var o=r[this.bizType]+t,n=this.selectedRowKeys,l="确定要开始同步全部数据吗？可能花费较长时间！";return Array.isArray(n)&&n.length>0?l="确定要开始同步这 ".concat(n.length," 项吗？"):n=[],new Promise((function(r,i){var d=a.$confirm({title:"同步",content:l,onOk:function(){return d.update({keyboard:!1,okText:"同步中…",cancelButtonProps:{props:{disabled:!0}}}),Object(s["c"])(o,{ids:n.join(",")}).then((function(e){var t=null;e.result&&(t={width:600,title:e.message,content:function(t){var r,o=["成功信息如下：",a.renderTextarea(t,e.result.successInfo.map((function(e,t){return"".concat(t+1,". ").concat(e)})).join("\n"))];return r=e.success?[].concat(o,[t("br"),"无失败信息！"]):["失败信息如下：",a.renderTextarea(t,e.result.failInfo.map((function(e,t){return"".concat(t+1,". ").concat(e)})).join("\n")),t("br")].concat(o),r}}),e.success?(null!=t?a.$success(t):a.$message.success(e.message),a.$emit("sync-ok")):(null!=t?a.$warning(t):a.$message.warning(e.message),a.$emit("sync-error"))})).catch((function(){return d.destroy()})).finally((function(){r(),a.$emit("sync-finally",{type:e,direction:t,isToApp:"/toApp"===t,isToLocal:"/toLocal"===t})}))},onCancel:function(){r()}})}))}},renderTextarea:function(e,t){return e("a-textarea",{props:{value:t,readOnly:!0,autosize:{minRows:5,maxRows:10}},style:{whiteSpace:"pre",overflow:"auto"}})}}},m=null;function f(){return y.apply(this,arguments)}function y(){return y=u(l.a.mark((function e(){var t,a,r;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null==m){e.next=4;break}return e.abrupt("return",Object(i["b"])(m));case 4:return e.next=6,Object(s["c"])(p.getEnabledType);case 6:if(t=e.sent,a=t.success,r=t.result,!a){e.next=14;break}return m=Object(i["b"])(r),e.abrupt("return",r);case 14:case 15:return e.abrupt("return",{});case 16:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}var b=h,g=a("2877"),v=Object(g["a"])(b,r,o,!1,null,"b53f2b1e",null);t["default"]=v.exports},"1be7":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[this.departId?[a("a-spin",{attrs:{spinning:e.loading}},[a("a-form",[a("a-form-item",{attrs:{label:"所拥有的权限"}},[a("a-tree",{staticStyle:{height:"500px",overflow:"auto"},attrs:{checkable:"",checkedKeys:e.checkedKeys,treeData:e.treeData,selectedKeys:e.selectedKeys,expandedKeys:e.expandedKeysss,checkStrictly:e.checkStrictly},on:{check:e.onCheck,expand:e.onExpand,select:e.onTreeNodeSelect},scopedSlots:e._u([{key:"hasDatarule",fn:function(t){var r=t.slotTitle,o=t.ruleFlag;return a("span",{},[e._v("\n              "+e._s(r)+"\n              "),o?a("a-icon",{staticStyle:{"margin-left":"5px",color:"red"},attrs:{type:"align-left"}}):e._e()],1)}}],null,!1,3403517078)})],1)],1)],1),a("div",{staticClass:"anty-form-btn"},[a("a-dropdown",{staticStyle:{float:"left"},attrs:{trigger:["click"],placement:"topCenter"}},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"3",on:{click:e.checkALL}},[e._v("全部勾选")]),a("a-menu-item",{key:"4",on:{click:e.cancelCheckALL}},[e._v("取消全选")]),a("a-menu-item",{key:"5",on:{click:e.expandAll}},[e._v("展开所有")]),a("a-menu-item",{key:"6",on:{click:e.closeAll}},[e._v("合并所有")])],1),a("a-button",[e._v("\n          树操作 "),a("a-icon",{attrs:{type:"up"}})],1)],1),a("a-button",{staticStyle:{float:"right"},attrs:{type:"primary",htmlType:"button",icon:"form"},on:{click:e.handleSubmit}},[e._v("保存")])],1)]:a("a-card",{staticStyle:{height:"200px"},attrs:{bordered:!1}},[a("a-empty",[a("span",{attrs:{slot:"description"},slot:"description"},[e._v(" 请先选择一个部门! ")])])],1),a("depart-datarule-modal",{ref:"datarule"})],2)},o=[],n=a("4ec3"),l=a("6675");function s(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=c(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,l=!0,s=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return l=e.done,e},e:function(e){s=!0,n=e},f:function(){try{l||null==a.return||a.return()}finally{if(s)throw n}}}}function i(e){return p(e)||u(e)||c(e)||d()}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"===typeof e)return h(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?h(e,t):void 0}}function u(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function p(e){if(Array.isArray(e))return h(e)}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var m={name:"DepartAuthModal",components:{DepartDataruleModal:l["default"]},data:function(){return{departId:"",treeData:[],defaultCheckedKeys:[],checkedKeys:[],halfCheckedKeys:[],expandedKeysss:[],allTreeKeys:[],autoExpandParent:!0,checkStrictly:!1,title:"部门权限配置",visible:!1,loading:!1,selectedKeys:[]}},methods:{onTreeNodeSelect:function(e){e&&e.length>0&&(this.selectedKeys=e),this.$refs.datarule.show(this.selectedKeys[0],this.departId)},onCheck:function(e,t){var a=t.halfCheckedKeys;this.checkedKeys=e,this.halfCheckedKeys=a},show:function(e){this.departId=e,this.loadData()},close:function(){this.reset(),this.$emit("close"),this.visible=!1},onExpand:function(e){this.expandedKeysss=e,this.autoExpandParent=!1},reset:function(){this.expandedKeysss=[],this.checkedKeys=[],this.defaultCheckedKeys=[],this.loading=!1},expandAll:function(){this.expandedKeysss=this.allTreeKeys},closeAll:function(){this.expandedKeysss=[]},checkALL:function(){this.checkedKeys=this.allTreeKeys},cancelCheckALL:function(){this.checkedKeys=[]},handleCancel:function(){this.close()},handleSubmit:function(){var e=this;e.departId||this.$message.warning("请点击选择一个部门!");var t=[].concat(i(e.checkedKeys),i(e.halfCheckedKeys)),a=t.join(","),r={departId:e.departId,permissionIds:a,lastpermissionIds:e.defaultCheckedKeys.join(",")};e.loading=!0,Object(n["R"])(r).then((function(t){t.success?(e.$message.success(t.message),e.loading=!1,e.loadData()):(e.$message.error(t.message),e.loading=!1)}))},convertTreeListToKeyLeafPairs:function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=s(e);try{for(r.s();!(t=r.n()).done;){var o=t.value,n=o.key,l=o.isLeaf,i=o.children;a.push({key:n,isLeaf:l}),i&&i.length>0&&this.convertTreeListToKeyLeafPairs(i,a)}}catch(d){r.e(d)}finally{r.f()}return a},emptyCurrForm:function(){this.form.resetFields()},loadData:function(){var e=this;this.loading=!0,Object(n["queryTreeListForRole"])().then((function(t){e.treeData=t.result.treeList,e.allTreeKeys=t.result.ids;var a=e.convertTreeListToKeyLeafPairs(e.treeData);Object(n["C"])({departId:e.departId}).then((function(t){var r=i(t.result).filter((function(e){var t=a.filter((function(t){return t.key===e}))[0];return t&&t.isLeaf})),o=i(t.result).filter((function(e){var t=a.filter((function(t){return t.key===e}))[0];return t&&!t.isLeaf}));e.checkedKeys=i(r),e.halfCheckedKeys=i(o),e.defaultCheckedKeys=[].concat(i(o),i(r)),e.expandedKeysss=e.allTreeKeys,e.loading=!1}))}))}}},f=m,y=a("2877"),b=Object(y["a"])(f,r,o,!1,null,"a4e89130",null);t["default"]=b.exports},"58b6":function(e,t,a){"use strict";var r=a("d5ae"),o=a.n(r);o.a},6675:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"数据规则/按钮权限配置",width:"365",closable:!1,visible:e.visible},on:{close:e.onClose}},[a("a-tabs",{attrs:{defaultActiveKey:"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"数据规则"}},[e.dataruleList.length>0?a("a-checkbox-group",{model:{value:e.dataruleChecked,callback:function(t){e.dataruleChecked=t},expression:"dataruleChecked"}},[a("a-row",[e._l(e.dataruleList,(function(t,r){return a("a-col",{key:"dr"+r,attrs:{span:24}},[a("a-checkbox",{attrs:{value:t.id}},[e._v(e._s(t.ruleName))])],1)})),a("a-col",{attrs:{span:24}},[a("div",{staticStyle:{width:"100%","margin-top":"15px"}},[a("a-button",{attrs:{type:"primary",size:"small",icon:"save"},on:{click:e.saveDataruleForRole}},[e._v("点击保存")])],1)])],2)],1):a("div",[a("h3",[e._v("无配置信息!")])])],1)],1)],1)},o=[],n=a("290c"),l=a("da05"),s=a("0fea"),i={name:"DepartDataruleModal",components:{ACol:l["b"],ARow:n["a"]},data:function(){return{functionId:"",departId:"",visible:!1,tabList:[{key:"1",tab:"数据规则"},{key:"2",tab:"按钮权限"}],activeTabKey:"1",url:{datarule:"/sys/sysDepartPermission/datarule"},dataruleList:[],dataruleChecked:[]}},methods:{loadData:function(){var e=this;Object(s["c"])("".concat(this.url.datarule,"/").concat(this.functionId,"/").concat(this.departId)).then((function(t){if(t.success){e.dataruleList=t.result.datarule;var a=t.result.drChecked;a&&(e.dataruleChecked=a.split(","))}}))},saveDataruleForRole:function(){var e=this;this.dataruleChecked&&0!=this.dataruleChecked.length||this.$message.warning("请注意，现未勾选任何数据权限!");var t={permissionId:this.functionId,departId:this.departId,dataRuleIds:this.dataruleChecked.join(",")};Object(s["i"])(this.url.datarule,t).then((function(t){t.success?e.$message.success(t.message):e.$message.error(t.message)}))},show:function(e,t){this.onReset(),this.functionId=e,this.departId=t,this.visible=!0,this.loadData()},onClose:function(){this.visible=!1,this.onReset()},onTabChange:function(e){this.activeTabKey=e},onReset:function(){this.functionId="",this.departId="",this.dataruleList=[],this.dataruleChecked=[]}}},d=i,c=a("2877"),u=Object(c["a"])(d,r,o,!1,null,"47ca2114",null);t["default"]=u.exports},"8fbc":function(e,t,a){"use strict";var r=a("fdef"),o=a.n(r);o.a},c1af:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,ok:!1,visible:e.visible,confirmLoading:e.confirmLoading,okButtonProps:{props:{disabled:e.disableSubmit}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form-model",{ref:"form",attrs:{model:e.model,rules:e.validatorRules}},[a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构名称",prop:"departName",hidden:!1,hasFeedback:""}},[a("a-input",{attrs:{id:"departName",placeholder:"请输入机构/部门名称"},model:{value:e.model.departName,callback:function(t){e.$set(e.model,"departName",t)},expression:"model.departName"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,hidden:e.seen,label:"上级部门",hasFeedback:""}},[a("a-tree-select",{staticStyle:{width:"100%"},attrs:{dropdownStyle:{maxHeight:"200px",overflow:"auto"},treeData:e.departTree,placeholder:"请选择上级部门",disabled:e.condition},model:{value:e.model.parentId,callback:function(t){e.$set(e.model,"parentId",t)},expression:"model.parentId"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构类型"}},[e.seen?[a("a-radio-group",{attrs:{placeholder:"请选择机构类型"},model:{value:e.model.orgCategory,callback:function(t){e.$set(e.model,"orgCategory",t)},expression:"model.orgCategory"}},[a("a-radio",{attrs:{value:"1"}},[e._v("\n              公司\n            ")])],1)]:[a("a-radio-group",{attrs:{placeholder:"请选择机构类型"},model:{value:e.model.orgCategory,callback:function(t){e.$set(e.model,"orgCategory",t)},expression:"model.orgCategory"}},[a("a-radio",{attrs:{value:"2"}},[e._v("\n              部门\n            ")]),a("a-radio",{attrs:{value:"3"}},[e._v("\n              岗位\n            ")])],1)]],2),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"部门负责人"}},[a("j-select-multi-user",{attrs:{valueKey:"id"},model:{value:e.model.directorUserIds,callback:function(t){e.$set(e.model,"directorUserIds",t)},expression:"model.directorUserIds"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"mobile",label:"电话"}},[a("a-input",{attrs:{placeholder:"请输入电话"},model:{value:e.model.mobile,callback:function(t){e.$set(e.model,"mobile",t)},expression:"model.mobile"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"传真"}},[a("a-input",{attrs:{placeholder:"请输入传真"},model:{value:e.model.fax,callback:function(t){e.$set(e.model,"fax",t)},expression:"model.fax"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"地址"}},[a("a-input",{attrs:{placeholder:"请输入地址"},model:{value:e.model.address,callback:function(t){e.$set(e.model,"address",t)},expression:"model.address"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"排序"}},[a("a-input-number",{model:{value:e.model.departOrder,callback:function(t){e.$set(e.model,"departOrder",t)},expression:"model.departOrder"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"备注"}},[a("a-textarea",{attrs:{placeholder:"请输入备注"},model:{value:e.model.memo,callback:function(t){e.$set(e.model,"memo",t)},expression:"model.memo"}})],1)],1)],1)],1)},o=[],n=a("0fea"),l=a("4ec3"),s=(a("88bc"),a("261e")),i={name:"SysDepartModal",components:{ATextarea:s["a"]},data:function(){return{departTree:[],orgTypeData:[],phoneWarning:"",departName:"",title:"操作",seen:!1,visible:!1,condition:!0,disableSubmit:!1,model:{},defaultModel:{departOrder:0,orgCategory:"1"},menuhidden:!1,menuusing:!0,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{departName:[{required:!0,message:"请输入机构/部门名称!"}],orgCode:[{required:!0,message:"请输入机构编码!"}],mobile:[{validator:this.validateMobile}],orgCategory:[{required:!0,message:"请输入机构类型!"}]},url:{add:"/sys/sysDepart/add"},dictDisabled:!0}},created:function(){},methods:{loadTreeData:function(){var e=this;Object(l["G"])().then((function(t){if(t.success){e.departTree=[];for(var a=0;a<t.result.length;a++){var r=t.result[a];e.departTree.push(r)}}}))},add:function(e){e?(this.seen=!1,this.dictDisabled=!1):(this.seen=!0,this.dictDisabled=!0),this.edit(e)},edit:function(e){this.visible=!0,this.model=Object.assign({},this.defaultModel,e),this.loadTreeData(),this.model.parentId=null!=e?e.toString():null,this.seen?this.model.orgCategory="1":this.model.orgCategory="2"},close:function(){this.$emit("close"),this.disableSubmit=!1,this.visible=!1,this.$refs.form.resetFields()},handleOk:function(){var e=this,t=this;this.$refs.form.validate((function(a){if(!a)return!1;t.confirmLoading=!0,Object(n["h"])(e.url.add,e.model,"post").then((function(e){e.success?(t.$message.success(e.message),t.loadTreeData(),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}))},handleCancel:function(){this.close()},validateMobile:function(e,t,a){!t||new RegExp(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/).test(t)?a():a("您的手机号码格式不正确!")}}},d=i,c=a("2877"),u=Object(c["a"])(d,r,o,!1,null,"0ba6173c",null);t["default"]=u.exports},cd8d:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:12,sm:24}},[a("a-card",{attrs:{bordered:!1}},[a("a-row",{staticClass:"table-operator",staticStyle:{margin:"0 0 0 14px"}},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleAdd(1)}}},[e._v("添加部门")]),a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleAdd(2)}}},[e._v("添加下级")]),a("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("部门信息")}}},[e._v("导出")]),a("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[a("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),a("j-third-app-button",{attrs:{"biz-type":"depart","selected-row-keys":e.selectedRowKeys,syncToApp:""},on:{"sync-finally":e.onSyncFinally}}),a("a-button",{attrs:{title:"删除多条数据",type:"default"},on:{click:e.batchDel}},[e._v("批量删除")])],1),a("div",{staticStyle:{background:"#fff","padding-left":"16px",height:"100%","margin-top":"5px"}},[a("a-alert",{attrs:{type:"info",showIcon:!0}},[a("div",{attrs:{slot:"message"},slot:"message"},[e._v("\n            当前选择："),this.currSelected.title?a("span",[e._v(e._s(e.getCurrSelectedTitle()))]):e._e(),this.currSelected.title?a("a",{staticStyle:{"margin-left":"10px"},on:{click:e.onClearSelected}},[e._v("取消选择")]):e._e()])]),a("a-input-search",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{placeholder:"请输入部门名称"},on:{search:e.onSearch}}),a("div",[0===e.departTree.length?a("a-empty",{staticStyle:{"margin-top":"8px"},attrs:{description:"暂无部门"}}):[a("a-dropdown",{attrs:{trigger:[this.dropTrigger]},on:{visibleChange:e.dropStatus}},[a("span",{staticStyle:{"user-select":"none"}},[e.treeLoading?a("a-tree",{attrs:{checkable:"",multiple:"",selectedKeys:e.selectedKeys,checkedKeys:e.checkedKeys,treeData:e.departTree,checkStrictly:e.checkStrictly,expandedKeys:e.iExpandedKeys,"load-data":e.loadSubTree},on:{select:e.onSelect,check:e.onCheck,rightClick:e.rightHandle,"update:expandedKeys":function(t){e.iExpandedKeys=t},"update:expanded-keys":function(t){e.iExpandedKeys=t},expand:e.onExpand}}):e._e()],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:function(t){return e.handleAdd(3)}}},[e._v("添加")]),a("a-menu-item",{key:"2",on:{click:e.handleDelete}},[e._v("删除")]),a("a-menu-item",{key:"3",on:{click:e.closeDrop}},[e._v("取消")])],1)],1)]],2)],1)],1),a("div",{staticClass:"drawer-bootom-button"},[a("a-dropdown",{attrs:{trigger:["click"],placement:"topCenter"}},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:function(t){return e.switchCheckStrictly(1)}}},[e._v("父子关联")]),a("a-menu-item",{key:"2",on:{click:function(t){return e.switchCheckStrictly(2)}}},[e._v("取消关联")]),a("a-menu-item",{key:"3",on:{click:e.checkALL}},[e._v("全部勾选")]),a("a-menu-item",{key:"4",on:{click:e.cancelCheckALL}},[e._v("取消全选")]),a("a-menu-item",{key:"5",on:{click:e.expandAll}},[e._v("展开所有")]),a("a-menu-item",{key:"6",on:{click:e.closeAll}},[e._v("合并所有")])],1),a("a-button",[e._v("\n          树操作 "),a("a-icon",{attrs:{type:"up"}})],1)],1)],1)],1),a("a-col",{attrs:{md:12,sm:24}},[a("a-tabs",{attrs:{defaultActiveKey:"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"基本信息"}},[e.selectedKeys.length>0?a("a-card",{attrs:{bordered:!1}},[a("a-form-model",{ref:"form",attrs:{model:e.model,rules:e.validatorRules}},[a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构名称",prop:"departName"}},[a("a-input",{attrs:{placeholder:"请输入机构/部门名称"},model:{value:e.model.departName,callback:function(t){e.$set(e.model,"departName",t)},expression:"model.departName"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"上级部门",prop:"parentId"}},[a("a-tree-select",{staticStyle:{width:"100%"},attrs:{dropdownStyle:{maxHeight:"200px",overflow:"auto"},treeData:e.treeData,disabled:e.disable,placeholder:"无"},model:{value:e.model.parentId,callback:function(t){e.$set(e.model,"parentId",t)},expression:"model.parentId"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构编码",prop:"orgCode"}},[a("a-input",{attrs:{disabled:"",placeholder:"请输入机构编码"},model:{value:e.model.orgCode,callback:function(t){e.$set(e.model,"orgCode",t)},expression:"model.orgCode"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构类型",prop:"orgCategory"}},[e.orgCategoryDisabled?[a("a-radio-group",{attrs:{placeholder:"请选择机构类型"},model:{value:e.model.orgCategory,callback:function(t){e.$set(e.model,"orgCategory",t)},expression:"model.orgCategory"}},[a("a-radio",{attrs:{value:"1"}},[e._v("\n                    公司\n                  ")])],1)]:[a("a-radio-group",{attrs:{placeholder:"请选择机构类型"},model:{value:e.model.orgCategory,callback:function(t){e.$set(e.model,"orgCategory",t)},expression:"model.orgCategory"}},[a("a-radio",{attrs:{value:"2"}},[e._v("\n                    部门\n                  ")]),a("a-radio",{attrs:{value:"3"}},[e._v("\n                    岗位\n                  ")])],1)]],2),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"部门负责人"}},[a("j-select-multi-user",{attrs:{valueKey:"id"},model:{value:e.model.directorUserIds,callback:function(t){e.$set(e.model,"directorUserIds",t)},expression:"model.directorUserIds"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"排序",prop:"departOrder"}},[a("a-input-number",{model:{value:e.model.departOrder,callback:function(t){e.$set(e.model,"departOrder",t)},expression:"model.departOrder"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"手机号",prop:"mobile"}},[a("a-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.model.mobile,callback:function(t){e.$set(e.model,"mobile",t)},expression:"model.mobile"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"地址",prop:"address"}},[a("a-input",{attrs:{placeholder:"请输入地址"},model:{value:e.model.address,callback:function(t){e.$set(e.model,"address",t)},expression:"model.address"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"备注",prop:"memo"}},[a("a-textarea",{attrs:{placeholder:"请输入备注"},model:{value:e.model.memo,callback:function(t){e.$set(e.model,"memo",t)},expression:"model.memo"}})],1)],1),a("div",{staticClass:"anty-form-btn"},[a("a-button",{attrs:{type:"default",htmlType:"button",icon:"sync"},on:{click:e.emptyCurrForm}},[e._v("重置")]),a("a-button",{attrs:{type:"primary",htmlType:"button",icon:"form"},on:{click:e.submitCurrForm}},[e._v("保存")])],1)],1):a("a-card",[a("a-empty",[a("span",{attrs:{slot:"description"},slot:"description"},[e._v(" 请先选择一个部门! ")])])],1)],1),a("a-tab-pane",{key:"2",attrs:{tab:"部门权限",forceRender:""}},[a("depart-auth-modal",{ref:"departAuth"})],1)],1)],1),a("depart-modal",{ref:"departModal",on:{ok:e.loadTree}})],1)},o=[],n=a("c1af"),l=a("4ec3"),s=a("0fea"),i=a("b65a"),d=a("1be7"),c=a("ca00"),u=a("0d34"),p=a("2b0e"),h=[{title:"机构名称",dataIndex:"departName"},{title:"机构类型",align:"center",dataIndex:"orgType"},{title:"机构编码",dataIndex:"orgCode"},{title:"手机号",dataIndex:"mobile"},{title:"传真",dataIndex:"fax"},{title:"地址",dataIndex:"address"},{title:"排序",align:"center",dataIndex:"departOrder"},{title:"操作",align:"center",dataIndex:"action",scopedSlots:{customRender:"action"}}],m={name:"DepartList",mixins:[i["a"]],components:{JThirdAppButton:u["default"],DepartAuthModal:d["default"],DepartModal:n["default"]},data:function(){return{iExpandedKeys:[],treeLoading:!0,autoExpandParent:!1,currFlowId:"",currFlowName:"",disable:!0,treeData:[],visible:!1,departTree:[],departTreeAll:[],loadedKeys:[],allIds:[],rightClickSelectedKey:"",rightClickSelectedOrgCode:"",hiding:!0,model:{},dropTrigger:"",depart:{},columns:h,disableSubmit:!1,checkedKeys:[],selectedKeys:[],autoIncr:1,currSelected:{},allTreeKeys:[],loadTreeKeys:[],checkStrictly:!0,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},graphDatasource:{nodes:[],edges:[]},validatorRules:{departName:[{required:!0,message:"请输入机构/部门名称!"}],orgCode:[{required:!0,message:"请输入机构编码!"}],orgCategory:[{required:!0,message:"请输入机构类型!"}],mobile:p["default"].prototype.rules.mobile2},url:{delete:"/sys/sysDepart/delete",edit:"/sys/sysDepart/edit",deleteBatch:"/sys/sysDepart/deleteBatch",exportXlsUrl:"sys/sysDepart/exportXls",importExcelUrl:"sys/sysDepart/importExcel"},orgCategoryDisabled:!1,oldDirectorUserIds:""}},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{loadData:function(){this.refresh()},loadTree:function(){var e=this,t=this;t.treeData=[],t.departTreeAll=[],t.departTree=[],t.allIds=[],t.iExpandedKeys=[],t.treeLoading=!1,Object(l["E"])().then((function(a){if(a.success){e.allTreeKeys=[];for(var r=0;r<a.result.length;r++){var o=a.result[r];t.treeData.push(o),t.departTreeAll.push(o),t.departTree.push(o),t.allIds.push(o.key),t.allTreeKeys.push(o.key),t.loadTreeKeys.indexOf(o.key)>=0&&t.iExpandedKeys.push(o.key)}t.$nextTick((function(){t.treeLoading=!0}))}}))},loadSubTree:function(e){var t=this;return new Promise((function(a){Object(l["E"])({pid:e.dataRef.id}).then((function(a){if(a.success){if(0==a.result.length)return void(e.dataRef["isLeaf"]=!0);e.dataRef["children"]=a.result;for(var r=0;r<a.result.length;r++){var o=a.result[r];t.allIds.push(o.key),t.loadTreeKeys.indexOf(o.key)>0&&t.iExpandedKeys.push(o.key)}}})),a()}))},refresh:function(){this.treeLoading=!0,this.loadTree()},rightHandle:function(e){this.dropTrigger="contextmenu",this.rightClickSelectedKey=e.node.eventKey,this.rightClickSelectedOrgCode=e.node.dataRef.orgCode},onExpand:function(e){this.iExpandedKeys=e,this.autoExpandParent=!1,this.allTreeKeys=e,this.loadTreeKeys=e},backFlowList:function(){this.$router.back(-1)},dropStatus:function(e){0==e&&(this.dropTrigger="")},closeDrop:function(){this.dropTrigger=""},addRootNode:function(){this.$refs.nodeModal.add(this.currFlowId,"")},batchDel:function(){if(this.checkedKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.checkedKeys.length;t++)e+=this.checkedKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"确定要删除所选中的 "+this.checkedKeys.length+" 条数据，以及子节点数据吗?",onOk:function(){Object(s["a"])(a.url.deleteBatch,{ids:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadTree(),a.onClearSelected()):a.$message.warning(e.message)}))}})}},onSearch:function(e){var t=this;e?Object(l["U"])({keyWord:e}).then((function(e){if(e.success){t.departTree=[];for(var a=0;a<e.result.length;a++){var r=e.result[a];t.departTree.push(r)}}else t.$message.warning(e.message)})):t.departTree=t.departTreeAll},nodeModalOk:function(){this.loadTree()},nodeModalClose:function(){},hide:function(){this.visible=!1},onCheck:function(e,t){this.hiding=!1,this.checkStrictly?this.checkedKeys=e.checked:this.checkedKeys=e},onSelect:function(e,t){var a=this;this.hiding=!1;var r=t.node.dataRef;this.currSelected=Object.assign({},r),this.model=this.currSelected,this.selectedKeys=[r.key],this.model.parentId=r.parentId,this.setValuesToForm(r),this.$refs.departAuth.show(r.id),this.oldDirectorUserIds=r.directorUserIds,this.$nextTick((function(){a.$refs.form.validateField("mobile")}))},setValuesToForm:function(e){var t=this;"1"==e.orgCategory?this.orgCategoryDisabled=!0:this.orgCategoryDisabled=!1,this.$nextTick((function(){t.model=Object(c["b"])(e)}))},getCurrSelectedTitle:function(){return this.currSelected.title?this.currSelected.title:""},onClearSelected:function(){this.hiding=!0,this.checkedKeys=[],this.currSelected={},this.model=Object(c["b"])(this.currSelected),this.selectedKeys=[],this.$refs.departAuth.departId=""},handleNodeTypeChange:function(e){this.currSelected.nodeType=e},notifyTriggerTypeChange:function(e){this.currSelected.notifyTriggerType=e},receiptTriggerTypeChange:function(e){this.currSelected.receiptTriggerType=e},submitCurrForm:function(){var e=this;this.$refs.form.validate((function(t,a){if(t){if(!e.currSelected.id)return void e.$message.warning("请点击选择要修改部门!");var r=Object.assign(e.currSelected,e.model);r.oldDirectorUserIds=e.oldDirectorUserIds,Object(s["h"])(e.url.edit,r,"put").then((function(t){t.success?(e.$message.success("保存成功!"),e.loadTree()):e.$message.error(t.message)}))}}))},emptyCurrForm:function(){this.model=this.currSelected},nodeSettingFormSubmit:function(){this.$refs.form.validate((function(e,t){}))},openSelect:function(){this.$refs.sysDirectiveModal.show()},handleAdd:function(e){if(1==e)this.$refs.departModal.add(),this.$refs.departModal.title="新增";else if(2==e){var t=this.currSelected.key;if(!t)return this.$message.warning("请先点击选中上级部门！"),!1;this.$refs.departModal.add(this.selectedKeys[0]),this.$refs.departModal.title="新增"}else this.$refs.departModal.add(this.rightClickSelectedKey),this.$refs.departModal.title="新增"},handleDelete:function(){var e=this;this.$confirm({title:"确认删除",content:"确定要删除此部门以及子节点数据吗?",onOk:function(){Object(l["j"])({id:e.rightClickSelectedKey}).then((function(t){if(t.success){e.checkedKeys.splice(e.checkedKeys.findIndex((function(t){return t===e.rightClickSelectedKey})),1),e.$message.success("删除成功!"),e.loadTree();var a=e.model.orgCode;a&&a===e.rightClickSelectedOrgCode&&e.onClearSelected()}else e.$message.warning("删除失败!")}))}})},selectDirectiveOk:function(e){this.nodeSettingForm.setFieldsValue({directiveCode:e.directiveCode}),this.currSelected.sysCode=e.sysCode},getFlowGraphData:function(e){if(this.graphDatasource.nodes.push({id:e.id,text:e.flowNodeName}),e.children.length>0)for(var t=0;t<e.children.length;t++){var a=e.children[t];this.graphDatasource.edges.push({source:e.id,target:a.id}),this.getFlowGraphData(a)}},expandAll:function(){this.iExpandedKeys=this.allTreeKeys},closeAll:function(){this.iExpandedKeys=[]},checkALL:function(){this.checkStriccheckStrictlytly=!1,this.checkedKeys=this.allIds},cancelCheckALL:function(){this.checkedKeys=[]},switchCheckStrictly:function(e){1==e?this.checkStrictly=!1:2==e&&(this.checkStrictly=!0)},getAllKeys:function(e){if(this.allTreeKeys.push(e.key),e.children&&e.children.length>0)for(var t=0;t<e.children.length;t++)this.getAllKeys(e.children[t])},onSyncFinally:function(e){var t=e.isToLocal;t&&this.loadData()}},created:function(){this.currFlowId=this.$route.params.id,this.currFlowName=this.$route.params.name}},f=m,y=(a("8fbc"),a("58b6"),a("2877")),b=Object(y["a"])(f,r,o,!1,null,"5b56a8da",null);t["default"]=b.exports},d5ae:function(e,t,a){},fdef:function(e,t,a){},fe28:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.syncToApp&&e.syncToLocal?a("a-dropdown",[a("a-button",{attrs:{type:"primary",icon:"sync"}},[e._v("同步"+e._s(e.name))]),a("a-menu",{attrs:{slot:"overlay"},on:{click:e.handleMenuClick},slot:"overlay"},[e.syncToApp?a("a-menu-item",{key:"to-app"},[e._v("同步到"+e._s(e.name))]):e._e(),e.syncToLocal?a("a-menu-item",{key:"to-local"},[e._v("同步到本地")]):e._e()],1)],1):e.syncToApp?a("a-button",{attrs:{type:"primary",icon:"sync"},on:{click:function(t){return e.handleMenuClick({key:"to-app"})}}},[e._v("同步"+e._s(e.name))]):a("a-button",{attrs:{type:"primary",icon:"sync"},on:{click:function(t){return e.handleMenuClick({key:"to-local"})}}},[e._v("同步"+e._s(e.name)+"到本地")])},o=[],n={name:"JThirdAppDropdown",props:{type:String,name:String,syncToApp:Boolean,syncToLocal:Boolean},methods:{handleMenuClick:function(e){this.$emit(e.key,{type:this.type})}}},l=n,s=a("2877"),i=Object(s["a"])(l,r,o,!1,null,"a392fdb2",null);t["default"]=i.exports}}]);