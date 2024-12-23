import React from 'react'

const Client = (
  {data} : {
    data: any
  }
) => {
  return (
    <div className='storyItems'> 
    {data.map((item: any, index: number) => (
      <div key={index}>
        <p>名前: {item.username}</p>
        <p>性別: {item.gender}</p>
        <p>業種: {item.industry}</p>
      </div>
    ))}
  </div>
  )
}

export default Client