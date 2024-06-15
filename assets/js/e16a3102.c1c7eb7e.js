"use strict";(self.webpackChunkmin_server_docs=self.webpackChunkmin_server_docs||[]).push([[952],{4801:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=t(4848),r=t(8453);const i={sidebar_position:2,description:"Try a quickstart for MinHTTP!"},o="Quickstart!",a={id:"minhttp/quickstart",title:"Quickstart!",description:"Try a quickstart for MinHTTP!",source:"@site/docs/minhttp/quickstart.md",sourceDirName:"minhttp",slug:"/minhttp/quickstart",permalink:"/min-server-docs/minhttp/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/louishhy/min-server-docs/tree/main/docs/minhttp/quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Try a quickstart for MinHTTP!"},sidebar:"minHTTPSidebar",previous:{title:"MinHTTP",permalink:"/min-server-docs/minhttp/"}},c={},l=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"quickstart",children:"Quickstart!"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://flask.palletsprojects.com",children:"Flask"})," is one of the most famous Python-based Web frameworks."]}),"\n",(0,s.jsxs)(n.p,{children:["Here is the code provided in the Flask documentation ",(0,s.jsx)(n.a,{href:"https://flask.palletsprojects.com/en/3.0.x/quickstart/",children:"quickstart"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"from flask import Flask\n\napp = Flask(__name__)\n\n@app.route('/')\ndef hello_world():\n    return 'Hello, World!'\n"})}),"\n",(0,s.jsx)(n.p,{children:"Let's also see how we can do the same thing in MinHTTP."}),"\n",(0,s.jsx)(n.p,{children:"To do this though, you need a few more steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cd"})," into the MinHTTP directory."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"cd minhttp\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Create a new file called ",(0,s.jsx)(n.code,{children:"app.py"})," and add the following code:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'from minhttpserver import MinHTTPServer\nfrom response import text_response\n\napp = MinHTTPServer(host="localhost", port=8080)\n\n@app.get("/")\ndef hello_world(request):\n    return text_response("Hello, World!")\n\nif __name__ == "__main__":\n    app.run()\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Run the server:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"python app.py\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Voila! You have a simple web server running on ",(0,s.jsx)(n.code,{children:"http://localhost:8080"})," that returns ",(0,s.jsx)(n.code,{children:"Hello, World!"})," when you visit ",(0,s.jsx)(n.code,{children:"localhost:8080/"}),". You can check it with your browser, or with HTTP tools like HTTPie!"]}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"tip",children:(0,s.jsx)(n.p,{children:"In this small demo the SSL/TLS is not enabled. So, be sure you are using HTTP instead of HTTPS when you are testing. We will talk about enabling SSL/TLS in later sections."})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);