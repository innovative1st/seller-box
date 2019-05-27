export interface ReadyToPick {
    picklistId: number;
    picklistNumber: string;
    warehouseCode: string;
    etailorId: number;
    createdDate: Date;
    createdBy: string;
    assignedTo: string;
    exsdAfter: Date;
    exsdBefore: Date;
    pickupDate: Date;
    isFasttrack: string;
    isGiftMessage: string;
    isGiftWrape: string;
    singleMultiType: string;
    fulfilmentType: string;
    noOfTotalOrder: number;
    noOfPackedOrder: number;
    noOfCancelledOrder: number;
    noOfSidelineOrder: number;
    status: string;
    isASN: number;
    asnStatus: string;
    isNotify: string
}