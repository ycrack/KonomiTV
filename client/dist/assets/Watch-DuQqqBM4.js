import{d as r,m as o,U as p,u as l,_ as h,r as c,o as d,j as u}from"./index-VVm0Ak2F.js";import{W as m,P as _,u as f}from"./PlayerController-D5CPA0CM.js";import{u as y}from"./ChannelsStore-Bfl0EMbn.js";import"./ssrBoot-Bmj5ftqP.js";import"./VDialog-CuNtCaVw.js";import"./VSwitch-YGG3j7UH.js";import"./VTextField-OMK3KMx6.js";import"./VAvatar-DsGTAiTx.js";import"./VCard-BTyTdamv.js";import"./swiper-HSUhuoa2.js";import"./CommentMuteSettings-CDjUMrgZ.js";import"./VSelect-B7NJveYt.js";import"./vuedraggable.umd-BHWxhFMM.js";import"./Twitter-Dx3dV2nk.js";import"./PlayerUtils-BMfVEgCY.js";let e=null;const S=r({name:"TV-Watch",components:{Watch:m},data(){return{interval_ids:[]}},computed:{...o(y,f,l)},created(){this.channelsStore.display_channel_id=this.$route.params.display_channel_id,this.init()},beforeRouteUpdate(t,n,i){const s=this.destroy();this.channelsStore.display_channel_id=t.params.display_channel_id,(async()=>this.playerStore.is_zapping===!0?(this.playerStore.is_zapping=!1,this.interval_ids.push(window.setTimeout(()=>{s.then(()=>this.init())},.5*1e3))):s.then(()=>this.init()))(),i()},beforeUnmount(){this.destroy(),this.channelsStore.display_channel_id="gr000"},methods:{async init(){const t=60-new Date().getSeconds();if(this.interval_ids.push(window.setTimeout(()=>{this.channelsStore.update(!0),this.interval_ids.push(window.setInterval(()=>{this.channelsStore.update(!0)},30*1e3))},t*1e3)),await this.channelsStore.update(),this.$route.params.display_channel_id===void 0){this.$router.push({path:"/not-found/"});return}if(this.channelsStore.channel.current.name==="チャンネル情報取得エラー"){await p.sleep(3),this.$router.push({path:"/not-found/"});return}e=new _("Live"),await e.init()},async destroy(){for(const t of this.interval_ids)window.clearInterval(t);this.interval_ids=[],e!==null&&(await e.destroy(),e=null)}}});function w(t,n,i,s,v,$){const a=c("Watch",!0);return d(),u(a,{playback_mode:"Live"})}const R=h(S,[["render",w]]);export{R as default};