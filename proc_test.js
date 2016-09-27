describe('init', function(){
    it('should be a function',function() {
        assert.isFunction(init);
    });
    it('should have one argument',function(){
        assert.equal(init.length, 1);
    });
});
describe('countNext', function(){
    it('should be a function', function() {
       assert.isFunction(countNext); 
    });
    it('should have 1 argument', function(){
        assert.equal(countNext.length, 1);
    });
    it('should return empty matrix when no cell is neighbored', function(){
        var cellFlag = new Array();
        var result = new Array()
        var i;
        for(i = 1; i <= 900/5; i++){
            cellFlag[i] = new Array();
            result[i] = new Array();
            for(j = 1; j <= 600/5; j++){
                cellFlag[i][j] = 0;
                result[i][j] = 0;
                if((i % 2) == 1 && (j % 2) == 1) cellFlag[i][j] = 1;
            }
        }
        assert.deepEqual(countNext(cellFlag),result);
    });
    it('should return an empty matrix when input an empty one', function(){
        var cellFlag = new Array();
        var result = new Array()
        var i;
        for(i = 1; i <= 900/5; i++){
            cellFlag[i] = new Array();
            result[i] = new Array();
            for(j = 1; j <= 600/5; j++){
                cellFlag[i][j] = 0;
            }
        }
        assert.deepEqual(countNext(cellFlag),cellFlag);
    });
    it('border condition test', function(){
        var cellFlag = new Array();
        var result = new Array()
        var i;
        for(i = 1; i <= 900/5; i++){
            cellFlag[i] = new Array();
            result[i] = new Array();
            for(j = 1; j <= 600/5; j++){
                result[i][j] = 0;
                if((i == 1 && j == 1) || (i == 1 && j == 600/5) || (i == 900/5 && j == 1) || (i == 900/5 && j == 600/5)) {
                    result[i][j] = 1;
                    cellFlag[i][j] = 1;
                }
            }
        }
        assert.deepEqual(countNext(result),result);
    });
});