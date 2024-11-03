

// export type PropertyDataType = {
//     id: number;
//     price?: number; 
//     location?: string; 
//     size?: number; 
//     bedrooms?: number; 
//     bathrooms?: number; 
//     city?: string; 
//     country?: string; 
//     pircture?: string []; 
// }

export type PropertyDataType = {
    id: string;  // Add an ID for dynamic routing
    price: number; 
    location: string; 
    size: number; 
    bedrooms: number; 
    bathrooms: number; 
    city: string; 
    country: string; 
    pircture: string[]; 
    description: string;  // New property for description
};


const PhotoOneUrl1 = "/products/room1.jpg"; // Use the relative path as a string
const PhotoOneUrl2 = "/products/room2.jpg"; // Use the relative path as a string
const PhotoOneUrl3 = "/products/room3.jpg"; // Use the relative path as a string
const PhotoOneUrl4 = "/products/room4.jpg"; // Use the relative path as a string
const PhotoOneUrl5 = "/products/room5.jpg"; // Use the relative path as a string
const PhotoOneUrl6 = "/products/room6.jpg"; // Use the relative path as a string
const PhotoOneUrl7 = "/products/room7.jpg"; // Use the relative path as a string



export const propertyData = [
    {
        id: "ycbuy2gd23h8dj298u204902ruhuu",
        price: 50000000,
        location: "Bastos",
        size: 360,
        bedrooms: 3,
        bathrooms: 2,
        city: "Yaounde",
        country: "Cameroun",
        category: "Apartment",  // New category
        pircture: [
            PhotoOneUrl1,
            PhotoOneUrl3,
            PhotoOneUrl5,
            PhotoOneUrl7
        ],
        description: "Beautiful, spacious property located in the heart of Bastos with modern amenities and a fantastic view.",
    }, 
    {
        id: "bed24h92ud8j029jo2h49h29294e8",
        price: 75000000,
        location: "Mbankolo",
        size: 420,
        bedrooms: 4,
        bathrooms: 3,
        city: "Douala",
        country: "Cameroun",
        category: "House",
        pircture: [
            PhotoOneUrl2,
            PhotoOneUrl4,
            PhotoOneUrl6,
            PhotoOneUrl7
        ],
        description: "Beautiful, spacious property located in the heart of Bastos with modern amenities and a fantastic view.",
    }
    // {
    //     id: 1, 
    //     price: 50000000, 
    //     location: "Bastos", 
    //     size: 360,  
    //     bedrooms: 3, 
    //     bathrooms: 2, 
    //     city: "Yaounde", 
    //     country: "Cameroun", 
    //     pircture: [
    //         "https://photos.fife.usercontent.google.com/pw/AP1GczNn8f-e2RcJeILo1LxSGXMT2a1EOJlOw2MRlRwe1l4wnKnL-3kRagk=w802-h1080-s-no-gm?authuser=1", 
    //         "https://photos.fife.usercontent.google.com/pw/AP1GczMLPyVkC7KLGTL5RuLNgVFkMldWsRsbU7PkHBPXEQhYsWxlqZIU5Cc=w804-h1080-s-no-gm?authuser=1"
    //     ], 
    // }, 
    // {
    //     id: 2, 
    //     price: 50000000, 
    //     location: "Bastos", 
    //     size: 360,  
    //     bedrooms: 3, 
    //     bathrooms: 2, 
    //     city: "Yaounde", 
    //     country: "Cameroun", 
    //     pircture: [
    //         "https://photos.fife.usercontent.google.com/pw/AP1GczNn8f-e2RcJeILo1LxSGXMT2a1EOJlOw2MRlRwe1l4wnKnL-3kRagk=w802-h1080-s-no-gm?authuser=1", 
    //         "https://photos.fife.usercontent.google.com/pw/AP1GczMLPyVkC7KLGTL5RuLNgVFkMldWsRsbU7PkHBPXEQhYsWxlqZIU5Cc=w804-h1080-s-no-gm?authuser=1"
    //     ], 
    // }, 
    // {
    //     id: 3, 
    //     price: 50000000, 
    //     location: "Bastos", 
    //     size: 360,  
    //     bedrooms: 3, 
    //     bathrooms: 2, 
    //     city: "Yaounde", 
    //     country: "Cameroun", 
    //     pircture: [
    //         "https://photos.fife.usercontent.google.com/pw/AP1GczNn8f-e2RcJeILo1LxSGXMT2a1EOJlOw2MRlRwe1l4wnKnL-3kRagk=w802-h1080-s-no-gm?authuser=1", 
    //         "https://photos.fife.usercontent.google.com/pw/AP1GczMLPyVkC7KLGTL5RuLNgVFkMldWsRsbU7PkHBPXEQhYsWxlqZIU5Cc=w804-h1080-s-no-gm?authuser=1"
    //     ], 
    // }
]