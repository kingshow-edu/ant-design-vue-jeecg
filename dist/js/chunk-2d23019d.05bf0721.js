(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d23019d"],{eb9c:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-modal",{attrs:{width:1e3,title:e.title,visible:e.innerVisible,cancelText:"关闭",okButtonProps:{style:{display:"none"}}},on:{cancel:e.handleCancel}},[n("a-alert",{staticStyle:{"margin-bottom":"16px"},attrs:{type:"info",showIcon:""}},[n("template",{slot:"message"},[n("span",[e._v("已选择")]),n("a",{staticStyle:{"font-weight":"600",padding:"0 4px"}},[e._v(e._s(e.selectedRowKeys.length))]),n("span",[e._v("项")]),e.selectedRowKeys.length>0?[n("a-divider",{attrs:{type:"vertical"}}),n("a",{on:{click:e.handleClearSelection}},[e._v("清空选择")]),n("a-divider",{attrs:{type:"vertical"}}),n("a",{on:{click:e.handleRevertBatch}},[e._v("批量还原")]),n("a-divider",{attrs:{type:"vertical"}}),n("a",{on:{click:e.handleDeleteBatch}},[e._v("批量删除")])]:e._e()],2)],2),n("a-table",{ref:"table",attrs:{rowKey:"id",size:"middle",bordered:"",columns:e.columns,loading:e.loading,dataSource:e.dataSource,pagination:!1,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.handleTableSelectChange}},scopedSlots:e._u([{key:"avatarslot",fn:function(t,a,i){return[n("div",{staticClass:"anty-img-wrap"},[n("a-avatar",{attrs:{shape:"square",src:e.url.getAvatar(a.avatar),icon:"user"}})],1)]}},{key:"action",fn:function(t,a){return n("span",{},[n("a",{on:{click:function(t){return e.handleRevert([a.id])}}},[n("a-icon",{attrs:{type:"redo"}}),e._v(" 还原用户")],1),n("a-divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(t){return e.handleDelete([a.id])}}},[n("a-icon",{attrs:{type:"delete"}}),e._v(" 彻底删除")],1)],1)}}])})],1)},i=[],c=n("0fea");function l(e){var t=this;this.loading=!!e.loading,e.promise.then((function(t){if(!t.success||"function"!==typeof e.success)throw new Error(t.message);e.success(t)})).catch((function(e){t.$message.warning("查询已删除的用户失败："+(e.message||e))})).finally((function(){t.loading=!1}))}var s={name:"UserRecycleBinModal",props:{visible:{type:Boolean,default:!1}},data:function(){return{title:"用户回收站",loading:!1,innerVisible:!1,selectedRowKeys:[],dataSource:[],columns:[{title:"#",align:"center",key:"rowIndex",width:80,customRender:function(e,t,n){return n+1}},{title:"账号",align:"center",dataIndex:"username"},{title:"姓名",align:"center",dataIndex:"realname"},{title:"头像",align:"center",dataIndex:"avatar",scopedSlots:{customRender:"avatarslot"}},{title:"部门",align:"center",dataIndex:"orgCode"},{title:"操作",align:"center",dataIndex:"action",width:200,scopedSlots:{customRender:"action"}}],url:{getAvatar:function(e){return Object(c["d"])("".concat(e))},recycleBin:"/sys/user/recycleBin",putRecycleBin:"/sys/user/putRecycleBin",deleteRecycleBin:"/sys/user/deleteRecycleBin"}}},watch:{visible:{immediate:!0,handler:function(e){e&&this.loadData(),this.innerVisible=e}},innerVisible:function(e){this.$emit("update:visible",e)}},methods:{loadData:function(){var e=this;l.call(this,{loading:!0,promise:this.$http.get(this.url.recycleBin),success:function(t){return e.dataSource=t.result}})},handleOk:function(){this.loadData(),this.$emit("ok")},handleCancel:function(){this.innerVisible=!1},handleRevert:function(e){var t=this;this.$confirm({title:"恢复用户",content:"您确定要恢复这 ".concat(e.length," 个用户吗？"),centered:!0,onOk:function(){Object(c["j"])(t.url.putRecycleBin,{userIds:e.join(",")}).then((function(n){n.success&&(t.handleOk(),t.handleClearSelection(),t.$message.success("还原 ".concat(e.length," 个用户成功！")))}))}})},handleDelete:function(e){var t=this,n=this.$createElement;this.$confirm({title:"彻底删除用户",content:n("div",[n("p",["您确定要彻底删除这 ",e.length," 个用户吗？"]),n("p",{style:"color:red;"},["注意：彻底删除后将无法恢复，请谨慎操作！"])]),centered:!0,onOk:function(){var n=t;Object(c["a"])(n.url.deleteRecycleBin,{userIds:e.join(",")}).then((function(a){a.success?(t.loadData(),t.handleClearSelection(),t.$message.success("彻底删除 ".concat(e.length," 个用户成功！"))):n.$message.warning(a.message)}))}})},handleRevertBatch:function(){this.handleRevert(this.selectedRowKeys)},handleDeleteBatch:function(){this.handleDelete(this.selectedRowKeys)},handleClearSelection:function(){this.handleTableSelectChange([],[])},handleTableSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t}}},o=s,r=n("2877"),d=Object(r["a"])(o,a,i,!1,null,"36eb7e79",null);t["default"]=d.exports}}]);