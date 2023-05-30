const json_value = `{"fisrtName" : "Kwon",
                     "lastName" : "MinSeong",
                     "email" : "k041802000@naver.com"
}`;

const json_parse = JSON.parse(json_value);
console.log(json_parse);

const to_json = JSON.stringify(json_parse);
console.log(to_json);
