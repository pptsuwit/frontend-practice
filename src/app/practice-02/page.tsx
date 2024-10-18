"use client";
import InfiniteScroll from "react-infinite-scroll-component";
import { Image } from "antd";
import { useState } from "react";

export default function Practice2() {
  const [items, setItems] = useState(Array.from({ length: 24 }));
  const fetchMoreData = async () => {
    setTimeout(() => {
      setItems((prev) => [...prev, ...Array.from({ length: 12 })]);
    }, 500);
  };
  return (
    <div>
      <InfiniteScroll
        className="grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-2 p-4 "
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        height={"98vh"}
      >
        {items.map((i, index) => (
          <div className="text-center" key={`image-scroll-${index}-${i}`}>
            <Image src={`https://picsum.photos/id/${index}/500/500`} alt={`image-${index}`}></Image>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}
