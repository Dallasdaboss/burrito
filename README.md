# burrito
String Compressor, but the opposite (for fun)

### Warning: This project is for FUN, and is not practical for production or even small project uses!

## Documentation

### Installation
`npm install burrito-stuff`

### Setup
`const { Stuff, Unstuff } = require('burrito-stuff')`
or
`import 'burrito-stuff'`

### Usage
#### Stuff
`console.log(JSON.stringify(burrito.stuff('Hello world'))) // {"length":11,"H":[0],"e":[1],"l":[2,3,9],"o":[4,7]," ":[5],"w":[6],"r":[8],"d":[10]}`

#### Unstuff
```console.log(burrito.unstuff({"length":11,"H":[0],"e":[1],"l":[2,3,9],"o":[4,7]," ":[5],"w":[6],"r":[8],"d":[10]})) // Hello world```