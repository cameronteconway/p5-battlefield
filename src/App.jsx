import { createRoot } from 'react-dom/client';
import Sketch from 'react-p5';

const App = () => {
    let redSoldiers = [];
    let blueSoldiers = [];
    const preload = async (p5) => {};

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(600, 400).parent(canvasParentRef);

        // Red Soldiers
        for (let i = 0; i < 10; i++) {
            let x = 0;
            let y = p5.random(0, 100);
            let redSoldier = new Soldier(x, y, 5, '255, 0, 0', 'right', p5);
            redSoldiers.push(redSoldier);
        }

        // Blue Soliders
        for (let i = 0; i < 10; i++) {
            let x = 100;
            let y = p5.random(0, 100);
            let blueSoldier = new Soldier(x, y, 5, '0, 0, 255', 'left', p5);
            blueSoldiers.push(blueSoldier);
        }
    };

    const draw = (p5) => {
        // p5.background(0);
        // Red Soldiers
        for (let i = 0; i < redSoldiers.length; i++) {
            redSoldiers[i].move();
            redSoldiers[i].show();
        }

        // Blue Soldiers
        for (let i = 0; i < blueSoldiers.length; i++) {
            blueSoldiers[i].move();
            blueSoldiers[i].show();
        }
    };

    class Soldier {
        constructor(x, y, w, colour, direction, p5) {
            (this.x = x),
                (this.y = y),
                (this.w = w),
                (this.colour = colour),
                (this.direction = direction),
                (this.p5 = p5);
        }

        move() {
            if ((this.direction = 'right')) {
                this.x = this.x + Math.floor(Math.random() * 6) + 1;
            } else {
                this.x = this.x - Math.floor(Math.random() * 6) + 1;
            }
        }

        show() {
            this.p5.stroke(this.colour);
            this.p5.strokeWeight(4);
            this.p5.fill(this.colour);
            this.p5.ellipse(this.x, this.y, this.w);
        }
    }

    return <Sketch preload={preload} setup={setup} draw={draw} />;
};

createRoot(document.getElementById('root')).render(<App />);

// let team1 = [];
// let team2 = [];
// let playersPerTeam = 15
// let radius = 5;
// let white = {r:225, g:225, b:225}
// let grey = {r:128, g:128, b:128}

// function setup() {
//   createCanvas(700, 600);
//   background(0)
//   // Team 1
//   for (let i = 0; i < playersPerTeam; i++) {
//       let x = 0;
//       let y = i * 15 + 5;
//       let team1member = new Player(x, y, radius, grey, 'right');
//       team1.push(team1member);
//   }

//   // Team 2
//   for (let i = 0; i < playersPerTeam; i++) {
//       let x = 700;
//       let y = i * 15 + 5;
//       let team2member = new Player(x, y, radius, white, 'left');
//       team2.push(team2member);
//   }
// }

// function draw() {

//   // Red Players
//   for (let i = 0; i < team1.length; i++) {
//       team1[i].move();
//       team1[i].show();
//   }

//   // Blue Players
//   for (let i = 0; i < team2.length; i++) {
//       team2[i].move();
//       team2[i].show();
//   }

//   for (let i = 0; i < playersPerTeam; i++) {
//     let d = dist(team1[i].x, team1[i].y, team2[i].x, team2[i].y)
//     if (d < team1[i].radius + team2[i].radius) {
//       let randBool = Math.random() < 0.5;
//       // randBool ? team1[i].colour = white : team2[i].colour = grey;

//       // If true, team 1 wins, if false, team2 wins
//        randBool ? team1[i] = new Player(team1[i].x, team1[i].y, team1[i].radius, grey, 'right') : team1[i] = new Player(team1[i].x, team1[i].y, team1[i].radius, white, 'right');
//       randBool ? team2[i] = new Player(team2[i].x, team2[i].y, team2[i].radius, grey, 'left') : team2[i] = new Player(team2[i].x, team2[i].y, team2[i].radius, white, 'left');

//     }
//   }
// }

// class Player {
//   constructor(x, y, radius, colour, direction, xConstraint) {
//       this.x = x,
//       this.y = y,
//       this.radius = radius,
//       this.colour = colour,
//       this.direction = direction
//   }

//   move() {
//       if (this.direction === 'right') {
//           this.x = this.x + Math.floor(Math.random() * 4);
//       } else if (this.direction === 'left') {
//           this.x = this.x - Math.floor(Math.random() * 4);
//       } else {
//         this.x = this.x;
//       }
//   }

//   show() {
//       // strokeWeight(6);
//       stroke(this.colour.r, this.colour.g, this.colour.b);
//       fill(this.colour.r, this.colour.g, this.colour.b);
//       ellipse(this.x, this.y, this.radius * 2);
//   }
// }
