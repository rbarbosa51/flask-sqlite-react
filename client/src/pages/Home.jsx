import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-orange-100 to-rose-500">
      <h1 className="text-4xl">Home</h1>
      <Link className="underline" to={"/hub"}>
        Hub
      </Link>
    </div>
  );
}
