import Link from "next/link"

function Navbar() {
  return (
  <nav className="flex justify-between items-center bg-red-800 px-8 py-3">
    <Link  className="text-white font-bold" href={'/'}>Sai MongoDB CRUD</Link>
    <Link className="bg-white p-2" href={'/addTopic'}> Add a New Topic</Link>
  </nav>
  )
}

export default Navbar