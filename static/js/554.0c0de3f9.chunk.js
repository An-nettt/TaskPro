"use strict";(self.webpackChunktask_pro=self.webpackChunktask_pro||[]).push([[554],{8554:function(n,e,r){r.r(e),r.d(e,{default:function(){return I}});var a,i,t,o,s,l,d,p,c,h,u=r(9439),x=r(9434),m=r(2791),g=r(5705),f=r(6727),w=f.Ry().shape({name:f.Z_().min(2,"Name must be at least 2 characters").max(32,"Name must be at most 32 characters").required("Name is required"),email:f.Z_().email("Invalid email").required("Email is required"),password:f.Z_().min(8,"Password must be at least 8 characters").max(64,"Password must be at most 64 characters").required("Password is required")}),b=r(168),Z=r(1087),v=r(9256),y=v.ZP.div(a||(a=(0,b.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n    width: 100%;\n    background:linear-gradient( 180deg, #ffffff 0%,  #ffffff 25%, #bedbb0 92.19%);\n    background-repeat: no-repeat;\n    background-size: cover;\n"]))),j=v.ZP.div(i||(i=(0,b.Z)(["\n  text-align: center;\n  background: #151515;\n  border-radius: 8px;\n  padding: 40px;\n"]))),k=v.ZP.div(t||(t=(0,b.Z)(["\n  display: flex;\n"]))),P=(0,v.ZP)(Z.rU)(o||(o=(0,b.Z)(["\n  left: 160px;\n  top: 40px;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.02em;\n  color: rgba(255, 255, 255, 0.30);\n  text-decoration: none;\n"]))),B=(0,v.ZP)(Z.rU)(s||(s=(0,b.Z)(["\n  margin-right: 14px;\n  display: inline-block;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.02em;\n  color: #FFF;\n  text-decoration: none;\n"]))),C=v.ZP.div(l||(l=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 40px;\n  gap: 14px;\n\n  input {\n    width: 326px;\n    height: 49px;\n    left: 40px;\n    top: 107px;\n    color: #FFF;\n    background: #1F1F1F;\n    opacity: 0.4;\n    border: 1px solid #BEDBB0;\n    padding-left: 18px;\n    box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);\n    border-radius: 8px;\n    @media screen and (max-width: 768px) {\n      width: 287px;\n  }\n  }\n"]))),F=v.ZP.button(d||(d=(0,b.Z)(["\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 21px;\n    text-align: center;\n    letter-spacing: -0.02em;\n    width: 100%;\n    height: 49px;\n    margin-top: 24px;\n    background: #BEDBB0;\n    border-radius: 8px;\n    color: #161616;\n    cursor: pointer;\n    &:hover {\n      opacity: 0.8;\n    }\n    @media screen and (max-width: 768px) {\n      width: 287px;\n  }\n"]))),q=v.ZP.div(p||(p=(0,b.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 14px;\n"]))),z=v.ZP.svg(c||(c=(0,b.Z)(["\n  position: absolute;\n  right: 18px;\n  top: 19px;\n  cursor: pointer;\n  color: #fff;\n  width: 16.5px;\n  height: 16px;\n  right: 15px;\n  opacity: 0.4;\n"]))),E=v.ZP.div(h||(h=(0,b.Z)(["\n  font-size: 15px;\n  color: white;\n"]))),S=r(9740),_=r(5780),N=r(184),I=function(){var n=(0,x.I0)(),e=(0,m.useState)(!1),r=(0,u.Z)(e,2),a=r[0],i=r[1],t=(0,g.TA)({initialValues:{name:"",email:"",password:""},validationSchema:w,onSubmit:function(e){n((0,S.z2)({name:e.name,email:e.email,password:e.password})),t.resetForm()}});return(0,N.jsx)(y,{children:(0,N.jsx)(j,{children:(0,N.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,N.jsxs)(k,{children:[(0,N.jsx)(B,{to:"/auth/register",underline:"none",children:" Registration "}),(0,N.jsx)(P,{to:"/auth/login",underline:"none",children:" Log In "})]}),(0,N.jsxs)(C,{children:[(0,N.jsx)("input",{type:"text",id:"name",name:"name",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.name,placeholder:"Enter your name"}),t.touched.name&&t.errors.name?(0,N.jsx)(E,{children:t.errors.name}):null,(0,N.jsx)("input",{type:"email",id:"email",name:"email",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.email,placeholder:"Enter your email"}),t.touched.email&&t.errors.email?(0,N.jsx)(E,{children:t.errors.email}):null,(0,N.jsxs)(q,{children:[(0,N.jsx)("input",{type:a?"text":"password",id:"password",name:"password",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.password,placeholder:"Create a password"}),(0,N.jsxs)(z,{width:"18px",onClick:function(){i((function(n){return!n}))},children:[" ",(0,N.jsx)("use",{href:"".concat(_.Z,"#icon-eye")})," "]})," "]}),t.touched.password&&t.errors.password?(0,N.jsx)(E,{children:t.errors.password}):null]}),(0,N.jsx)(F,{type:"submit",children:"Register Now"})]})})})}}}]);
//# sourceMappingURL=554.0c0de3f9.chunk.js.map