export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About EcoShop</h3>
            <p className="text-gray-400">
              Your one-stop destination for quality products at competitive prices. 
              We believe in sustainable shopping and exceptional customer service.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/products" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Shop
                </a>
              </li>
              <li>
                <a 
                  href="/cart" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cart
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="text-gray-400 not-italic">
              <p>Email: support@ecoshop.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Address: 123 Commerce St,</p>
              <p>Digital City, DC 12345</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EcoShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}