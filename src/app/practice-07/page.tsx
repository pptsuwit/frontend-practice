"use client";
import { Card, Input, Badge, Empty, Button } from "antd";
import { useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { usePathname, useRouter } from "next/navigation";
import { useGlobalContext } from "@/context/global.context";

const { Meta } = Card;

export default function Page() {
  const { cart } = useGlobalContext();
  const pathname = usePathname();
  const router = useRouter();
  const apiUrl = "https://fakestoreapi.com/products";
  const [defaultItems, setDefaultItems] = useState<Product[]>([]);
  const [items, setItems] = useState<Product[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);
  const fetchData = async () => {
    const response = await fetch(`${apiUrl}`);
    const data = await response.json();
    setItems(data);
    setDefaultItems(data);
  };
  useEffect(() => {
    fetchData();
    setCartCount(cart.length);
  }, []);
  // ChangeEvent<HTMLInputElement>
  const onSearch = (value: string) => {
    const newItems = defaultItems.filter(
      (w) =>
        w.title?.toLowerCase().includes(value.toLowerCase()) ||
        w.description?.toLowerCase().includes(value.toLowerCase())
    );
    setItems(newItems);
  };
  return (
    <div className="p-8">
      <div className="flex justify-end px-4">
        <Badge count={cartCount}>
          <Button
            shape="circle"
            onClick={() => router.push(`${pathname}/cart`)}
            icon={<ShoppingCartOutlined className="text-3xl" />}
          ></Button>
        </Badge>
      </div>
      <div className="text-4xl text-center font-bold  px-4 p-2">Shopping Cart</div>
      <div className="px-4">
        <Input size="large" placeholder="Search ..." onChange={(e) => onSearch(e.target.value)} />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-2 p-4 overflow-hidden">
        {items.map((item) => (
          <Card
            onClick={() => router.push(`${pathname}/item-detail/${item.id}`)}
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
