import Parse from "parse";
import fetch from "isomorphic-fetch";
require("es6-promise").polyfill();

function readFileAsync(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default async function sendToParse(code, text, photo) {
  const base64 = await readFileAsync(photo);

  const file = new Parse.File("RepairPhoto.png", { base64: base64 });
  return fetch(`https://parseapi.back4app.com/classes/EBPhotos/${code}`, {
    method: "PUT",
    headers: {
      "X-Parse-Application-Id": "MqnjqlT052qHLbVSCWqP4Gdrh217qwWxM5fjtJUb",
      "X-Parse-REST-API-Key": "o9XyukdSWP1jAqUtF29MMUsjqld31c03m1WbAFUM",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      RepairPhoto: file,
      RepairComments: text,
    }),
  }).then((resp) => resp.json());
}
