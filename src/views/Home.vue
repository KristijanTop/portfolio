<template>
  <div class="home page">
    <navbar />
    <div class="landingPage">
      <div class="container">
        <span class="text text1" data-text="HELLO"
          >HELLO
          <div class="dot"></div>
        </span>

        <span class="text text2" data-text="My name is Kristijan"
          >My name is Kristijan</span
        >
        <span class="text text3" data-text="I'm an aspiring web developer"
          >I'm an aspiring web developer</span
        >
      </div>

      <ul class="box-area">
        <li><font-awesome-icon icon="fa-solid fa-code" /></li>
        <li><font-awesome-icon icon="fa-solid fa-code" /></li>
        <li><font-awesome-icon icon="fa-solid fa-code" /></li>
        <li><font-awesome-icon icon="fa-solid fa-code" /></li>
        <li><font-awesome-icon icon="fa-solid fa-code" /></li>
        <li><font-awesome-icon icon="fa-solid fa-code" /></li>
        <li><font-awesome-icon icon="fa-solid fa-code" /></li>
        <li><font-awesome-icon icon="fa-solid fa-code" /></li>
        <li><font-awesome-icon icon="fa-solid fa-code" /></li>
        <li><font-awesome-icon icon="fa-solid fa-code" /></li>
        <li><font-awesome-icon icon="fa-solid fa-code" /></li>
      </ul>
    </div>

    <div class="more">
      <div class="skills">
        <h1>My skills</h1>
        <div class="skills-table">
          <div class="skill">HTML</div>
          <div class="skill">CSS</div>
          <div class="skill">JavaScript</div>
          <div class="skill">Vue JS</div>
          <div class="skill">CSS Preprocessors</div>
          <div class="skill">Bootstrap</div>
          <div class="skill">Firebase</div>
          <div class="skill">Git</div>
          <div class="skill">Wordpress</div>
          <div class="skill">Figma</div>
        </div>
      </div>

      <div class="projects">
        <h1>My projects</h1>

        <router-link to="/invoiceGenerator">
          <div class="project">
            <div class="row invoice-generator">
              <div class="column1">
                <h2>InvoiceGenerator</h2>
                <p>
                  The InvoiceGenerator app is an app that allows users to
                  generate invoices for their business customers. The user can
                  create an invoice, fill in the necessary data and later export
                  it as a PDF. The app was developed using Vue JS, Firebase and
                  jsPDF library for the PDF generation.
                </p>
              </div>
              <div class="column2">
                <img
                  src="@/assets/invoiceGenerator1.jpg"
                  alt="invoiceGenerator"
                />
              </div>
            </div>
          </div>
        </router-link>

        <router-link to="/fetpizza">
          <div class="project">
            <div class="row fet-pizza">
              <div class="column1">
                <h2>FetPizza</h2>
                <p>
                  In the FetPizza app, users can order pizza from an imaginary
                  pizza place. Users can order multiple pizzas, fill in the
                  necessary information for the delivery and the app will
                  calculate the total price and send the order to the admin side
                  who can view all orders when he logs in. This app was
                  developed using Vue JS and Firebase for the backend.
                </p>
              </div>
              <div class="column2">
                <img src="@/assets/fetpizza.jpg" alt="fetpizza" />
              </div>
            </div>
          </div>
        </router-link>

        <router-link to="/dietlife">
          <div class="project">
            <div class="row dietlife">
              <div class="column1">
                <h2>DietLife</h2>
                <p>
                  The DietLife app is an app where users post and share recipes
                  that belong to various diet types. It allows users to find
                  ideas for meals and stay inside their diet restrictions. When
                  a user posts a recipe, he selects appropriate diets, states
                  the macronutrients per portion, enters a description and
                  ingredients for the recipe. Users can also favorite recipes
                  which they like to save them for later. The app was developed
                  using Vue JS and Firebase.
                </p>
              </div>
              <div class="column2">
                <img src="@/assets/dietlife.jpg" alt="dietlife" />
              </div>
            </div>
          </div>
        </router-link>

        <router-link to="/promotezone">
          <div class="project">
            <div class="row promotezone">
              <div class="column1">
                <h2>PromoteZone (coming soon)</h2>
                <p>
                  The PromoteZone app is an app that I'm especially excited
                  about. I am currently developing this app as a part of my
                  graduation project. The app is meant to be a place where
                  brands and promoters can find each other and collaborate. As a
                  part of the registration process, the user will choose an
                  account type between business for brands and promo for
                  promoters, fill in the required information and create a
                  profile. When the user has an account he will be able to
                  search and filter the other type based on numerous categories
                  and communicate via live chat. It will also have other
                  features like adding the desired profiles to your list of
                  collaborators and more. This app is being developed using Vue
                  JS and Firebase. To the right you can see a prototype of the
                  app.
                </p>
              </div>
              <div class="column2">
                <img src="@/assets/promotezone.jpg" alt="promotezone" />
              </div>
            </div>
          </div>
        </router-link>

        <div class="project">
          <h2>Source code for my portfolio >></h2>
        </div>
      </div>

      <div class="contact">
        <h1>Contact me</h1>
        <p>Email: kris.topic@gmail.com</p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  created() {
    document.title = "Kristijan Topić";
  },
};
</script>

<style lang="scss">
.home {
  background-color: rgb(10, 10, 10);
  width: 100%;
  height: 100%;

  .landingPage {
    height: 100vh;
    position: relative;

    .container {
      position: absolute;
      top: 50%;
      left: 10%;
      transform: translateY(-50%);
      max-width: 430px;
      z-index: 1;

      span {
        color: white;
        display: block;
      }

      .text1 {
        font-size: 70px;
        font-weight: 700;
        letter-spacing: 5px;
        margin-bottom: 20px;
        position: relative;
        animation: hello 2s 1;
        font-family: "Orbitron-ExtraBold";
        z-index: 1;
        max-width: 335px;
      }

      .dot {
        height: 10px;
        width: 10px;
        background: #fff;
        position: absolute;
        bottom: 17px;
        left: 320px;
        animation: fade 1s;
        opacity: 0;
        animation-delay: 1.2s;
        animation-fill-mode: forwards;
        border-radius: 2px;
      }

      .text2 {
        font-size: 35px;
        margin-bottom: 20px;
        opacity: 0;
        animation: fade2 2s;
        animation-delay: 1.7s;
        animation-fill-mode: forwards;
      }

      .text3 {
        font-size: 22px;
        animation: slide 0.7s ease-in-out;
        animation-delay: 2.5s;
        animation-fill-mode: forwards;
        transform: translateX(-50%);
        opacity: 0;
        max-width: 360px;
      }
    }

    .text {
      position: relative;
    }

    .container .text::before,
    .container .text::after {
      color: white;
      content: attr(data-text);
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgb(10, 10, 10);
      overflow: hidden;
      top: 0;
    }

    .container .text:before {
      left: 3px;
      text-shadow: -2px;
      animation: glitch-1 4s infinite reverse;
      animation-delay: 3s;
      opacity: 0;
    }

    .container .text:after {
      left: -3px;
      text-shadow: -2px 0 blue;
      animation: glitch-2 4s linear infinite reverse;
      animation-delay: 3s;
      opacity: 0;
    }

    .box-area {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;

      li {
        position: absolute;
        display: block;
        list-style: none;
        animation: box 20s linear infinite;
        bottom: -150px;
        color: rgba(255, 255, 255, 0.2);
      }

      li:nth-child(1) {
        left: 86%;
        animation-delay: 5s;
        font-size: 40px;
      }

      li:nth-child(2) {
        left: 12%;
        font-size: 32px;
        animation-delay: 1.5s;
        animation-duration: 10s;
      }

      li:nth-child(3) {
        left: 70%;
        font-size: 50px;
        animation-delay: 5.5s;
      }

      li:nth-child(4) {
        left: 42%;
        font-size: 45px;
        animation-delay: 10s;
        animation-duration: 15s;
      }

      li:nth-child(5) {
        left: 65%;
        font-size: 40px;
        animation-delay: 0s;
      }

      li:nth-child(6) {
        left: 25%;
        font-size: 35px;
        animation-delay: 3.5s;
        animation-duration: 15s;
      }

      li:nth-child(7) {
        left: 35%;
        font-size: 40px;
        animation-delay: 15s;
      }

      li:nth-child(8) {
        left: 75%;
        font-size: 55px;
        animation-delay: 10s;
      }

      li:nth-child(9) {
        left: 65%;
        font-size: 47px;
        animation-delay: 15s;
      }

      li:nth-child(10) {
        left: 45%;
        font-size: 50px;
        animation-delay: 0s;
        animation-duration: 15s;
      }

      li:nth-child(11) {
        left: 85%;
        font-size: 60px;
        animation-delay: 0s;
      }
    }
  }

  .more {
    background-color: rgb(10, 10, 10);
    border-top: solid 1px #fff;
    overflow: hidden;
    width: 100%;

    .skills {
      padding-top: 100px;
      width: 100%;
      max-width: 1300px;
      margin: auto;

      h1 {
        margin-bottom: 40px;
        padding-left: 50px;
        font-size: 35px;
      }

      .skills-table {
        display: flex;
        flex-wrap: wrap;
        max-width: 1300px;
        justify-content: center;

        .skill {
          padding: 20px;
          text-align: center;
          font-family: "Jura-Medium";
          font-size: 20px;
          flex-basis: 20%;
          min-width: 180px;
          transition: 0.5s ease;
          border-radius: 5px;
        }

        .skill:hover {
          background: rgba(68, 68, 68, 0.13);
          transform: scale(1.05);
        }
      }
    }

    .projects {
      width: 100%;
      margin: 100px auto 0px auto;
      max-width: 1300px;

      a {
        text-decoration: none;
        color: #fff;
      }

      h1 {
        font-size: 35px;
        margin-bottom: 30px;
        padding-left: 50px;
      }

      .project {
        padding: 50px;
        transition: 0.5s ease;
        cursor: pointer;
        border-radius: 5px;

        .row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;

          .column1 {
            width: 600px;

            h2 {
              margin-bottom: 20px;
            }

            p {
              font-family: "Jura-Medium";
              font-size: 20px;
              text-align: justify;
              line-height: 1.5;
            }
          }

          .column2 {
            width: 600px;

            img {
              width: 100%;
              border-radius: 5px;
            }
          }
        }

        .invoice-generator p,
        .dietlife p {
          padding-right: 40px;
        }

        .fet-pizza,
        .promotezone {
          flex-direction: row-reverse;

          p {
            padding-left: 40px;
          }

          h2 {
            padding-left: 40px;
          }
        }
      }

      .project:hover {
        background: rgba(68, 68, 68, 0.13);
        transform: scale(1.008);
      }
    }

    .contact {
      padding: 50px;
      width: 100%;
      max-width: 1300px;
      margin: auto;

      h1 {
        font-size: 35px;
        margin-bottom: 15px;
      }

      p {
        font-family: "Jura-Medium";
        font-size: 20px;
      }
    }
  }
}

@keyframes hello {
  0% {
    margin-bottom: -50px;
    transform: translateX(-50px);
  }

  30% {
    letter-spacing: 25px;
    margin-bottom: -50px;
  }

  85% {
    letter-spacing: 8px;
    margin-bottom: -50px;
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes fade {
  0% {
    transform: translateX(15px);
    opacity: 0;
  }

  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes fade2 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes slide {
  0% {
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

@keyframes box {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }

  100% {
    transform: translateY(-1150px) rotate(360deg);
    opacity: 0;
  }
}

@media only screen and (max-width: 480px) {
  .text1 {
    font-size: 14.5vw !important;
  }
  .dot {
    left: 63.5vw !important;
    height: 2vw !important;
    width: 2vw !important;
    bottom: 3.5vw !important;
  }

  @keyframes fade {
    0% {
      transform: translateX(30px);
      opacity: 0;
    }

    100% {
      transform: translateX(15px);
      opacity: 1;
    }
  }

  .text2 {
    font-size: 7.2vw !important;
  }
  .text3 {
    font-size: 4.5vw !important;
  }
}

@media only screen and (max-width: 1310px) {
  .fet-pizza p,
  .dietlife p,
  .promotezone p {
    padding-right: 0px !important;
    padding-left: 0px !important;
    margin-bottom: 15px;
  }

  .fet-pizza h2,
  .promotezone h2 {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }
}
</style>
