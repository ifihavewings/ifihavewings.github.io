import{d as f,B as _,C as p,D as y,j as h,m as a,x as n,f as c,k as r,w as i,F as k,l,E as R,o as S}from"./index-RQLAaoDU.js";import{u as C}from"./useHighlight-gwjeR5Kq.js";const x=a("h1",null,"toRefs: 将 reactive 对象的每个属性转换成 ref 对象",-1),B=a("h2",null,"reactive(data) 中的属性",-1),N=a("h2",null,"toRefs(data) 解构的属性",-1),T=a("pre",null,[l("        "),a("code",{class:"language-javascript"},`
            import { ref, reactive, toRef, toRefs } from 'vue'
            const data = reactive({
                name: '张三',
                age: 18,
                salary: 2000,
                skills: ['JavaScript', 'HTML', 'CSS']
            })

            const { name, age, skills } = toRefs(data)
            const salary = toRef(data, 'salary')
            console.log(salary)

            const changeName = () => {
                name.value = '李四'
                console.log(data)
                console.log(name)
            }
            const changeAge = () => {
                data.age = 200
                console.log(data)
                console.log(age)
            }
            const changeSalary = () => {
                salary.value = 3000
                console.log(data)
                console.log(salary) 
            }
        `),l(`
    `)],-1),A=f({__name:"ToRefs",setup(E){C();const e=_({name:"张三",age:18,salary:2e3,skills:["JavaScript","HTML","CSS"]}),{name:s,age:g,skills:d}=p(e),o=y(e,"salary");console.log(o);const u=()=>{s.value="李四",console.log(e),console.log(s)},m=()=>{e.age=200,console.log(e),console.log(g)},v=()=>{o.value=3e3,console.log(e),console.log(o)};return(H,V)=>{const t=R;return S(),h(k,null,[a("div",null,[x,a("div",null,[B,a("div",null,"name: "+n(e.name),1),a("div",null,"age: "+n(e.age),1),a("div",null,"salary: "+n(e.salary),1),a("div",null,"skills: "+n(e.skills),1)]),a("div",null,[N,a("div",null,"name: "+n(c(s)),1),a("div",null,"age: "+n(c(g)),1),a("div",null,"salary: "+n(o.value),1),a("div",null,"skills: "+n(c(d)),1)])]),r(t,{type:"primary",onClick:u},{default:i(()=>[l("更改toRefs后的名字")]),_:1}),r(t,{type:"primary",onClick:m},{default:i(()=>[l("更改reactive 对象的年龄")]),_:1}),r(t,{type:"primary",onClick:v},{default:i(()=>[l("更改toRef 后的工资")]),_:1}),T],64)}}});export{A as default};
