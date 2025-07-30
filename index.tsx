import AnimatedPage from '../components/AnimatedPage'
import Car3DViewer from '../components/Car3DViewer'
import CurrencySwitcher from '../components/CurrencySwitcher'

export default function Home() {
  return (
    <AnimatedPage>
      <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-extrabold text-white mb-10 tracking-widest drop-shadow-lg">BMW Luxury Experience</h1>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10">
          <Car3DViewer modelPath="/models/bmw-car.glb" />
          <div className="mt-10 md:mt-0">
            <CurrencySwitcher inr={17000000} usd={204000} euro={189000} />
            <p className="text-gray-400 mt-2 text-xs">* Select currency to see price</p>
          </div>
        </div>
      </section>
    </AnimatedPage>
  )
}