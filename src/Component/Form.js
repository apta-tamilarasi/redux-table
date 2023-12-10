import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom"
import { handlearr } from "./Slice.js"
const Form=()=>{

    let state=useSelector((e)=>e)
    console.log(state)
    let dispatch=useDispatch()
    let date=new Date()
    let [params]=useSearchParams()

    let [accountname,setname]=useState()
    let [deposit,setdep]=useState()
    let [withdraw,setwid]=useState()
    let [id,setid]=useState(1)

    useEffect(()=>{
        if(params.get('id')!==null){
            let x=state.data.arr.find((e)=>{
                return Number(params.get('id'))===e.id
            })
            setname(x.accountname)
            setdep(x.deposit)
            setwid(x.withdraw)   
            setid(x.id)


        }
    },[])

    let handle=(e)=>{
        if(e.target.name==='name'){
            setname(e.target.value)
        }

        else if(e.target.name==='dep'){
            setdep(e.target.value)
        }

        else if(e.target.name==='with'){
            setwid(e.target.value)
        }

    }
    let a=useNavigate()

    let goto=()=>{
        a('/table')
    }
   


    let submit=(e)=>{
        e.preventDefault()
        setid(id+1)
        let obj={
            accountname,deposit,withdraw,id,date:date.toLocaleDateString(),time:date.toLocaleTimeString()
        }
        console.log(params.get('id'));

        console.log(obj)
       
        if(params.get('id')!==null){
            console.log('edit')
            
            let x=state.data.arr.map((e)=>{
                return Number(params.get('id'))===e.id?obj:e
            })
            dispatch(handlearr(x))  
            setname('')
            setdep('')
            setwid('')          
        }

        else{
            console.log('normal')
            dispatch(handlearr([...state.data.arr,obj]))
            setname('')
            setdep('')
            setwid('')
           
        }

    }
    console.log(state.data)
     
    return <section>
        <form onSubmit={submit}>
            <div>
                <input placeholder="Name" type="text" name="name" value={accountname} onChange={handle}></input>
            </div>

            <div>
                <input placeholder="Deposit Amount" name='dep' type="text" value={deposit} onChange={handle}></input>
            </div>

            {/* <div>
                <input placeholder="Withdraw" type="text" name='with' value={withdraw} onChange={handle}></input>
            </div> */}
            <div>
                <button>submit</button>
            </div>
        </form>
        <div>
            <button onClick={goto}>goto</button>
        </div>
    </section>
}

export default Form