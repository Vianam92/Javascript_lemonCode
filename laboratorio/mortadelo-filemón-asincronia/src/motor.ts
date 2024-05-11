import { Characters } from "./model";

const API = fetch("http://localhost:3000/personajes");

export let characters: Characters[] = [];

export const getApi = async () => {
  try {
    const response = await API;
    const data = await response.json();
    characters = data;
  } catch (error) {
    console.error(error);
  }
};

export const getValue = () => {
  let valueSearch = "";
  const inputElement: any = document.querySelector(".input-search");
  if (inputElement && inputElement instanceof HTMLInputElement) {
    valueSearch = inputElement.value;
  }

  return valueSearch;
};

export const filterCharacter = () => {
  let characterFind = characters.filter(
    (character: Characters) => character.nombre === getValue()
  );

  if (characterFind.length) {
    return characterFind;
  } else {
    return characters;
  }
};
