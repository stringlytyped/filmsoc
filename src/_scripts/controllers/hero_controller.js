import { Controller } from "stimulus"

export default class HeroController extends Controller {
  static targets = [ "adjective" ]
  
  static adjectives = [
    "exhilarating",
    "thrilling",
    "gripping",
    "riveting",
    "adventurous",
    "perilous",
    "fascinating",
    "dramatic",
    "moving",
    "inspiring",
    "uplifting",
    "frightening",
    "terrifying",
    "chilling",
    "eerie",
    "romantic",
    "passionate",
    "emotive",
    "amusing",
    "hilarious",
    "hysterical",
    "quick-witted",
    "entertaining",
    "silly",
    "absurd",
    "mysterious",
    "perplexing",
    "inexplicable",
    "supernatural",
    "mystical",
    "fantastical",
    "educational",
    "illuminating",
    "creative",
    "artistic",
    "expressive"
  ]

  connect() {
    let heroControllerInstance = this;

    window.setInterval(function() {
      heroControllerInstance.randomizeAdjective();
    }, 3000);

    window.setTimeout(function() {
      heroControllerInstance.element.classList.remove("-hidden");
    }, 500);
  }

  randomizeAdjective() {
    let index = Math.floor(Math.random() * HeroController.adjectives.length);
    this.adjectiveTarget.innerText = HeroController.adjectives[index];
  }
}