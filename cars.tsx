import AnimatedPage from '../components/AnimatedPage'

const cars = [
  {
    id: 'm8',
    name: 'BMW M8',
    image: '/images/bmw-m8.jpg',
    inr: 17000000,
    usd: 204000,
    euro: 189000,
  },
  // Add more cars as desired
]

export default function Cars() {
  return (
    <AnimatedPage>
      <div className="pt-24 px-10">
        <h2 className="text-4xl font-bold text-white mb-8">Our Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.map(car => (
            <div key={car.id} className="bg-gray-900 rounded-lg shadow-lg p-4 flex flex-col items-center">
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded" />
              <h3 className="text-white text-xl mt-4">{car.name}</h3>
              <div className="text-gray-400 mt-2">From ₹{car.inr.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  )
}