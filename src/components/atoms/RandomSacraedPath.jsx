import React, { useState, useEffect } from 'react';
import getRandomPath from '../../utils/getSacredPath';

export default function RandomSacraedPath() {
  const [pathName, setPathName] = useState('');

  getRandomPath().then((randPathName) => {
    setPathName(randPathName);
  });

  useEffect(() => {
    const updateRandomSacredPath = async () => {
      const randPathName = await getRandomPath();
      setPathName(randPathName);
    };

    updateRandomSacredPath();
  }, [pathName]);

  return (
    <div>
      <p className="SacraedPathName">{pathName}</p>
    </div>
  );
}
