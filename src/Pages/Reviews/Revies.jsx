import { Box, Heading } from "@chakra-ui/react";
import React from "react";

import styles from "./reviews.module.css";

export const Review = () => {
  return (
    <>
      <Box
        backgroundImage={
          "https://i01.appmifile.com/webfile/globalimg/in/service/faq-banner.png"
        }
        height="200px"
        color="#fff"
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
      >
        <Heading fontSize={"40px"}>Review </Heading>
      </Box>
      <section id={styles.testimonials}>
        <div class={styles.testimonialheading}>
          <h4>Clients Says</h4>
        </div>
        <div class={styles.testimonialboxcontainer}>
          <div class={styles.testimonialbox}>
            <div class={styles.boxtop}>
              <div class={styles.profile}>
                <div class={styles.profileimg}>
                  <img
                    alt="img"
                    src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
                  />
                </div>
                <div class={styles.nameuser}>
                  <strong>Liam mendes</strong>
                  <span>@liammendes</span>
                </div>
              </div>
              <div class={styles.reviews}>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
            <div class={styles.clientcomment}>
              <p>
                RedmiBook 15 i3 11th Gen + UHD Graphics 8GB RAM + 512GB SSD
                Charcoal Gray Waste of money, always hang
              </p>
            </div>
          </div>
          <div class={styles.testimonialbox}>
            <div class={styles.boxtop}>
              <div class={styles.profile}>
                <div class={styles.profileimg}>
                  <img
                    alt="img"
                    src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
                  />
                </div>
                <div class={styles.nameuser}>
                  <strong>Liam mendes</strong>
                  <span>@liammendes</span>
                </div>
              </div>
              <div class={styles.reviews}>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
            <div class={styles.clientcomment}>
              <p>
                RedmiBook 15 i3 11th Gen + UHD Graphics 8GB RAM + 512GB SSD
                Charcoal Gray Waste of money, always hang
              </p>
            </div>
          </div>{" "}
          <div class={styles.testimonialbox}>
            <div class={styles.boxtop}>
              <div class={styles.profile}>
                <div class={styles.profileimg}>
                  <img
                    alt="img"
                    src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
                  />
                </div>
                <div class={styles.nameuser}>
                  <strong>Liam mendes</strong>
                  <span>@liammendes</span>
                </div>
              </div>
              <div class={styles.reviews}>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
            <div class={styles.clientcomment}>
              <p>
                RedmiBook 15 i3 11th Gen + UHD Graphics 8GB RAM + 512GB SSD
                Charcoal Gray So good.. Very smooth.. 512gb ssd type helps to
                buttering the process smoothly.{" "}
              </p>
            </div>
          </div>{" "}
          <div class={styles.testimonialbox}>
            <div class={styles.boxtop}>
              <div class={styles.profile}>
                <div class={styles.profileimg}>
                  <img
                    alt="img"
                    src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
                  />
                </div>
                <div class={styles.nameuser}>
                  <strong>Liam mendes</strong>
                  <span>@liammendes</span>
                </div>
              </div>
              <div class={styles.reviews}>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
            <div class={styles.clientcomment}>
              <p>
                RedmiBook 15 i3 11th Gen + UHD Graphics 8GB RAM + 512GB SSD
                Charcoal Gray overall a good laptop
              </p>
            </div>
          </div>{" "}
          <div class={styles.testimonialbox}>
            <div class={styles.boxtop}>
              <div class={styles.profile}>
                <div class={styles.profileimg}>
                  <img
                    alt="img"
                    src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
                  />
                </div>
                <div class={styles.nameuser}>
                  <strong>Liam mendes</strong>
                  <span>@liammendes</span>
                </div>
              </div>
              <div class={styles.reviews}>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
            <div class={styles.clientcomment}>
              <p>
                RedmiBook 15 i3 11th Gen + UHD Graphics 8GB RAM + 512GB SSD
                Charcoal Gray Waste of money, always hang
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
