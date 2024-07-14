import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [messages,setMessages] = useState()
  useEffect(() => {
    fetch('api/getposts')
    .then(res => res.text())
    .then(data => {
      //console.log(JSON.parse(data))
      setMessages(JSON.parse(data))
    })
  }, [])
  return (
    <div className='min-h-screen bg-purple-200'>
      <div className='flex justify-center items-center'>
        <img src={viteLogo} className='h-20' alt="" />
        <img src={reactLogo}className='h-20' alt="" />
      </div>
      <div className='flex flex-col items-center justify-center mt-10'>
        <form action="api/create" method='POST' className='flex flex-col'>
          <label htmlFor="name">Enter a  Name</label>
          <input className='mb-2' type="text" id="name" name='name'/><br />
          <label htmlFor="message">Enter message</label>
          <textarea id='message' name='message' /><br />
          <input type='submit' className='ring-2 ring-purple-800 rounded' />
        </form>
      </div>
      {/* <hr /> */}
      <div className="divider">Comment Section</div>
      <div className='flex justify-center text-center mx-10'>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">See comments</div>
          <div className="collapse-content">
          {messages && messages.map(item => (
            <div key={item.id} className='chat chat-start'>
              <div className='chat-header'>{item.name}</div>
              <div className='chat-bubble chat-bubble-primary'>{item.message}</div>
            </div>
          ))}
          </div>
        </div>
      </div>
      <div>

      </div>
        
    </div>
  )
}

export default App
