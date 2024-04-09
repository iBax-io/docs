"use strict";(self.webpackChunkmy_ibax=self.webpackChunkmy_ibax||[]).push([[509],{4351:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var i=r(4848),t=r(8453);const o={},s="Fichier de configuration du serveur {#server-configuration-file}",c={id:"reference/backend-config",title:"Fichier de configuration du serveur",description:"server-configuration-file}",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/reference/backend-config.md",sourceDirName:"reference",slug:"/reference/backend-config",permalink:"/docs/fr/reference/backend-config",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/ibax-docs/fr",tags:[],version:"current",frontMatter:{},sidebar:"referenceSidebar",previous:{title:"API RESTful v2",permalink:"/docs/fr/reference/api2"},next:{title:"Outil de surveillance synchronis\xe9e",permalink:"/docs/fr/reference/desync_monitor"}},d={},a=[{value:"Introduction au fichier de configuration du serveur",id:"introduction-to-the-server-configuration-file",level:2},{value:"Emplacement",id:"location",level:2},{value:"Sections",id:"sections",level:2},{value:"Un fichier de configuration exemple",id:"an-example-configuration-file",level:2}];function l(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"server-configuration-file",children:"Fichier de configuration du serveur"}),"\n",(0,i.jsx)(n.p,{children:"Dans cette section, nous allons introduire les param\xe8tres dans le fichier de\nconfiguration du serveur."}),"\n",(0,i.jsx)(n.h2,{id:"introduction-to-the-server-configuration-file",children:"Introduction au fichier de configuration du serveur"}),"\n",(0,i.jsx)(n.p,{children:"Le fichier de configuration du serveur d\xe9finit la configuration du n\u0153ud d'IBAX."}),"\n",(0,i.jsx)(n.h2,{id:"location",children:"Emplacement"}),"\n",(0,i.jsxs)(n.p,{children:["Ce fichier se trouve dans le r\xe9pertoire de travail du serveur et porte le nom\n",(0,i.jsx)(n.code,{children:"config.toml"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"sections",children:"Sections"}),"\n",(0,i.jsx)(n.p,{children:"Le fichier de configuration comprend les sections suivantes :"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Section g\xe9n\xe9rale"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Il d\xe9finit le r\xe9pertoire de travail DataDir, le r\xe9pertoire du premier bloc\nFirstBlockPath et d'autres param\xe8tres."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"[TCPServer]"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Il d\xe9finit les param\xe8tres du service TCP."}),"\n",(0,i.jsx)(n.p,{children:"TCPServer est utilis\xe9 pour l'interaction r\xe9seau entre les n\u0153uds."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"[HTTP]"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Il d\xe9finit les param\xe8tres du service HTTP."}),"\n",(0,i.jsx)(n.p,{children:"HTTPServer fournit des API RESTful."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"[DB]"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Il d\xe9finit les param\xe8tres de la base de donn\xe9es du n\u0153ud PostgreSQL."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"[StatsD]"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Il d\xe9finit les param\xe8tres du collecteur d'indicateurs d'op\xe9ration du n\u0153ud\nStatsD."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"[Centrifugo]"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Il d\xe9finit les param\xe8tres du service de notification Centrifugo."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"[Log]"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Il d\xe9finit les param\xe8tres du service de journalisation Log."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"[TokenMovement]"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Il d\xe9finit les param\xe8tres du service de circulation des jetons TokenMovement."}),"\n",(0,i.jsx)(n.h2,{id:"an-example-configuration-file",children:"Un fichier de configuration exemple"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'PidFilePath = "/ibax-data/go-ibax.pid";\nLockFilePath = "/ibax-data/go-ibax.lock";\nDataDir = "/ibax-data";\nKeysDir = "/ibax-data";\nTempDir = "/var/folders/_l/9md_m4ms1651mf5pbng1y1xh0000gn/T/ibax-temp";\nFirstBlockPath = "/ibax-data/1block";\nTLS = false;\nTLSCert = "";\nTLSKey = "";\nOBSMode = "none";\nHTTPServerMaxBodySize = 1048576;\nMaxPageGenerationTime = 3000;\nNodesAddr = [][TCPServer];\nHost = "127.0.0.1";\nPort = (7078)[HTTP];\nHost = "127.0.0.1";\nPort = (7079)[DB];\nName = "ibax";\nHost = "127.0.0.1";\nPort = 5432;\nUser = "postgres";\nPassword = "123456";\nLockTimeout = (5000)[StatsD];\nHost = "127.0.0.1";\nPort = 8125;\nName = "ibax"[Centrifugo];\nSecret = "127.0.0.1";\nURL = "127.0.0.1"[Log];\nLogTo = "stdout";\nLogLevel = "ERROR";\nLogFormat = "text"[Log.Syslog];\nFacility = "kern";\nTag = "go-ibax"[TokenMovement];\nHost = "";\nPort = 0;\nUsername = "";\nPassword = "";\nTo = "";\nFrom = "";\nSubject = "";\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>c});var i=r(6540);const t={},o=i.createContext(t);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);