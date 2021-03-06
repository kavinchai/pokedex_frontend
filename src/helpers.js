export const pokeTypeBgColor = (e) => {
  if (e) {
    if (
      (e[0] === "fairy" && e[1] === "normal") ||
      (e[0] === "flying" && e[1] === "normal") ||
      (e[0] === "flying" && e[1] === "ground") ||
      (e[0] === "ice" && e[1] === "water") ||
      (e[0] === "psychic" && e[1] === "ice") ||
      (e[0] === "psychic" && e[1] === "water") ||
      (e[0] === "steel" && e[1] === "ground") ||
      (e[0] === "steel" && e[1] === "rock") ||
      (e[0] === "dark" && e[1] === "rock") ||
      (e[0] === "bug" && e[1] === "rock")
    ) {
      return e[0];
    } else {
      return e.length === 2 ? e[1] : e[0];
    }
  }
};

export const removeNumAndDash = (text) => {
  return text.replace(/[0-9]/g, "").replace("-", " ");
};

export const calcPercent = (num, denom) => {
  return (num / denom) * 100;
};

export const capitalizeFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
  // for (let i = 0; i < words.length; i++) {
  //   words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  // }
  // return words;
};
