"use strict";(self.webpackChunkmin_server_docs=self.webpackChunkmin_server_docs||[]).push([[281],{2268:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(4848),s=t(8453);const i={sidebar_position:2},o="Enabling SSL/TLS",a={id:"minhttp/try_the_framework/ssltls",title:"Enabling SSL/TLS",description:"Enabling SSL/TLS as your security layer for HTTPS.",source:"@site/docs/minhttp/try_the_framework/ssltls.md",sourceDirName:"minhttp/try_the_framework",slug:"/minhttp/try_the_framework/ssltls",permalink:"/min-server-docs/minhttp/try_the_framework/ssltls",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/minhttp/try_the_framework/ssltls.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"minHTTPSidebar",previous:{title:"Setting up MinHTTP",permalink:"/min-server-docs/minhttp/try_the_framework/setup"}},l={},c=[];function d(e){const n={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"enabling-ssltls",children:"Enabling SSL/TLS"}),"\n",(0,r.jsx)(n.p,{children:"Enabling SSL/TLS as your security layer for HTTPS."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Install OpenSSL"}),"\n",(0,r.jsx)(n.li,{children:"Change your working directory to the project root."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd minhttp\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Generate a private key."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl genpkey -algorithm RSA -out key.pem -aes256\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Generate a self-signed certificate."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl req -new -x509 -key key.pem -out cert.pem -days 365\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["Configure your server to use SSL/TLS by setting the ",(0,r.jsx)(n.code,{children:"ssl_enabled"})," parameter to ",(0,r.jsx)(n.code,{children:"True"})," in the ",(0,r.jsx)(n.code,{children:"MinHTTPServer"})," constructor."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"app = minhttpserver.MinHTTPServer(host, port, ssl_enabled=True)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(6540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);