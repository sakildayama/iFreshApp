import icons from "./icons"
export const ProductCategories = [

    {
        id: 1,
        Image: icons.list,
        title: 'All Category'

    },
    {
        id: 2,
        Image: icons.broccoli,
        title: 'Vegetables'

    },
    {
        id: 3,
        Image: icons.apple,
        title: 'Fruits'
    },
    {
        id: 4,
        Image: icons.dragonfruit,
        title: 'Exotic'
    },
]


export const productListData = [

    {
        id: 1,
        title: 'A Desi Carrot (गाजर) -',
        Image: icons.CARROTT,
        Price: '20₹',
        Quality: "Best Quality",
        Quantity: "500 mgs",
        // category: "Vegetables",
        more_variant: [
            { key: '1', value: '500 gms       -           20₹' },
            { key: '1', value: '500 gms       -           20₹' },
        ]
    },
    {
        id: 2,
        title: 'A Onion (प्याज) -',
        Image: icons.ONOIN,
        Price: '28₹',
        Quality: "Best Quality",
        Quantity: "1 kg(S)",
        category: "Vegetables",
        more_variant: [
            { key: '1', value: '500 gms       -           20₹' },
            { key: '1', value: '500 gms       -           20₹' },
        ]
    },
    {
        id: 3,
        title: 'A Potato (आलू) -',
        Image: icons.POTATO,
        Price: '30₹',
        Quality: "Best Quality",
        Quantity: "1 kg",
        category: "Vegetables",
    },
    {
        id: 4,
        title: 'American Sweet Corn (भुट्टे) -',
        Image: icons.SWEETCORN,
        Price: '54₹',
        Quality: "Best Quality",
        Quantity: "1 kg",
        category: "Vegetables",
    },
    {
        id: 5,
        title: 'Ash Gourd (पेठा) -',
        Image: icons.AshGourd,
        Price: '200₹',
        Quality: "Best Quality",
        Quantity: "3kg(s).",
        category: "Vegetables",
    },
    {
        id: 6,
        title: 'Beans (बीन्स) -',
        Image: icons.Beans,
        Price: '98₹',
        Quality: "Best Quality",
        Quantity: "1 kg",
        category: "Vegetables",
    },
    {
        id: 7,
        title: 'A BEETROOT (चुकंदर) -',
        Image: icons.BEETROOT,
        Price: '30₹',
        Quality: "Best Quality",
        Quantity: "500 gms",
        category: "Vegetables",
    },
    {
        id: 8,
        title: ' BITTERGOURD (करेला) -',
        Image: icons.BITTERGOURD,
        Price: '35₹',
        Quality: "Best Quality",
        Quantity: "500 gms",
        category: "Vegetables",
    },
    {
        id: 9,
        title: 'A Potato (बैंगन) -',
        Image: icons.BRINJAL,
        Price: '40₹',
        Quality: "Best Quality",
        Quantity: "1 kg",
        category: "Vegetables",
    },
    {
        id: 10,
        title: ' CAULIFLOWER (फूलगोभी) -',
        Image: icons.CAULIFLOWER,
        Price: '23₹',
        Quality: "Best Quality",
        Quantity: "500 mgs",
        category: "Vegetables",
    },
    //FRUITS 
    {
        id: 11,
        title: ' Muskmelon (खरबूजा) -',
        Image: icons.MUSKMELON,
        Price: '80₹',
        category:'Fruits',
        Quality: "Best Quality",
        Quantity: "1kg(s.)",
    },

    {
        id: 12,
        title: ' APPLE (सेब) -',
        Image: icons.APPLEFF,
        Price: '80₹',
        Quality: "Best Quality",
        Quantity: "1 kg",
        category:'Fruits',
    },
    {
        id: 13,
        title: ' Kiwi (कीवी) -',
        Image: icons.KIWI,
        Price: '80₹',
        Quality: "Best Quality",
        Quantity: "1 pack",
        category:'Fruits',
    },
    {
        id: 14,
        title: ' Banana (केले) -',
        Image: icons.BANANA,
        Price: '17₹',
        Quality: "Best Quality",
        Quantity: "500 mgs",
        category:'Fruits',
    },
    {
        id: 15,
        title: ' Grapes (अंगूर) -',
        Image: icons.GRAPESS,
        Price: '200₹',
        Quality: "Best Quality",
        Quantity: "1kg",
        category:'Fruits',
    },
    {
        id: 16,
        title: ' Orange (संतरा) -',
        Image: icons.ORANGE,
        Price: '50₹',
        Quality: "Best Quality",
        Quantity: "1kg",
        category:'Fruits',
    },
    {
        id: 17,
        title: ' Papaya (पपीता) -',
        Image: icons.PAPAYA,
        Price: '60₹',
        Quality: "Best Quality",
        Quantity: "500 mgs",
        category:'Fruits',
    },
    {
        id: 18,
        title: ' Pomegranate (अनार) -',
        Image: icons.POMEGRANATE,
        Price: '150₹',
        Quality: "Best Quality",
        Quantity: "1kg",
        category:'Fruits',
    },
    {
        id: 19,
        title: ' Watermelon (तरबूज) -',
        Image: icons.WATERMELON,
        Price: '99₹',
        Quality: "Best Quality",
        Quantity: "3 kg",
        category:'Fruits',
    },
    {
        id: 20,
        title: ' Turmeric (हल्दी) -',
        Image: icons.TURMERIC,
        Price: '150₹',
        Quality: "Best Quality",
        Quantity: "1 pack",
        category:'Fruits',
    },

    /// Exotic
    {
        id: 21,
        title: ' Avocado ( एलीगेटर नाशपाती) -',
        Image: icons.AVOCADO,
        Price: '280₹',
        Quality: "Best Quality",
        Quantity: "1 pcs",
        category:'Exotic',
    },
    {
        id: 22,
        title: ' Dragon (कमलम) -',
        Image: icons.DRAGON,
        Price: '280₹',
        Quality: "Best Quality",
        Quantity: "1 pcs",
        category:'Exotic',
    },
    {
        id: 23,
        title: ' Pear (नाशपाती) -',
        Image: icons.PEAR,
        Price: '320₹',
        Quality: "Best Quality",
        Quantity: "1kg",
        category:'Exotic',
    },
    {
        id: 24,
        title: ' Plum (आलूबुखारा) -',
        Image: icons.PLUM,
        Price: '180₹',
        Quality: "Best Quality",
        Quantity: "1kg",
        category:'Exotic',
    },
    {
        id: 25,
        title: ' Red Grapes (लाल अंगूर) -',
        Image: icons.REDGRAPES,
        Price: '370₹',
        Quality: "Best Quality",
        Quantity: "1 pcs",
        category:'Exotic',
    },
    {
        id: 26,
        title: ' Strawberry (स्ट्रॉबेरी) -',
        Image: icons.STRAWBERRY,
        Price: '280₹',
        Quality: "Best Quality",
        Quantity: "1 pcs",
        category:'Exotic',
    },

    {
        id: 27,
        title: ' Tomato (टमाटर) -',
        Image: icons.TOMATO,
        Price: '40₹',
        Quality: "Best Quality",
        Quantity: "1kg",
        category:'Exotic',
    },


]

export const ProductCategories2 = [

    {
        id: 1,
        Image: icons.list,
        title: 'All Category'

    },
    {
        id: 2,
        Image: icons.broccoli,
        title: 'Dry Fruits'

    },
    
]

export const FlatListData2 = [

    {
        id: 1,
        title: 'ASALIYA |Halim seeds| -',
        Image: icons.ASALIYA,
        Price: '300₹',
        Quality: "Best Quality",
        Quantity: "1 kg",
        // category: "Dry Fruits",
        more_variant: [
            { key: '1', value: '500 gms       -           20₹' },
            { key: '1', value: '500 gms       -           20₹' },
        ]
    },
    {
        id: 2,
        title: 'AKHROT GIRI -',
        Image: icons.AKHROTGIRI,
        Price: '1500₹',
        Quality: "Best Quality",
        Quantity: "1 kg(S)",
        category: "Dry Fruits",
        more_variant: [
            { key: '1', value: '500 gms       -           20₹' },
            { key: '1', value: '500 gms       -           20₹' },
        ]
    },

    {
        id: 3,
        title: 'All in One Diwali Pack -',
        Image: icons.DIWALIFRUITS,
        Price: '550₹',
        Quality: "Best Quality",
        Quantity: "1 pack",
        category: "Dry Fruits",
    },

    {
        id: 4,
        title: 'Almond (बादाम) -',
        Image: icons.ALMONDSS,
        Price: '750₹',
        Quality: "Best Quality",
        Quantity: "1 kg",
        category: "Dry Fruits",
    },
    {
        id: 5,
        title: ' CHIA SEEDS -',
        Image: icons.CHIASEEDS,
        Price: '330₹',
        Quality: "Best Quality",
        Quantity: "500 gms",
        category: "Dry Fruits",
    },
    {
        id: 6,
        title: 'Cashews (काजू) -',
        Image: icons.CASHEWS,
        Price: '525₹',
        Quality: "Best Quality",
        Quantity: "500 mgs",
        category: "Dry Fruits",
    },
    {
        id: 7,
        title: ' INSHELL WALNUTS -',
        Image: icons.INSHELL,
        Price: '850₹',
        Quality: "Best Quality",
        Quantity: "1kg",
        category: "Dry Fruits",
    },
    {
        id: 8,
        title: ' IRANI MAMRA ALMONDS -',
        Image: icons.IRANIMAMRA,
        Price: '2000₹',
        Quality: "Best Quality",
        Quantity: "1kg",
        category: "Dry Fruits",
    },
    {
        id: 10,
        title: ' JUMBO MAMRA ALMONDS  -',
        Image: icons.JUMBOMAMRA,
        Price: '3300₹',
        Quality: "Best Quality",
        Quantity: "1kg",
        category: "Dry Fruits",
    },
   

]




export const Featureproduct = [

    {
        id: 1,
        title: ' IRANI MAMRA ALMONDS -',
        Image: icons.IRANIMAMRA,
        Price: '2000₹',
        Quality: "Best Quality",
        Quantity: "1kg",
    },
    {
        id: 2,
        title: ' JUMBO MAMRA ALMONDS  -',
        Image: icons.JUMBOMAMRA,
        Price: '3300₹',
        Quality: "Best Quality",
        Quantity: "1kg",
    },
    {
        id: 3,
        title: 'A Potato (आलू) -',
        Image: icons.POTATO,
        Price: '30₹',
        Quality: "Best Quality",
        Quantity: "1 kg",
    },
    {
        id: 4,
        title: 'American Sweet Corn (भुट्टे) -',
        Image: icons.SWEETCORN,
        Price: '54₹',
        Quality: "Best Quality",
        Quantity: "1 kg",
    },
    {
        id: 5,
        title: 'Ash Gourd (पेठा) -',
        Image: icons.AshGourd,
        Price: '200₹',
        Quality: "Best Quality",
        Quantity: "3kg(s).",
    },
    {
        id: 6,
        title: 'Beans (बीन्स) -',
        Image: icons.Beans,
        Price: '98₹',
        Quality: "Best Quality",
        Quantity: "1 kg",
    },
    {
        id: 7,
        title: 'A BEETROOT (चुकंदर) -',
        Image: icons.BEETROOT,
        Price: '30₹',
        Quality: "Best Quality",
        Quantity: "500 gms",
    },
    {
        id: 8,
        title: ' BITTERGOURD (करेला) -',
        Image: icons.BITTERGOURD,
        Price: '35₹',
        Quality: "Best Quality",
        Quantity: "500 gms",
    },
    {
        id: 9,
        title: 'A Potato (बैंगन) -',
        Image: icons.BRINJAL,
        Price: '40₹',
        Quality: "Best Quality",
        Quantity: "1 kg",
    },
    {
        id: 10,
        title: ' CAULIFLOWER (फूलगोभी) -',
        Image: icons.CAULIFLOWER,
        Price: '23₹',
        Quality: "Best Quality",
        Quantity: "500 mgs",

    },
    //FRUITS 
    {
        id: 11,
        title: ' Muskmelon (खरबूजा) -',
        Image: icons.MUSKMELON,
        Price: '80₹',
        category:'Fruits',
        Quality: "Best Quality",
        Quantity: "1kg(s.)",
    },

    {
        id: 12,
        title: ' APPLE (सेब) -',
        Image: icons.APPLEFF,
        Price: '80₹',
        Quality: "Best Quality",
        Quantity: "1 kg",
    },
    {
        id: 13,
        title: ' Kiwi (कीवी) -',
        Image: icons.KIWI,
        Price: '80₹',
        Quality: "Best Quality",
        Quantity: "1 pack",
    },
    {
        id: 14,
        title: ' Banana (केले) -',
        Image: icons.BANANA,
        Price: '17₹',
        Quality: "Best Quality",
        Quantity: "500 mgs",
    },
    {
        id: 15,
        title: ' Grapes (अंगूर) -',
        Image: icons.GRAPESS,
        Price: '200₹',
        Quality: "Best Quality",
        Quantity: "1kg",
    },
    {
        id: 16,
        title: ' Orange (संतरा) -',
        Image: icons.ORANGE,
        Price: '50₹',
        Quality: "Best Quality",
        Quantity: "1kg",
    },
    {
        id: 17,
        title: ' Papaya (पपीता) -',
        Image: icons.PAPAYA,
        Price: '60₹',
        Quality: "Best Quality",
        Quantity: "500 mgs",
    },
    {
        id: 18,
        title: ' Pomegranate (अनार) -',
        Image: icons.POMEGRANATE,
        Price: '150₹',
        Quality: "Best Quality",
        Quantity: "1kg",
    },
    {
        id: 19,
        title: ' Watermelon (तरबूज) -',
        Image: icons.WATERMELON,
        Price: '99₹',
        Quality: "Best Quality",
        Quantity: "3 kg",
    },
    {
        id: 20,
        title: ' Turmeric (हल्दी) -',
        Image: icons.TURMERIC,
        Price: '150₹',
        Quality: "Best Quality",
        Quantity: "1 pack",
    },

    /// Exotic
    {
        id: 21,
        title: ' Avocado ( एलीगेटर नाशपाती) -',
        Image: icons.AVOCADO,
        Price: '280₹',
        Quality: "Best Quality",
        Quantity: "1 pcs",
    
    },
    {
        id: 22,
        title: ' Dragon (कमलम) -',
        Image: icons.DRAGON,
        Price: '280₹',
        Quality: "Best Quality",
        Quantity: "1 pcs",

    },
    {
        id: 23,
        title: ' Pear (नाशपाती) -',
        Image: icons.PEAR,
        Price: '320₹',
        Quality: "Best Quality",
        Quantity: "1kg",

    },
    {
        id: 24,
        title: ' Plum (आलूबुखारा) -',
        Image: icons.PLUM,
        Price: '180₹',
        Quality: "Best Quality",
        Quantity: "1kg",

    },
    {
        id: 25,
        title: ' Red Grapes (लाल अंगूर) -',
        Image: icons.REDGRAPES,
        Price: '370₹',
        Quality: "Best Quality",
        Quantity: "1 pcs",
    },
    {
        id: 26,
        title: ' Strawberry (स्ट्रॉबेरी) -',
        Image: icons.STRAWBERRY,
        Price: '280₹',
        Quality: "Best Quality",
        Quantity: "1 pcs",

    },

    {
        id: 27,
        title: ' Tomato (टमाटर) -',
        Image: icons.TOMATO,
        Price: '40₹',
        Quality: "Best Quality",
        Quantity: "1kg",

    },
    {
        id: 28,
        title: 'A Desi Carrot (गाजर) -',
        Image: icons.CARROTT,
        Price: '20₹',
        Quality: "Best Quality",
        Quantity: "500 mgs",
        // category: "Vegetables",
        more_variant: [
            { key: '1', value: '500 gms       -           20₹' },
            { key: '1', value: '500 gms       -           20₹' },
        ]
    },
    {
        id: 29,
        title: 'A Onion (प्याज) -',
        Image: icons.ONOIN,
        Price: '28₹',
        Quality: "Best Quality",
        Quantity: "1 kg(S)",
    },
    {
        id: 30,
        title: 'ASALIYA |Halim seeds| -',
        Image: icons.ASALIYA,
        Price: '300₹',
        Quality: "Best Quality",
        Quantity: "1 kg",
    },
    {
        id: 31,
        title: 'AKHROT GIRI -',
        Image: icons.AKHROTGIRI,
        Price: '1500₹',
        Quality: "Best Quality",
        Quantity: "1 kg(S)",
        category: "Dry Fruits",
    },

    {
        id: 32,
        title: 'All in One Diwali Pack -',
        Image: icons.DIWALIFRUITS,
        Price: '550₹',
        Quality: "Best Quality",
        Quantity: "1 pack",
    },

    {
        id: 33,
        title: 'Almond (बादाम) -',
        Image: icons.ALMONDSS,
        Price: '750₹',
        Quality: "Best Quality",
        Quantity: "1 kg",
    },
    {
        id: 34,
        title: ' CHIA SEEDS -',
        Image: icons.CHIASEEDS,
        Price: '330₹',
        Quality: "Best Quality",
        Quantity: "500 gms",
    },
    {
        id: 35,
        title: 'Cashews (काजू) -',
        Image: icons.CASHEWS,
        Price: '525₹',
        Quality: "Best Quality",
        Quantity: "500 mgs",
    },
    {
        id: 36,
        title: ' INSHELL WALNUTS -',
        Image: icons.INSHELL,
        Price: '850₹',
        Quality: "Best Quality",
        Quantity: "1kg",
    },
    
    


]