import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
  const { id } = useParams();
  const careerDet = useLoaderData();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>{careerDet.title}</h2>
      <h3>{careerDet.salary}</h3>
      <h3>{careerDet.location}</h3>
    </div>
  );
};

export const careersDetLoader = async ({ params }) => {
  const { id } = params;

  const data = axios
    .get(`http://localhost:4000/careers/${id}`)
    .then((res) => {
      const dt = res.data;
      return dt;
    })
    .catch((err) => {
      console.log(err.message);
      throw Error('Could not find that career');
      return null;
    });

  return data;
};
export default CareerDetails;
