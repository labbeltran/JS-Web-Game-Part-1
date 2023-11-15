// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
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


let windowWidth= window.innerWidth
let windowHeight= window.innerHeight

// I want to start at 0,0 move left to 980, move up 800
for(let i=0; i<windowWidth; i+=100){
//   i=0 is my pixel count
    let grass = document.createElement('img')
    grass.src = 'assets/grass.png'
    grass.style.position = 'fixed'
    grass.style.left = i +'px' 
    grass.style.bottom = '0px'
    document.body.append(grass)
}

// function newImage(){
//     let greenCharacter = document.createElement('img')
//     greenCharacter.src = 'assets/green-character.gif'
//     greenCharacter.style.position = 'fixed'
//     greenCharacter.style.left = '100px'
//     greenCharacter.style.bottom = '100px'
//     document.body.append(greenCharacter)
// }