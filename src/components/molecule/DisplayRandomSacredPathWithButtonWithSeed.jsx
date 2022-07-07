import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';

import DisplayRandomSacredPathWithButton from './DisplayRandomSacredPathWithButton';

export default function DisplayRandomSacredPathWithButtonWithSeed({
  initialSeed = 0,
} = {}) {
  const [seed, setSeed] = useState(initialSeed);

  return (
    <div>
      <DisplayRandomSacredPathWithButton seed={seed} />
      <br />
      <TextField
        id="seed-value"
        label="seed"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        defaultValue={initialSeed}
        onChange={(event) => {
          const { value } = event.target;
          setSeed(parseInt(value, 10));
        }}
      />
    </div>
  );
}

DisplayRandomSacredPathWithButtonWithSeed.defaultProps = {
  initialSeed: 0,
};
DisplayRandomSacredPathWithButtonWithSeed.propTypes = {
  initialSeed: PropTypes.number,
};
