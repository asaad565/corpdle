const companiesData = [
    // === TECH & CHIPS ===
    { id: "aapl", name: "Apple", sector: "Tech", revenue: 383, margin: 44, netIncome: 97, country: "🇺🇸 USA" },
    { id: "msft", name: "Microsoft", sector: "Tech", revenue: 211, margin: 69, netIncome: 72, country: "🇺🇸 USA" },
    { id: "nvda", name: "NVIDIA", sector: "Tech", revenue: 60, margin: 72, netIncome: 30, country: "🇺🇸 USA" },
    { id: "googl", name: "Alphabet (Google)", sector: "Tech", revenue: 307, margin: 56, netIncome: 73, country: "🇺🇸 USA" },
    { id: "meta", name: "Meta (Facebook)", sector: "Tech", revenue: 134, margin: 80, netIncome: 39, country: "🇺🇸 USA" },
    { id: "tsmc", name: "TSMC", sector: "Tech", revenue: 75, margin: 54, netIncome: 31, country: "🇹🇼 TW" },
    { id: "asml", name: "ASML", sector: "Tech", revenue: 29, margin: 51, netIncome: 8, country: "🇳🇱 NL" },
    { id: "sap", name: "SAP", sector: "Tech", revenue: 33, margin: 72, netIncome: 6, country: "🇩🇪 DE" },
    { id: "orcl", name: "Oracle", sector: "Tech", revenue: 50, margin: 71, netIncome: 10, country: "🇺🇸 USA" },
    { id: "t loyalty", name: "Deutsche Telekom", sector: "Tech", revenue: 121, margin: 48, netIncome: 8, country: "🇩🇪 DE" },
    { id: "csco", name: "Cisco Systems", sector: "Tech", revenue: 57, margin: 63, netIncome: 12, country: "🇺🇸 USA" },
    { id: "avgo", name: "Broadcom", sector: "Tech", revenue: 35, margin: 74, netIncome: 14, country: "🇺🇸 USA" },
    { id: "ibm", name: "IBM", sector: "Tech", revenue: 62, margin: 55, netIncome: 7, country: "🇺🇸 USA" },
    { id: "tencent", name: "Tencent", sector: "Tech", revenue: 86, margin: 48, netIncome: 16, country: "🇨🇳 CN" },
    { id: "samsung", name: "Samsung Electronics", sector: "Tech", revenue: 200, margin: 30, netIncome: 11, country: "🇰🇷 KR" },

    // === CONSUMER & RETAIL & ENTERTAINMENT ===
    { id: "amzn", name: "Amazon", sector: "Retail", revenue: 574, margin: 47, netIncome: 30, country: "🇺🇸 USA" },
    { id: "wmt", name: "Walmart", sector: "Retail", revenue: 648, margin: 24, netIncome: 16, country: "🇺🇸 USA" },
    { id: "nke", name: "Nike", sector: "Consumer Goods", revenue: 51, margin: 44, netIncome: 5, country: "🇺🇸 USA" },
    { id: "dis", name: "Walt Disney", sector: "Entertainment", revenue: 89, margin: 34, netIncome: 3, country: "🇺🇸 USA" },
    { id: "nflx", name: "Netflix", sector: "Entertainment", revenue: 33, margin: 41, netIncome: 5, country: "🇺🇸 USA" },
    { id: "ko", name: "Coca-Cola", sector: "Consumer Goods", revenue: 45, margin: 60, netIncome: 10, country: "🇺🇸 USA" },
    { id: "pep", name: "PepsiCo", sector: "Consumer Goods", revenue: 91, margin: 54, netIncome: 9, country: "🇺🇸 USA" },
    { id: "mcd", name: "McDonald's", sector: "Consumer Goods", revenue: 25, margin: 57, netIncome: 8, country: "🇺🇸 USA" },
    { id: "or", name: "L'Oréal", sector: "Consumer Goods", revenue: 44, margin: 74, netIncome: 6, country: "🇫🇷 FR" },
    { id: "baba", name: "Alibaba Group", sector: "Retail", revenue: 130, margin: 37, netIncome: 11, country: "🇨🇳 CN" },
    { id: "sony", name: "Sony", sector: "Consumer Goods", revenue: 89, margin: 25, netIncome: 7, country: "🇯🇵 JP" },

    // === AUTOMOTIVE & INDUSTRIALS ===
    { id: "tsla", name: "Tesla", sector: "Automotive", revenue: 96, margin: 18, netIncome: 15, country: "🇺🇸 USA" },
    { id: "vow", name: "Volkswagen", sector: "Automotive", revenue: 348, margin: 19, netIncome: 19, country: "🇩🇪 DE" },
    { id: "tm", name: "Toyota", sector: "Automotive", revenue: 275, margin: 20, netIncome: 24, country: "🇯🇵 JP" },
    { id: "mbg", name: "Mercedes-Benz", sector: "Automotive", revenue: 165, margin: 22, netIncome: 15, country: "🇩🇪 DE" },
    { id: "bmw", name: "BMW Group", sector: "Automotive", revenue: 168, margin: 17, netIncome: 12, country: "🇩🇪 DE" },
    { id: "race", name: "Ferrari", sector: "Automotive", revenue: 6, margin: 49, netIncome: 1, country: "🇮🇹 IT" },
    { id: "cat", name: "Caterpillar", sector: "Industrials", revenue: 67, margin: 32, netIncome: 10, country: "🇺🇸 USA" },
    { id: "ge", name: "General Electric", sector: "Industrials", revenue: 68, margin: 22, netIncome: 9, country: "🇺🇸 USA" },
    { id: "sie", name: "Siemens", sector: "Industrials", revenue: 83, margin: 38, netIncome: 8, country: "🇩🇪 DE" },

    // === FINANCE & BANKING ===
    { id: "jpm", name: "JPMorgan Chase", sector: "Finance", revenue: 158, margin: 100, netIncome: 49, country: "🇺🇸 USA" },
    { id: "bac", name: "Bank of America", sector: "Finance", revenue: 98, margin: 100, netIncome: 26, country: "🇺🇸 USA" },
    { id: "wfc", name: "Wells Fargo", sector: "Finance", revenue: 82, margin: 100, netIncome: 19, country: "🇺🇸 USA" },
    { id: "gs", name: "Goldman Sachs", sector: "Finance", revenue: 46, margin: 100, netIncome: 8, country: "🇺🇸 USA" },
    { id: "ms", name: "Morgan Stanley", sector: "Finance", revenue: 54, margin: 100, netIncome: 9, country: "🇺🇸 USA" },
    { id: "v", name: "Visa", sector: "Finance", revenue: 32, margin: 97, netIncome: 17, country: "🇺🇸 USA" },
    { id: "ma", name: "Mastercard", sector: "Finance", revenue: 25, margin: 100, netIncome: 11, country: "🇺🇸 USA" },
    { id: "alv", name: "Allianz", sector: "Finance", revenue: 175, margin: 25, netIncome: 9, country: "🇩🇪 DE" },
    { id: "hsba", name: "HSBC Holdings", sector: "Finance", revenue: 66, margin: 100, netIncome: 22, country: "🇬🇧 UK" },

    // === HEALTHCARE & PHARMA ===
    { id: "lly", name: "Eli Lilly", sector: "Healthcare", revenue: 34, margin: 79, netIncome: 5, country: "🇺🇸 USA" },
    { id: "jnj", name: "Johnson & Johnson", sector: "Healthcare", revenue: 85, margin: 69, netIncome: 13, country: "🇺🇸 USA" },
    { id: "nvo", name: "Novo Nordisk", sector: "Healthcare", revenue: 33, margin: 84, netIncome: 12, country: "🇩🇰 DK" },
    { id: "mrk", name: "Merck & Co.", sector: "Healthcare", revenue: 60, margin: 73, netIncome: 2, country: "🇺🇸 USA" },
    { id: "pfe", name: "Pfizer", sector: "Healthcare", revenue: 58, margin: 59, netIncome: 2, country: "🇺🇸 USA" },
    { id: "rog", name: "Roche Holding", sector: "Healthcare", revenue: 65, margin: 72, netIncome: 13, country: "🇨🇭 CH" },
    { id: "novn", name: "Novartis", sector: "Healthcare", revenue: 45, margin: 70, netIncome: 8, country: "🇨🇭 CH" },
    { id: "bayn", name: "Bayer", sector: "Healthcare", revenue: 51, margin: 62, netIncome: -3, country: "🇩🇪 DE" },

    // === ENERGY & COMMODITIES ===
    { id: "xom", name: "ExxonMobil", sector: "Energy", revenue: 344, margin: 16, netIncome: 36, country: "🇺🇸 USA" },
    { id: "cvx", name: "Chevron", sector: "Energy", revenue: 200, margin: 12, netIncome: 21, country: "🇺🇸 USA" },
    { id: "shel", name: "Shell", sector: "Energy", revenue: 316, margin: 18, netIncome: 19, country: "🇬🇧 UK" },
    { id: "bp", name: "BP", sector: "Energy", revenue: 213, margin: 15, netIncome: 15, country: "🇬🇧 UK" },
    { id: "tot", name: "TotalEnergies", sector: "Energy", revenue: 237, margin: 17, netIncome: 21, country: "🇫🇷 FR" },
    { id: "aramco", name: "Saudi Aramco", sector: "Energy", revenue: 494, margin: 55, netIncome: 121, country: "🇸🇦 SA" }
];