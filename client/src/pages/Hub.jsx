import { Link } from "react-router-dom";
export default function Hub() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-orange-100 to-rose-500">
      <h1 className="text-4xl">Hub</h1>
      <Link className="underline" to={"/phone"}>
        Phone
      </Link>
    </div>
  );
}
