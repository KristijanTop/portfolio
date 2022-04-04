<template>
  <div class="about page">
    <navbar />
    <div class="content">
      <h1>About me</h1>
      <p>
        My name is Krstijan Topić. I come from a small town in the beautiful
        land of Croatia. I have a passion for technology, especially web
        development and UI/UX development. I love to express myself in creative
        ways, to implement my ideas and to solve problems as they come by. The
        feeling when my code works is the feeling that I love to chase.
      </p>
      <p>
        Currently, I'm in the final year of my graduate study of IT Management
        with only a graduate project left. For the past several months, I have
        been intensely focused on learning web development, especially Vue JS,
        and it has become very clear to me that that is the thing that I want to
        do in my career.
      </p>
      <p>
        Bellow you can download my CV. Thank you for your attention and enjoy
        your <span>{{ dayOfTheWeek }}.</span>
      </p>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
  name: "about",
  created() {
    document.title = "About me";
  },
  computed: {
    dayOfTheWeek() {
      const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      const d = new Date();
      let day = weekday[d.getDay()];

      return day;
    },
  },
};
</script>

<style lang="scss">
.about {
  background-color: rgb(10, 10, 10);
  width: 100%;
  height: 100%;

  .content {
    width: 90%;
    max-width: 765px;
    animation: grow1 2s;
    margin: 130px auto 0px auto;

    h1 {
      text-align: center;
      margin-bottom: 30px;
    }

    p {
      text-align: justify;
      line-height: 1.5;
      margin-bottom: 10px;
      font-size: 20px;
      font-family: "Jura-Medium";

      span {
        font-size: 20px;
        font-family: "Orbitron-ExtraBold";
      }
    }
  }
}
</style>
