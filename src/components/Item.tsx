import { useState } from "react";

type Props = {
  name: string;
};

const Item = ({ name }: Props) => {
  const [content, setContent] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);

  let confirmedItem = (
    <div className="h-24 w-40 m-10 bg-jet text-xl text-cream rounded-xl border border-cream border-opacity-25 shadow-[8px_8px_rgba(0,0,0,0.4)] flex justify-center items-center">
      {content}
    </div>
  );

  let unconfirmedItem = (
    <div className="h-[80%] w-[80%] absolute m-10 bg-jet text-xl text-cream rounded-xl border border-cream border-opacity-25 shadow-[24px_24px_rgba(0,0,0,0.4)] flex justify-center items-center">
      <input
        className="h-12 w-40 text-xl text-cream bg-jet rounded-xl border"
        placeholder="Enter text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></input>
      <button
        className="h-12 w-40 text-xl text-cream bg-jet rounded-xl border"
        {...(content === "" && { disabled: true })}
        onClick={() => {setIsConfirmed(true)}}
      >
        Confirm
      </button>
      <button
        className="h-12 w-40 text-xl text-cream bg-jet rounded-xl border"
        onClick={() => setContent("")}
      >
        Clear
      </button>

      <button
        className="h-12 w-40 text-xl text-cream bg-jet rounded-xl border"
        onClick={() => setIsCancelled(true)}
      >
        Cancel
      </button>
    </div>
  );
  return (
    <>{isCancelled ? null : isConfirmed ? confirmedItem : unconfirmedItem}</>
  );
};

export default Item;
