export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  category: string;
  tags: string[];
  collection?: string;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: "fw25-tee-01",
    name: "FEMA Classic Logo T-Shirt",
    price: 35.99,
    images: [
      "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5698849/pexels-photo-5698849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    description: "Nuestra remera con logo clásico, hecha de 100% algodón orgánico con un ajuste relajado. Presenta el icónico logo FEMA en el frente.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Gray"],
    category: "tops",
    tags: ["remera", "logo", "básicos"],
    collection: "fw25",
    isNew: true
  },
  {
    id: "fw25-hoodie-01",
    name: "FEMA Heavyweight Hoodie",
    price: 79.99,
    images: [
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    description: "Buzo premium con logo FEMA bordado. Incluye bolsillo canguro y cordones ajustables.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray"],
    category: "tops",
    tags: ["buzo", "premium", "invierno"],
    collection: "fw25",
    isNew: true
  },
  {
    id: "fw25-jeans-01",
    name: "FEMA Slim Fit Jeans",
    price: 89.99,
    images: [
      "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    description: "Jeans slim fit clásicos con un toque moderno. Hechos de denim premium con un toque de elasticidad para mayor comodidad.",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Blue", "Black"],
    category: "bottoms",
    tags: ["jeans", "denim", "slim fit"],
    collection: "fw25",
    isNew: true
  },
  {
    id: "fw25-jacket-01",
    name: "FEMA Bomber Jacket",
    price: 129.99,
    images: [
      "https://images.pexels.com/photos/6770028/pexels-photo-6770028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6769988/pexels-photo-6769988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    description: "Campera bomber inspirada en el streetwear con materiales premium y el logo FEMA en la espalda.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Olive"],
    category: "outerwear",
    tags: ["campera", "bomber", "streetwear"],
    collection: "fw25",
    isNew: true
  },
  {
    id: "cap-01",
    name: "FEMA Embroidered Cap",
    price: 29.99,
    images: [
      "https://images.pexels.com/photos/844867/pexels-photo-844867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5698830/pexels-photo-5698830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    description: "Gorra de algodón ajustable con logo FEMA bordado. Talle único.",
    sizes: ["One Size"],
    colors: ["Black", "White"],
    category: "accessories",
    tags: ["gorra", "accesorios"],
    isNew: false
  },
  {
    id: "tote-01",
    name: "FEMA Canvas Tote Bag",
    price: 24.99,
    images: [
      "https://images.pexels.com/photos/5699710/pexels-photo-5699710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5699712/pexels-photo-5699712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    description: "Bolso tote de lona durable con estampado del logo FEMA. Perfecto para uso diario.",
    sizes: ["One Size"],
    colors: ["Natural", "Black"],
    category: "accessories",
    tags: ["bolso", "tote", "accesorios"],
    isNew: false
  },
  {
    id: "sweatshirt-01",
    name: "FEMA Crewneck Sweatshirt",
    price: 64.99,
    images: [
      "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5698852/pexels-photo-5698852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    description: "Buzo clásico con cuello redondo, ajuste relajado y logo FEMA minimalista.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Black", "Navy"],
    category: "tops",
    tags: ["buzo", "casual"],
    isNew: false
  },
  {
    id: "shorts-01",
    name: "FEMA Cotton Shorts",
    price: 49.99,
    images: [
      "https://images.pexels.com/photos/1794590/pexels-photo-1794590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    description: "Shorts de algodón cómodos con cintura elástica y bolsillos laterales.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Beige"],
    category: "bottoms",
    tags: ["shorts", "casual", "verano"],
    isNew: false
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category?: string): Product[] => {
  if (!category || category === 'todos') return products;
  return products.filter(product => product.category === category);
};

export const getProductsByCollection = (collection?: string): Product[] => {
  if (!collection) return products;
  return products.filter(product => product.collection === collection);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.isNew);
};