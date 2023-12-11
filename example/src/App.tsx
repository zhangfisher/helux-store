import { useCallback, useEffect, useState } from 'react' 
import './App.css'
import store, { type BookType, } from "./store" 
import ColorBlock from './ColorBlock'
import { $, share } from "helux"
import UserInfo from "./UserInfo"
import { useStore } from "helux-store"

function App() {
  const [state] = store.useState()   

  const myStore = useStore<{state:BookType}>({
    state:{
      name:"",
      price:0,
      author:"",
      count:0,
      total:0
    }
  })



  useEffect(()=>{
    const tid = setInterval(()=>{
        store.state.books[0].count++
        store.state.books[2].count++
    },2000)
    return ()=>clearInterval(tid)
  },[])
  
  return (
    <> 
      <h1>Helux-starter</h1>
      <div className="card">
        <UserInfo/>
      </div>
      <div className="read-the-docs">
          <div>
            <div>加载Github项目h</div>
            <div>RepoUrl=<input value={state.user.repo} onChange={store.sync(["user","repo"])}/>
            <button>加载</button>
            <button>加载出错</button>
            </div>
            <div>{state.user.projects.loading ? '正在加载...' : state.user.projects.value  }</div>            
          </div>          
          <button onClick={()=>store.state.user.firstName="Zhang"}>恢复firstName</button>           
          <div>
            firstName=<input value={state.user.firstName} onChange={store.sync(["user","firstName"])}/>
            <ColorBlock name="FirstName" value={state.user.firstName}/>
          </div>
          <ColorBlock name="LastName" value={state.user.lastName}/>
          <ColorBlock  name="FullName" value={state.user.fullName}/>
          <button onClick={()=>store.state.user.age=100}>恢复Age</button>      
          Age=<input value={state.user.age} onChange={store.sync(["user","age"])}/>
          <ColorBlock name="Age" value={$(state.user.age)}/>
          <h3>Books</h3>
          <div style={{display:"flex",flexDirection:'column'}}>
            <div style={{width:'100%',display:'flex',flexDirection:"row"}}>
              <ColorBlock  style={{flexGrow:1}} inline value="名称"/>
              <ColorBlock style={{width:80}}  inline value="作者"/>
              <ColorBlock style={{width:80}}  inline value="单价"/>
              <ColorBlock style={{width:80}}  inline value="数量"/>
              <ColorBlock style={{width:80}}  inline value="总价"/>
            </div>
                  
            {
              state.books.map((book,index)=>{
                return <div key={index} style={{width:'100%',display:'flex',flexDirection:"row"}}>
                  <ColorBlock style={{flexGrow:1}} inline value={$(book.name)}/>
                  <ColorBlock style={{width:80}} inline value={$(book.author)}/>
                  <ColorBlock style={{width:80}} inline value={`￥${$(book.price)}`}/>
                  <ColorBlock style={{width:80}} inline value={$(book.count)}/>
                  <ColorBlock style={{width:80}} inline value={`￥${$(book.total)}`}/>
                </div>
              })
            }

            <div style={{width:'100%',display:'flex',flexDirection:"row",paddingTop:'12px'}}> 
                <input  style={{flexGrow:1}}  value={state.user.age} onChange={store.sync(["user","age"])}/>
                <input  style={{width:80}} value={state.user.age} onChange={store.sync(["user","age"])}/>
                <input  style={{width:80}} value={state.user.age} onChange={store.sync(["user","age"])}/>
                <input  style={{width:80}} value={state.user.age} onChange={store.sync(["user","age"])}/>
                <input  style={{width:80}} value={state.user.age} onChange={store.sync(["user","age"])}/>
            </div>
            <button onClick={()=>store.state.user.age=100}>添加书籍</button>  


          </div>
      </div>
    </>
  )
}

export default App
