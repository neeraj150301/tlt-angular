export class RawMaterial{
    public _id? : string
    public pgNonPg! : string
    public itemName! : string
    public section! : string
    public itemId! : string
    public warehouse! : string
    public documentNo! : string
    public documentDate! : string
    public vendorName! : string
    public unit? : string
    public receivedPieces! : number
    public receivedQuantity! : number
    public issuedPieces? : number
    public issuedQuantity? : number
    public balancePieces? : number
    public balanceQuantity? : number
    public balanceAmount? : number
    public pendingDays? : number
    public maxLength! : number
    public minLength! : number
    public averageLength! : number
    public length! : number
    public width! : number
    public costCenter! : string
    public createdAt? : Date
    public createdBy! : string 
}