export enum Role {
    ADMIN = 'ADMIN',
    USER = 'USER',
    POINT = 'POINT',
    SHOP = 'SHOP',
}

export type RegisterResponse = {
    id?: string
    photo_url?: string
    firstname?: string
    lastname?: string
    username: string
    email?: string
    phone_number: string
    password: string
    balance?: number
    role?: Role
}

export type RegisterBody = {
    username: string
    phone_number: string
    password: string
}
