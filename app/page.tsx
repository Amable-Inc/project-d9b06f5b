export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-700 to-pink-600">
      {/* Header */}
      <header className="bg-purple-900 text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-4xl font-bold tracking-wider">🌮 TACO BELL</h1>
          <nav className="flex gap-6 text-lg">
            <a href="#tacos" className="hover:text-yellow-300 transition">Tacos</a>
            <a href="#cheesecake" className="hover:text-yellow-300 transition">Cheesecake</a>
            <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=1600&h=900&fit=crop" 
          alt="Delicious tacos" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-7xl font-bold mb-4 drop-shadow-lg">Welcome to Taco Bell</h2>
          <p className="text-3xl mb-8 drop-shadow-md">Where Tacos Meet Cheesecake</p>
          <button className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-full text-xl font-bold hover:bg-yellow-300 transition transform hover:scale-105">
            Order Now
          </button>
        </div>
      </section>

      {/* Tacos Section */}
      <section id="tacos" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-purple-900">Our Amazing Tacos</h2>
          <p className="text-center text-gray-600 mb-12 text-xl">Handcrafted with love and authentic flavors</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&h=400&fit=crop" 
                alt="Classic beef taco" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-purple-900">Classic Beef Taco</h3>
                <p className="text-gray-700 mb-4">Seasoned ground beef, fresh lettuce, cheese, and our signature sauce</p>
                <p className="text-3xl font-bold text-orange-600">$3.99</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=600&h=400&fit=crop" 
                alt="Chicken taco" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-purple-900">Grilled Chicken Taco</h3>
                <p className="text-gray-700 mb-4">Tender grilled chicken with pico de gallo and avocado crema</p>
                <p className="text-3xl font-bold text-orange-600">$4.49</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1599974579688-8dbdd335e16f?w=600&h=400&fit=crop" 
                alt="Veggie taco" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-purple-900">Veggie Supreme</h3>
                <p className="text-gray-700 mb-4">Grilled peppers, onions, black beans, and fresh guacamole</p>
                <p className="text-3xl font-bold text-orange-600">$3.79</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cheesecake Section */}
      <section id="cheesecake" className="py-20 px-6 bg-gradient-to-b from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-purple-900">Divine Cheesecakes</h2>
          <p className="text-center text-gray-600 mb-12 text-xl">The perfect sweet ending to your meal</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1533134242443-d4ea1e2a8d45?w=600&h=400&fit=crop" 
                alt="Classic cheesecake" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-purple-900">Classic New York</h3>
                <p className="text-gray-700 mb-4">Rich and creamy with a graham cracker crust</p>
                <p className="text-3xl font-bold text-pink-600">$5.99</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=600&h=400&fit=crop" 
                alt="Strawberry cheesecake" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-purple-900">Strawberry Delight</h3>
                <p className="text-gray-700 mb-4">Topped with fresh strawberries and berry compote</p>
                <p className="text-3xl font-bold text-pink-600">$6.49</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop" 
                alt="Chocolate cheesecake" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-purple-900">Chocolate Heaven</h3>
                <p className="text-gray-700 mb-4">Decadent chocolate cheesecake with chocolate ganache</p>
                <p className="text-3xl font-bold text-pink-600">$6.99</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-purple-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Visit Us Today!</h3>
          <p className="text-xl mb-2">123 Flavor Street, Food City, FC 12345</p>
          <p className="text-xl mb-6">Phone: (555) TACO-BELL</p>
          <p className="text-lg text-purple-300">Open Daily: 11AM - 10PM</p>
        </div>
      </footer>
    </div>
  );
}
