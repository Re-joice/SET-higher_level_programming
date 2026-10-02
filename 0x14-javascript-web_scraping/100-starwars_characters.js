#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const movieUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(movieUrl, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const characters = JSON.parse(body).characters;

  const getCharacter = (index) => {
    if (index === characters.length) {
      return;
    }

    request.get(characters[index], (err, res, data) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(JSON.parse(data).name);
      getCharacter(index + 1);
    });
  };

  getCharacter(0);
});
