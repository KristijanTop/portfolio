<template>
  <div class="invoiceGenerator page">
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
        <h1>InvoiceGenerator</h1>
        <a href="https://invoicegenerator-c0363.web.app" target="_blank"
          >See live demo</a
        >
        <a
          href="https://github.com/KristijanTop/invoiceGenerator"
          target="_blank"
          >See code</a
        >
      </div>

      <div class="row">
        <div class="column1">
          <p>
            The InvoiceGenerator app is an app that allows users to generate
            invoices for their business customers. The user can create an
            invoice, fill in the necessary data and later export it as a PDF.
            The app was developed using Vue JS, Firebase and jsPDF library for
            the PDF generation.
          </p>
        </div>
        <div class="column2">
          <img
            src="@/assets/invoiceGenerator1.jpg"
            alt="invoiceGenerator"
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
            Before a user can use the app, he needs to create an account and
            fill in the necessary information about his company which will later
            be used to create an invoice.
          </p>
        </div>
        <div class="column2">
          <img
            src="@/assets/invoiceGenerator6.jpg"
            alt="invoiceGenerator"
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
            When a user has an account, he has an option to create an invoice by
            clicking on the button in the top right corner. Then a modal will
            show up on the left side of the page and the user needs to fill in
            the invoice information in order to create it. When the invoice is
            created it will be added to the user's invoice list and displayed on
            the home screen. Then a PDF version can be downloaded by clicking on
            the button download PDF.
          </p>
        </div>
        <div class="column2">
          <img
            src="@/assets/invoiceGenerator3.jpg"
            alt="invoiceGenerator"
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
            By clicking on the arrow on the right side of an individual invoice,
            the user can display additional information about the invoice and
            delete it if he chooses.
          </p>
        </div>
        <div class="column2">
          <img
            src="@/assets/invoiceGenerator4.jpg"
            alt="invoiceGenerator"
            @click="
              carouselVisible = true;
              visibleImage = 3;
            "
          />
        </div>
      </div>

      <div class="row pdf">
        <div class="column1">
          <p>The exported PDF version of the invoice.</p>
        </div>
        <div class="column2">
          <img
            src="@/assets/invoiceGenerator5.jpg"
            alt="invoiceGenerator"
            @click="
              carouselVisible = true;
              visibleImage = 4;
            "
          />
        </div>
      </div>

      <div class="row reverse">
        <div class="column1">
          <p>
            The app also has a dark mode, which the user can toggle on and off by
            clicking on the button in the navbar.
          </p>
        </div>
        <div class="column2">
          <img
            src="@/assets/invoiceGenerator2.jpg"
            alt="invoiceGenerator"
            @click="
              carouselVisible = true;
              visibleImage = 5;
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
  name: "InvoiceGenerator",
  data() {
    return {
      images: [
        require("@/assets/invoiceGenerator1.jpg"),
        require("@/assets/invoiceGenerator6.jpg"),
        require("@/assets/invoiceGenerator3.jpg"),
        require("@/assets/invoiceGenerator4.jpg"),
        require("@/assets/invoiceGenerator5.jpg"),
        require("@/assets/invoiceGenerator2.jpg"),
      ],
      carouselVisible: false,
      visibleImage: null,
      direction: "left",
    };
  },
  created() {
    document.title = "InvoiceGenerator";
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
.invoiceGenerator {
  background-color: rgb(10, 10, 10);
  height: 100%;
  width: 100%;

  .carouselImg:nth-child(8) img {
    width: 32.2%;
    min-width: 350px;
  }

  .content {
    width: 100%;
    max-width: 1300px;
    margin: 130px auto 0px auto;
    animation: grow2 2s;
    padding: 0px 40px;

    .header {
      display: flex;
      align-items: center;
      width: 55%;
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

    .pdf {
      .column1 {
        width: 500px;

        p {
          padding-right: 110px;
          text-align: center;
        }
      }

      .column2 {
        width: 353px;

        img {
          width: auto !important;
          height: 500px;
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