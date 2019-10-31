import { OnInit } from '@angular/core';

export class Ingredient implements OnInit{
    name:string;
    amount:number;
    constructor(name:string,amount:number)
    {
        this.name=name;
        this.amount=amount;
    }
    ngOnInit()
    {

    }
}
