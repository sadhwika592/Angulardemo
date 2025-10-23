export interface Stock {
    tickerSymbol: string;
    sectorId: number;
    subSectorID:number;
    marketCap:number;
    currentRatio:number;
    cumulativeReturn: null; //(number | null)?
}
