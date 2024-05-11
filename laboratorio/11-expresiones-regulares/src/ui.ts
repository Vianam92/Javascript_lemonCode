export const paintText = (element: any, message: string): void => {
  element.textContent = message;
};

export const paintImages = (array: any): void => {
    const element = document.createElement("img");
    element.src = `${array}`;
    const div = document.querySelector(".images");

    div?.appendChild(element);
}
