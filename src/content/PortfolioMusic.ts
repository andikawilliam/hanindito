import Vue from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import PortfolioHeading from "../components/PortfolioHeading.vue";

export default Vue.extend({
  name: "PortfolioMusic",
  components: {
    PortfolioHeading
  },
  data: function() {
    return {
      title: "mixtapes",
      description: `
        Being a  
        <span class="">part-time DJ</span> 
        since 2019, Dito always offers various perspectives. Dito has performed
        several times with his 
        <span class="">collective</span> 
        and as a 
        <span class="">solo.</span> 
        Currently, Dito likes to explore and experiment with various music 
        genres through his mixtape choices.
      `,
      mixtapes: [
        {
          id: 1,
          show: false,
          rowGrid: 3,
          colGrid: 2,
          name: "Suddenly Kaget Mixtape: masa, masa",
          src: [
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/769393264&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ],
          active: 1
        },
        {
          id: 2,
          show: false,
          rowGrid: 3,
          colGrid: 3,
          name: "SUBLIMINAL MESSAGES: SWABTEST#1",
          src: ["https://www.youtube.com/embed/pvJEInkcfxI"],
          active: 1
        },
        {
          id: 3,
          show: false,
          rowGrid: 1,
          colGrid: 5,
          name: "Suddenly Kaget Mixtape: Maharddhika",
          src: [
            "https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FSuddenlyKaget%2Fsuddenlykaget-mixtape-maharddhika%2F"
          ],
          active: 1
        },
        {
          id: 4,
          show: false,
          rowGrid: 1,
          colGrid: 5,
          name: "buvv Mixtapes",
          src: [
            "https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fbuvv%2Finfidelity-in-suburbia-mixtape-awal-tahun-2019%2F",
            "https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fbuvv%2Ftjakrawala-mixtape-awal-tahun%2F",
            "https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fbuvv%2Fekspresi-mixtape-akhir-tahun-2018%2F",
            "https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fbuvv%2Fdisko-medley-indonesia-mixtape-akhir-tahun-2018%2F"
          ],
          active: 1
        }
      ]
    };
  },
  mounted: function() {
    gsap.fromTo(
      ".mixtape-grid",
      { y: 100, autoAlpha: 0 },
      {
        scrollTrigger: {
          trigger: ".mixtape-grid-container",
          start: "top 64%",
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
    gridSpan: function(rowSize: number, columnSize: number) {
      const row: string = "md:row-span-" + rowSize;
      const col: string = "md:col-span-" + columnSize;
      return row + " " + col;
    },
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
