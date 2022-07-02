import React, { useState } from 'react';

import RandomSacraedPath from '../atoms/RandomSacraedPath';

export default function DisplayRandomSacredPathWithButton() {
  const [clickCount, setClickCount] = useState(0);

  const incrementClickCount = () => {
    setClickCount(clickCount + 1);
  };
  return (
    <div>
      <RandomSacraedPath index={clickCount} />
      <button onClick={incrementClickCount} type="button">
        Refresh
      </button>
    </div>
  );
}
