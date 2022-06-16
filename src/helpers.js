export const pokeTypeBgColor = (e) => {
  if (
    (e[0] === "fairy" && e[1] === "normal") ||
    (e[0] === "flying" && e[1] === "normal") ||
    (e[0] === "flying" && e[1] === "ground") ||
    (e[0] === "ice" && e[1] === "water") ||
    (e[0] === "psychic" && e[1] === "ice") ||
    (e[0] === "steel" && e[1] === "ground") ||
    (e[0] === "steel" && e[1] === "rock") ||
    (e[0] === "psychic" && e[1] === "water")
  ) {
    return e[0];
  } else {
    return e.length === 2 ? e[1] : e[0];
  }
};