
var first = Number (prompt('first ax^2 + bx +c = 0'));
var second = Number (prompt('second ax^2 + bx +c = 0'));
var third = Number (prompt('third ax^2 + bx +c = 0'));
var disk = form(first, second, third);
function form(a, b, c) {
    return b * b - 4 * a * c; 
}

function diskreminant(disk) {
    if (disk > 0)
    {
        return Math.sqrt(disk);
    }   else {
            return 'корень з дискримінанту не існує';
        }
    }
var result = diskreminant(disk);
function x1 (a, b ,disk) {
    var x1 = - b - Math.sqrt(disk) / (2 * a);
}
function x2 (a, b ,disk) {
    var x2 = - b + Math.sqrt(disk) / (2 * a);
}
document.write(x1);
document.write(x2);
document.write('корінь з дискримінанту = ');
document.write(result);
