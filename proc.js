var size = 4;
var gap = 1;
var world = document.getElementById('world');
var initLoc = [
    // m
    '58|58', '58|59', '58|60', '58|61', '58|62', '58|63', '59|58', '59|61', '59|64', '60|58', '60|61', '60|64', '61|58', '61|61', '61|64', '62|58', '62|61', '62|64',
    // a
    '58|67', '58|68', '58|69', '59|70', '60|67', '60|68', '60|69', '60|70', '61|66', '61|70', '62|66', '62|67', '62|68', '62|69', '62|70',
    //r
    '62|72', '61|72', '60|72', '59|72', '58|72', '59|73', '58|74', '58|75', 
    // k
    '56|77', '57|77', '58|77',  '59|77', '60|77', '61|77', '62|77', '62|80', '61|79', '60|78', '58|78', '57|79', 
    // '
    '56|83', '57|83',
    // s
    '58|86', '58|87', '58|88', '58|89', '59|85', '60|86', '60|87', '60|88', '61|89', '62|85', '62|86', '62|87', '62|88',
    // G
    '56|95', '56|96', '56|97', '56|98', '57|94', '58|94', '59|94', '59|96', '59|97', '59|98', '60|94', '60|98', '61|94', '61|98', '62|95', '62|96', '62|97', '62|98',
    // a
    '58|101', '58|102', '58|103', '59|104', '60|101', '60|102', '60|103', '60|104', '61|100', '61|104', '62|100', '62|101', '62|102', '62|103', '62|104',
    // m
    '58|106', '58|107', '58|108', '58|109', '58|110', '58|111', '59|106', '59|109', '59|112', '60|106', '60|109', '60|112', '61|106', '61|109', '61|112', '62|106', '62|109', '62|112',
    // e
    '58|115', '58|116', '58|117', '59|114', '59|118', '60|114', '60|115', '60|116', '60|117', '60|118', '61|114', '62|115', '62|116', '62|117', '62|118',
    // o
    '58|124', '58|125', '58|126', '59|123', '59|127', '60|123', '60|127', '61|123', '61|127', '62|124', '62|125', '62|126',
    // f
    '56|131', '56|132', '56|133', '57|130', '58|130', '59|129', '59|130', '59|131', '59|132', '59|133', '60|130', '61|130', '62|130',
    // L
    '56|138', '57|138', '58|138', '59|138', '60|138', '61|138', '62|139', '62|140', '62|141', '62|142',
    // i
    '57|144', '59|144', '60|144', '61|144', '62|144',
    // f
    '56|148', '56|149', '56|150', '57|147', '58|147', '59|146', '59|147', '59|148', '59|149', '59|150', '60|147', '61|147', '62|147',
    // e
    '58|153', '58|154', '58|155', '59|152', '59|156', '60|152', '60|153', '60|154', '60|155', '60|156', '61|152', '62|153', '62|154', '62|155', '62|156'
];
//用二位数组标记每一个cell是生是死  
var cellFlag = new Array();
function init(){
    
    var ctx = world.getContext('2d');
    ctx.fillStyle='black';
    var x = 0;  //表示列数
    var y = 0;  //表示行数。与行列式方式不同的原因是为了与fillRect函数的意义保持一致
    
    for(x = 1; x <= 900/(size + gap); x++){
        cellFlag[x] = new Array();
        for(y = 1; y <= 600/(size + gap); y++){
            cellFlag[x][y] = 0;
        }
    }
    
    var i = 0;  //只用作计数的循环变量
    for(i = 0; i < initLoc.length; i++){
        var pos = initLoc[i].split('|');
        cellFlag[pos[1]][pos[0]] = 1;
        ctx.fillRect((1 +(size + gap)*pos[1]),(1 +(size + gap)*pos[0]),size,size);
    }
}

function startEvolve(){
    var ctx = world.getContext('2d');
    ctx.fillStyle='black'; 
    var i = 0;  //只用作计数的循环变量 
}
init();

