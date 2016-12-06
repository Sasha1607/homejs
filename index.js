
var first = Number (prompt('first'));
var second = Number (prompt('second'));
var third = Number (prompt('third'));
var disk = form(first, second, third);
function form(a, b, c) {
    return b * b - 4 * a * c; 
}

function diskreminant(disk) {
    if (disk >= 1)
    {
        return Math.sqrt(disk);
    }   else {
            return 'корень з дискримінанту не існує';
        }
    }
var result = diskreminant(disk);
document.write('корінь з дискримінанту = ');
document.write(result);
