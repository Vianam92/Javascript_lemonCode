import "./style.css";
import "./ui";
import "./motor";
import { paintCardOfCharacters } from "./ui";
import { filterCharacter, getApi } from "./motor";

const handlerClick = () => {
  paintCardOfCharacters(filterCharacter());
};

const events = async () => {
  await getApi();
  paintCardOfCharacters(filterCharacter());
  const buttonElement = document.querySelector(".btn-search");

  if (buttonElement && buttonElement instanceof HTMLButtonElement) {
    buttonElement.addEventListener("click", handlerClick);
  }
};

addEventListener("DOMContentLoaded", events);
