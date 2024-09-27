import {PhoneComponent, RippleBtn} from '../components'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

// const messages = [
//     {user:'Pepe el Mejor',message: 'You were my brother. '},
//     {user:'Maria del Barrio',message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non aliquet nunc, ac feugiat nibh. Sed et maximus est. Morbi tortor ante, tincidunt eget nulla vitae, convallis congue augue. Duis sed magna in nisl tempor vulputate quis eu tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt, sem quis mattis interdum, leo nisi rutrum leo, suscipit ullamcorper arcu nibh eget felis. Etiam commodo augue diam, vel sagittis sem interdum a"},
//     {user:'Juan Primero',message: 'I hate you'},
//     {user:'Oscar de Leon', message: 'Soy el mejor'},
//     {user:'Pancho Villanueva',message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non aliquet nunc, ac feugiat nibh. Sed et maximus est. Morbi tortor ante, tincidunt eget nulla vitae, convallis congue augue. Duis sed magna in nisl tempor vulputate quis eu tortor."},
//     {user:'Pepe',message: 'I loved you.'},
//     {user:'Juan',message: 'I hate you'},
//     {user:'Paco Ultimo', message: 'Soy el mejor - Vite'},
// ]
export default function Phone(){
    const [messages, setMessages] = useState()
    useEffect(() => {
        fetch('api/getposts')
        .then(res => res.text())
        .then(data => setMessages(JSON.parse(data)))
    },[messages])
    return (
        <div className="min-h-screen blue-gradient">
            <Link to={'/'} className='absolute pt-1 pl-4'>
                <RippleBtn className={'cursor-pointer rounded-xl border border-blue-800 bg-opacity-0 px-4 py-2 text-center text-xl text-blue-800 backdrop-blur-sm backdrop-filter'} rippleColor={'bg-blue-300'}>Go Back</RippleBtn>
            </Link>
            
            <h1 className="text-4xl text-center pt-1 text-blue-800 font-bold">Comment Section</h1>
            <div className="flex w-full">
                <div className="h-screen flex-1 flex justify-center items-center">
                    <PhoneComponent className={'h-[90%] '}>
                        <div className="text-blue-600 mt-6 text-3xl">Scroll down</div>
                        <div className="overflow-y-scroll scrollbar-color py-8 flex flex-col">
                            {messages && messages.map((message, key) => (
                                <div key={key} className="chat chat-start last:mb-12">
                                    <div className="chat-header text-blue-900/80">
                                        {message.username}
                                    </div>
                                    <div className={`chat-bubble ${key % 2 === 0 ? 'bg-blue-500' : 'bg-blue-600'} text-white/90 min-w-64`}>
                                        {message.message}
                                    </div>
                                </div>
                            ))}
                            <div className='divider divider-vertical text-blue-900/80'>Write comment</div>
                            <form action='api/create' method='POST' className='flex flex-col items-center'>
                                <label htmlFor='username' className="input input-bordered flex items-center gap-2 outline outline-blue-500 w-[80%] mb-4">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                  </svg>
                                  <input type="text" className="" id='username' name='username' placeholder="Username" />
                                </label>
                                <textarea id="message" name="message" className="textarea textarea-bordered textarea-lg outline outline-blue-500 w-[80%] mb-4" placeholder="Leave a positive message"></textarea>
                                <input type='submit' className='input text-blue-500 outline outline-blue-500 w-[80%]' value={'Send'} />
                            </form>
                            <div className='mb-14'></div>
                        </div>
                    </PhoneComponent>
                </div>
                
                </div>
        </div>
    )
}