class Mech{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = 0.01;
        this.obj = mechTemplate.cloneNode(true);
        this.obj.setAttribute("position",{x:this.x, y:this.y, z: this.z});
        this.obj.addEventListener("click", ()=> {
            this.launch = true;
        })

        scene.append(this.obj);
    }

    rise(){
        if(this.launch){
            this.y += this.dy;
            this.obj.setAttribute("position",{x:this.x, y:this.y, z: this.z});
        }
    }
}