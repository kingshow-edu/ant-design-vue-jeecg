(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4802f247","chunk-dcec768e","chunk-2d0b1e33","chunk-2d0bce7e"],{"222d":function(e,t,a){"use strict";var n=a("abfd"),l=a.n(n);l.a},2285:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"数据规则/按钮权限配置",width:"365",closable:!1,visible:e.visible},on:{close:e.onClose}},[a("a-tabs",{attrs:{defaultActiveKey:"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"数据规则"}},[e.dataruleList.length>0?a("a-checkbox-group",{model:{value:e.dataruleChecked,callback:function(t){e.dataruleChecked=t},expression:"dataruleChecked"}},[a("a-row",[e._l(e.dataruleList,(function(t,n){return a("a-col",{key:"dr"+n,attrs:{span:24}},[a("a-checkbox",{attrs:{value:t.id}},[e._v(e._s(t.ruleName))])],1)})),a("a-col",{attrs:{span:24}},[a("div",{staticStyle:{width:"100%","margin-top":"15px"}},[a("a-button",{attrs:{type:"primary",size:"small",icon:"save"},on:{click:e.saveDataruleForRole}},[e._v("点击保存")])],1)])],2)],1):a("div",[a("h3",[e._v("无配置信息!")])])],1)],1)],1)},l=[],o=a("290c"),r=a("da05"),s=a("0fea"),i={name:"RoleDataruleModal",components:{ACol:r["b"],ARow:o["a"]},data:function(){return{functionId:"",roleId:"",visible:!1,tabList:[{key:"1",tab:"数据规则"},{key:"2",tab:"按钮权限"}],activeTabKey:"1",url:{datarule:"/sys/role/datarule"},dataruleList:[],dataruleChecked:[]}},methods:{loadData:function(){var e=this;Object(s["c"])("".concat(this.url.datarule,"/").concat(this.functionId,"/").concat(this.roleId)).then((function(t){if(t.success){e.dataruleList=t.result.datarule;var a=t.result.drChecked;a&&(e.dataruleChecked=a.split(","))}}))},saveDataruleForRole:function(){var e=this;this.dataruleChecked&&0!=this.dataruleChecked.length||this.$message.warning("请注意，现未勾选任何数据权限!");var t={permissionId:this.functionId,roleId:this.roleId,dataRuleIds:this.dataruleChecked.join(",")};Object(s["i"])(this.url.datarule,t).then((function(t){t.success?e.$message.success(t.message):e.$message.error(t.message)}))},show:function(e,t){this.onReset(),this.functionId=e,this.roleId=t,this.visible=!0,this.loadData()},onClose:function(){this.visible=!1,this.onReset()},onTabChange:function(e){this.activeTabKey=e},onReset:function(){this.functionId="",this.roleId="",this.dataruleList=[],this.dataruleChecked=[]}}},c=i,d=a("2877"),u=Object(d["a"])(c,n,l,!1,null,"435b66de",null);t["default"]=u.exports},"2a70":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{staticStyle:{top:"5%",height:"85%","overflow-y":"hidden"},attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭",wrapClassName:"ant-modal-cust-warp"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form-model",e._b({ref:"form",attrs:{model:e.model,rules:e.validatorRules}},"a-form-model",e.layout,!1),[a("a-form-model-item",{attrs:{label:"角色编码",required:"",prop:"roleCode"}},[a("a-input",{attrs:{disabled:e.roleDisabled,placeholder:"请输入角色编码"},model:{value:e.model.roleCode,callback:function(t){e.$set(e.model,"roleCode",t)},expression:"model.roleCode"}})],1),a("a-form-model-item",{attrs:{label:"角色名称",required:"",prop:"roleName"}},[a("a-input",{attrs:{placeholder:"请输入角色名称"},model:{value:e.model.roleName,callback:function(t){e.$set(e.model,"roleName",t)},expression:"model.roleName"}})],1),a("a-form-model-item",{attrs:{label:"描述",prop:"description"}},[a("a-textarea",{attrs:{rows:5,placeholder:"请输入角色描述"},model:{value:e.model.description,callback:function(t){e.$set(e.model,"description",t)},expression:"model.description"}})],1)],1)],1)],1)},l=[],o=a("4ec3"),r={name:"RoleModal",data:function(){return{title:"操作",visible:!1,roleDisabled:!1,model:{},layout:{labelCol:{span:3},wrapperCol:{span:14}},confirmLoading:!1,validatorRules:{roleName:[{required:!0,message:"请输入角色名称!"},{min:2,max:30,message:"长度在 2 到 30 个字符",trigger:"blur"}],roleCode:[{required:!0,message:"请输入角色名称!"},{min:0,max:64,message:"长度不超过 64 个字符",trigger:"blur"},{validator:this.validateRoleCode}],description:[{min:0,max:126,message:"长度不超过 126 个字符",trigger:"blur"}]}}},created:function(){this.modelDefault=JSON.parse(JSON.stringify(this.model))},methods:{add:function(){this.edit(this.modelDefault)},edit:function(e){this.model=Object.assign({},e),this.visible=!0,this.model.id?this.roleDisabled=!0:this.roleDisabled=!1},close:function(){this.$refs.form.clearValidate(),this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.$refs.form.validate((function(a){if(!a)return!1;var n;t.confirmLoading=!0,n=e.model.id?Object(o["q"])(e.model):Object(o["d"])(e.model),n.then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}))},handleCancel:function(){this.close()},validateRoleCode:function(e,t,a){if(/[\u4E00-\u9FA5]/g.test(t))a("角色编码不可输入汉字!");else{var n={tableName:"sys_role",fieldName:"role_code",fieldVal:t,dataId:this.model.id};Object(o["m"])(n).then((function(e){e.success?a():a(e.message)}))}}}},s=r,i=a("2877"),c=Object(i["a"])(s,n,l,!1,null,"0251b110",null);t["default"]=c.exports},"35ec":function(e,t,a){},"4fa6":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{staticClass:"card-area",attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"名称",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入名称查询"},model:{value:e.queryParam.roleName,callback:function(t){e.$set(e.queryParam,"roleName",t)},expression:"queryParam.roleName"}})],1)],1),a("a-col",{attrs:{md:10,sm:12}},[a("a-form-item",{attrs:{label:"创建时间",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[a("j-date",{staticStyle:{width:"45%"},attrs:{showTime:!0,"date-format":"YYYY-MM-DD HH:mm:ss",placeholder:"请选择开始时间"},model:{value:e.queryParam.createTime_begin,callback:function(t){e.$set(e.queryParam,"createTime_begin",t)},expression:"queryParam.createTime_begin"}}),a("span",{staticStyle:{width:"10px"}},[e._v("~")]),a("j-date",{staticStyle:{width:"45%"},attrs:{showTime:!0,"date-format":"YYYY-MM-DD HH:mm:ss",placeholder:"请选择结束时间"},model:{value:e.queryParam.createTime_end,callback:function(t){e.$set(e.queryParam,"createTime_end",t)},expression:"queryParam.createTime_end"}})],1)],1),a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-button",{attrs:{type:"primary"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.searchReset}},[e._v("重置")])],1)],1)],1)],1)],1),a("div",{staticClass:"table-operator",staticStyle:{"margin-top":"5px"}},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),a("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("角色信息")}}},[e._v("导出")]),a("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[a("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("删除")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v("\n        批量操作 "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项  \n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,n){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(n)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("\n            更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{on:{click:function(t){return e.handlePerssion(n.id)}}},[e._v("授权")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(n.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),a("role-modal",{ref:"modalForm",on:{ok:e.modalFormOk}}),a("user-role-modal",{ref:"modalUserRole"})],1)},l=[],o=a("2a70"),r=a("ee18"),s=a("b65a"),i=a("2dab"),c={name:"RoleList",mixins:[s["a"]],components:{RoleModal:o["default"],UserRoleModal:r["default"],JDate:i["default"]},data:function(){return{description:"角色管理页面",queryParam:{roleName:""},columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"角色名称",align:"center",dataIndex:"roleName"},{title:"角色编码",align:"center",dataIndex:"roleCode"},{title:"备注",align:"center",dataIndex:"description"},{title:"创建时间",dataIndex:"createTime",align:"center",sorter:!0},{title:"更新时间",dataIndex:"updateTime",align:"center",sorter:!0},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],url:{list:"/sys/role/list",delete:"/sys/role/delete",deleteBatch:"/sys/role/deleteBatch",exportXlsUrl:"/sys/role/exportXls",importExcelUrl:"sys/role/importExcel"}}},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{handlePerssion:function(e){this.$refs.modalUserRole.show(e)},onChangeDate:function(e,t){}}},d=c,u=(a("80a4"),a("2877")),m=Object(u["a"])(d,n,l,!1,null,"3e0e96c9",null);t["default"]=m.exports},"80a4":function(e,t,a){"use strict";var n=a("35ec"),l=a.n(n);l.a},abfd:function(e,t,a){},ee18:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{staticStyle:{overflow:"auto","padding-bottom":"53px"},attrs:{title:e.title,maskClosable:!0,width:"650",placement:"right",closable:!0,visible:e.visible},on:{close:e.close}},[a("a-form",[a("a-form-item",{attrs:{label:"所拥有的权限"}},[a("a-tree",{attrs:{checkable:"",checkedKeys:e.checkedKeys,treeData:e.treeData,selectedKeys:e.selectedKeys,expandedKeys:e.expandedKeysss,checkStrictly:e.checkStrictly},on:{check:e.onCheck,expand:e.onExpand,select:e.onTreeNodeSelect},scopedSlots:e._u([{key:"hasDatarule",fn:function(t){var n=t.slotTitle,l=t.ruleFlag;return a("span",{},[e._v("\n          "+e._s(n)),l?a("a-icon",{staticStyle:{"margin-left":"5px",color:"red"},attrs:{type:"align-left"}}):e._e()],1)}}])})],1)],1),a("div",{staticClass:"drawer-bootom-button"},[a("a-dropdown",{staticStyle:{float:"left"},attrs:{trigger:["click"],placement:"topCenter"}},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:function(t){return e.switchCheckStrictly(1)}}},[e._v("父子关联")]),a("a-menu-item",{key:"2",on:{click:function(t){return e.switchCheckStrictly(2)}}},[e._v("取消关联")]),a("a-menu-item",{key:"3",on:{click:e.checkALL}},[e._v("全部勾选")]),a("a-menu-item",{key:"4",on:{click:e.cancelCheckALL}},[e._v("取消全选")]),a("a-menu-item",{key:"5",on:{click:e.expandAll}},[e._v("展开所有")]),a("a-menu-item",{key:"6",on:{click:e.closeAll}},[e._v("合并所有")])],1),a("a-button",[e._v("\n        树操作 "),a("a-icon",{attrs:{type:"up"}})],1)],1),a("a-popconfirm",{attrs:{title:"确定放弃编辑？",okText:"确定",cancelText:"取消"},on:{confirm:e.close}},[a("a-button",{staticStyle:{"margin-right":".8rem"}},[e._v("取消")])],1),a("a-button",{staticStyle:{"margin-right":"0.8rem"},attrs:{type:"primary",loading:e.loading,ghost:""},on:{click:function(t){return e.handleSubmit(!1)}}},[e._v("仅保存")]),a("a-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.handleSubmit(!0)}}},[e._v("保存并关闭")])],1),a("role-datarule-modal",{ref:"datarule"})],1)},l=[],o=a("4ec3"),r=a("2285");function s(e){return u(e)||d(e)||c(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"===typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?m(e,t):void 0}}function d(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function u(e){if(Array.isArray(e))return m(e)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var h={name:"RoleModal",components:{RoleDataruleModal:r["default"]},data:function(){return{roleId:"",treeData:[],defaultCheckedKeys:[],checkedKeys:[],expandedKeysss:[],allTreeKeys:[],autoExpandParent:!0,checkStrictly:!0,title:"角色权限配置",visible:!1,loading:!1,selectedKeys:[]}},methods:{onTreeNodeSelect:function(e){e&&e.length>0&&(this.selectedKeys=e),this.$refs.datarule.show(this.selectedKeys[0],this.roleId)},onCheck:function(e){this.checkStrictly?this.checkedKeys=e.checked:this.checkedKeys=e},show:function(e){this.roleId=e,this.visible=!0},close:function(){this.reset(),this.$emit("close"),this.visible=!1},onExpand:function(e){this.expandedKeysss=e,this.autoExpandParent=!1},reset:function(){this.expandedKeysss=[],this.checkedKeys=[],this.defaultCheckedKeys=[],this.loading=!1},expandAll:function(){this.expandedKeysss=this.allTreeKeys},closeAll:function(){this.expandedKeysss=[]},checkALL:function(){this.checkedKeys=this.allTreeKeys},cancelCheckALL:function(){this.checkedKeys=[]},switchCheckStrictly:function(e){1==e?this.checkStrictly=!1:2==e&&(this.checkStrictly=!0)},handleCancel:function(){this.close()},handleSubmit:function(e){var t=this,a=this,n={roleId:a.roleId,permissionIds:a.checkedKeys.join(","),lastpermissionIds:a.defaultCheckedKeys.join(",")};a.loading=!0,Object(o["T"])(n).then((function(n){n.success?(a.$message.success(n.message),a.loading=!1,e&&a.close()):(a.$message.error(n.message),a.loading=!1,e&&a.close()),t.loadData()}))},loadData:function(){var e=this;Object(o["queryTreeListForRole"])().then((function(t){e.treeData=t.result.treeList,e.allTreeKeys=t.result.ids,Object(o["K"])({roleId:e.roleId}).then((function(t){e.checkedKeys=s(t.result),e.defaultCheckedKeys=s(t.result),e.expandedKeysss=e.allTreeKeys}))}))}},watch:{visible:function(){this.visible&&this.loadData()}}},f=h,p=(a("222d"),a("2877")),y=Object(p["a"])(f,n,l,!1,null,"60e39634",null);t["default"]=y.exports}}]);