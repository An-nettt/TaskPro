"use strict";(self.webpackChunktask_pro=self.webpackChunktask_pro||[]).push([[308],{1308:function(n,e,i){i.r(e),i.d(e,{default:function(){return D}});var r,t,o,a,s,l,d,p,c,h,x=i(9439),u=i(9434),g=i(2791),f=i(5705),m=i(6727),w=m.Ry().shape({email:m.Z_().email("Invalid email").required("Email is required"),password:m.Z_().min(6,"Password must be at least 6 characters").required("Password is required")}),b=i(168),Z=i(1087),v=i(9256),y=v.ZP.div(r||(r=(0,b.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n    width: 100%;\n    background:linear-gradient( 180deg, #ffffff 0%,  #ffffff 25%, #bedbb0 92.19%);\n    background-repeat: no-repeat;\n    background-size: cover;\n"]))),j=v.ZP.div(t||(t=(0,b.Z)(["\n  text-align: center;\n  background: #151515;\n  border-radius: 8px;\n  padding: 40px;\n"]))),k=v.ZP.div(o||(o=(0,b.Z)(["\n  display: flex;\n"]))),P=(0,v.ZP)(Z.rU)(a||(a=(0,b.Z)(["\n  left: 160px;\n  top: 40px;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.02em;\n  color: #FFF;\n  text-decoration: none;\n"]))),B=(0,v.ZP)(Z.rU)(s||(s=(0,b.Z)(["\n  margin-right: 14px;\n  display: inline-block;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.02em;\n  color: rgba(255, 255, 255, 0.30);\n  text-decoration: none;\n"]))),F=v.ZP.div(l||(l=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 40px;\n  gap: 14px;\n\n  input {\n    width: 326px;\n    height: 49px;\n    left: 40px;\n    top: 107px;\n    color: #FFF;\n    background: #1F1F1F;\n    opacity: 0.4;\n    border: 1px solid #BEDBB0;\n    padding-left: 18px;\n    box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);\n    border-radius: 8px;\n  }\n"]))),C=v.ZP.button(d||(d=(0,b.Z)(["\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 21px;\n    text-align: center;\n    letter-spacing: -0.02em;\n    width: 100%;\n    height: 49px;\n    margin-top: 24px;\n    background: #BEDBB0;\n    border-radius: 8px;\n    color: #161616;\n    cursor: pointer;\n    &:hover {\n      opacity: 0.8;\n    }\n\n    @media screen and (max-width: 768px) {\n      width: 287px;\n  }\n"]))),z=v.ZP.div(p||(p=(0,b.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 14px;\n"]))),I=v.ZP.svg(c||(c=(0,b.Z)(["\n  position: absolute;\n  right: 18px;\n  top: 19px;\n  cursor: pointer;\n  color: #fff;\n  width: 16.5px;\n  height: 16px;\n  right: 15px;\n  opacity: 0.4;\n"]))),S=v.ZP.div(h||(h=(0,b.Z)(["\n  font-size: 15px;\n  color: white;\n"]))),q=i(9740),E=i(5780),_=i(184),D=function(){var n=(0,u.I0)(),e=(0,g.useState)(!1),i=(0,x.Z)(e,2),r=i[0],t=i[1],o=(0,f.TA)({initialValues:{email:"",password:""},validationSchema:w,onSubmit:function(e){n((0,q.Ib)({email:e.email,password:e.password})),o.resetForm()}});return(0,_.jsx)(y,{children:(0,_.jsx)(j,{children:(0,_.jsxs)("form",{onSubmit:o.handleSubmit,children:[(0,_.jsxs)(k,{children:[(0,_.jsx)(B,{to:"/auth/register",underline:"none",children:" Registration "}),(0,_.jsx)(P,{to:"/auth/login",underline:"none",children:" Log In "})]}),(0,_.jsxs)(F,{children:[(0,_.jsx)("input",{type:"email",id:"email",name:"email",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.email,placeholder:"Enter your email"}),o.touched.email&&o.errors.email?(0,_.jsx)(S,{children:o.errors.email}):null,(0,_.jsxs)(z,{children:[(0,_.jsx)("input",{type:r?"text":"password",id:"password",name:"password",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.password,placeholder:"Create a password"}),(0,_.jsxs)(I,{width:"18px",onClick:function(){t((function(n){return!n}))},children:[" ",(0,_.jsx)("use",{href:"".concat(E.Z,"#icon-eye")})," "]})," "]}),o.touched.password&&o.errors.password?(0,_.jsx)(S,{children:o.errors.password}):null]}),(0,_.jsx)(C,{type:"submit",children:"Log In Now"})]})})})}}}]);
//# sourceMappingURL=308.6116978d.chunk.js.map