import{d as b,U as S,q as C,m as V,cc as k,cd as $,M as F,a3 as T,_ as I,b as m,e as c,h as U,i,k as u,g as K,f as d,j as t,A as n,V as r,z as _,B as p,C as g,n as N,R as j,p as z,l as M}from"./index-bUaC_4Uu.js";import{S as J}from"./Base-DvBLfCVe.js";import{c as O}from"./VChip-Dh-kTiWs.js";import{a as E,V as h,b as D,c as R}from"./VCard-CW3hdVCD.js";import{V as v}from"./VDialog-CUlQ0LC3.js";import{c as y,b as q}from"./VTextField-CXO-vs30.js";import{V as f}from"./VForm-DNte2SFv.js";import{V as H}from"./VFileInput-pxQCEayR.js";import{V as Z}from"./ssrBoot-Bj_AfeK6.js";import"./Navigation-3e2Rvcos.js";import"./VAvatar-DsPtSKoG.js";const G=b({name:"Settings-Account",components:{SettingsBase:J},data(){return{is_form_dense:S.isSmartphoneHorizontal(),is_loading:!0,settings_username:null,settings_username_validation:s=>s===""||s===null?"ユーザー名を入力してください。":/^.{2,}$/.test(s)===!1?"ユーザー名は2文字以上で入力してください。":!0,settings_password:null,settings_password_showing:!1,settings_password_validation:s=>s===""||s===null?"パスワードを入力してください。":/^[a-zA-Z0-9!-/:-@¥[-`{-~]{4,}$/.test(s)===!1?"パスワードは4文字以上の半角英数記号を入力してください。":!0,settings_icon_file:[],account_delete_confirm_dialog:!1,sync_settings:C().settings.sync_settings,sync_settings_dialog:!1}},computed:{...V(C,T)},watch:{async sync_settings(){if(this.sync_settings===!0&&this.sync_settings_dialog===!1){const s=k(this.settingsStore.settings),e=JSON.stringify(s),B=await $.fetchClientSettings();if(B===null){F.error("サーバーから設定データを取得できませんでした。");return}const A=JSON.stringify(B);e!==A?(this.sync_settings_dialog=!0,this.sync_settings=!1):this.settingsStore.settings.sync_settings=!0}else this.sync_settings===!1&&this.sync_settings_dialog===!1&&(this.settingsStore.settings.sync_settings=!1)}},async created(){await this.userStore.fetchUser(),this.is_loading=!1},methods:{async overrideServerSettingsFromClient(){await this.settingsStore.syncClientSettingsToServer(!0),this.settingsStore.settings.sync_settings=!0,this.sync_settings=!0,this.sync_settings_dialog=!1},async overrideClientSettingsFromServer(){await this.settingsStore.syncClientSettingsFromServer(!0),this.settingsStore.settings.sync_settings=!0,this.sync_settings=!0,this.sync_settings_dialog=!1},async updateAccountInfo(s){if(s==="username"){if((await this.$refs.settings_username.validate()).valid===!1)return}else if((await this.$refs.settings_password.validate()).valid===!1)return;if(s==="username"){if(this.settings_username===null)return;await this.userStore.updateUser({username:this.settings_username})}else{if(this.settings_password===null)return;await this.userStore.updateUser({password:this.settings_password})}},async updateAccountIcon(){if(this.settings_icon_file.length===0){F.error("アップロードする画像を選択してください！");return}await this.userStore.updateUserIcon(this.settings_icon_file[0])},async deleteAccount(){this.account_delete_confirm_dialog=!1,await this.userStore.deleteUser()}}}),L="/assets/images/account-icon-default.png",a=s=>(z("data-v-fc2e44f8"),s=s(),M(),s),P={class:"settings__heading"},Q=a(()=>u("span",{class:"ml-2"},"アカウント",-1)),W={key:0,class:"account"},X=a(()=>u("div",{class:"account-wrapper"},[u("img",{class:"account__icon",src:L}),u("div",{class:"account__info"},[u("div",{class:"account__info-name"},[u("span",{class:"account__info-name-text"},"ログインしていません")]),u("span",{class:"account__info-id"},"Not logged in")])],-1)),Y={key:1,class:"account"},x={class:"account-wrapper"},uu=["src"],su={class:"account__info"},tu={class:"account__info-name"},eu={class:"account__info-name-text"},nu={key:0,class:"account__info-admin"},iu={class:"account__info-id"},ou={key:2,class:"account-register"},au=a(()=>u("div",{class:"account-register__heading"},[n(" KonomiTV アカウントにログインすると、"),u("br"),n("より便利な機能が使えます！ ")],-1)),lu={class:"account-register__feature"},ru={class:"account-feature"},cu=a(()=>u("div",{class:"account-feature__info"},[u("span",{class:"account-feature__info-heading"},"ニコニコ実況にコメントする"),u("span",{class:"account-feature__info-text"},"テレビを見ながらニコニコ実況にコメントできます。別途、ニコニコアカウントとの連携が必要です。")],-1)),du={class:"account-feature"},_u=a(()=>u("div",{class:"account-feature__info"},[u("span",{class:"account-feature__info-heading"},"Twitter 連携機能"),u("span",{class:"account-feature__info-text"},"テレビを見ながら Twitter にツイートしたり、検索したツイートをリアルタイムで表示できます。別途、Twitter アカウントとの連携が必要です。")],-1)),Bu={class:"account-feature"},gu=a(()=>u("div",{class:"account-feature__info"},[u("span",{class:"account-feature__info-heading"},"設定をデバイス間で同期"),u("span",{class:"account-feature__info-text"},"ピン留めしたチャンネルなど、ブラウザに保存されている各種設定をブラウザやデバイスをまたいで同期できます。")],-1)),fu={class:"account-feature"},Au=a(()=>u("div",{class:"account-feature__info"},[u("span",{class:"account-feature__info-heading"},"サーバー設定をブラウザから変更"),u("span",{class:"account-feature__info-text"},"管理者権限があれば、サーバー設定をブラウザから変更できます。一番最初に作成されたアカウントには、自動で管理者権限が付与されます。")],-1)),Cu=a(()=>u("div",{class:"account-register__description"},[n(" KonomiTV アカウントの作成に必要なものは"),u("br",{class:"smartphone-vertical-only"}),n("ユーザー名とパスワードだけです。"),u("br"),n(" アカウントはローカルに導入した"),u("br",{class:"smartphone-vertical-only"}),n(" KonomiTV サーバーにのみ保存されます。"),u("br"),n(" 外部のサービスには保存されませんので、ご安心ください。"),u("br")],-1)),Fu={key:3},mu={class:"settings__item settings__item--switch"},pu=a(()=>u("label",{class:"settings__item-heading",for:"sync_settings"},"設定をデバイス間で同期する",-1)),Eu=a(()=>u("label",{class:"settings__item-label",for:"sync_settings"},[n(" KonomiTV では、設定を同じアカウントでログインしているデバイス間で同期できます！"),u("br"),n(" 同期をオンにすると、同期をオンにしているすべてのデバイスで共通の設定が使えます。ピン留めチャンネルやハッシュタグリストなども同期されます。"),u("br"),n(" なお、デバイス固有の設定（画質設定など）は、同期後も各デバイスで個別に反映されます。"),u("br")],-1)),hu=a(()=>u("br",null,null,-1)),Du=a(()=>u("br",null,null,-1)),vu={class:"d-flex flex-column px-4 pb-6 settings__conflict-dialog"},yu=a(()=>u("br",{class:"smartphone-vertical-only"},null,-1)),wu=a(()=>u("br",{class:"smartphone-vertical-only"},null,-1)),bu=a(()=>u("div",{class:"settings__item-heading"},"ユーザー名",-1)),Su=a(()=>u("div",{class:"settings__item-label"},[n(" KonomiTV アカウントのユーザー名を設定します。アルファベットだけでなく日本語や記号も使えます。"),u("br"),n(" 同じ KonomiTV サーバー上の他のアカウントと同じユーザー名には変更できません。"),u("br")],-1)),Vu=a(()=>u("div",{class:"settings__item-heading"},"アイコン画像",-1)),ku=a(()=>u("div",{class:"settings__item-label"},[n(" KonomiTV アカウントのアイコン画像を設定します。"),u("br"),n(" アップロードされた画像は自動で 400×400 の正方形にリサイズされます。"),u("br")],-1)),$u=a(()=>u("div",{class:"settings__item-heading"},"新しいパスワード",-1)),Tu=a(()=>u("div",{class:"settings__item-label"},[n(" KonomiTV アカウントの新しいパスワードを設定します。"),u("br")],-1)),Iu=a(()=>u("div",{class:"settings__item mt-6"},[u("div",{class:"settings__item-heading text-error-lighten-1"},"アカウントを削除"),u("div",{class:"settings__item-label"},[n(" 現在ログインしている KonomiTV アカウントを削除します。"),u("br"),u("strong",{class:"text-error-lighten-1"},"アカウントに紐づくすべてのデータが削除されます。元に戻すことはできません。"),u("br")])],-1)),Uu=a(()=>u("br",null,null,-1));function Ku(s,e,B,A,Nu,ju){const l=m("Icon"),w=m("SettingsBase");return c(),U(w,null,{default:i(()=>[u("h2",P,[K((c(),d("a",{class:"settings__back-button",onClick:e[0]||(e[0]=o=>s.$router.back())},[t(l,{icon:"fluent:arrow-left-12-filled",width:"25px"})])),[[j]]),t(l,{icon:"fluent:person-20-filled",width:"25px"}),Q]),u("div",{class:N(["settings__content",{"settings__content--loading":s.is_loading}])},[s.userStore.user===null?(c(),d("div",W,[X,t(r,{class:"account__login ml-auto",color:"secondary",width:"140",height:"56",variant:"flat",to:"/login/"},{default:i(()=>[t(l,{icon:"fa:sign-in",class:"mr-2"}),n("ログイン ")]),_:1})])):_("",!0),s.userStore.user!==null?(c(),d("div",Y,[u("div",x,[u("img",{class:"account__icon",src:s.userStore.user_icon_url??""},null,8,uu),u("div",su,[u("div",tu,[u("span",eu,p(s.userStore.user.name),1),s.userStore.user.is_admin?(c(),d("span",nu,"管理者")):_("",!0)]),u("span",iu,"User ID: "+p(s.userStore.user.id),1)])]),t(r,{class:"account__login ml-auto",color:"secondary",width:"140",height:"56",variant:"flat",onClick:e[1]||(e[1]=o=>s.userStore.logout())},{default:i(()=>[t(l,{icon:"fa:sign-out",class:"mr-2"}),n("ログアウト ")]),_:1})])):_("",!0),s.userStore.is_logged_in===!1?(c(),d("div",ou,[au,u("div",lu,[u("div",ru,[t(l,{class:"account-feature__icon",icon:"bi:chat-left-text-fill"}),cu]),u("div",du,[t(l,{class:"account-feature__icon",icon:"fa-brands:twitter"}),_u]),u("div",Bu,[t(l,{class:"account-feature__icon",icon:"fluent:arrow-sync-20-filled"}),gu]),u("div",fu,[t(l,{class:"account-feature__icon",icon:"fa-solid:sliders-h"}),Au])]),Cu,t(r,{class:"account-register__button",color:"secondary",width:"100%","max-width":"250",height:"50",variant:"flat",to:"/register/"},{default:i(()=>[t(l,{icon:"fluent:person-add-20-filled",class:"mr-2",height:"24"}),n("アカウントを作成 ")]),_:1})])):_("",!0),s.userStore.is_logged_in===!0?(c(),d("div",Fu,[u("div",mu,[pu,Eu,t(O,{class:"settings__item-switch",color:"primary",id:"sync_settings","hide-details":"",modelValue:s.sync_settings,"onUpdate:modelValue":e[2]||(e[2]=o=>s.sync_settings=o)},null,8,["modelValue"])]),t(v,{"max-width":"530",modelValue:s.sync_settings_dialog,"onUpdate:modelValue":e[6]||(e[6]=o=>s.sync_settings_dialog=o)},{default:i(()=>[t(E,null,{default:i(()=>[t(h,{class:"d-flex justify-center font-weight-bold pt-6"},{default:i(()=>[n("設定データの競合")]),_:1}),t(D,{class:"pt-2 pb-5"},{default:i(()=>[n(" このデバイスの設定と、サーバーに保存されている設定が競合しています。"),hu,n(" 一度上書きすると、元に戻すことはできません。慎重に選択してください。"),Du]),_:1}),u("div",vu,[t(r,{class:"settings__save-button text-error-lighten-1",color:"background-lighten-1",variant:"flat",onClick:e[3]||(e[3]=o=>s.overrideServerSettingsFromClient())},{default:i(()=>[t(l,{icon:"fluent:document-arrow-up-16-filled",class:"mr-2",height:"22px"}),n(" サーバーに保存されている設定を、"),yu,n("このデバイスの設定で上書きする ")]),_:1}),t(r,{class:"settings__save-button text-error-lighten-1 mt-3",color:"background-lighten-1",variant:"flat",onClick:e[4]||(e[4]=o=>s.overrideClientSettingsFromServer())},{default:i(()=>[t(l,{icon:"fluent:document-arrow-down-16-filled",class:"mr-2",height:"22px"}),n(" このデバイスの設定を、"),wu,n("サーバーに保存されている設定で上書きする ")]),_:1}),t(r,{class:"settings__save-button mt-3",variant:"flat",color:"background-lighten-1",onClick:e[5]||(e[5]=o=>s.sync_settings_dialog=!1)},{default:i(()=>[t(l,{icon:"fluent:dismiss-16-filled",class:"mr-2",height:"22px"}),n(" キャンセル ")]),_:1})])]),_:1})]),_:1},8,["modelValue"]),t(f,{class:"settings__item",ref:"settings_username",onSubmit:e[8]||(e[8]=g(()=>{},["prevent"]))},{default:i(()=>[bu,Su,t(y,{class:"settings__item-form",color:"primary",variant:"outlined",placeholder:"ユーザー名",density:s.is_form_dense?"compact":"default",modelValue:s.settings_username,"onUpdate:modelValue":e[7]||(e[7]=o=>s.settings_username=o),rules:[s.settings_username_validation]},null,8,["density","modelValue","rules"])]),_:1},512),t(r,{class:"settings__save-button mt-2",variant:"flat",onClick:e[9]||(e[9]=o=>s.updateAccountInfo("username"))},{default:i(()=>[t(l,{icon:"fluent:save-16-filled",class:"mr-2",height:"24px"}),n("ユーザー名を更新 ")]),_:1}),t(f,{class:"settings__item",onSubmit:e[11]||(e[11]=g(()=>{},["prevent"]))},{default:i(()=>[Vu,ku,t(H,{class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",label:"アイコン画像を選択",density:s.is_form_dense?"compact":"default",accept:"image/jpeg, image/png","prepend-icon":"","prepend-inner-icon":"mdi-paperclip",modelValue:s.settings_icon_file,"onUpdate:modelValue":e[10]||(e[10]=o=>s.settings_icon_file=o)},null,8,["density","modelValue"])]),_:1}),t(r,{class:"settings__save-button mt-5",variant:"flat",onClick:e[12]||(e[12]=o=>s.updateAccountIcon())},{default:i(()=>[t(l,{icon:"fluent:save-16-filled",class:"mr-2",height:"24px"}),n("アイコン画像を更新 ")]),_:1}),t(f,{class:"settings__item",ref:"settings_password",onSubmit:e[15]||(e[15]=g(()=>{},["prevent"]))},{default:i(()=>[$u,Tu,t(y,{class:"settings__item-form",color:"primary",variant:"outlined",placeholder:"新しいパスワード",density:s.is_form_dense?"compact":"default",modelValue:s.settings_password,"onUpdate:modelValue":e[13]||(e[13]=o=>s.settings_password=o),type:s.settings_password_showing?"text":"password",rules:[s.settings_password_validation],"append-inner-icon":s.settings_password_showing?"mdi-eye":"mdi-eye-off","onClick:appendInner":e[14]||(e[14]=o=>s.settings_password_showing=!s.settings_password_showing)},null,8,["density","modelValue","type","rules","append-inner-icon"])]),_:1},512),t(r,{class:"settings__save-button mt-2",variant:"flat",onClick:e[16]||(e[16]=o=>s.updateAccountInfo("password"))},{default:i(()=>[t(l,{icon:"fluent:save-16-filled",class:"mr-2",height:"24px"}),n("パスワードを更新 ")]),_:1}),t(q,{class:"mt-6"}),Iu,t(r,{class:"settings__save-button bg-error mt-5",variant:"flat",onClick:e[17]||(e[17]=o=>s.account_delete_confirm_dialog=!0)},{default:i(()=>[t(l,{icon:"fluent:delete-16-filled",class:"mr-2",height:"24px"}),n("アカウントを削除 ")]),_:1}),t(v,{"max-width":"385",modelValue:s.account_delete_confirm_dialog,"onUpdate:modelValue":e[20]||(e[20]=o=>s.account_delete_confirm_dialog=o)},{default:i(()=>[t(E,null,{default:i(()=>[t(h,{class:"d-flex justify-center pt-6 font-weight-bold"},{default:i(()=>[n("本当にアカウントを削除しますか？")]),_:1}),t(D,{class:"pt-2 pb-0"},{default:i(()=>[n(" アカウントに紐づくすべてのユーザーデータが削除されます。元に戻すことはできません。"),Uu,n(" 本当にアカウントを削除しますか？ ")]),_:1}),t(R,{class:"pt-4 px-6 pb-6"},{default:i(()=>[t(Z),t(r,{color:"text",variant:"text",onClick:e[18]||(e[18]=o=>s.account_delete_confirm_dialog=!1)},{default:i(()=>[n("キャンセル")]),_:1}),t(r,{color:"error",variant:"flat",onClick:e[19]||(e[19]=o=>s.deleteAccount())},{default:i(()=>[n("削除")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])):_("",!0)],2)]),_:1})}const Qu=I(G,[["render",Ku],["__scopeId","data-v-fc2e44f8"]]);export{Qu as default};
