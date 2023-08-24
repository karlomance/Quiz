export interface ResultObject {
    name: string;
    result: number;
    date: string;
}
export type SheredData = {
    correctAnswers: string[], 
    userAnswers: string[]
}
export interface Post {
    name: string,
    result: number,
    date: string,
    id?: string
}