import {Header, Nav, Main, Footer} from "./components";

function render (st = state.Home) {
    document.querySelector("#root").innerHTML = `
    ${Header()}
    ${Nav()}
    ${Main()}
    ${Footer()}
`;  
}
