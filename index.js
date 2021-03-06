import {Header, Nav, Main, Footer} from "./components";
import Navigo from "navigo";
import * as state from "./store";
console.log(state.Home);

const router = new Navigo(location.origin);

function capitalize (word) {
    const firstLetter = word[0];
    const restOfTheLetters = word.slice(1);
    return firstLetter.toUpperCase() + restOfTheLetters.toLowerCase();
}

function render (st = state.Home) {
    // console.log(st)
    document.querySelector("#root").innerHTML = `
    
    ${Nav(st)}
    ${Header(st)}
    ${Main(st)}
    ${Footer()}
`;
router.updatePageLinks();
  const currentPage = router.lastRouteResolved();

  // run code that only happens on one page
  if (currentPage.url === '/Floors') {
    // console.log("This should only show up on the Floors page")
 
    const squareFootage = document.querySelector("#num2");
    const floorType = document.querySelector("select");
    console.log(squareFootage, floorType);

    function calculateFloorCost () {
      return floorType.value * squareFootage.value `{#num3}`
    }
  const submitButton = document.querySelector('input[type="submit"]')

   
  }
  // console.log(router.lastRouteResolved());
}

router
  .on(":page", params => {
    const page = params.page;
    const targetState = state[capitalize(page)];
    render(targetState);
  })
  .on("/", () => render(state.Home))
  .resolve();
