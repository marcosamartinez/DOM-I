const siteContent = {
  // DO NOT CHANGE THIS OBJECT
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2021",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

//all images on the page
const navImage = document.querySelector("#logo-img");
navImage.src = siteContent.images["logo-img"];
// Second Image
const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.images["cta-img"];
// Third Image
const midImg = document.querySelector("#middle-img");
midImg.src = siteContent.images["accent-img"];

// Footer Link
const footA = document.querySelector("footer a");
footA.textContent = siteContent.footer.copyright;
footA.classList.add("bold");

// Contact Sec
const conSec = document.querySelector("section.contact");
conSec.querySelector("h4").textContent = siteContent.contact["contact-h4"];
conSec.querySelector("p:nth-of-type(1)").textContent =
  siteContent.contact.address;
conSec.querySelector("p:nth-of-type(2)").textContent =
  siteContent.contact.phone;
conSec.querySelector("p:nth-of-type(3)").textContent =
  siteContent.contact.email;

// Main content

const topCont = document.querySelector(".top-content");
topCont.children[0].children[0].textContent =
  siteContent["main-content"]["features-h4"];
topCont.children[0].children[1].textContent =
  siteContent["main-content"]["features-content"];
topCont.children[1].children[0].textContent =
  siteContent["main-content"]["about-h4"];
topCont.children[1].children[1].textContent =
  siteContent["main-content"]["about-content"];

const botCont = document.querySelector(".bottom-content");
botCont.children[0].children[0].textContent =
  siteContent["main-content"]["services-h4"];
botCont.children[0].children[1].textContent =
  siteContent["main-content"]["services-content"];
botCont.children[1].children[0].textContent =
  siteContent["main-content"]["product-h4"];
botCont.children[1].children[1].textContent =
  siteContent["main-content"]["product-content"];
botCont.children[2].children[0].textContent =
  siteContent["main-content"]["vision-h4"];
botCont.children[2].children[1].textContent =
  siteContent["main-content"]["vision-content"];

// Cta section
const ctaCont = document.querySelector(".cta-text");
ctaCont.children[0].textContent = siteContent.cta.h1;
ctaCont.children[1].textContent = siteContent.cta.button;

// Nav section
const navCont = document.querySelectorAll("header nav a");
const navLinks = Object.values(siteContent.nav);
navCont.forEach((link, idx) => {
  link.textContent = navLinks[idx];
  link.classList.add("italic");
});
// navCont.children[0].textContent = siteContent.nav["nav-item-1"];
// navCont.children[1].textContent = siteContent.nav["nav-item-2"];
// navCont.children[2].textContent = siteContent.nav["nav-item-3"];
// navCont.children[3].textContent = siteContent.nav["nav-item-4"];
// navCont.children[4].textContent = siteContent.nav["nav-item-5"];
// navCont.children[5].textContent = siteContent.nav["nav-item-6"];

// Body and Header
body.style.color = "black";
