// import React from 'react'

// export default function Proile() {
//   return (
//     <div>Proile</div>
//   )
// }




import React from "react";
import { useParams } from "react-router";

function Proile() {
  const { id } = useParams();
  return (
    <div>
      Profile
      <br />
      Id :{id}
    </div>
  );
}

export default Proile;
