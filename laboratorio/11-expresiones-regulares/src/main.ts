import "./style.css";
import "./motor";
import { isValidMessage, searchEnlaces } from "./motor";
import { btnElement, inputValue } from "./model";

const events = () => {
  if (inputValue instanceof HTMLInputElement) {
    inputValue.addEventListener("change", isValidMessage);
  }
  if (btnElement instanceof HTMLButtonElement) {
    btnElement.addEventListener("click", searchEnlaces);
  }
};

addEventListener("DOMContentLoaded", events);
