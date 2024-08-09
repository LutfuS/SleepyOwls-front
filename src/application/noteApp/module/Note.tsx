export class Note {
    public text: string
    public state: boolean
    public id : number

    constructor(text: string, state: boolean, id: number){
        this.text= text
        this.state = state
        this.id = id
    }
}