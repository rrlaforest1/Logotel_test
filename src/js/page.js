import news from "../data/data-news";
import tabs from "../data/data-tabs";
import paths from "../data/data-paths";
import slides from "../data/data-slider";

class Page {
  constructor() {
    // Variables
    this.header = document.querySelector("header");
    this.slider = document.querySelector("#slider");
    this.news = document.querySelector("#news");
    this.paths = document.querySelector("#paths");
    this.tabs = document.querySelector("#tabs");

    this.init();
  }

  setHeader() {
    console.log("setNav");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        this.header.classList.add("collapsed");
      } else {
        this.header.classList.remove("collapsed");
      }
    });
  }

  setSlider() {
    console.log("setSlider");

    /**
     * Build Slider Outer Elements
     */
    const sliderWindow = document.createElement("div");
    sliderWindow.classList.add("slider-window");

    const slidesContainer = document.createElement("div");
    slidesContainer.classList.add("slides-container");
    slidesContainer.style.width = slides.length * 100 + "%";

    const sliderArrowLeft = document.createElement("div");
    sliderArrowLeft.classList.add("slider-arrow", "arrow-left", "inactive");
    sliderArrowLeft.addEventListener("click", () => {
      this.moveSlider(slidesContainer, "left");
    });

    const sliderArrowRight = document.createElement("div");
    sliderArrowRight.classList.add("slider-arrow", "arrow-right");
    sliderArrowRight.addEventListener("click", () => {
      this.moveSlider(slidesContainer, "right");
    });

    const sliderNav = document.createElement("ul");
    sliderNav.classList.add("slider-nav");

    sliderWindow.append(
      slidesContainer,
      sliderArrowLeft,
      sliderArrowRight,
      sliderNav
    );

    /**
     * Build Slider Inner Elements
     */
    slides.map((slide, ind) => {
      const oneSlide = document.createElement("article");
      oneSlide.classList.add("slide", `slide-${ind + 1}`);
      oneSlide.style.backgroundImage = `url(${slide.img})`;

      const slideContentBox = document.createElement("div");
      slideContentBox.classList.add("slide-content-box");

      const slideTitle = document.createElement("h4");
      slideTitle.textContent = slide.title;
      const slideText = document.createElement("p");
      slideText.textContent = slide.text;
      const slideButton = document.createElement("button");
      slideButton.textContent = "Call to action";
      slideButton.onclick = () => {
        window.open(slide.cta_url, "_blank");
      };

      slideContentBox.append(slideTitle, slideText, slideButton);

      oneSlide.append(slideContentBox);
      slidesContainer.append(oneSlide);

      const slideNavButton = document.createElement("li");
      slideNavButton.classList.add("slide-nav-button", `slide-${ind + 1}`);
      slideNavButton.textContent = ind + 1;

      slideNavButton.addEventListener("click", () => {
        this.moveSlider(slidesContainer, ind + 1);
      });
      sliderNav.append(slideNavButton);
      if (ind === 0) {
        slideNavButton.classList.add("active");
      }
    });

    this.slider.append(sliderWindow);
  }

  moveSlider(slidesContainer, source, slideNumber) {
    console.log("moveSlider");

    const slidesQty = slides.length;

    // let sliderTotaWidth = slidesContainer.offsetWidth;
    let slideWidth = document.querySelector(".slide").offsetWidth;
    let currentPosition = slidesContainer.offsetLeft;
    let currentSlide = (currentPosition * -1) / slideWidth + 1;

    let newSlide;

    switch (source) {
      case "right":
        newSlide = currentSlide < slidesQty ? currentSlide + 1 : currentSlide;
        break;
      case "left":
        newSlide = currentSlide >= 1 ? currentSlide - 1 : currentSlide;
        break;

      default:
        newSlide = source != undefined ? source : 1;
        break;
    }

    slidesContainer.style.left = -slideWidth * (newSlide - 1) + "px";

    this.slider.querySelector(".arrow-right").classList.remove("inactive");
    this.slider.querySelector(".arrow-left").classList.remove("inactive");

    if (newSlide === slidesQty) {
      this.slider.querySelector(".arrow-right").classList.add("inactive");
    } else if (newSlide == 1) {
      this.slider.querySelector(".arrow-left").classList.add("inactive");
    }

    this.slider.querySelector(".slider-nav .active").classList.remove("active");
    this.slider
      .querySelector(`.slider-nav .slide-${newSlide}`)
      .classList.add("active");
  }

  setNews() {
    console.log("setNews");

    news.map((nw, ind) => {
      let newsCard = document.createElement("article");
      newsCard.classList.add("news-card", `news-${ind + 1}`);

      let newsImg = document.createElement("div");
      newsImg.classList.add("news-image");
      newsImg.style.backgroundImage = `url(${nw.img})`;

      let newsDate = document.createElement("p");
      newsDate.classList.add("news-date");
      newsDate.textContent = nw.date;

      let newsTitle = document.createElement("h5");
      newsTitle.classList.add("news-title");
      newsTitle.textContent = nw.title;

      let newsText = document.createElement("p");
      newsText.classList.add("news-text");
      newsText.textContent = nw.text;

      let newsInfo = document.createElement("div");
      newsInfo.classList.add("news-info");

      let newsInfoWrapper = document.createElement("div");
      newsInfoWrapper.classList.add("news-info-wrapper");

      newsInfoWrapper.append(newsDate, newsTitle, newsText);

      newsInfo.append(newsInfoWrapper);

      newsCard.append(newsImg, newsInfo);

      this.news.append(newsCard);
    });
  }

  setPaths() {
    console.log("setPaths");

    /**
     * Insert content
     */

    let timeline = document.createElement("div");
    timeline.classList.add("timeline");

    paths.map((path, ind) => {
      let pathSection = document.createElement("article");
      pathSection.classList.add("path-section", `path-n-${ind + 1}`);

      //Title + number
      let pathTitle = document.createElement("h5");
      pathTitle.textContent = path.title;
      let pathTitleNumber = document.createElement("span");
      pathTitleNumber.textContent = ind + 1 + ".";
      pathTitle.prepend(pathTitleNumber);

      //Icon
      let pathIconBox = document.createElement("div");
      pathIconBox.classList.add("path-icon-box");
      if (ind == 0) {
        pathIconBox.classList.add("open");
      }

      /**
       * Toggle path content on click
       */
      pathIconBox.addEventListener("click", (event) => {
        document.querySelectorAll(".path-section").forEach((element) => {
          element.querySelector(".path-text-box").classList.remove("open");
          element.querySelector(".path-icon-box").classList.remove("open");
        });

        event.currentTarget
          .closest(".path-section")
          .querySelector(".path-text-box")
          .classList.add("open");
        event.currentTarget
          .closest(".path-section")
          .querySelector(".path-icon-box")
          .classList.add("open");
      });

      let pathIcon = document.createElement("img");
      pathIcon.classList.add("path-icon");
      pathIcon.src = path.icon;

      pathIconBox.append(pathIcon);

      //Text + Title
      let pathTextWrapper = document.createElement("div");
      pathTextWrapper.classList.add("path-text-wrapper");
      let pathTextBox = document.createElement("div");
      pathTextBox.classList.add("path-text-box");
      if (ind == 0) {
        pathTextBox.classList.add("open");
      }
      let pathTextTitle = document.createElement("h4");
      pathTextTitle.textContent = path.title;
      let pathText = document.createElement("p");
      pathText.textContent = path.text;
      pathTextBox.append(pathTextTitle, pathText);
      pathTextWrapper.append(pathTextBox);

      pathSection.append(pathTitle, pathIconBox, pathTextWrapper);

      timeline.append(pathSection);
    });

    this.paths.append(timeline);
  }

  setTabs() {
    console.log("setTabs");
    tabs.map((tab, ind) => {
      let tabCard = document.createElement("article");
      tabCard.classList.add("tab-card", `tab-${ind + 1}`);

      let tabTitle = document.createElement("h5");
      tabTitle.classList.add("tab-title");
      tabTitle.textContent = tab.title;

      let tabImgWrapper = document.createElement("div");
      tabImgWrapper.classList.add("tab-img-wrapper");
      let tabImg = document.createElement("img");
      tabImg.classList.add("tab-image");
      tabImg.src = tab.img;
      tabImgWrapper.append(tabImg);

      let tabText = document.createElement("p");
      tabText.classList.add("tab-text");
      tabText.textContent = tab.text;

      let tabButton = document.createElement("button");
      tabButton.classList.add("tab-button");
      tabButton.textContent = "call to action";

      let newsInfoWrapper = document.createElement("div");
      newsInfoWrapper.classList.add("news-info-wrapper");

      tabCard.append(tabTitle, tabImgWrapper, tabText, tabButton);
      this.tabs.append(tabCard);
    });
  }

  init() {
    this.setHeader();
    this.setSlider();
    this.setNews();
    this.setPaths();
    this.setTabs();
  }
}

export default Page;
