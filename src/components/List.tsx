export default function List(props: Readonly<Props>) {
  return (
    <div className={`${props.classname} `}>
      {props.title && (
        <div className="bg-zinc-100 p-2  text-center text-xl font-bold">{props.title}</div>
      )}
      <div>
        {props.lists.map((item) => (
          <button
            onClick={() => props.onClick(item.name, item.type)}
            key={`${item.name}`}
            className="p-2 mb-4 text-center border rounded-md w-full"
          >
            {item.type}: {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
