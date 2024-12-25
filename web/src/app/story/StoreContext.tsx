'use client';

import React, { createContext, useContext, useState } from 'react';

const storyContext = createContext<{
  age: number,
  setAge: (value: number) => void,
  gender: string,
  setGender: (value: string) => void
}>({
  age: 0,
  setAge: () => {},
  gender: '',
  setGender: () => {},
})

export const StoryProvider = ({children}: {children: React.ReactNode}) => {
  const [ age, setAge ] = useState(0)
  const [ gender, setGender ] = useState('')

  return (
  <storyContext.Provider value={{
    age, 
    setAge,
    gender,
    setGender
    }}>
    {children}
  </storyContext.Provider>
  )
}


export const useStoryContext = () => useContext(storyContext)














































// 'use client';

// import React, { createContext, useContext, useState } from 'react';

// const StoryContext = createContext<{
//   age: string;
//   setAge: (value: string) => void;
// }>({
//   age: '',
//   setAge: () => {},
// });

// export const StoryProvider = ({ children }: { children: React.ReactNode }) => {
//   const [age, setAge] = useState('');

//   return (
//     <StoryContext.Provider value={{ age, setAge }}>
//       {children}
//     </StoryContext.Provider>
//   );
// };

// export const useStoryContext = () => useContext(StoryContext);