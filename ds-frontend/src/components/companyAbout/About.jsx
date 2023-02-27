import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./about.scoped.css";
import TopNav from '../topnav/TopNav'

function About(props) {
  const id = "631085b05e9006200d8f7c79";

  const [about, setAbout] = useState("");

  // const getCompanyProfile = async () => {
  //   const response = await axios.get(
  //     `http://localhost:3001/api/company/getcompany/${id}`
  //   );

  //   if (response.status === 200) {
  //     setAbout(response.data.company.about);
  //   } else {
  //     console.log("Error Occured");
  //   }
  // };

  // useEffect(() => {
  //   getCompanyProfile();
  // }, [id]);

  return (
    <div>
      {/* <div className="about-header">Sample Heading</div>
      <div className="about-component">
      <TopBar/>
        <div className="about-heading">About Us </div>
        <div className="about-container">
          <div className="about-company-para">{props.about}</div>{" "}
        </div>
        <div className="about-company-container" >
        <img 
          src="
          https://previews.123rf.com/images/chudtsankov/chudtsankov1607/chudtsankov160700278/61547748-happy-green-recycle-bin-cartoon-mascot-character-waving-for-greeting-illustration-isolated-on-white-.jpg"
          alt=""
        />
      </div>
      </div> */}

<TopNav/>
       <div className='aboutpage-row'>
         <h2 className='aboutus-header'>About Us</h2>
        <div className='about-container'>
          <div className='about-container1'>
           <div className="aboupage-content">
           <h4>Welcome To Our Company.This is the details of our Recycling Company</h4>  <br/>
            {props.about}
            </div>
           
        
           
          </div>
          <div className='about-container3'>
            <div className="about-container2">
            <img className="img-aboutpage"
          src="
          https://previews.123rf.com/images/chudtsankov/chudtsankov1607/chudtsankov160700278/61547748-happy-green-recycle-bin-cartoon-mascot-character-waving-for-greeting-illustration-isolated-on-white-.jpg"
          alt=""
        />
            </div>
         
          </div>
        </div>
        </div>
    </div>
  );
}

export default About;
