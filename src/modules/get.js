import fetch from "isomorphic-fetch";
require("es6-promise").polyfill();

export default function getFromParseDb(code) {
  const condition =
    "where=" +
    JSON.stringify({
      objectId: code,
    });

  return fetch(`https://parseapi.back4app.com/classes/EBPhotos?${condition}`, {
    method: "GET",
    headers: {
      "X-Parse-Application-Id": "MqnjqlT052qHLbVSCWqP4Gdrh217qwWxM5fjtJUb",
      "X-Parse-REST-API-Key": "o9XyukdSWP1jAqUtF29MMUsjqld31c03m1WbAFUM",
      "Content-Type": "application/json",
    },
  }).then((resp) => resp.json());
}
