import Vue from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import PortfolioHeading from "../components/PortfolioHeading.vue";

export default Vue.extend({
  name: "PortfolioPodcast",
  components: {
    PortfolioHeading
  },
  data: function() {
    return {
      title: "talks",
      description: `
        Dito started his own podcast in 2018 with 
        <span class="italic">Dara Dan Pemuda</span>,
        then within the same year, 
        <span class="italic">Loka Bersua</span> 
        was made with his friends as the guest star. Both podcast talks about 
        sharing the perspective and experience in listening to variant music 
        genres.
        In 2019, he was entrusted to manage the
        <span class="italic">EksotisMerauke</span> 
        podcast, where it tells about the experiences when he and his 
        college friends participated in social services in Merauke, Papua.
      `,
      podcasts: [
        {
          id: 1,
          show: false,
          name: "EksotisMerauke",
          type: "spotify",
          src: [
            "https://open.spotify.com/embed-podcast/episode/4t7sqCp8WUWrBPQMxxIwn9",
            "https://open.spotify.com/embed-podcast/episode/0Yi88NzUtsbTtoWTAFIRCM",
            "https://open.spotify.com/embed-podcast/episode/1EHnsS90cf8GrxbxWPtwj6",
            "https://open.spotify.com/embed-podcast/episode/14fE8Q1JiaXRwm9LQAPuSX",
            "https://open.spotify.com/embed-podcast/episode/28yLAnbOHFlNOq5zMIh6V7",
            "https://open.spotify.com/embed-podcast/episode/1RUbojWjWv4wnDLESMbcq7",
            "https://open.spotify.com/embed-podcast/episode/3mnaUMwIP0Sa3wmB71psFc"
          ],
          active: 1
        },
        {
          id: 2,
          show: false,
          name: "Loka Bersua",
          type: "soundcloud",
          src: [
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/440655900&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ],
          active: 1
        },
        {
          id: 3,
          show: false,
          name: "Dara Dan Pemuda",
          type: "mixcloud",
          src: [
            "https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fbuvv%2Fdara-dan-pemuda-vol1%2F",
            "https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fbuvv%2Fdara-dan-pemuda-vol2%2F",
            "https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fbuvv%2Fdara-dan-pemuda-vol4%2F"
          ],
          active: 1
        }
      ]
    };
  },
  mounted() {
    gsap.fromTo(
      ".podcast-grid",
      { y: 50, autoAlpha: 0 },
      {
        scrollTrigger: {
          trigger: ".podcast-grid-container",
          start: "top 80%",
          end: "20% 30%",
          toggleActions: "play none none none"
        },
        y: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.2
      }
    );
  },
  methods: {
    loopNext: function(id: number, length: number) {
      const len = length;
      if (id > len) {
        id = 1;
      } else if (id < 1) {
        id = len;
      }
      return id;
    }
  }
});
