import { Camera, Gamepad, Headphones, Laptop, Smartphone, Watch } from "lucide-react";
import { ReactElement } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

export const sideBarLink = [
  "Women Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

type StockStatus = "In Stock" | "Limited Stock" | "Out of Stock";

interface Product {
  name: string;
  description: string;
  rating: number;
  stockStatus: StockStatus;
  colors: string[];
  sizes: string[];
  price: number;
  image: string;
  discount: number; // New property added
}

interface Category {
  categoryName: string;
  categoryIcon: ReactElement;
  products: Product[];
}

export const categories: Category[] = [
  {
    categoryName: "Phones",
    categoryIcon: <Smartphone className="h-10 w-10"/>,
    products: [
      {
        name: "iPhone 14",
        description: "Latest smartphone from Apple with advanced features.",
        rating: 4.8,
        stockStatus: "In Stock",
        colors: ["Black", "Silver", "Blue"],
        sizes: ["128GB", "256GB", "512GB"],
        price: 999,
        discount: 10, // New property added
        image: "/iphone14.png",
      },
      {
        name: "Samsung Galaxy S23",
        description: "High-performance Android smartphone.",
        rating: 4.6,
        stockStatus: "Limited Stock",
        colors: ["Phantom Black", "Cream", "Lavender"],
        sizes: ["128GB", "256GB"],
        price: 899,
        discount: 15, // New property added
        image: "/galaxy_s23.png",
      },
    ],
  },
  {
    categoryName: "Computers",
    categoryIcon: <Laptop className="h-10 w-10"/>,
    products: [
      {
        name: "MacBook Pro 16-inch",
        description: "Powerful laptop with M2 Max chip.",
        rating: 4.9,
        stockStatus: "In Stock",
        colors: ["Space Gray", "Silver"],
        sizes: ["512GB", "1TB", "2TB"],
        price: 2499,
        discount: 5, // New property added
        image: "/macbook_pro.png",
      },
      {
        name: "Dell XPS 15",
        description: "Premium laptop with stunning display.",
        rating: 4.7,
        stockStatus: "Limited Stock",
        colors: ["Silver", "Black"],
        sizes: ["512GB", "1TB"],
        price: 2199,
        discount: 10, // New property added
        image: "/dell_xps_15.png",
      },
    ],
  },
  {
    categoryName: "SmartWatch",
    categoryIcon: <Watch className="h-10 w-10"/>,
    products: [
      {
        name: "Apple Watch Series 9",
        description: "Advanced smartwatch for fitness and connectivity.",
        rating: 4.7,
        stockStatus: "Out of Stock",
        colors: ["Midnightblue", "Starlight", "Red"],
        sizes: ["41mm", "45mm"],
        price: 399,
        discount: 20, // New property added
        image: "/apple_watch.png",
      },
      {
        name: "Samsung Galaxy Watch 6",
        description: "Stylish smartwatch with great battery life.",
        rating: 4.5,
        stockStatus: "In Stock",
        colors: ["Black", "Silver"],
        sizes: ["40mm", "44mm"],
        price: 299,
        discount: 25, // New property added
        image: "/galaxy_watch6.png",
      },
    ],
  },
  {
    categoryName: "Camera",
    categoryIcon: <Camera className="h-10 w-10"/>,
    products: [
      {
        name: "Canon EOS R5",
        description: "High-resolution mirrorless camera.",
        rating: 4.8,
        stockStatus: "In Stock",
        colors: ["Black"],
        sizes: ["Body Only"],
        price: 3899,
        discount: 10, // New property added
        image: "/canon_eos_r5.png",
      },
      {
        name: "Sony Alpha a7 IV",
        description: "Versatile mirrorless camera with 33MP sensor.",
        rating: 4.7,
        stockStatus: "Limited Stock",
        colors: ["Black"],
        sizes: ["Body Only"],
        price: 2499,
        discount: 15, // New property added
        image: "/sony_alpha_a7_iv.png",
      },
    ],
  },
  {
    categoryName: "HeadPhones",
    categoryIcon: <Headphones className="h-10 w-10"/>,
    products: [
      {
        name: "Sony WH-1000XM5",
        description: "Noise-canceling over-ear headphones.",
        rating: 4.9,
        stockStatus: "Limited Stock",
        colors: ["Black", "Silver"],
        sizes: ["One Size"],
        price: 349,
        discount: 20, // New property added
        image: "/sony_wh1000xm5.png",
      },
      {
        name: "Bose QuietComfort 45",
        description: "Comfortable headphones with world-class noise canceling.",
        rating: 4.8,
        stockStatus: "In Stock",
        colors: ["Black", "White"],
        sizes: ["One Size"],
        price: 329,
        discount: 15, // New property added
        image: "/bose_qc45.png",
      },
    ],
  },
  {
    categoryName: "Gaming",
    categoryIcon: <Gamepad className="h-10 w-10"/>,
    products: [
      {
        name: "PlayStation 5",
        description: "Next-gen gaming console with immersive graphics.",
        rating: 5.0,
        stockStatus: "Limited Stock",
        colors: ["White"],
        sizes: ["Digital Edition", "Standard Edition"],
        price: 499,
        discount: 5, // New property added
        image: "/ps5.png",
      },
      {
        name: "Xbox Series X",
        description: "Powerful console for gaming and entertainment.",
        rating: 4.8,
        stockStatus: "In Stock",
        colors: ["Black"],
        sizes: ["Standard Edition"],
        price: 499,
        discount: 10, // New property added
        image: "/xbox_series_x.png",
      },
      {
        name: "Nintendo Switch OLED",
        description: "Portable console with vibrant OLED display.",
        rating: 4.6,
        stockStatus: "In Stock",
        colors: ["White", "Neon Red/Blue"],
        sizes: ["One Size"],
        price: 349,
        discount: 15, // New property added
        image: "/switch_oled.png",
      },
    ],
  },
  {
    categoryName: "Phones",
    categoryIcon: <Smartphone className="h-10 w-10"/>,
    products: [
      {
        name: "iPhone 14",
        description: "Latest smartphone from Apple with advanced features.",
        rating: 4.8,
        stockStatus: "In Stock",
        colors: ["Black", "Silver", "Blue"],
        sizes: ["128GB", "256GB", "512GB"],
        price: 999,
        discount: 10, // New property added
        image: "/iphone14.png",
      },
      {
        name: "Samsung Galaxy S23",
        description: "High-performance Android smartphone.",
        rating: 4.6,
        stockStatus: "Limited Stock",
        colors: ["Phantom Black", "Cream", "Lavender"],
        sizes: ["128GB", "256GB"],
        price: 899,
        discount: 15, // New property added
        image: "/galaxy_s23.png",
      },
    ],
  },
  {
    categoryName: "Computers",
    categoryIcon: <Laptop className="h-10 w-10"/>,
    products: [
      {
        name: "MacBook Pro 16-inch",
        description: "Powerful laptop with M2 Max chip.",
        rating: 4.9,
        stockStatus: "In Stock",
        colors: ["Space Gray", "Silver"],
        sizes: ["512GB", "1TB", "2TB"],
        price: 2499,
        discount: 5, // New property added
        image: "/macbook_pro.png",
      },
    ],
  },
  {
    categoryName: "SmartWatch",
    categoryIcon: <Watch className="h-10 w-10"/>,
    products: [
      {
        name: "Apple Watch Series 9",
        description: "Advanced smartwatch for fitness and connectivity.",
        rating: 4.7,
        stockStatus: "Out of Stock",
        colors: ["Midnightblue", "Starlight", "Red"],
        sizes: ["41mm", "45mm"],
        price: 399,
        discount: 20, // New property added
        image: "/apple_watch.png",
      },
    ],
  },
  {
    categoryName: "Camera",
    categoryIcon: <Camera className="h-10 w-10"/>,
    products: [
      {
        name: "Canon EOS R5",
        description: "High-resolution mirrorless camera.",
        rating: 4.8,
        stockStatus: "In Stock",
        colors: ["Black"],
        sizes: ["Body Only"],
        price: 3899,
        discount: 10, // New property added
        image: "/canon_eos_r5.png",
      },
    ],
  },
  {
    categoryName: "HeadPhones",
    categoryIcon: <Headphones className="h-10 w-10"/>,
    products: [
      {
        name: "Sony WH-1000XM5",
        description: "Noise-canceling over-ear headphones.",
        rating: 4.9,
        stockStatus: "Limited Stock",
        colors: ["Black", "Silver"],
        sizes: ["One Size"],
        price: 349,
        discount: 20, // New property added
        image: "/sony_wh1000xm5.png",
      },
    ],
  },
  {
    categoryName: "Gaming",
    categoryIcon: <Gamepad className="h-10 w-10"/>,
    products: [
      {
        name: "PlayStation 5",
        description: "Next-gen gaming console with immersive graphics.",
        rating: 5.0,
        stockStatus: "Limited Stock",
        colors: ["White"],
        sizes: ["Digital Edition", "Standard Edition"],
        price: 499,
        discount: 5, // New property added
        image: "/ps5.png",
      },
    ],
  },
];

export const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {Array.from({ length: fullStars }).map((_, index) => (
        <FaStar key={`full-${index}`} className="text-yellow-500" />
      ))}
      {halfStar && <FaRegStarHalfStroke className="text-yellow-500" />}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <FaRegStar className="text-yellow-500" />
      ))}
    </>
  );
};

export const calculateDiscountedPrice = (price: number, discount: number) => {
  return price - (price * discount) / 100;
};


