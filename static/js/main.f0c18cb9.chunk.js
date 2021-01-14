(this.webpackJsonpform_validation_react=this.webpackJsonpform_validation_react||[]).push([[0],{19:function(e,a,n){},20:function(e,a,n){},24:function(e,a,n){"use strict";n.r(a);var t=n(1),s=n(0),r=n.n(s),l=n(10),i=n.n(l),m=(n(19),n(20),n(13)),c=function(){return Object(t.jsx)(m.a,{initialValues:{fname:"",lname:"",email:"",password:""},onSubmit:function(e){console.log("Valid Form",e)},validate:function(e){var a={},n=/^[a-z ,.'-]+$/i;e.fname?e.fname.length<5?a.fname="First Name must be at least 5 characters long.":n.test(e.fname)||(a.fname="Invalid First Name"):a.fname="First Name Required",e.lname?e.lname.length<5?a.lname="Last Name must be at least 5 characters long.":n.test(e.lname)||(a.lname="Invalid Last Name"):a.lname="Last Name Required";e.email?/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e.email)||(a.email="Invalid Email"):a.email="Email Required";return e.password?e.password.length<8?a.password="Password must be at least 8 characters long.":/(?=.*[0-9])/.test(e.password)||(a.password="Invalid password, Must contain one number"):a.password="Password Required",a},children:function(e){var a=e.values,n=e.touched,s=e.errors,r=e.isSubmitting,l=e.handleChange,i=e.handleBlur,m=e.handleSubmit;return Object(t.jsxs)("form",{onSubmit:m,children:[Object(t.jsx)("label",{htmlFor:"fname",children:"First Name"}),Object(t.jsx)("input",{name:"fname",type:"text",placeholder:"Enter your First Name",value:a.fname,onChange:l,onBlur:i,className:s.fname&&n.fname&&"error"}),s.fname&&n.fname&&Object(t.jsx)("div",{className:"input-feedback",children:s.fname}),Object(t.jsx)("label",{htmlFor:"lname",children:"Last Name"}),Object(t.jsx)("input",{name:"lname",type:"text",placeholder:"Enter your Last Name",value:a.lname,onChange:l,onBlur:i,className:s.lname&&n.lname&&"error"}),s.lname&&n.lname&&Object(t.jsx)("div",{className:"input-feedback",children:s.lname}),Object(t.jsx)("label",{htmlFor:"email",children:"Email"}),Object(t.jsx)("input",{name:"email",type:"text",placeholder:"Enter your email",value:a.email,onChange:l,onBlur:i,className:s.email&&n.email&&"error"}),s.email&&n.email&&Object(t.jsx)("div",{className:"input-feedback",children:s.email}),Object(t.jsx)("label",{htmlFor:"password",children:"Password"}),Object(t.jsx)("input",{name:"password",type:"password",placeholder:"Enter your password",value:a.password,onChange:l,onBlur:i,className:s.password&&n.password&&"error"}),s.password&&n.password&&Object(t.jsx)("div",{className:"input-feedback",children:s.password}),Object(t.jsx)("button",{type:"submit",disabled:r,children:"Create Account"})]})}})};var o=function(){return Object(t.jsx)("div",{className:"card",children:Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{children:"SignUp"}),Object(t.jsx)(c,{})]})})};i.a.render(Object(t.jsx)(r.a.StrictMode,{children:Object(t.jsx)(o,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.f0c18cb9.chunk.js.map