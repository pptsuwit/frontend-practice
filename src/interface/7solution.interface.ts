interface List {
  name: string;
  type: string;
}

interface Props {
  lists: List[];
  classname?: string;
  title?: string;

  onClick: (name: string, type: string) => void;
}
