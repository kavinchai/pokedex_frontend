
//Nice use of a helpers file! This is a nice paradigm to use to keep these sorts 
//of things reusable and more readable

export const pokeTypeBgColor = (e) => {
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
};
//I'm really curious what the purpose of this one is. Is is some kind of
//pokemon logic about the way types work? I wanted to recommend ways to clean
//it up, but wanted to make sure I understood it first

export const formatText = (text) => {
  return text.replace(/[0-9]/g, "").replace("-", " ");
};
//I would like to see a slighly more expressive name here, specifically
//how the text is being formatted

export const calcPercent = (num, denom) => {
  return (num / denom) * 100;
};
//Nice!


export const URL = "https://intern-pokedex.myriadapps.com/api/v1/pokemon";
//This isn't really a helper, it would be better to move it into something like a 
//constants file. There are a few other constants that are used across the app
//that could be useful in there as well