let characters = "abcdefghijklmnopqrstuvwxyz0123456789";

function generateKey(length, characters) {
  let key = "";
  const symbolLength = characters.length;

  for (let i = 0; i <= length; i++) {
    let randomIndex = Math.floor(Math.random() * symbolLength);
    key += characters.charAt(randomIndex);
  }

  return key;
}

let key = generateKey(5, characters);

console.log(key);

