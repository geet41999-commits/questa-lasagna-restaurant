export interface Dish {
  id: string;
  name: string;
  italianName?: string;
  category: 'lasagne' | 'pasta' | 'primi' | 'secondi' | 'dolci';
  description: string;
  ingredients: string[];
  price: string;
  badge?: string;
  dietary?: 'Vegetarian' | 'Gluten-Free Available' | 'Seafood' | 'House Specialty';
  image: string;
  winePairing?: string;
  prepNote?: string;
}

export interface WineItem {
  id: string;
  name: string;
  appellation: string;
  region: string;
  notes: string;
  glassPrice: string;
  bottlePrice: string;
  type: 'Red' | 'White' | 'Sparkling';
}

export const SIGNATURE_DISHES: Dish[] = [
  {
    id: 'beef-lasagna',
    name: 'Handcrafted Beef Lasagna',
    italianName: 'Lasagna Tradizionale al Forno',
    category: 'lasagne',
    description: 'Tender layers of house-made fresh pasta sheets, slow-simmered savory Bolognese ragù, velvety bechamel, and melted imported cheeses, finished with fresh garden herbs and Parmigiano-Reggiano.',
    ingredients: ['Fresh Egg Pasta Sheets', 'Slow-Simmered Beef Bolognese', 'Béchamel Emulsion', 'Whole-Milk Mozzarella', '24-Mo. Parmigiano-Reggiano'],
    price: '$26',
    badge: 'House Specialty',
    dietary: 'House Specialty',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9qGNQqVvW5ZnXOVPjiSgMBOY2AWQQE0xSMDMIfOg4guo_AdpYF03_qz749w5hKgoBxtTWBrWJblvEZsdhUNE-0vy98YsHR-GymrD3i9bMbPCtseGWUpJ6X8emLdIj9o4ht9vOwBQG5gPI4BzM_xkpYtgTuH7QYMNr11i4_wiSE4i935-b370RsKBlsKP-DN9vERgNdX7A5oVknOJV2Xn7NlJTzbvDsS3kbb1FFD1Ujp-0b-CHT3Gh',
    winePairing: 'Chianti Classico Riserva DOCG',
    prepNote: 'Baked in our deck stone ovens until bubbling with golden caramelized edges'
  },
  {
    id: 'cheese-lasagna',
    name: 'Artisanal Four-Cheese Lasagna',
    italianName: 'Lasagna ai Quattro Formaggi',
    category: 'lasagne',
    description: 'Delicate hand-rolled pasta layered with rich artisan ricotta, molten mozzarella, aged Parmigiano-Reggiano, and vibrant sun-ripened marinara sauce simmered with sweet basil and garlic.',
    ingredients: ['Hand-Rolled Pasta', 'Whipped Whole-Milk Ricotta', 'Fior di Latte Mozzarella', 'San Marzano Pomodoro', 'Sweet Genovese Basil'],
    price: '$24',
    badge: 'Vegetarian',
    dietary: 'Vegetarian',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjRUZNrFj5wBwSLD-Eaaq1knIlqLt7qCdONQ9hwLUYn6zLEZimehcvgpiUpaHfK16IX-Q5tdSfQD8BssBm_HuYIj4FN4t8LH74aIXOAMeroVbH6KA-0x7Q2lkfLYSWc-KJY36e-wxQe8IfKOGT9R228uzX5W3NmEtXqfLGwc8YrLznI0PMrcTM7htT8KF3wH3xB9PusnjvOR8tvzxqcgaLa0qQudvKIxi_Iw0EpwNTyFLBeCSH8fYA',
    winePairing: 'Montepulciano d’Abruzzo',
    prepNote: 'Layers rested 24 hours to develop velvety texture before hearth bake'
  },
  {
    id: 'handmade-ravioli',
    name: 'Hand-Pinched Ricotta Ravioli',
    italianName: 'Ravioli di Ricotta alle Erbe',
    category: 'pasta',
    description: 'Pillowy hand-pinched pasta parcels filled with seasoned ricotta and fine herbs, bathed in a delicate parmesan cream emulsion with fresh cracked black pepper.',
    ingredients: ['Flour & Farm Egg Dough', 'Herbed Ricotta Filling', 'Parmesan White Wine Reduction', 'Tellicherry Black Pepper', 'Crispy Crisped Sage'],
    price: '$25',
    badge: 'Hand-Pinched',
    dietary: 'Vegetarian',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWpiKbnbizmRTZrCahHM3-yVOMhib9Ge-rpUrtyHNexJanhlD6b6xq4GGl_xOYbrlcg1Dt0SkaTXnkdWiSqCedRUeI1abbOzdMD8X5hjkjNRG6sJKNbwJDEumefBw5faJmnMBA-6X685vICO0qlXf43UpyVErHtiQuSuSTHvw_cIrUEoo_xKKPJbXWIX3-g8GszfYE4TtJFplttCxou9AR_8dLOB8YmdPChcRO7EsnpKXmJDauCdLn',
    winePairing: 'Gavi di Gavi Cortese',
    prepNote: 'Individually pinched by hand each morning in our Mount Morris kitchen'
  },
  {
    id: 'gnocchi-shrimp',
    name: 'Potato Gnocchi & Wild Shrimp',
    italianName: 'Gnocchi di Patate ai Gamberi',
    category: 'pasta',
    description: 'Tender hand-rolled potato gnocchi tossed with succulent sautéed shrimp in a fragrant garlic, crisp Italian white wine, and fresh herb butter reduction.',
    ingredients: ['Yukon Gold Potato Gnocchi', 'Wild Gulf Shrimp', 'Pinot Grigio Garlic Reduction', 'Meyer Lemon Zest', 'Italian Flat-Leaf Parsley'],
    price: '$28',
    badge: 'Seafood Primi',
    dietary: 'Seafood',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOwx_ZPUsIAgwzlKgJ_KOKguebcLNZzOHieZP84o_XFiycn9iopVHRywDeWgmh80vsr1xrypLrOLwqbewp2Pz5mF44k1aqX69YPkSuxYnIundaUO53MRfrhw6sspg2DrnWNskhp1ZYQwQcu6Ix2bxieziSUVFTl4rYAkK-AGYKaR6BDIj6VyjHOT1ZY6MXO6GM_u8ovJbqJvhSK9Rr1OvWwqO9nJLukZxy3vwXfTT5ABgAPx8xgxXG',
    winePairing: 'Vermentino di Sardegna',
    prepNote: 'Pan-seared to order with clarified cultured butter'
  }
];

export const FULL_MENU_ITEMS: Dish[] = [
  ...SIGNATURE_DISHES,
  {
    id: 'baked-manicotti',
    name: 'Terracotta Baked Manicotti',
    italianName: 'Manicotti al Forno con Erbe',
    category: 'lasagne',
    description: 'Delicate hand-rolled pasta crepes filled with seasoned whole milk ricotta and roasted garlic, baked in terracotta with San Marzano pomodoro and shaved parmesan.',
    ingredients: ['Hand-Made Crepes', 'Whole Milk Ricotta', 'San Marzano Tomatoes', 'Parmigiano-Reggiano', 'Fresh Oregano'],
    price: '$23',
    badge: 'Heirloom Recipe',
    dietary: 'Vegetarian',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCN5f5VBfahZNpSXnKIR9mmWvW7jm3PxJu7m0d7tSo4RIZZDuZn323Pw_koK_ayEW_RUkGrP4n3Oy9jigy4zdBPB4QM7jAe5N_S9Ct9ldX8wpyTC_BPbVAWVWsCjH0V-mYx9dsPgBQ3koJN1yEwoVeB2lzgIqdzj1VQJtRAoNSZoFKPKULcD9wPAr98WlRrSxjYeG1NVAjFVkAruquAdS9K7mX_3Q5M72XLz3tmqF_1hJlXwzRII19Y',
    winePairing: 'Barbera d’Alba',
    prepNote: 'Baked and served directly in heated terracotta dishes'
  },
  {
    id: 'fettuccine-funghi',
    name: 'Fresh Fettuccine & Wild Forest Mushrooms',
    italianName: 'Fettuccine ai Funghi Selvatici',
    category: 'pasta',
    description: 'Ribbon pasta tossed with sautéed cremini, shiitake, and chanterelle mushrooms in a rich thyme-scented shallot butter sauce with aged pecorino.',
    ingredients: ['Fresh Extruded Fettuccine', 'Local Foraged Mushrooms', 'Thyme Shallot Butter', 'Aged Pecorino Romano', 'White Truffle Oil Finish'],
    price: '$26',
    badge: 'Seasonal Harvest',
    dietary: 'Vegetarian',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTNycsi-0E5JKzBl3gaAEiCbSfrzp2avmOGHLCxh0cOkjnHKE2ufCm2wwPddhqwjBLAk84Zjkk3Cpjq43axtLdPgE1D1gU0bEbh-QY3wJ2xUHM2F23lXIdevOc_NRkTPSBw8XYTszCi7WqFwYOv5UO1cfwbfqc4_NcIPT21lL5WwUCgG1oUrkg-0I_p5O9XhLBlvpBCMnJ5HNgv0047fm1ZeXVMP1vrrPZNtvtLkh70eykZCqpPoFO',
    winePairing: 'Nebbiolo d’Alba DOC',
    prepNote: 'Bronze-extruded ribbons made daily from durum semolina'
  },
  {
    id: 'burrata-pugliese',
    name: 'Burrata Pugliese & Heirloom Pomodorini',
    italianName: 'Burrata con Pomodorini e Basilico',
    category: 'primi',
    description: 'Creamy artisanal burrata served over roasted Finger Lakes heirloom cherry tomatoes, cold-pressed Sicilian olive oil, aged balsamic glaze, and grilled country bread.',
    ingredients: ['Pugliese Cream Burrata', 'Heirloom Cherry Tomatoes', 'Sicilian Extra Virgin Olive Oil', 'Aged Modenese Balsamic', 'Focaccia Toast'],
    price: '$18',
    badge: 'Antipasto',
    dietary: 'Vegetarian',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCK7rLQXnMmfbgBUMkh8wYo-lKkJWY__c5-OcdDzdOi3J8s7Oz_3pzczv5dGy1_1nLedGrzSkSovndpVPRWX2rF6wlcVYQA4WkTmgLqicBUFuuBG3bD2S_a3Bytx1-aXD3cCwK84FrnIR8bFk0grO0KdoSH-hZqjalHSO36XtlCQBqg7HdzbQ_uybv8ZyZsvNsDwMSEU2TcHUYFTlwaZDQJliSBplMI2WP4c0q0jpUMLXt-2W4YFlzg',
    winePairing: 'Pinot Grigio delle Venezie',
    prepNote: 'Imported fresh weekly from Puglia, Italy'
  },
  {
    id: 'polpette-della-casa',
    name: 'Braised Nonna’s Heritage Meatballs',
    italianName: 'Polpette al Sugo di Casa',
    category: 'primi',
    description: 'Prime beef and heritage pork meatballs slow-simmered in rich San Marzano tomato sauce, topped with whipped ricotta and basil chiffonade.',
    ingredients: ['Grass-Fed Beef & Berkshire Pork', 'Herb Breadcrumbs', 'San Marzano Gravy', 'Whipped Ricotta', 'Parmigiano Flakes'],
    price: '$17',
    badge: 'Guest Favorite',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKYsMmf019AB2NkGl5P9pqI3s4ZngKKgEV79ztc5lrE7DFZFgBwfIdTR8MLTPC3l0wxJJO23Oq_HDD2c6X-xB625M3OGTof8wpVZ_xw9jZBk-HfC4bvQGTe3WnJB57N_L34GhlT5XXt6hC_6V4hc5HhVmQnTxfM5_UdAg5ZjS0Wz1F7iONn3R_ZgGeTuwSY6WwuGko9syYjo_oM8XEj0HRXp9KoluD2D74FfB8WlR6vD2z2SVj_gs-',
    winePairing: 'Valpolicella Ripasso Superiore',
    prepNote: 'Braised for 4 hours in copper cauldrons'
  },
  {
    id: 'vitello-marsala',
    name: 'Veal Cutlet alla Marsala',
    italianName: 'Scaloppine di Vitello al Marsala',
    category: 'secondi',
    description: 'Tender medallions of pasture-raised veal sautéed with wild mushrooms and reduced Florio Sicilian dry marsala wine, served alongside buttery herb tagliatelle.',
    ingredients: ['Pasture-Raised Veal', 'Sicilian Dry Marsala Wine', 'Brown Butter Reduction', 'Fresh Thyme', 'Herb Tagliatelle'],
    price: '$34',
    badge: 'Chef Garcia Special',
    dietary: 'House Specialty',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAovsnwT9m9_go4nBpSXzZ8NNe8IqZ0E6bLtLQ5h6v-iyobNFGBJ12K35xJTzvpYPb8AU2a_XykrFmMCTHMEliPWVTAPsAPKxwXaD0cvnX-hWPUpgkowaX6I1CsFQCGmkYPAa4w5lEc54_YVpmkkvsKvGatk779o4potIAX6Lds2q5VoR8J4lmdVTLoPLgMgR8YcyNBN2LrBjPRk0pmh9vhgEmR2JF9L7XKQfHT0oWAVay1g6zsn1yE',
    winePairing: 'Brunello di Montalcino DOCG',
    prepNote: 'Pounded thin by hand and flash seared for tenderness'
  },
  {
    id: 'tiramisu-artigianale',
    name: 'Classic Venetian Tiramisù',
    italianName: 'Tiramisù Tradizionale al Mascarpone',
    category: 'dolci',
    description: 'Espresso-soaked Savoiardi ladyfingers layered with whipped mascarpone cream, Dutch cocoa powder, and dark chocolate curls.',
    ingredients: ['Savoiardi Ladyfingers', 'Highland Guatemalan Espresso', 'Crema di Mascarpone', 'Dutch Dark Cacao', 'Marsala Wine Hint'],
    price: '$12',
    badge: 'Dolce della Casa',
    dietary: 'Vegetarian',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhIB0ZUDUkjp87HETz6wIerozAxfUvbYGqKfW7F-0dSsjZE-o3nW8wa-jaFOFf36jtbysOnY9fsPuqGLPgQkro-oEldPqrJdpeFVv97HEr6pDH43t9Kis5YP2Ga22hjUvmTW9h2OgI1tMo-KPVmB8sWbOkV6wzaU5bZitT3inkvdzhEQ8XEjOruh5lQ9vWG-6LuvHrSKu_KZEF2X37LapkMy2azPAx6KD7_7O8hKsDTUU2PCJaUjt4',
    winePairing: 'Vin Santo del Chianti',
    prepNote: 'Chilled overnight for optimal flavor development'
  }
];

export const WINE_LIST: WineItem[] = [
  {
    id: 'chianti-classico',
    name: 'Castello di Monsanto Chianti Classico Riserva',
    appellation: 'DOCG',
    region: 'Tuscany, Italy',
    notes: 'Wild cherry, tobacco leaf, refined tannins, velvety oak finish.',
    glassPrice: '$16',
    bottlePrice: '$62',
    type: 'Red'
  },
  {
    id: 'brunello-montalcino',
    name: 'Altesino Brunello di Montalcino',
    appellation: 'DOCG',
    region: 'Tuscany, Italy',
    notes: 'Complex aromas of violet, dark plum, leather, and crushed stone.',
    glassPrice: '$24',
    bottlePrice: '$98',
    type: 'Red'
  },
  {
    id: 'barbera-alba',
    name: 'Pio Cesare Barbera d’Alba',
    appellation: 'DOC',
    region: 'Piedmont, Italy',
    notes: 'Vibrant blackberry, bright acidity, touches of spice and toasted almond.',
    glassPrice: '$15',
    bottlePrice: '$58',
    type: 'Red'
  },
  {
    id: 'gavi-cortese',
    name: 'Villa Sparina Gavi del Comune di Gavi',
    appellation: 'DOCG',
    region: 'Piedmont, Italy',
    notes: 'Crisp green apple, white floral blossom, refreshing mineral salinity.',
    glassPrice: '$14',
    bottlePrice: '$52',
    type: 'White'
  },
  {
    id: 'pinot-grigio',
    name: 'Livio Felluga Pinot Grigio',
    appellation: 'DOC',
    region: 'Friuli Colli Orientali, Italy',
    notes: 'Juicy golden pear, candied apricot, elegant textural mouthfeel.',
    glassPrice: '$15',
    bottlePrice: '$56',
    type: 'White'
  },
  {
    id: 'prosecco-valdobbiadene',
    name: 'Bisol Jeio Prosecco Superiore Brut',
    appellation: 'DOCG',
    region: 'Veneto, Italy',
    notes: 'Delicate fine perlage, crisp nectarine, acacia flower bouquet.',
    glassPrice: '$13',
    bottlePrice: '$48',
    type: 'Sparkling'
  }
];

export const GALLERY_PHOTOS = [
  {
    id: 'storefront',
    title: 'Historic 55 Main Street Storefront',
    subtitle: 'Mount Morris, NY',
    caption: 'Exterior street view of Questa Lasagna at 55 Main Street in Mount Morris NY with traditional gold lettering sign and historic brick facade in afternoon sunshine.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAovsnwT9m9_go4nBpSXzZ8NNe8IqZ0E6bLtLQ5h6v-iyobNFGBJ12K35xJTzvpYPb8AU2a_XykrFmMCTHMEliPWVTAPsAPKxwXaD0cvnX-hWPUpgkowaX6I1CsFQCGmkYPAa4w5lEc54_YVpmkkvsKvGatk779o4potIAX6Lds2q5VoR8J4lmdVTLoPLgMgR8YcyNBN2LrBjPRk0pmh9vhgEmR2JF9L7XKQfHT0oWAVay1g6zsn1yE',
    colSpan: 'md:col-span-2'
  },
  {
    id: 'pasta-craft',
    title: 'Bronze-Drawn Pasta Craft',
    subtitle: 'Daily In-House Batch',
    caption: 'Macro view of fresh extruded ribbed pasta with semolina flour dust and hand crafted bronze-die artisanal texture.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsDtlnPYNjpGFUWgW7K1bY5q-ndW-xcZzAS6K8EgMIcIIzyTdVuOaxovoS7_Nft3Y5qg0kbGZ5ShLoIrGHfFYI1bbt5kFglKohd3pWiY0XA-ygQPUxWdqkHbNLXc1YvSz5YV-AsJ6WyIyrV2rViR7wJGwkTephB_Tf-YLi0eX8dZ8sOMAKw1LKhv-0II1sCB9WqeDshlDYStViX2E7zo9OPs7VhK1Je7hucPlz15qzNUeCZ-zjqAtP',
    colSpan: ''
  },
  {
    id: 'dining-room',
    title: 'Cozy Trattoria Dining Room',
    subtitle: 'Warm Ambient Ambiance',
    caption: 'Interior dining room view of Questa Lasagna with polished hardwood floors, dressed tables, warm vintage sconces, and cozy Italian trattoria ambiance.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCK7rLQXnMmfbgBUMkh8wYo-lKkJWY__c5-OcdDzdOi3J8s7Oz_3pzczv5dGy1_1nLedGrzSkSovndpVPRWX2rF6wlcVYQA4WkTmgLqicBUFuuBG3bD2S_a3Bytx1-aXD3cCwK84FrnIR8bFk0grO0KdoSH-hZqjalHSO36XtlCQBqg7HdzbQ_uybv8ZyZsvNsDwMSEU2TcHUYFTlwaZDQJliSBplMI2WP4c0q0jpUMLXt-2W4YFlzg',
    colSpan: ''
  },
  {
    id: 'gnocchi-plated',
    title: 'Hand-Rolled Gnocchi',
    subtitle: 'Prepared to Order',
    caption: 'Close up of steaming potato gnocchi served with rich tomato ragù and shaved aged Parmigiano Reggiano on an ivory dish.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKYsMmf019AB2NkGl5P9pqI3s4ZngKKgEV79ztc5lrE7DFZFgBwfIdTR8MLTPC3l0wxJJO23Oq_HDD2c6X-xB625M3OGTof8wpVZ_xw9jZBk-HfC4bvQGTe3WnJB57N_L34GhlT5XXt6hC_6V4hc5HhVmQnTxfM5_UdAg5ZjS0Wz1F7iONn3R_ZgGeTuwSY6WwuGko9syYjo_oM8XEj0HRXp9KoluD2D74FfB8WlR6vD2z2SVj_gs-',
    colSpan: ''
  },
  {
    id: 'deck-oven',
    title: 'Fresh From The Deck Oven',
    subtitle: 'Hearth-Baked Lasagna',
    caption: 'Overhead angle of freshly baked golden layered lasagna straight from the deck oven with crispy browned mozzarella cheese edges and rich sauce bubbling.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmQsLcaU0yOpva2O46avAutJ6DQjK7EvbJbqGr8bonfDl7l7eLqtmNrhTQ8VmpLVXQxedE5Zd4WazTwp4m9ySY0DMQ3X4c6wEuMO2yM7mjKYoexh3IUOXBOvbzc9fSVdJR0s-eOt0ifcveL3vgDrc7xAV0F-FH5ttaS83SwWq8jt7nc01gVZ6PiKXn54P0QhG-uljBwxeUF9zMQAE5yA9tKk0_J6Hy7NksfrWma4BP5hxxnuQgojHl',
    colSpan: 'md:col-span-2'
  },
  {
    id: 'dessert-wine',
    title: 'House Dolci & Regional Wine',
    subtitle: 'The Sweet Finale',
    caption: 'Decadent chocolate dessert served with fresh whipped cream and a glass of rich red Italian Chianti wine on polished dark wood.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhIB0ZUDUkjp87HETz6wIerozAxfUvbYGqKfW7F-0dSsjZE-o3nW8wa-jaFOFf36jtbysOnY9fsPuqGLPgQkro-oEldPqrJdpeFVv97HEr6pDH43t9Kis5YP2Ga22hjUvmTW9h2OgI1tMo-KPVmB8sWbOkV6wzaU5bZitT3inkvdzhEQ8XEjOruh5lQ9vWG-6LuvHrSKu_KZEF2X37LapkMy2azPAx6KD7_7O8hKsDTUU2PCJaUjt4',
    colSpan: ''
  }
];
