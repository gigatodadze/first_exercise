var shape = {
    type : "",
    getType : function() {
        return this.type;
    }
}

function Triangle(a,b,c){

    this.a = a;
    this.b = b;
    this.c = c;
}



// Triangle.prototype = shape; 

Object.assign(Triangle.prototype,shape);

Triangle.prototype.getPerimeter = function () {
    return this.a+this.b+this.c;
}

let t = new Triangle(3,4,5); 

t.constructor = Triangle

console.log(t);

// t.prototype = new shape('triangle');
t.type='triangle';
console.log(t.getPerimeter())
console.log(t.getType());
console.log(t.type);


for(var propName in t) {
    if(t.hasOwnProperty(propName))
    document.write(propName)
}
document.write("<br>")

// document.write(Object.getOwnPropertyNames(t))





 

