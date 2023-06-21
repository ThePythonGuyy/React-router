import React from "react";
import styled from "styled-components";
// import styled from 'styled-components'
import { useRouteLoaderData, Link, useLoaderData } from "react-router-dom";
import axios from "axios";

const Careers = () => {
  const careers = useLoaderData()
  
  return (
    <Career>
      { careers &&
        careers.map((career) => (
          <Link to="/" key={career.id} >
            <div>
              <h1>{career.title}</h1>
              <p>{career.location}</p>
            </div>
          </Link>
        ))}
    </Career>
  );
};

export default Careers;

export const careersLoader = async () => {
  // const res = await axios
  // .get("http://localhost:4000/careers")

  // const data = res.data;

  // return data;

  const data = axios
    .get("http://localhost:4000/careers")
    .then((res) => {
      const dt = res.data;
      return dt;
    })
    .catch((err) => {
      console.log(err.message);
      throw Error('Could not load careers');
      return null;
    })

    return data;
};

const Career = styled.div`
  a{
    pointer-events: none;
    text-decoration: none;
    
    div{
      
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      gap: 8px;
      background-color: rgba(0,0,0,0.3);
      padding: 5px 7px;
      margin-bottom: 8px;
      text-decoration: none;
      h1{
        font-size: 16px;
        margin: 0;
        text-decoration: underline;
      }
      p{
        font-size: 12px;
        text-decoration: none;
        margin: 0;
        
      }
    }
  }
`;
