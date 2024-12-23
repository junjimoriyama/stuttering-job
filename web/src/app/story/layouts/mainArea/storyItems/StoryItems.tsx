import StoryAccordion from './storyAccordion/StoryAccordion'
import './storyItems.scss'

const StoryItems = async() => {

  const res = await fetch("http://localhost:3000/api/v1/forms", {
    method: "GET"
  })

  if(!res) {
    console.log('error')
  }

  const allDatabaseData = await res.json()

  return (
    <div className='storyItems'> 
    {
      allDatabaseData.map((data:any, index:number) => {
        return(
          <StoryAccordion 
          data={data}
          />
        )
      })
    }
    </div>
  )
}

export default StoryItems























































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
