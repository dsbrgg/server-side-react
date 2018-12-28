import React from  'react'

const Home = () => {
  return (
    <div>
      <div>I'm home again</div>
      <button onClick={() => console.log('hi')}>Press</button>
    </div>
  )
}

export default { 
  component: Home 
}