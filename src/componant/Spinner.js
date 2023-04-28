import spinner from "./3.gif";
import React from "react";

export default function Spinner() {
  return (
    <div className="text-center">
      <img src={spinner} alt="" />
    </div>
  );
}

// export default class Spinner extends Component {
//   render() {
//     return (
//       <div className="text-center">
//         <img src={spinner} alt="" />
//       </div>
//     );
//   }
// }
