export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-6 px-10 bg-black bg-opacity-60 fixed top-0 left-0 z-50">
      <div className="text-white text-2xl font-luxury tracking-widest">BMW Luxury</div>
      <div className="flex gap-8">
        <a href="/" className="text-gray-300 hover:text-white">Home</a>
        <a href="/cars" className="text-gray-300 hover:text-white">Models</a>
        <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
      </div>
    </nav>
  )
}