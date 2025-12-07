module.exports=[47326,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(54468),e=a.i(26304);let f=12,g=300,h="190, 11, 69",i=[{color:"#FFFFFF",title:"Digital Marketing",description:"We don't just run ads—we spark clicks, follows, and real results. SEO, social, content—we do it all with style.",label:"Marketing",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"},{color:"#FFFFFF",title:"Mobile Apps",description:"Slick, scrollable, tap-worthy apps for iOS and Android. From concept to code, let's launch something iconic.",label:"App Development",image:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop"},{color:"#FFFFFF",title:"Custom CRMs",description:"We build custom CRM systems that fit your workflow—no fluff, no fuss. Smooth, smart, and built just for you.",label:"CRM Solutions",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"},{color:"#FFFFFF",title:"Custom Websites",description:"No boring templates here—we craft custom websites that actually match your brand's vibe. Fast, slick, and magical on any device.",label:"Web Development",image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"},{color:"#FFFFFF",title:"Security",description:"Enterprise-grade protection for your digital assets. Secure infrastructure, data encryption, and compliance solutions.",label:"Security",image:"https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=300&fit=crop"},{color:"#FFFFFF",title:"Consulting & Strategy",description:"Build Fast. Launch Smart. Grow Big. Expert guidance to fuel your business growth with cutting-edge solutions.",label:"Strategy",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"}],j=({children:a,className:d="",disableAnimations:g=!1,style:i,particleCount:j=f,glowColor:k=h,enableTilt:l=!0,clickEffect:m=!1,enableMagnetism:n=!1})=>{let o=(0,c.useRef)(null),p=(0,c.useRef)([]),q=(0,c.useRef)([]),r=(0,c.useRef)(!1),s=(0,c.useRef)([]),t=(0,c.useRef)(!1),u=(0,c.useRef)(null),v=(0,c.useCallback)(()=>{if(t.current||!o.current)return;let{width:a,height:b}=o.current.getBoundingClientRect();s.current=Array.from({length:j},()=>((a,b,c=h)=>{let d=document.createElement("div");return d.className="particle",d.style.cssText=`
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${c}, 1);
    box-shadow: 0 0 6px rgba(${c}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${a}px;
    top: ${b}px;
  `,d})(Math.random()*a,Math.random()*b,k)),t.current=!0},[j,k]),w=(0,c.useCallback)(()=>{q.current.forEach(clearTimeout),q.current=[],u.current?.kill(),p.current.forEach(a=>{e.gsap.to(a,{scale:0,opacity:0,duration:.3,ease:"back.in(1.7)",onComplete:()=>{a.parentNode?.removeChild(a)}})}),p.current=[]},[]),x=(0,c.useCallback)(()=>{o.current&&r.current&&(t.current||v(),s.current.forEach((a,b)=>{let c=setTimeout(()=>{if(!r.current||!o.current)return;let b=a.cloneNode(!0);o.current.appendChild(b),p.current.push(b),e.gsap.fromTo(b,{scale:0,opacity:0},{scale:1,opacity:1,duration:.3,ease:"back.out(1.7)"}),e.gsap.to(b,{x:(Math.random()-.5)*100,y:(Math.random()-.5)*100,rotation:360*Math.random(),duration:2+2*Math.random(),ease:"none",repeat:-1,yoyo:!0}),e.gsap.to(b,{opacity:.3,duration:1.5,ease:"power2.inOut",repeat:-1,yoyo:!0})},100*b);q.current.push(c)}))},[v]);return(0,c.useEffect)(()=>{if(g||!o.current)return;let a=o.current,b=()=>{r.current=!0,x(),l&&e.gsap.to(a,{rotateX:5,rotateY:5,duration:.3,ease:"power2.out",transformPerspective:1e3})},c=()=>{r.current=!1,w(),l&&e.gsap.to(a,{rotateX:0,rotateY:0,duration:.3,ease:"power2.out"}),n&&e.gsap.to(a,{x:0,y:0,duration:.3,ease:"power2.out"})},d=b=>{if(!l&&!n)return;let c=a.getBoundingClientRect(),d=b.clientX-c.left,f=b.clientY-c.top,g=c.width/2,h=c.height/2;l&&e.gsap.to(a,{rotateX:-((f-h)/h*10),rotateY:(d-g)/g*10,duration:.1,ease:"power2.out",transformPerspective:1e3}),n&&(u.current=e.gsap.to(a,{x:(d-g)*.05,y:(f-h)*.05,duration:.3,ease:"power2.out"}))},f=b=>{if(!m)return;let c=a.getBoundingClientRect(),d=b.clientX-c.left,f=b.clientY-c.top,g=Math.max(Math.hypot(d,f),Math.hypot(d-c.width,f),Math.hypot(d,f-c.height),Math.hypot(d-c.width,f-c.height)),h=document.createElement("div");h.style.cssText=`
        position: absolute;
        width: ${2*g}px;
        height: ${2*g}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${k}, 0.4) 0%, rgba(${k}, 0.2) 30%, transparent 70%);
        left: ${d-g}px;
        top: ${f-g}px;
        pointer-events: none;
        z-index: 1000;
      `,a.appendChild(h),e.gsap.fromTo(h,{scale:0,opacity:1},{scale:1,opacity:0,duration:.8,ease:"power2.out",onComplete:()=>h.remove()})};return a.addEventListener("mouseenter",b),a.addEventListener("mouseleave",c),a.addEventListener("mousemove",d),a.addEventListener("click",f),()=>{r.current=!1,a.removeEventListener("mouseenter",b),a.removeEventListener("mouseleave",c),a.removeEventListener("mousemove",d),a.removeEventListener("click",f),w()}},[x,w,g,l,n,m,k]),(0,b.jsx)("div",{ref:o,className:`${d} relative overflow-hidden`,style:{...i,position:"relative",overflow:"hidden"},children:a})},k=({gridRef:a,disableAnimations:b=!1,enabled:d=!0,spotlightRadius:f=g,glowColor:i=h})=>{let j=(0,c.useRef)(null),k=(0,c.useRef)(!1);return(0,c.useEffect)(()=>{if(b||!a?.current||!d)return;let c=document.createElement("div");c.className="global-spotlight",c.style.cssText=`
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${i}, 0.15) 0%,
        rgba(${i}, 0.08) 15%,
        rgba(${i}, 0.04) 25%,
        rgba(${i}, 0.02) 40%,
        rgba(${i}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `,document.body.appendChild(c),j.current=c;let g=b=>{if(!j.current||!a.current)return;let c=a.current.closest(".bento-section"),d=c?.getBoundingClientRect(),g=d&&b.clientX>=d.left&&b.clientX<=d.right&&b.clientY>=d.top&&b.clientY<=d.bottom;k.current=g||!1;let h=a.current.querySelectorAll(".card");if(!g){e.gsap.to(j.current,{opacity:0,duration:.3,ease:"power2.out"}),h.forEach(a=>{a.style.setProperty("--glow-intensity","0")});return}let{proximity:i,fadeDistance:l}={proximity:.5*f,fadeDistance:.75*f},m=1/0;h.forEach(a=>{var c,d,e;let g,h,j,k=a.getBoundingClientRect(),n=k.left+k.width/2,o=k.top+k.height/2,p=Math.max(0,Math.hypot(b.clientX-n,b.clientY-o)-Math.max(k.width,k.height)/2);m=Math.min(m,p);let q=0;p<=i?q=1:p<=l&&(q=(l-p)/(l-i)),c=b.clientX,d=b.clientY,e=q,h=(c-(g=a.getBoundingClientRect()).left)/g.width*100,j=(d-g.top)/g.height*100,a.style.setProperty("--glow-x",`${h}%`),a.style.setProperty("--glow-y",`${j}%`),a.style.setProperty("--glow-intensity",e.toString()),a.style.setProperty("--glow-radius",`${f}px`)}),e.gsap.to(j.current,{left:b.clientX,top:b.clientY,duration:.1,ease:"power2.out"});let n=m<=i?.8:m<=l?(l-m)/(l-i)*.8:0;e.gsap.to(j.current,{opacity:n,duration:n>0?.2:.5,ease:"power2.out"})},h=()=>{k.current=!1,a.current?.querySelectorAll(".card").forEach(a=>{a.style.setProperty("--glow-intensity","0")}),j.current&&e.gsap.to(j.current,{opacity:0,duration:.3,ease:"power2.out"})};return document.addEventListener("mousemove",g),document.addEventListener("mouseleave",h),()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseleave",h),j.current?.parentNode?.removeChild(j.current)}},[a,b,d,f,i]),null},l=({children:a,gridRef:c})=>(0,b.jsx)("div",{className:"bento-section grid gap-2 p-3 max-w-[80rem] select-none relative mx-auto",style:{fontSize:"clamp(1rem, 0.9rem + 0.5vw, 1.5rem)"},ref:c,children:a}),m=({textAutoHide:a=!0,enableStars:d=!0,enableSpotlight:e=!0,enableBorderGlow:m=!0,disableAnimations:n=!1,spotlightRadius:o=g,particleCount:p=f,enableTilt:q=!1,glowColor:r=h,clickEffect:s=!0,enableMagnetism:t=!0})=>{let u=(0,c.useRef)(null),v=(()=>{let[a,b]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let a=()=>b(window.innerWidth<=768);return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),a})(),w=n||v;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
          .bento-section {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 200px;
            --glow-color: ${r};
            --border-color: #e5e7eb;
            --background-light: #FFFFFF;
            --text-dark: hsl(222.2, 84%, 4.9%);
            --primary-red: rgba(190, 11, 69, 1);
            --primary-red-light: rgba(190, 11, 69, 0.1);
            --primary-red-border: rgba(190, 11, 69, 0.2);
          }
          
          .card-responsive {
            grid-template-columns: 1fr;
            width: 100%;
            margin: 0 auto;
            padding: 0.5rem;
          }
          
          @media (min-width: 600px) {
            .card-responsive {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          @media (min-width: 1024px) {
            .card-responsive {
              grid-template-columns: repeat(4, 1fr);
            }
            
            .card-responsive .card:nth-child(3) {
              grid-column: span 2;
              grid-row: span 2;
            }
            
            .card-responsive .card:nth-child(4) {
              grid-column: 1 / span 2;
              grid-row: 2 / span 2;
            }
            
            .card-responsive .card:nth-child(6) {
              grid-column: 4;
              grid-row: 3;
            }
          }
          
          .card--border-glow::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 6px;
            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                rgba(${r}, calc(var(--glow-intensity) * 0.8)) 0%,
                rgba(${r}, calc(var(--glow-intensity) * 0.4)) 30%,
                transparent 60%);
            border-radius: inherit;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            pointer-events: none;
            opacity: 1;
            transition: opacity 0.3s ease;
            z-index: 1;
          }
          
          .card--border-glow:hover::after {
            opacity: 1;
          }
          
          .card--border-glow:hover {
            box-shadow: 0 4px 20px rgba(190, 11, 69, 0.15), 0 0 30px rgba(${r}, 0.2);
          }
          
          .particle::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: rgba(${r}, 0.2);
            border-radius: 50%;
            z-index: -1;
          }
          
          .particle-container:hover {
            box-shadow: 0 4px 20px rgba(190, 11, 69, 0.1), 0 0 30px rgba(${r}, 0.2);
          }
          
          .text-clamp-1 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .text-clamp-2 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          @media (max-width: 599px) {
            .card-responsive {
              grid-template-columns: 1fr;
              width: 100%;
              margin: 0 auto;
              padding: 0.5rem;
            }
            
            .card-responsive .card {
              width: 100%;
              min-height: 180px;
            }
          }
        `}),e&&(0,b.jsx)(k,{gridRef:u,disableAnimations:w,enabled:e,spotlightRadius:o,glowColor:r}),(0,b.jsx)(l,{gridRef:u,children:(0,b.jsx)("div",{className:"card-responsive grid gap-2",children:i.map((c,d)=>{let e=`card flex flex-col justify-between relative aspect-[4/3] min-h-[200px] w-full max-w-full p-5 rounded-[20px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(190,11,69,0.15)] ${m?"card--border-glow":""}`,f={backgroundColor:c.color||"var(--background-light)",borderColor:"var(--border-color)",color:"var(--text-dark)","--glow-x":"50%","--glow-y":"50%","--glow-intensity":"0","--glow-radius":"200px"};return(0,b.jsxs)(j,{className:e,style:f,disableAnimations:w,particleCount:p,glowColor:r,enableTilt:q,clickEffect:s,enableMagnetism:t,children:[c.image&&(0,b.jsxs)("div",{className:"absolute inset-0 z-0",children:[(0,b.jsx)("img",{src:c.image,alt:c.title,className:"w-full h-full object-cover opacity-80 hover:opacity-90 transition-opacity duration-300"}),(0,b.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent"})]}),(0,b.jsx)("div",{className:"card__header flex justify-between gap-3 relative z-10",children:(0,b.jsx)("span",{className:"card__label text-sm font-medium",style:{color:"#BE0B45"},children:c.label})}),(0,b.jsxs)("div",{className:"card__content flex flex-col relative z-10",children:[(0,b.jsx)("h3",{className:`card__title font-semibold text-lg m-0 mb-2 ${a?"text-clamp-1":""}`,style:{color:"#1a1a1a"},children:c.title}),(0,b.jsx)("p",{className:`card__description text-sm leading-5 ${a?"text-clamp-2":""}`,style:{color:"#6b7280",opacity:.9},children:c.description})]})]},d)})})})]})};var n=a.i(95180),o=a.i(1299),p=a.i(46271),q=a.i(62036);let r=({data:a})=>{let d=(0,c.useRef)(null),e=(0,c.useRef)(null),[f,g]=(0,c.useState)(0),[h,i]=(0,c.useState)(0);(0,c.useEffect)(()=>{d.current&&g(d.current.getBoundingClientRect().height)},[d]);let{scrollYProgress:j}=(0,n.useScroll)({target:e,offset:["start 10%","end 50%"]}),k=(0,o.useTransform)(j,[0,1],[0,f]),l=(0,o.useTransform)(j,[0,.1],[0,1]);return(0,c.useEffect)(()=>{let b=j.on("change",b=>{i(Math.min(Math.floor(b*a.length),a.length-1))});return()=>b()},[j,a.length]),(0,b.jsx)("div",{className:"w-full bg-white font-sans",ref:e,style:{position:"relative"},children:(0,b.jsx)("div",{className:"max-w-7xl mx-auto",children:(0,b.jsxs)("div",{className:"flex flex-col lg:flex-row gap-8 lg:gap-16",children:[(0,b.jsxs)("div",{ref:d,className:"relative flex-1 pb-20 px-4 md:px-8",children:[a.map((a,c)=>(0,b.jsxs)(p.motion.div,{initial:{opacity:.3},animate:{opacity:h>=c?1:.3,scale:h===c?1:.98},transition:{duration:.5,ease:"easeOut"},className:"flex justify-start pt-10 md:pt-32 md:gap-10",children:[(0,b.jsxs)("div",{className:"sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full",children:[(0,b.jsx)(p.motion.div,{className:"h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center shadow-lg",animate:{scale:h===c?1.2:1,backgroundColor:h>=c?"#BD0D46":"#f3f4f6"},transition:{duration:.3},children:(0,b.jsx)(p.motion.div,{className:"h-4 w-4 rounded-full",animate:{backgroundColor:h>=c?"#ffffff":"#e5e7eb"},transition:{duration:.3}})}),(0,b.jsx)("h3",{className:"hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-gray-400",children:a.title})]}),(0,b.jsxs)("div",{className:"relative pl-20 pr-4 md:pl-4 w-full",children:[(0,b.jsx)("h3",{className:"md:hidden block text-2xl mb-4 text-left font-bold text-gray-400",children:a.title}),a.content]})]},c)),(0,b.jsx)("div",{style:{height:f+"px"},className:"absolute md:left-8 left-8 top-0 overflow-hidden w-[3px] bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 rounded-full",children:(0,b.jsx)(p.motion.div,{style:{height:k,opacity:l},className:"absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-[#BD0D46] via-[#BD0D46] to-[#BD0D46]/50 rounded-full"})})]}),(0,b.jsx)("div",{className:"hidden lg:block lg:w-[45%] relative",children:(0,b.jsxs)("div",{className:"sticky top-32 h-[500px] rounded-2xl overflow-hidden shadow-2xl",children:[(0,b.jsx)(q.AnimatePresence,{mode:"wait",children:a[h]?.image&&(0,b.jsx)(p.motion.img,{src:a[h].image,alt:a[h].title,loading:"lazy",decoding:"async",initial:{opacity:0,scale:1.1,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:-20},transition:{duration:.5,ease:"easeOut"},className:"w-full h-full object-cover"},h)}),(0,b.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"}),(0,b.jsx)(p.motion.div,{className:"absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:.2},children:(0,b.jsx)("span",{className:"text-sm font-semibold text-[#BD0D46]",children:a[h]?.title})},`indicator-${h}`)]})})]})})})};var s=a.i(70106);let t=(0,s.default)("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]),u=(0,s.default)("palette",[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]),v=(0,s.default)("code",[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]]),w=(0,s.default)("test-tube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2",key:"125lnx"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);var x=a.i(82478);let y=[{title:"Step 1",image:"/Serviceprocess/Planing.webp",content:(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{className:"flex items-center gap-3 mb-4",children:[(0,b.jsx)("div",{className:"p-2 rounded-lg bg-[#BD0D46]/10",children:(0,b.jsx)(t,{className:"w-5 h-5 text-[#BD0D46]"})}),(0,b.jsx)("h4",{className:"text-xl md:text-2xl font-bold text-gray-900",children:"Strategy Planning"})]}),(0,b.jsx)("p",{className:"text-gray-600 text-sm md:text-base mb-4",children:"Define the website's goals, target audience, technical requirements, and content structure."}),(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)("div",{className:"flex gap-2 items-center text-gray-600 text-sm",children:"✅ Sitemap & Wireframes"}),(0,b.jsx)("div",{className:"flex gap-2 items-center text-gray-600 text-sm",children:"✅ Technology Stack Selection"}),(0,b.jsx)("div",{className:"flex gap-2 items-center text-gray-600 text-sm",children:"✅ Project Scope Document"})]})]})},{title:"Step 2",image:"/Serviceprocess/design.webp",content:(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{className:"flex items-center gap-3 mb-4",children:[(0,b.jsx)("div",{className:"p-2 rounded-lg bg-[#BD0D46]/10",children:(0,b.jsx)(u,{className:"w-5 h-5 text-[#BD0D46]"})}),(0,b.jsx)("h4",{className:"text-xl md:text-2xl font-bold text-gray-900",children:"Design & Content Creation"})]}),(0,b.jsx)("p",{className:"text-gray-600 text-sm md:text-base mb-4",children:"Develop the visual identity and generate all necessary content for your project."}),(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)("div",{className:"flex gap-2 items-center text-gray-600 text-sm",children:"✅ Finalized UI/UX Mockups"}),(0,b.jsx)("div",{className:"flex gap-2 items-center text-gray-600 text-sm",children:"✅ Brand Style Guide"}),(0,b.jsx)("div",{className:"flex gap-2 items-center text-gray-600 text-sm",children:"✅ All Website Copy & Content"})]})]})},{title:"Step 3",image:"/Serviceprocess/integration.webp",content:(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{className:"flex items-center gap-3 mb-4",children:[(0,b.jsx)("div",{className:"p-2 rounded-lg bg-[#BD0D46]/10",children:(0,b.jsx)(v,{className:"w-5 h-5 text-[#BD0D46]"})}),(0,b.jsx)("h4",{className:"text-xl md:text-2xl font-bold text-gray-900",children:"Development & Integration"})]}),(0,b.jsx)("p",{className:"text-gray-600 text-sm md:text-base mb-4",children:"Build the website based on approved designs and integrate all functionality."}),(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)("div",{className:"flex gap-2 items-center text-gray-600 text-sm",children:"✅ Front-end & Back-end Complete"}),(0,b.jsx)("div",{className:"flex gap-2 items-center text-gray-600 text-sm",children:"✅ CMS Setup & SEO Config"}),(0,b.jsx)("div",{className:"flex gap-2 items-center text-gray-600 text-sm",children:"✅ Tool Integrations (Forms, Analytics, CRM)"})]})]})},{title:"Step 4",image:"/Serviceprocess/testing.webp",content:(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{className:"flex items-center gap-3 mb-4",children:[(0,b.jsx)("div",{className:"p-2 rounded-lg bg-[#BD0D46]/10",children:(0,b.jsx)(w,{className:"w-5 h-5 text-[#BD0D46]"})}),(0,b.jsx)("h4",{className:"text-xl md:text-2xl font-bold text-gray-900",children:"Testing & Quality Assurance"})]}),(0,b.jsx)("p",{className:"text-gray-600 text-sm md:text-base mb-4",children:"Rigorously test the website for functionality, performance, and cross-browser compatibility."}),(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)("div",{className:"flex gap-2 items-center text-gray-600 text-sm",children:"✅ Bug/Issue Log (Zero Critical Errors)"}),(0,b.jsx)("div",{className:"flex gap-2 items-center text-gray-600 text-sm",children:"✅ Load Speed Performance Reports"}),(0,b.jsx)("div",{className:"flex gap-2 items-center text-gray-600 text-sm",children:"✅ Stakeholder Sign-off"})]})]})},{title:"Step 5",image:"/Serviceprocess/deploy.webp",content:(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{className:"flex items-center gap-3 mb-4",children:[(0,b.jsx)("div",{className:"p-2 rounded-lg bg-[#BD0D46]/10",children:(0,b.jsx)(x.Rocket,{className:"w-5 h-5 text-[#BD0D46]"})}),(0,b.jsx)("h4",{className:"text-xl md:text-2xl font-bold text-gray-900",children:"Deployment & Launch"})]}),(0,b.jsx)("p",{className:"text-gray-600 text-sm md:text-base mb-4",children:"Final migration to the live production server and post-launch verification."}),(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)("div",{className:"flex gap-2 items-center text-gray-600 text-sm",children:"✅ Final Go-Live Deployment"}),(0,b.jsx)("div",{className:"flex gap-2 items-center text-gray-600 text-sm",children:"✅ Google Analytics & Search Console"}),(0,b.jsx)("div",{className:"flex gap-2 items-center text-gray-600 text-sm",children:"✅ Post-Launch Performance Monitoring"})]})]})}];function z(){return(0,b.jsxs)("div",{className:"py-12 bg-white",children:[(0,b.jsxs)("div",{className:"max-w-7xl mx-auto px-4 md:px-8 lg:px-10 mb-8",children:[(0,b.jsx)("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-4",children:"Our Development Process"}),(0,b.jsx)("p",{className:"text-gray-600 text-base md:text-lg max-w-2xl",children:"A structured, professional approach to bringing your vision to life—from initial concept to successful launch."})]}),(0,b.jsx)(r,{data:y})]})}var A=a.i(63212);let B={"@context":"https://schema.org","@type":"Service",serviceType:"Software Development",provider:{"@type":"Organization",name:"Caarapace",url:"https://caarapace.com"},areaServed:"Worldwide",hasOfferCatalog:{"@type":"OfferCatalog",name:"Software Development Services",itemListElement:[{"@type":"Offer",itemOffered:{"@type":"Service",name:"Web Application Development",description:"Custom web applications built with modern technologies"}},{"@type":"Offer",itemOffered:{"@type":"Service",name:"Mobile App Development",description:"Native and cross-platform mobile applications"}},{"@type":"Offer",itemOffered:{"@type":"Service",name:"Custom Software Solutions",description:"Tailored software solutions for unique business needs"}}]}};function C(){let[a,e]=(0,c.useState)(!1);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(B)}}),(0,b.jsxs)("div",{className:"min-h-screen bg-white relative",children:[(0,b.jsx)(d.default,{title:"Services",tagline:"We build software that actually works.",highlightedText:"Ship Fast. Scale Smart.",image:"/servicehero.webp",imageAlt:"Team collaboration"}),(0,b.jsxs)("div",{className:"container mx-auto px-6 py-16",children:[(0,b.jsx)("div",{className:"mb-20",children:(0,b.jsx)(m,{textAutoHide:!0,enableStars:!0,enableSpotlight:!0,enableBorderGlow:!0,enableTilt:!1,enableMagnetism:!0,clickEffect:!0,spotlightRadius:300,particleCount:12,glowColor:"190, 11, 69"})}),(0,b.jsx)("div",{className:"mb-20",children:(0,b.jsx)(z,{})}),(0,b.jsx)("div",{className:"mt-20 text-center",children:(0,b.jsxs)("div",{className:"inline-block p-8 rounded-2xl border border-[#BD0F46]/20 bg-gradient-to-r from-[#BD0F46]/5 to-transparent",children:[(0,b.jsx)("h2",{className:"text-3xl font-bold mb-4",children:"Ready to Build Something Cool?"}),(0,b.jsx)("p",{className:"text-slate-600 mb-6 max-w-xl",children:"Let's chat about turning your idea into reality. No sales pitch, just real talk about what we can create together."}),(0,b.jsx)(A.ContactFormDialog,{open:a,onOpenChange:e,trigger:(0,b.jsx)("button",{onClick:()=>e(!0),className:"inline-flex items-center justify-center rounded-xl px-8 py-3 text-base font-medium bg-[#BD0F46] text-white hover:bg-[#BD0F46]/90 transition-colors shadow-[0_10px_30px_rgba(189,15,70,0.35)] hover:shadow-[0_14px_40px_rgba(189,15,70,0.45)] cursor-pointer",children:"Hit Us Up"})})]})})]})]})]})}a.s(["default",()=>C],47326)}];

//# sourceMappingURL=app_services_page_tsx_653d0105._.js.map