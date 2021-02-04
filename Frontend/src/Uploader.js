// import React, { useState } from "react";
// import axios from "axios";

// export default function Uploader() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [loaded, setLoaded] = useState(0);

//   onClickHandler = () => {
//     const data = new FormData();
//     data.append("file", selectedFile);
//     axios
//       .post("http://localhost:8000/upload", data, {
//         // receive two    parameter endpoint url ,form data
//       })
//       .then((res) => {
//         // then print response status
//         console.log(res.statusText);
//       });
//   };

//   onChangeHandler = (event) => {
//     console.log(event.target.files[0]);
//     setSelectedFile({
//       selectedFile: event.target.files[0],
//       loaded: 0,
//     });
//   };

//   onClickHandler = () => {
//     const data = new FormData();
//     data.append("file", selectedFile);
//   };

//   axios
//     .post("http://localhost:8000/upload", data, {
//       // receive two parameter endpoint url ,form data
//     })
//     .then((res) => {
//       // then print response status
//       console.log(res.statusText);
//     });

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6">
//           <form method="post" action="#" id="#">
//             <div className="form-group files">
//               <label>Upload Your File </label>
//               <input type="photo" name="photo" onChange={onChangeHandler} />
//               <button
//                 type="button"
//                 class="btn btn-success btn-block"
//                 onClick={onClickHandler}
//               >
//                 Upload
//               </button>
//             </div>
//           </form>
//         </div>
//         <div class="col-md-6">
//           <form method="post" action="#" id="#">
//             <div class="form-group files color">
//               <label>Upload Your File </label>
//               <input type="photo" class="form-control" multiple="" />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
