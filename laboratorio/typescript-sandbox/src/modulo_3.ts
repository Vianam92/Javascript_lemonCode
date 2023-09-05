interface GrupoMusical {
  name: string;
  cantante?: string;
  compositor?: string;
  fundation: number;
  active: boolean;
  género: string;
}

export const group1: GrupoMusical = {
  name: "The Beathles",
  fundation: 1960,
  active: true,
  género: "🎵 Pop Rock",
};

export const group2: GrupoMusical = {
  name: "Queen",
  fundation: 1970,
  active: false,
  género: "🎸 Rock",
};

export const group3: GrupoMusical = {
  name: "AC DC",
  fundation: 1973,
  active: true,
  género: "🤘 Hard Rock",
};

export const group4: GrupoMusical = {
  name: "Ludwig van Beethoven",
  fundation: 1770,
  active: false,
  género: "🎼 Clásica",
};

export const group5: GrupoMusical = {
  name: "The Rolling Stones",
  fundation: 1962,
  active: true,
  género: "🎸 Rock",
};

export const createList = (group: any) => {
  const list = document.querySelector(".list");
  const elementLi = document.createElement("li");
  list?.appendChild(elementLi);
  elementLi?.setAttribute("class", "element-class");
  for (let item in group) {
    const elementSpan = document.createElement("span");
    elementLi.appendChild(elementSpan);
    elementSpan.innerHTML += group[item];
  }
};
