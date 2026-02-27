export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-700 to-pink-600">
      {/* Header */}
      <header className="bg-purple-900 text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-4xl font-bold tracking-wider">🌮 TACO BELL</h1>
          <nav className="flex gap-6 text-lg">
            <a href="#menu" className="hover:text-yellow-300 transition">Menu</a>
            <a href="#tacos" className="hover:text-yellow-300 transition">Tacos</a>
            <a href="#cheesecake" className="hover:text-yellow-300 transition">Cheesecake</a>
            <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1599974579688-8dbdd335e16f?w=1920&h=1080&fit=crop&q=80" 
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

      {/* Full Menu Section */}
      <section id="menu" className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-purple-900">Full Menu</h2>
          <p className="text-center text-gray-600 mb-12 text-xl">All our delicious offerings</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Tacos Menu */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold mb-6 text-orange-600 border-b-4 border-orange-600 pb-2">🌮 Tacos</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-purple-900">Classic Beef Taco</h4>
                    <p className="text-gray-600 text-sm">Seasoned ground beef, lettuce, cheese, signature sauce</p>
                  </div>
                  <span className="font-bold text-orange-600 text-lg ml-4">$3.99</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-purple-900">Grilled Chicken Taco</h4>
                    <p className="text-gray-600 text-sm">Tender chicken, pico de gallo, avocado crema</p>
                  </div>
                  <span className="font-bold text-orange-600 text-lg ml-4">$4.49</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-purple-900">Veggie Supreme</h4>
                    <p className="text-gray-600 text-sm">Grilled peppers, onions, black beans, guacamole</p>
                  </div>
                  <span className="font-bold text-orange-600 text-lg ml-4">$3.79</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-purple-900">Spicy Shrimp Taco</h4>
                    <p className="text-gray-600 text-sm">Blackened shrimp, cabbage slaw, chipotle mayo</p>
                  </div>
                  <span className="font-bold text-orange-600 text-lg ml-4">$5.49</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-purple-900">Carnitas Taco</h4>
                    <p className="text-gray-600 text-sm">Slow-cooked pork, cilantro, onions, lime</p>
                  </div>
                  <span className="font-bold text-orange-600 text-lg ml-4">$4.29</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-purple-900">Fish Taco</h4>
                    <p className="text-gray-600 text-sm">Beer-battered fish, cabbage, tangy sauce</p>
                  </div>
                  <span className="font-bold text-orange-600 text-lg ml-4">$4.99</span>
                </div>
              </div>
            </div>

            {/* Cheesecakes Menu */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold mb-6 text-pink-600 border-b-4 border-pink-600 pb-2">🍰 Cheesecakes</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-purple-900">Classic New York</h4>
                    <p className="text-gray-600 text-sm">Rich and creamy with graham cracker crust</p>
                  </div>
                  <span className="font-bold text-pink-600 text-lg ml-4">$5.99</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-purple-900">Strawberry Delight</h4>
                    <p className="text-gray-600 text-sm">Fresh strawberries and berry compote</p>
                  </div>
                  <span className="font-bold text-pink-600 text-lg ml-4">$6.49</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-purple-900">Chocolate Heaven</h4>
                    <p className="text-gray-600 text-sm">Chocolate cheesecake with chocolate ganache</p>
                  </div>
                  <span className="font-bold text-pink-600 text-lg ml-4">$6.99</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-purple-900">Caramel Pecan</h4>
                    <p className="text-gray-600 text-sm">Topped with caramel sauce and toasted pecans</p>
                  </div>
                  <span className="font-bold text-pink-600 text-lg ml-4">$6.99</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-purple-900">Lemon Blueberry</h4>
                    <p className="text-gray-600 text-sm">Tangy lemon with fresh blueberry topping</p>
                  </div>
                  <span className="font-bold text-pink-600 text-lg ml-4">$6.49</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-purple-900">Oreo Crumble</h4>
                    <p className="text-gray-600 text-sm">Cookies and cream with Oreo crust</p>
                  </div>
                  <span className="font-bold text-pink-600 text-lg ml-4">$6.99</span>
                </div>
              </div>
            </div>

            {/* Sides Menu */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold mb-6 text-green-600 border-b-4 border-green-600 pb-2">🍟 Sides</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-purple-900">Chips & Salsa</h4>
                    <p className="text-gray-600 text-sm">Fresh tortilla chips with house salsa</p>
                  </div>
                  <span className="font-bold text-green-600 text-lg ml-4">$3.49</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-purple-900">Chips & Guacamole</h4>
                    <p className="text-gray-600 text-sm">Fresh guacamole made daily</p>
                  </div>
                  <span className="font-bold text-green-600 text-lg ml-4">$5.49</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-purple-900">Mexican Rice</h4>
                    <p className="text-gray-600 text-sm">Seasoned rice with vegetables</p>
                  </div>
                  <span className="font-bold text-green-600 text-lg ml-4">$2.99</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-purple-900">Refried Beans</h4>
                    <p className="text-gray-600 text-sm">Creamy refried beans with cheese</p>
                  </div>
                  <span className="font-bold text-green-600 text-lg ml-4">$2.99</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-purple-900">Loaded Nachos</h4>
                    <p className="text-gray-600 text-sm">Cheese, jalapeños, sour cream, beef</p>
                  </div>
                  <span className="font-bold text-green-600 text-lg ml-4">$7.99</span>
                </div>
              </div>
            </div>

            {/* Drinks Menu */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold mb-6 text-blue-600 border-b-4 border-blue-600 pb-2">🥤 Drinks</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-purple-900">Classic Margarita</h4>
                    <p className="text-gray-600 text-sm">Lime, tequila, triple sec, salt rim</p>
                  </div>
                  <span className="font-bold text-blue-600 text-lg ml-4">$8.99</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-purple-900">Horchata</h4>
                    <p className="text-gray-600 text-sm">Traditional Mexican rice drink</p>
                  </div>
                  <span className="font-bold text-blue-600 text-lg ml-4">$3.99</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-purple-900">Fresh Limeade</h4>
                    <p className="text-gray-600 text-sm">Made with real limes</p>
                  </div>
                  <span className="font-bold text-blue-600 text-lg ml-4">$3.49</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-purple-900">Mexican Coca-Cola</h4>
                    <p className="text-gray-600 text-sm">Glass bottle, made with real sugar</p>
                  </div>
                  <span className="font-bold text-blue-600 text-lg ml-4">$2.99</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-purple-900">Jarritos</h4>
                    <p className="text-gray-600 text-sm">Various flavors available</p>
                  </div>
                  <span className="font-bold text-blue-600 text-lg ml-4">$2.99</span>
                </div>
              </div>
            </div>
          </div>
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
                src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=600&fit=crop&q=80" 
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
                src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&h=600&fit=crop&q=80" 
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
                src="https://images.unsplash.com/photo-1604467715878-83e57e8bc129?w=800&h=600&fit=crop&q=80" 
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
                src="https://images.unsplash.com/photo-1508737027454-e6454ef45afd?w=800&h=600&fit=crop&q=80" 
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
                src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=600&fit=crop&q=80" 
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
                src="https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=800&h=600&fit=crop&q=80" 
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
          <p className="text-xl mb-2">One Oxford Street, Harvard Square</p>
          <p className="text-xl mb-6">Cambridge, MA</p>
          <p className="text-xl mb-6">Phone: (555) TACO-BELL</p>
          <p className="text-lg text-purple-300">Open Daily: 11AM - 10PM</p>
        </div>
      </footer>
    </div>
  );
}
