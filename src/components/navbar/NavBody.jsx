import React from 'react'
import './navbody.css'
import resume from '../../img/Natnael_Melese.pdf'

export default function NavBody() {
  return (
    <div className='navbody'>
      <h4>natrix277@gmail.com</h4>
      <h4>+251935932645</h4>
      {/* <a href="https://drive.google.com/file/d/1zyQU_JG6GHmQAjZPlnLodqgRsV_pJta7/view?usp=sharing" className='navbody-resume-link'>Resume?</a> */}
      <h4>
        <a href={resume} className='navbody-resume-link'>Resume?</a>
        {/* <a href="https://drive.google.com/file/d/1zyQU_JG6GHmQAjZPlnLodqgRsV_pJta7/view?usp=sharing" className='navbody-resume-link'>Resume?</a> */}
        {/* <a href="https://google.com" className='navbody-resume-link'>Resume?</a> */}
      </h4>
      {/* <h4>CONTACT</h4> */}
    </div>
  )
}
