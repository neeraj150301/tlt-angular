export interface UserInterface {
    _id: string,
    phoneNumber: string,
    fullName: string,
    isActive: boolean,
    isDefaultPin: boolean,
    isSuperAdmin?: boolean,
    fcmToken:string,
    devices: string[],
    deviceHistory: string[],
    apps: string[],
    createdAt: Date,
    updatedAt: Date,
}