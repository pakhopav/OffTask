class Container {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
}

class Task extends Container {
    constructor(id, name, desc, expire, subtasks, color) {
        super(id, name);
        this.description = desc
        this.expireDate = expire
        this.subtasks = subtasks
        this.color = color
    }
}

class Group extends Container {
    constructor(id, name, color) {
        super(id, name);
        this.color = color
    }
}