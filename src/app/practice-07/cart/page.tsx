"use client";

import { useGlobalContext } from "@/context/global.context";
import { Button, Empty, Popconfirm, Radio } from "antd";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ItemDetail() {
  const router = useRouter();
  const { cart, setCart, messageApi } = useGlobalContext();
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    setItems(cart);
  }, [cart]);

  function setQuantity(id: number | undefined, value: number) {
    const newCart = [...cart];
    const index = newCart.findIndex((i) => i.id === id);
    if (index !== -1) {
      const quantity = (newCart[index].quantity ?? 1) + value;
      newCart[index].quantity = quantity >= 1 ? quantity : 1;
      setCart(newCart);
    }
  }
  function deleteItem(id: number | undefined) {
    setCart((prev) => prev.filter((item) => item.id !== id));
    messageApi("success", "Delete item successfully");
  }

  return (
    <div className="">
      <div className="flex justify-end px-8 py-8">
        <Button onClick={() => router.push(`/practice-07`)} color="default" variant="outlined">
          Back
        </Button>
      </div>
      {items.length === 0 ? (
        <div className="w-[800px] mx-auto flex flex-col  gap-4 p-8 border rounded-lg">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<>Cart Empty</>} />
        </div>
      ) : (
        <div className="w-[800px] mx-auto flex flex-col  gap-4 p-8 border rounded-lg">
          {items.map((item) => {
            return (
              <div key={item.id} className="border p-4">
                <div className="flex justify-end">
                  <Popconfirm
                    title="Delete this item"
                    description="Are you sure to delete this item?"
                    okText="Yes"
                    cancelText="No"
                    onConfirm={() => deleteItem(item.id)}
                  >
                    <Button danger size="small">
                      Delete
                    </Button>
                  </Popconfirm>
                </div>
                <div className="flex">
                  <div className="min-w-[120px]">
                    <img
                      className="w-full h-40 p-2 object-scale-down"
                      src={item?.image}
                      alt={item?.title}
                    ></img>
                  </div>
                  <div className="p-2">
                    <div className="text-xl font-bold">{item?.title}</div>
                    <div>{item?.description}</div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-2xl text-center text-green-500 px-6">${item?.price}</div>
                  <div className="p-2">
                    <Radio.Group>
                      <Radio.Button onClick={() => setQuantity(item.id, -1)}>-</Radio.Button>
                      <Radio.Button onClick={() => setQuantity(item.id, 0)}>
                        {item.quantity}
                      </Radio.Button>
                      <Radio.Button onClick={() => setQuantity(item.id, 1)}>+</Radio.Button>
                    </Radio.Group>
                  </div>
                </div>
              </div>
            );
          })}
          <div>
            <div className="text-2xl text-end  py-6">
              <p>
                <span className="px-4">Total:</span>
                <span className="text-red-500">
                  $
                  {items
                    .reduce((acc, cur) => acc + (cur.price ?? 0) * (cur.quantity ?? 0), 0)
                    .toFixed(3)}
                </span>
              </p>
            </div>
          </div>
          <div>
            <button
              // onClick={addItemToCart}
              className="w-full focus:border-blue-400 focus:border-2 shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              Buy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
