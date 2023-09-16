export  interface Player{
    id:number;
    name:string;
    icon:string;
}
export interface Match {
    match:number;
    player1:PlayerScore;
    player2:PlayerScore;
}
export interface PlayerScore {
    id:number;
    score:number;
}