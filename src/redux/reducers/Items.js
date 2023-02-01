const initialState = {
    items: [
        {

            "id": 1,
            "name": "Onion",
            "type": "Vegetables",
            "brand": "Freshno",
            "price": [
                {
                    "quantity": "1",
                    "price": "50.07"
                },
                {
                    "quantity": "2",
                    "price": "100.13"
                },
                {
                    "quantity": "5",
                    "price": "250.34"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/l/10000150_19-fresho-onion.jpg?tr=w-384,q=80"
        },
        {
            "id": 2,
            "name": "Potato",
            "type": "Vegetables",
            "brand": "Freshno",
            "price": [
                {
                    "quantity": "1",
                    "price": "36.04"
                },
                {
                    "quantity": "2",
                    "price": "72.08"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/l/40162469_6-fresho-potato-new-crop.jpg?tr=w-384,q=80"
        },
        {
            "id": 3,
            "name": "Tomato",
            "type": "Vegetables",
            "brand": "Freshno",
            "price": [
                {
                    "quantity": "1",
                    "price": "23"
                },
                {
                    "quantity": "2",
                    "price": "59.7"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/l/40075161_3-fresho-tomato-hybrid.jpg?tr=w-384,q=80"
        },
        {
            "id": 4,
            "name": "Capsicum",
            "type": "Vegetables",
            "brand": "Freshno",
            "price": [
                {
                    "quantity": "1",
                    "price": "36.6"
                },
                {
                    "quantity": "2",
                    "price": "75.8"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/l/10000069_20-fresho-capsicum-green.jpg?tr=w-384,q=80"
        },
        {
            "id": 5,
            "name": "Ladies Finger",
            "type": "Vegetables",
            "brand": "Freshno",
            "price": [
                {
                    "quantity": "1",
                    "price": "57.5"
                },
                {
                    "quantity": "2",
                    "price": "100"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/l/10000142_16-fresho-ladies-finger.jpg?tr=w-384,q=80"
        },
        {
            "id": 6,
            "name": "Apple",
            "type": "fruits",
            "brand": "Freshno",
            "price": [
                {
                    "quantity": "1",
                    "price": "122.66"
                },
                {
                    "quantity": "2",
                    "price": "210.5"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/m/40226802_4-fresho-baby-apple-shimla.jpg?tr=w-1920,q=80"
        },
        {
            "id": 7,
            "name": "Bannana",
            "type": "fruits",
            "brand": "Freshno",
            "price": [
                {
                    "quantity": "1",
                    "price": "54.5"
                },
                {
                    "quantity": "2",
                    "price": "105.5"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/m/10000025_27-fresho-banana-robusta.jpg?tr=w-1920,q=80"
        },
        {
            "id": 8,
            "name": "Orange",
            "type": "fruits",
            "brand": "Freshno",
            "price": [
                {
                    "quantity": "1",
                    "price": "76.32"
                },
                {
                    "quantity": "2",
                    "price": "150.5"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/m/10000266_27-fresho-orange-nagpur-regular.jpg?tr=w-1920,q=80"
        },
        {
            "id": 9,
            "name": "Cucumber",
            "type": "fruits",
            "brand": "Freshno",
            "price": [
                {
                    "quantity": "1",
                    "price": "56.18"
                },
                {
                    "quantity": "2",
                    "price": "112.5"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/m/10000102_17-fresho-cucumber.jpg?tr=w-1920,q=80"
        },
        {
            "id": 10,
            "name": "Lemon",
            "type": "fruits",
            "brand": "Fresho",
            "price": [
                {
                    "quantity": "1",
                    "price": "38.74"
                },
                {
                    "quantity": "2",
                    "price": "75.54"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/m/10000335_15-fresho-lemon.jpg?tr=w-1920,q=80"
        },
        {
            "id": 11,
            "name": "Toor Dal",
            "type": "pluses",
            "brand": "Tata Sampann",
            "price": [
                {
                    "quantity": "1",
                    "price": "160"
                },
                {
                    "quantity": "2",
                    "price": "320"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/m/40000291_8-tata-sampann-unpolished-toor-dalarhar-dal.jpg?tr=w-1920,q=80"
        },
        {
            "id": 12,
            "name": "Moong Dal",
            "type": "pluses",
            "brand": "BB Royal",
            "price": [
                {
                    "quantity": "1",
                    "price": "129"
                },
                {
                    "quantity": "2",
                    "price": "260"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/m/10000434_15-bb-royal-moong-dal.jpg?tr=w-1920,q=80"
        },
        {
            "id": 13,
            "name": "Chana Dal",
            "type": "pluses",
            "brand": "BB Royal",
            "price": [
                {
                    "quantity": "1",
                    "price": "76.5"
                },
                {
                    "quantity": "2",
                    "price": "182"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/m/40042838_11-bb-royal-channa-dal.jpg?tr=w-1920,q=80"
        },
        {
            "id": 14,
            "name": "Rajma Chitra",
            "type": "pluses",
            "brand": "BB Royal",
            "price": [
                {
                    "quantity": "1",
                    "price": "167.5"
                },
                {
                    "quantity": "2",
                    "price": "340"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/m/70001289_9-bb-royal-rajma-whitechitra.jpg?tr=w-1920,q=80"
        },
        {
            "id": 15,
            "name": "Chana Brown",
            "type": "pluses",
            "brand": "BB Popular",
            "price": [
                {
                    "quantity": "1",
                    "price": "79"
                },
                {
                    "quantity": "2",
                    "price": "158"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/m/70001280_10-bb-popular-channa-brown.jpg?tr=w-1920,q=80https://www.bigbasket.com/media/uploads/p/m/70001280_10-bb-popular-channa-brown.jpg?tr=w-1920,q=80"
        },
        {
            "id": 16,
            "name": "Frozen Green Peas",
            "type": "cuts-sprouts",
            "brand": "Freshno",
            "price": [
                {
                    "quantity": "1",
                    "price": "195"
                },
                {
                    "quantity": "2",
                    "price": "390"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/m/40163718_11-fresho-frozen-green-peas.jpg?tr=w-1920,q=80"
        },
        {
            "id": 17,
            "name": "Frozen Sweet Corn",
            "type": "cuts-sprouts",
            "brand": "Freshno",
            "price": [
                {
                    "quantity": "1",
                    "price": "149"
                },
                {
                    "quantity": "2",
                    "price": "298"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/m/40208830_10-fresho-frozen-sweet-corn.jpg?tr=w-1920,q=80"
        },
        {
            "id": 18,
            "name": "Pumpkin Green - Cut",
            "type": "cuts-sprouts",
            "brand": "Freshno",
            "price": [
                {
                    "quantity": "1",
                    "price": "110"
                },
                {
                    "quantity": "2",
                    "price": "220"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/m/40050705_3-fresho-pumpkin-green-cut.jpg?tr=w-1920,q=80"
        },
        {
            "id": 19,
            "name": "Garlic - Peeled",
            "type": "cuts-sprouts",
            "brand": "Freshno",
            "price": [
                {
                    "quantity": "1",
                    "price": "230"
                },
                {
                    "quantity": "2",
                    "price": "450"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/l/40010687_4-fresho-garlic-peeled.jpg?tr=w-384,q=80"
        },
        {
            "id": 20,
            "name": "Coconuy - Diced",
            "type": "cuts-sprouts",
            "brand": "Freshno",
            "price": [
                {
                    "quantity": "1",
                    "price": "180"
                },
                {
                    "quantity": "2",
                    "price": "320"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/m/40019379_5-fresho-coconut-diced.jpg?tr=w-1920,q=80"
        },
        {
            "id": 21,
            "name": "Mushrooms - Button",
            "type": "exotic-fruits-veggies",
            "brand": "Freshno",
            "price": [
                {
                    "quantity": "1",
                    "price": "153.25"
                },
                {
                    "quantity": "2",
                    "price": "300"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/m/10000273_16-fresho-mushrooms-button.jpg?tr=w-1920,q=80"
        },
        {
            "id": 22,
            "name": "Cucumber - English",
            "type": "exotic-fruits-veggies",
            "brand": "Freshno",
            "price": [
                {
                    "quantity": "1",
                    "price": "39.22"
                },
                {
                    "quantity": "2",
                    "price": "80.8"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/m/10000668_12-fresho-cucumber-english.jpg?tr=w-1920,q=80"
        },
        {
            "id": 23,
            "name": "Mixed Capsicum",
            "type": "exotic-fruits-veggies",
            "brand": "Freshno",
            "price": [
                {
                    "quantity": "1",
                    "price": "77.38"
                },
                {
                    "quantity": "2",
                    "price": "150.5"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/m/40058671_1-fresho-mixed-capsicum.jpg?tr=w-1920,q=80"
        },
        {
            "id": 24,
            "name": "Broccoli",
            "type": "exotic-fruits-veggies",
            "brand": "Freshno",
            "price": [
                {
                    "quantity": "1",
                    "price": "80.28"
                },
                {
                    "quantity": "2",
                    "price": "160.8"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/m/10000063_20-fresho-broccoli.jpg?tr=w-1920,q=80"
        },
        {
            "id": 25,
            "name": "Blueberry",
            "type": "exotic-fruits-veggies",
            "brand": "Freshno",
            "price": [
                {
                    "quantity": "1",
                    "price": "448"
                },
                {
                    "quantity": "2",
                    "price": "850"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/m/30009286_7-fresho-blueberry.jpg?tr=w-1920,q=80"
        },
        {
            "id": 26,
            "name": "Ginger",
            "type": "herbs-seasonings",
            "brand": "Freshno",
            "price": [
                {
                    "quantity": "1",
                    "price": "151"
                },
                {
                    "quantity": "2",
                    "price": "300"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/m/10000338_13-fresho-ginger.jpg?tr=w-1920,q=80"
        },
        {
            "id": 27,
            "name": "Chilli - Green Long",
            "type": "herbs-seasonings",
            "brand": "Freshno",
            "price": [
                {
                    "quantity": "1",
                    "price": "64.66"
                },
                {
                    "quantity": "2",
                    "price": "125.8"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/m/10000333_14-fresho-chilli-green-long-medium.jpg?tr=w-1920,q=80"
        },
        {
            "id": 28,
            "name": "Garlic",
            "type": "herbs-seasonings",
            "brand": "Freshno",
            "price": [
                {
                    "quantity": "1",
                    "price": "87"
                },
                {
                    "quantity": "2",
                    "price": "178"
                }
            ],
            "image": "https://www.bigbasket.com/media/uploads/p/m/10000330_14-fresho-garlic.jpg?tr=w-1920,q=80"
        },
    ]
}

const itemsData = (state = initialState) => {
    return state;
}

export default itemsData;