// 'use client'

import { useEffect, useState } from 'react'
import { getStoryItems } from '../getStoryItems'
import StoryAccordion from './storyAccordion/StoryAccordion'
import './storyItems.scss'
import Client from './Client'

const StoryItems = async() => {

  const data = await getStoryItems();
  

  return (
    <Client data={data}/>
  )
}

export default StoryItems
// 'use client'

// import { useEffect, useState } from 'react'
// import { getStoryItems } from '../getStoryItems'
// import StoryAccordion from './storyAccordion/StoryAccordion'
// import './storyItems.scss'

// const StoryItems = () => {
//   const [allDatabaseData, setAllDatabaseData] = useState<any[]>([]);

//   const fetchData = async () => {
//     try {
//       const data = await getStoryItems(); // サーバーアクションを呼び出す
//       setAllDatabaseData(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData()
//   }, [])

//   console.log(allDatabaseData)


//   return (
//     <div className='storyItems'> 
//     {allDatabaseData?.map((data:any, index:number) => {
//         return(
//           <StoryAccordion 
//           data={data}
//           />
//         )
//       })
//     }
//     </div>
//   )
// }

// export default StoryItems

// <div className='storyItems'> 
// {
//   allDatabaseData.map((data:any, index:number) => {
//     return(
//       <StoryAccordion 
//       data={data}
//       />
//     )
//   })
// }
// </div>

// const allDatabaseData = await getStoryItems()




// const res = await fetch("http://localhost:3000/api/v1/forms", {
//   method: "GET"
// })

// if(!res) {
//   console.log('error')
// }

// const allDatabaseData = await res.json()















































// import AccordionItem from "./accordionBtn/AccordionBtn";
// import "./storyItems.scss";

// const StoryItems = async () => {
//   const res = await fetch("http://localhost:3000/api/v1/forms", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (!res.ok) {
//     console.log("error");
//     return <div>データの取得に失敗しました。</div>;
//   }

//   const allDatabaseData = await res.json();

//   return (
//     <div className="storyItems">
//       {allDatabaseData.map((item: any, index: number) => (
//         <AccordionItem key={index} item={item} />
//       ))}
//     </div>
//   );
// };

// export default StoryItems;
