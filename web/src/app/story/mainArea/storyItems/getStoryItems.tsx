

'use server'

export const getStoryItems = async () => {
  const res = await fetch("http://localhost:3000/api/v1/forms", {
    method: "GET"
  })

  if(!res) {
    console.log('error')
  }

  const allDatabaseData = await res.json()

  return allDatabaseData
}

// import StoryItems from "./storyItems/StoryItems"

// // 'use server'

// export const getStoryItems = async () => {
//   const res = await fetch("http://localhost:3000/api/v1/forms", {
//     method: "GET"
//   })

//   if(!res) {
//     console.log('error')
//   }

//   const allDatabaseData = await res.json()

//   return (
//     < StoryItems data={allDatabaseData} />
//   )
// }