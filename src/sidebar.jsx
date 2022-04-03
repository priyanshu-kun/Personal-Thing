import React, { useState } from 'react'
import { render } from "react-dom"
import GoogleLogo from "./google-logo-9834.png"
import "./sidebar.css"

function Sidebar() {

  return (
    <>
      <h2 className="heading">
        <p>🙇</p>
        <p>Welcome Sir/Madam</p>
      </h2>
      <div className="Vision__board">
        <img className="google__logo" src={GoogleLogo} />
        <div className="oauth__box">
          <p className="oauth" contentEditable="true">This year, I will get into Google India.</p>
          <span contentEditable="true">&ldquo;Priyanshu Sharma&rdquo;</span>
        </div>
      </div>
      <div className='description'>
        Click for change text in the box above.
      </div>
    </>
  )
}

render(<Sidebar />, document.getElementById("root"));
