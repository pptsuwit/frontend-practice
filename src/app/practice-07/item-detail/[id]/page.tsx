"use client";

import { useGlobalContext } from "@/context/global.context";
import { Badge, Button, Rate } from "antd";
import { useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

export default function ItemDetail({ params }: Readonly<{ params: { id: string } }>) {
  const router = useRouter();
  const { cart, setCart, messageApi } = useGlobalContext();
  const [item, setItem] = useState<Product>();
  const fetchData = async () => {
    try {
      const apiUrl = `https://fakestoreapi.com/products/${params.id}`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch item");
      }
      const data = await response.json();
      setItem(data);
    } catch (error) {
      console.error("Error fetching item:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  function addItemToCart() {
    const findItem = cart.find((w) => w.id === parseInt(params.id));
    if (!findItem) {
      setCart((prev) => {
        localStorage.setItem("cart", JSON.stringify([...prev, { ...item, ...{ quantity: 1 } }]));
        return [...prev, { ...item, ...{ quantity: 1 } }];
      });
      messageApi("success", "Item added to cart");
    } else {
      messageApi("error", "Item already in cart");
    }
  }
  return (
    <div className="">
      <div className="flex justify-between px-14 py-8">
        <Button onClick={() => router.push(`/practice-07`)} color="default" variant="outlined">
          Back
        </Button>
        <Badge count={cart.length}>
          <Button
            shape="circle"
            onClick={() => router.push("/practice-07/cart")}
            icon={<ShoppingCartOutlined className="text-3xl" />}
          ></Button>
        </Badge>
      </div>
      <div className="w-[600px] mx-auto flex flex-col gap-4 p-8 border rounded-lg">
        <div>
          <img
            className="w-full h-40 p-2 object-scale-down"
            src={item?.image}
            alt={item?.title}
          ></img>
          <div className="flex justify-between items-center">
            <div className="text-2xl text-red-500">${item?.price}</div>
            <div className="">
              <Rate disabled allowHalf value={item?.rating?.rate} />
              {item?.rating?.count ? ` (${item?.rating.count} reviews)` : ""}
            </div>
          </div>
        </div>
        <div className="text-xl font-bold">{item?.title}</div>
        <div>{item?.description}</div>
        <div>
          <button
            onClick={addItemToCart}
            className="w-full focus:border-blue-400 focus:border-2 shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
