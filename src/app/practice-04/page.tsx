"use client";
import { Card, Input } from "antd";
import { useEffect, useState } from "react";
const { Meta } = Card;
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
interface Rating {
  rate: number;
  count: number;
}
export default function Practice4() {
  const apiUrl = "https://fakestoreapi.com/products";
  const [defaultItems, setDefaultItems] = useState<Product[]>([]);
  const [items, setItems] = useState<Product[]>([]);
  const fetchData = async () => {
    const response = await fetch(`${apiUrl}`);
    const data = await response.json();
    setItems(data);
    setDefaultItems(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // ChangeEvent<HTMLInputElement>
  const onSearch = (value: string) => {
    const newItems = defaultItems.filter(
      (w) =>
        w.title.toLowerCase().includes(value.toLowerCase()) ||
        w.description.toLowerCase().includes(value.toLowerCase())
    );
    setItems(newItems);
  };
  return (
    <div className="p-12">
      <div className="px-4">
        <Input size="large" placeholder="Search ..." onChange={(e) => onSearch(e.target.value)} />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-2 p-4 overflow-hidden">
        {items.map((item) => (
          <Card
            key={item.id}
            className="w-full h-80 bg-red-50 overflow-hidden text-ellipsis"
            hoverable
            cover={
              <img
                className="w-full h-40 p-2 object-scale-down"
                src={item.image}
                alt={item.title}
              ></img>
            }
          >
            <Meta title={item.title} description={item.description} />
          </Card>
        ))}
      </div>
    </div>
  );
}
