import React from 'react'
import Mynav from '../shares/Mynav'
import Mysidebar from '../shares/Mysidebar'
import Myfooter from '../shares/Myfooter'
import { Outlet } from 'react-router-dom'

function Mylandingpage() {
const a = "ravi singh";

  return (
   <div className='container-fluid'>
    <div className='row fixed-top'>
     <Mynav/>
    </div>
    <div className='row cus-m'>
      <aside className='col-sm-2 bg-danger'>
        <Mysidebar/>
      </aside>
      <main className='col-sm-10 bg-light'>
        <div className='page border'> 
        <Outlet></Outlet>
       </div>
       <Myfooter/>
      </main>
    </div>

    

   </div>
  )
}

export default Mylandingpage