// import React from 'react';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import getRandomSacredPath from '../../utils/getSacredPath';

export default function RandomSacraedPath({ index = 0, seed = null } = {}) {
  // const pathName = 'Path of Grasping Sky';
  const [pathName, setPathName] = useState('');

  useEffect(() => {
    const updateRandomSacredPath = async () => {
      const args = {};
      if (index === 0) args.seed = seed;
      const randPathName = await getRandomSacredPath(args);
      setPathName(randPathName);
    };
    updateRandomSacredPath();
  }, [index]);

  return (
    <div>
      <p className="SacraedPathName">{pathName}</p>
    </div>
  );
}

RandomSacraedPath.defaultProps = {
  index: 0,
  seed: null,
};
RandomSacraedPath.propTypes = {
  index: PropTypes.number,
  seed: PropTypes.number,
};
