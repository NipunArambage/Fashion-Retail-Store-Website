import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 font-sans">
      <Navbar />
      
      <main className="pt-24 min-h-screen">
        {/* Hero Section */}
        <div className="text-center py-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 text-white mx-8 mt-8 rounded-3xl shadow-2xl shadow-indigo-300/50">
          <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">Welcome to MODISH</h1>
          <p className="text-2xl mb-8 opacity-90">Discover the latest trends in fashion</p>
          <button className="bg-white text-indigo-600 px-12 py-4 text-xl font-semibold rounded-full hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
            Shop Now
          </button>
        </div>
        
        {/* Featured Section */}
        <section className="py-12 px-8 max-w-7xl mx-auto">
          <h2 className="text-center text-4xl font-bold mb-12 text-gray-800">Featured Collections</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Men's Collection */}
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-200 transition-all duration-300 cursor-pointer">
              <div className="text-6xl mb-4 animate-float">👔</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">Men's Collection</h3>
              <p className="text-gray-600">Explore stylish menswear</p>
            </div>
            
            {/* Women's Collection */}
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-200 transition-all duration-300 cursor-pointer">
              <div className="text-6xl mb-4 animate-float-delay-1">👗</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">Women's Collection</h3>
              <p className="text-gray-600">Discover elegant styles</p>
            </div>
            
            {/* Footwear */}
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-200 transition-all duration-300 cursor-pointer">
              <div className="text-6xl mb-4 animate-float-delay-2">👟</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">Footwear</h3>
              <p className="text-gray-600">Step into comfort</p>
            </div>
            
            {/* Accessories */}
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-200 transition-all duration-300 cursor-pointer">
              <div className="text-6xl mb-4 animate-float-delay-3">👜</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">Accessories</h3>
              <p className="text-gray-600">Complete your look</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
