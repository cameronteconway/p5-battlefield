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

// let redSoldiers = [];
// let blueSoldiers = [];
// let soldierAmount = 15

// function setup() {
//   createCanvas(700, 600);
//   // Red Soldiers
//   for (let i = 0; i < soldierAmount; i++) {
//       let x = 0;
//       let y = i * 10;
//       let redSoldier = new Soldier(x, y, 5, 'red', 'right');
//       redSoldiers.push(redSoldier);
//   }

//   // Blue Soliders
//   for (let i = 0; i < soldierAmount; i++) {
//       let x = 700;
//       let y = i * 10;
//       let blueSoldier = new Soldier(x, y, 5, 'blue', 'left');
//       blueSoldiers.push(blueSoldier);
//   }
// }

// function draw() {
//   // Red Soldiers
//   for (let i = 0; i < redSoldiers.length; i++) {
//       redSoldiers[i].move();
//       redSoldiers[i].show();
//   }

//   // Blue Soldiers
//   for (let i = 0; i < blueSoldiers.length; i++) {
//       blueSoldiers[i].move();
//       blueSoldiers[i].show();
//   }
// }

// class Soldier {
//   constructor(x, y, w, colour, direction, xConstraint) {
//       this.x = x,
//       this.y = y,
//       this.w = w,
//       this.colour = colour,
//       this.direction = direction
//   }

//   move() {
//       if (this.direction === 'right') {
//           this.x = this.x + Math.floor(Math.random() * 3);
//       } else {
//           this.x = this.x - Math.floor(Math.random() * 3);
//       }
//   }

//   show() {
//       this.colour == 'red' ? stroke(0, 0, 255) : stroke(255, 0, 0);
//       this.colour == 'red' ? fill(0, 0, 255) : fill(255, 0, 0);
//       ellipse(this.x, this.y, this.w);
//   }
// }
