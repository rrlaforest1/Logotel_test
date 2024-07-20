import news from "../data/data-news";
import tabs from "../data/data-tabs";

class Page {
  constructor() {
    // Variables
    this.slider = document.querySelector("#slider");
    this.news = document.querySelector("#news");
    this.paths = document.querySelector("#paths");
    this.tabs = document.querySelector("#tabs");

    this.init();
  }

  setSlider() {}

  setNews() {
    console.log("setNews", news);

    news.map((nw, ind) => {
      console.log("ind", ind, "nw", nw.img);

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

  setPaths() {}

  setTabs() {
    console.log("setTabs");
    tabs.map((tab, ind) => {
      console.log("tab", tab, "nw", tab.img);

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
    // setSlider();
    this.setNews();
    // setPaths();
    this.setTabs();
  }
}

export default Page;
