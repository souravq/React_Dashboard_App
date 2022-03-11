import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Patent from "./Patent";
import Info from "./Info";
import JoinSlack from "./JoinSlack";


function Home() {
  return (
    <div className="home">
      		<Nav />
     		<div className="home_row">
     		<Patent />
            <Info />
     		</div>
     		<JoinSlack/>     
          
    </div>
  );
}

export default Home;
