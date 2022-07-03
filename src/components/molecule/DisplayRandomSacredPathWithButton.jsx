import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import RandomSacraedPath from '../atoms/RandomSacraedPath';

export default function DisplayRandomSacredPathWithButton({ seed = 0 } = {}) {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    setClickCount(0);
  }, [seed]);

  const incrementClickCount = () => {
    setClickCount(clickCount + 1);
  };
  return (
    <div>
      <RandomSacraedPath index={clickCount} seed={seed} />
      <button onClick={incrementClickCount} type="button">
        Refresh
      </button>
    </div>
  );
}

DisplayRandomSacredPathWithButton.defaultProps = {
  seed: 0,
};
DisplayRandomSacredPathWithButton.propTypes = {
  seed: PropTypes.number,
};
