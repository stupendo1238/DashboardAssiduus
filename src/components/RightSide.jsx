import React from "react"
import Header from "./Header"
import LineChart from "./LineChart"
import BarChart1 from "./BarChart1"
import StackedBarChart from "./StackedBarChart"
export default function RightSide(){
  const data=[{account:"Sales",thismonth:"1,194.58",ytd:"11,418.29"},{account:"Advertising",thismonth:"1,194.58",ytd:"11,418.29"},{account:"Inventory",thismonth:"1,194.58",ytd:"11,418.29"},{account:"Product",thismonth:"1,194.58",ytd:"11,418.29"},{account:"Stocks",thismonth:"1,194.58",ytd:"11,418.29"},{account:"Entertainment",thismonth:"1,194.58",ytd:"11,418.29"},{account:"Bookings",thismonth:"1,194.58",ytd:"11,418.29"}]
  return(
    <>
      <div className="rightcontent">
        <Header/>
        <div className="firstrow">
          <LineChart/>
          <BarChart1/>
        </div>
        <div className="secondrow">
           <StackedBarChart/>
           <div style={{width:"610px",height:"272.8px",backgroundColor:"white",padding:"10px",borderRadius:"6px"}}>
             <p style={{fontWeight:"600",fontSize:"14px",padding:"8px 18px 0 18px"}}>Account Watchlist</p>
             <hr style={{margin:"0px"}}/>
             <div className="table-container">
             <table className="custom-table">
               <thead>
                 <tr>
                   <th style={{ width: '50%'}}>Account</th>
                   <th style={{ width: '30%'}}>This Month</th>
                   <th style={{ width: '20%'}}>YTD</th>
                 </tr>
               </thead>
               <tbody>
                 {data.map((ele,i)=>{
                    return(
                      <tr key={i}>
                         <td style={{ width: '50%'}}>{ele.account}</td>
                         <td style={{ width: '30%'}}>{ele.thismonth}</td>
                         <td style={{ width: '20%'}}>{ele.ytd}</td>
                       </tr>
                    )
                 })}
               </tbody>
             </table>
            </div>
           </div>
        </div>
      </div>
    </>
  )
}