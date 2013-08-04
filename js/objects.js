function GameObj(x, y, dir) {
    this.group = "none";
    this.penetrable = false; // all objects are impenetrable by default
    this.dir = dir;
    this.shape = new Kinetic.Rect({
        x: x,
        y: y,
        width: 0,
        height: 0
    });
    this.updateBoundingShape();
}

GameObj.prototype.updateBoundingShape = function() { // bounding shape is rectangular by default
    var margin = 1;
    var x = this.shape.getX();
    var y = this.shape.getY();
    var w = this.shape.getWidth();
    var h = this.shape.getHeight();
    this.boundingShape = {
        "type": "box",
        "coords": [[x+margin,y+margin],[x+w-margin,y+margin],[x+w-margin,y+h-margin],[x+margin,y+h-margin]]
    }
}

GameObj.prototype.isCollide = function(obj) {
    // now only box-box supported
    if (this.boundingShape.type == "box" && obj.boundingShape.type == "box") {
        return boxesOverlap(this.boundingShape.coords, obj.boundingShape.coords);
    }
    return false;
}

GameObj.prototype.moveTo = function(x, y) {
    this.shape.setX(x);
    this.shape.setY(y);
    this.updateBoundingShape();
}

GameObj.prototype.reset = function() {
    // nothing to do by default, just to avoid error
}

GameObj.prototype.rotateOnClick = function() { // function to be executed when the object is clicked
    this.dir -= Math.PI/2;
    this.shape.setFillPatternRotation(this.dir);
}

GameObj.prototype.postProcess = function() { // post process is to be executed in each frame, e.g. count down timer to toggle magnetic field in alt-mag-field
    // default, do nothing here
}

GameObj.prototype.on = function(evtStr, handler) { // event handler for object, if obj.shape.on do not work properly
    var thisObj = this;
    this.shape.on(evtStr, function(e) {
        handler.call(thisObj, e);
    });
}

// only executed if elements are fixed on a map
GameObj.prototype.addEnergyBar = function() {
    var x = this.shape.getX();
    var y = this.shape.getY();
    var w = this.shape.getWidth();
    var h = this.shape.getHeight();
    
    this.energyBar = new EnergyBar(x, y, w, h, this.dir);
}

GameObj.prototype.addToLayer = function(layer) {
    layer.add(this.shape);
    if (typeof this.energyBar !== "undefined")
        this.energyBar.addToLayer(layer);
}




function EnergyBar(x, y, w, h, dir) {
    var thick = 5;
    var padding = 1;
    
    var xb = x + w/2;
    var yb = y + h/2;
    var wb = w;
    var hb = thick;
    var offsetb = [w/2, thick + padding + h/2];
    this.dir = dir;
    
    this.outline = new Kinetic.Rect({
        x: xb,
        y: yb,
        width: wb,
        height: hb,
        offset: offsetb,
        strokeWidth: 1,
        stroke: "#0c6100"
    });
    this.outlineTarget = new Kinetic.Rect({
        x: xb,
        y: yb,
        width: wb,
        height: hb,
        offset: offsetb,
        strokeWidth: 0,
        stroke: "white",
        fill: "white"
    });
    this.shape = new Kinetic.Rect({
        x: xb,
        y: yb,
        width: wb,
        height: hb,
        offset: offsetb,
        strokeWidth: 0,
        fillPatternImage: imagesLoader.EnergyBar
    });
    this.outlineTarget.setRotation(dir);
    this.outline.setRotation(dir);
    this.shape.setRotation(dir);
    
    this.dir = dir;
    this.maxWidth = w;
    this.min = 0;
    this.max = 10;
    this.val = this.max / 2;
}

EnergyBar.prototype.setEnergyBarMax = function(energyMax) {
    this.max = energyMax * 1;
}

EnergyBar.prototype.setEnergyBarVal = function(energy) {
    var portion = (energy - this.min) / (this.max - this.min);
    portion = (portion > 1) ? 1 : portion;
    var w = this.maxWidth * portion;
    this.shape.setWidth(w);
}

EnergyBar.prototype.setEnergyBarTarget = function(energy) {
    var portion = (energy - this.min) / (this.max - this.min);
    portion = (portion > 1) ? 1 : portion;
    var w = this.maxWidth * portion;
    this.outlineTarget.setWidth(w);
}

EnergyBar.prototype.addToLayer = function(layer) {
    layer.add(this.outlineTarget);
    layer.add(this.outline);
    layer.add(this.shape);
}





Source.prototype = new GameObj();
Source.prototype.constructor = Source;
function Source(x, y, dir) {
    GameObj.call(this, x, y, dir);
    this.group = "source";
    this.penetrable = true;
    
    var width = 42;
    var height = 42;
    
    this.type = "source";
    
    this.shape = new Kinetic.Rect({
        x: x,
        y: y,
        width: width,
        height: height,
        strokeWidth: 1
    });
    
    this.shape.setFillPatternRotation(this.dir);
    this.updateBoundingShape();
    
    this.energy = 0;
    this.canEmit = 1;
}

    Source.prototype.canEmitParticle = function() {
        return this.canEmit;
    }

    Source.prototype.emitParticle = function() {
        // initial condition of the particle
        var x = this.shape.getX();
        var y = this.shape.getY();
        var w = this.shape.getWidth();
        var h = this.shape.getHeight();
        var dir = this.dir;
        
        // warning!!! these equations are only valid if dir is multiple of PI/2
        var xp = x + w/2 * (1 + Math.cos(dir));
        var yp = y + h/2 * (1 + Math.sin(dir));
        
        // create the particle object
        var constructor = getConstructorFromType(this.particleType);
        var particleObj = new constructor(xp, yp, dir);
        
        // adjust the position of the particle
        var wp = particleObj.shape.getWidth();
        var hp = particleObj.shape.getHeight();
        particleObj.moveTo(xp-wp/2, yp-hp/2);
        
        // set velocity of the particle
        particleObj.setEnergy(this.energy);
        particleObj.setVelocityRad(this.dir);
        
        return particleObj;
    }
    
    Source.prototype.reset = function() {
        this.canEmit = 1;
    }


SingleSourceObj.prototype = new Source();
SingleSourceObj.prototype.constructor = SingleSourceObj;
function SingleSourceObj(x, y, dir) {
    Source.call(this, x, y, dir);
    this.type = "single-source";
    this.shape.setFill("red");
    this.shape.setStroke("blue");
    this.energy = 2000;
    this.particleType = "proton";
}

    SingleSourceObj.prototype.emitParticle = function() {
        var particleObj = Source.prototype.emitParticle.call(this);
        this.canEmit = 0;
        return particleObj;
    }

BurstSourceObj.prototype = new Source();
BurstSourceObj.prototype.constructor = BurstSourceObj;
function BurstSourceObj(x, y, dir) {
    Source.call(this, x, y, dir);
    this.type = "burst-source";
    this.shape.setFill("blue");
    this.shape.setStroke("yellow");
    this.energy = 2000;
    
    this.emitCountDownVal = C.frameInterval;
    this.emitCountDown = this.emitCountDownVal;
    this.particleType = "proton";
}

    BurstSourceObj.prototype.emitParticle = function() {
        var particleObj = Source.prototype.emitParticle.call(this);
        this.canEmit = 0;
        var thisObj = this;
        this.emitCountDown = this.emitCountDownVal;
        return particleObj;
    }
    
    BurstSourceObj.prototype.postProcess = function() {
        if (!this.canEmit) this.emitCountDown -= 1;
        if (this.emitCountDown == 0) this.canEmit = 1;
    }

MuonSourceObj.prototype = new BurstSourceObj();
MuonSourceObj.prototype.constructor = MuonSourceObj;
function MuonSourceObj(x, y, dir) {
    Source.call(this, x, y, dir);
    this.type = "muon-source";
    this.energy = 2000;
    
    // styling 
    this.shape.setFillPatternImage(imagesLoader.MuonSrc);
    this.shape.setStroke("transparent");
    
    this.particleType = "muon";
}

ElectronSourceObj.prototype = new BurstSourceObj();
ElectronSourceObj.prototype.constructor = ElectronSourceObj;
function ElectronSourceObj(x, y, dir) {
    Source.call(this, x, y, dir);
    this.type = "electron-source";
    this.energy = 2000;
    
    // styling 
    this.shape.setFillPatternImage(imagesLoader.ElectronSrc);
    this.shape.setStroke("transparent");
    
    this.particleType = "electron";
}

ProtonSourceObj.prototype = new BurstSourceObj();
ProtonSourceObj.prototype.constructor = ProtonSourceObj;
function ProtonSourceObj(x, y, dir) {
    Source.call(this, x, y, dir);
    this.type = "proton-source";
    this.energy = 2000;
    
    // styling 
    this.shape.setFillPatternImage(imagesLoader.ProtonSrc);
    this.shape.setStroke("transparent");
    
    this.particleType = "proton";
}





Target.prototype = new GameObj();
Target.prototype.constructor = Target;
function Target(x, y, dir) {
    GameObj.call(this, x, y, dir);
    this.group = "target";
    this.penetrable = true; // all target are penetrable by default
    this.finish = false;
    
    var width = 42;
    var height = 42;
    
    this.type = "target";
    
    this.shape = new Kinetic.Rect({
        x: x,
        y: y,
        width: width,
        height: height,
        strokeWidth: 1
    });
    
    this.updateBoundingShape();
    this.shape.setFillPatternRotation(this.dir);
    
    // default energy to get the goal
    this.energy = 3000;
    this.particleType = "all";
}

    Target.prototype.checkParticle = function(particle) {
        if ((particle.type != this.particleType) && (particle.type == "photon")) return false;
        return ((particle.type == this.particleType) || (this.particleType == "all"));
    }
    
    Target.prototype.checkGoal = function(particle) {
        return ((particle.getEnergy() >= this.energy) && this.checkParticle(particle));
    }
    
    Target.prototype.goal = function() {
        this.finish = true;
    }
    
    Target.prototype.reset = function() {
        this.finish = false;
    }
    
    Target.prototype.showParticleEnergy = function(energy) {
        console.log(energy);
        if (this.energyBar) this.energyBar.setEnergyBarVal(energy);
    }

FixedTargetObj.prototype = new Target();
FixedTargetObj.prototype.constructor = FixedTargetObj;
function FixedTargetObj(x, y, dir) {
    Target.call(this, x, y, dir);
    this.type = "fixed-target";
    this.shape.setFillPatternImage(imagesLoader.FixedTarget);
    this.shape.setStroke("transparent");
    this.energy = 1500; // by default, it is same with source energy
}

MedImageTargetObj.prototype = new FixedTargetObj();
MedImageTargetObj.prototype.constructor = MedImageTargetObj;
function MedImageTargetObj(x, y, dir) {
    FixedTargetObj.call(this, x, y, dir);
    this.type = "med-image-target";
    this.particleType = "proton";
    this.shape.setFillPatternImage(imagesLoader.MedImageTarget);
    this.energy = 5000;
}

CancerTargetObj.prototype = new FixedTargetObj();
CancerTargetObj.prototype.constructor = CancerTargetObj;
function CancerTargetObj(x, y, dir) {
    FixedTargetObj.call(this, x, y, dir);
    this.type = "cancer-target";
    this.particleType = "proton";
    this.shape.setFillPatternImage(imagesLoader.CancerTarget);
    this.energy = 9000;
}

CollisionTargetObj.prototype = new Target();
CollisionTargetObj.prototype.constructor = CollisionTargetObj;
function CollisionTargetObj(x, y, dir) {
    Target.call(this, x, y, dir);
    this.type = "collision-target";
    this.particleType = "proton";
    this.shape.setFillPatternImage(imagesLoader.CollisionTarget);
    this.shape.setStroke("transparent");
    this.energy = 5000;
}

    CollisionTargetObj.prototype.checkGoal = function(p0, p1) {
        // see more about CM energy // ???
        var normalizeAngle = function(t) {
            while(t > Math.PI*2) t -= Math.PI*2;
            while(t < 0) t += Math.PI*2;
            return t;
        }
        
        var dtheta = Math.PI/12;
        var theta0 = normalizeAngle(Math.atan2(p0.vy, p0.vx) - this.dir);
        var theta1 = normalizeAngle(Math.atan2(p1.vy, p1.vx) - this.dir);
        var theta2 = normalizeAngle(theta0 - theta1);
        
        if ((theta2 < Math.PI - dtheta) || (theta2 > Math.PI + dtheta)) return false;
        
        // if execute until here, it means that p1 and p0 are nearly head-on collision
        // check either theta0 or theta1 has angle between (PI-dt < theta < PI+dt)
        if (!(((theta0 < Math.PI + dtheta) && (theta0 > Math.PI - dtheta)) ||
              ((theta1 < Math.PI + dtheta) && (theta1 > Math.PI - dtheta)))) return false;
        
        return getCMEnergy([p0,p1]) > this.energy;
    }

FurnitureTargetObj.prototype = new FixedTargetObj();
FurnitureTargetObj.prototype.constructor = FurnitureTargetObj;
function FurnitureTargetObj(x, y, dir) {
    FixedTargetObj.call(this, x, y, dir);
    this.type = "furniture-target";
    this.particleType = "electron";
    this.shape.setFillPatternImage(imagesLoader.FurnitureTarget);
    this.energy = 9000;
}

FoodTargetObj.prototype = new FixedTargetObj();
FoodTargetObj.prototype.constructor = FoodTargetObj;
function FoodTargetObj(x, y, dir) {
    FixedTargetObj.call(this, x, y, dir);
    this.type = "food-target";
    this.particleType = "electron";
    this.shape.setFillPatternImage(imagesLoader.FoodTarget);
    this.energy = 5000;
}

CargoTargetObj.prototype = new FixedTargetObj();
CargoTargetObj.prototype.constructor = CargoTargetObj;
function CargoTargetObj(x, y, dir) {
    FixedTargetObj.call(this, x, y, dir);
    this.type = "cargo-target";
    this.particleType = "xray-photon";
    this.shape.setFillPatternImage(imagesLoader.CargoTarget);
}




Path.prototype = new GameObj();
Path.prototype.constructor = Path;
function Path(x, y, dir) {
    GameObj.call(this, x, y, dir);
    this.dir = dir;
    this.group = "path";
    this.penetrable = true; // most of the path are penetrable
    
    var width = 42;
    var height = 42;
    
    this.type = "path";
    this.shape = new Kinetic.Rect({
        x: x,
        y: y,
        width: width,
        height: height,
        strokeWidth: 1
    });
    
    this.updateBoundingShape();
}


BlockObj.prototype = new Path();
BlockObj.prototype.constructor = BlockObj;
function BlockObj(x, y, dir) {
    Path.call(this, x, y, dir);
    this.penetrable = false; // blocking object is not penetrable
    this.type = "block";
    
    // styling
    this.img = imagesLoader.Block;
    this.shape.setFillPatternImage(this.img);
    this.shape.setFillPatternRotation(this.dir);
    this.shape.setStroke("transparent");
}

MagFieldObj.prototype = new Path();
MagFieldObj.prototype.constructor = MagFieldObj;
function MagFieldObj(x, y, dir) {
    Path.call(this, x, y, dir);
    this.type = "mag-field";
    this.shape.setFill("blue");
    this.shape.setStroke("transparent");
    
    this.Bz = 1;
}

StrongMagFieldObj.prototype = new Path();
StrongMagFieldObj.prototype.constructor = StrongMagFieldObj;
function StrongMagFieldObj(x, y, dir) {
    Path.call(this, x, y, dir);
    this.type = "strong-mag-field";
    
    // styling
    this.imgs = [imagesLoader.Bin, imagesLoader.Bout];
    this.imgPointer = (this.dir >= 0) ? 0 : 1;
    this.shape.setFillPatternImage(this.imgs[this.imgPointer]);
    this.shape.setStroke("transparent");
    
    var BDir = (this.dir >= 0) ? 1 : -1;
    this.Bz = BDir * 2.45;
}

AltMagFieldObj.prototype = new Path();
AltMagFieldObj.prototype.constructor = AltMagFieldObj;
function AltMagFieldObj(x, y, dir) {
    Path.call(this, x, y, dir);
    this.type = "alt-mag-field";
    
    // styling
    this.imgs = [imagesLoader.BAltIn, imagesLoader.BAltInOff, imagesLoader.BAltOut, imagesLoader.BAltOutOff];
    this.imgPointer = (this.dir >= 0) ? 0 : 2;
    this.shape.setFillPatternImage(this.imgs[this.imgPointer]);
    this.shape.setStroke("transparent");
    
    var BDir = (this.dir >= 0) ? 1 : -1;
    this.Bz = BDir * 2.45;
    
    this.active = 1;
    this.timerInit = C.frameInterval;
    this.timer = this.timerInit;
}

    AltMagFieldObj.prototype.postProcess = function() {
        this.timer -= 1;
        if (this.timer == 0) {
            this.timer = this.timerInit;
            this.active = 1 - this.active;
            
            // change appearance
            this.imgPointer ^= 1; // 0 <-> 1 and 2 <-> 3 (on <-> off)
            this.shape.setFillPatternImage(this.imgs[this.imgPointer]);
        }
    }
    
    AltMagFieldObj.prototype.magFieldIsActive = function() {
        return this.active;
    }

    AltMagFieldObj.prototype.reset = function() {
        this.active = 1;
        this.imgPointer &= 2; //  0 -> 0, 1 -> 0, 2 -> 2, 3 -> 2 (*** -> on)
        this.shape.setFillPatternImage(this.imgs[this.imgPointer]);
        this.timer = this.timerInit;
    }
    
    MagFieldObj.prototype.rotateOnClick = function() {
        this.Bz *= -1;
    }
    StrongMagFieldObj.prototype.rotateOnClick = function() {
        this.Bz *= -1;
        
        // change appearance
        this.imgPointer = 1-this.imgPointer;
        this.shape.setFillPatternImage(this.imgs[this.imgPointer]);
    }
    AltMagFieldObj.prototype.rotateOnClick = function() {
        this.Bz *= -1;
        
        // change appearance
        this.imgPointer ^= 2; // 0 <-> 2 and 1 <-> 3 (in <-> out)
        this.shape.setFillPatternImage(this.imgs[this.imgPointer]);
    }
    
ElecFieldObj.prototype = new Path();
ElecFieldObj.prototype.constructor = ElecFieldObj;
function ElecFieldObj(x, y, dir) {
    Path.call(this, x, y, dir);
    this.E = 100;
    this.type = "elec-field";
    
    // styling
    this.img = imagesLoader.E;
    this.shape.setFillPatternImage(this.img);
    this.shape.setFillPatternRotation(this.dir);
    this.shape.setStroke("transparent");
}

XRaySrcObj.prototype = new Path();
XRaySrcObj.prototype.constructor = XRaySrcObj;
function XRaySrcObj(x, y, dir) {
    Path.call(this, x, y, dir);
    this.type = "xray";
    this.penetrable = false;
    
    this.energyMin = 3000;
    
    // styling
    this.img = imagesLoader.XRay;
    this.shape.setFillPatternImage(this.img);
    this.shape.setStroke("transparent");
}

    XRaySrcObj.prototype.canProduceXRay = function(p) { // when a particle collide it
        if (p.getEnergy() < this.energyMin) return false;
        if (p.type != "electron") return false;
        
        // check its direction
        var theta = Math.atan2(p.vy, p.vx) - this.dir;
        while (theta > 2*Math.PI) theta -= 2*Math.PI;
        while (theta < 0) theta += 2*Math.PI;
        var dtheta = Math.PI/6; // 30 deg
        if ((theta > Math.PI + dtheta) || (theta < Math.PI - dtheta)) return false;
        
        return true;
    }
    
    XRaySrcObj.prototype.produceXRay = function(p) {
        // initial condition of the particle
        var x = p.shape.getX();// + p.shape.getWidth();
        var y = p.shape.getY();// + p.shape.getHeight();
        
        var dtheta = Math.PI/6;
        var dir = this.dir + Math.PI/2;
        dir += Math.random() * dtheta - dtheta/2;
        
        // create the particle object
        var constructor = getConstructorFromType("xray-photon");
        var particleObj = new constructor(x, y, dir);
        
        // set velocity of the particle
        var energyFactor = Math.random() * 0.3 + 0.5; // from 0.5 to 0.8
        particleObj.setEnergy(p.getEnergy() * energyFactor);
        particleObj.setVelocityRad(dir);
        
        return [particleObj];
    }





Particle.prototype = new GameObj();
Particle.prototype.constructor = Particle;
function Particle(x, y, dir) {
    GameObj.call(this, x, y, dir);
    this.group = "particle";
    this.width = 10;
    this.height = 10;
    // var r = 10;
    
    this.type = "particle";
    this.shape = new Kinetic.Rect({
        x: x,
        y: y,
        width: this.width,
        height: this.height,
        strokeWidth: 0
    });
    // this.shape = new Kinetic.Circle({
        // x: x,
        // y: y,
        // radius: r,
        // strokeWidth: 1
    // });
    this.updateBoundingShape();
    
    this.m = 1; // in eV/c^2
    this.vx = 0;
    this.vy = 0;
    this.q = 1; // in fundamental charge unit
    
    this.exist = 1;
    this.lifetime = Infinity;
}

    Particle.prototype.updateBoundingShape = function() {
        var x = this.shape.getX();
        var y = this.shape.getY();
        var r = this.shape.getWidth()/2;
        
        var scale = Math.sqrt(Math.PI/4); // to get the same area between the circle and the bounding box of particle
        var d1 = r*scale - r;
        var d2 = r*scale + r;
        // var d1 = r*scale;
        // var d2 = d1;
        
        this.boundingShape = {
            "type": "box",
            "coords": [[x-d1,y-d1],[x+d2,y-d1],[x+d2,y+d2],[x-d1,y+d2]]
        }
    }

    Particle.prototype.move = function() {
        var dx = this.vx * C.dt;
        var dy = this.vy * C.dt;
        this.moveTo(this.shape.getX() + dx, this.shape.getY() + dy);
    }

    Particle.prototype.getVelocityRad = function() {
        return Math.atan2(this.vy, this.vx);
    }
    
    Particle.prototype.setVelocityRad = function(rad) {
        // get its velocity
        var v = Math.sqrt(this.vx*this.vx + this.vy*this.vy);
        this.vx = v * Math.cos(rad);
        this.vy = v * Math.sin(rad);
    }

    Particle.prototype.accelerate = function(ax, ay) {
        this.vx += ax * C.dt;
        this.vy += ay * C.dt;
    }

    Particle.prototype.doLorentzForce = function(Bz) {
        var omega = -this.q * Bz / this.m;
        var dtheta = omega * C.dt;
        this.setVelocityRad(this.getVelocityRad() + dtheta);
    }

    Particle.prototype.doElectricForce = function(E, dir) {
        var qOverM = this.q/this.m;
        var Ex = E * Math.cos(dir);
        var Ey = E * Math.sin(dir);
        this.accelerate(qOverM*Ex, qOverM*Ey);
    }
    
    Particle.prototype.getEnergy = function() {
        return 0.5 * this.m * (this.vx * this.vx + this.vy * this.vy);// / C.e;
    }

    Particle.prototype.setEnergy = function(energy) { // energy in eV
        // get the direction of the particle
        var rad = 0;
        if (this.vx == 0 && this.vy == 0) rad = 0;
        else rad = Math.atan2(this.vy, this.vx);
        
        var v = Math.sqrt(2*energy / this.m);
        this.vx = v * Math.cos(rad);
        this.vy = v * Math.sin(rad);
    }

    Particle.prototype.postProcess = function() {
        // in future, please consider relativistic effect!
        this.lifetime -= 1;
    }
    
    // decay of a particle usually emits some new particles, this function create new particles and return them
    Particle.prototype.decayParticles = function() {
        // initial condition of the particle
        var x = this.shape.getX();
        var y = this.shape.getY();
        var dir = this.dir; //Math.random() * 2 * Math.PI;
        
        // create the particle object
        var constructor = getConstructorFromType("photon");
        var particleObj = new constructor(x, y, dir);
        
        // set velocity of the particle
        particleObj.setEnergy(this.getEnergy());
        particleObj.setVelocityRad(dir);
        
        return [particleObj];
    }
    
    // collision between 2 particles usually emits some new particles, this function create the new particles and return them
    Particle.prototype.collisionParticles = function(p1) {
        // still handle two particles collision with the same type of particle
        var particles = [];
        var dir;
        for (var i = 0; i < 2; i++) {
            // initial condition of the particle
            var x = this.shape.getX();
            var y = this.shape.getY();
            
            // get the opposite direction of the resulted particles
            if (i == 0) dir = Math.random() * 2 * Math.PI;
            else dir = Math.PI + dir;
            
            // create the particle object
            var constructor = getConstructorFromType("photon");
            var particleObj = new constructor(x, y, dir);
            
            // set velocity of the particle
            particleObj.setEnergy(this.getEnergy());
            particleObj.setVelocityRad(dir);
            
            particles.push(particleObj);
        }
        return particles;
    }

MuonObj.prototype = new Particle();
MuonObj.prototype.constructor = MuonObj;
function MuonObj(x, y, dir) {
    Particle.call(this, x, y, dir);
    this.type = "muon";
    this.shape.setFillPatternImage(imagesLoader.Muon);
    this.lifetime = Infinity;
}

ProtonObj.prototype = new Particle();
ProtonObj.prototype.constructor = ProtonObj;
function ProtonObj(x, y, dir) {
    Particle.call(this, x, y, dir);
    this.type = "proton";
    this.shape.setFillPatternImage(imagesLoader.Proton);
}

ElectronObj.prototype = new Particle();
ElectronObj.prototype.constructor = ElectronObj;
function ElectronObj(x, y, dir) {
    Particle.call(this, x, y, dir);
    this.type = "electron";
    this.q = -1;
    this.shape.setFillPatternImage(imagesLoader.Electron);
}

PositronObj.prototype = new Particle();
PositronObj.prototype.constructor = PositronObj;
function PositronObj(x, y, dir) {
    Particle.call(this, x, y, dir);
    this.type = "positron";
    this.shape.setFill("yellow");
    this.shape.setStroke("black");
}

PhotonObj.prototype = new Particle();
PhotonObj.prototype.constructor = PhotonObj;
function PhotonObj(x, y, dir) {
    Particle.call(this, x, y, dir);
    this.type = "photon";
    this.penetrable = true;
    this.q = 0;
    this.m = 0.1;
    this.energy = 0;
    this.vx = 150;
    this.vy = 0;
    
    // this.shape.setRadius(2);
    this.shape.setFillPatternImage(imagesLoader.Photon);
}

    PhotonObj.prototype.updateBoundingShape = function() {
        var x = this.shape.getX();
        var y = this.shape.getY();
        var r = 1.5;
        
        var scale = Math.sqrt(Math.PI/4); // to get the same area between the circle and the bounding box of particle
        var d1 = r*scale - r;
        var d2 = r*scale + r;
        
        this.boundingShape = {
            "type": "box",
            "coords": [[x-d1,y-d1],[x+d2,y-d1],[x+d2,y+d2],[x-d1,y+d2]]
        }
    }
    
    PhotonObj.prototype.getEnergy = function() {
        return this.energy;
    }

    PhotonObj.prototype.setEnergy = function(energy) {
        this.energy = energy;
    }

XRayPhotonObj.prototype = new PhotonObj();
XRayPhotonObj.prototype.constructor = XRayPhotonObj;
function XRayPhotonObj(x, y, dir) {
    PhotonObj.call(this, x, y, dir);
    this.type = "xray-photon";
}


function getConstructorFromType(type) {
    // sources
    // if (type == "single-source") return SingleSourceObj;
    // else if (type == "burst-source") return BurstSourceObj;
    // else
    if (type == "proton-source") return ProtonSourceObj;
    else if (type == "electron-source") return ElectronSourceObj;
    else if (type == "muon-source") return MuonSourceObj;
    
    // targets
    else if (type == "fixed-target") return FixedTargetObj;
    else if (type == "med-image-target") return MedImageTargetObj;
    else if (type == "cancer-target") return CancerTargetObj;
    else if (type == "collision-target") return CollisionTargetObj;
    else if (type == "furniture-target") return FurnitureTargetObj;
    else if (type == "food-target") return FoodTargetObj;
    else if (type == "cargo-target") return CargoTargetObj;
    
    // paths
    else if (type == "block") return BlockObj;
    else if (type == "mag-field") return MagFieldObj;
    else if (type == "strong-mag-field") return StrongMagFieldObj;
    else if (type == "alt-mag-field") return AltMagFieldObj;
    else if (type == "elec-field") return ElecFieldObj;
    else if (type == "xray") return XRaySrcObj;
    
    // particles
    else if (type == "muon") return MuonObj;
    else if (type == "proton") return ProtonObj;
    else if (type == "electron") return ElectronObj;
    else if (type == "positron") return PositronObj;
    else if (type == "photon") return PhotonObj;
    else if (type == "xray-photon") return XRayPhotonObj;
    return;
}
