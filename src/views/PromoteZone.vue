<template>
  <div class="promotezoneApp page">
    <navbar />
    <div class="content">
      <div class="header">
        <h1>PromoteZone (coming soon)</h1>
      </div>

      <div class="row">
        <div class="column1">
          <p>
            The PromoteZone app is an app that I'm especially excited about. I
            am currently developing this app as a part of my graduation project.
            The app is meant to be a place where brands and promoters can find
            each other and collaborate. As a part of the registration process,
            the user will choose an account type between business for brands and
            promo for promoters, fill in the required information and create a
            profile. When the user has an account he will be able to search and
            filter the other type based on numerous categories and communicate
            via live chat. It will also have other features like adding the
            desired profiles to your list of collaborators and more. This app is
            being developed using Vue JS and Firebase. To the right you can
            see a prototype of the app.
          </p>
        </div>
        <div class="column2">
          <iframe
            style="border: 1px solid rgba(0, 0, 0, 0.1)"
            width="100%"
            height="550"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FQyl15eq91rDOab86Y7vcrs%2FPROMOTEZONE%3Fkind%3D%26node-id%3D4%253A2%26page-id%3D0%253A1%26scaling%3Dcontain%26starting-point-node-id%3D4%253A2%26viewport%3D241%252C48%252C0.36"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "FetPizza",
  created() {
    document.title = "PromoteZone";
  },
  components: {
    Navbar,
  },
};
</script>


<style lang="scss">
.promotezoneApp {
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