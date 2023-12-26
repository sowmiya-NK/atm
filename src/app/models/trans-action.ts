export interface TransAction {
    userId:number;
    amount:number;
    currentBalance:number;
    createdAt:Date;
    transactionalType:any
    name:string;
}
