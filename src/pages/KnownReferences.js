import React from 'react'
import PatentData from '../Assets_Data/patent_references.json';
import Nav from "./Nav";

function KnownReferences() {
  return (
    
    <div className="references">
       
        <table>
        <h2>Known References</h2>
        <tr>
          <th>Type</th>
          <th>Patent Country</th>
          <th>Patent Number</th>
        </tr>
        {PatentData.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.type}</td>
              <td>{val.country_code}</td>
              <td>{val.number}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default KnownReferences