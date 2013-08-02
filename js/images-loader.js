function Images() {
    // the objects
    this.E = new Image();
    this.Bin = new Image();
    this.Bout = new Image();
    this.BAltIn = new Image();
    this.BAltInOff = new Image();
    this.BAltOut = new Image();
    this.BAltOutOff = new Image();
    this.Block = new Image();
    this.XRay = new Image();
    
    this.ElectronSrc = new Image();
    this.MuonSrc = new Image();
    this.ProtonSrc = new Image();
    
    this.FixedTarget = new Image();
    this.MedImageTarget = new Image();
    this.CancerTarget = new Image();
    this.CollisionTarget = new Image();
    this.FurnitureTarget = new Image();
    this.FoodTarget = new Image();
    this.CargoTarget = new Image();
    
    this.Electron = new Image();
    this.Proton = new Image();
    this.Muon = new Image();
    this.Photon = new Image();
    
    this.EnergyBar = new Image();
    
    // load all images from their sources
    this.dir = "img/";
    this.E.src = this.dir + "paths/E3.png";
    this.Bin.src = this.dir + "paths/B3-in.png";
    this.Bout.src = this.dir + "paths/B3-out.png";
    this.BAltIn.src = this.dir + "paths/B3-alt-in.png";
    this.BAltInOff.src = this.dir + "paths/B3-alt-in-off.png";
    this.BAltOut.src = this.dir + "paths/B3-alt-out.png";
    this.BAltOutOff.src = this.dir + "paths/B3-alt-out-off.png";
    this.Block.src = this.dir + "paths/block.png";
    this.XRay.src = this.dir + "paths/x-ray.png";
    
    this.FixedTarget.src = this.dir + "targets/fixed-target.png";
    this.MedImageTarget.src = this.dir + "targets/medical-imaging-target.png";
    this.CancerTarget.src = this.dir + "targets/cancer.png";
    this.CollisionTarget.src = this.dir + "targets/detector.png";
    this.FurnitureTarget.src = this.dir + "targets/furniture.png";
    this.FoodTarget.src = this.dir + "targets/food-packaging.png";
    this.CargoTarget.src = this.dir + "targets/cargo.png";
    
    this.ElectronSrc.src = this.dir + "srcs/electron-source3.png";
    this.ProtonSrc.src = this.dir + "srcs/proton-source3.png";
    this.MuonSrc.src = this.dir + "srcs/muon-src.png";
    
    this.Electron.src = this.dir + "particles/electron.png";
    this.Proton.src = this.dir + "particles/proton.png";
    this.Muon.src = this.dir + "particles/muon.png";
    this.Photon.src = this.dir + "particles/photon.png";
    
    this.EnergyBar.src = this.dir + "misc/energy-bar.png";
}

var imagesLoader = new Images();
