"use strict";(self.webpackChunkreact_kabzda_1=self.webpackChunkreact_kabzda_1||[]).push([[616],{9616:function(s,e,t){t.r(e),t.d(e,{default:function(){return U}});var i=t(8683),r=t(5671),n=t(3144),o=t(136),a=t(5716),l=t(2791),u=t(364),c=t(6070),d=t(2982),h={postBlock:"MyPosts_postBlock__dvM-z",posts:"MyPosts_posts__GSiZ2"},f="Post_item__Yu4oG",p=t(184),j=function(s){return(0,p.jsxs)("div",{className:f,children:[(0,p.jsx)("img",{src:"https://i.pinimg.com/600x315/1e/d3/0d/1ed30d98f49be532ae58c62f33677b16.jpg",alt:"1"}),s.message,(0,p.jsxs)("div",{children:[(0,p.jsx)("span",{children:"like"}),s.likeCount]})]})},x=t(6139),v=t(704),m=t(5304),b=t(6528),g=l.memo((function(s){var e=s.profilePage,t=(0,d.Z)(e.postData).reverse().map((function(s){return(0,p.jsx)(j,{message:s.message,likeCount:s.likeCount},s.id)}));return(0,p.jsxs)("div",{className:h.postBlock,children:[(0,p.jsx)("h3",{children:" My posts "})," ",(0,p.jsx)("div",{className:h.MyPosts,children:(0,p.jsx)(P,{onSubmit:function(e){s.addPost(e.newPostText)}})})," ",(0,p.jsxs)("div",{className:h.posts,children:[" ",t," "]})," "]})})),k=(0,m.D)(10),P=(0,v.Z)({form:"ProfileAddNewPostForm"})((function(s){return(0,p.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,p.jsx)("div",{children:(0,p.jsx)(x.Z,{component:b.gx,name:"newPostText",validate:[m.C,k]})}),(0,p.jsx)("div",{children:(0,p.jsx)("button",{children:" Add post "})})]})})),S=g,y=(0,u.$j)((function(s){return{profilePage:s.profilePage}}),(function(s){return{addPost:function(e){s((0,c.Wl)(e))}}}))(S),_=t(885),Z=t(5987),I=t(8109),C="ProfileInfo_descriptionBlock__XBXuJ",M="ProfileInfo_contact__sQB8W",N=function(s){var e=(0,l.useState)(!1),t=(0,_.Z)(e,2),i=t[0],r=t[1],n=(0,l.useState)(s.status),o=(0,_.Z)(n,2),a=o[0],u=o[1];(0,l.useEffect)((function(){u(s.status)}),[s.status]);return(0,p.jsxs)("div",{children:[!i&&(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Status"}),":",(0,p.jsx)("span",{onDoubleClick:function(){r(!0)},children:s.status||"status"})]}),i&&(0,p.jsx)("div",{children:(0,p.jsx)("input",{autoFocus:!0,onBlur:function(){r(!1),s.updateStatus(a)},onChange:function(s){u(s.currentTarget.value)},value:a})})]})},w=t(4353),A=t(7851),F=(0,v.Z)({form:"edit-profile"})((function(s){var e=s.handleSubmit,t=s.profile,i=s.error;return(0,p.jsxs)("form",{onSubmit:e,children:[(0,p.jsx)("div",{children:(0,p.jsx)("button",{children:"save"})}),i&&(0,p.jsxs)("div",{className:A.Z.formSummaryError,children:[i," "]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Full name"}),": ",(0,b.Gr)("Full name","fullName",[],b.II)]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Looking for a job"}),":"," ",(0,b.Gr)("","lookingForAJob",[],b.II,{type:"checkbox"})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"My professional skills"}),":",(0,b.Gr)("My professional skills","lookingForAJobDescription",[],b.gx)]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"About me"}),": ",(0,b.Gr)("About me","aboutMe",[],b.gx)]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Contacts"}),":"," ",Object.keys(t.contacts).map((function(s){return(0,p.jsx)("div",{className:M,children:(0,p.jsxs)("b",{children:[s,": ",(0,b.Gr)(s,"contacts."+s,[],b.II)]})},s)}))]})]})})),O=["saveProfile","profile"],B=function(s){var e=s.profile,t=s.isOwner,i=s.goToEditMode;return(0,p.jsxs)("div",{children:[t&&(0,p.jsx)("div",{children:(0,p.jsx)("button",{onClick:i,children:"edit"})}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Full name"}),": ",e.fullName]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Looking for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"My professional skills"}),": ",e.lookingForAJobDescription]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Contacts"}),":"," ",Object.keys(e.contacts).map((function(s){return(0,p.jsx)(D,{contactTitel:s,contactValue:e.contacts[s]},s)}))]})]})},D=function(s){var e=s.contactTitel,t=s.contactValue;return(0,p.jsxs)("div",{className:M,children:[(0,p.jsx)("b",{children:e}),": ",t]})},G=function(s){var e=s.saveProfile,t=s.profile,i=(0,Z.Z)(s,O),r=(0,l.useState)(!1),n=(0,_.Z)(r,2),o=n[0],a=n[1];if(!t)return(0,p.jsx)(I.Z,{});return(0,p.jsx)("div",{children:(0,p.jsxs)("div",{className:C,children:[(0,p.jsx)("img",{src:t.photos.large||w}),i.isOwner&&(0,p.jsx)("input",{type:"file",onChange:function(s){s.target.files.length&&i.savePhoto(s.target.files[0])}}),(0,p.jsx)(N,{status:i.status,updateStatus:i.updateStatus}),o?(0,p.jsx)(F,{initialValues:t,profile:t,onSubmit:function(s){e(s).then((function(){a(!1)}))}}):(0,p.jsx)(B,{goToEditMode:function(){a(!0)},profile:t,isOwner:i.isOwner})]})})},J=function(s){return(0,p.jsxs)("div",{children:[(0,p.jsx)(G,{savePhoto:s.savePhoto,isOwner:s.isOwner,profile:s.profile,status:s.status,saveProfile:s.saveProfile,updateStatus:s.updateStatus}),(0,p.jsx)(y,{})]})},T=t(9271),z=t(7781),E=function(s){(0,o.Z)(t,s);var e=(0,a.Z)(t);function t(){return(0,r.Z)(this,t),e.apply(this,arguments)}return(0,n.Z)(t,[{key:"refreshProfile",value:function(){var s=this.props.match.params.userId;s||(s=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(s),this.props.getStatus(s)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(s,e,t){this.props.match.params.userId!=s.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,p.jsx)(J,(0,i.Z)((0,i.Z)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),t}(l.Component),U=(0,z.qC)((0,u.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,authorizedUserId:s.auth.userId,isAuth:s.auth.isAuth}}),{getUserProfile:c.et,getStatus:c.lR,updateStatus:c.Nf,savePhoto:c.Ju,saveProfile:c.Ii}),T.EN)(E)}}]);
//# sourceMappingURL=616.47f68682.chunk.js.map