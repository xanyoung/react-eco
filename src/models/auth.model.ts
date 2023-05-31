export enum Role {
        ADMIN = 'ADMIN',
        USER = 'USER',
        POINT = 'POINT',
        SHOP = 'SHOP'
}


export type AuthenticationResponse = {
    token?: string;
    id?: string;
    username?: string;
    photo_url?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    role?: Role;
};

// export type AuthenticationRequest = {
//     login: string;
//     password: string;
// };

export type AuthenticationBody = {
    phone_number: string
    // login: string;
    password: string
}