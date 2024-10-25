"use client";

import { Alert, Button, Card, Spin } from "antd";
import Meta from "antd/es/card/Meta";
import { useEffect, useState } from "react";

const App: React.FC = () => {
  const apiUrl = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState<boolean>(false);
  const [items, setItems] = useState<Product[]>([]);
  const fetchData = async () => {
    setLoading(true);

    setTimeout(async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setItems(data);
      setLoading(false);
    }, 5000);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p className="text-center p-4">
        <Button type="primary" onClick={fetchData}>
          Fetch Data
        </Button>
      </p>
      {!loading === false ? (
        <Spin spinning={loading}>
          <Alert className="h-[calc(100vh-58px)]" type="info" />
        </Spin>
      ) : (
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
      )}
    </div>
  );
};

export default App;
