export class CreateUserDto {
    // readonly id: number;
    readonly name: string;
    readonly email: string;
    readonly biography: string;
    readonly primaryLocation: string;
    readonly ridingLocation: string;
    readonly isPublic: boolean;
}