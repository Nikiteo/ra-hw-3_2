import React from 'react';
import PropTypes from 'prop-types';

export default function Listing({ items }) {

  if (!items) return null;

  const imgSrc = items.MainImage && items.MainImage.url_570xN;
  const imgId = items.MainImage && items.MainImage.listing_image_id;

  const MAX_TEXT_LENGTH = 50;
  let text = String(items.title);

  if (text.length > MAX_TEXT_LENGTH) {
    text = `${text.slice(0, MAX_TEXT_LENGTH + 1)}…`;
  }

  let priceWithСurrency = '';

  if (items.currency_code === 'USD') {
    priceWithСurrency = `$${items.price}`;
  } else if (items.currency_code === 'EUR') {
    priceWithСurrency = `€${items.price}`;
  } else {
    priceWithСurrency = `${items.price} ${items.currency_code}`;
  }

  const quantityItems = items.quantity;
  let className = 'item-quantity';

  if (quantityItems <= 10) {
    className += ' level-low';
  } else if (quantityItems <= 20) {
    className += ' level-medium';
  } else {
    className += ' level-high';
  }


  return (
        <div className="item">
            <div className="item-image">
              <a href={items.url}>
                <img src={imgSrc} alt={imgId}/>
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{text}</p>
              <p className="item-price">{priceWithСurrency}</p>
              <p className={className}>{`${quantityItems} left`}</p>
            </div>
        </div>
  );
}

Listing.propTypes = {
  items: PropTypes.object,
};
Listing.defaultProps = { items: [] };
