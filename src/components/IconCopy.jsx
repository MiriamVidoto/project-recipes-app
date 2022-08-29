import PropTypes from 'prop-types';
import React, { useState } from 'react';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function IconCopy({ id, type, index }) {
  const [linkCopied, setLinkCopied] = useState(false);
  const pathType = type === 'meal' || type === 'food' ? 'foods' : 'drinks';

  const handleCopy = () => {
    const copyURL = `http://localhost:3000/${pathType}/${id}`;
    copy(copyURL);
    setLinkCopied(true);
    const TWO_SECONDS = 2000;
    setTimeout(() => {
      setLinkCopied(false);
    }, TWO_SECONDS);
  };

  if (linkCopied) return <span>Link copied!</span>;

  return (
    <button
      type="button"
      className="icon-btn"
      onClick={ handleCopy }
      data-testid="share-btn"
    >
      <img
        src={ shareIcon }
        alt="share"
        className="icon-img"
        data-testid={ `${index}-horizontal-share-btn` }
      />
    </button>
  );
}

IconCopy.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default IconCopy;
