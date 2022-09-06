import React from "react";
import style from "./SingleProduct.module.css";

export const ProductAbout = () => {
  return (
    <div className={style.productDiv}>
      <div>About the Brand
        <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Chantecaille_Logo.png?v=1605032368" alt="" />
      </div>
      <div>
        <p className={style.p}>
          Chantecaille is the preeminent luxury brand for serious skincare and
          beautifying cosmetics known for its uniquely high concentration of
          natural botanicals. The line stands out for the extensive research and
          technological innovation invested in each groundbreaking formula. It
          is also distinguished by the exceptional purity of its ingredients,
          which are endowed with a potent life force capable of nourishing and
          revitalizing the skin, the body and the spirit.
        </p>
      </div>
    </div>
  );
};
