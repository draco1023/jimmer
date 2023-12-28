import type {Gender} from '../enums/';

export interface AuthorInput {
    readonly id: number | null | undefined;
    readonly firstName: string;
    readonly lastName: string;
    readonly gender: Gender;
}
