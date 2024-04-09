"use strict";(self.webpackChunkmy_ibax=self.webpackChunkmy_ibax||[]).push([[634],{548:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var r=s(4848),i=s(8453);const t={},d="Outil de surveillance synchronis\xe9e {#synchronized-monitoring-tool}",o={id:"reference/desync_monitor",title:"Outil de surveillance synchronis\xe9e",description:"synchronized-monitoring-tool}",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/reference/desync_monitor.md",sourceDirName:"reference",slug:"/reference/desync_monitor",permalink:"/docs/fr/reference/desync_monitor",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/ibax-docs/fr",tags:[],version:"current",frontMatter:{},sidebar:"referenceSidebar",previous:{title:"Fichier de configuration du serveur",permalink:"/docs/fr/reference/backend-config"},next:{title:"Interface de programmation d'application JSON-RPC",permalink:"/docs/fr/reference/json-rpc"}},l={},c=[{value:"Emplacement",id:"location",level:2},{value:"Drapeaux de la ligne de commande",id:"command-prompt-flags",level:2},{value:"Configuration",id:"configuration",level:2},{value:"nodes_list",id:"nodes-list",level:3},{value:"[daemon]",id:"daemon",level:3},{value:"[alert_message]",id:"alert-message",level:3},{value:"[smtp]",id:"smtp",level:3}];function a(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"synchronized-monitoring-tool",children:"Outil de surveillance synchronis\xe9e"}),"\n",(0,r.jsx)(n.p,{children:"Desync_monitor est un outil sp\xe9cial qui peut \xeatre utilis\xe9 pour v\xe9rifier si la\nbase de donn\xe9es sur le n\u0153ud sp\xe9cifi\xe9 a \xe9t\xe9 synchronis\xe9e."}),"\n",(0,r.jsx)(n.p,{children:"L'outil peut \xeatre utilis\xe9 comme un d\xe9mon ou peut \xeatre lanc\xe9 pour effectuer une\nv\xe9rification ponctuelle."}),"\n",(0,r.jsx)(n.p,{children:"Le principe de fonctionnement de l'outil est bas\xe9 sur ce qui suit :"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Chaque bloc contient le hachage de toutes les modifications de toutes les\ntransactions, demandez au n\u0153ud sp\xe9cifi\xe9 de fournir son dernier ID de bloc ;"}),"\n",(0,r.jsx)(n.li,{children:"Ensuite, demandez un bloc avec cet ID \xe0 tous les n\u0153uds et comparez les\nhachages ci-dessus ;"}),"\n",(0,r.jsx)(n.li,{children:"Si les hachages sont diff\xe9rents, un message d'erreur de synchronisation sera\nenvoy\xe9 \xe0 l'adresse e-mail sp\xe9cifi\xe9e dans la commande."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"location",children:"Emplacement"}),"\n",(0,r.jsxs)(n.p,{children:["L'outil est situ\xe9 dans le r\xe9pertoire ",(0,r.jsx)(n.code,{children:"tools/desync_monitor/"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"command-prompt-flags",children:"Drapeaux de la ligne de commande"}),"\n",(0,r.jsx)(n.p,{children:"Les drapeaux suivants peuvent \xeatre utilis\xe9s depuis l'invite de commande :"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"confPath"})," -- Chemin du fichier de configuration. Le nom de fichier par\nd\xe9faut est ",(0,r.jsx)(n.code,{children:"config.toml"}),";"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"nodesList"})," -- Liste des n\u0153uds du bloc demand\xe9, s\xe9par\xe9s par des virgules.\nLa valeur par d\xe9faut est ",(0,r.jsx)(n.code,{children:"127.0.0.1:7079"}),";"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"daemonMode"})," -- D\xe9marr\xe9 en tant que d\xe9mon et doit \xeatre utilis\xe9 lorsque\nl'authentification est requise toutes les N secondes. Ce drapeau est par\nd\xe9faut d\xe9fini sur ",(0,r.jsx)(n.code,{children:"false"}),";"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"queryingPeriod"})," -- Si l'outil est d\xe9marr\xe9 en tant que d\xe9mon, ce param\xe8tre\nd\xe9finit l'intervalle de temps (en secondes) entre les v\xe9rifications, ",(0,r.jsx)(n.code,{children:"1"}),"\nseconde par d\xe9faut."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"alertMessageTo"})," -- L'adresse e-mail \xe0 laquelle les erreurs de\nsynchronisation seront envoy\xe9es."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"alertMessageSubj"})," -- Sujet du message dans le message d'avertissement,\nle probl\xe8me de ",(0,r.jsx)(n.code,{children:"synchronisation du n\u0153ud"})," par d\xe9faut;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"alertMessageFrom"})," -- Adresse \xe0 partir de laquelle le message a \xe9t\xe9\nenvoy\xe9."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"smtpHost"})," -- H\xf4te du serveur SMTP utilis\xe9 pour envoyer des e-mails,\n",(0,r.jsx)(n.code,{children:'""'})," par d\xe9faut;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"smtpPort"})," -- Port du serveur SMTP utilis\xe9 pour envoyer des messages\n\xe9lectroniques, ",(0,r.jsx)(n.code,{children:"25"})," par d\xe9faut;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"smtpUsername"})," -- Nom d'utilisateur du serveur SMTP, ",(0,r.jsx)(n.code,{children:'""'})," par d\xe9faut;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"smtpPassword"})," -- Mot de passe du serveur SMTP, ",(0,r.jsx)(n.code,{children:'""'})," par d\xe9faut."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"L'outil utilise un fichier de configuration au format toml."}),"\n",(0,r.jsx)(n.p,{children:"Par d\xe9faut, il recherchera le fichier config.toml dans le dossier o\xf9 d\xe9marrer le\nfichier binaire."}),"\n",(0,r.jsxs)(n.p,{children:["Le chemin du fichier peut \xeatre modifi\xe9 avec ",(0,r.jsx)(n.strong,{children:"configPath"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'nodes_list = ["http://127.0.0.1:7079", "http://127.0.0.1:7002"]\n\n[daemon]\ndaemon = false\nquerying_period = 1\n\n[alert_message]\nto = ""\nsubject = "problem with xxx nodes"\nfrom = ""\n\n[smtp]\nhost = ""\nport = 25\nusername = ""\npassword = ""\n'})}),"\n",(0,r.jsx)(n.h3,{id:"nodes-list",children:"nodes_list"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"nodes_list - Liste des n\u0153uds (h\xf4tes) demandant des informations."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"daemon",children:"[daemon]"}),"\n",(0,r.jsx)(n.p,{children:"Configuration du mode d\xe9mon."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"daemon_mode"})," -- Un outil fonctionne comme un d\xe9mon et effectue des\nv\xe9rifications de synchronisation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"querying_period"})," -- Intervalle de temps entre les v\xe9rifications de\nsynchronisation."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"alert-message",children:"[alert_message]"}),"\n",(0,r.jsx)(n.p,{children:"Param\xe8tres du message d'avertissement."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"to"})," -- Destinataire des messages d'avertissement d'erreur de\nsynchronisation ;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"subject"})," -- sujet du message;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"from"})," -- e-mail de l'exp\xe9diteur."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"smtp",children:"[smtp]"}),"\n",(0,r.jsx)(n.p,{children:"Param\xe8tres du serveur de protocole de transfert de courrier simple (SMTP),\nutilis\xe9s pour envoyer des messages d'erreur de synchronisation."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"host"})," -- Serveur SMTP h\xe9berg\xe9;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"port"})," -- Port du serveur SMTP;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"username"})," -- Nom d'utilisateur du serveur SMTP;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"password"})," -- Mot de passe du serveur SMTP;"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>o});var r=s(6540);const i={},t=r.createContext(i);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);