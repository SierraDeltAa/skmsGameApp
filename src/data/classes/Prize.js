export default class Prize {
    constructor(id,title,value,chance){
        this.id = id;
        this.title = title;
        this.value = value;
        this.isClaimed = false
        this.chance = chance
    }

}

