// import './storyItem.scss'

// const StoryItem = async() => {
//   const res = await fetch("http://localhost:3000/api/v1/forms", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   if(!res.ok) {
//     console.log('error')
//   }
//   const allDatabaseData = await res.json();

//   return (
//     <div className="storyItem">
//       {allDatabaseData.map((item: any) => {
//         return (
//         <>
//           <ul className="accordion_details">
//             <li>年代: {item.age}</li>
//             <li>性別: {item.gender}</li>
//             <li>業種: {item.industry}</li>
//           </ul>
//         </>
//         );
//       })}
//     </div>
//   );
// };

// export default StoryItem