import _ from "lodash";
import './assets/styles/style.css';

function element(): HTMLDivElement {
  const element: HTMLDivElement = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack.", "This is cool!"], " ");
  return element;
}

function doSomethingWithAString(someString: string | object): void {

}

function doAnotherThing(): void {
  doSomethingWithAString({someString: ""});
  doSomethingWithAString("someString");
}

document.body.appendChild(element());