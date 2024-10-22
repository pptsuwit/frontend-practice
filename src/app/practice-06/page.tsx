"use client";
import { useEffect, useState } from "react";
import "./memogame.css";
import { shuffleCards } from "@/utils/index.utils";
import { useGlobalContext } from "@/context/global.context";

const cards = [
  { id: 1, image: "https://picsum.photos/id/237/300/300", active: false },
  { id: 2, image: "https://picsum.photos/id/237/300/300", active: false },
  { id: 3, image: "https://picsum.photos/id/238/300/300", active: false },
  { id: 4, image: "https://picsum.photos/id/238/300/300", active: false },
  { id: 5, image: "https://picsum.photos/id/239/300/300", active: false },
  { id: 6, image: "https://picsum.photos/id/239/300/300", active: false },
  { id: 7, image: "https://picsum.photos/id/240/300/300", active: false },
  { id: 8, image: "https://picsum.photos/id/240/300/300", active: false },
  { id: 9, image: "https://picsum.photos/id/241/500/500", active: false },
  { id: 10, image: "https://picsum.photos/id/241/500/500", active: false },
];
shuffleCards(cards);
export default function Page() {
  const { messageApi } = useGlobalContext();
  const [items, setItems] = useState<any[]>([]);
  const [activeCard, setActiveCard] = useState(0);
  const [activeCardPair, setActiveCardPair] = useState(0);
  const [finish, setFinish] = useState(0);
  useEffect(() => {
    if (finish === cards.length) {
      messageApi("success", "Congratulations all cards are active");
      setFinish(0);
    }
    if (finish === 0) setItems(cards);
  }, [finish]);

  function resetPair() {
    setActiveCard(0);
    setActiveCardPair(0);
  }
  function showCard(id: number) {
    if (activeCard && activeCard !== id) {
      const itemActive = items.find((i) => i.id === activeCard);
      const itemPair = items.find((i) => i.id === id);
      if (itemActive.image === itemPair.image) {
        setItems((prev) => {
          const newItems = [...prev];
          const index = newItems.findIndex((i) => i.id === activeCard);
          const indexPair = newItems.findIndex((i) => i.id === id);
          newItems[index].active = true;
          newItems[indexPair].active = true;
          return newItems;
        });
        setFinish((prev) => prev + 2);

        resetPair();
      } else {
        setActiveCardPair(id);
        setTimeout(() => {
          resetPair();
        }, 1000);
      }
    } else {
      setActiveCard(id);
    }
  }
  function newGame() {
    setFinish(0);
    setActiveCard(0);
    setActiveCardPair(0);
    shuffleCards(cards);
    setItems(cards);
    setItems((prev) => {
      return prev.map((i) => {
        return { ...i, active: false };
      });
    });
  }
  return (
    <div>
      <div className="text-4xl text-center font-bold mt-4 p-4">Memory Game</div>
      <div className="flex justify-center p-4">
        <button
          className="rounded-md shadow-md bg-blue-500 text-white p-1.5 px-3"
          onClick={newGame}
        >
          New Game
        </button>
      </div>
      <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 px-4">
        {items.map((item) => {
          return (
            <button className="card-container" key={item.id} onClick={() => showCard(item.id)}>
              <div
                className={`card-inner ${activeCard === item.id && "show-card"} ${
                  activeCardPair === item.id && "show-card"
                } ${item.active && "show-card"}`}
              >
                <div className="card-front">
                  <img
                    src={item.image}
                    alt="Paris"
                    className={`rounded-md ${item.active && "border-2 border-green-500"}`}
                  />
                </div>

                <div>
                  <img
                    className="object-fill h-[200px] w-full "
                    src="/images/back-card.png"
                    alt="back-card"
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
