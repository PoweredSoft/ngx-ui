export interface IFilter {
    type: string;
    and?: boolean;
}

export interface ISimpleFilter extends IFilter {
    path: string;
    value: any;
}