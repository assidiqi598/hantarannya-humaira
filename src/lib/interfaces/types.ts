import ITheme from "./theme";

export default interface IType {
    type: string;
    themes: Array<ITheme>;
    maxTotal: number;
}