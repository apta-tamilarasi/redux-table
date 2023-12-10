import React from "react";
import './Table.css'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handlearr } from "./Slice.js";
import {FaEdit} from 'react-icons/fa'
import {BsTrash} from 'react-icons/bs'

const Table=()=>{
    let state=useSelector((e)=>(e))
    console.log(state);
    let dispatch=useDispatch()
    let a=useNavigate()

    let edit=(id)=>{
        a(`/?id=${id}`)
    }

    let back=()=>{
        a('/')
    }

    let del=(id)=>{
       let x=state.data.arr.filter((e)=>{
            return id!==e.id
        })
        dispatch(handlearr(x))
    }
    let total=[2300165,50000,20100,43000,100500,10000,88000,32745,5739004,276890,4764859,45000]
    return <section>
       <table>
        <tbody>
        <tr>
                <th>Name</th>
                <th>Deposit</th>
                {/* <th>Withdraw</th> */}
                <th>Date & Time</th>
                <th>Clear Balance</th>
                <th><FaEdit/></th>
                <th><BsTrash/></th>
                </tr>     
            {
                state.data.arr?.map((e)=>{
                var random=Math.floor(Math.random()*12)
                    console.log("hello")
                    return <tr>
                        <th>{e.accountname} </th>
                        <td>{e.deposit}</td>
                        {/* <td>{e.withdraw}</td> */}
                        <td>{e.date}<br/>{e.time}</td>
                        <td>{Number(e.deposit)+total[random]}</td>
                        <td onClick={()=>edit(e.id)} className="edit">Edit</td>
                        <td className="delete" onClick={()=>del(e.id)}>Delete</td>

                    </tr>
                })

            }
        </tbody>
          
        </table>
        <div>
            <button onClick={back}>Back</button>
        </div>
        </section>

        
}

export default Table