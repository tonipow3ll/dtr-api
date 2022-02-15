export interface IUser {
    id?: string;
    name: string;
    email: string;
    biography?: string;
    primaryLocation?: string;
    ridingLocation?: string;
    isPublic?: boolean;
}