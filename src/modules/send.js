export default function sendToParse({ condition }) {
  return fetch("https://parseapi.back4app.com/classes/EBPhotos", {
    method: "POST",
    headers: {
      "X-Parse-Application-Id": "MqnjqlT052qHLbVSCWqP4Gdrh217qwWxM5fjtJUb",
      "X-Parse-REST-API-Key": "o9XyukdSWP1jAqUtF29MMUsjqld31c03m1WbAFUM",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ConditionPhoto: {
        __type: "File",
        name: "resume.txt",
      },
      ConditionComments: "A string",
      RepairPhoto: {
        __type: "File",
        name: "resume.txt",
      },
      RepairComments: "A string",
    }),
  }).then((resp) => resp.json());
}
