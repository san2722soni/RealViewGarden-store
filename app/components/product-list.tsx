"use client"

import { Product } from "@/types";
import NoResults from "./ui/no-results";
import ProductCard from "./ui/product-card";
import Button from "./ui/Button";
import { ChevronDown, Cross, X } from "lucide-react";
import { useState, useEffect } from "react";
import ToolTip from "./ui/tooltip";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  const [shouldLimit, setShouldLimit] = useState(true); // Change the initial state to true
  const [mounted, setIsMounted] = useState(false);
  const [visibleItems, setVisibleItems] = useState(items.slice(0, 4));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
       // Show all items when shouldLimit is false
      shouldLimit ? setVisibleItems(items.slice(0,4)) : setVisibleItems(items);
    }
  }, [shouldLimit, items, mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${shouldLimit ? 'transition-all duration-500 ease': ''}`}>
        {visibleItems.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
      <div className="w-full text-center">
        <ToolTip content="Click to see all products!">

        <Button
          className="bg-white border-black"
          onClick={() => setShouldLimit((prev) => !prev)}
          >
          {shouldLimit && <ChevronDown className="text-3xl text-black" />}
          {!shouldLimit && <X className="text-3xl text-black" />}
        </Button>
          </ToolTip>
      </div>
    </div>
  );
};

export default ProductList;
