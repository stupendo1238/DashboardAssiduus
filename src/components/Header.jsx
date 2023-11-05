import React from "react"

export default function Header(){
  return(
    <div className="header">
      <input className="searchbar" type="search" placeholder="&#128269;"></input>
      <img width="20" src="notification.png" alt="online-status"/>
      <img className="profile" src="profile.jpg" alt="profile"/>
      <i className="fas fa-solid fa-caret-down"></i>
    </div>
  )
}