(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(11)},11:function(e,t,a){"use strict";a.r(t);var n=a(3),l=a(4),s=a(5),r=a(8),m=a(6),u=a(9),c=a(1),h=a(0),i=a.n(h),o=a(7),b=a.n(o),E=(a(16),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={stname:"",lname:"",email:"",password:"",isPass:!0,noOfAttempts:5},a.handleChange=a.handleChange.bind(Object(c.a)(Object(c.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(c.a)(Object(c.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a="isPass"===t.name?t.checked:t.value,l=t.name;console.log(l+" "+a),this.setState(Object(n.a)({},l,a))}},{key:"handleSubmit",value:function(e){alert("Are you sure you want to submit your Form? "+this.state.stname+" "+this.state.isPass+" "+this.state.noOfAttempts),e.preventDefault()}},{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("fieldset",null,i.a.createElement("div",null,i.a.createElement("h1",null,i.a.createElement("center",null,"SIGNUP FORM"))),i.a.createElement("center",null,i.a.createElement("h3",null,i.a.createElement("label",null,"Name:",i.a.createElement("input",{name:"stname",type:"text",value:this.state.stname,onChange:this.handleChange}))),i.a.createElement("br",null),i.a.createElement("h3",null,i.a.createElement("label",null,"Last Name:",i.a.createElement("input",{name:"lname",type:"text",value:this.state.lname,onChange:this.handleChange}))," "),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("h3",null,i.a.createElement("label",null,"Email:",i.a.createElement("input",{name:"email",type:"text",value:this.state.email,onChange:this.handleChange}))," ")," ",i.a.createElement("br",null)," ",i.a.createElement("br",null),i.a.createElement("h3",null,i.a.createElement("label",null,"password:",i.a.createElement("input",{name:"password",type:"text",value:this.state.password,onChange:this.handleChange}))," "),i.a.createElement("br",null),i.a.createElement("h3",null,i.a.createElement("label",null,"IsPass?",i.a.createElement("input",{name:"isPass",type:"checkbox",checked:this.state.isPass,onChange:this.handleChange}))),i.a.createElement("br",null),i.a.createElement("h3",null," ",i.a.createElement("label",null,"No of attempts:",i.a.createElement("input",{name:"noOfAttempts",type:"number",value:this.state.noOfAttempts,onChange:this.handleChange}))),i.a.createElement("br",null)),i.a.createElement("center",null,"  ",i.a.createElement("input",{type:"Submit",value:"Submit"})))," ")}}]),t}(i.a.Component));b.a.render(i.a.createElement(E,null),document.getElementById("root"))},16:function(e,t,a){}},[[10,2,1]]]);
//# sourceMappingURL=main.78a5bafc.chunk.js.map