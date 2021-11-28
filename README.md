# Installations
```
npm i read-nested-object
```

# What ?
With this module you can read nested object with keys like "name.first", "hobby.real.0" etc

# How ?
```js
const readObject = require('read-nested-object');

// import readObject from "./" // for typescript

const ob = {
    name: {
        first: "Shisui",
        last: "Uchiha",
    },
    hobby: {
        real: ["sleeping", "wasting time"],
        fake: ["coding", "gaming"]
    }
}

console.log(readObject(ob,"name.first")); // output => Shisui
console.log(readObject(ob,"hobby.real.0")); // output => sleeping
```

# Supports
For support or issues or queries contace me on my [discord server](https://discord.gg/XYnMTQNTFh), If you find any bug create a issue [here](https://github.com/KartikeSingh/read-nested-object/issues).