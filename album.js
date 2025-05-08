new Vue({
    el: "#app",
    data() {
      return {
        isOpenedTop: true,
        items: [
          {
            img1: "/album/familia1.jpg",
            img2: "album/familia10.jpg",
            img3: "album/familia15.jpg",
            title: "Mama y Papa",
            isOpen: false,
          },
          {
            img1: "album/image1.jpg",
            img2: "album/image2.jpg",
            img3: "album/image3.jpg",
            title: "Nancy",
            isOpen: false,
          },
          {
            img1: "album/familia4.jpg",
            img2: "album/familia2.jpg",
            img3: "album/familia3.jpg",
            title: "BABIES",
            isOpen: false,
          },
          {
            img1: "album/mini1.jpg",
            img2: "album/mini6.jpg",
            img3: "album/mini4.jpg",
            title: "Mini Nancy",
            isOpen: false,
          },
          {
            img1: "album/familia11.jpg",
            img2: "album/familia9.jpg",
            img3: "album/familia14.jpg",
            title: "familia",
            isOpen: false,
          },
        ],
      };
    },
    methods: {
      topOpen() {
        this.isOpenedTop = !this.isOpenedTop;
      },
  
      open(idx, isOpen) {
        if (this.isOpenedTop) {
          this.items[idx].isOpen = !isOpen;
        }
      },
  
      reset() {
        this.items.forEach((item) => (item.isOpen = false));
        this.isOpenedTop = false;
      },
    },
  });
  