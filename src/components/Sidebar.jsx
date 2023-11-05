import React from "react"

export default function Sidebar(){
  return(
    <>
      <div className="sidebar">
        <img className="logo" src="logonew.png" alt="logo"></img>
        <ul>
         <li><a href="#"><i className="fas fa-home mr-2"></i> Dashboard</a></li>
         <li><a href="#"><i style={{marginRight:"12px"}} className="fas fa-user"></i> Accounts </a></li>
         <li><a href="#"><i className="fas fa-address-card mr-2"></i> Payroll</a></li>
         <li><a href="#"><i style={{marginRight:"12px"}} className="fas fa-blog"></i> Reports</a></li>
         <li><a href="#"><i style={{marginRight:"12px"}} className="fas fa-address-book"></i> Advisor</a></li>
         <li><a href="#"><i style={{marginRight:"12px"}} className="fas fa-info-circle"></i> Contacts</a></li>
       </ul>
      </div>
    </>
  )
}