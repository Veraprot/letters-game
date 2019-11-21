// models: 
// 1. a table for all the games with tiles 
// 2. Table for Players 
// Table for Moves of a game 
// board => dimentions matrix [4] x [4]
// tiles => x and y axis [width][height]



// A  B  C  D         [A] B  C  D         [A][B] C  D
// E [F] G  H          E [F] G  H          E [F] G  H
// I  J  K  L          I  J  K  L          I  J  K  L
// M  N  O  P          M  N  O  P          M  N  O  P

// user input is 5 0 1 
// neighbot range difference is 5 inputs 
// 

// static int countNeighbours(Board b, int x, int y) {
//   int count = 0;
//   for (Direction direction : Direction.values()) {
//       if (b.isAlive(x + direction.dx, y + direction.dy)) {
//           ++count;
//       }
//   }
//   return count;
// }
