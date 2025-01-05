(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    7816: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 4168));
    },
    4168: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => tt });
      var s = a(4001),
        i = a(7749),
        n = a(5868),
        r = a.n(n),
        l = a(4903),
        o = a.n(l),
        c = a(4309),
        d = a.n(c),
        m = a(8207),
        h = a.n(m),
        x = a(8399),
        p = a.n(x),
        u = a(7615),
        f = a.n(u),
        g = a(5572),
        b = a.n(g);
      let v = () => ({
        font: h(),
        serif_font: p(),
        main: r(),
        sub: d(),
        sub_cap: o(),
        handwriting: f(),
        mono: b(),
      });
      var j = a(6199),
        y = a(8069),
        w = a(3549),
        C = a(3854);
      function N() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, C.QP)((0, w.$)(t));
      }
      let k = (0, y.F)(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline:
                  "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                avatarLinks:
                  "hover: text-background hover:text-primary !bg-glassmorphic items-center gap-2 rounded-full",
                ghostNoHover: "",
                heroCTA: "!bg-glassmorphic border border-gray-50 text-gray-50",
              },
              size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9",
                responsiveXL: "h-14 text-xl xl:text-2xl rounded-full px-10",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        L = i.forwardRef((e, t) => {
          let { className: a, variant: i, size: n, asChild: r = !1, ...l } = e,
            o = r ? j.DX : "button";
          return (0, s.jsx)(o, {
            className: N(k({ variant: i, size: n, className: a })),
            ref: t,
            ...l,
          });
        });
      L.displayName = "Button";
      var z = a(5290),
        E = a(588),
        A = a(217),
        R = a(3669);
      let S = {
        "from-bottom": {
          initial: { y: "100%", opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: "100%", opacity: 0 },
        },
        "from-center": {
          initial: { scale: 0.5, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.5, opacity: 0 },
        },
        "from-top": {
          initial: { y: "-100%", opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: "-100%", opacity: 0 },
        },
        "from-left": {
          initial: { x: "-100%", opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: "-100%", opacity: 0 },
        },
        "from-right": {
          initial: { x: "100%", opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: "100%", opacity: 0 },
        },
        fade: {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        },
        "top-in-bottom-out": {
          initial: { y: "-100%", opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: "100%", opacity: 0 },
        },
        "left-in-right-out": {
          initial: { x: "-100%", opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: "100%", opacity: 0 },
        },
      };
      function I(e) {
        let {
            animationStyle: t = "from-center",
            videoSrc: a,
            thumbnailSrc: n,
            thumbnailAlt: r = "Video thumbnail",
            className: l,
          } = e,
          [o, c] = (0, i.useState)(!1),
          d = S[t];
        return (0, s.jsxs)("div", {
          className: N("relative", l),
          children: [
            (0, s.jsxs)("div", {
              className: "relative cursor-pointer group",
              onClick: () => c(!0),
              children: [
                (0, s.jsx)("img", {
                  src: n,
                  alt: r,
                  width: 1920,
                  height: 1080,
                  className:
                    "w-full transition-all duration-200 group-hover:brightness-[0.8] ease-out rounded-3xl shadow-lg border border-background/10",
                }),
                (0, s.jsx)("div", {
                  className:
                    "absolute inset-0 flex items-center justify-center group-hover:scale-100 scale-[0.9] transition-all duration-200 ease-out rounded-2xl",
                  children: (0, s.jsx)("div", {
                    className:
                      "bg-primary/10 flex items-center justify-center rounded-full backdrop-blur-md size-28",
                    children: (0, s.jsx)("div", {
                      className:
                        "flex items-center justify-center bg-gradient-to-b from-primary/30 to-primary shadow-md rounded-full size-20 transition-all ease-out duration-200 relative group-hover:scale-[1.2] scale-100",
                      children: (0, s.jsx)(A.A, {
                        className:
                          "size-8 text-white fill-white group-hover:scale-105 scale-100 transition-transform duration-200 ease-out",
                        style: {
                          filter:
                            "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
                        },
                      }),
                    }),
                  }),
                }),
              ],
            }),
            (0, s.jsx)(z.N, {
              children:
                o &&
                (0, s.jsx)(E.P.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  onClick: () => c(!1),
                  exit: { opacity: 0 },
                  className:
                    "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md",
                  children: (0, s.jsxs)(E.P.div, {
                    ...d,
                    transition: { type: "spring", damping: 30, stiffness: 300 },
                    className:
                      "relative w-full max-w-4xl aspect-video mx-4 md:mx-0",
                    children: [
                      (0, s.jsx)(E.P.button, {
                        className:
                          "absolute -top-16 right-0 text-white text-xl bg-neutral-900/50 ring-1 backdrop-blur-md rounded-full p-2 dark:bg-neutral-100/50 dark:text-black",
                        children: (0, s.jsx)(R.A, { className: "size-5" }),
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "size-full border-2 border-white rounded-2xl overflow-hidden isolate z-[1] relative",
                        children: (0, s.jsx)("iframe", {
                          src: a,
                          className: "size-full rounded-2xl",
                          allowFullScreen: !0,
                          allow:
                            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                        }),
                      }),
                    ],
                  }),
                }),
            }),
          ],
        });
      }
      function V() {
        return (0, s.jsx)("div", {
          className: "relative w-full lg:w-1/2 mx-auto mt-4 mb-8",
          children: (0, s.jsx)(I, {
            className: "block",
            animationStyle: "top-in-bottom-out",
            videoSrc:
              "https://www.youtube.com/embed/AQ0y952kZyA?si=IjfPc3v05bwdTkN",
            thumbnailSrc:
              "/home/debanjan/perceptron/perceptron2k25/build/images/youtube-thumbnail.png",
            thumbnailAlt: "Hero Video",
          }),
        });
      }
      let T = () => {
          let { main: e, font: t, serif_font: a, sub: n, sub_cap: r } = v(),
            [l, o] = (0, i.useState)("PERCEPTRON");
          return (0, s.jsx)("div", {
            className:
              "w-screen h-full flex flex-col items-center justify-center py-12 sm:pr-4 !border-b-0",
            children: (0, s.jsx)("div", {
              className: "h-full flex items-center justify-center",
              children: (0, s.jsxs)("div", {
                className: "".concat(
                  t.className,
                  " my-auto flex flex-col p-6 justify-center items-center"
                ),
                children: [
                  (0, s.jsx)("div", {
                    className: "".concat(
                      r.className,
                      " font-size-sm tracking-[2rem] md:tracking-[4rem] leading-[0px] flex flex-wrap items-center justify-center p-4 translate-x-[4%] text-slate-500"
                    ),
                    children: "ABOUT",
                  }),
                  (0, s.jsx)("div", {
                    className: "".concat(
                      e.className,
                      " font-size-lg flex flex-wrap items-center justify-start px-4 mb-6 text-primary"
                    ),
                    children: l,
                  }),
                  (0, s.jsx)("div", {
                    className: "flex flex-1 max-w-[1250px] sm:gap-4",
                    children: (0, s.jsxs)("div", {
                      className: "flex flex-col flex-1",
                      children: [
                        (0, s.jsx)(V, {}),
                        (0, s.jsxs)("div", {
                          className: "flex gap-4",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "w-[5%] max-sm:hidden rounded-md mt-[18px] h-[3px] bg-primary",
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "flex flex-1 justify-center items-center",
                              children: (0, s.jsx)("div", {
                                className: "".concat(
                                  a.className,
                                  " text-ellipsis font-size-sm text-justify leading-6 sm:leading-10 overflow-hidden text-slate-300"
                                ),
                                children:
                                  "RKMVERI" == l
                                    ? (0, s.jsxs)("div", {
                                        className: "space-y-4",
                                        children: [
                                          (0, s.jsx)("div", {
                                            children:
                                              "Ramakrishna Mission Vivekananda Educational and Research Institute (RKMVERI) is a recognized Deemed-to-be-University,overseen by the Ramakrishna Mission – a charitable, philanthropic, and spiritual organization with over more than 200 branches worldwide. Government of India declared RKMVERI, through a Gazetted Notification dated 5 January 2005, as a de novo Deemed-to-be-University under Section 3 of UGC Act, 1956.",
                                          }),
                                          (0, s.jsx)("div", {
                                            children:
                                              "The Institute is a leading educational institution in the country with a strong commitment to excellence in education and research offering a wide range of programs in the field of Arts, Science, Indian Heritage and more. Over a century ago, Swami Vivekananda, a leader in India's modernization and a Vedanta philosopher, emphasized education as a holistic process that builds character and integrates both Eastern spiritual wisdom and Western scientific knowledge. He supported educational initiatives and inspired figures like Jamshedji Tata, founder of the Indian Institute of Science. RKMVERI continues this legacy by focusing on character development, intellectual growth, and fostering a culture of innovation and service to society.",
                                          }),
                                        ],
                                      })
                                    : (0, s.jsxs)("div", {
                                        className: "space-y-4",
                                        children: [
                                          (0, s.jsx)("div", {
                                            children:
                                              "Welcome to the 3rd installation of Perceptron, the flagship technical fest organized by the Department of Computer Science at Ramakrishna Mission Vivekananda Educational and Research Institute, Belur.",
                                          }),
                                          (0, s.jsx)("div", {
                                            children:
                                              "This year, Perceptron 2025 is a two-day extravaganza packed with exciting events, ranging from coding challenges and chess tournaments to quizzes, gaming competitions, and much more. For those eager to dive into the latest trends in Artificial Intelligence and technology, we have curated insightful seminars and thrilling hackathons that will inspire and ignite innovation.",
                                          }),
                                          (0, s.jsx)("div", {
                                            children:
                                              "Be a part of this dynamic journey where technology meets talent, and ideas turn into reality. Perceptron 2025 isn’t just an event – it’s a movement to push boundaries, ignite passion, and celebrate the spirit of innovation. Whether you're here to compete, learn, or simply explore, there’s something for everyone. Let’s come together to create moments that inspire and memories that last a lifetime!",
                                          }),
                                        ],
                                      }),
                              }),
                            }),
                          ],
                        }),
                        (0, s.jsxs)(L, {
                          className: "".concat(
                            n.className,
                            " md:translate-x-[78px] !text-lg mt-6 w-[320px]"
                          ),
                          variant: "heroCTA",
                          size: "responsiveXL",
                          onClick: () =>
                            o("RKMVERI" == l ? "PERCEPTRON" : "RKMVERI"),
                          children: [
                            "About ",
                            "RKMVERI" == l ? "PERCEPTRON" : "RKMVERI",
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        D = () => {
          let { sub: e } = v();
          return (0, s.jsxs)("div", {
            className:
              "flex flex-col w-screen gap-16 md:gap-10 text-primary/15 overflow-clip",
            children: [
              (0, s.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "w-dvw h-1/3",
                viewBox: "0 0 993 187",
                fill: "none",
                children: (0, s.jsx)("path", {
                  d: "M128.206 182H13.8709C10.7496 182 8.44978 181.344 6.9713 180.033C5.6571 178.558 5 176.264 5 173.15V13.85C5 10.7361 5.6571 8.52361 6.9713 7.2125C8.44978 5.7375 10.7496 5 13.8709 5H128.206C131.328 5 133.545 5.7375 134.859 7.2125C136.338 8.52361 137.077 10.7361 137.077 13.85V42.6125C137.077 45.7264 136.338 48.0208 134.859 49.4958C133.545 50.8069 131.328 51.4625 128.206 51.4625H60.1964V70.3917H108.247C111.368 70.3917 113.586 71.1292 114.9 72.6042C116.379 73.9153 117.118 76.1278 117.118 79.2417V105.546C117.118 108.66 116.379 110.954 114.9 112.429C113.586 113.74 111.368 114.396 108.247 114.396H60.1964V135.537H128.206C131.328 135.537 133.545 136.275 134.859 137.75C136.338 139.061 137.077 141.274 137.077 144.388V173.15C137.077 176.264 136.338 178.558 134.859 180.033C133.545 181.344 131.328 182 128.206 182ZM271.199 182H207.132C204.01 182 201.382 181.426 199.246 180.279C197.275 179.132 195.714 177.001 194.565 173.887L170.416 113.658C168.938 110.053 167.706 106.939 166.72 104.317C165.734 101.531 164.913 98.9083 164.256 96.45C163.599 93.9917 163.106 91.4514 162.777 88.8292C162.613 86.0431 162.531 82.6833 162.531 78.75V13.85C162.531 10.7361 163.188 8.52361 164.502 7.2125C165.981 5.7375 168.281 5 171.402 5H210.581C213.703 5 216.085 5.7375 217.727 7.2125C219.37 8.52361 220.191 10.7361 220.191 13.85V81.7C220.191 83.3389 220.356 84.9778 220.684 86.6167C221.013 88.2556 221.506 89.9764 222.163 91.7792L233.744 126.196C234.237 127.835 234.812 128.982 235.469 129.637C236.126 130.129 237.112 130.375 238.426 130.375H241.137C242.451 130.375 243.436 130.129 244.093 129.637C244.751 128.982 245.326 127.835 245.818 126.196L257.4 91.5333C258.057 89.7306 258.55 88.0097 258.878 86.3708C259.207 84.7319 259.371 83.0931 259.371 81.4542V13.85C259.371 10.7361 260.028 8.52361 261.342 7.2125C262.821 5.7375 265.121 5 268.242 5H306.929C310.05 5 312.268 5.7375 313.582 7.2125C315.06 8.52361 315.8 10.7361 315.8 13.85V78.75C315.8 82.6833 315.635 86.0431 315.307 88.8292C315.142 91.4514 314.732 93.9917 314.075 96.45C313.418 98.9083 312.596 101.531 311.611 104.317C310.625 106.939 309.393 110.053 307.914 113.658L283.766 173.887C282.616 177.001 280.973 179.132 278.838 180.279C276.866 181.426 274.32 182 271.199 182ZM469.43 182H355.095C351.973 182 349.674 181.344 348.195 180.033C346.881 178.558 346.224 176.264 346.224 173.15V13.85C346.224 10.7361 346.881 8.52361 348.195 7.2125C349.674 5.7375 351.973 5 355.095 5H469.43C472.551 5 474.769 5.7375 476.083 7.2125C477.562 8.52361 478.301 10.7361 478.301 13.85V42.6125C478.301 45.7264 477.562 48.0208 476.083 49.4958C474.769 50.8069 472.551 51.4625 469.43 51.4625H401.42V70.3917H449.471C452.592 70.3917 454.81 71.1292 456.124 72.6042C457.602 73.9153 458.342 76.1278 458.342 79.2417V105.546C458.342 108.66 457.602 110.954 456.124 112.429C454.81 113.74 452.592 114.396 449.471 114.396H401.42V135.537H469.43C472.551 135.537 474.769 136.275 476.083 137.75C477.562 139.061 478.301 141.274 478.301 144.388V173.15C478.301 176.264 477.562 178.558 476.083 180.033C474.769 181.344 472.551 182 469.43 182ZM553.284 182H516.322C513.201 182 510.901 181.344 509.422 180.033C508.108 178.558 507.451 176.264 507.451 173.15V13.85C507.451 10.7361 508.108 8.52361 509.422 7.2125C510.901 5.7375 513.201 5 516.322 5H541.949C545.07 5 547.698 5.49167 549.834 6.475C552.134 7.45834 554.351 9.17917 556.487 11.6375L604.291 66.2125V13.85C604.291 10.7361 604.948 8.52361 606.262 7.2125C607.741 5.7375 610.041 5 613.162 5H650.124C653.245 5 655.463 5.7375 656.777 7.2125C658.255 8.52361 658.995 10.7361 658.995 13.85V173.15C658.995 176.264 658.255 178.558 656.777 180.033C655.463 181.344 653.245 182 650.124 182H613.162C610.041 182 607.741 181.344 606.262 180.033C604.948 178.558 604.291 176.264 604.291 173.15V142.912L562.155 92.025V173.15C562.155 176.264 561.415 178.558 559.937 180.033C558.623 181.344 556.405 182 553.284 182ZM776.763 182H736.844C733.723 182 731.423 181.344 729.944 180.033C728.63 178.558 727.973 176.264 727.973 173.15V52.4458H691.75C688.629 52.4458 686.329 51.7903 684.851 50.4792C683.537 49.0042 682.879 46.7097 682.879 43.5958V13.85C682.879 10.7361 683.537 8.52361 684.851 7.2125C686.329 5.7375 688.629 5 691.75 5H821.856C824.977 5 827.195 5.7375 828.509 7.2125C829.988 8.52361 830.727 10.7361 830.727 13.85V43.5958C830.727 46.7097 829.988 49.0042 828.509 50.4792C827.195 51.7903 824.977 52.4458 821.856 52.4458H785.634V173.15C785.634 176.264 784.894 178.558 783.416 180.033C782.102 181.344 779.884 182 776.763 182ZM936.993 182H859.126C856.005 182 853.705 181.344 852.227 180.033C850.912 178.558 850.255 176.264 850.255 173.15V144.388C850.255 141.274 850.912 139.061 852.227 137.75C853.705 136.275 856.005 135.537 859.126 135.537H925.411C927.547 135.537 929.107 134.882 930.093 133.571C931.243 132.096 931.818 130.375 931.818 128.408C931.818 125.622 931.243 123.574 930.093 122.262C929.107 120.951 927.547 120.214 925.411 120.05L888.449 114.888C876.95 113.249 867.668 109.479 860.605 103.579C853.705 97.6792 850.255 87.8458 850.255 74.0792V48.2667C850.255 34.3361 854.773 23.6833 863.808 16.3083C872.843 8.76944 885.328 5 901.263 5H970.258C973.38 5 975.597 5.7375 976.911 7.2125C978.39 8.52361 979.129 10.7361 979.129 13.85V43.1042C979.129 46.2181 978.39 48.5125 976.911 49.9875C975.597 51.2986 973.38 51.9542 970.258 51.9542H912.844C910.709 51.9542 909.066 52.6917 907.916 54.1667C906.766 55.4778 906.191 57.1986 906.191 59.3292C906.191 61.4597 906.766 63.2625 907.916 64.7375C909.066 66.2125 910.709 67.0319 912.844 67.1958L949.56 72.1125C961.059 73.7514 970.34 77.5208 977.404 83.4208C984.468 89.3208 988 99.1542 988 112.921V138.733C988 152.664 983.4 163.399 974.201 170.937C965.166 178.312 952.763 182 936.993 182Z",
                  stroke: "currentColor",
                  strokeWidth: "1",
                  mask: "url(#path-1-outside-1_56_65)",
                }),
              }),
              (0, s.jsxs)("div", {
                className: "".concat(
                  e.className,
                  " flex flex-col items-center justify-center text-center flex-1 text-primary text-base md:text-lg"
                ),
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex gap-10 justify-between text-slate-400/50",
                    children: [
                      (0, s.jsx)("p", { className: "", children: "EXPLORE" }),
                      (0, s.jsx)("p", { className: "", children: "LEARN" }),
                      (0, s.jsx)("p", { className: "", children: "ENJOY" }),
                    ],
                  }),
                  (0, s.jsx)("p", {
                    className: "text-4xl sm:text-6xl md:text-7xl",
                    children: "PERCEPTRON 2025",
                  }),
                ],
              }),
              (0, s.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "w-dvw h-1/3",
                viewBox: "0 0 993 187",
                fill: "none",
                children: (0, s.jsx)("path", {
                  d: "M128.206 182H13.8709C10.7496 182 8.44978 181.344 6.9713 180.033C5.6571 178.558 5 176.264 5 173.15V13.85C5 10.7361 5.6571 8.52361 6.9713 7.2125C8.44978 5.7375 10.7496 5 13.8709 5H128.206C131.328 5 133.545 5.7375 134.859 7.2125C136.338 8.52361 137.077 10.7361 137.077 13.85V42.6125C137.077 45.7264 136.338 48.0208 134.859 49.4958C133.545 50.8069 131.328 51.4625 128.206 51.4625H60.1964V70.3917H108.247C111.368 70.3917 113.586 71.1292 114.9 72.6042C116.379 73.9153 117.118 76.1278 117.118 79.2417V105.546C117.118 108.66 116.379 110.954 114.9 112.429C113.586 113.74 111.368 114.396 108.247 114.396H60.1964V135.537H128.206C131.328 135.537 133.545 136.275 134.859 137.75C136.338 139.061 137.077 141.274 137.077 144.388V173.15C137.077 176.264 136.338 178.558 134.859 180.033C133.545 181.344 131.328 182 128.206 182ZM271.199 182H207.132C204.01 182 201.382 181.426 199.246 180.279C197.275 179.132 195.714 177.001 194.565 173.887L170.416 113.658C168.938 110.053 167.706 106.939 166.72 104.317C165.734 101.531 164.913 98.9083 164.256 96.45C163.599 93.9917 163.106 91.4514 162.777 88.8292C162.613 86.0431 162.531 82.6833 162.531 78.75V13.85C162.531 10.7361 163.188 8.52361 164.502 7.2125C165.981 5.7375 168.281 5 171.402 5H210.581C213.703 5 216.085 5.7375 217.727 7.2125C219.37 8.52361 220.191 10.7361 220.191 13.85V81.7C220.191 83.3389 220.356 84.9778 220.684 86.6167C221.013 88.2556 221.506 89.9764 222.163 91.7792L233.744 126.196C234.237 127.835 234.812 128.982 235.469 129.637C236.126 130.129 237.112 130.375 238.426 130.375H241.137C242.451 130.375 243.436 130.129 244.093 129.637C244.751 128.982 245.326 127.835 245.818 126.196L257.4 91.5333C258.057 89.7306 258.55 88.0097 258.878 86.3708C259.207 84.7319 259.371 83.0931 259.371 81.4542V13.85C259.371 10.7361 260.028 8.52361 261.342 7.2125C262.821 5.7375 265.121 5 268.242 5H306.929C310.05 5 312.268 5.7375 313.582 7.2125C315.06 8.52361 315.8 10.7361 315.8 13.85V78.75C315.8 82.6833 315.635 86.0431 315.307 88.8292C315.142 91.4514 314.732 93.9917 314.075 96.45C313.418 98.9083 312.596 101.531 311.611 104.317C310.625 106.939 309.393 110.053 307.914 113.658L283.766 173.887C282.616 177.001 280.973 179.132 278.838 180.279C276.866 181.426 274.32 182 271.199 182ZM469.43 182H355.095C351.973 182 349.674 181.344 348.195 180.033C346.881 178.558 346.224 176.264 346.224 173.15V13.85C346.224 10.7361 346.881 8.52361 348.195 7.2125C349.674 5.7375 351.973 5 355.095 5H469.43C472.551 5 474.769 5.7375 476.083 7.2125C477.562 8.52361 478.301 10.7361 478.301 13.85V42.6125C478.301 45.7264 477.562 48.0208 476.083 49.4958C474.769 50.8069 472.551 51.4625 469.43 51.4625H401.42V70.3917H449.471C452.592 70.3917 454.81 71.1292 456.124 72.6042C457.602 73.9153 458.342 76.1278 458.342 79.2417V105.546C458.342 108.66 457.602 110.954 456.124 112.429C454.81 113.74 452.592 114.396 449.471 114.396H401.42V135.537H469.43C472.551 135.537 474.769 136.275 476.083 137.75C477.562 139.061 478.301 141.274 478.301 144.388V173.15C478.301 176.264 477.562 178.558 476.083 180.033C474.769 181.344 472.551 182 469.43 182ZM553.284 182H516.322C513.201 182 510.901 181.344 509.422 180.033C508.108 178.558 507.451 176.264 507.451 173.15V13.85C507.451 10.7361 508.108 8.52361 509.422 7.2125C510.901 5.7375 513.201 5 516.322 5H541.949C545.07 5 547.698 5.49167 549.834 6.475C552.134 7.45834 554.351 9.17917 556.487 11.6375L604.291 66.2125V13.85C604.291 10.7361 604.948 8.52361 606.262 7.2125C607.741 5.7375 610.041 5 613.162 5H650.124C653.245 5 655.463 5.7375 656.777 7.2125C658.255 8.52361 658.995 10.7361 658.995 13.85V173.15C658.995 176.264 658.255 178.558 656.777 180.033C655.463 181.344 653.245 182 650.124 182H613.162C610.041 182 607.741 181.344 606.262 180.033C604.948 178.558 604.291 176.264 604.291 173.15V142.912L562.155 92.025V173.15C562.155 176.264 561.415 178.558 559.937 180.033C558.623 181.344 556.405 182 553.284 182ZM776.763 182H736.844C733.723 182 731.423 181.344 729.944 180.033C728.63 178.558 727.973 176.264 727.973 173.15V52.4458H691.75C688.629 52.4458 686.329 51.7903 684.851 50.4792C683.537 49.0042 682.879 46.7097 682.879 43.5958V13.85C682.879 10.7361 683.537 8.52361 684.851 7.2125C686.329 5.7375 688.629 5 691.75 5H821.856C824.977 5 827.195 5.7375 828.509 7.2125C829.988 8.52361 830.727 10.7361 830.727 13.85V43.5958C830.727 46.7097 829.988 49.0042 828.509 50.4792C827.195 51.7903 824.977 52.4458 821.856 52.4458H785.634V173.15C785.634 176.264 784.894 178.558 783.416 180.033C782.102 181.344 779.884 182 776.763 182ZM936.993 182H859.126C856.005 182 853.705 181.344 852.227 180.033C850.912 178.558 850.255 176.264 850.255 173.15V144.388C850.255 141.274 850.912 139.061 852.227 137.75C853.705 136.275 856.005 135.537 859.126 135.537H925.411C927.547 135.537 929.107 134.882 930.093 133.571C931.243 132.096 931.818 130.375 931.818 128.408C931.818 125.622 931.243 123.574 930.093 122.262C929.107 120.951 927.547 120.214 925.411 120.05L888.449 114.888C876.95 113.249 867.668 109.479 860.605 103.579C853.705 97.6792 850.255 87.8458 850.255 74.0792V48.2667C850.255 34.3361 854.773 23.6833 863.808 16.3083C872.843 8.76944 885.328 5 901.263 5H970.258C973.38 5 975.597 5.7375 976.911 7.2125C978.39 8.52361 979.129 10.7361 979.129 13.85V43.1042C979.129 46.2181 978.39 48.5125 976.911 49.9875C975.597 51.2986 973.38 51.9542 970.258 51.9542H912.844C910.709 51.9542 909.066 52.6917 907.916 54.1667C906.766 55.4778 906.191 57.1986 906.191 59.3292C906.191 61.4597 906.766 63.2625 907.916 64.7375C909.066 66.2125 910.709 67.0319 912.844 67.1958L949.56 72.1125C961.059 73.7514 970.34 77.5208 977.404 83.4208C984.468 89.3208 988 99.1542 988 112.921V138.733C988 152.664 983.4 163.399 974.201 170.937C965.166 178.312 952.763 182 936.993 182Z",
                  stroke: "currentColor",
                  strokeWidth: "1",
                  mask: "url(#path-1-outside-1_56_65)",
                }),
              }),
            ],
          });
        };
      var P = a(9235),
        _ = a(5751),
        M = a.n(_),
        H = a(6653),
        F = a(7405);
      let q = (e, t) => {
        e &&
          (0, i.useEffect)(() => {
            let a = (a) => {
              !e.current || e.current.contains(a.target) || t(a);
            };
            return (
              document.addEventListener("mousedown", a),
              document.addEventListener("touchstart", a),
              () => {
                document.removeEventListener("mousedown", a),
                  document.removeEventListener("touchstart", a);
              }
            );
          }, [e, t]);
      };
      var U = a(6821);
      let O = (e) => {
          let { rules: t, className: a, ...i } = e;
          return (0, s.jsx)("ul", {
            className: N("space-y-4 text-left text-background/90", a),
            ...i,
            children: t.map((e, t) =>
              (0, s.jsxs)(
                "li",
                {
                  className:
                    "grid grid-cols-[20px,1fr] gap-2 items-center text-lg",
                  children: [
                    (0, s.jsx)(U.A, { size: 20, className: "self-start mt-1" }),
                    e,
                  ],
                },
                t
              )
            ),
          });
        },
        B = "https://perceptron2k25.vercel.app/brochure.pdf",
        G = [
          {
            title: "ExQuizzIt",
            description: "Quiz Competition",
            imageURL: "/images/quiz.png",
            prize: "₹ 6K",
            date: "11th Jan",
            content: () =>
              (0, s.jsx)(O, {
                rules: [
                  (0, s.jsxs)("div", {
                    children: [
                      "An ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "Under 25",
                      }),
                      " ",
                      "Quiz open to all students of colleges and universities.",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Each Team can have a maximum of",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "3 members",
                      }),
                      ". Duos and Lone wolves are also welcome.",
                    ],
                  }),
                  (0, s.jsx)("div", {
                    children: "Cross College Teams are welcome.",
                  }),
                  (0, s.jsx)("div", {
                    children: "There can be multiple teams from one Institute.",
                  }),
                  (0, s.jsx)("div", {
                    children:
                      "The Quiz will be divided into Prelims and Finals.",
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "There will be 26 questions in the prelims in",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "A – Z",
                      }),
                      " format.",
                    ],
                  }),
                  (0, s.jsx)("div", {
                    children: "Top 8 teams qualify to the finals.",
                  }),
                ],
              }),
          },
          {
            title: "Better Call Tal",
            description: "Chess Competition",
            imageURL: "/images/chess.jpg",
            prize: "₹ 6K",
            date: "10th Jan",
            content: () =>
              (0, s.jsx)(O, {
                rules: [
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "Tournament Format:",
                      }),
                      " ",
                      "Preliminary rounds (Swiss style) will be played on a virtual board via Lichess.org or Chess.com, followed by offline board knockout rounds for the top",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "8 players",
                      }),
                      ".",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "Time Control:",
                      }),
                      " ",
                      (0, s.jsx)(O, {
                        className: "space-y-[1px]",
                        rules: [
                          (0, s.jsx)("span", {
                            children:
                              "5 minutes per player for preliminary and quarterfinal rounds",
                          }),
                          (0, s.jsx)("span", {
                            children: "10 minutes for semifinals and finals.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "Platform Requirement:",
                      }),
                      " ",
                      "Preliminary rounds will be played on Lichess.org or Chess.com. Once the platform is finalized, participants will be notified via WhatsApp or Google Group, after which they must create an account and share their username.",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "Fair Play & Rules:",
                      }),
                      " ",
                      "Standard chess rules apply. Violations of fair play will result in disqualification. Tournament arbiter's decisions will be final.",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "Tie-Breakers:",
                      }),
                      " ",
                      "Tie-breakers (if needed) will follow the Buchholz system or platform-provided methods during preliminary rounds.",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("i", { children: "Note:" }),
                      " All participants must be physically present at Ramakrishna Mission Vivekananda Educational and Research Institute for the entire tournament. Further platform-related updates will be shared with registered participants via WhatsApp or Google Group once finalized.",
                    ],
                  }),
                ],
              }),
          },
          {
            title: "Deep Think",
            description: "AI Hackathon",
            imageURL: "/images/hackathon.png",
            prize: "₹ 6K",
            date: "10th Jan",
            content: () =>
              (0, s.jsx)(O, {
                rules: [
                  (0, s.jsxs)("div", {
                    children: [
                      "The problem statement, case study, and dataset will be shared",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "7–10 days",
                      }),
                      " ",
                      "before the event.",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Teams must submit their solutions, including models and methodologies,",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "2 days",
                      }),
                      " before the event. Submission details will be provided in advance.",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Each team will have",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "10 minutes",
                      }),
                      " to present their approach and findings during the event, focusing on methodology, analysis, and solution development.",
                    ],
                  }),
                  (0, s.jsx)("div", {
                    children:
                      "Further details will be provided here soon. Please check this page regularly for updates.",
                  }),
                ],
              }),
          },
          {
            title: "The Turing Show",
            description: "Coding Competition",
            imageURL: "/images/coding.jpg",
            prize: "₹ 6K",
            date: "11th Jan",
            content: () =>
              (0, s.jsx)(O, {
                rules: [
                  (0, s.jsxs)("div", {
                    children: [
                      "This contest will happen in only",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "one round",
                      }),
                      ".",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Must have a",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "HackerRank id",
                      }),
                      ".",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Duration of the Contest will be",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "1 hour",
                      }),
                      ".",
                    ],
                  }),
                  (0, s.jsx)("div", {
                    children:
                      "Candidates will be given marks upon how many test cases are passed.",
                  }),
                ],
              }),
          },
          {
            title: "Clash of Wheels",
            description: "Gaming Competition",
            imageURL: "/images/gaming.png",
            prize: "₹ 6K",
            date: "10th Jan",
            content: () =>
              (0, s.jsx)(O, {
                rules: [
                  (0, s.jsxs)("div", {
                    children: [
                      "Play",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "Smash Karts",
                      }),
                      ", a fast-paced, multiplayer online kart racing and battle royale game that combines high-speed driving with explosive\xa0combat.",
                    ],
                  }),
                  (0, s.jsx)("div", {
                    children:
                      "Open to all. No prior gaming experience is required—everyone is encouraged to join and have fun!",
                  }),
                  (0, s.jsx)("div", {
                    children:
                      "Participants can play using their own mobile phones, laptops, or the computers provided by the organizers.",
                  }),
                  (0, s.jsx)("div", {
                    children:
                      "Controllers or external gaming devices are not permitted. Players must use the default controls available on their chosen device.",
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Each match will last",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "8–10 minutes",
                      }),
                      ", unless otherwise specified by the event organizers.",
                    ],
                  }),
                  (0, s.jsx)("div", {
                    children:
                      "All participants must adhere to fair play guidelines, using only the in-game features and controls without external assistance or modifications.",
                  }),
                ],
              }),
          },
          {
            title: "Enigma Equation",
            description: "Puzzle Solving Competition",
            imageURL: "/images/puzzle.jpg",
            prize: "₹ 6K",
            date: "10th Jan",
            content: () =>
              (0, s.jsx)(O, {
                rules: [
                  (0, s.jsx)("div", {
                    children:
                      "In this event you have to go through rounds by solving mind bending puzzles. The highest scorer wins.",
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "Round 1:",
                      }),
                      " 15 MCQs.",
                      (0, s.jsx)(O, {
                        className: "space-y-[1px]",
                        rules: [
                          (0, s.jsx)("span", { children: "Time: 40 minutes." }),
                          (0, s.jsx)("span", {
                            children:
                              "Scoring: +4 for correct, 0 for wrong, +1 for unanswered.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "Round 2:",
                      }),
                      " 10 problems.",
                      (0, s.jsx)(O, {
                        className: "space-y-[1px]",
                        rules: [
                          (0, s.jsx)("span", { children: "Time: 1 hour" }),
                          (0, s.jsx)("span", {
                            children: "Scoring: Maximum 10 marks per question.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "Qualification:",
                      }),
                      " ",
                      "Top 20 from Round 1 qualify for Round 2.",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "Tiebreaker:",
                      }),
                      " ",
                      "Fewer wrong attempts in Round 1.",
                    ],
                  }),
                ],
              }),
          },
          {
            title: "Under the Hammer",
            description: "Auction",
            imageURL: "/images/auction.png",
            prize: "₹ 6K",
            date: "11th Jan",
            content: () =>
              (0, s.jsx)(O, {
                rules: [
                  (0, s.jsxs)("div", {
                    children: [
                      "Your goal is to",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "build a cricket squad",
                      }),
                      " ",
                      "through auction.",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Teams of",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "2-3 members",
                      }),
                      " ",
                      "must register with an owner and will receive a unique identification number. Spot registration is allowed.",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "The event consists of two rounds:",
                      (0, s.jsx)(O, {
                        className: "space-y-[1px]",
                        rules: [
                          (0, s.jsx)("span", {
                            children:
                              "a prelims round (general knowledge quiz)",
                          }),
                          (0, s.jsxs)("span", {
                            children: [
                              "a finals auction round where teams build a squad of",
                              " ",
                              (0, s.jsx)("span", {
                                className: "font-semibold text-primary",
                                children: "15 players",
                              }),
                              " ",
                              "within a budget of",
                              " ",
                              (0, s.jsx)("span", {
                                className: "font-semibold text-primary",
                                children: "90 crores",
                              }),
                              ".",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Teams bid on players with specific bidding increments based on price ranges. Teams must adhere to squad composition rules, including a maximum of",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "7 non-Indian players",
                      }),
                      " ",
                      "and specific player roles.",
                    ],
                  }),
                  (0, s.jsx)("div", {
                    children:
                      "Teams are evaluated based on their playing 11, with points awarded for captains and wicket-keepers from a predefined list. Tiebreakers include reserve player points and remaining budget.",
                  }),
                  (0, s.jsx)("div", {
                    children:
                      "Teams will be disqualified for failing to meet squad criteria, running out of budget, or engaging in unfair practices during prelims.",
                  }),
                  (0, s.jsx)("div", {
                    children:
                      "Teams must arrive on time, cannot communicate during the event, and must consult the auctioneer for rule clarifications before the auction begins.",
                  }),
                ],
              }),
          },
          {
            title: "Beyond the lines",
            description: "Creative Writing",
            imageURL: "/images/beyond_the_lines.png",
            prize: "₹ 4K",
            content: () =>
              (0, s.jsx)(O, {
                rules: [
                  (0, s.jsxs)("div", {
                    children: [
                      "All interested participants must register beforehand,",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "no spot registration",
                      }),
                      " ",
                      "will be available.",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Registration will close at",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "8th January 11:59 PM",
                      }),
                      ".",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Participants have",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "24 hours",
                      }),
                      " to submit their writing in typing in a",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "pdf and doc",
                      }),
                      " ",
                      "format.",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "No handwritten submission",
                      }),
                      " ",
                      "will be entertained.",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "The writing medium is",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "English",
                      }),
                      ". Both the writing format and topics will be given out through online on",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "9th January 12:00 AM",
                      }),
                      ".",
                    ],
                  }),
                  (0, s.jsx)("div", {
                    children:
                      "The specific rules for each format will be given alongside.",
                  }),
                  (0, s.jsx)("div", {
                    children:
                      "The submission likewise, will be through online. The links will be given out shortly after registration closes. The writing must be original, participants are strictly barred from using generative AI.",
                  }),
                ],
              }),
          },
          {
            title: "Lens and Light",
            description: "Photography Competition",
            imageURL: "/images/photography.png",
            prize: "₹ 4K",
            content: () =>
              (0, s.jsx)(O, {
                rules: [
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "Online",
                      }),
                      " ",
                      "photography event.",
                    ],
                  }),
                  (0, s.jsx)("div", {
                    children:
                      "Themes will be decided later. There will be two themes.",
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Aspect ratio is",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "3:4 or 4:3",
                      }),
                      " ",
                      "both are accepted.",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Each participant has to submit",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "maximum of one photograph",
                      }),
                      " ",
                      "from each of the themes.",
                    ],
                  }),
                  (0, s.jsx)("div", {
                    children:
                      "Both mobile and camera are allowed for the competition.",
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Pictures should have",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "timestamps",
                      }),
                      " ",
                      "with participant’s",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "names",
                      }),
                      ".",
                    ],
                  }),
                  (0, s.jsx)("div", {
                    children: "Basic editing and colour grading is allowed.",
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Participants have to submit",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-semibold text-primary",
                        children: "both of the raw and edited",
                      }),
                      " ",
                      "pictures.",
                    ],
                  }),
                ],
              }),
          },
        ],
        K = (0, y.F)(
          "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          {
            variants: {
              variant: {
                default:
                  "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
                secondary:
                  "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                destructive:
                  "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
                outline: "text-foreground",
              },
            },
            defaultVariants: { variant: "default" },
          }
        );
      function Z(e) {
        let { className: t, variant: a, ...i } = e;
        return (0, s.jsx)("div", {
          className: N(K({ variant: a }), "select-none", t),
          ...i,
        });
      }
      function J() {
        let [e, t] = (0, i.useState)(null),
          a = (0, i.useRef)(null),
          n = (0, i.useId)();
        return (
          (0, i.useEffect)(() => {
            function a(e) {
              "Escape" === e.key && t(!1);
            }
            return (
              e && "object" == typeof e
                ? ((document.body.style.overflow = "hidden"),
                  document.querySelectorAll(".menu").forEach((e) => {
                    e.style.display = "none";
                  }))
                : ((document.body.style.overflow = "auto"),
                  setTimeout(() => {
                    document.querySelectorAll(".menu").forEach((e) => {
                      e.style.display = "block";
                    });
                  }, 500)),
              window.addEventListener("keydown", a),
              () => window.removeEventListener("keydown", a)
            );
          }, [e]),
          q(a, () => t(null)),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(z.N, {
                children:
                  e &&
                  "object" == typeof e &&
                  (0, s.jsx)(E.P.div, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    className: "fixed inset-0 bg-black/20 h-full w-full z-10",
                  }),
              }),
              (0, s.jsx)(z.N, {
                children:
                  e && "object" == typeof e
                    ? (0, s.jsxs)("div", {
                        className:
                          "fixed inset-0 grid place-items-center z-[1100]",
                        children: [
                          (0, s.jsx)(
                            E.P.button,
                            {
                              layout: !0,
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: {
                                opacity: 0,
                                transition: { duration: 0.05 },
                              },
                              className:
                                "flex absolute top-2 right-2 md:hidden items-center justify-center bg-white rounded-full h-6 w-6",
                              onClick: () => t(null),
                              children: (0, s.jsx)(W, {}),
                            },
                            "button-".concat(e.title, "-").concat(n)
                          ),
                          (0, s.jsxs)(E.P.div, {
                            layoutId: "card-".concat(e.title, "-").concat(n),
                            ref: a,
                            className:
                              "w-full md:w-[90vw] h-screen md:h-[95vh] pb-8 md:max-w-[1000px] md:max-h-[720px] border border-background/10 flex flex-col md:grid grid-cols-3 grid-rows-[clamp(40vh_300px_10vh)_1fr] md:gap-4 bg-slate-900 sm:rounded-3xl overflow-hidden",
                            children: [
                              (0, s.jsx)(E.P.div, {
                                layoutId: "image-"
                                  .concat(e.title, "-")
                                  .concat(n),
                                children: (0, s.jsx)(P.default, {
                                  priority: !0,
                                  width: 272,
                                  height: 272,
                                  src: "https://raw.githubusercontent.com/SayanDasDev/perceptron2k25/refs/heads/development/public".concat(
                                    e.imageURL
                                  ),
                                  alt: e.title,
                                  className:
                                    "w-full max-md:h-[25vh] h-80 md:h-full md:rounded-br-3xl object-cover object-top",
                                }),
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "bg-slate-900 col-span-2 md:self-end",
                                children: (0, s.jsxs)("div", {
                                  className:
                                    "flex flex-col flex-wrap gap-4 items-start p-4",
                                  children: [
                                    (0, s.jsxs)("div", {
                                      className: "",
                                      children: [
                                        (0, s.jsx)(E.P.h3, {
                                          layoutId: "title-"
                                            .concat(e.title, "-")
                                            .concat(n),
                                          className:
                                            "font-bold text-background text-2xl",
                                          children: e.title,
                                        }),
                                        (0, s.jsx)(E.P.p, {
                                          layoutId: "description-"
                                            .concat(e.title, "-")
                                            .concat(n),
                                          className: "text-background/75",
                                          children: e.description,
                                        }),
                                        (0, s.jsxs)("div", {
                                          className:
                                            "text-lg flex flex-wrap gap-2 items-center",
                                          children: [
                                            (0, s.jsxs)(Z, {
                                              variant: "secondary",
                                              className:
                                                "text-sm mt-2 rounded-full text-foreground flex gap-1 items-center w-fit",
                                              children: [
                                                (0, s.jsx)(H.A, {
                                                  className:
                                                    "inline-block text-foreground/70",
                                                  size: 16,
                                                }),
                                                e.prize,
                                              ],
                                            }),
                                            e.date &&
                                              (0, s.jsxs)(Z, {
                                                variant: "secondary",
                                                className:
                                                  "text-sm mt-2 rounded-full text-foreground flex gap-1 items-center w-fit",
                                                children: [
                                                  (0, s.jsx)(F.A, {
                                                    className:
                                                      "inline-block text-foreground/70",
                                                    size: 16,
                                                  }),
                                                  e.date,
                                                ],
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)("div", {
                                      className: "flex gap-2 flex-wrap",
                                      children: [
                                        (0, s.jsx)("div", {
                                          className: "pr-2 h-full relative",
                                          children: (0, s.jsx)(M(), {
                                            href: B,
                                            target: "_blank",
                                            className: N(
                                              k({ variant: "ghost" }),
                                              "rounded-full border bg-transparent h-[44px]"
                                            ),
                                            children: "More Details",
                                          }),
                                        }),
                                        (0, s.jsx)(E.P.a, {
                                          layoutId: "button-"
                                            .concat(e.title, "-")
                                            .concat(n),
                                          href: "https://zfrmz.in/GKJwgL5mW6QU04vo2zho",
                                          target: "_blank",
                                          className:
                                            "px-4 py-3 text-sm rounded-full font-bold bg-primary text-foreground",
                                          children: "Register",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, s.jsx)("p", {
                                className:
                                  "text-2xl font-bold text-background/80 pl-6",
                                children: "Rules and Guidelines",
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "relative px-4 col-span-3 overflow-y-scroll no-scrollbar [mask:linear-gradient(to_bottom,white,white,white,white,transparent)]",
                                children: (0, s.jsx)(E.P.div, {
                                  layout: !0,
                                  initial: { opacity: 0 },
                                  animate: { opacity: 1 },
                                  exit: { opacity: 0 },
                                  className:
                                    "text-background/75 overflow-y-scroll text-xs md:text-sm lg:text-base pb-10 flex flex-col items-start gap-4 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]",
                                  children:
                                    "function" == typeof e.content
                                      ? e.content()
                                      : e.content,
                                }),
                              }),
                            ],
                          }),
                        ],
                      })
                    : null,
              }),
              (0, s.jsx)("div", {
                className:
                  "max-w-6xl mx-auto w-full gap-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
                children: G.map((e, a) =>
                  (0, s.jsxs)(
                    E.P.div,
                    {
                      layoutId: "card-".concat(e.title, "-").concat(n),
                      onClick: () => t(e),
                      className:
                        "p-4 flex flex-col justify-between items-center sm:bg-slate-950 hover:bg-slate-900 rounded-xl cursor-pointer md:border border-background/10",
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "flex gap-4 justify-center items-center flex-col ",
                          children: [
                            (0, s.jsx)(E.P.div, {
                              layoutId: "image-".concat(e.title, "-").concat(n),
                              children: (0, s.jsx)(P.default, {
                                width: 272,
                                height: 272,
                                src: "https://raw.githubusercontent.com/SayanDasDev/perceptron2k25/refs/heads/development/public".concat(
                                  e.imageURL
                                ),
                                alt: e.title,
                                className:
                                  "h-60 w-60 rounded-lg object-cover object-top",
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              className: "",
                              children: [
                                (0, s.jsx)(E.P.h3, {
                                  layoutId: "title-"
                                    .concat(e.title, "-")
                                    .concat(n),
                                  className:
                                    "font-bold text-background text-center text-xl",
                                  children: e.title,
                                }),
                                (0, s.jsx)(E.P.p, {
                                  layoutId: "description-"
                                    .concat(e.title, "-")
                                    .concat(n),
                                  className: "text-background/75 text-center ",
                                  children: e.description,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsx)(E.P.button, {
                          layoutId: "button-".concat(e.title, "-").concat(n),
                          className:
                            "px-4 py-2 text-sm rounded-full font-bold bg-background hover:bg-primary hover:text-background text-foreground mt-4",
                          children: "Explore",
                        }),
                      ],
                    },
                    "card-".concat(e.title, "-").concat(n)
                  )
                ),
              }),
            ],
          })
        );
      }
      let W = () =>
          (0, s.jsxs)(E.P.svg, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0, transition: { duration: 0.05 } },
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "h-4 w-4 text-black",
            children: [
              (0, s.jsx)("path", {
                stroke: "none",
                d: "M0 0h24v24H0z",
                fill: "none",
              }),
              (0, s.jsx)("path", { d: "M18 6l-12 12" }),
              (0, s.jsx)("path", { d: "M6 6l12 12" }),
            ],
          }),
        Y = () =>
          (0, s.jsxs)("div", {
            children: [
              (0, s.jsx)("div", {
                className:
                  "event h-screen flex items-center justify-center text-8xl overflow-clip bg-gradient-to-b bg-transparent from-slate-900 to-transparent text-white",
                children: (0, s.jsx)(D, {}),
              }),
              (0, s.jsx)("div", {
                className: "w-screen text-white p-12",
                children: (0, s.jsx)(J, {}),
              }),
            ],
          }),
        Q = [
          {
            question: "What are the dates of the event?",
            answer: "The dates are 10th & 11th January, 2025 from 10:00 AM.",
          },
          {
            question: "What is the last date for registration?",
            answer:
              "Offline events are open till event day. Online events will close on 7th January, 11:59 PM.",
          },
          {
            question: "Can I register on the spot?",
            answer:
              "Yes, spot registration will be available for all offline events starting from 9:00 AM on the event day, subject to limited availability.",
          },
          {
            question: "What are the meal options?",
            answer:
              "Veg or Non-veg. Preferences can be selected during online/spot registration.",
          },
          {
            question: "Is there any prize money?",
            answer: "YES! There are prize pools for each event.",
          },
          {
            question:
              "I am not a student of Computer Science. Can I participate?",
            answer: "Yes, you can.",
          },
          {
            question:
              "I am not a student of any Ramakrishna Mission institution. Can I register?",
            answer:
              "Yes, Perceptron is open to all schools and colleges. AI-Hackathon is open for all.",
          },
          {
            question: "Is participation restricted to males only?",
            answer: "No. Participation is gender-neutral.",
          },
          {
            question: "How much is the entry fee?",
            answer: "Only Rs. 30 per event.",
          },
          {
            question: "What time do I need to arrive?",
            answer:
              "All participants must arrive on campus by 10:00 AM for physical verification. Late arrivals after 10:00 AM will not be permitted, except under exceptional circumstances approved by the organizers.",
          },
          {
            question: "How do I reach the college?",
            answer:
              "Nearest local stations are Belur Station & Bally Halt. Nearest metro station is Dakshineswar Metro Station. Autos/Totos are available till Belur Math from these locations.",
          },
        ],
        X = (e) => {
          let { heading: t } = e,
            { mono: a } = v();
          return (0, s.jsxs)("div", {
            className:
              "relative h-[120px] w-full flex flex-col items-center justify-center overflow-hidden rounded-md",
            children: [
              (0, s.jsx)("h1", {
                className: "text-7xl ".concat(
                  a.className,
                  " font-bold text-center text-primary relative z-20"
                ),
                children: t,
              }),
              (0, s.jsxs)("div", {
                className: "w-[40rem] h-40 relative",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-[2px] w-3/4 blur-sm",
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-px w-3/4",
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[5px] w-1/4 blur-sm",
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-1/4",
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]",
                  }),
                ],
              }),
            ],
          });
        };
      var $ = a(1770),
        ee = a(7945);
      let et = $.bL,
        ea = i.forwardRef((e, t) => {
          let { className: a, ...i } = e;
          return (0, s.jsx)($.q7, {
            ref: t,
            className: N("border-b", a),
            ...i,
          });
        });
      ea.displayName = "AccordionItem";
      let es = i.forwardRef((e, t) => {
        let { className: a, children: i, ...n } = e;
        return (0, s.jsx)($.Y9, {
          className: "flex",
          children: (0, s.jsxs)($.l9, {
            ref: t,
            className: N(
              "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
              a
            ),
            ...n,
            children: [
              i,
              (0, s.jsx)(ee.A, {
                className:
                  "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
              }),
            ],
          }),
        });
      });
      es.displayName = $.l9.displayName;
      let ei = i.forwardRef((e, t) => {
        let { className: a, children: i, ...n } = e;
        return (0, s.jsx)($.UC, {
          ref: t,
          className:
            "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
          ...n,
          children: (0, s.jsx)("div", {
            className: N("pb-4 pt-0", a),
            children: i,
          }),
        });
      });
      ei.displayName = $.UC.displayName;
      let en = () => {
        let { mono: e, serif_font: t } = v();
        return (0, s.jsxs)("div", {
          className:
            "w-full flex flex-col items-center justify-center space-y-12",
          children: [
            (0, s.jsx)(X, { heading: "FAQs" }),
            (0, s.jsx)(et, {
              type: "single",
              collapsible: !0,
              className:
                "max-w-[800px] w-[90vw] sm:w-[75vw] text-primary-foreground text-left",
              children: Q.map((e, a) =>
                (0, s.jsxs)(
                  ea,
                  {
                    value: "item ".concat(a),
                    children: [
                      (0, s.jsx)(es, {
                        className:
                          "hover:text-primary [&[data-state=open]]:text-primary text-xl text-left",
                        children: e.question,
                      }),
                      (0, s.jsx)(ei, {
                        className: N(
                          "text-lg font-normal text-primary-foreground/70",
                          t.className
                        ),
                        children: e.answer,
                      }),
                    ],
                  },
                  a
                )
              ),
            }),
          ],
        });
      };
      var er = a(4120),
        el = a(5633),
        eo = a(301),
        ec = a(3883),
        ed = a(109);
      let em = {
          links: {
            facebook: "https://www.facebook.com/perceptron.rkmveri",
            instagram: "https://www.instagram.com/perceptron_2025",
            linkedin: "https://www.linkedin.com/company/perceptron-rkmveri/",
            mail: "mailto:perceptron.cs@gm.rkmvu.ac.in",
          },
          phone: ["tel:9093372699", "tel:9051532999"],
        },
        eh = () =>
          (0, s.jsxs)("footer", {
            className: "bg-slate-900 w-full lg:grid lg:grid-cols-5",
            children: [
              (0, s.jsx)("div", {
                className: "lg:col-span-2",
                children: (0, s.jsx)("iframe", {
                  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.6346077758526!2d88.35109757535695!3d22.630115979450835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d7201cee84b%3A0x220345018f3fff05!2sRamakrishna%20Mission%20Vivekananda%20Educational%20and%20Research%20Institute!5e0!3m2!1sen!2sin!4v1734184622047!5m2!1sen!2sin",
                  className: "w-full h-full",
                  allowFullScreen: !0,
                  loading: "lazy",
                  referrerPolicy: "no-referrer-when-downgrade",
                }),
              }),
              (0, s.jsxs)("div", {
                className: "px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8",
                children: [
                  (0, s.jsx)("div", {
                    className: "grid grid-cols-1 gap-8",
                    children: (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsx)("p", {
                          className:
                            "text-background text-xl md:text-2xl font-bold",
                          children:
                            "Ramakrishna Mission Vivekananda Educational and Research Institute (RKMVERI)",
                        }),
                        (0, s.jsx)("p", {
                          className: "text-background/75 md:text-lg",
                          children:
                            "Deemed to be University as declared by Govt. of India under Section 3 of UGC Act, 1956",
                        }),
                        (0, s.jsx)("p", {
                          className: "text-background/50",
                          children: "(Accredited by NAAC with A++ Grade)",
                        }),
                        (0, s.jsxs)("ul", {
                          className:
                            "mt-8 space-y-1 text-sm text-background/50",
                          children: [
                            (0, s.jsx)("li", {
                              children: "10th and 11th January, 2025",
                            }),
                            (0, s.jsx)("li", {
                              children: "Friday and Saturday: 9:30am - 5:30pm",
                            }),
                          ],
                        }),
                        (0, s.jsx)("ul", {
                          className: "mt-8 flex gap-6 mb-2",
                          children: Object.entries(em.links).map((e, t) => {
                            let [a, i] = e;
                            return (0, s.jsx)(
                              "li",
                              {
                                children: (0, s.jsxs)("a", {
                                  href: i,
                                  className:
                                    "text-background/70 hover:text-background",
                                  target: "_blank",
                                  children: [
                                    "mail" == a &&
                                      (0, s.jsx)(er.A, { size: 24 }),
                                    "instagram" == a &&
                                      (0, s.jsx)(el.A, { size: 24 }),
                                    "linkedin" == a &&
                                      (0, s.jsx)(eo.A, { size: 24 }),
                                    "facebook" == a &&
                                      (0, s.jsx)(ec.A, { size: 24 }),
                                  ],
                                }),
                              },
                              t
                            );
                          }),
                        }),
                        em.phone.map((e, t) =>
                          (0, s.jsx)(
                            "div",
                            {
                              className:
                                "flex text-background/70 hover:text-background",
                              children: (0, s.jsx)("div", {
                                className:
                                  "ml-2 flex flex-col justify-center gap-2 ",
                                children: (0, s.jsxs)("div", {
                                  className: "flex flex items-center gap-2",
                                  children: [
                                    (0, s.jsx)(ed.A, { size: 20 }),
                                    (0, s.jsxs)(
                                      "a",
                                      {
                                        href: e,
                                        className:
                                          "text-background/70 hover:text-background text-lg",
                                        children: [
                                          "+91 ",
                                          e.replace("tel:", ""),
                                        ],
                                      },
                                      t
                                    ),
                                  ],
                                }),
                              }),
                            },
                            t
                          )
                        ),
                      ],
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "mt-12 border-t border-gray-100 pt-12 dark:border-gray-800",
                    children: (0, s.jsx)("p", {
                      className:
                        "mt-8 text-xs text-background/70 text-center lg:text-left sm:mt-0",
                      children: "\xa9 2025. Perceptron. All rights reserved.",
                    }),
                  }),
                ],
              }),
            ],
          });
      var ex = a(1833),
        ep = a(5162),
        eu = a(7936);
      let ef = (0, i.createContext)({ onCardClose: () => {}, currentIndex: 0 }),
        eg = (e) => {
          let { items: t, initialScroll: a = 0 } = e,
            n = i.useRef(null),
            [r, l] = i.useState(!1),
            [o, c] = i.useState(!0),
            [d, m] = (0, i.useState)(0);
          (0, i.useEffect)(() => {
            n.current && ((n.current.scrollLeft = a), h());
          }, [a]);
          let h = () => {
              if (n.current) {
                let {
                  scrollLeft: e,
                  scrollWidth: t,
                  clientWidth: a,
                } = n.current;
                l(e > 0), c(e < t - a);
              }
            },
            x = () => window && window.innerWidth < 768;
          return (0, s.jsx)(ef.Provider, {
            value: {
              onCardClose: (e) => {
                if (n.current) {
                  let t = x() ? 230 : 384,
                    a = x() ? 4 : 8;
                  n.current.scrollTo({
                    left: (t + a) * (e + 1),
                    behavior: "smooth",
                  }),
                    m(e);
                }
              },
              currentIndex: d,
            },
            children: (0, s.jsxs)("div", {
              className: "relative w-full",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]",
                  ref: n,
                  onScroll: h,
                  children: [
                    (0, s.jsx)("div", {
                      className: N(
                        "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
                      ),
                    }),
                    (0, s.jsx)("div", {
                      className: N(
                        "flex flex-row justify-start gap-4 pl-4",
                        "max-w-7xl mx-auto"
                      ),
                      children: t.map((e, t) =>
                        (0, s.jsx)(
                          E.P.div,
                          {
                            initial: { opacity: 0, y: 20 },
                            animate: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                duration: 0.5,
                                delay: 0.2 * t,
                                ease: "easeOut",
                                once: !0,
                              },
                            },
                            className:
                              "last:pr-[5%] md:last:pr-[33%]  rounded-3xl",
                            children: e,
                          },
                          "card" + t
                        )
                      ),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "flex justify-end gap-2 mr-10 max-w-7xl",
                  children: [
                    (0, s.jsx)("button", {
                      className:
                        "relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50",
                      onClick: () => {
                        n.current &&
                          n.current.scrollBy({
                            left: -300,
                            behavior: "smooth",
                          });
                      },
                      disabled: !r,
                      children: (0, s.jsx)(ex.A, {
                        className: "h-6 w-6 text-gray-500",
                      }),
                    }),
                    (0, s.jsx)("button", {
                      className:
                        "relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50",
                      onClick: () => {
                        n.current &&
                          n.current.scrollBy({ left: 300, behavior: "smooth" });
                      },
                      disabled: !o,
                      children: (0, s.jsx)(ep.A, {
                        className: "h-6 w-6 text-gray-500",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        eb = (e) => {
          let { card: t, index: a, layout: n = !1 } = e,
            [r, l] = (0, i.useState)(!1),
            o = (0, i.useRef)(null),
            { onCardClose: c, currentIndex: d } = (0, i.useContext)(ef);
          (0, i.useEffect)(() => {
            function e(e) {
              "Escape" === e.key && m();
            }
            return (
              r
                ? (document.body.style.overflow = "hidden")
                : (document.body.style.overflow = "auto"),
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, [r]),
            q(o, () => m());
          let m = () => {
            l(!1), c(a);
          };
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(z.N, {
                children:
                  r &&
                  (0, s.jsxs)("div", {
                    className: "fixed inset-0 h-screen z-50 overflow-auto",
                    children: [
                      (0, s.jsx)(E.P.div, {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        className:
                          "bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0",
                      }),
                      (0, s.jsxs)(E.P.div, {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        ref: o,
                        layoutId: n ? "card-".concat(t.title) : void 0,
                        className:
                          "max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit  z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative",
                        children: [
                          (0, s.jsx)("button", {
                            className:
                              "sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center",
                            onClick: m,
                            children: (0, s.jsx)(eu.A, {
                              className:
                                "h-6 w-6 text-neutral-100 dark:text-neutral-900",
                            }),
                          }),
                          (0, s.jsx)(E.P.p, {
                            layoutId: n ? "title-".concat(t.title) : void 0,
                            className:
                              "text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white",
                            children: t.title,
                          }),
                        ],
                      }),
                    ],
                  }),
              }),
              (0, s.jsxs)(E.P.button, {
                layoutId: n ? "card-".concat(t.title) : void 0,
                className:
                  "rounded-3xl cursor-default bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none",
                  }),
                  (0, s.jsx)(ev, {
                    src: t.src,
                    alt: t.title,
                    fill: !0,
                    className: "object-cover absolute z-10 inset-0",
                  }),
                ],
              }),
            ],
          });
        },
        ev = (e) => {
          let { height: t, width: a, src: n, className: r, alt: l, ...o } = e,
            [c, d] = (0, i.useState)(!0);
          return (0, s.jsx)(P.default, {
            className: N(
              "transition duration-300",
              c ? "blur-sm" : "blur-0",
              r
            ),
            onLoad: () => d(!1),
            src: n,
            width: a,
            height: t,
            loading: "lazy",
            decoding: "async",
            blurDataURL: "string" == typeof n ? n : void 0,
            alt: l || "Background of a beautiful view",
            ...o,
          });
        },
        ej = [
          {
            title: "picture 1",
            src: "https://raw.githubusercontent.com/SayanDasDev/perceptron2k25/refs/heads/development/public/images/1.jpg",
          },
          {
            title: "picture 2",
            src: "https://raw.githubusercontent.com/SayanDasDev/perceptron2k25/refs/heads/development/public/images/2.jpg",
          },
          {
            title: "picture 3",
            src: "https://raw.githubusercontent.com/SayanDasDev/perceptron2k25/refs/heads/development/public/images/3.jpg",
          },
          {
            title: "picture 4",
            src: "https://raw.githubusercontent.com/SayanDasDev/perceptron2k25/refs/heads/development/public/images/4.jpg",
          },
          {
            title: "picture 5",
            src: "https://raw.githubusercontent.com/SayanDasDev/perceptron2k25/refs/heads/development/public/images/5.jpg",
          },
          {
            title: "picture 6",
            src: "https://raw.githubusercontent.com/SayanDasDev/perceptron2k25/refs/heads/development/public/images/6.jpg",
          },
          {
            title: "picture 7",
            src: "https://raw.githubusercontent.com/SayanDasDev/perceptron2k25/refs/heads/development/public/images/7.jpg",
          },
          {
            title: "picture 8",
            src: "https://raw.githubusercontent.com/SayanDasDev/perceptron2k25/refs/heads/development/public/images/8.jpg",
          },
        ];
      function ey() {
        let e = ej.map((e, t) => (0, s.jsx)(eb, { card: e, index: t }, e.src));
        return (0, s.jsxs)("div", {
          className:
            "w-screen flex flex-col items-center justify-center space-y-12",
          children: [
            (0, s.jsx)(X, { heading: "Gallery" }),
            (0, s.jsx)(eg, { items: e }),
          ],
        });
      }
      var ew = a(9464),
        eC = a(1003),
        eN = a(7455);
      let ek = (0, a(6246).default)(() => a.e(40).then(a.t.bind(a, 4040, 23)), {
          loadableGenerated: { webpack: () => [4040] },
          ssr: !1,
        }),
        eL = function () {
          let [e, t] = (0, i.useState)(!1);
          if (
            ((0, i.useEffect)(() => {
              t(!0);
            }, []),
            e)
          )
            return (0, s.jsx)("div", {
              className: "absolute bg-video inset-0 ",
              children: (0, s.jsx)(ek, {
                controls: !1,
                autoPlay: !0,
                loop: !0,
                url: "https://perceptron2k25.vercel.app/hero-video.mp4",
                playing: !0,
                muted: !0,
                width: "100vw",
                height: "100vh",
              }),
            });
        },
        ez = () => {
          let { sub_cap: e, sub: t, font: a } = v();
          return (0, s.jsxs)("div", {
            className:
              "hero-card-left xl:h-[280px] bg-glassmorphic border-subtle flex flex-col justify-center !border-b-0 max-xl:!border-r-0 !border-l-0 rounded-t-3xl md:rounded-tl-3xl md:rounded-tr-none xl:rounded-tl-none xl:rounded-tr-3xl text-center px-4",
            children: [
              (0, s.jsx)("p", {
                className: "".concat(
                  t.className,
                  " font-size-xs text-gray-400 font-extrabold"
                ),
                children: "Organized By",
              }),
              (0, s.jsx)("p", {
                className: "".concat(
                  e.className,
                  " font-size-sm pt-2 text-gray-50 font-extrabold"
                ),
                children: "Dept. of Computer Science",
              }),
              (0, s.jsx)("p", {
                className: "".concat(
                  a.className,
                  " font-size-xs pt-4 leading-snug font-medium text-gray-300"
                ),
                children:
                  "Ramakrishna Mission Vivekananda Educational and Research Institute (RKMVERI)",
              }),
              (0, s.jsx)("p", {
                className: "".concat(
                  a.className,
                  " font-size-xs pt-1 leading-snug font-extralight text-gray-50"
                ),
                children:
                  "(Deemed-to-be-University as declared by Govt. of India under Section 3 of UGC Act, 1956)",
              }),
            ],
          });
        },
        eE = () => {
          let { sub: e } = v(),
            t = () => {
              let e = +new Date("2025-01-10") - +new Date(),
                t = { days: 0, hours: 0, minutes: 0, seconds: 0 };
              return (
                e > 0 &&
                  (t = {
                    days: Math.floor(e / 864e5),
                    hours: Math.floor((e / 36e5) % 24),
                    minutes: Math.floor((e / 1e3 / 60) % 60),
                    seconds: Math.floor((e / 1e3) % 60),
                  }),
                t
              );
            },
            [a, n] = (0, i.useState)(t());
          return (
            (0, i.useEffect)(() => {
              let e = setTimeout(() => {
                n(t());
              }, 1e3);
              return () => clearTimeout(e);
            }),
            (0, s.jsxs)("div", {
              className: "".concat(
                e.className,
                " text-gray-50 flex justify-around px-4 items-center"
              ),
              children: [
                (0, s.jsxs)("div", {
                  className: "flex flex-col text-center text-xs",
                  children: [
                    (0, s.jsx)("p", {
                      className: "text-2xl",
                      children: a.days || "0",
                    }),
                    (0, s.jsx)("p", { children: "Days" }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "flex flex-col text-center text-xs",
                  children: [
                    (0, s.jsx)("p", {
                      className: "text-2xl",
                      children: a.hours || "0",
                    }),
                    (0, s.jsx)("p", { children: "Hours" }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "flex flex-col text-center text-xs",
                  children: [
                    (0, s.jsx)("p", {
                      className: "text-2xl",
                      children: a.minutes || "0",
                    }),
                    (0, s.jsx)("p", { children: "Minutes" }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "flex flex-col text-center text-xs",
                  children: [
                    (0, s.jsx)("p", {
                      className: "text-2xl",
                      children: a.seconds || "0",
                    }),
                    (0, s.jsx)("p", { children: "Seconds" }),
                  ],
                }),
              ],
            })
          );
        },
        eA = () => {
          let { sub: e, sub_cap: t } = v();
          return (0, s.jsxs)("div", {
            className:
              "hero-card-right bg-glassmorphic text-center px-4 border-subtle flex flex-col justify-center !border-b-0 max-xl:!border-l-0 max-md:!border-t-0 !border-r-0 md:rounded-tr-3xl xl:rounded-tr-none xl:rounded-tl-3xl",
            children: [
              (0, s.jsx)("p", {
                className: "".concat(
                  e.className,
                  " text-[clamp(6px,3vw,16px)] text-gray-400 font-extrabold"
                ),
                children: "Event Date",
              }),
              (0, s.jsxs)("p", {
                className: "".concat(
                  t.className,
                  " text-[clamp(10px,4vw,24px)] pt-2 pb-6 text-gray-50 font-extrabold"
                ),
                children: [
                  "10-11",
                  (0, s.jsx)("sup", { children: "th" }),
                  " January, 2025",
                ],
              }),
              (0, s.jsx)("p", {
                className: "".concat(
                  e.className,
                  " text-[clamp(6px,3vw,16px)] pb-2 text-gray-400 font-extrabold"
                ),
                children: "Perceptron starts in",
              }),
              (0, s.jsx)(eE, {}),
            ],
          });
        },
        eR = () => {
          let { sub_cap: e, main: t } = v();
          return (0, s.jsxs)("div", {
            className: "hero-title-text flex flex-col text-center",
            children: [
              (0, s.jsx)("p", {
                className: "".concat(
                  e.className,
                  " font-size-sm leading-snug text-gray-50 font-extrabold whitespace-nowrap"
                ),
                children: "The tech-fest at RKMVERI",
              }),
              (0, s.jsx)("p", {
                className: "".concat(
                  t.className,
                  " hero-text font-size-lg text-gray-50 font-extrabold leading-snug"
                ),
                children: "PERCEPTRON 2K25",
              }),
            ],
          });
        },
        eS = {
          Perceptron: (e) =>
            (0, s.jsxs)("svg", {
              ...e,
              viewBox: "0 0 298 299",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, s.jsx)("path", {
                  d: "M89.8696 159.277C89.8696 163.427 86.9715 166.9 83.0888 167.783L82.6441 174.55C85.7087 175.515 87.9312 178.379 87.9312 181.763C87.9312 182.321 87.8705 182.866 87.7555 183.39L94.2125 188.562C95.4997 187.813 96.9959 187.384 98.5924 187.384C101.123 187.384 103.402 188.462 104.996 190.183L114.431 184.864C114.341 184.361 114.293 183.843 114.293 183.313C114.293 178.496 118.199 174.59 123.016 174.59C127.834 174.59 131.739 178.496 131.739 183.313C131.739 188.131 127.834 192.036 123.016 192.036C120.618 192.036 118.446 191.068 116.869 189.502L107.237 194.932C107.288 195.316 107.315 195.708 107.315 196.107C107.315 199.454 105.43 202.361 102.663 203.824V222.988C105.408 224.241 107.315 227.009 107.315 230.223C107.315 234.612 103.757 238.17 99.3678 238.17C94.9785 238.17 91.4203 234.612 91.4203 230.223C91.4203 226.572 93.8817 223.496 97.2354 222.565V204.725C93.0624 204.073 89.8695 200.463 89.8695 196.107C89.8695 194.797 90.1584 193.554 90.676 192.439L84.9025 187.815C83.6398 188.761 82.0711 189.322 80.3714 189.322C76.1962 189.322 72.8116 185.938 72.8116 181.763C72.8116 178.651 74.6919 175.978 77.3783 174.818L77.8683 167.363C76.5609 166.832 75.4114 165.994 74.5096 164.937L61.94 172.024C61.9509 172.167 61.9565 172.312 61.9565 172.458C61.9565 175.563 59.4398 178.08 56.3352 178.08C53.2306 178.08 50.7138 175.563 50.7138 172.458C50.7138 169.354 53.2306 166.837 56.3352 166.837C57.3584 166.837 58.3179 167.11 59.1444 167.588L72.4605 160.081C72.4363 159.816 72.4239 159.548 72.4239 159.277C72.4239 154.46 76.3293 150.554 81.1468 150.554C85.9642 150.554 89.8696 154.46 89.8696 159.277Z",
                  fill: "url(#paint0_linear_89_156)",
                }),
                (0, s.jsx)("path", {
                  d: "M167.793 69.7228C167.793 74.2144 164.399 77.9131 160.035 78.393L156.442 91.5705C159.544 93.616 161.59 97.1315 161.59 101.125C161.59 106.331 158.113 110.724 153.353 112.108L152.081 121.64C157.48 122.556 161.59 127.255 161.59 132.915C161.59 134.27 161.355 135.571 160.922 136.777L170.316 141.024C173.551 137.135 178.428 134.659 183.882 134.659C193.624 134.659 201.522 142.557 201.522 152.299C201.522 162.041 193.624 169.938 183.882 169.938C183.06 169.938 182.252 169.882 181.46 169.773L177.73 180.098C178.545 181.074 179.036 182.33 179.036 183.701C179.036 186.806 176.519 189.322 173.415 189.322C170.31 189.322 167.793 186.806 167.793 183.701C167.793 180.721 170.112 178.282 173.044 178.092L176.562 168.353C170.474 165.572 166.243 159.429 166.243 152.299C166.243 149.971 166.694 147.748 167.513 145.713L157.872 141.355C155.838 143.216 153.128 144.351 150.154 144.351C143.838 144.351 138.717 139.231 138.717 132.915C138.717 127.858 142 123.567 146.55 122.058L147.848 112.329C142.637 111.262 138.717 106.651 138.717 101.125C138.717 94.8087 143.838 89.6884 150.154 89.6884C150.545 89.6884 150.932 89.7081 151.313 89.7465L154.712 77.2806C153.043 76.3157 151.723 74.8135 150.989 73.0104L139.732 73.7327C138.498 75.4151 136.506 76.5073 134.259 76.5073C134.003 76.5073 133.749 76.493 133.5 76.4653L120.621 100.645C123.592 102.711 125.536 106.149 125.536 110.042C125.536 115.629 121.529 120.281 116.232 121.28V130.522C124.968 131.575 131.739 139.014 131.739 148.034C131.739 150.433 131.26 152.719 130.393 154.804L144.508 161.184C145.953 159.206 148.291 157.92 150.929 157.92C155.318 157.92 158.877 161.478 158.877 165.868C158.877 169.373 156.607 172.349 153.457 173.405L153.482 189.663C156.209 190.922 158.101 193.681 158.101 196.882C158.101 201.271 154.543 204.83 150.154 204.83C148.216 204.83 146.44 204.136 145.061 202.983L131.345 210.716C131.207 213.697 128.746 216.072 125.73 216.072C122.625 216.072 120.109 213.556 120.109 210.451C120.109 207.346 122.625 204.83 125.73 204.83C127 204.83 128.173 205.251 129.114 205.962L142.369 198.489C142.262 197.97 142.206 197.433 142.206 196.882C142.206 193.22 144.684 190.136 148.054 189.215L148.029 173.269C145.249 172.179 143.233 169.568 143.004 166.461L127.533 159.467C124.298 163.265 119.48 165.674 114.1 165.674C104.358 165.674 96.4601 157.776 96.4601 148.034C96.4601 139.419 102.637 132.245 110.804 130.702V120.996C106.094 119.582 102.663 115.212 102.663 110.042C102.663 103.725 107.783 98.6051 114.1 98.6051C114.578 98.6051 115.049 98.6344 115.512 98.6914L128.798 73.7488C127.966 72.6227 127.475 71.2302 127.475 69.7229C127.475 65.9759 130.512 62.9384 134.259 62.9384C137.49 62.9384 140.193 65.1966 140.877 68.2206L150.609 67.596C151.558 63.8065 154.987 61 159.071 61C163.888 61 167.793 64.9053 167.793 69.7228Z",
                  fill: "url(#paint1_linear_89_156)",
                }),
                (0, s.jsx)("path", {
                  d: "M197.257 81.7409C197.257 82.2937 197.218 82.8374 197.142 83.3692L206.412 87.56C209.133 83.9104 213.483 81.5471 218.386 81.5471C226.629 81.5471 233.311 88.2295 233.311 96.4728C233.311 104.716 226.629 111.398 218.386 111.398C213.496 111.398 209.156 109.047 206.433 105.414L195.308 109.531C195.315 109.7 195.319 109.871 195.319 110.042C195.319 111.558 195.024 113.006 194.488 114.33L213.057 122.724C214.2 122.174 215.482 121.866 216.835 121.866C221.653 121.866 225.558 125.771 225.558 130.589C225.558 134.593 222.86 137.967 219.183 138.992L219.811 150.696C220.761 150.887 221.642 151.266 222.415 151.792L233.36 145.468C233.328 145.165 233.312 144.857 233.312 144.545C233.312 140.714 235.781 137.46 239.215 136.288L239.155 123.591C236.627 122.481 234.862 119.957 234.862 117.02C234.862 113.059 238.073 109.848 242.034 109.848C245.995 109.848 249.206 113.059 249.206 117.02C249.206 120.083 247.286 122.698 244.583 123.726L244.642 136.219C248.186 137.328 250.757 140.636 250.757 144.545C250.757 149.363 246.852 153.268 242.034 153.268C239.489 153.268 237.199 152.178 235.604 150.44L225.421 156.324C225.511 156.778 225.558 157.246 225.558 157.726C225.558 161.687 222.347 164.898 218.386 164.898C214.425 164.898 211.214 161.687 211.214 157.726C211.214 155.227 212.493 153.025 214.432 151.742L213.734 138.744C210.448 137.494 208.112 134.314 208.112 130.589C208.112 129.243 208.417 127.968 208.962 126.829L191.224 118.811C189.238 120.476 186.677 121.478 183.882 121.478C177.566 121.478 172.446 116.358 172.446 110.042C172.446 103.725 177.566 98.6051 183.882 98.6051C188.109 98.6051 191.801 100.898 193.78 104.309L204.016 100.522C203.654 99.234 203.46 97.876 203.46 96.4728C203.46 95.0724 203.653 93.7171 204.013 92.4319L195.113 88.4085C193.038 91.2966 189.649 93.1775 185.821 93.1775C179.504 93.1775 174.384 88.0572 174.384 81.7409C174.384 75.4247 179.504 70.3044 185.821 70.3044C192.137 70.3044 197.257 75.4247 197.257 81.7409Z",
                  fill: "url(#paint2_linear_89_156)",
                }),
                (0, s.jsx)("path", {
                  d: "M107.509 85.4239C112.327 85.4239 116.232 81.5185 116.232 76.7011C116.232 71.8836 112.327 67.9782 107.509 67.9782C102.692 67.9782 98.7862 71.8836 98.7862 76.7011C98.7862 77.6015 98.9227 78.4701 99.176 79.2873L89.681 86.8696C87.2732 84.535 83.9901 83.0978 80.3714 83.0978C72.9846 83.0978 66.9964 89.086 66.9964 96.4728C66.9964 102.998 71.6693 108.432 77.8514 109.611V119.021C76.3167 119.647 75.0005 120.699 74.0487 122.028L62.3339 117.408C62.3407 117.279 62.3442 117.15 62.3442 117.02C62.3442 113.059 59.1331 109.848 55.1721 109.848C51.2111 109.848 48 113.059 48 117.02C48 120.238 50.1201 122.962 53.0399 123.87V137.922C50.0888 139.082 48 141.958 48 145.321C48 149.71 51.5582 153.268 55.9475 153.268C60.3367 153.268 63.8949 149.71 63.8949 145.321C63.8949 141.812 61.6215 138.835 58.4674 137.781V123.392C59.0886 123.07 59.6568 122.66 60.1553 122.178L72.4243 127.017C72.4241 127.045 72.4239 127.072 72.4239 127.1C72.4239 131.917 76.3293 135.822 81.1468 135.822C85.9642 135.822 89.8696 131.917 89.8696 127.1C89.8696 123.018 87.0657 119.591 83.2789 118.639V109.531C89.2677 108.203 93.7464 102.861 93.7464 96.4728C93.7464 94.6669 93.3884 92.9445 92.7397 91.3728L102.326 83.7177C103.775 84.7899 105.568 85.4239 107.509 85.4239Z",
                  fill: "url(#paint3_linear_89_156)",
                }),
                (0, s.jsxs)("defs", {
                  children: [
                    (0, s.jsxs)("linearGradient", {
                      id: "paint0_linear_89_156",
                      x1: "41.9909",
                      y1: "113.531",
                      x2: "256.572",
                      y2: "162.572",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, s.jsx)("stop", { stopColor: "#CE0D0D" }),
                        (0, s.jsx)("stop", {
                          offset: "0.31451",
                          stopColor: "#FF911D",
                        }),
                        (0, s.jsx)("stop", {
                          offset: "0.589076",
                          stopColor: "#FF1A81",
                        }),
                        (0, s.jsx)("stop", {
                          offset: "0.737851",
                          stopColor: "#DE01E4",
                        }),
                        (0, s.jsx)("stop", {
                          offset: "1",
                          stopColor: "#31DFF8",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("linearGradient", {
                      id: "paint1_linear_89_156",
                      x1: "41.9909",
                      y1: "113.531",
                      x2: "256.572",
                      y2: "162.572",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, s.jsx)("stop", { stopColor: "#CE0D0D" }),
                        (0, s.jsx)("stop", {
                          offset: "0.31451",
                          stopColor: "#FF911D",
                        }),
                        (0, s.jsx)("stop", {
                          offset: "0.589076",
                          stopColor: "#FF1A81",
                        }),
                        (0, s.jsx)("stop", {
                          offset: "0.737851",
                          stopColor: "#DE01E4",
                        }),
                        (0, s.jsx)("stop", {
                          offset: "1",
                          stopColor: "#31DFF8",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("linearGradient", {
                      id: "paint2_linear_89_156",
                      x1: "41.9909",
                      y1: "113.531",
                      x2: "256.572",
                      y2: "162.572",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, s.jsx)("stop", { stopColor: "#CE0D0D" }),
                        (0, s.jsx)("stop", {
                          offset: "0.31451",
                          stopColor: "#FF911D",
                        }),
                        (0, s.jsx)("stop", {
                          offset: "0.589076",
                          stopColor: "#FF1A81",
                        }),
                        (0, s.jsx)("stop", {
                          offset: "0.737851",
                          stopColor: "#DE01E4",
                        }),
                        (0, s.jsx)("stop", {
                          offset: "1",
                          stopColor: "#31DFF8",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("linearGradient", {
                      id: "paint3_linear_89_156",
                      x1: "41.9909",
                      y1: "113.531",
                      x2: "256.572",
                      y2: "162.572",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, s.jsx)("stop", { stopColor: "#CE0D0D" }),
                        (0, s.jsx)("stop", {
                          offset: "0.31451",
                          stopColor: "#FF911D",
                        }),
                        (0, s.jsx)("stop", {
                          offset: "0.589076",
                          stopColor: "#FF1A81",
                        }),
                        (0, s.jsx)("stop", {
                          offset: "0.737851",
                          stopColor: "#DE01E4",
                        }),
                        (0, s.jsx)("stop", {
                          offset: "1",
                          stopColor: "#31DFF8",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        },
        eI = {
          navbarItems: [
            { title: "About", href: "#about", items: [] },
            {
              title: "Event",
              href: "#events",
              items: [
                {
                  title: "Stragtegem",
                  href: "#stragtegem",
                  description: "Case Study Competition",
                  items: [],
                },
                {
                  title: "Better Call Tal",
                  href: "#better-call-tal",
                  description: "Chess Competition",
                  items: [],
                },
                {
                  title: "Turing Show",
                  href: "#turing-show",
                  description: "Coding Competition",
                  items: [],
                },
                {
                  title: "Phronemophilia",
                  href: "#phronemophilia",
                  description: "Poster Presentation Competition",
                  items: [],
                },
                {
                  title: "Exquizzit",
                  href: "#exquizzit",
                  description: "Quiz Competition",
                  items: [],
                },
                {
                  title: "Special Talk",
                  href: "#special-talk",
                  description: "Speech by Industry Experts",
                  items: [],
                },
              ],
            },
            { title: "Speakers", href: "#speakers", items: [] },
            { title: "Sponsors", href: "#sponsors", items: [] },
            { title: "Our Team", href: "#team", items: [] },
            { title: "Gallery", href: "#gallery", items: [] },
            { title: "FAQs", href: "#faqs", items: [] },
            { title: "Contact", href: "#footer", items: [] },
          ],
        },
        eV = () => {
          let { sub: e } = v();
          return (0, s.jsx)("nav", {
            className: "max-xl:hidden !z-[1000]",
            children: (0, s.jsx)("ul", {
              className: "".concat(
                e.className,
                " flex justify-around px-32 py-8 text-gray-50 text-lg"
              ),
              children: eI.navbarItems.map((e) =>
                (0, s.jsx)(
                  "li",
                  {
                    children: (0, s.jsx)(M(), {
                      href: e.href,
                      children: e.title,
                    }),
                  },
                  e.title
                )
              ),
            }),
          });
        };
      function eT(e) {
        let {
            children: t,
            containerClassName: a,
            className: n,
            as: r = "button",
            duration: l = 1,
            clockwise: o = !0,
            ...c
          } = e,
          [d, m] = (0, i.useState)(!1),
          [h, x] = (0, i.useState)("TOP"),
          p = (e) => {
            let t = ["TOP", "LEFT", "BOTTOM", "RIGHT"],
              a = t.indexOf(e),
              s = o ? (a - 1 + t.length) % t.length : (a + 1) % t.length;
            return t[s];
          },
          u = {
            TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
            LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
            BOTTOM:
              "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
            RIGHT:
              "radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
          };
        return (
          (0, i.useEffect)(() => {
            if (!d) {
              let e = setInterval(() => {
                x((e) => p(e));
              }, 1e3 * l);
              return () => clearInterval(e);
            }
          }, [d]),
          (0, s.jsxs)(r, {
            onMouseEnter: (e) => {
              m(!0);
            },
            onMouseLeave: () => m(!1),
            className: N(
              "relative flex rounded-full border  content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
              a
            ),
            ...c,
            children: [
              (0, s.jsx)("div", {
                className: N(
                  "w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]",
                  n
                ),
                children: t,
              }),
              (0, s.jsx)(E.P.div, {
                className: N(
                  "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
                ),
                style: {
                  filter: "blur(2px)",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                },
                initial: { background: u[h] },
                animate: {
                  background: d
                    ? [
                        u[h],
                        "radial-gradient(75% 181.15942028985506% at 50% 50%, #32a852 0%, rgba(255, 255, 255, 0) 100%)",
                      ]
                    : u[h],
                },
                transition: { ease: "linear", duration: null != l ? l : 1 },
              }),
              (0, s.jsx)("div", {
                className:
                  "bg-black/90 absolute z-1 flex-none inset-[2px] rounded-[100px]",
              }),
            ],
          })
        );
      }
      let eD = () => {
        let { mono: e, sub: t } = v(),
          [a, n] = (0, i.useState)(!1),
          r = (0, i.useRef)(null),
          l = (0, i.useRef)(null);
        return (
          (0, i.useRef)(null),
          (0, ew.L)(
            () => {
              eC.Ay.to(l.current, {
                rotate: a ? 360 : 0,
                scale: a ? 0.8 : 1,
                duration: 0.3,
                ease: "back.out(1.7)",
              });
            },
            { scope: r, dependencies: [a] }
          ),
          (0, s.jsxs)(s.Fragment, {
            children: [
              a
                ? (0, s.jsx)(eL, {})
                : (0, s.jsx)(P.default, {
                    src: "./images/hero.png",
                    alt: "",
                    fill: !0,
                    objectFit: "cover",
                  }),
              (0, s.jsx)("div", {
                className: "overlay absolute inset-0  bg-black/50",
              }),
              (0, s.jsx)(eV, {}),
              (0, s.jsx)("div", {
                className: "text-gray-50 h-4 xl:hidden ml-auto mr-6 my-6",
              }),
              (0, s.jsxs)("div", {
                className:
                  "w-full z-10 hero-title-grid xl:flex items-center justify-between mt-8 xl:mt-0 xl:px-6 xl:pb-8",
                children: [
                  (0, s.jsx)(eS.Perceptron, {
                    className: "w-[20vw] hero-title-logo-left",
                  }),
                  (0, s.jsx)(eR, {}),
                  (0, s.jsx)(P.default, {
                    src: "https://raw.githubusercontent.com/SayanDasDev/perceptron2k25/refs/heads/development/public/icons/rkm-logo.webp",
                    alt: "",
                    width: 400,
                    height: 400,
                    className: "w-[20vw] object-cover hero-title-logo-right",
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "grid hero-cards-grid",
                children: [
                  (0, s.jsx)(ez, {}),
                  (0, s.jsxs)("div", {
                    className:
                      "hero-cta flex flex-col-reverse col-span-1 md:col-span-2 xl:col-span-1 xl:flex-col gap-6 items-center justify-center mx-auto",
                    children: [
                      (0, s.jsx)(eT, {
                        containerClassName:
                          "rounded-full xl:translate-y-[-150%] cursor-pointer z-[100] !bg-glassmorphic`",
                        as: "button",
                        onClick: () => window.open(B, "_blank"),
                        className: "".concat(
                          t.className,
                          " cursor-pointer z-[100] bg-glassmorphic text-2xl px-8"
                        ),
                        children: (0, s.jsx)("span", { children: "Brochure" }),
                      }),
                      (0, s.jsx)(L, {
                        onClick: () => n(!a),
                        className: "".concat(
                          t.className,
                          " hero-play rounded-full w-20 h-20 xl:w-28 xl:h-28 px-0"
                        ),
                        variant: "heroCTA",
                        size: "responsiveXL",
                        children: (0, s.jsx)("div", {
                          ref: l,
                          children: a
                            ? (0, s.jsxs)(s.Fragment, {
                                children: [
                                  (0, s.jsx)("span", {
                                    className: "sr-only",
                                    children: "Pause Video",
                                  }),
                                  (0, s.jsx)(eN.A, {
                                    className:
                                      "w-8 h-8 xl:w-12 xl:h-12 scale-[250%]",
                                  }),
                                ],
                              })
                            : (0, s.jsxs)(s.Fragment, {
                                children: [
                                  (0, s.jsx)("span", {
                                    className: "sr-only",
                                    children: "Play Video",
                                  }),
                                  (0, s.jsx)(A.A, {
                                    className:
                                      "w-8 h-8 xl:w-12 xl:h-12 scale-[250%]",
                                  }),
                                ],
                              }),
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)(eA, {}),
                ],
              }),
            ],
          })
        );
      };
      a(1085);
      let eP = () => {
        let { sub: e, mono: t } = v(),
          a = (0, i.useRef)(null),
          [n, r] = (0, i.useState)(!1),
          l = (0, i.useRef)(null);
        (0, ew.L)(
          () => {
            l.current = eC.Ay.timeline({ paused: !0 })
              .set(".menu-bg-container", { display: "flex" })
              .to(".menu-overlay", {
                duration: 0.15,
                height: "520px",
                maxWidth: "300px",
                width: "calc(100vw - 24px)",
                ease: "power2.inOut",
              })
              .set(".nav-menu-links", { y: 20 })
              .to(".nav-menu-links", {
                duration: 0.04,
                y: 0,
                opacity: 1,
                stagger: 0.015,
                ease: "elastic.inOut",
              });
          },
          { scope: a }
        ),
          (0, i.useEffect)(() => {
            var e, t;
            n
              ? null === (e = l.current) || void 0 === e || e.play()
              : null === (t = l.current) || void 0 === t || t.reverse();
          }, [n]);
        let o = () => {
          r(!n);
        };
        return (0, s.jsxs)("menu", {
          className: "menu",
          ref: a,
          children: [
            (0, s.jsx)(L, {
              onClick: o,
              variant: "ghostNoHover",
              className: "".concat(
                e.className,
                " xl:hidden fixed top-5 right-3 z-[1010] text-background/50 text-xl"
              ),
              children: n ? "Close" : "Menu",
            }),
            (0, s.jsx)("div", {
              className:
                "menu-overlay xl:hidden menu-bg-glassmorphic border border-background/20 fixed top-4 right-3 h-12 w-[100px] rounded-2xl z-[1000]",
            }),
            (0, s.jsx)("div", {
              className: "".concat(
                e.className,
                " menu-bg-container xl:hidden fixed top-0 right-0 translate-x-[calc(-50vw+50%)] min-[425px]:translate-x-[-75px] translate-y-[10%] hidden flex-col gap-6 items-start justify-center p-6 text-2xl text-gray-300 z-[1000]"
              ),
              children: eI.navbarItems.map((e, a) =>
                (0, s.jsxs)(
                  "div",
                  {
                    className: "flex gap-2 items-end",
                    children: [
                      (0, s.jsxs)("p", {
                        className: "".concat(
                          t.className,
                          " nav-menu-links translate-y-[-1000px] text-primary text-sm opacity-0"
                        ),
                        children: ["0", a],
                      }),
                      (0, s.jsx)(M(), {
                        onClick: o,
                        className:
                          "nav-menu-links translate-y-[-1000px] opacity-0",
                        href: e.href,
                        children: e.title,
                      }),
                    ],
                  },
                  a
                )
              ),
            }),
          ],
        });
      };
      function e_(e) {
        let { children: t, className: a } = e;
        return (0, s.jsxs)("div", {
          className: N(
            "relative mt-8 mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-transparent px-4 py-1.5 text-sm font-medium backdrop-blur-sm  duration-500 ease-out [--bg-size:300%]  dark:bg-black/40",
            a
          ),
          children: [
            (0, s.jsx)("div", {
              className:
                "absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
            }),
            t,
          ],
        });
      }
      function eM() {
        return (0, s.jsxs)("div", {
          className:
            "w-full flex flex-col items-center justify-center space-y-12",
          children: [
            (0, s.jsx)(X, { heading: "Speakers" }),
            (0, s.jsx)("div", {
              className: "w-full flex justify-center items-center",
              children: (0, s.jsx)(eH, {}),
            }),
          ],
        });
      }
      let eH = () =>
        (0, s.jsx)("div", {
          className: "z-10 flex min-h-64 items-center justify-center",
          children: (0, s.jsx)("div", {
            className: N(
              "group mx-auto rounded text-base transition-all ease-in hover:cursor-pointer p-8 hover:bg-slate-900"
            ),
            children: (0, s.jsxs)("div", {
              className:
                "flex flex-col items-center justify-center px-4 py-1 transition ease-out hover:duration-300 text-white-100",
              children: [
                (0, s.jsx)("div", {
                  className: "text-9xl",
                  children: "\uD83D\uDCE2",
                }),
                (0, s.jsx)(e_, {
                  children: (0, s.jsx)("span", {
                    className: N(
                      "inline text-center animate-gradient text-2xl bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent"
                    ),
                    children: "Will be decleared soon...",
                  }),
                }),
              ],
            }),
          }),
        });
      var eF = a(3396),
        eq = a(5368);
      let eU = [
          {
            name: "QJ",
            title: "Associate Sponsor",
            imageURL: "/images/QJ_logo.jpg",
            links: {
              website: "https://qjconsulting.in/",
              linkedin:
                "https://www.linkedin.com/company/qj-consultingofficial/",
              youtube: "https://youtube.com/@qjconsulting ",
              instagram: "https://www.instagram.com/qjconsulting/",
            },
          },
          {
            name: "Nihilent",
            title: "Technical Sponsor",
            imageURL: "/images/Nihilent_logo.jpg",
            links: {
              website: "https://www.nihilent.com/",
              linkedin: "https://www.linkedin.com/company/nihilent/",
              facebook: "https://www.facebook.com/Nihilent/",
              youtube: "https://www.youtube.com/@NihilentLimited",
            },
          },
          {
            name: "Data Space",
            title: "Technical Sponsor",
            imageURL: "/images/data_space.png",
            links: {
              website: "https://dataspaceacademy.com/",
              linkedin: "https://www.linkedin.com/company/dataspace-academy/",
              facebook: "https://www.facebook.com/DataSpaceAcademy",
              youtube: "https://youtube.com/@dataspaceacademy",
              instagram: "https://www.instagram.com/dataspacacademy",
            },
          },
          {
            name: "HandE",
            title: "Event Sponsor",
            imageURL: "/images/HandE_Logo.png",
            links: {
              website: "https://www.handelearning.com/",
              linkedin: "https://www.linkedin.com/company/hande-learning",
              facebook: "https://www.facebook.com/humanandemotion/",
              youtube: "https://www.youtube.com/@humanandemotion",
              instagram: "https://www.instagram.com/humanandemotion",
            },
          },
        ],
        eO = (0, i.createContext)(void 0),
        eB = (e) => {
          let { children: t, className: a, containerClassName: n } = e,
            r = (0, i.useRef)(null),
            [l, o] = (0, i.useState)(!1);
          return (0, s.jsx)(eO.Provider, {
            value: [l, o],
            children: (0, s.jsx)("div", {
              className: N(" flex items-center justify-center", n),
              style: { perspective: "1000px" },
              children: (0, s.jsx)("div", {
                ref: r,
                onMouseEnter: (e) => {
                  if ((o(!0), !r.current)) return;
                },
                onMouseMove: (e) => {
                  if (!r.current) return;
                  let {
                      left: t,
                      top: a,
                      width: s,
                      height: i,
                    } = r.current.getBoundingClientRect(),
                    n = (e.clientX - t - s / 2) / 25,
                    l = (e.clientY - a - i / 2) / 25;
                  r.current.style.transform = "rotateY("
                    .concat(n, "deg) rotateX(")
                    .concat(l, "deg)");
                },
                onMouseLeave: (e) => {
                  r.current &&
                    (o(!1),
                    (r.current.style.transform =
                      "rotateY(0deg) rotateX(0deg)"));
                },
                className: N(
                  "flex items-center justify-center relative transition-all duration-200 ease-linear",
                  a
                ),
                style: { transformStyle: "preserve-3d" },
                children: t,
              }),
            }),
          });
        },
        eG = (e) => {
          let { children: t, className: a } = e;
          return (0, s.jsx)("div", {
            className: N(
              "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
              a
            ),
            children: t,
          });
        },
        eK = (e) => {
          let {
              as: t = "div",
              children: a,
              className: n,
              translateX: r = 0,
              translateY: l = 0,
              translateZ: o = 0,
              rotateX: c = 0,
              rotateY: d = 0,
              rotateZ: m = 0,
              ...h
            } = e,
            x = (0, i.useRef)(null),
            [p] = eZ();
          (0, i.useEffect)(() => {
            u();
          }, [p]);
          let u = () => {
            x.current &&
              (p
                ? (x.current.style.transform = "translateX("
                    .concat(r, "px) translateY(")
                    .concat(l, "px) translateZ(")
                    .concat(o, "px) rotateX(")
                    .concat(c, "deg) rotateY(")
                    .concat(d, "deg) rotateZ(")
                    .concat(m, "deg)"))
                : (x.current.style.transform =
                    "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)"));
          };
          return (0, s.jsx)(t, {
            ref: x,
            className: N("w-fit transition duration-200 ease-linear", n),
            ...h,
            children: a,
          });
        },
        eZ = () => {
          let e = (0, i.useContext)(eO);
          if (void 0 === e)
            throw Error(
              "useMouseEnter must be used within a MouseEnterProvider"
            );
          return e;
        },
        eJ = () =>
          (0, s.jsxs)("div", {
            className:
              "w-screen flex flex-col items-center justify-center space-y-12",
            children: [
              (0, s.jsx)(X, { heading: "Sponsors" }),
              (0, s.jsx)("div", {
                className:
                  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 gap-10 max-w-7xl mx-auto w-full",
                children: eU.map((e, t) =>
                  (0, s.jsx)(
                    eB,
                    {
                      className: "flex flex-1 inter-var",
                      children: (0, s.jsxs)(eG, {
                        className:
                          "hover:bg-slate-900 flex flex-col items-center relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-black/[0.1] w-full max-w-[380px] h-auto rounded-xl p-6 border  ",
                        children: [
                          (0, s.jsx)(eK, {
                            translateZ: "100",
                            className: "w-full mt-4",
                            children: (0, s.jsx)(P.default, {
                              src: "https://raw.githubusercontent.com/SayanDasDev/perceptron2k25/refs/heads/development/public".concat(
                                e.imageURL
                              ),
                              width: 200,
                              height: 200,
                              alt: e.name,
                              className:
                                "h-40 w-full object-contain rounded-xl group-hover/card:shadow-xl",
                            }),
                          }),
                          (0, s.jsx)(eK, {
                            translateZ: "100",
                            className:
                              "w-full mt-4 text-center text-background text-xl font-bold",
                            children: e.title,
                          }),
                          (0, s.jsx)("div", {
                            className: "grid grid-cols-3 flex-wrap gap-2 mt-10",
                            children: Object.entries(e.links || {}).map(
                              (e, t) => {
                                let [a, i] = e;
                                return (0, s.jsxs)(
                                  eK,
                                  {
                                    translateZ: 20,
                                    as: "button",
                                    onClick: () => window.open(i, "_blank"),
                                    className:
                                      "px-4 py-2 bg-background rounded-full text-foreground/80 hover:text-foreground",
                                    children: [
                                      "website" == a &&
                                        (0, s.jsxs)(s.Fragment, {
                                          children: [
                                            (0, s.jsx)("span", {
                                              className: "sr-only",
                                              children: "Website",
                                            }),
                                            (0, s.jsx)(eF.A, { size: 16 }),
                                          ],
                                        }),
                                      "linkedin" == a &&
                                        (0, s.jsxs)(s.Fragment, {
                                          children: [
                                            (0, s.jsx)("span", {
                                              className: "sr-only   ",
                                              children: "LinkedIn",
                                            }),
                                            (0, s.jsx)(eo.A, { size: 16 }),
                                          ],
                                        }),
                                      "facebook" == a &&
                                        (0, s.jsxs)(s.Fragment, {
                                          children: [
                                            (0, s.jsx)("span", {
                                              className: "sr-only",
                                              children: "Facebook",
                                            }),
                                            (0, s.jsx)(ec.A, { size: 16 }),
                                          ],
                                        }),
                                      "instagram" == a &&
                                        (0, s.jsxs)(s.Fragment, {
                                          children: [
                                            (0, s.jsx)("span", {
                                              className: "sr-only",
                                              children: "Instagram",
                                            }),
                                            (0, s.jsx)(el.A, { size: 16 }),
                                          ],
                                        }),
                                      "youtube" == a &&
                                        (0, s.jsxs)(s.Fragment, {
                                          children: [
                                            (0, s.jsx)("span", {
                                              className: "sr-only",
                                              children: "YouTube",
                                            }),
                                            (0, s.jsx)(eq.A, { size: 16 }),
                                          ],
                                        }),
                                    ],
                                  },
                                  t
                                );
                              }
                            ),
                          }),
                        ],
                      }),
                    },
                    t
                  )
                ),
              }),
            ],
          }),
        eW = [
          {
            name: "Tuhin Patra",
            role: "Secretary",
            avatar: "/images/Tuhin_Patra.jpg",
            links: {
              github: "https://github.com/TuhinPatra633",
              linkedIn: "http://www.linkedin.com/in/tuhin-patra-226651294",
              website: "https://tuhinpatraportfolio.netlify.app/",
              mobile: "7439496850",
            },
          },
          {
            name: "Debayan Dutta",
            role: "Joint Secretary",
            avatar: "/images/debayan.jpg",
            links: {
              github: "https://github.com/debayan-datta",
              linkedIn: "https://www.linkedin.com/in/dattadebayan2001",
              mobile: "9051532999",
            },
          },
          {
            name: "Anurag Joardar",
            role: "Convenor",
            avatar: "/images/Anurag.jpg",
            links: {
              github: "https://github.com/Achilles1012",
              linkedIn: "https://www.linkedin.com/in/anuragjoardar2000",
              mobile: "9330205208",
            },
          },
          {
            name: "Debanjan Nanda",
            role: "Treasurer",
            avatar: "/images/debanjan.jpg",
            links: {
              github: "https://github.com/DebanjanNanda",
              linkedIn: "https://www.linkedin.com/in/debanjan-nanda",
              mobile: "8116404139",
            },
          },
        ],
        eY = [
          {
            name: "Saikat Kumar Ghosh",
            role: "Better Call Tal Lead",
            avatar: "/images/Saikat.jpg",
            links: {
              github: "https://github.com/ghoshsaikat2024",
              linkedIn: "https://linkedin.com/in/saikat-ghosh-0340551ba",
              mobile: "7604037062",
            },
          },
          {
            name: "Uddalak Mukherjee",
            role: "Exquizzit Lead",
            avatar: "/images/Uddalak.jpg",
            links: {
              github: "https://github.com/Jacknife49",
              linkedIn:
                "https://www.linkedin.com/in/uddalak-mukherjee-38950321b",
              mobile: "8910901931",
            },
          },
          {
            name: "Ayan Maity",
            role: "Deep Think Lead",
            avatar: "/images/Ayan_maity.jpg",
            links: {
              github: "https://github.com/AyanMaity435601",
              linkedIn: "https://www.linkedin.com/in/ayan--maity",
              website: "https://ayanmaity435601.github.io/",
              mobile: "7864827874",
            },
          },
          {
            name: "Biswajit Rana",
            role: "The Turing Show Lead",
            avatar: "/images/biswajit.jpg",
            links: {
              github: "https://github.com/biswajit-github-2022",
              linkedIn: "https://www.linkedin.com/in/biswajit-rana/",
              website:
                "https://biswajit-github-2022.github.io/portfolio_website/",
              mobile: "7908105640",
            },
          },
          {
            name: "Amit Bera",
            role: "Clash of Wheels Lead",
            avatar: "/images/Amit_Bera.jpg",
            links: {
              github: "https://github.com/AmitBera007/",
              linkedIn: "https://www.linkedin.com/in/amit-bera/",
              website: "https://amitbera007.github.io/portfolio/",
              mobile: "7047884078",
            },
          },
          {
            name: "Atanu Saha",
            role: "Enigma Equation Lead",
            avatar: "/images/Atanu.jpg",
            links: {
              linkedIn: "https://www.linkedin.com/in/atanu-saha-4aa183210",
              mobile: "9123869488",
            },
          },
          {
            name: "Diptesh Saha",
            role: "Under the Hammer Lead",
            avatar: "/images/Diptesh.jpg",
            links: {
              linkedIn: "https://www.linkedin.com/in/diptesh-saha-634349254",
              mobile: "9330404502",
            },
          },
          {
            name: "Aniket Ghosh",
            role: "Beyond the Lens Lead",
            avatar: "/images/Aniket.jpg",
            links: {
              github: "https://github.com/Nik-from-H",
              mobile: "8145068846",
            },
          },
          {
            name: "Samapan Kar",
            role: "Lens and Light Lead",
            avatar: "/images/Samapan_Kar.jpg",
            links: {
              github: "https://github.com/sama7fb",
              linkedIn: "https://www.linkedin.com/in/samapankar",
              mobile: "9062593526",
            },
          },
        ],
        eQ = [
          {
            name: "Ayantanu Laha",
            role: "Design Team Lead",
            avatar: "/images/Ayantanu.jpg",
            links: {
              github: "https://github.com/Ayantanu2002",
              linkedIn: "https://www.linkedin.com/in/ayantanu-laha-2002/",
              website: "https://ayantanu2002.github.io/resume/index.html",
              mobile: "9476169407",
            },
          },
          {
            name: "Sayan Das",
            role: "Web Developer",
            avatar: "/images/sayan_das.jpg",
            links: {
              github: "https://github.com/SayanDasDev",
              linkedIn: "https://www.linkedin.com/in/das-sayan/",
              website: "https://sayandas.co.in",
              mobile: "7384802278",
            },
          },
          {
            name: "Pankaj Sadukha",
            role: "Designer",
            avatar: "/images/pankaj.jpg",
            links: {
              github: "https://github.com/PANKAJ-SADHUKHAN",
              linkedIn: "https://www.linkedin.com/in/pankaj-sadhukhan",
              website: "https://pankaj-sadhukhan.github.io/",
              mobile: "9339447515",
            },
          },
          {
            name: "Rajarshi Saha",
            role: "Designer",
            avatar: "/images/Rajarshi.jpg",
            links: {
              github: "https://github.com/Rsaha-16",
              linkedIn: "https://www.linkedin.com/in/rajarshi16",
              website: "https://rsaha-16.github.io/My-Portfolio/",
              mobile: "7679568191",
            },
          },
          {
            name: "Niladri Ghosh",
            role: "Videographer",
            avatar: "/images/Nilardi.jpg",
            links: {
              linkedIn: "https://www.linkedin.com/in/niladri-ghosh-3aa76b320",
              mobile: "9093372699",
            },
          },
        ],
        eX = (e) => {
          let { id: t, x: a, y: i, color: n, delay: r, scale: l } = e;
          return (0, s.jsx)(
            E.P.svg,
            {
              className: "pointer-events-none absolute z-20",
              initial: { opacity: 0, left: a, top: i },
              animate: {
                opacity: [0, 1, 0],
                scale: [0, l, 0],
                rotate: [75, 120, 150],
              },
              transition: { duration: 0.8, repeat: 1 / 0, delay: r },
              width: "21",
              height: "21",
              viewBox: "0 0 21 21",
              children: (0, s.jsx)("path", {
                d: "M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z",
                fill: n,
              }),
            },
            t
          );
        },
        e$ = (e) => {
          let {
              text: t,
              colors: a = { first: "#69F791", second: "#8AEFBB" },
              className: n,
              sparklesCount: r = 10,
              ...l
            } = e,
            [o, c] = (0, i.useState)([]);
          return (
            (0, i.useEffect)(() => {
              let e = () => {
                let e = "".concat(100 * Math.random(), "%"),
                  t = "".concat(100 * Math.random(), "%"),
                  s = Math.random() > 0.5 ? a.first : a.second,
                  i = 2 * Math.random(),
                  n = 1 * Math.random() + 0.3,
                  r = 10 * Math.random() + 5;
                return {
                  id: "".concat(e, "-").concat(t, "-").concat(Date.now()),
                  x: e,
                  y: t,
                  color: s,
                  delay: i,
                  scale: n,
                  lifespan: r,
                };
              };
              c(Array.from({ length: r }, e));
              let t = setInterval(() => {
                c((t) =>
                  t.map((t) =>
                    t.lifespan <= 0 ? e() : { ...t, lifespan: t.lifespan - 0.1 }
                  )
                );
              }, 100);
              return () => clearInterval(t);
            }, [a.first, a.second]),
            (0, s.jsx)("div", {
              className: N("text-6xl font-bold", n),
              ...l,
              style: {
                "--sparkles-first-color": "".concat(a.first),
                "--sparkles-second-color": "".concat(a.second),
              },
              children: (0, s.jsxs)("span", {
                className: "relative inline-block",
                children: [
                  o.map((e) => (0, s.jsx)(eX, { ...e }, e.id)),
                  (0, s.jsx)("strong", { children: t }),
                ],
              }),
            })
          );
        };
      var e1 = a(8388);
      let e0 = (e) => {
          let { children: t, containerClassName: a, className: n } = e,
            [r, l] = (0, i.useState)({ x: 0, y: 0 }),
            [o, c] = (0, i.useState)(!1);
          return (0, s.jsx)(E.P.section, {
            onMouseMove: (e) => {
              let { clientX: t, clientY: a } = e,
                s = e.currentTarget.getBoundingClientRect();
              l({
                x: (t - (s.left + s.width / 2)) / 20,
                y: (a - (s.top + s.height / 2)) / 20,
              });
            },
            onMouseEnter: () => c(!0),
            onMouseLeave: () => {
              c(!1), l({ x: 0, y: 0 });
            },
            style: {
              transform: o
                ? "translate3d("
                    .concat(r.x, "px, ")
                    .concat(r.y, "px, 0) scale3d(1, 1, 1)")
                : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
              transition: "transform 0.1s ease-out",
            },
            className: N(
              "mx-auto w-full bg-indigo-800  relative rounded-2xl overflow-hidden",
              a
            ),
            children: (0, s.jsx)("div", {
              className:
                "relative  h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))]  sm:mx-0 sm:rounded-2xl overflow-hidden",
              style: {
                boxShadow:
                  "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
              },
              children: (0, s.jsxs)(E.P.div, {
                style: {
                  transform: o
                    ? "translate3d("
                        .concat(-r.x, "px, ")
                        .concat(-r.y, "px, 0) scale3d(1.03, 1.03, 1)")
                    : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
                  transition: "transform 0.1s ease-out",
                },
                className: N("h-full px-4 py-20 sm:px-10", n),
                children: [(0, s.jsx)(e2, {}), t],
              }),
            }),
          });
        },
        e2 = () =>
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("div", {
                className:
                  "absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)] z-[-5] ",
                style: {
                  backgroundImage:
                    "url(https://raw.githubusercontent.com/SayanDasDev/perceptron2k25/refs/heads/development/public/noise.webp)",
                  backgroundSize: "30%",
                },
              }),
              (0, s.jsx)("div", {
                className:
                  "absolute inset-0 w-full h-full scale-[1.2] transform z-[-4] group-hover:bg-gradient-to-t from-slate-950 to-transparent",
              }),
            ],
          }),
        e5 = (e) => {
          let { data: t, isOrganizer: a = !1 } = e;
          return (0, s.jsx)("div", {
            className:
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 gap-10 max-w-7xl mx-auto w-full",
            children: t.map((e, t) => {
              var i, n, r, l, o, c, d;
              return (0, s.jsxs)(
                e0,
                {
                  containerClassName:
                    "col-span-1 group h-full bg-slate-950 h-72 w-72 ",
                  className:
                    "p-4 !px-4 flex flex-col items-center justify-between no-scrollbar",
                  children: [
                    (0, s.jsx)(Z, {
                      variant: "secondary",
                      className:
                        "text-lg bg-glassmorphic text-background rounded-full group-hover:bg-background group-hover:text-foreground",
                      children: e.role,
                    }),
                    (0, s.jsx)(P.default, {
                      src: "https://raw.githubusercontent.com/SayanDasDev/perceptron2k25/refs/heads/development/public".concat(
                        e.avatar
                      ),
                      fill: !0,
                      alt: "",
                      className: N(
                        a
                          ? "group-hover:brightness-80 brightness-80"
                          : "brightness-50 group-hover:brightness-100",
                        "absolute inset-0 -z-10 object-cover rounded-2xl ease-in-out duration-300 transition-all"
                      ),
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "flex flex-col items-center justify-center space-y-4",
                      children: [
                        (0, s.jsx)("div", {
                          className: "font-bold text-background text-2xl",
                          children: e.name,
                        }),
                        (0, s.jsxs)("div", {
                          className: "flex gap-4 justify-around ",
                          children: [
                            (null === (i = e.links) || void 0 === i
                              ? void 0
                              : i.github) &&
                              (0, s.jsxs)(M(), {
                                target: "_blank",
                                className: N(k({ variant: "avatarLinks" })),
                                href:
                                  null === (n = e.links) || void 0 === n
                                    ? void 0
                                    : n.github,
                                children: [
                                  (0, s.jsx)("span", {
                                    className: "sr-only",
                                    children: "Github",
                                  }),
                                  (0, s.jsx)(e1.A, { size: 16 }),
                                ],
                              }),
                            (null === (r = e.links) || void 0 === r
                              ? void 0
                              : r.linkedIn) &&
                              (0, s.jsxs)(M(), {
                                target: "_blank",
                                className: N(k({ variant: "avatarLinks" })),
                                href:
                                  null === (l = e.links) || void 0 === l
                                    ? void 0
                                    : l.linkedIn,
                                children: [
                                  (0, s.jsx)("span", {
                                    className: "sr-only",
                                    children: "LinkedIn",
                                  }),
                                  (0, s.jsx)(eo.A, { size: 16 }),
                                ],
                              }),
                            (null === (o = e.links) || void 0 === o
                              ? void 0
                              : o.website) &&
                              (0, s.jsxs)(M(), {
                                target: "_blank",
                                className: N(k({ variant: "avatarLinks" })),
                                href:
                                  null === (c = e.links) || void 0 === c
                                    ? void 0
                                    : c.website,
                                children: [
                                  (0, s.jsx)("span", {
                                    className: "sr-only",
                                    children: "Website",
                                  }),
                                  (0, s.jsx)(eF.A, { size: 16 }),
                                ],
                              }),
                            (null === (d = e.links) || void 0 === d
                              ? void 0
                              : d.mobile) &&
                              (0, s.jsxs)(M(), {
                                target: "_blank",
                                className: N(k({ variant: "avatarLinks" })),
                                href: "tel:".concat(e.links.mobile),
                                children: [
                                  (0, s.jsx)("span", {
                                    className: "sr-only",
                                    children: "Phone",
                                  }),
                                  (0, s.jsx)(ed.A, { size: 16 }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                t
              );
            }),
          });
        },
        e3 = () =>
          (0, s.jsxs)("div", {
            className:
              "w-screen flex flex-col items-center justify-center space-y-12",
            children: [
              (0, s.jsx)(X, { heading: "Our Team" }),
              (0, s.jsx)(e$, {
                className: "text-background text-2xl",
                text: "Organizers",
              }),
              (0, s.jsx)(e5, { data: eW, isOrganizer: !0 }),
              (0, s.jsx)(e$, {
                className: "text-background text-2xl",
                text: "Event Team Leads",
              }),
              (0, s.jsx)(e5, { data: eY }),
              (0, s.jsx)(e$, {
                className: "text-background text-2xl",
                text: "Designers",
              }),
              (0, s.jsx)(e5, { data: eQ }),
            ],
          });
      var e8 = a(7022),
        e7 = a(4192),
        e4 = a(8633);
      function e6() {
        let e = (0, e8._)([
          "\n            radial-gradient(\n              200px circle at ",
          "px ",
          "px,\n              black 0%,\n              transparent 100%\n            )\n          ",
        ]);
        return (
          (e6 = function () {
            return e;
          }),
          e
        );
      }
      function e9() {
        let e = (0, e8._)([
          "\n            radial-gradient(\n              200px circle at ",
          "px ",
          "px,\n              black 0%,\n              transparent 100%\n            )\n          ",
        ]);
        return (
          (e9 = function () {
            return e;
          }),
          e
        );
      }
      let te = (e) => {
        let { children: t, className: a, containerClassName: i } = e,
          n = (0, e7.d)(0),
          r = (0, e7.d)(0);
        return (0, s.jsxs)("div", {
          className: N(
            "relative h-[40rem] flex items-center bg-transparent justify-center w-full group",
            i
          ),
          onMouseMove: function (e) {
            let { currentTarget: t, clientX: a, clientY: s } = e;
            if (!t) return;
            let { left: i, top: l } = t.getBoundingClientRect();
            n.set(a - i), r.set(s - l);
          },
          children: [
            (0, s.jsx)("div", {
              className:
                "absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800  pointer-events-none",
            }),
            (0, s.jsx)(E.P.div, {
              className:
                "pointer-events-none bg-dot-thick-cyan-600 dark:bg-dot-thick-cyan-600  absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100",
              style: {
                WebkitMaskImage: (0, e4.E)(e6(), n, r),
                maskImage: (0, e4.E)(e9(), n, r),
              },
            }),
            (0, s.jsx)("div", {
              className: N("relative z-20", a),
              children: t,
            }),
          ],
        });
      };
      function tt() {
        return (0, s.jsxs)("main", {
          className: "overflow-x-hidden bg-transparent z-20",
          children: [
            (0, s.jsx)(eP, {}),
            (0, s.jsx)("section", {
              id: "hero",
              className:
                "hero w-screen min-h-screen grid grid-rows-[80px_25dvh_1fr] md:grid-rows-[80px_30dvh_1fr] xl:grid-rows-[80px_1fr_280px]",
              children: (0, s.jsx)(eD, {}),
            }),
            (0, s.jsxs)(te, {
              containerClassName: "bg-slate-950 h-full pb-20",
              children: [
                (0, s.jsx)("section", {
                  id: "about",
                  className:
                    "about px-12 border-t-2 border-[#3a4150] !border-r-0 !border-l-0  flex items-center justify-center text-9xl bg-gradient-to-b from-black to-slate-900 text-white",
                  children: (0, s.jsx)(T, {}),
                }),
                (0, s.jsx)("section", {
                  id: "events",
                  className: "flex items-center justify-center",
                  children: (0, s.jsx)(Y, {}),
                }),
                (0, s.jsx)("section", {
                  id: "speakers",
                  className: "flex bg-transparent",
                  children: (0, s.jsx)(eM, {}),
                }),
                (0, s.jsx)("section", {
                  id: "sponsors",
                  className: "flex justify-center mt-20 bg-transparent",
                  children: (0, s.jsx)(eJ, {}),
                }),
                (0, s.jsx)("section", {
                  id: "team",
                  className: "flex justify-center mt-20 bg-transparent",
                  children: (0, s.jsx)(e3, {}),
                }),
                (0, s.jsx)("section", {
                  id: "gallery",
                  className: "flex justify-center mt-20 bg-transparent",
                  children: (0, s.jsx)(ey, {}),
                }),
                (0, s.jsx)("section", {
                  id: "faqs",
                  className: "flex mt-20 bg-transparent",
                  children: (0, s.jsx)(en, {}),
                }),
              ],
            }),
            (0, s.jsx)("section", {
              id: "footer",
              className: "flex bg-transparent",
              children: (0, s.jsx)(eh, {}),
            }),
          ],
        });
      }
    },
    1085: () => {},
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [705, 461, 843, 142, 767, 358], () => t(7816)), (_N_E = e.O());
  },
]);
