import { useState } from "react";
import { useClicksStore } from "../Stores/Clicks/Clicks.store";
import Click from "./components/Click";

const Clicks = () => {
  const [numberToAdd, setNumberToAdd] = useState(0);
  const {
    clicks,
    incrementNumberOfClicks,
    resetClicksCount,
    addMultiNumberToClicks,
  } = useClicksStore();

  return (
    <div>
      <h2>Clicks</h2>
      <button onClick={() => incrementNumberOfClicks()}>Add click</button>
      <button onClick={() => resetClicksCount()}>Reset click</button>
      <Click numberOfClicks={clicks} />
      <button onClick={() => setNumberToAdd(numberToAdd + 1)}>
        Number To Add
      </button>
      <h2>Number to add: {numberToAdd}</h2>
      <button onClick={() => addMultiNumberToClicks(numberToAdd)}>
        Add number to global store clicks
      </button>
    </div>
  );
};

export default Clicks;
