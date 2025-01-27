export interface RegisterUserInput {
    username: string | null;
    email: string | null;
    password: string | null;
}

export interface User {
    id: string;
    username: string;
    email: string;
    firstname?: string;
    lastname?: string;
    kyc?: boolean;
    image?: string;
    rating?: number;
    address?: string;
    summary?: string;
    dob?: string;
    gender?: string;
    isactive: boolean;
}

export interface CreateUserResponse {
    id: string;
    token: string;
    user: User;
}

export interface CreateUserMutationResponse {
    createUser: CreateUserResponse;
}
