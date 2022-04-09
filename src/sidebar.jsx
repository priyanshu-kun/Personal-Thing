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
      {/* <form className="oauth__form">
          <div className="oauth__form__fields">
            <label className='custom-file-upload' htmlFor="file">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#7f7f7f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload-cloud"><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
              <p className='file-msg'>Choose a file</p>
              <input type="file" id="file" />
            </label>
            <label htmlFor="name"><p>Name</p><input id="name" placeholder='Name' /></label>
            <label htmlFor="name"><p>Name</p><input id="name" placeholder='Name' /></label>
            <label htmlFor="name"><p>Name</p><input id="name" placeholder='Name' /></label>
          </div>
      </form> */}
      <div className="Vision__board">
        <img className="google__logo" src={GoogleLogo} />
        <div className="oauth__box">
          <p className="oauth" contentEditable="true">This year, I will get into Google India.</p>
          <span contentEditable="true">&ldquo;Priyanshu Sharma&rdquo;</span>
        </div>
      </div>
    </>
  )
}

render(<Sidebar />, document.getElementById("root"));
