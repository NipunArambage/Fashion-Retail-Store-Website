import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white font-sans">
      <Navbar />
      
      <main className="pt-24 min-h-screen">
        {/* Hero Section */}
        <div className="text-center py-16 bg-gradient-to-r from-black via-gray-900 to-black text-white mx-8 mt-8 rounded-3xl shadow-2xl shadow-gray-400/50">
          <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">Welcome to MODISH</h1>
          <p className="text-2xl mb-8 opacity-90">Discover the latest trends in fashion</p>
          <button className="bg-white text-black px-12 py-4 text-xl font-semibold rounded-full hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
            Shop Now
          </button>
        </div>
        
        {/* Featured Section */}
        <section className="py-20 px-8 max-w-7xl mx-auto">
          <h2 className="text-center text-5xl font-bold mb-20 text-gray-800">Featured Collections</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Men's Collection */}
            <div className="bg-white p-16 rounded-3xl shadow-xl border-3 border-gray-200 hover:bg-black hover:text-white hover:border-black hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 cursor-pointer group min-h-[450px] flex flex-col justify-between">
              <div className="text-9xl text-center animate-float">👔</div>
              <h3 className="text-4xl font-bold text-left text-gray-800 group-hover:text-white">Men's</h3>
            </div>
            
            {/* Women's Collection */}
            <div className="bg-white p-16 rounded-3xl shadow-xl border-3 border-gray-200 hover:bg-black hover:text-white hover:border-black hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 cursor-pointer group min-h-[450px] flex flex-col justify-between">
              <div className="text-9xl text-center animate-float-delay-1">👗</div>
              <h3 className="text-4xl font-bold text-left text-gray-800 group-hover:text-white">Women's</h3>
            </div>
            
            {/* Accessories */}
            <div className="bg-white p-16 rounded-3xl shadow-xl border-3 border-gray-200 hover:bg-black hover:text-white hover:border-black hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 cursor-pointer group min-h-[450px] flex flex-col justify-between">
              <div className="text-9xl text-center animate-float-delay-3">👜</div>
              <h3 className="text-4xl font-bold text-left text-gray-800 group-hover:text-white">Accessories</h3>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
