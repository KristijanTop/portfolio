<template>
  <div class="fetpizza page">
    <navbar />
    <transition name="carousel">
      <carousel
        @next="next"
        @prev="prev"
        @close="carouselVisible = false"
        v-if="carouselVisible"
      >
        <carousel-slide
          class="carouselImg"
          v-for="(image, index) in images"
          :key="image"
          :index="index"
          :visibleImage="visibleImage"
          :direction="direction"
        >
          <img :src="image" />
        </carousel-slide>
      </carousel>
    </transition>
    <div class="content">
      <div class="header">
        <h1>FetPizza</h1>
        <a href="https://fetpizza-7be02.web.app" target="_blank"
          >See live demo</a
        >
        <a href="https://github.com/KristijanTop/fetpizza" target="_blank"
          >See code</a
        >
      </div>

      <div class="row">
        <div class="column1">
          <p>
            In the FetPizza app, users can order pizza from an imaginary pizza
            place. Users can order multiple pizzas, fill in the necessary
            information for the delivery and the app will calculate the total
            price and send the order to the admin side who can view all orders
            when he logs in. This app was developed using Vue JS and Firebase
            for the backend.
          </p>
        </div>
        <div class="column2">
          <img
            src="@/assets/fetpizza.jpg"
            alt="fetpizza"
            @click="
              carouselVisible = true;
              visibleImage = 0;
            "
          />
        </div>
      </div>

      <div class="row reverse">
        <div class="column1">
          <p>
            In the first step, users can choose the type and size of their pizza
            and get a calculated price. Then they can add the chosen pizza to
            their order and repeat the step as many times as they like. They can
            view their order and the total price of their order. Finally, if
            they are satisfied with their order, they need to fill in the
            delivery information and click Finish.
          </p>
        </div>
        <div class="column2">
          <img
            src="@/assets/fetpizza2.jpg"
            alt="fetpizza"
            @click="
              carouselVisible = true;
              visibleImage = 1;
            "
          />
        </div>
      </div>

      <div class="row">
        <div class="column1">
          <p>
            The order is then sent to the admin side where he can view all
            orders and their information. The orders are sorted in a way that
            the earliest order is on top so that it has priority. When the order
            is finished, the admin can mark it as complete by clicking the little
            checkmark on the right side of the orders table, which then deletes
            the order.
          </p>
        </div>
        <div class="column2">
          <img
            src="@/assets/fetpizza3.jpg"
            alt="fetpizza"
            @click="
              carouselVisible = true;
              visibleImage = 2;
            "
          />
        </div>
      </div>

      <div class="row reverse">
        <div class="column1">
          <p>
            The user can also leave feedback by filling out the form in the bottom
            left corner of the page, which is then displayed chronologically.
          </p>
        </div>
        <div class="column2">
          <img
            src="@/assets/fetpizza4.jpg"
            alt="fetpizza"
            @click="
              carouselVisible = true;
              visibleImage = 3;
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Carousel from "../components/Carousel.vue";
import CarouselSlide from "../components/CarouselSlide.vue";

export default {
  name: "FetPizza",
  data() {
    return {
      images: [
        require("@/assets/fetpizza.jpg"),
        require("@/assets/fetpizza2.jpg"),
        require("@/assets/fetpizza3.jpg"),
        require("@/assets/fetpizza4.jpg"),
      ],
      carouselVisible: false,
      visibleImage: null,
      direction: "left",
    };
  },
  created() {
    document.title = "FetPizza";
  },
  components: {
    Navbar,
    Carousel,
    CarouselSlide,
  },

  computed: {
    imagesLength() {
      return this.images.length;
    },
  },

  methods: {
    next() {
      if (this.visibleImage >= this.imagesLength - 1) {
        this.visibleImage = 0;
      } else {
        this.visibleImage++;
      }
      this.direction = "left";
    },

    prev() {
      if (this.visibleImage <= 0) {
        this.visibleImage = this.imagesLength - 1;
      } else {
        this.visibleImage--;
      }
      this.direction = "right";
    },
  },
};
</script>


<style lang="scss">
.fetpizza {
  background-color: rgb(10, 10, 10);
  height: 100%;
  width: 100%;

  .content {
    width: 100%;
    max-width: 1300px;
    margin: 130px auto 0px auto;
    animation: grow2 2s;
    padding: 0px 40px;

    .header {
      display: flex;
      align-items: center;
      width: 50%;
      padding-right: 40px;
      margin-bottom: 40px;

      h1 {
        padding-right: 20px;
        margin-right: auto;
      }

      a {
        text-decoration: none;
        color: #fff;
        padding: 15px;
        font-size: 18px;
        transition: 0.5s ease;
        border-radius: 5px;
      }

      a:hover {
        background: rgba(68, 68, 68, 0.13);
        transform: scale(1.05);
      }
    }

    .row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin-bottom: 60px;

      .column1 {
        width: 610px;

        p {
          font-family: "Jura-Medium";
          font-size: 20px;
          line-height: 1.5;
          text-align: justify;
          padding-right: 40px;
        }
      }

      .column2 {
        width: 610px;

        img {
          width: 100%;
          border-radius: 5px;
          transition: ease 0.5s;
          cursor: pointer;
        }

        img:hover {
          transform: scale(1.008);
        }
      }
    }

    .reverse {
      flex-direction: row-reverse;

      p {
        padding-left: 40px;
        padding-right: 0px !important;
      }
    }
  }
}

@media only screen and (max-width: 1310px) {
  .row p {
    padding-right: 0px !important;
    padding-left: 0px !important;
    margin-bottom: 15px;
  }

  .header {
    width: 100% !important;
    max-width: 610px !important;
    margin: auto;
    padding-right: 0px !important;
  }
}

@media only screen and (max-width: 557px) {
  .header {
    display: block !important;

    h1 {
      margin-bottom: 40px;
    }
  }
}
</style>