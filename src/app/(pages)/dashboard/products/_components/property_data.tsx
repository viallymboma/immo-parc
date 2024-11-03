

export type PropertyDataType = {
    id: number;
    price?: number; 
    location?: string; 
    size?: number; 
    bedrooms?: number; 
    bathrooms?: number; 
    city?: string; 
    country?: string; 
    pircture?: string []; 
}


export const propertyData = [
    {
        id: 1, 
        price: 50000000, 
        location: "Bastos", 
        size: 360,  
        bedrooms: 3, 
        bathrooms: 2, 
        city: "Yaounde", 
        country: "Cameroun", 
        pircture: [
            "https://photos.fife.usercontent.google.com/pw/AP1GczNn8f-e2RcJeILo1LxSGXMT2a1EOJlOw2MRlRwe1l4wnKnL-3kRagk=w802-h1080-s-no-gm?authuser=1", 
            "https://photos.fife.usercontent.google.com/pw/AP1GczMLPyVkC7KLGTL5RuLNgVFkMldWsRsbU7PkHBPXEQhYsWxlqZIU5Cc=w804-h1080-s-no-gm?authuser=1"
        ], 
    }, 
    {
        id: 2, 
        price: 50000000, 
        location: "Bastos", 
        size: 360,  
        bedrooms: 3, 
        bathrooms: 2, 
        city: "Yaounde", 
        country: "Cameroun", 
        pircture: [
            "https://photos.fife.usercontent.google.com/pw/AP1GczNn8f-e2RcJeILo1LxSGXMT2a1EOJlOw2MRlRwe1l4wnKnL-3kRagk=w802-h1080-s-no-gm?authuser=1", 
            "https://photos.fife.usercontent.google.com/pw/AP1GczMLPyVkC7KLGTL5RuLNgVFkMldWsRsbU7PkHBPXEQhYsWxlqZIU5Cc=w804-h1080-s-no-gm?authuser=1"
        ], 
    }, 
    {
        id: 3, 
        price: 50000000, 
        location: "Bastos", 
        size: 360,  
        bedrooms: 3, 
        bathrooms: 2, 
        city: "Yaounde", 
        country: "Cameroun", 
        pircture: [
            "https://photos.fife.usercontent.google.com/pw/AP1GczNn8f-e2RcJeILo1LxSGXMT2a1EOJlOw2MRlRwe1l4wnKnL-3kRagk=w802-h1080-s-no-gm?authuser=1", 
            "https://photos.fife.usercontent.google.com/pw/AP1GczMLPyVkC7KLGTL5RuLNgVFkMldWsRsbU7PkHBPXEQhYsWxlqZIU5Cc=w804-h1080-s-no-gm?authuser=1"
        ], 
    }
]