import { Link } from "react-router-dom"
export default function Hub(){
    return (
        <div className="h-screen bg-gradient-to-b from-orange-100 to-rose-500 flex-col flex justify-center items-center">
        <h1 className="text-4xl">Hub</h1>
        <Link className="underline" to={'/phone'}>Phone</Link>
        </div>
    )
}