let windowWidth= window.innerWidth
let windowHeight= window.innerHeight

// // I want to start at 0,0 move left to 980, move up 800
for(let i=0; i<windowWidth; i+=100){
//   i=0 is my pixel count
    let grass = document.createElement('img')
    grass.src = 'assets/grass.png'
    grass.style.position = 'fixed'
    grass.style.left = i +'px' 
    grass.style.bottom = '0px'
    document.body.append(grass)
}
for(let i=0; i<windowWidth; i+=100){
    //   i=0 is my pixel count
    let grass = document.createElement('img')
    grass.src = 'assets/grass.png'
    grass.style.position = 'fixed'
    grass.style.left = i +'px' 
    grass.style.bottom = '100px'
    document.body.append(grass)
    }
    for(let i=0; i<windowWidth; i+=100){
//   i=0 is my pixel count
    let grass = document.createElement('img')
    grass.src = 'assets/grass.png'
    grass.style.position = 'fixed'
    grass.style.left = i +'px' 
    grass.style.bottom = '200px'
    document.body.append(grass)
}
for(let i=0; i<windowWidth; i+=100){
    //   i=0 is my pixel count
    let grass = document.createElement('img')
    grass.src = 'assets/grass.png'
    grass.style.position = 'fixed'
    grass.style.left = i +'px' 
    grass.style.bottom = '300px'
    document.body.append(grass)
    }
 for(let i=0; i<windowWidth; i+=100){
        //   i=0 is my pixel count
    let grass = document.createElement('img')
    grass.src = 'assets/grass.png'
    grass.style.position = 'fixed'
    grass.style.left = i +'px' 
    grass.style.bottom = '400px'
    document.body.append(grass)
        }
for(let i=0; i<windowWidth; i+=100){
            //   i=0 is my pixel count
    let grass = document.createElement('img')
    grass.src = 'assets/grass.png'
    grass.style.position = 'fixed'
    grass.style.left = i +'px' 
    grass.style.bottom = '500px'
    document.body.append(grass)
            }
for(let i=0; i<windowWidth; i+=100){
                //   i=0 is my pixel count
    let grass = document.createElement('img')
    grass.src = 'assets/grass.png'
    grass.style.position = 'fixed'
    grass.style.left = i +'px' 
    grass.style.bottom = '600px'
    document.body.append(grass)
                }


// for(let i=0; i<windowHeight; i+=100){
//     //   i=0 is my pixel count
//         let sky = document.createElement('img')
//         sky.src = 'assets/sky.png'
//         sky.style.position = 'fixed'
//         sky.style.left = i + '0px' 
//         sky.style.bottom = '1780px'
//         document.body.append(sky)
    // }

// for(let i=0; i<windowWidth; i+=100){
//  //   i=0 is my pixel count
//     let grass = document.createElement('img')
//     grass.src = 'assets/grass.png'
//     grass.style.position = 'fixed'
//     grass.style.left = i +'px' 
//     grass.style.bottom = '100px'
//     document.body.append(grass)

// write function template
function newImage(url, left, bottom) {
    let object = document.createElement('img');
    object.src = url;
    object.style.position = 'fixed';
    object.style.left = left + 'px';
    object.style.bottom = bottom + 'px';
    document.body.append(object);
    return object;
}

// invoke function
const objects = [
    ['assets/green-character.gif', 200, 200],
    ['assets/pillar.png', 350, 100],
    ['assets/tree.png', 200, 300],
    ['assets/crate.png', 200, 200],
    ['assets/pine-tree.png', 450, 200],
    ['assets/well.png', 500, 425]
];

for (let i = 0; i < objects.length; i++) {
    newImage(...objects[i]);
}

// double click dissapear
function newItem(url, left, bottom) {
    let object = document.createElement('img');
    object.src = url;
    object.style.position = 'fixed';
    object.style.left = left + 'px';
    object.style.bottom = bottom + 'px';
    document.body.append(object);
    return object;
}

const newItems = [
    ['assets/shield.png', 700, 405],
    ['assets/sword.png', 500, 405]
]

for (let i = 0; i < newItems.length; i++) {
    newItem(...newItems[i]);
}

if (i === newItems) sword.addEventListener('click', function(){
    sword.remove()
})


// create array
// newImage('url', left, bottom)
// newImage('assets/green-character.gif', 200, 200)
// newImage('assets/.pillar.png', 350, 100)
// newImage('assets/tree.png', 200, 300)
// newImage('assets/crate.png', 200, 200)
// newImage('assets/pine-tree.png', 450, 200)
// newImage('assets/well.png', 500, 425)


// create object of arrays?


// make separate function with loop for grass & sky; need a loop
// width 980 max, height 800 for grass (1780 total height)
// function newImage(){
//     console.log();
// }


// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '200px'
// greenCharacter.style.bottom = '200px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)

// let grass = document.createElement('img')
// grass.src = 'assets/grass.png'
// grass.style.position = 'fixed'
// grass.style.left = '0px' 
// grass.style.bottom = '0px'


// let windowWidth= window.innerWidth
// let windowHeight= window.innerHeight

// // I want to start at 0,0 move left to 980, move up 800
// for(let i=0; i<windowWidth; i+=100){
// //   i=0 is my pixel count
//     let grass = document.createElement('img')
//     grass.src = 'assets/grass.png'
//     grass.style.position = 'fixed'
//     grass.style.left = i +'px' 
//     grass.style.bottom = '0px'
//     document.body.append(grass)
// }
// for(let i=0; i<windowWidth; i+=100){
//  //   i=0 is my pixel count
//     let grass = document.createElement('img')
//     grass.src = 'assets/grass.png'
//     grass.style.position = 'fixed'
//     grass.style.left = i +'px' 
//     grass.style.bottom = '100px'
//     document.body.append(grass)



    
//         }

// // sky
// let windowHeight= window.innerHeight
// for(let i=0; i<windowHeight; i+=100){
//     //   i=0 is my pixel count
//         let sky = document.createElement('img')
//         sky.src = 'assets/sky.png'
//         sky.style.position = 'fixed'
//         sky.style.left = i +'px' 
//         sky.style.bottom = '0px'
//         document.body.append(sky)
//     }
// for(let i=0; i<windowHeight; i+=100){
//         //   i=0 is my pixel count
//         let sky = document.createElement('img')
//         sky.png = 'assets/sky.png'
//         sky.style.position = 'fixed'
//         sky.style.left = i +'px' 
//         sky.style.bottom = '100px'
//         document.body.append(sky)
