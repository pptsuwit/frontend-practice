"use client";

export default function Home() {
  const list = [
    { path: "/practice-ex-todolist-5s", name: "Practice extra todo-list-5sec (7Solution)" },
    { path: "/practice-01", name: "Practice 01 - Todolist Drag And Drop" },
    { path: "/practice-02", name: "Practice 02 - InfiniteScroll Image" },
    { path: "/practice-03", name: "Practice 03 - Form Register" },
    { path: "/practice-04", name: "Practice 04 - Search Filter" },
    // { path: "/practice-05", name: "Practice 05" },
    // { path: "/practice-06", name: "Practice 06" },
    // { path: "/practice-07", name: "Practice 07" },
    // { path: "/practice-08", name: "Practice 08" },
    // { path: "/practice-09", name: "Practice 09" },
    // { path: "/practice-10", name: "Practice 10" },
    // { path: "/practice-11", name: "Practice 11" },
  ];

  return (
    <div className="flex-col justify-center">
      <div className="text-center text-2xl font-bold p-4">Frontend Practice</div>
      <div className="grid gap-4 justify-center">
        {list.map((item) => (
          <a
            key={item.name}
            href={item.path}
            className="text-center text-blue-500 w-fit min-w-96 p-2 border rounded-md shadow-md"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
