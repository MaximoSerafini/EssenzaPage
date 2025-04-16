import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, X, Home, Sparkles, Menu, Heart, Info } from 'lucide-react';

interface Perfume {
  id: number;
  marca: string;
  nombre: string;
  imagen: string;
  precio: number;
  notas: {
    salida: string[];
    corazon: string[];
    fondo: string[];
  };
  descripcion: string;
  fragancia_referencia: string; 
}

interface CartItem extends Perfume {
  cantidad: number;
}

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [currentMarca, setCurrentMarca] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showHome, setShowHome] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [selectedPerfume, setSelectedPerfume] = useState<Perfume | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const perfumes: Perfume[] = [
    {
      id: 1,
      marca: 'Lattafa',
      nombre: 'Badee Al Oud Sublime 100ml EDP',
      imagen: 'https://i.imgur.com/6onMEB2.png',
      precio: 60000,
      notas: {
        salida: ['Manzana', 'Lichi', 'Rosa'],
        corazon: ['ciruela', 'jazmín'],
        fondo: ['vainila', 'musgo', 'pachulí']
      },
      fragancia_referencia: "Eden Juicy Apple",
      descripcion: 'Es una fragancia de la familia olfativa Amaderada Aromática para Hombres y Mujeres. Esta fragrancia es nueva. Badee Al Oud Sublime se lanzó en 2023.'
    },
    {
      id: 2,
      marca: 'Lattafa',
      nombre: 'Noble Blush 100ml EDP',
      imagen: 'https://i.imgur.com/GfoMEUV.png',
      precio: 60000,
      notas: {
        salida: ['Rose Milk'],
        corazon: ['Merengue', 'Almendra'],
        fondo: ['vainilla', 'almizcle', 'sándalo']
      },
      fragancia_referencia: "Guidance de Amouage",
      descripcion: 'Es una fragancia de la familia olfativa Floral Frutal Gourmand para Mujeres. Esta fragrancia es nueva. Noble Blush se lanzó en 2024.'
    },
    {
      id: 3,
      marca: 'Afnan',
      nombre: '9 PM Rebel 100ml EDP',
      imagen: 'https://i.imgur.com/bW3ss7b.png',
      precio: 70000,
      notas: {
        salida: ['piña','manzana Granny Smith','mandarina'],
        corazon: ['vainilla','cedro', 'musgo de roble'],
        fondo: ['ámbar gris', 'madera seca', 'caramelo']
      },
      fragancia_referencia: "Ultra Male de Jean Paul Gaultier",
      descripcion: 'Es una fragancia de la familia olfativa Aromática Frutal para Hombres y Mujeres. Esta fragrancia es nueva. 9 PM Rebel se lanzó en 2024. La Nariz detrás de esta fragrancia es Gaël Montero.'
    },
    {
      id: 4,
      marca: 'Maison Alhambra',
      nombre: 'La Vivacité 30 EDP',
      imagen: 'https://i.imgur.com/NmJ4AFA.png',
      precio: 20000,
      notas: {
        salida: ['grosellas negras','pera'],
        corazon: ['iris','flor de azahar del naranjo', 'jazmín'],
        fondo: ['pichulí', 'praliné', 'vainilla']
      },
      fragancia_referencia: "La Vie Est Belle de Lancôme",
      descripcion: 'Es una fragancia de la familia olfativa Floral Frutal para Mujeres. Esta fragrancia es nueva. La Vivacité se lanzó en 2024.'
    },
    {
      id: 5,
      marca: 'Maison Alhambra',
      nombre: 'Florence 30 EDP',
      imagen: 'https://i.imgur.com/ov2EU8o.png',
      precio: 20000,
      notas: {
        salida: ['bergamota','durazno','Frutas rojas'],
        corazon: ['Corazón son azucena','jazmín', 'rosa'],
        fondo: ['almizcle', 'pachulí', 'vainilla']
      },
      fragancia_referencia: "Valentino Donna de Valentino",
      descripcion: 'Es una fragancia de la familia olfativa Floral para Mujeres. Florence se lanzó en 2022.'
    },
    {
      id: 6,
      marca: 'Maison Alhambra',
      nombre: 'B.A.D. HOMME 30 EDP',
      imagen: 'https://i.imgur.com/XCBnNQU.png',
      precio: 20000,
      notas: {
        salida: ['Pimienta Negra', 'Cardamomo', 'Bergamota'],
        corazon: ['Incienso', 'Cedro', 'Vetiver'],
        fondo: ['Cuero', 'Oud', 'Ámbar']
      },
      fragancia_referencia: "Bad Boy de Carolina Herrera",
      descripcion: 'Fragancia amaderada y fresca, con notas masculinas y sofisticadas, ideal para hombres de carácter fuerte.'
    },
    {
      id: 7,
      marca: 'Armaf',
      nombre: 'Club de nuit woman 100ml EDP',
      imagen: 'https://i.imgur.com/9WSFf35.png',
      precio: 56000,
      notas: {
        salida: ['Naranja', 'Bergamota', 'toronja'],
        corazon: ['rosa', 'jazmin', 'lichi'],
        fondo: ['pachulí', 'amizcle', 'vainilla']
      },
      fragancia_referencia: "Chanel – Coco Mademoiselle",
      descripcion: 'Es una fragancia de la familia olfativa Floral Frutal para Mujeres.'
    },
    {
      id: 8,
      marca: 'Al Haramain',
      nombre: 'Amber Oud Gold Edition 120ml EDP',
      imagen: 'https://i.imgur.com/bZlbShZ.png',
      precio: 90000,
      notas: {
        salida: ['Bergamota', 'notas verdes'],
        corazon: ['notas dulces', 'melón', 'piña'],
        fondo: ['almizcle', 'vainilla', 'notas amaderadas']
      },
      fragancia_referencia: "Bharara King - Bharara y/o Erba Pura - Xerjoff",
      descripcion: 'Es una fragancia de la familia olfativa Oriental Vainilla para Hombres y Mujeres. Amber Oud Gold Edition se lanzó en 2018.'
    },
    {
      id: 9,
      marca: 'Lattafa',
      nombre: 'Her Confession 100ml EDP',
      imagen: 'https://i.imgur.com/KjScRvk.png',
      precio: 60000,
      notas: {
        salida: ['Mistico', 'canela'],
        corazon: ['nardos', 'incienso', 'jazmin'],
        fondo: ['haba tonka', 'vainilla', 'almizcle']
      },
      fragancia_referencia: "-",
      descripcion: 'Es una fragancia de la familia olfativa para Mujeres. Esta fragrancia es nueva. Her Confession se lanzó en 2024'
    },
    
    
  ];

  const marcas = Array.from(new Set(perfumes.map(p => p.marca)));

  const addToCart = (perfume: Perfume) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === perfume.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === perfume.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prevItems, { ...perfume, cantidad: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, cantidad: newQuantity } : item
      )
    );
  };

  const filteredPerfumes = perfumes.filter(perfume => {
    const matchesMarca = currentMarca ? perfume.marca === currentMarca : true;
    const matchesSearch = perfume.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         perfume.marca.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesMarca && matchesSearch;
  });

  const total = cartItems.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);

  const createWhatsAppLink = () => {
    const message = cartItems.map(item => 
      `${item.cantidad}x ${item.marca} - ${item.nombre} ($${item.precio})`
    ).join('\n');
    
    const text = `¡Hola! Me gustaría comprar los siguientes perfumes:\n\n${message}\n\nTotal: $${total.toFixed(2)}`;
    return `https://wa.me/543794800282?text=${encodeURIComponent(text)}`;
  };

  if (showHome) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center text-white p-8">
          <h1 className="text-6xl font-serif mb-6 animate-fade-in">Essenza</h1>
          <p className="text-xl mb-8 opacity-90">Descubre tu fragancia perfecta</p>
          <button
            onClick={() => setShowHome(false)}
            className="px-8 py-3 bg-white text-purple-900 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center mx-auto"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Explorar Fragancias
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-lg' 
            : 'bg-white shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button 
                onClick={() => setShowHome(true)}
                className="text-3xl font-serif font-bold text-purple-900 hover:text-purple-700 transition-colors flex items-center"
              >
                <Home className="h-8 w-8 mr-2" />
                <span className="hidden sm:inline">Essenza</span>
              </button>
              <nav className="hidden md:flex ml-8 space-x-6">
                {marcas.map((marca) => (
                  <button
                    key={marca}
                    onClick={() => setCurrentMarca(marca === currentMarca ? null : marca)}
                    className={`text-sm font-medium transition-colors ${
                      currentMarca === marca
                        ? 'text-purple-600 border-b-2 border-purple-600'
                        : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    {marca}
                  </button>
                ))}
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <input
                  type="text"
                  placeholder="Buscar perfumes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button 
                className="p-2 rounded-full hover:bg-purple-100 relative group"
                onClick={() => setShowCart(true)}
              >
                <ShoppingBag className="h-6 w-6 text-purple-600 group-hover:scale-110 transition-transform" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                    {cartItems.length}
                  </span>
                )}
              </button>
              <button
                className="md:hidden p-2 rounded-full hover:bg-gray-100"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <Menu className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Buscar perfumes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="flex flex-wrap gap-2">
                {marcas.map((marca) => (
                  <button
                    key={marca}
                    onClick={() => {
                      setCurrentMarca(marca === currentMarca ? null : marca);
                      setShowMobileMenu(false);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      currentMarca === marca
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {marca}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        {/* Grid de Perfumes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPerfumes.map((perfume) => (
            <div
              key={perfume.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-w-1 aspect-h-1 relative group">
                <img
                  src={perfume.imagen}
                  alt={perfume.nombre}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <button
                    onClick={() => addToCart(perfume)}
                    className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 px-6 py-3 bg-white text-purple-600 rounded-full font-medium hover:bg-purple-600 hover:text-white flex items-center space-x-2"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    <span>Agregar al carrito</span>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-purple-600 font-medium">{perfume.marca}</p>
                    <h3 className="text-lg font-semibold text-gray-900 mt-1">{perfume.nombre}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedPerfume(perfume)}
                    className="p-2 text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-full transition-colors"
                  >
                    <Info className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-purple-600">
                    ${perfume.precio}
                  </span>
                  <button
                    onClick={() => addToCart(perfume)}
                    className="p-2 text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-full transition-colors"
                  >
                    <Heart className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal de Notas del Perfume */}
      {selectedPerfume && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">{selectedPerfume.marca}</h2>
                <h3 className="text-xl text-purple-600">{selectedPerfume.nombre}</h3>
              </div>
              <button
                onClick={() => setSelectedPerfume(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            <div className="aspect-w-1 aspect-h-1 mb-6">
              <img
                src={selectedPerfume.imagen}
                alt={selectedPerfume.nombre}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <p className="text-gray-700 mb-6">{selectedPerfume.descripcion}</p>
            <div className="space-y-4">
            <div>
                <h4 className="text-lg font-semibold text-purple-600 mb-2">Fragancia Referencia</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-100 text-black-700 rounded-full text-sm">
                    {selectedPerfume.fragancia_referencia}
                  </span>
               </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-600 mb-2">Notas de Salida</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPerfume.notas.salida.map((nota, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                      {nota}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-600 mb-2">Notas de Corazón</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPerfume.notas.corazon.map((nota, index) => (
                    <span key={index} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                      {nota}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-600 mb-2">Notas de Fondo</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPerfume.notas.fondo.map((nota, index) => (
                    <span key={index} className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">
                      {nota}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => {
                  addToCart(selectedPerfume);
                  setSelectedPerfume(null);
                }}
                className="px-6 py-2 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors flex items-center space-x-2"
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Agregar al carrito</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Carrito */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-900">Tu Carrito</h2>
              <button
                onClick={() => setShowCart(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Tu carrito está vacío</p>
              </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center py-4 border-b">
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="ml-4 flex-1">
                      <h3 className="font-medium text-gray-900">{item.marca} - {item.nombre}</h3>
                      <p className="text-purple-600 font-medium">${item.precio}</p>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.cantidad - 1)}
                          className="px-2 py-1 bg-gray-100 rounded-l hover:bg-gray-200 transition-colors"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 bg-gray-100">{item.cantidad}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.cantidad + 1)}
                          className="px-2 py-1 bg-gray-100 rounded-r hover:bg-gray-200 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 hover:bg-gray-100 rounded-full ml-4 transition-colors"
                    >
                      <X className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                ))}
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-medium text-gray-900">Total:</span>
                    <span className="text-2xl font-bold text-purple-600">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                  <a
                    href={createWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 text-white py-3 rounded-full font-medium hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Completar compra por WhatsApp</span>
                    <ShoppingBag className="h-5 w-5" />
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;