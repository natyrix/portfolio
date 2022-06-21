import React from 'react'
import './portfolio.css'

export default function Portfolio() {
  return (
    <div className='portfolio'>
        <h2>PORTFOLIO</h2>
        <div className="portfolio-title">
        <div className="portfolio-title-item active">
                All
            </div>
            <div className="portfolio-title-item">
                Web Applications
            </div>
            <div className="portfolio-title-item">
                Mobile Applications
            </div>
            <div className="portfolio-title-item">
                Desktop Applications
            </div>
        </div>
    </div>
  )
}
