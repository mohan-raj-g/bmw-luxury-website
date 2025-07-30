export default function Footer() {
  return (
    <footer className="w-full py-6 bg-black bg-opacity-60 text-center text-gray-500 fixed bottom-0 left-0 z-50">
      &copy; {new Date().getFullYear()} BMW Luxury Experience. All rights reserved.
    </footer>
  )
}