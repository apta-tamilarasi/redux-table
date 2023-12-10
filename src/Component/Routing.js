import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Form from './Form.js'
import Table from "./Table.js"

const Routing=()=>{
    return <BrowserRouter>
    <Routes>
        <Route path="/" element={<Form/>}></Route>
        <Route path="/table" element={<Table/>}/>
    </Routes>
    </BrowserRouter>

}

export default Routing