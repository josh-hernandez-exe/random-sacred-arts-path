import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';
import TextField from '@mui/material/TextField';
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
      <Button onClick={incrementClickCount} type="button">
        <RefreshIcon />
      </Button>
      <br />
      <TextField
        id="Refresh-Count"
        label="Refresh Count"
        value={`${clickCount}`}
        InputProps={{
          readOnly: true,
        }}
        variant="filled"
      />
    </div>
  );
}

DisplayRandomSacredPathWithButton.defaultProps = {
  seed: 0,
};
DisplayRandomSacredPathWithButton.propTypes = {
  seed: PropTypes.number,
};
