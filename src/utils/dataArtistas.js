import { Asset } from 'expo-asset';

const path = "https://d27j0m7guijs4b.cloudfront.net"

const dataArtistas = [
    {
        idArtista: 1,
        name: "Lina de Sol",
        location: "San Diego - eeuu",
        isoFlag: "US",
        age: "24 años",
        phone: "+1-619-4747700",
        email: "linadesol@gmail.com",
        image: Asset.fromModule(require("./Fotos/Foto1.jpg")).uri,
        views: {
            instagram: "13.546",
            tiktok: "11.325",
            youtube: "8.659",
            spotify: "6.589"
        },
        mediaLinks: [
            {
                id: 1,
                link: "https://d27j0m7guijs4b.cloudfront.net/Videos+artistas/Artista+1/Art+1+A.mp4"
            },
            {
                id: 2,
                link: "https://d27j0m7guijs4b.cloudfront.net/Videos+artistas/Artista+1/Art1B.mp4"
            }
        ],
        assetsLinks: [
            {
                id: 1,
                link:  Asset.fromModule(require("./Videosartistas/Artista1/1A.mp4")).uri
            },
            {
                id: 2,
                link:  Asset.fromModule(require("../utils/Videosartistas/Artista1/1B.mp4")).uri
            }
        ]
    },
    {
        idArtista: 2,
        name: "Karen & Tom",
        location: "Chicago - eeuu",
        isoFlag: "US",
        age: "24 años",
        phone: "+1-312-728934009",
        email: "kar_tom12@gmail.com",
        image: Asset.fromModule(require("./Fotos/Foto2.jpg")).uri,
        views: {
            instagram: "12.546",
            tiktok: "14.325",
            youtube: "11.659",
            spotify: "8.589"
        },
        mediaLinks: [
            {
                id: 1,
                link: "https://d27j0m7guijs4b.cloudfront.net/Videos+artistas/Artista+2/Art+2+A.mp4"
            },
            {
                id: 2,
                link: "https://d27j0m7guijs4b.cloudfront.net/Videos+artistas/Artista+2/Art+2+B.mp4"
            }
        ],
        assetsLinks: [
            {
                id: 1,
                link:  Asset.fromModule(require("../utils/Videosartistas/Artista2/2A.mp4")).uri
            },
            {
                id: 2,
                link:  Asset.fromModule(require("../utils/Videosartistas/Artista2/2B.mp4")).uri
            }
        ]
    },
    {
        idArtista: 3,
        name: "Monnic",
        location: "São Paulo - Brasil",
        isoFlag: "BR",
        age: "26 años",
        phone: "+55-011-9123 4567",
        email: "monnic95@gmail.com",
        image: Asset.fromModule(require("./Fotos/Foto3.jpg")).uri,
        views: {
            instagram: "11.246",
            tiktok: "14.325",
            youtube: "12.959",
            spotify: "9.589"
        },
        mediaLinks: [
            {
                id: 1,
                link: "https://d27j0m7guijs4b.cloudfront.net/Videos+artistas/Artista+3/Art+3+A.mp4"
            },
            {
                id: 2,
                link: "https://d27j0m7guijs4b.cloudfront.net/Videos+artistas/Artista+3/Art+3+B.mp4"
            }
        ],
        assetsLinks: [
            {
                id: 1,
                link:  Asset.fromModule(require("../utils/Videosartistas/Artista3/3A.mp4")).uri
            },
            {
                id: 2,
                link:  Asset.fromModule(require("../utils/Videosartistas/Artista3/3B.mp4")).uri
            }
        ]
    },
    {
        idArtista: 4,
        name: "Sammy Copley",
        location: "Miami - Florida",
        isoFlag: "US",
        age: "22 años",
        phone: "+1-239-6789364",
        email: "copleysam@gmail.com",
        image: Asset.fromModule(require("./Fotos/Foto4.jpg")).uri,
        views: {
            instagram: "10.246",
            tiktok: "11.325",
            youtube: "12.959",
            spotify: "5.589"
        },
        mediaLinks: [
            {
                id: 1,
                link: "https://d27j0m7guijs4b.cloudfront.net/Videos+artistas/Artista+4/Art+4+A.mp4"
            },
            {
                id: 2,
                link: "https://d27j0m7guijs4b.cloudfront.net/Videos+artistas/Artista+4/Art+4+B.mp4"
            }
        ],
        assetsLinks: [
            {
                id: 1,
                link:  Asset.fromModule(require("../utils/Videosartistas/Artista4/4A.mp4")).uri
            },
            {
                id: 2,
                link:  Asset.fromModule(require("../utils/Videosartistas/Artista4/4B.mp4")).uri
            }
        ]
    },
    {
        idArtista: 5,
        name: "Josiah Bell",
        location: "Houston- eeuu",
        isoFlag: "US",
        age: "27 años",
        phone: "+1-713-34758321",
        email: "josiahbell@gmail.com",
        image: Asset.fromModule(require("./Fotos/Foto5.jpg")).uri,
        views: {
            instagram: "14.246",
            tiktok: "11.325",
            youtube: "9.959",
            spotify: "7.589"
        },
        mediaLinks: [
            {
                id: 1,
                link: "https://d27j0m7guijs4b.cloudfront.net/Videos+artistas/Artista+5/Art+5+A.mp4"
            },
            {
                id: 2,
                link: "https://d27j0m7guijs4b.cloudfront.net/Videos+artistas/Artista+5/Art+5+B.mp4"
            }
        ],
        assetsLinks: [
            {
                id: 1,
                link:  Asset.fromModule(require("../utils/Videosartistas/Artista5/5A.mp4")).uri
            },
            {
                id: 2,
                link:  Asset.fromModule(require("../utils/Videosartistas/Artista5/5B.mp4")).uri
            }
        ]
    },
    {
        idArtista: 6,
        name: "Zina Homi",
        location: "Paris - Francia",
        isoFlag: "FR",
        age: "21 años",
        phone: "34758-321",
        email: "monnic95@gmail.com",
        image: Asset.fromModule(require("./Fotos/Foto6.jpg")).uri,
        views: {
            instagram: "14.246",
            tiktok: "11.325",
            youtube: "9.959",
            spotify: "7.589"
        },
        mediaLinks: [
            {
                id: 1,
                link: "https://bucket-talent-assets.s3.us-west-1.amazonaws.com/Videos+artistas/Artista+6/Art+6+A.mp4"
            },
            {
                id: 2,
                link: "https://bucket-talent-assets.s3.us-west-1.amazonaws.com/Videos+artistas/Artista+6/Art+6+B.mp4"
            }
        ],
        assetsLinks: [
            {
                id: 1,
                link: Asset.fromModule(require("../utils/Videosartistas/Artista6/6A.mp4")).uri
            },
            {
                id: 2,
                link:  Asset.fromModule(require("../utils/Videosartistas/Artista6/6B.mp4")).uri
            }
        ]
    },
    {
        idArtista: 7,
        name: "Michal R.",
        location: "London - UK",
        isoFlag: "GB",
        age: "24 años",
        phone: "+44-798-7654321",
        email: "michal@hotmail.com",
        image: Asset.fromModule(require("./Fotos/Foto7.jpg")).uri,
        views: {
            instagram: "15.246",
            tiktok: "11.325",
            youtube: "8.959",
            spotify: "6.589"
        },
        mediaLinks: [
            {
                id: 1,
                link: "https://d27j0m7guijs4b.cloudfront.net/Videos+artistas/Artista+7/Art+7+A.mp4"
            },
            {
                id: 2,
                link: "https://d27j0m7guijs4b.cloudfront.net/Videos+artistas/Artista+7/Art+7+B.mp4"
            }
        ],
        assetsLinks: [
            {
                id: 1,
                link:  Asset.fromModule(require("../utils/Videosartistas/Artista7/7A.mp4")).uri
            },
            {
                id: 2,
                link:  Asset.fromModule(require("../utils/Videosartistas/Artista7/7B.mp4")).uri
            }
        ]
    },
    {
        idArtista: 8,
        name: "Anthony Gargulia",
        location: "Amsterdan - Paises Bajos",
        isoFlag: "NL",
        age: "25 años",
        phone: "+31-020-598922",
        email: "anthonygargulia@gmail.com",
        image: Asset.fromModule(require("./Fotos/Foto8.jpg")).uri,
        views: {
            instagram: "15.246",
            tiktok: "11.325",
            youtube: "8.959",
            spotify: "6.589"
        },
        mediaLinks: [
            {
                id: 1,
                link: "https://d27j0m7guijs4b.cloudfront.net/Videos+artistas/Artista+8/Art+8+A.mp4"
            },
            {
                id: 2,
                link: "https://d27j0m7guijs4b.cloudfront.net/Videos+artistas/Artista+8/Art+8+B.mp4"
            }
        ],
        assetsLinks: [
            {
                id: 1,
                link:  Asset.fromModule(require("../utils/Videosartistas/Artista8/8A.mp4")).uri
            },
            {
                id: 2,
                link:  Asset.fromModule(require("../utils/Videosartistas/Artista8/8B.mp4")).uri
            }
        ]
    },
    {
        idArtista: 9,
        name: "Tany M.",
        location: "Berlin - Germany",
        isoFlag: "DE",
        age: "25 años",
        phone: "+49-030-901820",
        email: "moontany@gmail.com",
        image: Asset.fromModule(require("./Fotos/Foto9.jpg")).uri,
        views: {
            instagram: "12.246",
            tiktok: "10.325",
            youtube: "7.959",
            spotify: "6.589"
        },
        mediaLinks: [
            {
                id: 1,
                link: "https://d27j0m7guijs4b.cloudfront.net/Videos+artistas/Artista+9/Art+9+A.mp4"
            },
            {
                id: 2,
                link: "https://d27j0m7guijs4b.cloudfront.net/Videos+artistas/Artista+9/Art+9+B.mp4"
            }
        ],
        assetsLinks: [
            {
                id: 1,
                link:  Asset.fromModule(require("../utils/Videosartistas/Artista9/9A.mp4")).uri
            },
            {
                id: 2,
                link:  Asset.fromModule(require("../utils/Videosartistas/Artista9/9B.mp4")).uri
            }
        ]
    },
    {
        idArtista: 10,
        name: "Nelly G.",
        location: "San Juan - Puerto Rico",
        isoFlag: "PR",
        age: "27 años",
        phone: "+1-787-778902211",
        email: "nelly@gmail.com",
        image: Asset.fromModule(require("./Fotos/Foto10.jpg")).uri,
        views: {
            instagram: "14.246",
            tiktok: "12.325",
            youtube: "7.959",
            spotify: "8.589"
        },
        mediaLinks: [
            {
                id: 1,
                link: "https://d27j0m7guijs4b.cloudfront.net/Videos+artistas/Artista+10/Art+10+A.mp4"
            },
            {
                id: 2,
                link: "https://d27j0m7guijs4b.cloudfront.net/Videos+artistas/Artista+10/Art+10+B.mp4"
            }
        ],
        assetsLinks: [
            {
                id: 1,
                link:  Asset.fromModule(require("../utils/Videosartistas/Artista10/10A.mp4")).uri
            },
            {
                id: 2,
                link:  Asset.fromModule(require("../utils/Videosartistas/Artista10/10B.mp4")).uri
            }
        ]
    },
    {
        idArtista: 11,
        name: "Nani F.",
        location: "Bs As - Argentina",
        isoFlag: "AR",
        age: "26 años",
        phone: "+54-011-52440017",
        email: "nani2000@hotmail.com.ar",
        image: Asset.fromModule(require("./Fotos/Foto11.jpg")).uri,
        views: {
            instagram: "14.246",
            tiktok: "12.325",
            youtube: "7.959",
            spotify: "8.589"
        },
        mediaLinks: [
            {
                id: 1,
                link: "https://d27j0m7guijs4b.cloudfront.net/Videos+artistas/Artista+11/Art+11+A.mp4"
            },
            {
                id: 2,
                link: "https://d27j0m7guijs4b.cloudfront.net/Videos+artistas/Artista+11/Art+11+B.mp4"
            }
        ],
        assetsLinks: [
            {
                id: 1,
                link:  Asset.fromModule(require("../utils/Videosartistas/Artista11/11A.mp4")).uri
            },
            {
                id: 2,
                link: Asset.fromModule(require("../utils/Videosartistas/Artista11/11B.mp4")).uri
            }
        ]
    },
    {
        idArtista: 12,
        name: "Jazmin Kast",
        location: "Rome - Italy",
        isoFlag: "IT",
        age: "26 años",
        phone: "+39-065-9708457",
        email: "jazminkast96@yahoo.com",
        image: Asset.fromModule(require("./Fotos/Foto12.jpg")).uri,
        views: {
            instagram: "14.246",
            tiktok: "12.325",
            youtube: "7.959",
            spotify: "8.589"
        },
        mediaLinks: [
            {
                id: 1,
                link: "https://d27j0m7guijs4b.cloudfront.net/Videos+artistas/Artista+12/Art+12+A.mp4"
            },
            {
                id: 2,
                link: "https://d27j0m7guijs4b.cloudfront.net/Videos+artistas/Artista+12/Art+12+B.mp4"
            }
        ],
        assetsLinks: [
            {
                id: 1,
                link:  Asset.fromModule(require("../utils/Videosartistas/Artista12/12A.mp4")).uri
            },
            {
                id: 2,
                link:  Asset.fromModule(require("../utils/Videosartistas/Artista12/12B.mp4")).uri
            }
        ]
    },
    {
        idArtista: 13,
        name: "Luke A.",
        location: "New York - eeuu",
        isoFlag: "US",
        age: "25 años",
        phone: "+1-718-4925710",
        email: "lukeamstron@gmail.com",
        image: Asset.fromModule(require("./Fotos/Foto13.jpg")).uri,
        views: {
            instagram: "12.246",
            tiktok: "10.325",
            youtube: "7.959",
            spotify: "8.589"
        },
        mediaLinks: [
            {
                id: 1,
                link: "https://d27j0m7guijs4b.cloudfront.net/Videos+artistas/Artista+13/Art+13+A.mp4"
            },
            {
                id: 2,
                link: "https://d27j0m7guijs4b.cloudfront.net/Videos+artistas/Artista+13/Art+13+B.mp4"
            }
        ],
        assetsLinks: [
            {
                id: 1,
                link:  Asset.fromModule(require("../utils/Videosartistas/Artista13/13A.mp4")).uri
            },
            {
                id: 2,
                link:  Asset.fromModule(require("../utils/Videosartistas/Artista13/13B.mp4")).uri
            }
        ]
    },
    {
        idArtista: 14,
        name: "Justin W.",
        location: "Kingston - Jamaica",
        isoFlag: "JM",
        age: "28 años",
        phone: "+1-876-5419009",
        email: "rlovejustin@hotmail.com",
        image: Asset.fromModule(require("./Fotos/Foto14.jpg")).uri,
        views: {
            instagram: "12.246",
            tiktok: "10.325",
            youtube: "7.959",
            spotify: "8.589"
        },
        mediaLinks: [
            {
                id: 1,
                link: "https://d27j0m7guijs4b.cloudfront.net/Videos+artistas/Artista+3/Art+3+A.mp4"
            },
            {
                id: 2,
                link: "https://d27j0m7guijs4b.cloudfront.net/Videos+artistas/Artista+3/Art+3+B.mp4"
            }
        ],
        assetsLinks: [
            {
                id: 1,
                link:  Asset.fromModule(require("../utils/Videosartistas/Artista14/14A.mp4")).uri
            },
            {
                id: 2,
                link:  Asset.fromModule(require("../utils/Videosartistas/Artista14/14B.mp4")).uri
            }
        ]
    },
]

export default dataArtistas