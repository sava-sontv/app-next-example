import type { Product } from '@/types/product';

export const PRODUCT_LIST: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'Premium noise-cancelling headphones with 30hr battery.',
    price: 199.99,
    imageUrl: '/next.svg',
    category: 'Electronics',
  },
  {
    id: '2',
    name: 'Mechanical Keyboard',
    description: 'RGB backlit keyboard with Cherry MX switches.',
    price: 149.99,
    imageUrl: '/vercel.svg',
    category: 'Electronics',
  },
  {
    id: '3',
    name: 'USB-C Hub',
    description: '7-in-1 adapter with HDMI, USB 3.0, and SD card slot.',
    price: 49.99,
    imageUrl: '/file.svg',
    category: 'Accessories',
  },
  {
    id: '4',
    name: 'Wireless Mouse',
    description: 'Ergonomic design with 16000 DPI sensor.',
    price: 79.99,
    imageUrl: '/globe.svg',
    category: 'Electronics',
  },
  {
    id: '5',
    name: 'Monitor Stand',
    description: 'Aluminum stand with cable management.',
    price: 89.99,
    imageUrl: '/window.svg',
    category: 'Accessories',
  },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCT_LIST.find((product) => product.id === id);
}
