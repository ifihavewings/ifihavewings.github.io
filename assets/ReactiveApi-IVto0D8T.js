import{d as g,B as d,j as u,m as e,x as l,k as t,w as o,F as y,l as s,E as m,o as k}from"./index-RQLAaoDU.js";import{u as h}from"./useHighlight-gwjeR5Kq.js";const _=e("pre",null,[s("        "),e("code",{class:"language-javascript"},`
            import { reactive } from 'vue'

            const data = reactive({
                name: '张三',
                age: 30,
                salary: 10000,
                skills: ['JavaScript', 'HTML', 'CSS']
            })

            const changeAge = () => {
                data.age++
            }
            const changeSalary = () => {
                data.salary += 1000
            }
            const changeSkills = () => {
                data.skills.push('Vue.js')
            }
            const changeAllProperty = () => {
                Object.assign(data, { age: 29, salary: 50000, skills: ['ppp', 'aaa', 'sss', 'Vueddd'] })
                console.log('data')
                console.log(data)
            }
        `),s(`
    `)],-1),j=g({__name:"ReactiveApi",setup(v){h();const a=d({name:"张三",age:30,salary:1e4,skills:["JavaScript","HTML","CSS"]}),c=()=>{a.age++},r=()=>{a.salary+=1e3},i=()=>{a.skills.push("Vue.js")},p=()=>{Object.assign(a,{age:29,salary:5e4,skills:["ppp","aaa","sss","Vueddd"]}),console.log("data"),console.log(a)};return(S,f)=>{const n=m;return k(),u(y,null,[e("h1",null,"name: "+l(a.name),1),e("div",null,"age: "+l(a.age),1),e("div",null,"salary: "+l(a.salary),1),e("div",null,"skills: "+l(a.skills),1),t(n,{onClick:c,type:"primary"},{default:o(()=>[s("age++")]),_:1}),t(n,{onClick:r,type:"primary"},{default:o(()=>[s("salary++")]),_:1}),t(n,{onClick:i,type:"primary"},{default:o(()=>[s("skills-change")]),_:1}),t(n,{onClick:p,type:"primary"},{default:o(()=>[s("skills-change")]),_:1}),_],64)}}});export{j as default};
