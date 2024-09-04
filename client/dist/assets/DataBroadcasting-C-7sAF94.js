import{d as m,U as g,m as A,M as E,q as v,_ as p,b as c,e as F,h as D,i as C,k as u,g as f,f as h,j as i,C as w,A as a,V as S,R as V}from"./index-bUaC_4Uu.js";import{S as z}from"./Base-DvBLfCVe.js";import{c as B}from"./VChip-Dh-kTiWs.js";import{b as y,c as $}from"./VTextField-CXO-vs30.js";import{c as I}from"./VSelect-Dn8NbAia.js";import"./Navigation-3e2Rvcos.js";import"./ssrBoot-Bj_AfeK6.js";import"./VAvatar-DsPtSKoG.js";const o="KonomiTV-BMLBrowser_nvram_prefix=receiverinfo%2F",k=m({name:"Settings-DataBroadcasting",components:{SettingsBase:z},data(){return{is_form_dense:g.isSmartphoneHorizontal(),data_broadcasting_zip_code:"",data_broadcasting_zip_code_validation:t=>t===""?!0:t.match(/^[0-9]{3}-[0-9]{4}$/)===null?"郵便番号は「000-0000」の形式で入力してください。":!0,data_broadcasting_prefecture:"255-0b0",data_broadcasting_prefectures:[{title:"未設定",value:"255-0b0"},{title:"西北海道",value:"2-0b000101101011"},{title:"東北海道",value:"1-0b000101101011"},{title:"青森県",value:"3-0b010001100111"},{title:"岩手県",value:"4-0b010111010100"},{title:"宮城県",value:"5-0b011101011000"},{title:"秋田県",value:"6-0b101011000110"},{title:"山形県",value:"7-0b111001001100"},{title:"福島県",value:"8-0b000110101110"},{title:"茨城県",value:"9-0b110001101001"},{title:"栃木県",value:"10-0b111000111000"},{title:"群馬県",value:"11-0b100110001011"},{title:"埼玉県",value:"12-0b011001001011"},{title:"千葉県",value:"13-0b000111000111"},{title:"東京都 (島部を除く)",value:"14-0b101010101100"},{title:"東京都島部 (伊豆・小笠原諸島)",value:"49-0b101010101100"},{title:"神奈川県",value:"15-0b010101101100"},{title:"新潟県",value:"16-0b010011001110"},{title:"富山県",value:"17-0b010100111001"},{title:"石川県",value:"18-0b011010100110"},{title:"福井県",value:"19-0b100100101101"},{title:"山梨県",value:"20-0b110101001010"},{title:"長野県",value:"21-0b100111010010"},{title:"岐阜県",value:"22-0b101001100101"},{title:"静岡県",value:"23-0b101001011010"},{title:"愛知県",value:"24-0b100101100110"},{title:"三重県",value:"25-0b001011011100"},{title:"滋賀県",value:"26-0b110011100100"},{title:"京都府",value:"27-0b010110011010"},{title:"大阪府",value:"28-0b110010110010"},{title:"兵庫県",value:"29-0b011001110100"},{title:"奈良県",value:"30-0b101010010011"},{title:"和歌山県",value:"31-0b001110010110"},{title:"鳥取県",value:"32-0b110100100011"},{title:"島根県",value:"33-0b001100011011"},{title:"岡山県",value:"34-0b001010110101"},{title:"広島県",value:"35-0b101100110001"},{title:"山口県",value:"36-0b101110011000"},{title:"徳島県",value:"37-0b111001100010"},{title:"香川県",value:"38-0b100110110100"},{title:"愛媛県",value:"39-0b000110011101"},{title:"高知県",value:"40-0b001011100011"},{title:"福岡県",value:"41-0b011000101101"},{title:"佐賀県",value:"42-0b100101011001"},{title:"長崎県",value:"43-0b101000101011"},{title:"熊本県",value:"44-0b100010100111"},{title:"大分県",value:"45-0b110010001101"},{title:"宮崎県",value:"46-0b110100011100"},{title:"鹿児島県 (南西諸島を除く)",value:"47-0b110101000101"},{title:"鹿児島県島部 (南西諸島の鹿児島県域)",value:"50-0b110101000101"},{title:"沖縄県",value:"48-0b001101110010"}]}},computed:{...A(v)},watch:{async data_broadcasting_zip_code(t){if(this.data_broadcasting_zip_code_validation(t)===!0)if(t!==""){const e=window.btoa(t.replace("-",""));localStorage.setItem(`${o}zipcode`,e)}else localStorage.removeItem(`${o}zipcode`)},data_broadcasting_prefecture(t){if(t!=="255-0b0"){const e=t.split("-0b"),l=parseInt(e[0]),r=window.btoa(String.fromCharCode(l));localStorage.setItem(`${o}prefecture`,r);const n=parseInt(e[1],2),_=window.btoa(String.fromCharCode(n>>8,n&255));localStorage.setItem(`${o}regioncode`,_)}else localStorage.removeItem(`${o}prefecture`),localStorage.removeItem(`${o}regioncode`)}},created(){const t=localStorage.getItem(`${o}zipcode`);if(t)try{this.data_broadcasting_zip_code=window.atob(t),this.data_broadcasting_zip_code=this.data_broadcasting_zip_code.slice(0,3)+"-"+this.data_broadcasting_zip_code.slice(3)}catch{}const e=localStorage.getItem(`${o}prefecture`);if(e)try{const l=window.atob(e).charCodeAt(0);for(const r of this.data_broadcasting_prefectures)if(r.value.startsWith(`${l}-`)){this.data_broadcasting_prefecture=r.value;break}}catch{}},methods:{resetNVRAMSettings(){for(const t in localStorage)t.startsWith("KonomiTV-BMLBrowser_nvram_")&&localStorage.removeItem(t);this.data_broadcasting_zip_code="",this.data_broadcasting_prefecture="255-0b0",E.success("データ放送の保存データをリセットしました。")}}}),M={class:"settings__heading"},R=u("svg",{width:"27px",height:"27px",viewBox:"0 0 512 512"},[u("path",{fill:"currentColor",d:"M248.039 381.326L355.039 67.8258C367.539 28.3257 395.039 34.3258 406.539 34.3258C431.039 34.3258 453.376 61.3258 441.039 96.8258C362.639 322.426 343.539 375.326 340.539 384.826C338.486 391.326 342.039 391.326 345.539 391.326C377.039 391.326 386.539 418.326 386.539 435.326C386.539 458.826 371.539 477.326 350.039 477.326H214.539C179.039 477.326 85.8269 431.3 88.0387 335.826C91.0387 206.326 192.039 183.326 243.539 183.326H296.539L265.539 272.326H243.539C185.539 272.326 174.113 314.826 176.039 334.326C180.039 374.826 215.039 389.814 237.039 390.326C244.539 390.5 246.039 386.826 248.039 381.326Z"})],-1),L=u("span",{class:"ml-2"},"データ放送",-1),N={class:"settings__content"},U={class:"settings__item settings__item--switch settings__item--sync-disabled"},T=u("label",{class:"settings__item-heading",for:"tv_show_data_broadcasting"},"テレビをみるときにデータ放送機能を利用する",-1),H=u("label",{class:"settings__item-label",for:"tv_show_data_broadcasting"},[a(" データ放送画面自体のオン/オフは、視聴画面右側のパネルからリモコンを表示した上で、リモコンの d ボタンから切り替えられます。"),u("br")],-1),K=u("label",{class:"settings__item-label",for:"tv_show_data_broadcasting"},[a(" データ放送機能をオンにすると、視聴時の負荷が若干高くなります。データ放送を利用しない場合や、スペックの低い Android デバイスで動作が重い場合は、オフに設定してみてください。"),u("br")],-1),O={class:"settings__item settings__item--switch settings__item--sync-disabled"},W=u("label",{class:"settings__item-heading",for:"enable_internet_access_from_data_broadcasting"},"データ放送からのインターネットアクセスを有効にする",-1),j=u("label",{class:"settings__item-label",for:"enable_internet_access_from_data_broadcasting"},[a(" この設定をオンにすると、データ放送機能を利用する際に、データ放送からインターネットにアクセスできるようになります。"),u("br"),a(" たとえば紅白歌合戦の視聴者投票をはじめとした双方向番組に参加したり、ネット接続時限定のミニゲームが遊べるようになります。"),u("br")],-1),q=u("label",{class:"settings__item-label",for:"enable_internet_access_from_data_broadcasting"},[a(" その一方で、"),u("b",null,"データ放送からのインターネットアクセスが有効な場合、あなたの視聴データがテレビ局に送信されることがあります。"),u("br"),a(" 大半のチャンネルでは個別に視聴データの送信を無効化できますが、依然プライバシー上の問題が残ります。 通常はオフにしておき、双方向コンテンツを使うときだけオンにすることをおすすめします。"),u("br")],-1),G=u("label",{class:"settings__item-heading"},"お住まいの郵便番号",-1),P=u("label",{class:"settings__item-label"},[a(" ここで設定した郵便番号をもとに、データ放送の地域情報（ニュース・天気予報など）が表示されます。"),u("br"),a(" 設定しない場合、データ放送の一部のコンテンツが利用できないことがあります。"),u("br")],-1),X={class:"settings__item settings__item--sync-disabled mt-2"},Z=u("label",{class:"settings__item-heading"},"お住まいの都道府県",-1),x=u("label",{class:"settings__item-label"},[a(" ここで設定した都道府県をもとに、データ放送の地域情報（ニュース・天気予報など）が表示されます。"),u("br"),a(" 設定しない場合、データ放送の一部のコンテンツが利用できないことがあります。"),u("br")],-1),J=u("div",{class:"settings__item"},[u("div",{class:"settings__item-heading text-error-lighten-1"},"データ放送の保存データをリセット"),u("div",{class:"settings__item-label"},[a(" このデバイス（ブラウザ）に保存されているデータ放送の保存データを、初期状態にリセット (消去) できます。"),u("br"),a(" 保存データには、データ放送内のミニゲームの得点、プレゼント企画のスタンプ個数、設定などが含まれます。"),u("br"),u("strong",{class:"text-error-lighten-1"},"保存データをリセットすると、元に戻すことはできません。十分ご注意ください。"),u("br")])],-1);function Q(t,e,l,r,n,_){const d=c("Icon"),b=c("SettingsBase");return F(),D(b,null,{default:C(()=>[u("h2",M,[f((F(),h("a",{class:"settings__back-button",onClick:e[0]||(e[0]=s=>t.$router.back())},[i(d,{icon:"fluent:arrow-left-12-filled",width:"25px"})])),[[V]]),R,L]),u("div",N,[u("div",U,[T,H,K,i(B,{class:"settings__item-switch",color:"primary",id:"tv_show_data_broadcasting","hide-details":"",modelValue:t.settingsStore.settings.tv_show_data_broadcasting,"onUpdate:modelValue":e[1]||(e[1]=s=>t.settingsStore.settings.tv_show_data_broadcasting=s)},null,8,["modelValue"])]),u("div",O,[W,j,q,i(B,{class:"settings__item-switch",color:"primary",id:"enable_internet_access_from_data_broadcasting","hide-details":"",modelValue:t.settingsStore.settings.enable_internet_access_from_data_broadcasting,"onUpdate:modelValue":e[2]||(e[2]=s=>t.settingsStore.settings.enable_internet_access_from_data_broadcasting=s)},null,8,["modelValue"])]),i(y,{class:"mt-6"}),u("div",{class:"settings__item settings__item--sync-disabled",onSubmit:e[4]||(e[4]=w(()=>{},["prevent"]))},[G,P,i($,{class:"settings__item-form",color:"primary",variant:"outlined",placeholder:"郵便番号",density:t.is_form_dense?"compact":"default",rules:[t.data_broadcasting_zip_code_validation],modelValue:t.data_broadcasting_zip_code,"onUpdate:modelValue":e[3]||(e[3]=s=>t.data_broadcasting_zip_code=s)},null,8,["density","rules","modelValue"])],32),u("div",X,[Z,x,i(I,{class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",density:t.is_form_dense?"compact":"default",items:t.data_broadcasting_prefectures,modelValue:t.data_broadcasting_prefecture,"onUpdate:modelValue":e[5]||(e[5]=s=>t.data_broadcasting_prefecture=s)},null,8,["density","items","modelValue"])]),J,i(S,{class:"settings__save-button bg-error mt-5",variant:"flat",onClick:e[6]||(e[6]=s=>t.resetNVRAMSettings())},{default:C(()=>[i(d,{icon:"material-symbols:device-reset-rounded",class:"mr-2",height:"23px"}),a("保存データをリセット ")]),_:1})])]),_:1})}const l0=p(k,[["render",Q]]);export{l0 as default};
