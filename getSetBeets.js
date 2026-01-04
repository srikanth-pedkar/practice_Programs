class Solution
{
    constructor(beets){
        this.beets = beets;
    }

    getBeets(){
        return this.beets;
    }

    setBeets(beets){
        this.beets = beets;
    }
}

let beets1 = new Solution();
beets1.setBeets(100);
console.log(beets1.getBeets());

let beets2 = new Solution();
beets2.setBeets(999999);
console.log(beets2.getBeets());

let beets3 = new Solution();
beets3.setBeets(-89765);
console.log(beets3.getBeets());