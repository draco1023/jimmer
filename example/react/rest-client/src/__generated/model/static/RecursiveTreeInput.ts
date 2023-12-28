import type {RecursiveTreeInput_TargetOf_childNodes} from './';

export interface RecursiveTreeInput {
    readonly name: string;
    readonly childNodes: ReadonlyArray<RecursiveTreeInput_TargetOf_childNodes | null | undefined> | null | undefined;
}
