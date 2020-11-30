import Vue from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default Vue.extend({
  name: "PageAbout",
  data() {
    return {
      title: "About",
      texts: [
        `
          In the course of his creative process, Dito always raises the theme of
          <span class="font-medium">the meaning of honesty</span>
          from a sense of loss, where according to him that feeling is a
          <span class="font-medium">depiction of a complete human figure.</span>
        `,
        `
          This idea developed into one of Dito's quest goals to
          <span class="font-medium">explore different perspectives</span>
          from different mediums, which later could describe and preserve
          <span class="font-medium">the meaning of human beings.</span>
        `,
        `
          Currently, Dito is completing his undergraduate thesis at the Faculty
          of Psychology, Gadjah Mada University.
        `
      ]
    };
  },
  mounted: function() {
    this.aboutScroll();
  },
  methods: {
    aboutScroll() {
      gsap.fromTo(
        ".about-text",
        { autoAlpha: 0, y: 30 },
        {
          scrollTrigger: {
            id: "about-text",
            trigger: ".about-text",
            start: "top 64%",
            end: "20% 30%",
            toggleActions: "play none none reverse"
          },
          y: 0,
          z: 10,
          autoAlpha: 1,
          rotation: 0.01
        }
      );
    }
  }
});
