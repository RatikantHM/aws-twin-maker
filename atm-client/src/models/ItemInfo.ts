export interface ItemInfo {
    carId: number | string;
    headLight: boolean;
    bonet: boolean;
    boot: boolean;
    letfIndicator: boolean;
    rightIndicator: boolean;
    wiper: boolean;
    petrolFuelTankLid: boolean;
    frontRightDoor: boolean;
    frontLeftDoor: boolean;
    rearRightDoor: boolean;
    rearLeftDoor: boolean;
    frontRightWindow: boolean;
    frontLeftWindow: boolean;
    rearRightWindow: boolean;
    rearLeftWindow: boolean;
    handBreak: boolean;
    frontRightTyrePressure: number;
    frontLeftPressure: number;
    rearRightPressure: number;
    rearLeftPressure: number;
    music: boolean;
    breakFluidLevel: number;
    coolantLevel: number;
    fuelLevel: number;
}