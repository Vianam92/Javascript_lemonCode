import { Characters } from "./model";

const articleElement = document.querySelector(".personajes-section");

const crearElementosLista = (ulList: any, title: string, text: string) => {
  const listElement = document.createElement("li");
  listElement.textContent = `${title}: ${text}.`;
  if (ulList) ulList.appendChild(listElement);
};

const createList = (characters: Characters) => {
  const ulList = document.createElement("ul");

  const img = document.createElement("img");

  img.setAttribute("src", `http://localhost:3000/${characters.imagen}`);
  if (ulList) ulList?.appendChild(img);

  crearElementosLista(ulList, "nombre", characters.nombre);
  crearElementosLista(ulList, "especialidad", characters.especialidad);
  crearElementosLista(ulList, "habilidades", characters.habilidades);
  if (articleElement) articleElement.appendChild(ulList);
};

export const paintCardOfCharacters = (character: Characters[]) => {
  if (articleElement) articleElement.textContent = "";
  character.map((characters: Characters) => {
    createList(characters);
  });
};
