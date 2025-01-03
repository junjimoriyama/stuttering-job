// // next
// import { useRouter } from "next/navigation";
// // type
// import { allDataType } from "@/app/types/story";
// // style
// import "./storyPreview.scss";

// export const StoryPreview = ({
//   data,
// }: {
//   data: allDataType;
// }) => {

//   // router
//   const router = useRouter()

//   // 各体験談ページへ
//   const handleLinkStoryItem = (id: number) => {
//     router.push(`/story/storyItem/${id}`)
//   }

//   return (
//     <div className="story_preview_item">
//       <div className="story_preview_contents" 
//       onClick={() => handleLinkStoryItem(data.id)}
//       >
//         {/* <ul className="story_preview_List"> */}
//         {/* <div className={`story_preview_list ${isPageChangeEffect ? "isChange" : ''} `}> */}
//           <li className="story_preview_item_number">
//             <span className="story_preview_item_name_number">No</span>
//             <span className="story_preview_item_value">{data.id}</span>
//           </li>
//           <li className="story_preview_item_info">
//             <span className="story_preview_item_label">年代</span>
//             <span className="story_preview_item_value">{data.age}代</span>
//           </li>
//           <li className="story_preview_item_info">
//           <span className="story_preview_item_label">性別</span>
//           <span className="story_preview_item_value">{data.gender}</span>
//           </li>
//           <li className="story_preview_item_info">
//           <span className="story_preview_item_label">業種</span>
//           <span className="story_preview_item_value">{data.industry}</span>
//           </li>
//         {/* </ul> */}
//       </div>
//     </div>
//   );
// };


