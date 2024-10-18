"use client";

import List from "@/components/List";
import { useState } from "react";

export default function TodoList() {
  const dataList = [
    {
      type: "Fruit",
      name: "Apple",
    },
    {
      type: "Vegetable",
      name: "Broccoli",
    },
    {
      type: "Vegetable",
      name: "Mushroom",
    },
    {
      type: "Fruit",
      name: "Banana",
    },
    {
      type: "Vegetable",
      name: "Tomato",
    },
    {
      type: "Fruit",
      name: "Orange",
    },
    {
      type: "Fruit",
      name: "Mango",
    },
    {
      type: "Fruit",
      name: "Pineapple",
    },
    {
      type: "Vegetable",
      name: "Cucumber",
    },
    {
      type: "Fruit",
      name: "Watermelon",
    },
    {
      type: "Vegetable",
      name: "Carrot",
    },
  ];

  const [list, setList] = useState<List[]>(dataList);
  const [fruitList, setFruitList] = useState<List[]>([]);
  const [vegetableList, setVegetableList] = useState<List[]>([]);

  function addList(name: string, type: string) {
    if (type === "Fruit") {
      setFruitList((prev) => [...prev, { name, type }]);
    } else {
      setVegetableList((prev) => [...prev, { name, type }]);
    }
    setList((prev) => prev.filter((item) => item.name !== name));

    setTimeout(() => {
      removeList(name, type);
    }, 5000);
  }

  function removeList(name: string, type: string) {
    if (type === "Fruit") {
      setFruitList((prev) => prev.filter((item) => item.name !== name));
    } else {
      setVegetableList((prev) => prev.filter((item) => item.name !== name));
    }

    setList((prev) => {
      const valid = prev.find((w) => w.name === name);
      if (valid) {
        return prev;
      }
      return [...prev, { name, type }];
    });
  }
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <List lists={list} onClick={addList} classname="mx-4" />

      <List lists={fruitList} onClick={removeList} title="Fruit" classname="border rounded-md" />
      <List
        lists={vegetableList}
        onClick={removeList}
        title="Vegetable"
        classname="border rounded-md"
      />
    </div>
  );
}
