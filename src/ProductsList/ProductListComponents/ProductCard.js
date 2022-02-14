import React from "react";

const ProductCard = ({item}) => {
  const {profilePic, userName, dateModified, prodImg, prodTitle, prodPrice, prodCondition, prodLikes, freeShipping, carouProtect} = item;
  return <div className="prod-card-wrapper">
    <div className="prod-card">
      <div className="prod-card-content">
      <div className="prod-card-header">
          <img className="prod-card-profile-img" src={profilePic} alt={userName}></img>
          <div className="prod-card-header-desc">
              <p className="prod-card-header-username">{userName}</p>
              <p>{dateModified}</p>
          </div>
      </div>
      <div className="prod-card-img-wrapper">
        <img className="prod-card-img" src={prodImg} alt={prodTitle}></img>
        {carouProtect && <div className="carou-protect-badge">
            <img src="https://sl3-cdn.karousell.com/components/tag_icons/protection@xxxhdpi.png" alt="Carousell Protection"></img>
            Protection
        </div>}
      </div>
      <div className="prod-card-body">
          <div className="prod-card-body-title">{prodTitle}</div>
          <div className="prod-card-price">{prodPrice}</div>
          <div className="prod-card-body-desc">
              <div className="prod-card-body-condition">{prodCondition}</div>
              {freeShipping
              ? <div className="prod-card-body-shipping">Free Shipping</div>
              : <div className="prod-card-body-shipping"><br></br></div>    }
              <div className="prod-card-body-likes">
                <svg class="heart-svg" height="20" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 1c3.852 0 7 3.148 7 7 0 3.858-2.067 7.513-5.44 10.724C16.158 21.01 13.04 23 12 23s-4.158-1.99-6.56-4.276C2.067 15.514 0 11.858 0 8c0-3.852 3.148-7 7-7 1.917 0 3.688.79 5 2.13C13.312 1.79 15.083 1 17 1zm0 2c-1.677 0-3.205.854-4.176 2.267a1 1 0 0 1-1.648 0C10.205 3.854 8.676 3 7 3 4.252 3 2 5.252 2 8c0 3.215 1.804 6.406 4.82 9.276C8.86 19.218 11.652 21 12 21c.347 0 3.14-1.782 5.18-3.724C20.197 14.406 22 11.215 22 8c0-2.748-2.252-5-5-5z" fill="#57585a"></path>
                </svg>
              <p className="like-count">{prodLikes > 0 ? prodLikes : ""}</p>
              </div>
          </div>
      </div>
      </div>
  </div>
  </div>;
};

export default ProductCard;
