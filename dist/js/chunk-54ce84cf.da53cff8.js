(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54ce84cf"],{"35da":function(e,t,a){},"418f":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{staticStyle:{height:"100%"},attrs:{title:e.title,maskClosable:!0,width:e.drawerWidth,placement:"right",closable:!0,visible:e.visible},on:{close:e.handleCancel}},[a("template",{slot:"title"},[a("div",{staticStyle:{width:"100%"}},[a("span",[e._v(e._s(e.title))]),a("span",{staticStyle:{display:"inline-block",width:"calc(100% - 51px)","padding-right":"10px","text-align":"right"}},[a("a-button",{staticStyle:{height:"20px",width:"20px",border:"0px"},attrs:{icon:"appstore"},on:{click:e.toggleScreen}})],1)])]),a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form-model",{ref:"form",attrs:{model:e.model,rules:e.validatorRules}},[a("a-form-model-item",{attrs:{label:"用户账号",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"username"}},[a("a-input",{attrs:{placeholder:"请输入用户账号",readOnly:!!e.model.id},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),e.model.id?e._e():[a("a-form-model-item",{attrs:{label:"登录密码",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"password"}},[a("a-input",{attrs:{type:"password",placeholder:"请输入登录密码"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),a("a-form-model-item",{attrs:{label:"确认密码",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"confirmpassword"}},[a("a-input",{attrs:{type:"password",placeholder:"请重新输入登录密码"},on:{blur:e.handleConfirmBlur},model:{value:e.model.confirmpassword,callback:function(t){e.$set(e.model,"confirmpassword",t)},expression:"model.confirmpassword"}})],1)],a("a-form-model-item",{attrs:{label:"用户姓名",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"realname"}},[a("a-input",{attrs:{placeholder:"请输入用户姓名"},model:{value:e.model.realname,callback:function(t){e.$set(e.model,"realname",t)},expression:"model.realname"}})],1),a("a-form-model-item",{attrs:{label:"工号",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"workNo"}},[a("a-input",{attrs:{placeholder:"请输入工号"},model:{value:e.model.workNo,callback:function(t){e.$set(e.model,"workNo",t)},expression:"model.workNo"}})],1),a("a-form-model-item",{attrs:{label:"手机号码",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"phone"}},[a("a-input",{attrs:{placeholder:"请输入手机号码"},model:{value:e.model.phone,callback:function(t){e.$set(e.model,"phone",t)},expression:"model.phone"}})],1),a("a-form-model-item",{attrs:{label:"职务",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-select-position",{attrs:{placeholder:"请选择职务",multiple:!1},model:{value:e.model.post,callback:function(t){e.$set(e.model,"post",t)},expression:"model.post"}})],1),a("a-form-model-item",{directives:[{name:"show",rawName:"v-show",value:!e.roleDisabled,expression:"!roleDisabled"}],attrs:{label:"角色分配",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-multi-select-tag",{attrs:{disabled:e.disableSubmit,options:e.rolesOptions,placeholder:"请选择角色"},model:{value:e.model.selectedroles,callback:function(t){e.$set(e.model,"selectedroles",t)},expression:"model.selectedroles"}})],1),a("a-form-model-item",{directives:[{name:"show",rawName:"v-show",value:!e.departDisabled,expression:"!departDisabled"}],attrs:{label:"部门分配",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-select-depart",{attrs:{multi:!0,backDepart:!0,treeOpera:!0},on:{back:e.backDepartInfo},model:{value:e.model.selecteddeparts,callback:function(t){e.$set(e.model,"selecteddeparts",t)},expression:"model.selecteddeparts"}},[e._v(">")])],1),a("a-form-model-item",{directives:[{name:"show",rawName:"v-show",value:!e.departDisabled,expression:"!departDisabled"}],attrs:{label:"租户分配",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-multi-select-tag",{attrs:{disabled:e.disableSubmit,options:e.tenantsOptions,placeholder:"请选择租户"},model:{value:e.model.relTenantIds,callback:function(t){e.$set(e.model,"relTenantIds",t)},expression:"model.relTenantIds"}})],1),a("a-form-model-item",{attrs:{label:"身份",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-radio-group",{on:{change:e.identityChange},model:{value:e.model.userIdentity,callback:function(t){e.$set(e.model,"userIdentity",t)},expression:"model.userIdentity"}},[a("a-radio",{attrs:{value:1}},[e._v("普通用户")]),a("a-radio",{attrs:{value:2}},[e._v("上级")])],1)],1),a("a-form-model-item",{directives:[{name:"show",rawName:"v-show",value:1==e.departIdShow,expression:"departIdShow==true"}],attrs:{label:"负责部门",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-multi-select-tag",{attrs:{disabled:e.disableSubmit,options:e.nextDepartOptions,placeholder:"请选择负责部门"},model:{value:e.model.departIds,callback:function(t){e.$set(e.model,"departIds",t)},expression:"model.departIds"}})],1),a("a-form-model-item",{attrs:{label:"头像",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-image-upload",{staticClass:"avatar-uploader",attrs:{text:"上传"},model:{value:e.model.avatar,callback:function(t){e.$set(e.model,"avatar",t)},expression:"model.avatar"}})],1),a("a-form-model-item",{attrs:{label:"生日",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择生日",format:e.dateFormat,getCalendarContainer:function(e){return e.parentNode}},model:{value:e.model.birthday,callback:function(t){e.$set(e.model,"birthday",t)},expression:"model.birthday"}})],1),a("a-form-model-item",{attrs:{label:"性别",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-select",{attrs:{placeholder:"请选择性别",getPopupContainer:function(e){return e.parentNode}},model:{value:e.model.sex,callback:function(t){e.$set(e.model,"sex",t)},expression:"model.sex"}},[a("a-select-option",{attrs:{value:1}},[e._v("男")]),a("a-select-option",{attrs:{value:2}},[e._v("女")])],1)],1),a("a-form-model-item",{attrs:{label:"邮箱",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"email"}},[a("a-input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}})],1),a("a-form-model-item",{attrs:{label:"座机",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"telephone"}},[a("a-input",{attrs:{placeholder:"请输入座机"},model:{value:e.model.telephone,callback:function(t){e.$set(e.model,"telephone",t)},expression:"model.telephone"}})],1),a("a-form-model-item",{attrs:{label:"工作流引擎",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-dict-select-tag",{attrs:{placeholder:"请选择是否同步工作流引擎",type:"radio",dictCode:"activiti_sync"},model:{value:e.model.activitiSync,callback:function(t){e.$set(e.model,"activitiSync",t)},expression:"model.activitiSync"}})],1)],2)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.disableSubmit,expression:"!disableSubmit"}],staticClass:"drawer-bootom-button"},[a("a-popconfirm",{attrs:{title:"确定放弃编辑？",okText:"确定",cancelText:"取消"},on:{confirm:e.handleCancel}},[a("a-button",{staticStyle:{"margin-right":".8rem"}},[e._v("取消")])],1),a("a-button",{attrs:{type:"primary",loading:e.confirmLoading},on:{click:e.handleSubmit}},[e._v("提交")])],1)],2)},o=[],s=a("c1df"),r=a.n(s),i=a("2b0e"),n=a("9fb0"),d=a("0fea"),p=a("4ec3"),m=a("c82c"),c={name:"UserModal",components:{},data:function(){return{departDisabled:!1,roleDisabled:!1,modalWidth:800,drawerWidth:700,modaltoggleFlag:!0,confirmDirty:!1,userId:"",disableSubmit:!1,dateFormat:"YYYY-MM-DD",validatorRules:{username:[{required:!0,message:"请输入用户账号!"},{validator:this.validateUsername}],password:[{required:!0,pattern:/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,./]).{8,}$/,message:"密码由8位数字、大小写字母和特殊符号组成!"},{validator:this.validateToNextPassword,trigger:"change"}],confirmpassword:[{required:!0,message:"请重新输入登录密码!"},{validator:this.compareToFirstPassword}],realname:[{required:!0,message:"请输入用户名称!"}],phone:[{required:!0,message:"请输入手机号!"},{validator:this.validatePhone}],email:[{validator:this.validateEmail}],roles:{},workNo:[{required:!0,message:"请输入工号"},{validator:this.validateWorkNo}],telephone:[{pattern:/^0\d{2,3}-[1-9]\d{6,7}$/,message:"请输入正确的座机号码"}]},departIdShow:!1,title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},uploadLoading:!1,confirmLoading:!1,headers:{},url:{fileUpload:window._CONFIG["domianURL"]+"/sys/common/upload",userWithDepart:"/sys/user/userDepartList",userId:"/sys/user/generateUserId",syncUserByUserName:"/act/process/extActProcess/doSyncUserByUserName",queryTenantList:"/sys/tenant/queryList"},tenantsOptions:[],rolesOptions:[],nextDepartOptions:[]}},created:function(){var e=i["default"].ls.get(n["a"]);this.headers={"X-Access-Token":e},this.initRoleList(),this.initTenantList()},computed:{uploadAction:function(){return this.url.fileUpload}},methods:{add:function(){this.refresh(),this.edit({activitiSync:"1",userIdentity:1})},edit:function(e){var t=this;t.visible=!0,this.resetScreenSize(),t.userId=e.id,t.model=Object.assign({},{selectedroles:"",selecteddeparts:""},e),2==this.model.userIdentity?this.departIdShow=!0:this.departIdShow=!1,e.hasOwnProperty("id")&&(t.getUserRoles(e.id),t.getUserDeparts(e.id))},isDisabledAuth:function(e){return Object(m["a"])(e)},toggleScreen:function(){this.modaltoggleFlag?this.modalWidth=window.innerWidth:this.modalWidth=800,this.modaltoggleFlag=!this.modaltoggleFlag},resetScreenSize:function(){var e=document.body.clientWidth;this.drawerWidth=e<500?e:700},initTenantList:function(){var e=this;Object(d["c"])(this.url.queryTenantList).then((function(t){t.success&&(e.tenantsOptions=t.result.map((function(e,t,a){var l={label:e.name,value:e.id+""};return l})))}))},initRoleList:function(){var e=this;Object(p["Q"])().then((function(t){t.success&&(e.rolesOptions=t.result.map((function(e,t,a){var l={label:e.roleName,value:e.id};return l})))}))},getUserRoles:function(e){var t=this;Object(p["P"])({userid:e}).then((function(e){e.success&&(t.model.selectedroles=e.result.join(","))}))},getUserDeparts:function(e){var t=this;Object(d["c"])(t.url.userWithDepart,{userId:e}).then((function(e){if(e.success){for(var a=[],l=[],o=0;o<e.result.length;o++)l.push(e.result[o].key),a.push({value:e.result[o].key,label:e.result[o].title});t.model.selecteddeparts=l.join(","),t.nextDepartOptions=a}}))},backDepartInfo:function(e){this.model.departIds=this.model.selecteddeparts,this.nextDepartOptions=e.map((function(e,t,a){var l={label:e.text,value:e.value+""};return l}))},refresh:function(){this.userId="",this.nextDepartOptions=[],this.departIdShow=!1},close:function(){this.$emit("close"),this.visible=!1,this.disableSubmit=!1,this.nextDepartOptions=[],this.departIdShow=!1,this.$refs.form.resetFields()},moment:r.a,handleSubmit:function(){var e=this,t=this;this.$refs.form.validate((function(a){if(!a)return!1;var l;t.confirmLoading=!0,2!==e.model.userIdentity&&(e.model.departIds=""),e.model.id?l=Object(p["r"])(e.model):(e.model.id=e.userId,l=Object(p["e"])(e.model)),l.then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}))},handleCancel:function(){this.close()},validateToNextPassword:function(e,t,a){var l=this.model.confirmpassword;t&&l&&t!==l&&a("两次输入的密码不一样！"),t&&this.confirmDirty&&this.$refs.form.validateField(["confirmpassword"]),a()},compareToFirstPassword:function(e,t,a){t&&t!==this.model.password?a("两次输入的密码不一样！"):a()},validatePhone:function(e,t,a){if(t)if(new RegExp(/^1[3|4|5|7|8|9][0-9]\d{8}$/).test(t)){var l={tableName:"sys_user",fieldName:"phone",fieldVal:t,dataId:this.userId};Object(p["m"])(l).then((function(e){e.success?a():a("手机号已存在!")}))}else a("请输入正确格式的手机号码!");else a()},validateEmail:function(e,t,a){if(t)if(new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(t)){var l={tableName:"sys_user",fieldName:"email",fieldVal:t,dataId:this.userId};Object(p["m"])(l).then((function(e){e.success?a():a("邮箱已存在!")}))}else a("请输入正确格式的邮箱!");else a()},validateUsername:function(e,t,a){var l={tableName:"sys_user",fieldName:"username",fieldVal:t,dataId:this.userId};Object(p["m"])(l).then((function(e){e.success?a():a("用户名已存在!")}))},validateWorkNo:function(e,t,a){var l={tableName:"sys_user",fieldName:"work_no",fieldVal:t,dataId:this.userId};Object(p["m"])(l).then((function(e){e.success?a():a("工号已存在!")}))},handleConfirmBlur:function(e){var t=e.target.value;this.confirmDirty=this.confirmDirty||!!t},beforeUpload:function(e){var t=e.type;if(t.indexOf("image")<0)return this.$message.warning("请上传图片"),!1},identityChange:function(e){1===e.target.value?this.departIdShow=!1:this.departIdShow=!0}}},u=c,h=(a("77c1"),a("2877")),b=Object(h["a"])(u,l,o,!1,null,"c668f820",null);t["default"]=b.exports},"77c1":function(e,t,a){"use strict";var l=a("35da"),o=a.n(l);o.a}}]);