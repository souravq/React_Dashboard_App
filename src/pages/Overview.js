import React from 'react';
import Patent from '../Assets_Data/patent.json';


function Overview() {
  return(
    <div className="overview">
        
        {Patent.map((val, key) => {
          return (
        <div className="row patent_info">
          <h2>Overview</h2><br/>
          <h3>Patent Data</h3><br/>
            <div className="content" >
              <h4 >ISO Country Code:</h4> <p >{val.patent.iso_country_code}</p>
            </div>
            <div className="content">
            <h4>Number:</h4><p> {val.patent.number}</p>
            </div>
            <div className="content">
            <h4>Kind Code:</h4><p> {val.patent.kind_code}</p> 
            </div><br/>
        
        <h3>Biblographic Details</h3><br/>
            <div className="content">
            <h4>Priority Date:</h4><p> {val.biblographic_details.priority_date}</p>
            </div>
            <div className="content">
            <h4>Title:</h4><p> {val.biblographic_details.title}</p>
            </div>
            <div className="content">
            <h4>Abstract:</h4><p> {val.biblographic_details.abstract}</p> 
            </div>

            {val.biblographic_details.classfications.map((val1, key) => {
          return (
            <div>
            <div className="content">
            <h4>Class:</h4><p> {val1.class}</p>
            </div>
            <div className="content">
            <h4>Description:</h4><p> {val1.description}</p>
            </div>
            </div>
            )
          })}
            
        </div>

        
          )
         })}
    </div>
  )
}

export default Overview