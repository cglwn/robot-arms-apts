import numeric from 'numeric';

import NormalDistribution from './NormalDistribution.js';

class Robot {
    constructor(x, y, theta) {
        this.x = x;
        this.y = y;
        this.theta = theta;
        this.noiseDist = new NormalDistribution([[0], [0]], [[2, 0], [0, 2]]);
    }
    move(posSpeed, angularSpeed) {
        var noise = this.noiseDist.sample();
        var vNoise = noise[0][0];
        var aNoise = noise[1][0];
        this.x = this.x + dt * (posSpeed + vNoise) * Math.cos(this.theta + aNoise);
        this.y = this.y + dt * (posSpeed + vNoise) * Math.sin(this.theta + aNoise);
        this.theta = this.theta + dt * angularSpeed + aNoise;
    }
    getPos() {
        return [this.x, this.y, this.theta];
    }
}

var dt = 1;
var x0 = 0;
var v = 1;
var w = 0.1;

var n = 1000;

var endLocations = [];
for (var i = 0; i < n; i++) {
    var robot = new Robot(0, 0, 0);
    robot.move(10, 0.1);
    endLocations.push(robot.getPos());
}

export {
    endLocations
};
