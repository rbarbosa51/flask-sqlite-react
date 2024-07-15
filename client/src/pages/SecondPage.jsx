import { Link} from 'react-router-dom'
export default function SecondPage(){
  return (
    <div className="h-screen flex flex-col items-center gap-8 bg-gradient-to-b from-orange-100 to-rose-300">
      <h2 className='text-5xl'>Second Page</h2>
      <Link to={'/'} className='underline text-blue-500 ' >Go back</Link>
    </div>
  )
}