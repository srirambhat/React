import { FileReference } from 'typescript';

export type Crypto = {
    ath: number;
    ath_change_percentage: number;
    ath_date: DataView;
    atl: number;
    atl_change_percentage: number;
    atl_date: DataView;
    circulating_supply: number;
    current_price: number;
    fully_diluted_valuation: number;
    high_24h: number;
    id: string;
    image: FileReference;
    last_updated: DataView;
    low_24h: number;
    market_cap: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    market_cap_rank: number;
    max_supply: number;
    name: string;
    price_change_24h: number;
    price_change_percentage_24h: number;
    roi: string;
    symbol: string;
    total_supply: number;
    total_volume: number;
    owned: number;
};