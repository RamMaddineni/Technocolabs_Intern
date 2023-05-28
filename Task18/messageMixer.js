// function countCharacter(inputString, inputCharacter) {
//   let count = 0;
//   let string = inputString.toLowerCase();
//   let character = inputCharacter.toLowerCase();
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === character) {
//       count++;
//     }
//   }
//   return count;
// }

// function capitalizeFirstCharacterOfWords(string) {
//   let arr = string.split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     let word = arr[i];
//     arr[i] = word[0].toUpperCase() + word.substring(1);
//   }
//   return arr.join(" ");
// }

// function reverseWord(word) {
//   return word.split("").reverse().join("");
// }

// function reverseAllWords(sentence) {
//   let words = sentence.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = reverseWord(words[i]);
//   }
//   return words.join(" ");
// }

// function replaceFirstOccurence(string, toBeReplaced, replaceWith) {
//   return string.replace(toBeReplaced, replaceWith);
// }

// function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
//   return string.split(toBeReplaced).join(replaceWith);
// }

// function encode(string) {
//   let replacementObject = { a: "@", s: "$", i: "!", o: "0" };
//   for (let key in replacementObject) {
//     string = replaceAllOccurrences(string, key, replacementObject[key]);
//   }
//   return string;
// }

let MessageMixer = {
  encode: (string) => {
    let replacementObject = { a: "@", s: "$", i: "!", o: "0" };
    for (let key in replacementObject) {
      string = MessageMixer.replaceAllOccurrences(
        string,
        key,
        replacementObject[key]
      );
    }
    return string;
  },
  replaceAllOccurrences: (string, toBeReplaced, replaceWith) => {
    return string.split(toBeReplaced).join(replaceWith);
  },
  replaceFirstOccurence: (string, toBeReplaced, replaceWith) => {
    return string.replace(toBeReplaced, replaceWith);
  },
  reverseAllWords: (sentence) => {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = MessageMixer.reverseWord(words[i]);
    }
    return words.join(" ");
  },
  reverseWord: (word) => {
    return word.split("").reverse().join("");
  },
  countCharacter: (inputString, inputCharacter) => {
    let count = 0;
    let string = inputString.toLowerCase();
    let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
        count++;
      }
    }
    return count;
  },

  capitalizeFirstCharacterOfWords: (string) => {
    let arr = string.split(" ");
    for (let i = 0; i < arr.length; i++) {
      let word = arr[i];
      arr[i] = word[0].toUpperCase() + word.substring(1);
    }
    return arr.join(" ");
  },
  palindrome: (str) => {
    return str + " " + MessageMixer.reverseWord(str);
  },
  pigLatin: (sentence, character) => {
    let words = sentence.split(" ");
    return words.join(character);
  },
};

// export default MessageMixer;
// export this MessageMixer object
module.exports = { MessageMixer };
