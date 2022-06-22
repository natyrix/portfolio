import React from 'react'
import './portfolio.css'
import { data } from './data'

export default function Portfolio() {
    const [selectedTag, setSelectedTag] = React.useState("All")
    function filterList(val){
        setSelectedTag(val)
    }
  return (
    <div className='portfolio'>
        <h2>PORTFOLIO</h2>
        <div className="portfolio-title">
        <div className={`portfolio-title-item ${selectedTag==='All'&& 'active'}`} 
        onClick={()=>filterList("All")}>
                All
            </div>
            <div className={`portfolio-title-item ${selectedTag==='Web Application'&& 'active'}`} 
            onClick={()=>filterList("Web Application")}
            >
                Web Application
            </div>
            <div className={`portfolio-title-item ${selectedTag==='Mobile Application'&& 'active'}`} 
            onClick={()=>filterList("Mobile Application")}>
                Mobile Application
            </div>
            <div className={`portfolio-title-item ${selectedTag==='Desktop Application'&& 'active'}`} 
            onClick={()=>filterList("Desktop Application")}>
                Desktop Application
            </div>
        </div>
      <a href="https://drive.google.com/file/d/1zyQU_JG6GHmQAjZPlnLodqgRsV_pJta7/view?usp=sharing" className='navbody-resume-link'>Resume?</a>

        <div className='portfolio-body'>
            {
                data.map(d=>{
                    if(selectedTag == 'All'){
                        return <div className="portfolio-body-item" key={d.id}>
                            <h3>{d.title}</h3>
                            <hr />
                            <p>{d.desc}</p>
                            <hr />
                            <div className="portfolio-body-item-list">
                                {d.languages.map(lan=>(
                                    <span key={`${d.id}-${lan}`}>{lan}</span>
                                ))}
                            </div>
                            <hr />
                            <div className="portfolio-body-item-list">
                                <a href={d.git_link}>Github</a>
                            </div>
                            <hr />
                            <div className="portfolio-body-item-list">
                                {d.tag.map(t=>(
                                    <span key={`${d.id}-${t}`}>{t}</span>
                                ))}
                            </div>
                        </div>
                    }
                    else{
                        const f = d.tag.find(e => e == selectedTag)
                        if(f!=undefined){
                            return <div className="portfolio-body-item">
                            <h3>{d.title}</h3>
                            <hr />
                            <p>{d.desc}</p>
                            <hr />
                            <div className="portfolio-body-item-list">
                                {d.languages.map(lan=>(
                                    <span>{lan}</span>
                                ))}
                            </div>
                            <hr />
                            <div className="portfolio-body-item-list">
                                <a href={d.git_link}>Github</a>
                            </div>
                            <hr />
                            <div className="portfolio-body-item-list">
                                {d.tag.map(t=>(
                                    <span>{t}</span>
                                ))}
                            </div>
                        </div>
                        }
                    }
                })
            }
        </div>
    </div>
  )
}
