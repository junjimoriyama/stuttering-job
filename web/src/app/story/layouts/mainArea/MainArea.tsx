import React from "react";
// import StoryItems from "./storyItems/StoryItems";
import './mainArea.scss'
import StoryItems from "./storyItems/StoryItems";
import { getStoryItems } from "./getStoryItems";

const MainArea = async() => {
  // const data = await getStoryItems();

  return (
    <div className="main_area">
       <StoryItems /> 
    </div>
  )
};

export default MainArea;


// import "./mainArea.scss";

// import React from "react";
// // import StoryItems from "./storyItems/StoryItems";
// import StoryAccordion from "./storyAccordion/StoryAccordion";

// const MainArea = async () => {
//   const res = await fetch("http://localhost:3000/api/v1/forms", {
//     method: "GET"
//   })

//   // 全てのデータ
//   const allDatabaseData = await res.json()

//   return (
//     <div className="main_area">
//       <div className='storyItems'> 
//     {
//       allDatabaseData.map((data:any, index:number) => {
//         return(
//           <StoryAccordion 
//           data={data}
//           />
//         )
//       })
//     }
//     </div>
//     </div>
//   )
// };

// export default MainArea;
// import "./mainArea.scss";

