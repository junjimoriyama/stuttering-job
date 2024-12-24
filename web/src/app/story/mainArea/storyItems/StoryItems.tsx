
import './storyItems.scss'
import { getStoryItems } from './getStoryItems';
import RenderStoryItems from './RenderStoryItems';
// import Pagination from '../components/pagination/Pagination';

const StoryItems = async() => {

  const data = await getStoryItems();
  
  return (
    <>
    <RenderStoryItems data={data}/>
    </>
  )
}

export default StoryItems




















// 'use client'

// import { useEffect, useState } from 'react'
// import { getStoryItems } from '../getStoryItems'
// import StoryAccordion from './storyAccordion/StoryAccordion'
// import './storyItems.scss'
// import Client from './Client'

// const StoryItems = ({data} : {
//   data: any
// }) => {

//   console.log("dataは", data)
//   // const data = await getStoryItems();
  

//   return (
//     <div className='storyItems'> 
//     {data.map((item: any, index: number) => (
//       <div key={index}>
//         <p>名前: {item.username}</p>
//         <p>性別: {item.gender}</p>
//         <p>業種: {item.industry}</p>
//       </div>
//     ))}
//   </div>
//   )
// }

// export default StoryItems

