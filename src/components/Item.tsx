type Props = {
  name: string;
};

const Item = ({ name }: Props) => {
  return <div className="h-24 w-40 m-10 bg-jet text-xl text-cream rounded-xl border flex justify-center items-center">{name}</div>;
};

export default Item;
