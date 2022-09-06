import React from "react";
// import "./Product.css";
import style from "./Product.module.css";
const Product = () => {
  return (
    <div class="nav">
      <div className="nav_1">
        <a class="menu-cards" href="/menu/box-meals">
           
          <img
            class="image"
            style={{ width: 120, height: 120 }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAADm5ubw8PDAwMDt7e3ExMTz8/MaGholJSVVVVXQ0ND5+fm6urq3t7dsbGx+fn50dHRmZmbZ2dktLS0LCwtdXV3Ozs5HR0cxMTGDg4OwsLBqampxcXFNTU0QEBA/Pz8eHh44ODiVmtBjAAACDElEQVR4nO3bWXKCUBSEYW5kUFFBUdQYTMz+FxmnxOnwds0tm/9bwemysLukjCIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8k2QU+oLnStKPt9A3PFM2LvtOOeFmOnBOOOFkdsinmzCuT/lUEy6HC+d0E47ylbsilzCrhs4JJ0zywjnhhEk6vc8nlfDY78oJT/1+57NMVXbpb7/fmi57oQ/z5NLv12ZVFvowT677/eJL5QG86/ezxbAKfZgnD/1+NJgtQx/midHve/MmDn2YJ2a/u105FukHu9/75UQkX1u/xyr919F+z7X7/Vul/7ra72nowzzpZr/36fdXYfb7Qr3fG/F+r+n319DS79s89GGetPR7Ld7vxTj0YZ609btK/9n9/imTL0oLqx/KVKX/oqhqjIBuuwl9l0eZ+S2zk8oY5VZTLL5UmuKosteMVMa0nhsZh0LfOPvV3ayNjHWq8lppbxSX1uc4U8qYxe/W2/lmkoS+zJ/esjQi9ouN0PNoZxzUSv3Y5Q2g8mvpUcsGkMpob4AtG+C1sAE0sAE0dHcDuC5sgLVURjaAhA5vgGIilLFlA3zob4BdvVF5mxO1bQChf5QcWBtAK6G1AdQSPm4AvYT3G0Ax4e0GkEx4swFEE171o2zCv4zCCc8bQDrhXr5STwgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFg/MXYco6m5aCoAAAAASUVORK5CYII="
            alt=""
            data-testid=""
          />
        </a>
      </div>
    

      <div className="nav_2">
        <a class="menu-cards" href="/menu/match-day-specials">
          <img
            class="image"
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-727080240552-1_235x.jpg?v=1657738892"
            alt=" "
            data-testid=""
          />
          </a>
          <div><h2> LAFCO </h2></div>
          <div class="menu-text">
            {" "}
            Summer Fling White Grapefruit Candle & Reed Diffuser Duo{" "}
          </div>
          <div><h2>$33</h2> </div>
        
      </div>
      <div className="nav_3">
        <a class="menu-cards" href="/menu/chicken-buckets">
          <img
            class="image"
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-840732122355-1_235x.jpg?v=1654275321"
            alt=""
            data-testid=""
          />
          </a>
          <div> <h2>LAFCO</h2> </div>
          <div class="menu-text">
            {" "}
            Summer Fling White Grapefruit Candle & Reed Diffuser Duo{" "}
          </div>
          <div><h2>$33</h2> </div>
      </div>
      <div className="nav_4">
        <a class="menu-cards" href="/menu/biryani-buckets">
          <img
            class="image"
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-8028713620034-1_235x.jpg?v=1657569140"
            alt=""
            data-testid=""
          />
          </a>
          <div><h2>LAFCO </h2> </div>
          <div class="menu-text">
            {" "}
            Summer Fling White Grapefruit Candle & Reed Diffuser Duo{" "}
          </div>
          <div><h2>$33</h2> </div>
        
      </div>

      <div className="nav_5">
        <a class="menu-cards" href="/menu/box-meals">
          <img
            class="image"
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-8028713620034-1_235x.jpg?v=1657569140"
            alt=""
            data-testid=""
          />
           </a>
          <div><h2>LAFCO </h2> </div>
          <div class="menu-text">
            {" "}
            Summer Fling White Grapefruit Candle & Reed Diffuser Duo{" "}
          </div>
          <div><h2>$33</h2> </div>
       
      </div>
      <div className="nav_6">
        <a class="menu-cards" href="/menu/box-meals">
          <img
            class="image"
            style={{ width: 130, height: 110 }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAAD6+vohISHk5OQaGhoJCQmpqam2trbr6+s2NjakpKRcXFz09PRKSkr7+/vp6emTk5MtLS0/Pz+6urplZWWdnZ0QEBBWVlbZ2dnPz89ycnKAgIB4eHgWFhY5OTmMjIzDw8OOjo5iYmIoKChpapyGAAACE0lEQVR4nO3b/XLBQByFYbv1raFBQhZF9f6vsapVJL/+F7OTk/e5gj0j9pyR0ekAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgf2+xD/BsfjPsxj7Dc/mVex1IZ/QvzvVPufCz+p3QudU69bFP8iw/Cc+f4zQXzXhNeLYfxD7MU9wldK43SGKfp34PCZ2bD0exT1S3UkLnxkux7vA9V7bW2gCzdSWhE9sART6uRtTaAL7Iy99FuQ3gux/Goyq2AZKtkVFsA/jdu5FRawN0t8adI7YBisPCyKi1AcKHlVFrA4R0b2TU2gAhnxvdIbYB0hZsgIPxqKptgJ2RUWwDJGwACcWWDaAgpNazKrYB0jZsgOovVmyA5hm1YQNsWrABdmwABWwACbOQG/3Yf53o3Dkh6xuf4vQ4i32wmhQnY8W5xVLlRu1mZisOZT6/zIjX/xzGPldNksJ6g9ObTmIfrCZJMPPJ3KBJMN8yZgOR+8UfD9b9mcksmePWfJshky9srHxrmbVNvzebfL9bv8zQ703Rgn7/NAIq9bv5K4VOvo2Vj35vCvl+P1n3J/3eEPr9br4dlOn3hH5vNvV+73jrTZlOv3fMfwXp9PtF+Z9dOv1+9ZhQp99v7hPq9Pu9W0Kdfn/0l1Cn30t+E+r0e8UloVC/V537UKrfq/xUq98BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJD2BbYLH/uln1FdAAAAAElFTkSuQmCC"
            alt=""
            data-testid=""
          />
          {/* <div class="menu-text"> Box Meals </div> */}
        </a>
      </div>
    </div>
  );
};

export default Product;
