import{d as a,m as n,u as p,_ as m,r as d,o as c,j as u}from"./index-D2zR81a8.js";import{W as h,V as l,P as _,u as f}from"./PlayerController-BUt1PTIZ.js";import"./ChannelsStore-eNnhxLya.js";import"./ssrBoot-BvljY2yG.js";import"./VDialog-BE2JXbX2.js";import"./VSwitch-BiucEdzW.js";import"./VTextField-DymZQzkG.js";import"./VAvatar-CTvU0rd-.js";import"./VCard-C5ODUzfZ.js";import"./swiper-cQLwFU5D.js";import"./CommentMuteSettings-aK-5x8By.js";import"./VSelect-BuCCGZYb.js";import"./vuedraggable.umd-X59vE-3L.js";import"./Twitter-Bph-nOIj.js";import"./PlayerUtils-BMfVEgCY.js";let t=null;const y=a({name:"Video-Watch",components:{Watch:h},computed:{...n(f,p)},created(){this.init()},beforeRouteUpdate(o,r,e){this.destroy().then(()=>this.init()),e()},beforeUnmount(){this.destroy()},methods:{async init(){if(this.$route.params.video_id===void 0){this.$router.push({path:"/not-found/"});return}const o=await l.fetchVideo(parseFloat(this.$route.params.video_id));if(o===null){this.$router.push({path:"/not-found/"});return}this.playerStore.recorded_program=o,t=new _("Video"),await t.init()},async destroy(){t!==null&&(await t.destroy(),t=null)}}});function $(o,r,e,i,W,V){const s=d("Watch",!0);return c(),u(s,{playback_mode:"Video"})}const z=m(y,[["render",$]]);export{z as default};