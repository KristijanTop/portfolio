<template>
  <div class="dietlifeApp page">
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
        <h1>DietLife</h1>
        <a href="https://dietlife-91285.firebaseapp.com" target="_blank"
          >See live demo</a
        >
        <a href="https://github.com/KristijanTop/DietLife" target="_blank"
          >See code</a
        >
      </div>

      <div class="row">
        <div class="column1">
          <p>
            The DietLife app is an app where users post and share recipes that
            belong to various diet types. It allows users to find ideas for
            meals and stay inside their diet restrictions. When a user posts a
            recipe, he selects appropriate diets, states the macronutrients per
            portion, enters a description and ingredients for the recipe. Users
            can also favorite recipes which they like to save them for later.
            The app was developed using Vue JS and Firebase.
          </p>
        </div>
        <div class="column2">
          <img
            src="@/assets/dietlife.jpg"
            alt="dietlife"
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
            After a user creates an account, he will be able to see all recipes
            the other users have posted, filter them by diets and search them by
            their name or ingredients. If he chooses, he can share his own
            recipe by clicking on the button in the navbar. He is required to
            fill in the recipe information and attach a picture.
          </p>
        </div>
        <div class="column2">
          <img
            src="@/assets/dietlife2.jpg"
            alt="dietlife"
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
            By clicking on the recipe card, user can preview additional
            information about the recipe and, if he likes it, save it for later by
            clicking on the heart in the top right corner of the modal. It will
            be added to his list of favorites. He can also remove it at any
            time.
          </p>
        </div>
        <div class="column2">
          <img
            src="@/assets/dietlife3.jpg"
            alt="dietlife"
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
            By clicking on the username in the top right corner, the user can
            preview his own recipes, delete them if he likes and preview his
            list of favorite recipes.
          </p>
        </div>
        <div class="column2">
          <img
            src="@/assets/dietlife4.jpg"
            alt="dietlife"
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
import Carousel from "../components/Carousel.vue";
import CarouselSlide from "../components/CarouselSlide.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "DietLife",
  data() {
    return {
      images: [
        require("@/assets/dietlife.jpg"),
        require("@/assets/dietlife2.jpg"),
        require("@/assets/dietlife3.jpg"),
        require("@/assets/dietlife4.jpg"),
      ],
      carouselVisible: false,
      visibleImage: null,
      direction: "left",
    };
  },
  created() {
    document.title = "DietLife";
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
.dietlifeApp {
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