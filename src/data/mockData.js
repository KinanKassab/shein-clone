// Mock product data
// Note: Category icons should be PNG files placed in public/icons/categories/ folder
// Or update these paths to point to your icon image URLs
export const categories = [
  // Men Category
  {
    id: 1,
    name: 'Men',
    icon: '/icons/categories/men.png', // Place PNG file in public/icons/categories/men.png
    fallbackIcon: '👔',
    subcategories: ['Sweaters', 'Pants', 'Shirts', 'Jackets', 'Accessories', 'Shoes', 'Bags'],
  },
  // Women Category
  {
    id: 2,
    name: 'Women',
    icon: '/icons/categories/women.png', // Place PNG file in public/icons/categories/women.png
    fallbackIcon: '👗',
    subcategories: ['Sweaters', 'Pants', 'Shirts', 'Jackets', 'Accessories', 'Shoes', 'Bags', 'Makeup', 'Skirts', 'Dresses'],
  },
  // Children Category
  {
    id: 3,
    name: 'Children',
    icon: '/icons/categories/children.png', // Place PNG file in public/icons/categories/children.png
    fallbackIcon: '👶',
    subcategories: ['Sweaters', 'Pants', 'Shirts', 'Jackets', 'Accessories', 'Shoes', 'Bags'],
  },
  // Baby Category
  {
    id: 4,
    name: 'Baby',
    icon: '/icons/categories/baby.png', // Place PNG file in public/icons/categories/baby.png
    fallbackIcon: '👶',
    subcategories: ['Sweaters', 'Pants', 'Shirts', 'Jackets', 'Accessories', 'Shoes', 'Bags'],
  },
  // Electronics Category
  {
    id: 5,
    name: 'Electronics',
    icon: '/icons/categories/electronics.png', // Place PNG file in public/icons/categories/electronics.png
    fallbackIcon: '📱',
    subcategories: ['Mobile Phones', 'Laptops', 'Phone Cases', 'Cables'],
  },
  // Cars Category
  {
    id: 6,
    name: 'Cars',
    icon: '/icons/categories/cars.png', // Place PNG file in public/icons/categories/cars.png
    fallbackIcon: '🚗',
    subcategories: [],
  },
  // Home Category
  {
    id: 7,
    name: 'Home',
    icon: '/icons/categories/home.png', // Place PNG file in public/icons/categories/home.png
    fallbackIcon: '🏠',
    subcategories: [],
  },
];

export const products = [
  {
    id: '190526205',
    name: 'Manfinity EMRG Men\'s Solid Color Drawstring Waist Pocket Casual Loose Fit Sweatpants Grey Sweatpants Baggy Sweatpants Grey Joggers Men Pro Club Sweat Pants Long Pants Sweat Pants Man Grey Baggy Sweatpants,Baggy Pants,Track Pants,Jogging,Baggy',
    category: 'Men',
    subcategory: 'Pants',
    price: 357650,
    originalPrice: 429180,
    link: 'https://www.shein.com/a-p-190526205.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/10/03/176006560528a581f4badae288dfa2cf27b300c59b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/10/64/1760065620198878933288414648ec996e6f91568b.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 10
  },
  {
    id: '24061300',
    name: 'Manfinity Mode Men Slant Pocket Suit Pants Without Belt',
    category: 'Men',
    subcategory: 'Pants',
    price: 303830,
    originalPrice: 364596,
    link: 'https://www.shein.com/a-p-24061300.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/10/06/76/169656534558ff800d0ed278203a266d3a9138ef60_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/10/06/f5/16965653580a454831e26aea5f6d2a4773721b47b8.jpg'
    ],
    inStock: true,
    rating: 4.73,
    reviews: 1001
  },
  {
    id: '61407026',
    name: 'Men\'s Y2K Straight Leg Washed Casual Jeans, Minimalist Black Denim Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 431710,
    originalPrice: 518052,
    link: 'https://www.shein.com/a-p-61407026.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/05/22/a2/1747882709c6800a7dfd6230912a06469cb834c836_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/05/22/af/174788272623c6be97f90f2f039e759f087ff1fe6e.png'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 1001
  },
  {
    id: '138185825',
    name: '1pc Men\'s Solid Color Simple Versatile Knit Pants, Suitable For Sports & Casual Wear, Fashionable & Comfortable, Great Autumn Gift For Boyfriend Or Husband',
    category: 'Men',
    subcategory: 'Pants',
    price: 270135,
    originalPrice: 324162,
    link: 'https://www.shein.com/a-p-138185825.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/spmp/2025/08/14/5d/1755185061e5da2c418f48685aae8ff8269a5fbeff_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/20/2e/1766240471a35fafb97d77de5e3d222425fcc6201c.jpg'
    ],
    inStock: true,
    rating: 4.71,
    reviews: 827
  },
  {
    id: '94878904',
    name: 'Manfinity Homme Men\'s Designer Dress Pants, Fashion Casual Formal Black Suit Pants, Elegant Draping Effect',
    category: 'Men',
    subcategory: 'Pants',
    price: 330740,
    originalPrice: 396888,
    link: 'https://www.shein.com/a-p-94878904.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/04/c1/1754299747c7037955fff052ee4a61e1e65dffc6bc_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/04/db/1754299755365a88e4536f754dd07ab6cb40a07752.jpg'
    ],
    inStock: true,
    rating: 4.39,
    reviews: 705
  },
  {
    id: '59811699',
    name: 'Men\'s Casual Trousers For Spring, Summer, Autumn And Winter, With Pockets And Zippers, Suitable For Daily Outings, Sports, Running, Hiking, Traveling And Casual Wear',
    category: 'Men',
    subcategory: 'Pants',
    price: 195960,
    originalPrice: 235152,
    link: 'https://www.shein.com/a-p-59811699.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/16/2e/1760617449b6cc72794d294197e1d543dac91f744d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/02/28/36/1740754252a6fc94df5791fe15806e8c8a2d0d43c5.png'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '29316438',
    name: 'Calvornis Men\'s Solid Color Suit Pants With Oblique Pockets, Belt Not Included, Old Money Style',
    category: 'Men',
    subcategory: 'Pants',
    price: 384560,
    originalPrice: 461472,
    link: 'https://www.shein.com/a-p-29316438.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/28/93/17616219980266a1042098fc6b759ae9fad7666e0c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/01/18/d1/1705569734a45be019f357a1dbce8c64245b282258.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 1001
  },
  {
    id: '57477834',
    name: 'Classic Design Men\'s Trousers, Solid Color Stretch Formal Pants For Business Occasions In Spring And Summer, Elegant Luxury Style',
    category: 'Men',
    subcategory: 'Pants',
    price: 182505,
    originalPrice: 219006,
    link: 'https://www.shein.com/a-p-57477834.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/spmp/2025/05/02/f4/1746179285e2ca820295812c9c7a4eb733649ba21f_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/p/abc/2025/05/02/61/174617929180a7f2d9b374d19605566aa683041c4f.png'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 961
  },
  {
    id: '117546147',
    name: '2pcs Men\'s Casual Solid Color Shirt With Dual Pockets & Collar + Pants Set, Lightweight Sporty Vacation Outfit, Spring/Autumn',
    category: 'Men',
    subcategory: 'Pants',
    price: 519340,
    originalPrice: 623208,
    link: 'https://www.shein.com/a-p-117546147.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/12/e7/17523233863dc8cde4cd5bdc679f14a5eb4ea11d2b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/07/12/9b/17523234046852126f0510d1bdc8fb5473805248b0.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '58604144',
    name: 'Comfortable Loose Fit Men\'s Sweatpants - Black Joggers, Soft Pockets, Boyfriend Style, Drawstring Waist, Solid Color Design, Suitable For All Seasons, Ideal For Casual, Relaxation And Outdoor Activities, Lightweight Athletic Pants, Suitable For Workout, Running, Fitness And Training',
    category: 'Men',
    subcategory: 'Pants',
    price: 209530,
    originalPrice: 251436,
    link: 'https://www.shein.com/a-p-58604144.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/02/20/53/17400432420774c2aaea5002fc8f02738bb395d59f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/02/20/9f/17400432606c7b672595240119dd273911b4817aac.png'
    ],
    inStock: true,
    rating: 4.72,
    reviews: 713
  },
  {
    id: '50597261',
    name: 'Calvornis Manfinity Bizformal Men\'s Straight Leg Casual Trousers, Retro British Style Versatile Pants,Boyfriend Gifts,Valentine\'s Day Men,White Men Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 337410,
    originalPrice: 404892,
    link: 'https://www.shein.com/a-p-50597261.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/12/16/28/1734335675ad9085b332b0eae92aa4df171f8ae9d6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/12/16/43/1734335701735ce7e56941ca38b7e92b588c8c32d8.jpg'
    ],
    inStock: true,
    rating: 4.67,
    reviews: 1001
  },
  {
    id: '59015508',
    name: 'HEHCN Men\'s Pocket Wide Leg Casual Loose Jeans, Retro Vintage Blue Streetwear Pants, Suitable For Gift To Husband, Boyfriend',
    category: 'Men',
    subcategory: 'Pants',
    price: 478860,
    originalPrice: 574632,
    link: 'https://www.shein.com/a-p-59015508.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/02/27/c6/1740659422557d1eda5d6d25efd300df41bf1019e4_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/02/27/f8/174065939938feaf800a5f2e9aafb5579bed966e02.png'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 728
  },
  {
    id: '165184627',
    name: 'Men\'s Casual Sweatpants, Loose Straight-Leg Fit, Draping Effect, Suitable For Lounging And Outdoor Activities. Also Can Be Gifted As Couples\' Present. Made Of 100% Polyester Fabric, With Drawstring Waistband For Adjustable Fit, Available In Multiple Colors.',
    category: 'Men',
    subcategory: 'Pants',
    price: 216200,
    originalPrice: 259440,
    link: 'https://www.shein.com/a-p-165184627.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/19/7d/17582728600a50b0165632c5f22b13ea4e971ecf31_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/09/02/6c/17567952045585e28f2685dfc4074076bfd9aee323.png'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 137
  },
  {
    id: '53604828',
    name: '1pc Men\'s Multi-Pocket Cargo Pants, Casual Loose Fit Trousers For Beach, Commute, Workout, Outdoor, Fitness, Jogging, Suitable For Spring And Autumn, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 276805,
    originalPrice: 332166,
    link: 'https://www.shein.com/a-p-53604828.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/04/cc/1759569352454a502e47b04681218764866feff1ed_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/03/11/22/1741675554f8bd61a842534ee31cd7c2284b083f20.png'
    ],
    inStock: true,
    rating: 4.67,
    reviews: 520
  },
  {
    id: '27015752',
    name: 'Men\'s Straight Knit Pants, Loose Fit Casual Sweatpants, Versatile For Spring And Autumn',
    category: 'Men',
    subcategory: 'Pants',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-27015752.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/11/30/b2/170133269435df73430aa0d65aeeccdac10b8f85b0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/11/30/04/170133270401dfd1a3c0095eb6e435ff9c6a4681c4.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 1001
  },
  {
    id: '82727713',
    name: 'Manfinity Sport Corelite Men\'s Pentagram Print Drawstring Waist Casual Sports Pants Men Sport Clothes Workout Clothes Running Pants Fall Breathable',
    category: 'Men',
    subcategory: 'Pants',
    price: 243110,
    originalPrice: 291732,
    link: 'https://www.shein.com/a-p-82727713.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/20/54/17477403609371eea3d559524d45f6dd9fc1507c89_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/20/5a/17477403665a90a0d12821964a0915671bc1a3993c.jpg'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 301
  },
  {
    id: '59962087',
    name: 'New Draped Straight Men Pants Fashion Business Loose CasualWide-Leg Suit Pants,Pleated Trousers With Pockets For Boyfriend Husband',
    category: 'Men',
    subcategory: 'Pants',
    price: 344195,
    originalPrice: 413034,
    link: 'https://www.shein.com/a-p-59962087.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/03/19/22/174237198349540ed11b4629b9436ce82d5ab68b65_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/03/01/62/1740799545c7fce33fa15f9385f85be37d0d91757f.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 400
  },
  {
    id: '46107879',
    name: 'Vintage American Style Corduroy Straight Leg Casual Pants, Fashionable & Versatile, Khaki Colored For Men, For Fall Winter',
    category: 'Men',
    subcategory: 'Pants',
    price: 337410,
    originalPrice: 404892,
    link: 'https://www.shein.com/a-p-46107879.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/30/e5/1759233580ac89933fa2fe5b198e860a34d6b22119_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/30/de/1759233574502f607244c9907049815cd378fbb469.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 1001
  },
  {
    id: '27673818',
    name: 'Manfinity Homme Men\'s Solid Color Trousers, Men\'s Slim Fit Dress Pants, Men\'s Stretchy Dress Pants, Men\'s Gray Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 290260,
    originalPrice: 348312,
    link: 'https://www.shein.com/a-p-27673818.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/12/14/4a/1702518101497d6635ae9f347404db15356d70f6b3_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/12/14/43/1702518117efd120728ba46a61bf8739fb32bdb786.jpg'
    ],
    inStock: true,
    rating: 4.73,
    reviews: 1001
  },
  {
    id: '152348021',
    name: 'Manfinity Hypemode Men Drawstring Waist Wide Leg Sweatpants Wide Leg Sweatpantswide Leg Sweatpants Menwide Leg Joggersbaggy Pants Y2kblack Baggy Pants Baggy Sweatpants',
    category: 'Men',
    subcategory: 'Pants',
    price: 337410,
    originalPrice: 404892,
    link: 'https://www.shein.com/a-p-152348021.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/03/4d/1756863770294efce0b4d12a9b8ab4a4ccdbd6414d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/03/f7/175686377858429abd8100acb49595b95041a673d2.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 1001
  },
  {
    id: '327576582',
    name: 'TOKVUE Men\'s Old Money Business Casual Trousers,High Waist Designer Men\'s Wide Leg Pleated Loose Casual Pants,Streetwear Hot Selling INS Style Pants,Daily Boyfriend/Husband Gift, Anniversary Gift, Fold Pleated Wide Leg Pants,Christmas Outfits,Fall&Winter',
    category: 'Men',
    subcategory: 'Pants',
    price: 384560,
    originalPrice: 461472,
    link: 'https://www.shein.com/a-p-327576582.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/15/1d/17657288093a89962d561e9720daf88fe414224458_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/15/a1/17657288221a4d157202550751fb4d80c9207f20ff.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 191
  },
  {
    id: '114145183',
    name: 'Manfinity Homme Men\'s Thicker Wide Leg Pleated Trousers With Pockets, Autumn, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 357650,
    originalPrice: 429180,
    link: 'https://www.shein.com/a-p-114145183.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/8b/1759988978ee781746da6a2b79a47f29be0196fa25_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/b3/175998899081beb6da9e6c496cb7dedd2de16eefb1.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 142
  },
  {
    id: '48577056',
    name: 'Claim Dot Men\'s Solid Color Pleated Pocket Loose Straight Casual Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 297045,
    originalPrice: 356454,
    link: 'https://www.shein.com/a-p-48577056.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/12/02/94/1733116449f643854bc612fa80d7c2906454855a3d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/12/02/5f/1733116465343095d0dadc9e40040babb45f445abf.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 1001
  },
  {
    id: '327684067',
    name: 'Manfinity Homme Men\'s Casual Drawstring Waist Flap Pocket Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-327684067.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/16/b7/1765878123471b1fea849aa7d90d66a5badc5a86ef_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/16/40/17658781330338d996b7d10dd152f0b78e5bc4c6a8.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 679
  },
  {
    id: '165890779',
    name: 'Men\'s Old Money Men Casual Business Suit Trousers',
    category: 'Men',
    subcategory: 'Pants',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-165890779.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/08/16/c4/175532438355b7f049c7fdbe7c7d7d30334078e441_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/08/16/fe/17553244305c667c7c731df21fb8f9b685da1aff67.jpg'
    ],
    inStock: true,
    rating: 4.51,
    reviews: 147
  },
  {
    id: '65223510',
    name: 'Men\'s Casual Solid Color Drawstring Waist Sports Wide Leg Pants, All Seasons, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 371105,
    originalPrice: 445326,
    link: 'https://www.shein.com/a-p-65223510.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/01/2a/17645680513785735a194ac094a988dd7a0ce61e77_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/01/f8/1764568062525f85f7f306bf33071036cc8889ed00.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 877
  },
  {
    id: '26115776',
    name: 'Claim Dot Men\'s Solid Color Casual Everyday Trousers Men\'s Streetwear Pants, Boy Friend Gifts, For Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 371105,
    originalPrice: 445326,
    link: 'https://www.shein.com/a-p-26115776.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/10/08/68/1696727882593865a75325ce05a22afbb54dfe6528_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/10/08/cd/1696727899d45dc4b503e64d6f1da9957473237bc4.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 1001
  },
  {
    id: '141303311',
    name: 'Manfinity Hypemode Men\'s Loose Fit Casual Sweatpants, Versatile Street Style Joggers Suitable For Streetwear, Casual Daily Wear, Weekend Outings, Music Festivals, Social Gatherings And More. This Pant Is An Essential Versatile Piece In A Man\'s Wardrobe, Making It A Great Gift For Boyfriends Or Husbands. Oversized Sweatpants  Sweats Sweatpants Wide For Men Pro Club Sweat Pants Grey Baggy Sweatpants',
    category: 'Men',
    subcategory: 'Pants',
    price: 330740,
    originalPrice: 396888,
    link: 'https://www.shein.com/a-p-141303311.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/18/8f/1755482177bfc6f6dd6642701e427ad8d600232d52_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/18/8c/17554821805d4072186e7985abb5d538a6b8b6e1cb.jpg'
    ],
    inStock: true,
    rating: 4.52,
    reviews: 741
  },
  {
    id: '41465196',
    name: 'Manfinity Homme Men\'s Casual Solid Color Tapered Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 350980,
    originalPrice: 421176,
    link: 'https://www.shein.com/a-p-41465196.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/28/27/1756371521cfc803b20526ccd29661808b27c05731_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/28/77/175637153263a96e39e22e9ce206a78b32e3a18217.jpg'
    ],
    inStock: true,
    rating: 4.64,
    reviews: 1001
  },
  {
    id: '299145244',
    name: 'SWAVVY Men\'s Fashionable Plaid Loose Casual Pants With Belt Loops',
    category: 'Men',
    subcategory: 'Pants',
    price: 384560,
    originalPrice: 461472,
    link: 'https://www.shein.com/a-p-299145244.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/10/0d/17653727372377e31323cf42d276a41e2b83c0045a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/22/d9/1763782738acd0b9988094a1fd47f4e12c569b7cd3.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 220
  },
  {
    id: '52933030',
    name: 'Men\'s Drawstring Waist Corduroy Straight Leg Casual Pants, Fashion Retro Style Sweatpants For Spring/Autumn',
    category: 'Men',
    subcategory: 'Pants',
    price: 243110,
    originalPrice: 291732,
    link: 'https://www.shein.com/a-p-52933030.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/17/77/1763370243b65ceb106078d46109962d859ab1b007_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/03/06/4e/1741243775ff7a17eb706f6315dca8bcc8a9abbb26.png'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 944
  },
  {
    id: '39683657',
    name: 'Claim Dot Men\'s Street Collegiate Style Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 303830,
    originalPrice: 364596,
    link: 'https://www.shein.com/a-p-39683657.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/12/fa/1754954780b24c3cba39e2941f03211730cbb4c0b5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/12/aa/1754954793e129f4f9f2aec16251fb6e0434bf23c1.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '54217754',
    name: 'Calvornis Men\'s Solid Color Pleated Straight Leg Casual Pants With Pockets, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 350980,
    originalPrice: 421176,
    link: 'https://www.shein.com/a-p-54217754.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/06/82/1746505475852b27ec1545b61f1626e41bc576fb7f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/06/bf/1746505483d26cb14b3b40ecb7237ca0cbd726a65e.jpg'
    ],
    inStock: true,
    rating: 4.69,
    reviews: 726
  },
  {
    id: '68722480',
    name: 'Manfinity Homme Men\'s Drawstring Waist Tapered Casual Cargo Jogger Pants, Versatile, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 297045,
    originalPrice: 356454,
    link: 'https://www.shein.com/a-p-68722480.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/21/cc/1745219447898115aee9d29aeac3b36c43250899e7_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/21/3f/1745219455e039f14cdf4d407bcfc8ce3fe5262ed3.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 1001
  },
  {
    id: '121829685',
    name: '4pcs Men\'s Solid Color Basic Casual Sweatpants With Pockets And Drawstring Waist, Suitable For Spring, Autumn, Summer Street Fashion, Jogging, Travel, Vacation, Outdoor Commute, And Camping, Ideal Gift For Husband Or Boyfriend',
    category: 'Men',
    subcategory: 'Pants',
    price: 869515,
    originalPrice: 1043418,
    link: 'https://www.shein.com/a-p-121829685.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/04/79/1751638618b49af372c757b8fe4c145cb4e6ddd931_thumbnail_405x552.jpg'
    ],
    inStock: true,
    rating: '4.9',
    reviews: 117
  },
  {
    id: '96024822',
    name: 'Men\'s Solid Color Sports Pants Loose American Casual Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 216200,
    originalPrice: 259440,
    link: 'https://www.shein.com/a-p-96024822.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/04/c4/174903956821cebb188479363349210377a82c2acf_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/06/04/8d/1749039269e8f3d972870b7906869905377e03aef5.png'
    ],
    inStock: true,
    rating: 4.73,
    reviews: 384
  },
  {
    id: '36100953',
    name: 'Manfinity Homme Men\'s Simple Solid Color Casual Everyday Cargo Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 364435,
    originalPrice: 437322,
    link: 'https://www.shein.com/a-p-36100953.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/06/03/58/1717379348fa4e316bf59c47ac959e1b556b16eb58_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/06/03/a0/17173793746511ca8270002f78fe359e716d617391.jpg'
    ],
    inStock: true,
    rating: 4.72,
    reviews: 1001
  },
  {
    id: '99733564',
    name: 'Men\'s Corduroy Casual Straight Leg Pants, Personalized Printed Loose Simple Versatile Sweatpants For Spring & Autumn',
    category: 'Men',
    subcategory: 'Pants',
    price: 330740,
    originalPrice: 396888,
    link: 'https://www.shein.com/a-p-99733564.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/04/11/17516154026232447b2984cbb52faefc4a70071cda_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/07/04/18/1751615524cdfdca4c71dd5ad2623aa8c42b73f574.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 544
  },
  {
    id: '46171104',
    name: 'Retro American Style Corduroy Straight Leg Pants, Men Casual Khaki Long Trousers, For Fall Winter',
    category: 'Men',
    subcategory: 'Pants',
    price: 337410,
    originalPrice: 404892,
    link: 'https://www.shein.com/a-p-46171104.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/30/ad/175923355680d262d0a34a523becbb02225be036e7_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/30/b2/1759233566723eeee8361e6d365f59702c0ee818eb.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 1001
  },
  {
    id: '27248413',
    name: 'Manfinity Bizformal Men\'S Skinny Fit Business Suit Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 438495,
    originalPrice: 526194,
    link: 'https://www.shein.com/a-p-27248413.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/08/01/b7/172248965556cdbe20dddd59fded46ec4e0abeebeb_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/03/05/c3/1709606145b10e739d1fc508a248d74f6dbf8ed266.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 1001
  },
  {
    id: '319527964',
    name: 'Core Aspect Old Money Formal Men\'s Solid Color Zip-Up Straight Leg Casual Cropped Pants, Autumn,,British And Italian Neapolitan Trousers For Autumn And Winter, High-Waisted Straight Leg, Light Grey With Adjustable Waistline, Straight Leg, Drape Men\'s Casual Suit Long PantsOld Money Style, Casual And Simple Style, Urban Light Mature Style, British Gentleman Style, Business Casual Style',
    category: 'Men',
    subcategory: 'Pants',
    price: 418255,
    originalPrice: 501906,
    link: 'https://www.shein.com/a-p-319527964.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/08/40/17651710689d9d8ac1db97434b9668bd41c0c4477d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/08/3a/1765171084ea3b795f42e7845ce8f04970a0fc43a3.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 57
  },
  {
    id: '131696612',
    name: '(Autumn/Winter) Fashionable Baggy Pants For Running, Workout, Gym, Camping, Travel, Streetwear, Breathable Knit Fabric, Casual Sports Pants, Straight Leg Trousers, Essential For Boyfriend Style, Basketball Pants, Thin Black Joggers',
    category: 'Men',
    subcategory: 'Pants',
    price: 243110,
    originalPrice: 291732,
    link: 'https://www.shein.com/a-p-131696612.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/01/68/1748770956a037d516b4c55654997abd60ae9c06a0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/08/21/c0/175578872676deb7c702e5c405c485f8d0c3bf5071.png'
    ],
    inStock: true,
    rating: 4.41,
    reviews: 181
  },
  {
    id: '64091088',
    name: 'Men\'s Linen Pants, Lightweight Drawstring Beach Breathable Trousers, Elastic Waist Linen Rope Men\'s Pants, Suitable For Men\'s Vacation, Summer Casual Commuting Loose Street Wear Clothing',
    category: 'Men',
    subcategory: 'Pants',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-64091088.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/05/12/2f/174701544665a7d5695bcba09cac1f170a7314c49f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/05/12/53/17470154850b646e99d47a4ec22c23f881c07ac451.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 1001
  },
  {
    id: '50505809',
    name: 'Manfinity Homme Men\'s Casual Washed Cargo Denim Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 539465,
    originalPrice: 647358,
    link: 'https://www.shein.com/a-p-50505809.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/12/16/19/17343123583df4cdb22c98280f25efceea3136559e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/12/16/62/17343123837b23d0fbfd1e487d91aadab3ac54df0e.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 1001
  },
  {
    id: '39466848',
    name: '2pcs/Set Men Corduroy Straight Leg Casual Pants, Loose Fit Versatile Sweatpants For Spring Autumn',
    category: 'Men',
    subcategory: 'Pants',
    price: 573160,
    originalPrice: 687792,
    link: 'https://www.shein.com/a-p-39466848.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/08/10/15/17232791569db1befeadc3189b37c70d790011b307_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/07/07/91/17203354169ffe4c2bd517655f0ec5bc3bbc6cef96.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 1001
  },
  {
    id: '157335526',
    name: 'Corduroy Casual Pants, Unisex Straight Leg Trousers, Fashion Solid Color, Elegant Business Commute Formal Wear, Spring & Autumn',
    category: 'Men',
    subcategory: 'Pants',
    price: 377890,
    originalPrice: 453468,
    link: 'https://www.shein.com/a-p-157335526.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/22/0b/17637975455a9f589063bce925d0af625339a953ce_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/22/d8/1763797567ce17c26696bc7451ef0a4f9146bdfe1d.jpg'
    ],
    inStock: true,
    rating: '4.4',
    reviews: 25
  },
  {
    id: '40593691',
    name: 'Claim Dot Men\'s Solid Color Casual Everyday Corduroy Trousers , Men\'s Streetwear Pants, Boy Friend Gifts, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 371105,
    originalPrice: 445326,
    link: 'https://www.shein.com/a-p-40593691.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/08/13/fb/1723515269f2cb205c4eae1055b884cda4ae38277a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/08/13/74/17235152929e98357723890515801b0a7614ba2991.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 1001
  },
  {
    id: '71845173',
    name: '1 Pc Men\'s Classic Business Trousers, Solid Color 4-Season Slightly Elastic Suit Pants, Straight Fit Casual Dress Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 209530,
    originalPrice: 251436,
    link: 'https://www.shein.com/a-p-71845173.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/04/26/d4/174566891782c9a2f3c85380b7887fd7cfd8e0fb5e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/04/26/7f/17456691789cc0d9bfe7dc35adcef50f9eeaa7a260.png'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 802
  },
  {
    id: '50999745',
    name: 'Manfinity Homme Men\'s Solid Color Pocketed Casual Straight Leg Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 310500,
    originalPrice: 372600,
    link: 'https://www.shein.com/a-p-50999745.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/25/95/174555016695b8f9f3836e698d35f8afcae4ddefa9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/25/2d/1745550177f9b358521dcc1c989a86c1774410e741.jpg'
    ],
    inStock: true,
    rating: 4.69,
    reviews: 1001
  },
  {
    id: '14963143',
    name: 'Manfinity Homme Men Plaid Print Slant Pocket Suit Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-14963143.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/11/f2/17628252445848a4ff2ce0b91e3a4c581f3a224864_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/11/b3/17628252529c83a61a2dba12b95fe0ed79bdbbb7b1.jpg'
    ],
    inStock: true,
    rating: 4.73,
    reviews: 1001
  },
  {
    id: '106284358',
    name: '1pc Men\'s Solid Color Simple Versatile Knit Pants, Suitable For Sports & Casual Wear, Fashionable & Comfortable, Great Autumn Gift For Boyfriend Or Husband',
    category: 'Men',
    subcategory: 'Pants',
    price: 276805,
    originalPrice: 332166,
    link: 'https://www.shein.com/a-p-106284358.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/08/14/dc/175518536884b20472835a684c2619ac0ffdc69a57_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/08/16/6c/175532295239845d1a7f7d80d5068e3f67f9c63c05.jpg'
    ],
    inStock: true,
    rating: 4.71,
    reviews: 827
  },
  {
    id: '162144885',
    name: 'Unisex Corduroy Loose Wide Leg Cargo Pants, Casual Straight Leg Trousers For Spring Autumn, Suitable For Streetdance, Workout, Fitness, Simple And Fashionable, With Drawstring Waist',
    category: 'Men',
    subcategory: 'Pants',
    price: 425040,
    originalPrice: 510048,
    link: 'https://www.shein.com/a-p-162144885.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/22/e9/1763780627703b53bc71cd0e5b01d686b4644f7b83_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/22/f2/1763780671fcae536e110e6a4618a6730c3b45b11b.jpg'
    ],
    inStock: true,
    rating: '4.7',
    reviews: 42
  },
  {
    id: '48580609',
    name: 'Calvornis Men\'s Casual Versatile Solid Color Suit Pants Men White Dress Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 323955,
    originalPrice: 388746,
    link: 'https://www.shein.com/a-p-48580609.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/11/25/1d/173250541894e045d9673ac7b5ef0c3d38d5e2e6e8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/11/25/6d/17325054264eb8b1cbb9047c5b36c7b444609d0dbd.jpg'
    ],
    inStock: true,
    rating: 4.58,
    reviews: 428
  },
  {
    id: '35354577',
    name: 'Manfinity Homme Men\'s Plain Straight-Legged Khaki Pants, For Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 384560,
    originalPrice: 461472,
    link: 'https://www.shein.com/a-p-35354577.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/06/03/fb/17173963050f9cf054c17e18b93c2f3c4ab3af651c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/06/03/5c/171739633530ddaf9e0ec2299d5ccacf91f51f057c.jpg'
    ],
    inStock: true,
    rating: 4.64,
    reviews: 1001
  },
  {
    id: '98789089',
    name: 'Manfinity Sport Corelite Men\'s Graphic Print Drawstring Waist Pocket Casual Jogger Pants Baggy Gym Clothes Gym Sweats Goth Gym Clothes Comfortable Super Soft Contrast Binding Baggy For Gym Slacks',
    category: 'Men',
    subcategory: 'Pants',
    price: 256680,
    originalPrice: 308016,
    link: 'https://www.shein.com/a-p-98789089.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/5f/17609437767451610e7be5ce961c635ed99424e980_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/73/1760943789b37e96df44e68475b939e50a3d3c29f4.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 163
  },
  {
    id: '42896433',
    name: 'Manfinity Hypemode Men\'s Solid Color Pocket Casual Simple Long Pants, Daily Wear',
    category: 'Men',
    subcategory: 'Pants',
    price: 478860,
    originalPrice: 574632,
    link: 'https://www.shein.com/a-p-42896433.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/02/25/9c/174048571280550d19eb1da22ee0cedd5c8986fca2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/02/25/08/1740485749dafc39a1c314ab9978987427c8ba14cf.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '62215031',
    name: 'Men\'s Sports Casual Pants; Elastic Waistband; With Drawcord; Elastic Waist; With Pockets; Elastic Ribbed Ankle Cuffs; For All Seasons Outdoor Running, Ankle-Length Cropped Fitness Pants, Suitable For Gifts To Husbands, Boyfriends, Simple Sports Pants In Linen Gray',
    category: 'Men',
    subcategory: 'Pants',
    price: 270135,
    originalPrice: 324162,
    link: 'https://www.shein.com/a-p-62215031.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/05/19/8d/1747667047d86111c1ca274be1c119f76a54f2d104_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/03/17/19/17422109956ec3508aa4d399bb59dfae72ee513724.png'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 116
  },
  {
    id: '94825732',
    name: 'Men\'s Spring Autumn Corduroy Casual Straight Leg Pants With Printed Pattern, Loose Fit And Versatile',
    category: 'Men',
    subcategory: 'Pants',
    price: 323955,
    originalPrice: 388746,
    link: 'https://www.shein.com/a-p-94825732.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/28/09/17536803388a17f8f111bfa16dc057145af8d960ce_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/07/28/6d/1753680345284826bbc19be7e25a294d7477f50e7a.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 544
  },
  {
    id: '178773215',
    name: 'Unisex Camouflage Dry Leaf Print Straight Leg Pants, Streetwear Style, Loose Fit, Suitable For Street Dance, Sports And Outdoor Activities',
    category: 'Men',
    subcategory: 'Pants',
    price: 364435,
    originalPrice: 437322,
    link: 'https://www.shein.com/a-p-178773215.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/18/b6/1763453003c7044ccb413288eb6582c1ec57764bac_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/p/abc/2025/11/18/c7/176345317156d83c7fd697bfaa1bf65e7b23911a8f.png'
    ],
    inStock: true,
    rating: '4.7',
    reviews: 16
  },
  {
    id: '152077087',
    name: 'STYNVO Manfinity Streetrush Men\'s 2 In 1 Zipper Hem Street Fashion Drawstring Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 371105,
    originalPrice: 445326,
    link: 'https://www.shein.com/a-p-152077087.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/13/03/17550805727f7f4b1350ad1e05e250c932c8f270d3_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/13/97/1755080579fac4584b702d919a1e30028cdab6a0f1.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 453
  },
  {
    id: '62558600',
    name: '1pc Men\'s Drawstring Waist Sports Pants, Suitable For Spring And Summer',
    category: 'Men',
    subcategory: 'Pants',
    price: 148810,
    originalPrice: 178572,
    link: 'https://www.shein.com/a-p-62558600.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/03/06/0f/174124065060f0d3e99874c446a8f7ed1000d7634f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/03/06/1b/1741246221e8c18f8fec7ab0c4750f781d6ad52df1.png'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 249
  },
  {
    id: '70212853',
    name: 'Claim Dot New Hot-Selling Men\'s Black Straight-Leg Casual Trousers, Featuring Button Accents. Crafted In The Old-Money Style With Pleated Silhouette, These Pants Boast A Draped, Relaxed Fit And Minimalist Design. Suitable For Daily Wear, Year-Round Styling, And INS-Worthy Outfits, They Are Ideal Casual Trousers For Dating Looks And Photo Ops. A Must-Have Gift For Self-Use Or For Your Boyfriend/Husband. Men\'s Casual Essential.',
    category: 'Men',
    subcategory: 'Pants',
    price: 337410,
    originalPrice: 404892,
    link: 'https://www.shein.com/a-p-70212853.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/04/c0/176224078602a7713f4e42cc5b832951bd1668b10a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/25/f0/1745573358c1d2e71824956c35737a629e778339cb.jpg'
    ],
    inStock: true,
    rating: 4.69,
    reviews: 166
  },
  {
    id: '142278695',
    name: 'Manfinity Homme Men\'s Casual Versatile Commuting Solid Color Wide Leg Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 371105,
    originalPrice: 445326,
    link: 'https://www.shein.com/a-p-142278695.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/16/3d/1760591013f9519476e631d9dd7ef8e7dc9c67dccf_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/16/50/1760591021f569a7d9ffe22df03189ffabb9ac64b7.jpg'
    ],
    inStock: true,
    rating: 4.47,
    reviews: 197
  },
  {
    id: '218861757',
    name: 'Manfinity Homme Men\'s Dark Wash Denim Wide Leg Cargo Jeans Long Straight Leg Casual Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 532795,
    originalPrice: 639354,
    link: 'https://www.shein.com/a-p-218861757.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/8c/1761791798d864bd711db23f615acb93018a8e368e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/6b/1761791816c6ab9184389264bceaa652eea0cd3386.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 1001
  },
  {
    id: '317314933',
    name: 'SUMWON Casual Flared Fit Sweatpants With Side Stripes And Script Embroidery Drawstring Waist Fleece Lined Winter Comfort Pants For Daily Loungewear',
    category: 'Men',
    subcategory: 'Pants',
    price: 294515,
    originalPrice: 353418,
    link: 'https://www.shein.com/a-p-317314933.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/05/ba/1764901564c15a7579691f7141eba113cb3336e225_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/05/08/17649015777fea8e7e6e472a6d413a4c7d7a834b22.jpg'
    ],
    inStock: true,
    rating: '4.6',
    reviews: 136
  },
  {
    id: '61961998',
    name: 'Men\'s Drawstring Waist Solid Color Long Sports Pants, Basic Black Fitness Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 243110,
    originalPrice: 291732,
    link: 'https://www.shein.com/a-p-61961998.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/03/14/92/174194935750ac2de2fe8917fcbb6882a8c18a1729_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/03/14/36/17419493578e19c23bbe9b1287907611d94bd1c1fe.png'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 444
  },
  {
    id: '43870969',
    name: 'Manfinity Homme 2pcs Men Casual Solid Color Textured Short Sleeve Shirt And Drawstring Waist Loose Straight-Leg Pants Set, Men Two Pieces Outfits, Men Clothes, Cozy Outfits',
    category: 'Men',
    subcategory: 'Pants',
    price: 377890,
    originalPrice: 453468,
    link: 'https://www.shein.com/a-p-43870969.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/29/b7/17275741872eef8932a8621edce217a45d44cc311a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/29/cc/17275742085666557a18d97abadf8a1ec8c3a85b1a.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 1001
  },
  {
    id: '1774316',
    name: 'Manfinity Homme Loose Fit Men\'s Drawstring Waist Carrot Pants Long Slacks Plain Khaki Going Out, For Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 303830,
    originalPrice: 364596,
    link: 'https://www.shein.com/a-p-1774316.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/03/26/c3/1711449689485c501ec16f2a965bdba115f76057af_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/03/26/4f/171144970169660a2e0f46f514a55981d13882708b.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 1001
  },
  {
    id: '74339391',
    name: '1pc Men\'s Drawstring Waist Solid Color Long Sports Pants, Basic Black Fitness Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 209530,
    originalPrice: 251436,
    link: 'https://www.shein.com/a-p-74339391.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/03/06/a9/17412638379faf0f279a33bd3b3f383a390035c522_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/03/06/69/1741263857b0ff1698fb7484ed91830c4f43cb5aaf.png'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 610
  },
  {
    id: '45242459',
    name: 'Manfinity Homme Men\'s Plaid Print Pocket Formal Straight-Leg Suit Pants , Office Wear, Checkered Pants, Men Gray Pants, Plaid Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 323955,
    originalPrice: 388746,
    link: 'https://www.shein.com/a-p-45242459.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/10/31/8f/173034352405c0444d22b9da70db1efab064f87583_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/10/18/33/1729237974fce063bb9b8f44a26c0de7e09b7f13ed.jpg'
    ],
    inStock: true,
    rating: 4.73,
    reviews: 1001
  },
  {
    id: '231517171',
    name: 'Men\'s Casual Straight-Leg Trousers, Fashionable & Minimalist, Autumn/Winter',
    category: 'Men',
    subcategory: 'Pants',
    price: 142140,
    originalPrice: 170568,
    link: 'https://www.shein.com/a-p-231517171.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/17/12/1760713059faa3347eeb7578bae4965f0d766d3ff5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/17/6d/176071308346badcbefccc61b2547b3a81f66938ed.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 5
  },
  {
    id: '308815035',
    name: '1pc Men\'s Spring/Summer Multi-Pocket Solid Color Slim Fit Cargo Pants, Suitable For Beach, Holiday, Casual, Workout, Running, Outdoor, Leisure, Fitness, Jogging, Straight Leg Trousers, Fashionable Streetwear, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 270135,
    originalPrice: 324162,
    link: 'https://www.shein.com/a-p-308815035.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/6b/176431958750b52659105590f3bf0354630b6680c4_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/f8/176431959935b11944b0f0fae214dbf77588a958dc.jpg'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 1001
  },
  {
    id: '29091944',
    name: 'Manfinity LEGND Men\'s Chinese Dragon Printed Drawstring Waist Loose Cargo Pants, Going Out Long Baggy Pants, For Husband, Boyfriend Gifts, For Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 364435,
    originalPrice: 437322,
    link: 'https://www.shein.com/a-p-29091944.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/01/13/b8/17051214349a04c9792ec37f0412710104f7d10515_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/01/13/ef/170512145219696599b710ff0cd56db921d29ace5c.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '164899177',
    name: 'Men\'s Solid Color Drawstring Waist Pocket Casual Loose Sweatpants, Loose Fit Gray Sports Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 216200,
    originalPrice: 259440,
    link: 'https://www.shein.com/a-p-164899177.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/08/14/d2/17551523582b9f2ed4f4acd29bf8920f0afd165bd4_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/08/14/c7/1755152382364f07a09970e79ac8db8fe0ef51de97.png'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 230
  },
  {
    id: '146316147',
    name: '1pc Men\'s Multi-Pocket Solid Color Slim Fit Cargo Pants, Suitable For Spring/Summer Beach, Vacation, Daily Commute, Sports, Outdoor, Casual, Fitness, Running, Straight Leg Trousers, Versatile & Fashionable, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 323955,
    originalPrice: 388746,
    link: 'https://www.shein.com/a-p-146316147.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/19/a1/17635448676341cf5300c3e83e968913d0f5ba241d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/19/be/1763544872ca833d26b77335e3d329dbfe5a9b0821.jpg'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 1001
  },
  {
    id: '266777241',
    name: 'Men\'s Casual Pockets Wide Leg Loose Fit Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 310500,
    originalPrice: 372600,
    link: 'https://www.shein.com/a-p-266777241.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/28/78/17616321312452cf6f1308316034bfdde190bc630b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/10/28/38/1761632322e6bfcf174d61e5b8e9537f66b2a3ff85.png'
    ],
    inStock: true,
    rating: 4.71,
    reviews: 587
  },
  {
    id: '50700739',
    name: 'Men\'s Loose Straight Leg Casual Pants, Solid Color Drawstring Wide Leg Trousers, Simple & Fashionable, Versatile',
    category: 'Men',
    subcategory: 'Pants',
    price: 283590,
    originalPrice: 340308,
    link: 'https://www.shein.com/a-p-50700739.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/04/26/ce/174566030252d06679d35adb9cfe94fd5bc44bdcec_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/11/25/a6/17325044174d6c13acef24a461c623b766f99378a0.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 713
  },
  {
    id: '249392610',
    name: 'Black High Waist Straight Leg Loose Casual Pants, Spring/Autumn',
    category: 'Men',
    subcategory: 'Pants',
    price: 377890,
    originalPrice: 453468,
    link: 'https://www.shein.com/a-p-249392610.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/26/38/17614561058be3ebec1e3f957bfc35fd00e8cd5f4a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/26/d5/1761456111284984fa9402ed2a8ad3179ff3beefcb.jpg'
    ],
    inStock: true,
    rating: '4.9',
    reviews: 31
  },
  {
    id: '51029330',
    name: 'Manfinity Roughcore Men\'s Solid Color Drawstring Waist Cargo Pocket Casual Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 310500,
    originalPrice: 372600,
    link: 'https://www.shein.com/a-p-51029330.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/12/20/fe/1734681836ef7b02bdf89f23073ad4531e791147b5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/12/20/90/17346818511055b3ad3682af7b03254008548d8c1f.jpg'
    ],
    inStock: true,
    rating: 4.62,
    reviews: 757
  },
  {
    id: '59890047',
    name: 'Men\'s Elastic Waist Corduroy Pants, Fashion Drawstring Straight Leg Casual Sweatpants For Spring And Autumn',
    category: 'Men',
    subcategory: 'Pants',
    price: 249895,
    originalPrice: 299874,
    link: 'https://www.shein.com/a-p-59890047.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/17/44/1763370259bb67fb82ae84857c5d1bbafd38deba45_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/03/06/fd/174124432918a8e4504309fd7cfef1154d2fc63f2a.png'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 944
  },
  {
    id: '69641634',
    name: 'Grunge Goth Y2K Style Fashion Casual Sports College Slim Fit Young Street Mature Business Distressed Elastic Cuff Jeans Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 438495,
    originalPrice: 526194,
    link: 'https://www.shein.com/a-p-69641634.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/19/0d/17582514496fefd475c5393db3a63dc50602b3dcfe_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/19/95/175825145450f3aa9f7f9c09efe7280413a88842d3.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 1001
  },
  {
    id: '133657347',
    name: 'Claim Dot Men\'s Solid Color Pleated Wide Leg Loose Casual Pants Black Dress Pants Men Men Wide Leg Pants Mens Pleated Suit Pants Loose Pants Men Mens Black Loose Dress Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 323955,
    originalPrice: 388746,
    link: 'https://www.shein.com/a-p-133657347.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/23/27/1753247603fcacb09677641b9f6b9206f328aeae66_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/23/bc/1753247610ff6da972386e52cb580704c4020a194c.jpg'
    ],
    inStock: true,
    rating: 4.71,
    reviews: 135
  },
  {
    id: '137986937',
    name: 'Manfinity EMRG Men\'s Pink Denim Wide Leg Jeans With Zipper Detail For Street Casual Style Pink Jeans Men Baggy Jeans Y2k Harajuku Pants Unisex Washed OVERSIZE Corduroy Jeans Pink Stacked Jeans',
    category: 'Men',
    subcategory: 'Pants',
    price: 492315,
    originalPrice: 590778,
    link: 'https://www.shein.com/a-p-137986937.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/28/92/17536870224a369bd52ea46b34840b976fa2e29818_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/28/5d/1753687037104b88e409ddfed4218dda5f81b41051.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '327603140',
    name: 'TOKVUE Men\'s Casual Commute Striped Wide Leg Pants,Men Pinstripe Pants Men Wide Leg Pants Men Pleated Pants Men Baggy Pants Pinstripe Wide Leg Pants,Streetwear Hot Selling INS Style Pants,Daily Boyfriend/Husband Gift,Anniversary Gift, Christmas Outfits,Old Money Business Casual Trousers,Plaid Loose Straight Leg Pants For Men, American Casual Relaxed Pants,Fall Winter',
    category: 'Men',
    subcategory: 'Pants',
    price: 438495,
    originalPrice: 526194,
    link: 'https://www.shein.com/a-p-327603140.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/15/6a/1765787573f9602b66edb3dfb3fc26a7380512d654_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/15/47/1765787580c06734e258237a2d478853d30d16e66c.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 40
  },
  {
    id: '51966189',
    name: 'Manfinity Homme Men\'s Solid Color Drawstring Multi-Pocket Slim Fit Casual Cargo Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 297045,
    originalPrice: 356454,
    link: 'https://www.shein.com/a-p-51966189.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/12/30/11/1735561967db6e3c4dde68cca215d2e81b93837d90_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/12/30/49/17355619857350180e1bddffa478042847a01cd682.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 1001
  },
  {
    id: '43686646',
    name: 'Men\'s Ice Cool Zip Pocket Drawstring Waist Long Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 182505,
    originalPrice: 219006,
    link: 'https://www.shein.com/a-p-43686646.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/09/22/47/1726999202b48e4472c21880ce2dbc469021b36e77_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/09/22/c1/17269992337856c4d513d137dcbc22c460c134a8be.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 1001
  },
  {
    id: '141341824',
    name: 'Manfinity EMRG Men\'s Pocket Loose Wide Leg Casual Versatile Jeans Baggy Y2k Jeans Western Pants Cowboy Men Pants Vintage Washed OVERSIZE Distressed Jeans',
    category: 'Men',
    subcategory: 'Pants',
    price: 485645,
    originalPrice: 582774,
    link: 'https://www.shein.com/a-p-141341824.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/31/f3/1753940868dbbf7092efdab5728c435e48b8506c0a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/31/14/1753940878565f78a4316fc22cc86802304a18de37.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 415
  },
  {
    id: '54012572',
    name: 'TOKVUE Men\'s Solid Color Drawstring Pocket Casual Sweatpants, Baggy Black Loose Fit Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 350980,
    originalPrice: 421176,
    link: 'https://www.shein.com/a-p-54012572.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/01/17/a6/1737101320476ff986be401c15f7d1814eed39e2a6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/01/17/a6/1737101329f646530083c744a8b9d9b53d54d61f36.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '165866191',
    name: 'PAVTROS Manfinity Streetrush Men\'s Street-Style Popular INS Matching Spider Web & Heart Embroidered Towel Fabric Casual Pants, Boyfriend/Husband Gift, Anniversary Gift, Fashionable Loose Fit Pink Sweatpants',
    category: 'Men',
    subcategory: 'Pants',
    price: 384560,
    originalPrice: 461472,
    link: 'https://www.shein.com/a-p-165866191.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/27/e7/17562920839702aaf006ad17d2a56141e36aa70ef1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/27/b6/175629209163da2b8e668da11a9f011237d4be2731.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 1001
  },
  {
    id: '223313971',
    name: 'Men\'s Black Striped Loose Wide Leg Multi-Pocket Casual Pants, Street Style',
    category: 'Men',
    subcategory: 'Pants',
    price: 425040,
    originalPrice: 510048,
    link: 'https://www.shein.com/a-p-223313971.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/21/8d/17610261198ef2d5347a279dfc2b5808b9102eb2e1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/21/99/176102613588a8a7bbd13693445f5a52afd50f06bc.jpg'
    ],
    inStock: true,
    rating: '4.4',
    reviews: 100
  },
  {
    id: '49762306',
    name: '1 Pc Men\'s Casual Pants With Double Bars, Made Of Taslon Fabric, Fashionable Printed Design, Suitable For Beach, Daily Commute, Sports & Fitness, Relaxed Straight Leg Cut, For Spring, Summer, Autumn, Winter, Street Style, Gift For Boyfriend/Husband, Anniversary, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 249895,
    originalPrice: 299874,
    link: 'https://www.shein.com/a-p-49762306.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/13/91/1752395447fec90bc34ff8a13e9aae4011686a88f5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/07/13/1b/1752395458117621ab636aaab6a52c47f4fb429f0f.jpg'
    ],
    inStock: true,
    rating: 4.77,
    reviews: 708
  },
  {
    id: '46412752',
    name: 'Men\'s Thick Solid Color Loose Sweatpants With Pockets And Drawstring, Suitable For Fitness, Sports And Outdoor Activities, Autumn/Winter',
    category: 'Men',
    subcategory: 'Pants',
    price: 283590,
    originalPrice: 340308,
    link: 'https://www.shein.com/a-p-46412752.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/10/22/91/1729612604f14a04559dcbdb8ffdb5d3722903bfa7_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/11/16/3e/17317622097f13899766f8be7bd9b8487975cfe243.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 1001
  },
  {
    id: '159384250',
    name: 'Manfinity Homme Men\'s Solid Color Drawstring Waist Pocket Straight Leg Casual Pants, For Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 297045,
    originalPrice: 356454,
    link: 'https://www.shein.com/a-p-159384250.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/21/43/17557680872fcf43d28fc30433aa3ae57d3bb4d78b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/21/ea/1755768098659ed04d31df3a476ac2e2da6dbe46f7.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 1001
  },
  {
    id: '40876935',
    name: 'Men\'s Plaid Casual Pants For Spring And Autumn, 2000s Style, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 276805,
    originalPrice: 332166,
    link: 'https://www.shein.com/a-p-40876935.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/07/30/8b/1722309262e243b34f65e9921215406d12a4d9ba92_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/07/30/90/1722309267847cb025dd565dbe84786303b968a05f.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 159
  },
  {
    id: '108992950',
    name: 'Men\'s Elastic Waist Sweatpants, Thin Breathable Casual Pants For Autumn/Winter',
    category: 'Men',
    subcategory: 'Pants',
    price: 202745,
    originalPrice: 243294,
    link: 'https://www.shein.com/a-p-108992950.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/24/f4/1750695505006296f79e6c2c712e015ea273196e21_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/06/24/f9/1750695522809287e0cc12473ca1b89dce9edeb1e8.png'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 543
  },
  {
    id: '307714924',
    name: 'DAZY Men\'s Letter Print Design Black Stripe Elastic Waist Pants, Thermal Lined For Autumn/Winter',
    category: 'Men',
    subcategory: 'Pants',
    price: 485645,
    originalPrice: 582774,
    link: 'https://www.shein.com/a-p-307714924.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/27/04/176420813010b54d1a4cc19db4bbb4ffd256600457_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/27/9a/17642081413cbae03ad3ffd2ae2a1af43f59f6c618.jpg'
    ],
    inStock: true,
    rating: '4.9',
    reviews: 34
  },
  {
    id: '103840032',
    name: 'Manfinity EMRG Men\'s Young Street Style, Minimalist Cotton Sweatpants With Loose Fit Wide Leg, Elastic Waist Knit Sports Pants, Weathered Cotton Fabric With Subtle Distressed Details, Casual Street-Inspired Style For Daily, Leisure & Fashion Wear, Suitable As Holiday Gift Black Sweatpants Men Washed Black Sweatpants Black Joggers Men Black Pants Baggy Sweatpants Black Washed Sweatpants Men Black Baggy Sweatpants Black Fleece Sweatpants Washed Black Joggers',
    category: 'Men',
    subcategory: 'Pants',
    price: 492315,
    originalPrice: 590778,
    link: 'https://www.shein.com/a-p-103840032.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/20/08/175041310184270570d212fa09995f644d89eff19c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/20/84/17504131137c795394b3776b1630a3197031516eb7.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 214
  },
  {
    id: '221804790',
    name: 'Manfinity Hypemode Men\'s Casual Sweatpants, Patchwork Design, Grey Color, Fashionable And Versatile For Daily Wear Wide Leg Sweatpants Men Wide Leg Gym Pants Men Grey Flared Sweatpants Men Flare Sweatpants Men Flared Sweats',
    category: 'Men',
    subcategory: 'Pants',
    price: 330740,
    originalPrice: 396888,
    link: 'https://www.shein.com/a-p-221804790.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/f4/1760678429674310c17aa0519b185978bbbce789d2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/62/1760678442c18e12108fd0863812835ef97ba2c790.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 5
  },
  {
    id: '22879955',
    name: 'Calvornis Men Fold Pleated Detail Slant Pocket Suit Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 485645,
    originalPrice: 582774,
    link: 'https://www.shein.com/a-p-22879955.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/16/59/1744797467f20a13d52f3d5d6f7090a73adb476fc6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/16/96/17447974794bfc6a269a893bc8794f5212bbab1ab3.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '11773563',
    name: 'Claim Dot Men Button Detail Slant Pocket Suit Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 357650,
    originalPrice: 429180,
    link: 'https://www.shein.com/a-p-11773563.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2022/10/20/1666278337c8f7a4d2050c3bf5df501c0c3829a815_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2022/10/20/16662783455bb2730b593f85db13c1222cf4805176.jpg'
    ],
    inStock: true,
    rating: 4.74,
    reviews: 970
  },
  {
    id: '269762122',
    name: 'Men\'s Suit Pants, Business Lightweight Trousers, Men\'s Formal Pants, Straight Leg Casual Pants, Straight Solid Color Dress Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 243110,
    originalPrice: 291732,
    link: 'https://www.shein.com/a-p-269762122.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/26/e8/1764155520f2156c875b6fe9d93a37553959d501ab_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/26/4b/1764155516fb56d3205d25db8a7bcf84c8dca7dda4.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 345
  },
  {
    id: '327361318',
    name: 'HUEFORM Men\'s Blue Paid Gathered Design Relaxed Fit  Casual Pant,The Design Can Flatter The Legs And Make Them Appear More Proportionate. Suitable For Everyday Wear For Men',
    category: 'Men',
    subcategory: 'Pants',
    price: 425040,
    originalPrice: 510048,
    link: 'https://www.shein.com/a-p-327361318.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/13/8a/176559271958e15b637d01f73e0f83aff7f1e32460_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/13/a8/1765592736b17b8db8748f81713e7a7c34be41af60.jpg'
    ],
    inStock: true,
    rating: '4.6',
    reviews: 53
  },
  {
    id: '13459222',
    name: 'Manfinity Homme Men Slant Pocket Drawstring Waist Sweatpants Long Jogging Pants Plain Light Grey Going Out Casual',
    category: 'Men',
    subcategory: 'Pants',
    price: 270135,
    originalPrice: 324162,
    link: 'https://www.shein.com/a-p-13459222.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/10/29/99/17301864914407e2e91e1d1180920a262c4f7e0cf9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/06/04/93/1717497178ba5d87df582f02184012a5ea2e2d5987.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 1001
  },
  {
    id: '59975277',
    name: 'Men\'s Elastic Waist Corduroy Drawstring Pants, Retro Straight Leg Casual Sweatpants For Spring & Autumn',
    category: 'Men',
    subcategory: 'Pants',
    price: 256680,
    originalPrice: 308016,
    link: 'https://www.shein.com/a-p-59975277.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/17/c9/176337050742f7ac80a5fa75d0b12766fb22630d06_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/03/06/5f/1741244339b3abcd1af84cdece00b49845fede0720.png'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 944
  },
  {
    id: '159421540',
    name: 'Men\'s Retro Business Casual Pants, Spring/Autumn/Summer',
    category: 'Men',
    subcategory: 'Pants',
    price: 337410,
    originalPrice: 404892,
    link: 'https://www.shein.com/a-p-159421540.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/08/13/87/1755062942490a2e44e0ab8740f2d419981ef13526_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/spmp/2025/08/13/f3/1755062999cc65c94a26581ed7fa03ab69a61cc90b.jpg'
    ],
    inStock: true,
    rating: 4.59,
    reviews: 252
  },
  {
    id: '170155709',
    name: 'Men\'s Loose Wide Leg Pants, Solid Color Design With Drawstring Details, Casual Style Long Sweatpants, Polyester Fabric Suitable For Daily Wear, Jogging And Other Occasions, Versatile Item For Spring And Autumn',
    category: 'Men',
    subcategory: 'Pants',
    price: 297045,
    originalPrice: 356454,
    link: 'https://www.shein.com/a-p-170155709.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/20/b9/1760966540851da198e7c442b3c481832629aefcf5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/20/9d/1760966550070495fd2cdd1a9c21abd877aab64606.jpg'
    ],
    inStock: true,
    rating: 4.72,
    reviews: 175
  },
  {
    id: '52481792',
    name: 'Sport MetroGents Men\'s Solid Color Splicing Front Lace-Up Casual Sports Pants Fall Breathable',
    category: 'Men',
    subcategory: 'Pants',
    price: 323955,
    originalPrice: 388746,
    link: 'https://www.shein.com/a-p-52481792.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/01/05/36/1736048633008d7d8c2a583ee13e41a6ecfa0f2065_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/01/05/6c/17360486454da889f66af9d2814368ebc59779169d.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 1001
  },
  {
    id: '302270469',
    name: 'Driftmere 3PCS. Sweatpants,The Men\'s Simple And Stylish Style Is Suitable For Daily Casual Wear And Sports. These Are Loose Cuffed Pants Made Of Knitted Fabric, Which Are Skin-Friendly, Soft And Highly Elastic. They Are Excellent Gifts For Boyfriends, Husbands Or Family Members, Embodying The Aesthetics Of Minimalist Fashion. Men\'s Drawstring-Waist Simple-Style Fashionable Thickened Pants For Autumn And Winter.',
    category: 'Men',
    subcategory: 'Pants',
    price: 755090,
    originalPrice: 906108,
    link: 'https://www.shein.com/a-p-302270469.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/05/0d/17649166410c188bee7f48524e17081f3c22b18e8e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/05/f2/17649166686e786816ab6de40a3ba27844a1773bad.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 4
  },
  {
    id: '65786619',
    name: 'Manfinity Homme Men\'s Casual Versatile Drawstring Waist Cargo Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 303830,
    originalPrice: 364596,
    link: 'https://www.shein.com/a-p-65786619.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/04/08/f6/174408926054c5f30f7a28efc2297b64fadc90f25c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/04/08/9e/1744089271a6c2ea45f3a180abdc2040d6e1558178.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 1001
  },
  {
    id: '35786038',
    name: 'Manfinity LEGND Men\'s Solid Color Drawstring Waist Pocketed Casual Pants, Men\'s Black Pants, Men\'s Straight Leg Pants, Men\'s Casual Pants, Men\'s Sweatpants, For Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 290260,
    originalPrice: 348312,
    link: 'https://www.shein.com/a-p-35786038.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/05/27/90/17167946286ce227c0455ac09829b851a2feb9b092_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/05/27/89/1716794645de86ca4686df154e239ce9e932818bbe.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '101657129',
    name: '1pc Men\'s Drawstring Waist Solid Color Long Sports Pants, Basic Black Fitness Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 142140,
    originalPrice: 170568,
    link: 'https://www.shein.com/a-p-101657129.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/13/16/1749798694730a716c80e3463a29b83df44e67cd87_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/06/13/29/174979888924a0aee8da0e5cd83e579b1e379cc141.png'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 610
  },
  {
    id: '70823075',
    name: 'Manfinity Homme Men Casual Simple Solid Drawstring Waist Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 270135,
    originalPrice: 324162,
    link: 'https://www.shein.com/a-p-70823075.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/28/d2/1745803394b6150e8a88b5b9695b0e8fec7a718a34_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/28/e4/174580340181915a1ba04f7c1342d1c84f0bd765f9.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '36649513',
    name: 'Manfinity Mode Men\'s Solid Color Simple Daily Casual Trousers',
    category: 'Men',
    subcategory: 'Pants',
    price: 297045,
    originalPrice: 356454,
    link: 'https://www.shein.com/a-p-36649513.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/06/12/d8/1718157668284ab9f27888af5bd864897317be504c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/06/12/e5/1718157696161fbaddf62f06efbb8559e864c8b462.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 1001
  },
  {
    id: '314173361',
    name: 'AKNOTIC Men\'s Solid Color Pleated Pocket Eyelet Fastener Design Casual Office Commute Suit Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 377890,
    originalPrice: 453468,
    link: 'https://www.shein.com/a-p-314173361.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/01/d4/1764584854b1c9106c21f150a8754e41bf71895c6d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/01/b0/176458486804a95da74e25a9d0abe82e4e13d14849.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 14
  },
  {
    id: '135208146',
    name: 'DAZY Men\'s Red Plaid Lounge Pants, Autumn, Fall Pajama, Winter',
    category: 'Men',
    subcategory: 'Pants',
    price: 222985,
    originalPrice: 267582,
    link: 'https://www.shein.com/a-p-135208146.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/25/ae/1753428482e66cbddbea9f3147cae1865913c094c1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/25/a8/175342849016c870b954746feb096a248b9c990e2e.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 198
  },
  {
    id: '43205473',
    name: 'TOKVUE Men\'s Solid Color Casual Everyday Trousers Men\'s Streetwear Pants, Boy Friend Gifts, For Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 377890,
    originalPrice: 453468,
    link: 'https://www.shein.com/a-p-43205473.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/21/bf/172688664627dbcfc8a52496ec26c7fa341172ff55_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/21/56/172688666856dde96fe740c57021c721234f1c7d7d.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 1001
  },
  {
    id: '73226679',
    name: 'Men\'s Outdoor Casual Pants - Suitable For All Seasons - Featuring A Loose Straight-Leg Silhouette, With A Basic Drawstring Waistband And Pockets. An Ideal Choice For Fitness, Outdoor Hiking, And Back-To-School Essentials.',
    category: 'Men',
    subcategory: 'Pants',
    price: 175835,
    originalPrice: 211002,
    link: 'https://www.shein.com/a-p-73226679.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/28/4a/1751106244092775854dec20d6fb53b8637e78dc55_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/05/07/a6/17466051590c5821f31fa315755d4eaea287c8d569.png'
    ],
    inStock: true,
    rating: 4.48,
    reviews: 263
  },
  {
    id: '20391960',
    name: 'Calvornis Men\'s Slim Fit Business Suit Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 418255,
    originalPrice: 501906,
    link: 'https://www.shein.com/a-p-20391960.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/11/07/48/16993205513624debdb3c34bcb5b18e62819946413_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/11/04/64/169907054367715d0b33492ea8320560cca8e4eb29.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 1001
  },
  {
    id: '283968285',
    name: 'Calvornis Manfinity Bizformal Men\'s Straight Leg Casual Trousers, Retro British Style Versatile Pants,Boyfriend Gifts,Valentine Day Men,White Men Pants Men High Waisted Pants Mens Pleated Suit Pants Mens Navy Blue Pin Strip Pants Dark Blue Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 236440,
    originalPrice: 283728,
    link: 'https://www.shein.com/a-p-283968285.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/13/35/1763003304d0b8a575dca6c90d3a9a4a7fd6264607_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/13/dd/176300332061fca901245fb6cd39e1340a941fd755.jpg'
    ],
    inStock: true,
    rating: 4.67,
    reviews: 1001
  },
  {
    id: '307999054',
    name: '"Vintage Poster Dark" Men\'s Washed Water Worn Drawstring Trousers',
    category: 'Men',
    subcategory: 'Pants',
    price: 465405,
    originalPrice: 558486,
    link: 'https://www.shein.com/a-p-307999054.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/24/8b/176397997339eb411ed08034914df100ddc31298f1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/24/e6/176397999213e49a6ba92d494163500ef25b26719c.jpg'
    ],
    inStock: true,
    rating: '4.7',
    reviews: 93
  },
  {
    id: '24013513',
    name: 'Claim Dot Men\'s Whiskered Slanted Pocket Denim Pants Baggy Jeans, Plain Wide Jeans Long Distressed Baggy Light Blue Cargo Jeans, For Husband, Boyfriend Gifts Going Out Vacation Urban National Park',
    category: 'Men',
    subcategory: 'Pants',
    price: 485645,
    originalPrice: 582774,
    link: 'https://www.shein.com/a-p-24013513.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/10/19/24/1697710355dca62b88b7dedc6c698b4eb5da0202dc_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/10/19/dc/16977103884a0c01e989e7d982e67f73a9da5d02c2.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 523
  },
  {
    id: '23138207',
    name: 'Men\'s Solid Color Drawstring Thermal Lined Sweatpants, For Fall Winter',
    category: 'Men',
    subcategory: 'Pants',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-23138207.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/09/13/d7/169458318835cf325c36e82331e25fbd1c1ad3fcf7_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/09/13/43/1694583201b1ec19cffdfaf19255d825aa43fd84de.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 1001
  },
  {
    id: '136102860',
    name: '1PC-Men\'s Fleece Jogger Pants - Soft Thermal Outdoor Lounge Sweatpants, Elastic Waist Athletic Casual Trousers For Running Hiking Winter',
    category: 'Men',
    subcategory: 'Pants',
    price: 243110,
    originalPrice: 291732,
    link: 'https://www.shein.com/a-p-136102860.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/29/04/1753800920bcc22e179d494537d5f0f9e8ffcb92ea_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/10/31/6d/1761925103ef5aac14afc15a1293f2c86584cd1b19.png'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 162
  },
  {
    id: '44277190',
    name: 'Manfinity Homme Men\'s Solid Color Multi-Pocket Casual Cargo Pants, Daily Wear, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 438495,
    originalPrice: 526194,
    link: 'https://www.shein.com/a-p-44277190.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/10/08/78/172835637009e4db63860352915e8674f117ba4bb8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/10/08/a3/17283563967fda9e5a2be5de1399ac2f46da163acf.jpg'
    ],
    inStock: true,
    rating: 4.74,
    reviews: 1001
  },
  {
    id: '61785640',
    name: 'Manfinity EZcore Men\'s Casual Minimalist Pants, Suitable For Summer Streetwear Men Pants Street Wear Pants Pants For Men Baggy Men Track Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 290260,
    originalPrice: 348312,
    link: 'https://www.shein.com/a-p-61785640.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/03/19/33/174237501138078597a60b6616fc840ea11a5842b0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/03/19/4e/17423750264edf343ca5f86e9d624bff13a5de3973.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 441
  },
  {
    id: '101263759',
    name: '2-Pack Men\'s Outdoor Cargo Pants, Patch Pockets Simple Solid Color Casual Pants, Elasticated Waistband, Suitable For All Seasons, Suitable For Husband, Boyfriend Gifts',
    category: 'Men',
    subcategory: 'Pants',
    price: 425040,
    originalPrice: 510048,
    link: 'https://www.shein.com/a-p-101263759.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/30/3c/1753851320700cfbefed4c12a3296568239e743fb0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/06/11/0e/174963231863607b450374b000f3186adbcf7e26aa.png'
    ],
    inStock: true,
    rating: 4.77,
    reviews: 192
  },
  {
    id: '81728469',
    name: 'Men\'s Corduroy Straight-Leg Pants, Comfortable Casual Loose Solid Color Versatile Trousers For Spring & Autumn',
    category: 'Men',
    subcategory: 'Pants',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-81728469.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/05/14/a7/1747223953dd382dffa47af614f514d5287fd3180d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/05/14/9c/17472239617bf67d4790e32e387e9060f5c227e98f.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 670
  },
  {
    id: '31556657',
    name: 'Manfinity Homme Men\'s Letter Printed Twill Cargo Pants With Elastic Cuffed Hem, For Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 310500,
    originalPrice: 372600,
    link: 'https://www.shein.com/a-p-31556657.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/06/13/b5/1718279869d68d6ad8010a9f51a49ba3e1c655ad8e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/06/13/94/17182798909ddd847ee635b2b52d73533d0be5430d.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 1001
  },
  {
    id: '262479010',
    name: 'Vintage Washed Black Wide Leg Jeans, Loose Fit Floor-Length Pants, Unisex, Spring/Autumn',
    category: 'Men',
    subcategory: 'Pants',
    price: 364435,
    originalPrice: 437322,
    link: 'https://www.shein.com/a-p-262479010.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/24/07/1761305373feace31f1f938ade39b67c545c9a4c6d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/24/25/1761305378d7fb2127f24019dbf0be98a4fc56af9a.jpg'
    ],
    inStock: true,
    rating: '4.6',
    reviews: 124
  },
  {
    id: '66107081',
    name: 'Musero Oversized Linen Pants Only Spring Summer Vacation Easter',
    category: 'Men',
    subcategory: 'Pants',
    price: 270135,
    originalPrice: 324162,
    link: 'https://www.shein.com/a-p-66107081.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/29/92/175375345038f16fa80d41fb6dae4aa16bbc7e4e5f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/29/d8/175375345801da486d7ca1c41c0f67e846a0f8888d.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 1001
  },
  {
    id: '87176045',
    name: '1pc Multi-Pocket Men\'s Cargo Pants, Loose Fit Cross Print, Suitable For Beach, Casual, Workout, Outdoor Sports, All Season, Straight Leg, Fashion Street Style, Boyfriend/Husband Gift, Special Occasion, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 270135,
    originalPrice: 324162,
    link: 'https://www.shein.com/a-p-87176045.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/30/16/1753862578458a5dcb4e42a25411b863ac01996f2e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/07/30/17/1753862590da1172f72ab6b0d9d1cfefabe0c1c2a7.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 222
  },
  {
    id: '54907922',
    name: 'Men\'s Straight Leg Solid Color Sports Pants With Pockets, Casual Trousers Suitable For Outdoor Sports, Leisure, Home, Couple, Spring/Summer\'',
    category: 'Men',
    subcategory: 'Pants',
    price: 175835,
    originalPrice: 211002,
    link: 'https://www.shein.com/a-p-54907922.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/02/25/17/174047173846aa96524982145165e90cd0852fb7a5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/01/14/ca/1736848107734a10476db236897a1a85b028cc1c48.jpg'
    ],
    inStock: true,
    rating: 4.74,
    reviews: 110
  },
  {
    id: '183293438',
    name: 'Men\'s Lightweight Knit Pants, Fashion Versatile Casual High Street Jogging Trousers, Oversized Loose Fit With Drawstring Waist And Pockets, Durable, Suitable For Autumn, Great Gift For Husband Or Boyfriend, Wear For Street, Commute, Outdoor, Holiday',
    category: 'Men',
    subcategory: 'Pants',
    price: 298885,
    originalPrice: 358662,
    link: 'https://www.shein.com/a-p-183293438.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/05/27/1762331464f910d474e6bba1f33379609a00bf3620_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/05/21/176233147307e3811544228fce3be2c9680d79d51b.jpg'
    ],
    inStock: true,
    rating: 4.51,
    reviews: 185
  },
  {
    id: '68030248',
    name: 'Men\'s Drawstring Waist Solid Color Long Sports Pants, Basic Black Fitness Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 243110,
    originalPrice: 291732,
    link: 'https://www.shein.com/a-p-68030248.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/09/1d/1760018448e2c1d4b916fffccfd81c44c248c71ac0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/04/15/85/17447002465db78ff537247f2682168fa9a524231e.png'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 444
  },
  {
    id: '287776566',
    name: 'AKNOTIC Men\'s Fashionable Glitter Casual Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 505885,
    originalPrice: 607062,
    link: 'https://www.shein.com/a-p-287776566.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/df/1763346704e393e789be37eb0d7591d17a1344c6a0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/19/1763346713a6532c3e5195fcf3c1cd7b307b36822a.jpg'
    ],
    inStock: true,
    rating: '4.8',
    reviews: 66
  },
  {
    id: '40690704',
    name: 'Manfinity Homme Men Plain Simple Casual Pants, Pants For Men Straight Loose, Men Green Pants, Men Wide Leg Pants, Japanese Pants, Pants Streetwear, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 256680,
    originalPrice: 308016,
    link: 'https://www.shein.com/a-p-40690704.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/08/14/a9/17236007955b54580224c3ac19e9b4f1e004348b3e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/08/14/fc/1723600812729019d5621e2f088fd6a0b1c8ec91fe.jpg'
    ],
    inStock: true,
    rating: 4.72,
    reviews: 1001
  },
  {
    id: '44547206',
    name: 'Forever 21 Men\'s Business Casual Black Pinstripe Wide Leg Halloween Wedding Guest Christmas Black White Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 371105,
    originalPrice: 445326,
    link: 'https://www.shein.com/a-p-44547206.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/10/11/5c/1728613404fb7c150f1a37f60ebac75d8e62ffd04b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/10/11/7f/1728613407faa104bc6edeed72ded363064044095f.jpg'
    ],
    inStock: true,
    rating: 4.59,
    reviews: 123
  },
  {
    id: '53486551',
    name: 'Manfinity Homme Men\'s Solid Color Drawstring Waist Cargo Pocket Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 297045,
    originalPrice: 356454,
    link: 'https://www.shein.com/a-p-53486551.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/25/e6/1764060295a86d05b44b7e89b574c37469a0ae5a20_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/25/08/17640603044fc6c155d75ec4a0d0c344150cc4804a.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 679
  },
  {
    id: '23909383',
    name: 'Manfinity Dauomo Men Solid Slant Pocket Drawstring Waist Pants, For Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 290260,
    originalPrice: 348312,
    link: 'https://www.shein.com/a-p-23909383.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/09/27/c3/1695809460db4fa76456ddf10abb1253c2e0c7a061_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/09/27/8d/16958094731b8f349da62fc895fdb218acba2a038e.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '42365382',
    name: 'Men\'s Elastic Waist Solid Color Side Pockets Casual Straight Leg Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 377890,
    originalPrice: 453468,
    link: 'https://www.shein.com/a-p-42365382.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/09/16/85/17264796834ae9cb0d0c005834e25c11e3d4a56fa0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/08/28/c8/17248383752cb70e75078784d5ba0a765e2c89344d.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '280656130',
    name: '"Vintage Poster Dark" Men\'s Washed Water Worn Drawstring Trousers',
    category: 'Men',
    subcategory: 'Pants',
    price: 472190,
    originalPrice: 566628,
    link: 'https://www.shein.com/a-p-280656130.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/21/6a/17662979917287d6d8bd9b45cc4d6f1d1dcb0bc4b2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/21/2d/17662980025fc9be705c7ae3e7feb4c3376755bc2b.jpg'
    ],
    inStock: true,
    rating: '4.9',
    reviews: 143
  },
  {
    id: '32503754',
    name: 'Manfinity Homme Men\ Solid Straight Leg Jeans, Grey Baggy Jeans Men, Loose Jeans Pants For Men, Men\'s Grey Jeans, Baggy Jeans',
    category: 'Men',
    subcategory: 'Pants',
    price: 499100,
    originalPrice: 598920,
    link: 'https://www.shein.com/a-p-32503754.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/03/31/08/1711865612c7e2dbb6c855ef31e4e2c4b72d152b39_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/03/31/5b/1711865628f98d26b3c0a4c9391de78ec20e43b337.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '35342285',
    name: 'Men\'s Casual Print Side Pocket Cargo Pants, For Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 297045,
    originalPrice: 356454,
    link: 'https://www.shein.com/a-p-35342285.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/06/19/14/1718796253cd467dbffa416be1d06a37493fc64786_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/05/19/73/17160481257fbdd6b650d5112f3ce37151ec14e196.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 1001
  },
  {
    id: '47497938',
    name: 'Manfinity Mode Men\'s Solid Color Pocket Straight-Leg Casual Work Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 303830,
    originalPrice: 364596,
    link: 'https://www.shein.com/a-p-47497938.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/11/13/3a/1731478914607b7a50946e9bcbc78dd308c4b3cca5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/11/13/d9/17314789459d8db73a4c39801059842137c4724b96.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 1001
  },
  {
    id: '106776885',
    name: 'New Draped Straight Men Pants Fashion Business Loose CasualWide-Leg Suit Pants,Pleated Trousers With Pockets For Boyfriend Husband',
    category: 'Men',
    subcategory: 'Pants',
    price: 337410,
    originalPrice: 404892,
    link: 'https://www.shein.com/a-p-106776885.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/12/a7/1749695186a51664c0d483c0e5fda899af6a44060e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/06/12/2d/174969519250c552398ba7e099647f767e3865560f.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 400
  },
  {
    id: '297536477',
    name: 'Hidkat Men\'s Corduroy Pants - Loose Straight Leg Drawstring Waist Casual Street Sports Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 202745,
    originalPrice: 243294,
    link: 'https://www.shein.com/a-p-297536477.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/14/de/176569810374e637513f7772e6342632235c8e4901_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/18/4b/1763456199791207b79526a116d0d4cc7bcb63676a.png'
    ],
    inStock: true,
    rating: '4.8',
    reviews: 111
  },
  {
    id: '146054656',
    name: 'Manfinity Sport Corelite Men\'s Contrast Trim Drawstring Waist Sports Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 249895,
    originalPrice: 299874,
    link: 'https://www.shein.com/a-p-146054656.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/06/41/1754463189d36b43e2d3d830f830ef7dfef2b8d321_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/06/c0/17544631947c35b4b684324fe87a9d2bda72abd109.jpg'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 301
  },
  {
    id: '58709544',
    name: 'Summer Workout Men\'s Fitness Casual Sports Sweatpants, Breathable Soft Drawstring Long Pants With Letter Zipper Pockets, Suitable For Boyfriend/Husband',
    category: 'Men',
    subcategory: 'Pants',
    price: 222985,
    originalPrice: 267582,
    link: 'https://www.shein.com/a-p-58709544.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/12/bd/1760258722a588e425d0a4e813052bb1f3ce6261c8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/03/14/ee/17419301282e5671c1c202be4629f4fc418cc48b54.png'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 329
  },
  {
    id: '11402072',
    name: 'Manfinity Homme Loose Fit Men\'s Letter Patched Drawstring Waist Straight Leg Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 283590,
    originalPrice: 340308,
    link: 'https://www.shein.com/a-p-11402072.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2022/09/01/1662015785d868407861b8fa561ef81ad498979e02_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2022/09/01/16620157933cf9fc8cc6c3b56e20e70b90aac7ccf6.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '41102173',
    name: 'Manfinity Mode Men\'s Plain Pocket Minimalist Suit Pants, Casual Everyday Wear, Old Money Style',
    category: 'Men',
    subcategory: 'Pants',
    price: 337410,
    originalPrice: 404892,
    link: 'https://www.shein.com/a-p-41102173.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/08/20/c0/1724148619c703428734acb328c92437855970295f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/08/20/0f/17241486299e225b22484ed4d875e87d848def7340.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 1001
  },
  {
    id: '234853605',
    name: 'Claim Dot Men\'s Casual Everyday Commute Simple Solid Color Slant Pocket Loose Fit Suit Pants White Baggy Pants Japanese Pants White Dress Pants Pleated Pants Men White Slacks Men',
    category: 'Men',
    subcategory: 'Pants',
    price: 377890,
    originalPrice: 453468,
    link: 'https://www.shein.com/a-p-234853605.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/24/09/1761270733082ce2f94312b5d95fecd2259df52417_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/24/93/1761270748d6c985e611bc0ef2815d0e2d1c890fc9.jpg'
    ],
    inStock: true,
    rating: '4.4',
    reviews: 113
  },
  {
    id: '317210784',
    name: 'PAVTROS 250G Thick Fleece Jogger Pants,Loose Fit Casual Streetwear Sweatpants For Couples, Suitable For Husband/Boyfriend,Casual Style Long Sweatpants Suitable For Daily Wear, Jogging And Other Occasions, Versatile Item For Autumn&Winter Wide Leg Sweatpants Flare Sweatpants Light Grey Sweatpants',
    category: 'Men',
    subcategory: 'Pants',
    price: 398130,
    originalPrice: 477756,
    link: 'https://www.shein.com/a-p-317210784.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/07/7a/1765076293466647b97f1cd1b7e573548c1efdb131_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/05/36/17649124169fd497366a3abb50886fec8d56245abb.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 66
  },
  {
    id: '36850587',
    name: 'Men\'s Long Formal Black Trousers, Gentleman Pants, Business Formal Style, For Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 310500,
    originalPrice: 372600,
    link: 'https://www.shein.com/a-p-36850587.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/04/20/1a/1713605268171fabb5cd9f38b1a34a262f7d33a43f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/03/01/6a/17092836817ed7f1a5688687a232410d01ea81e598.png'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 1001
  },
  {
    id: '222321503',
    name: 'Manfinity Hypemode Men\'s Casual Everyday Office Commute Slim Fit Solid Color Slant Pocket Suit Pants Men S Pleated Suit Pants Baggy Dress Pants Men Japanese Pants For Men Korean Pants Men Streetwear Men Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 337410,
    originalPrice: 404892,
    link: 'https://www.shein.com/a-p-222321503.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/24/7b/176397384209ad0d95ac9007ec3eb5dd40074630ec_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/24/be/1763973847a4338d609a9d2fe9d2ba108379368636.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 13
  },
  {
    id: '46126243',
    name: '2pcs/Set Men Corduroy Straight Leg Casual Pants, Loose Fit Versatile Sweatpants For Spring Autumn',
    category: 'Men',
    subcategory: 'Pants',
    price: 566490,
    originalPrice: 679788,
    link: 'https://www.shein.com/a-p-46126243.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/11/25/d3/1732525265f99b9390120f5e96f9db7aed9e3427d0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/09/25/fa/17272473449dbfb66afce31ea8a16ae9bf0dfe1fd1.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 1001
  },
  {
    id: '55139132',
    name: 'Calvornis Men\'s Casual/Business Slim Fit Solid Color Tapered Leg Suit Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 310500,
    originalPrice: 372600,
    link: 'https://www.shein.com/a-p-55139132.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/02/05/bf/17387204460b6bf315a857b00d1dee6cc2916b32ef_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/02/05/75/1738720462b4e3b6fff4d05d3e49e045962d3fc0ef.jpg'
    ],
    inStock: true,
    rating: 4.47,
    reviews: 562
  },
  {
    id: '38299355',
    name: 'Manfinity Homme Men\'s Solid Color Simple Casual Straight Pants, For Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 398130,
    originalPrice: 477756,
    link: 'https://www.shein.com/a-p-38299355.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/03/13/fc/17418305358c520cec9e8fe905337d8a1c035e2f0d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/07/08/ca/17204471779f471d3dd2f1651aa17d9e4d4f371ed1.jpg'
    ],
    inStock: true,
    rating: 4.65,
    reviews: 1001
  },
  {
    id: '312779310',
    name: 'PAVTROS Men\'s Casual Two Pieces Set: Long Sleeve T-Shirt And Tree Branch Print Double-Layer Waistband Pants, Autumn Mens 2 Piece Pants Set Mens Grey And White Set Mens Jogger Set Man 2 Piece Set 2 Piece Set Men Street,A Stylish Streetwear Versatile Item, Perfect As A Gift For Your Boyfriend.',
    category: 'Men',
    subcategory: 'Pants',
    price: 674245,
    originalPrice: 809094,
    link: 'https://www.shein.com/a-p-312779310.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/29/49/17644063790e145831e03aff9ee63790c60f3f4815_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/29/ba/17644063957573eba56d8715c23a496c4294483dbc.jpg'
    ],
    inStock: true,
    rating: '4.3',
    reviews: 70
  },
  {
    id: '66230867',
    name: '1pc Plus Size Men\'s Multi-Pocket Solid Color Cargo Pants, Casual Loose Lightweight Trousers For Spring/Autumn, Beach/Vacation, Daily Commute, Workout, Outdoor, Streetstyle, Fitness, Jogging, Hiking, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-66230867.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/02/8a/175938333207fc429aae7c5530650476a20c98a549_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/02/da/1759383340632ce21c6862c388987145f0012fff1e.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 209
  },
  {
    id: '28751025',
    name: 'Manfinity Homme Men\'s Solid Color Straight Leg Pants, Plain Work Long Tapered Slacks Pants, For Husband, Boyfriend Gifts, For Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 263350,
    originalPrice: 316020,
    link: 'https://www.shein.com/a-p-28751025.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/01/08/38/1704679974b10ba17ecafb9c63cd9909ebdb558a77_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/01/08/19/1704680000b3149ae6d9e48c99721a1c375e8aa6f9.jpg'
    ],
    inStock: true,
    rating: 4.72,
    reviews: 1001
  },
  {
    id: '27619650',
    name: 'Manfinity Mode Men\'S Solid Color Pleated Trousers',
    category: 'Men',
    subcategory: 'Pants',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-27619650.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/04/11/06/171280342543366c37dbff9ae7dc290363716e9c31_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/04/11/50/1712803443715bdf3230093dc01e9760bb8d24d798.jpg'
    ],
    inStock: true,
    rating: 4.72,
    reviews: 1001
  },
  {
    id: '10376027',
    name: 'Calvornis Men Glen Plaid Tailored Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 377890,
    originalPrice: 453468,
    link: 'https://www.shein.com/a-p-10376027.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/04/17/b9/1713347430f5f2836e02d51c1fa7406c112d49fce9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/04/17/56/1713347448598ea310249a49cfa4877d4c85040330.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 1001
  },
  {
    id: '45360218',
    name: 'Manfinity EZcore Men\'s Casual Loose Letter Print Wide Leg Pants, Versatile, For Fall Winter , Corduroy',
    category: 'Men',
    subcategory: 'Pants',
    price: 330740,
    originalPrice: 396888,
    link: 'https://www.shein.com/a-p-45360218.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/10/19/17/172932559919b34ae9451cd541325e587da294fadc_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/10/19/64/17293256155f80193a24c7fd4e53fecc47980967ec.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 1001
  },
  {
    id: '308008948',
    name: '"Vintage Poster Dark" Men\'s Washed Water Worn Drawstring Trousers',
    category: 'Men',
    subcategory: 'Pants',
    price: 485645,
    originalPrice: 582774,
    link: 'https://www.shein.com/a-p-308008948.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/21/70/1766297664485a08abe87ca411738bdea3f28a8bfb_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/21/86/1766297680d9110e498183a742f83d2dccb1b7318b.jpg'
    ],
    inStock: true,
    rating: '4.4',
    reviews: 149
  },
  {
    id: '228348604',
    name: 'Men Thermal Lined Jeans, Thick Warm Denim Pants, Stretch Flare Jeans, Washed Denim For Winter, Slim Fit Flare Leg Jeans, Distressed Flare Pants, Y2K Stacked Jeans',
    category: 'Men',
    subcategory: 'Pants',
    price: 606855,
    originalPrice: 728226,
    link: 'https://www.shein.com/a-p-228348604.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/31/12/17619125351195d5c2054239d5c5baca703294a920_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/31/cd/176191255892d9f1805ab308b461423b1feb457623.jpg'
    ],
    inStock: true,
    rating: 4.69,
    reviews: 1001
  },
  {
    id: '11049782',
    name: 'Manfinity BRENVOR Men Solid Drawstring Waist Slant Pocket Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 263350,
    originalPrice: 316020,
    link: 'https://www.shein.com/a-p-11049782.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2022/07/15/165784840136310ceb9b46f37e0ded7a33e4cdb435_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2022/07/15/165784840993beebd8d9c86a83b5dfbfd5df8a1ef0.jpg'
    ],
    inStock: true,
    rating: 4.69,
    reviews: 1001
  },
  {
    id: '110032595',
    name: '2pcs Men\'s Drawstring Waist Solid Color Long Sports Pants, Basic Black Fitness Pants, Autumn',
    category: 'Men',
    subcategory: 'Pants',
    price: 357650,
    originalPrice: 429180,
    link: 'https://www.shein.com/a-p-110032595.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/spmp/2025/08/31/28/175664938857705b4934c1cabb19337cdbbf7e5adb_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/p/abc/2025/08/31/99/17566493958bea4f3f57013c90fb7563b01b744a27.png'
    ],
    inStock: true,
    rating: 4.58,
    reviews: 337
  },
  {
    id: '43014419',
    name: 'Men\'s Relaxed Fit Drawstring Waist Slant Pocket Solid Color Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 182505,
    originalPrice: 219006,
    link: 'https://www.shein.com/a-p-43014419.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/09/17/4c/172654610418d64feed8801027176510a7599e7013_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/09/17/c3/1726546325a8d25069458eb643ededfbbc0b81ca94.jpg'
    ],
    inStock: true,
    rating: 4.73,
    reviews: 1001
  },
  {
    id: '133758233',
    name: 'Men Letter Graphic Drawstring Waist Sweatpants Straight Leg Long Plain Black Going Out Goth, Goth Sweatpants, Men\'s Graphic Sweatpants, Black Sweatpants With White Graphic, For Rave, Back To School,Sport Drawstring Waist Loose Fit Wide Leg Sweatpants,For Workout Gymwear, Emo, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 337410,
    originalPrice: 404892,
    link: 'https://www.shein.com/a-p-133758233.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/22/6e/175058027270aa0572a81902b3b71c31c7c32ade09_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/06/22/14/17505802801b50cbc05ee36f104fb1ac6d96422fed.jpg'
    ],
    inStock: true,
    rating: 4.73,
    reviews: 56
  },
  {
    id: '277216439',
    name: 'DAZY Men\'s Striped Dark Grey Suit Pants, Suitable For Commuting In Autumn',
    category: 'Men',
    subcategory: 'Pants',
    price: 451950,
    originalPrice: 542340,
    link: 'https://www.shein.com/a-p-277216439.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/10/0f/17627401274f8f0c333ae856f7c5a8ae2f3ea1f8af_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/10/77/1762740142dd56a25ffc12592efda9f5d99972e164.jpg'
    ],
    inStock: true,
    rating: '4.2',
    reviews: 49
  },
  {
    id: '59015464',
    name: 'HEHCN Men\'s Pocketed Wide Leg Relaxed Fit Jeans, Blue Casual Street-Style Pants, Suitable Gift For Husband Or Boyfriend',
    category: 'Men',
    subcategory: 'Pants',
    price: 478860,
    originalPrice: 574632,
    link: 'https://www.shein.com/a-p-59015464.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/02/27/c2/1740659071f44fda59e2547f56b9116fa3a7091b2e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/02/27/9a/17406591549fad2f1de18bf180608cc6d57615b020.png'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 728
  },
  {
    id: '29398018',
    name: 'Manfinity EMRG Men\'s Letter And Spider Web Print Drawstring Waist Jogger Pants, For Rave, Emo, 2000s Style',
    category: 'Men',
    subcategory: 'Pants',
    price: 303830,
    originalPrice: 364596,
    link: 'https://www.shein.com/a-p-29398018.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/05/15/5e/171573778615662d9a44d5074a4ea9806dd1081239_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/05/15/a9/1715737809ee03f8df5970bc1f1a5adcba6659e59a.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 1001
  },
  {
    id: '221414118',
    name: 'Core Aspect Old Money Formal ,New Autumn And Winter Vintage Gentleman Style High-Waisted Straight-Leg Loose Suit Pants, Drape Anti-Wrinkle Corduroy Casual Velvet Suit Pants, Urban Casual Daily Commuting And Going Out,British Retro And Stylish Dapper High-Waisted Straight-Leg Herd-Patterned Thick Suit Pants, Formal Pants, Anti-Wrinkle, Easy-To-Manage And Adjustable Retro Suit Pants,British Gentleman Style, Business Casual Style, Formal',
    category: 'Men',
    subcategory: 'Pants',
    price: 499100,
    originalPrice: 598920,
    link: 'https://www.shein.com/a-p-221414118.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/18/4c/1760796864e6bf858b5808a0361d6403a6e207526f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/18/ec/1760796884682bcd814b9cfe823806d65e6d748649.jpg'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 10
  },
  {
    id: '107596427',
    name: 'SUMWON Men Sweatpants,Black Loose Fit Athletic Pants |  Street Style | Essential For INS | Casual Comfort | Must-Have For The Holidays,These Black Loose Fit Athletic Pants Are Made Of High-Quality Fabric, Providing Comfort And Breathability, Perfect For Pairing With Any Sports Or Casual Wear. The Minimalist Design Makes It An Ideal Choice For Various Occasions.',
    category: 'Men',
    subcategory: 'Pants',
    price: 403765,
    originalPrice: 484518,
    link: 'https://www.shein.com/a-p-107596427.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/30/2c/175384052872f1a7d9fbbe980b8a1c5c513411f06f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/30/18/1753840544551b9f9270b6273b68337ee86a0d0668.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 1001
  },
  {
    id: '276723162',
    name: 'Sanrio 1pc Men\'s Casual Black Bottom  Pajama Pants,  Straight Leg Anime Costume, Autumn/Winter',
    category: 'Men',
    subcategory: 'Pants',
    price: 209530,
    originalPrice: 251436,
    link: 'https://www.shein.com/a-p-276723162.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/19/fc/17661350738d9924fd0780311e6c2797a8678ddebc_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/12/19/37/17661354756ca08916859946af1894f021504ec80b_square.png'
    ],
    inStock: true,
    rating: 5,
    reviews: 2
  },
  {
    id: '299494838',
    name: 'SUMWON Wide Leg Suede Pants High Waisted Relaxed Fit Casual Trousers Fall Winter Fashion Statement Bottoms Comfortable Loose Baggy Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 428835,
    originalPrice: 514602,
    link: 'https://www.shein.com/a-p-299494838.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/cb/1763704670c504845d81e301feab63e3c924441a80_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/8d/17637046796d09fcde1dc6ef690cf5a90b614526b4.jpg'
    ],
    inStock: true,
    rating: '4.3',
    reviews: 18
  },
  {
    id: '76714739',
    name: '1pc Men\'s Spring/Summer Multi-Pocket Solid Color Slim Fit Cargo Pants, Suitable For Beach, Daily Commute, Workout, Outdoor, Casual, Fitness, Running, Versatile Straight Leg Trousers, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 276805,
    originalPrice: 332166,
    link: 'https://www.shein.com/a-p-76714739.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/spmp/2025/12/02/b2/17646623037b7837ffeb1d791d685c9474360ee56a_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/12/02/99/176466243021aeef2a2264d8f0f67cff7215325678.png'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 1001
  },
  {
    id: '62500142',
    name: '1pc Men\'s Multi-Pocket Cargo Pants, Casual Loose Fit Trousers For Spring/Autumn, Suitable For Beach, Vacation, Daily Commute, Outdoor, Sports, Fitness, Jogging, Loose Straight Leg Pants, Fashionable Streetwear For Summer',
    category: 'Men',
    subcategory: 'Pants',
    price: 310500,
    originalPrice: 372600,
    link: 'https://www.shein.com/a-p-62500142.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/05/03/65/174624350035540b634f1ea3aa47c605adcb47ba5d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/08/d8/17625905938aa5e2cf47c55bd4977abbf1015c91e0.png'
    ],
    inStock: true,
    rating: 5,
    reviews: 14
  },
  {
    id: '25258259',
    name: 'Manfinity EZcore Men Flap Pocket Side Drawstring Waist Cargo Pants, Men\'s Cargo Pants, Khaki Cargo Pants Men, Baggy Khaki Pants Men, Thin Cargo Pants Men, For Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 350980,
    originalPrice: 421176,
    link: 'https://www.shein.com/a-p-25258259.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/10/29/98/17301865613e73e036c6215c444226dd4a97cfda70_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/10/29/4f/1730186574f87ed33ba37c924ebf4cf43f96d59c80.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 1001
  },
  {
    id: '73403659',
    name: 'Manfinity Homme 2pcs Men\'s Minimalist Casual Lace-Up Cargo Pants Casual Men Pants Men Pants Men Clothing Men Pants Joggers For Men Clothes Pants, Fall Clothes',
    category: 'Men',
    subcategory: 'Pants',
    price: 512555,
    originalPrice: 615066,
    link: 'https://www.shein.com/a-p-73403659.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/06/90/174649930410ed44736f359a190b5f8b8cb2029a0a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/06/7a/17464993176d611814a0c6f01f7ecbc3151de26ef6.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 1001
  },
  {
    id: '40823459',
    name: 'AXEPEAK Men\'s Color Block Patchwork Pocket Loose Straight Woven Casual Black Baggy Pants, For Boyfriend Gift, Streetwear Edition, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 384560,
    originalPrice: 461472,
    link: 'https://www.shein.com/a-p-40823459.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/08/15/40/17237223282417301c83bde7c022af2edd7ef05858_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/08/15/97/17237223437fe446c6e133592597ef40f1514df3b2.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 139
  },
  {
    id: '308202611',
    name: 'Men\'s Turndown Collar 2 Pieces Long Sleeve Top And Pants Solid Color Casual Loungewear Set, Autumn/Winter',
    category: 'Men',
    subcategory: 'Pants',
    price: 344195,
    originalPrice: 413034,
    link: 'https://www.shein.com/a-p-308202611.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/19/ac/1763529433268bf7cc0213d570136d0c9063355834_thumbnail_405x552.jpg'
    ],
    inStock: true,
    rating: '4.4',
    reviews: 74
  },
  {
    id: '47628368',
    name: 'Boyfriend Style Men\'s 1 Piece Of Autumn And Winter Casual Pants, Soft And Comfortable Fabric, Reflective Leg And Zipper Pocket, Suitable For Running, Daily Training And Leisure Outing',
    category: 'Men',
    subcategory: 'Pants',
    price: 189290,
    originalPrice: 227148,
    link: 'https://www.shein.com/a-p-47628368.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/17/cf/1760713852e732a879173339835298e93c4c419641_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/11/11/0a/17313216384eb6007224c96564e354ed3ea8efa209.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '66546992',
    name: 'Manfinity EZcore Men\'s Street Collegiate Style Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 290260,
    originalPrice: 348312,
    link: 'https://www.shein.com/a-p-66546992.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/04/10/a7/1744282754fd101aabd7536134e5607a366be06e23_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/04/10/51/1744282763e5b54f58c87899d92ad74eae6bb3bc60.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '69641950',
    name: '1pc Men\'s Solid Color Elastic Waist Casual Pants, Lightweight Silky, Summer Casual, Outdoor Hiking, Travel, Sports Long Trousers',
    category: 'Men',
    subcategory: 'Pants',
    price: 249895,
    originalPrice: 299874,
    link: 'https://www.shein.com/a-p-69641950.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/04/18/be/17449061195f3fda7ef37a6c5e3f5b5afb40b14da3_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/spmp/2025/04/18/91/17449061255e1a2ed9558cdd4ae4953a618a603a48.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 272
  },
  {
    id: '76722028',
    name: 'Men\'s Vintage-Inspired Retro-Style Trousers With A Classic Pocket Design And Toothpick-Style Detailing. These Lightweight Solid-Color Casual Pants Offer Effortless Comfort And Versatility, Pairing Seamlessly With Any For Worry-Free Styling.',
    category: 'Men',
    subcategory: 'Pants',
    price: 256680,
    originalPrice: 308016,
    link: 'https://www.shein.com/a-p-76722028.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/05/07/cb/174658600843a3ef8579a59e014c30fdcb46935f44_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/05/14/e8/174721907863b521d1941ed429930a2caa2230f5af.jpg'
    ],
    inStock: true,
    rating: 4.23,
    reviews: 184
  },
  {
    id: '119961321',
    name: 'Men\'s Lightweight Fashionable Casual Cargo Pants, Outdoor Workwear Trousers, Spring/Autumn',
    category: 'Men',
    subcategory: 'Pants',
    price: 216200,
    originalPrice: 259440,
    link: 'https://www.shein.com/a-p-119961321.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/30/12/17512628960b7733493e83d5d74764bf70d4a93473_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/06/30/7c/1751262932706642ba6b0484535eca922b6e3e6da4.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 87
  },
  {
    id: '283494959',
    name: 'DAZY Men\'s Brown Double-Breasted Suit Jacket And Wide-Leg Suit Pants Set, Business Commute Outfit For Autumn',
    category: 'Men',
    subcategory: 'Pants',
    price: 1152415,
    originalPrice: 1382898,
    link: 'https://www.shein.com/a-p-283494959.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/14/7f/1763088533f2d58806482036c89d384080702de1e7_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/14/ee/17630885441e99a9f96cdc78456eec64cb8c0a4897.jpg'
    ],
    inStock: true,
    rating: '4.2',
    reviews: 58
  },
  {
    id: '227592081',
    name: 'Manfinity Homme Men\'s White Corduroy Casual Trousers, Fashionable Versatile Straight-Leg Pants White Baggy Pants Pleated Pants Men Cream Pants Men White Pants White Slacks Men Pleated Suit Pants, For Winter',
    category: 'Men',
    subcategory: 'Pants',
    price: 411585,
    originalPrice: 493902,
    link: 'https://www.shein.com/a-p-227592081.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/21/cd/17610255651f49bfd7fe69506f1b960789ffdb0da3_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/21/93/17610255779929d384f7e7bacf69cf4e7335f41bc5.jpg'
    ],
    inStock: true,
    rating: '4.5',
    reviews: 71
  },
  {
    id: '19261604',
    name: 'Claim Dot Men Loose Fit Solid Color Drawstring Waist Pants, For Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 364435,
    originalPrice: 437322,
    link: 'https://www.shein.com/a-p-19261604.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/07/10/168899346082ee297ae01e3db2e03b64b692776ed8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/07/10/1688993483aac2723bc149d487d4d829bf827dc20e.jpg'
    ],
    inStock: true,
    rating: 4.77,
    reviews: 1001
  },
  {
    id: '222959890',
    name: 'Manfinity Homme Men\'s Suit Pants, High-End New Design, Draping Suit Pants, Designer Style Fashion Casual Black Minimalist Business Trousers Mens Loose Straight Leg Casual Pants Mens Pleated Suit Pants Baggy Dress Pants Men',
    category: 'Men',
    subcategory: 'Pants',
    price: 323955,
    originalPrice: 388746,
    link: 'https://www.shein.com/a-p-222959890.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/18/d0/176079007905b76ee71dd7ffbdfba03d4b67af5019_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/18/30/17607900904ef05918143294e23832ab7c3d1f57c3.jpg'
    ],
    inStock: true,
    rating: 4.39,
    reviews: 705
  },
  {
    id: '25796619',
    name: 'Men\'s Plain Color Crease Resistant Straight Leg Dress Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 344195,
    originalPrice: 413034,
    link: 'https://www.shein.com/a-p-25796619.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/12/25/53/170349978135710438886938a0011788762f9bba1c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/12/25/d1/1703499808f5a11da27868ab468e2cf2431c6bd880.jpg'
    ],
    inStock: true,
    rating: 4.72,
    reviews: 1001
  },
  {
    id: '63813473',
    name: '1PC Spring And Autumn Sports Pants, Fitness Pants, Quick-Drying Pants, Thin Casual Pants, Elastic Running Pants, Leggings, Breathable And Slimming',
    category: 'Men',
    subcategory: 'Pants',
    price: 135355,
    originalPrice: 162426,
    link: 'https://www.shein.com/a-p-63813473.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/14/4f/1760434429b045a6c0b8e2b6af6abe2ed58ae76470_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/03/18/51/17422347089f0e56fc623d8deb436a3ae2b49c4ae9.png'
    ],
    inStock: true,
    rating: 4.66,
    reviews: 284
  },
  {
    id: '306872840',
    name: 'Manfinity EMRG Men\'s Letter Embroidered Button-Front Long Sleeve Shirt And Solid Color Drawstring Waist Pocket Pants Casual Suit Casual Two Piece Set Men Men Summer Sweatsuit Men S Jogger Set Men S Co Ord Set Khaki Men Set,A Stylish Streetwear Versatile Item, Perfect As A Gift For Your Boyfriend.',
    category: 'Men',
    subcategory: 'Pants',
    price: 694485,
    originalPrice: 833382,
    link: 'https://www.shein.com/a-p-306872840.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/26/77/1764149424741ab1ae975af32d02dba3252a5c6b49_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/26/0c/176414944286a76b25b969e3163e5a9b3a3695e76e.jpg'
    ],
    inStock: true,
    rating: '4.5',
    reviews: 129
  },
  {
    id: '53690815',
    name: 'Manfinity RSRT Men\'s Solid Color Front Lace-Up Loose Casual Pants, For Daily Wear, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 263350,
    originalPrice: 316020,
    link: 'https://www.shein.com/a-p-53690815.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/01/15/1b/17369194816195d2d6bff443d5b2a795abd56485bd_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/01/15/99/1736919487052ac449a528d6e02ca1e76cbdd3743f.jpg'
    ],
    inStock: true,
    rating: 4.66,
    reviews: 705
  },
  {
    id: '75742097',
    name: 'Men\'s Loose Fit Straight Leg Knit Pants, Lightweight, Solid Color, Casual, Suitable For Spring, Autumn And Early Winter',
    category: 'Men',
    subcategory: 'Pants',
    price: 323955,
    originalPrice: 388746,
    link: 'https://www.shein.com/a-p-75742097.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/05/14/55/17471883834c4de67fc2a68a6d09ff353f68665fd5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/05/14/b1/1747188400175e9adc592eb7f25947b7f6e2606c41.jpg'
    ],
    inStock: true,
    rating: 4.77,
    reviews: 1001
  },
  {
    id: '234697119',
    name: 'Claim Dot Men\'s Solid Color Pleated Pocket Casual Pants Cream Pants Pleated Pants Loose Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 303830,
    originalPrice: 364596,
    link: 'https://www.shein.com/a-p-234697119.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/23/61/1761214016a0e642787481f9712cf228571376e0c9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/23/3f/1761214034720bed20541fcb0ce454839bcb44f123.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 1001
  },
  {
    id: '12872013',
    name: 'DAZY Men Solid Slant Pocket Suit Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 418255,
    originalPrice: 501906,
    link: 'https://www.shein.com/a-p-12872013.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/01/30/16750496292d052a4b4e397ce31832604197cbcd99_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/01/30/1675049655c5b601211c80d59870e18b7669a225a2.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 581
  },
  {
    id: '308656634',
    name: 'DAZY Men\'s Thermal Lined Black Pants With Pockets, Autumn/Winter',
    category: 'Men',
    subcategory: 'Pants',
    price: 526010,
    originalPrice: 631212,
    link: 'https://www.shein.com/a-p-308656634.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/8b/176429305215df62a67fe074d9b32473d1ad3a44d9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/2f/1764293064e5a152191306111712b351df8f879b65.jpg'
    ],
    inStock: true,
    rating: '4.8',
    reviews: 81
  },
  {
    id: '44268431',
    name: '1pc Spring/Summer Men\'s Multi-Pocket Solid Cargo Pants, Casual Loose Fit Hiking Trousers For Beach, Vacation, Daily Commute, Workout, Outdoor, Fitness, Jogging, Streetwear, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 256680,
    originalPrice: 308016,
    link: 'https://www.shein.com/a-p-44268431.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/16/51/1760601245627b2e91dd4eda13920806503f9e66b6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/16/0d/1760601252ddd1bea67f819b247535c3617d2bc41e.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 701
  },
  {
    id: '26522464',
    name: 'Men\'s Fashionable Casual Thermal Thermal Lined Straight Leg Pants, For Fall Winter',
    category: 'Men',
    subcategory: 'Pants',
    price: 350980,
    originalPrice: 421176,
    link: 'https://www.shein.com/a-p-26522464.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/01/23/8d/170598249029328c454a7e810651bbab4c0f909e2a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/01/23/ba/1705982512aecb28b026c42242866648c8c77bc0b8.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 775
  },
  {
    id: '225223544',
    name: 'Manfinity Hypemode Men\'s Solid Color Drawstring Waist Pockets Casual Loose Sweatpants Men Oversized Pants Oversized Sweatpants Sweatpants Wide Bottom For Men Men S Loose Straight Leg Casual Pants Men Loose Fit Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 364435,
    originalPrice: 437322,
    link: 'https://www.shein.com/a-p-225223544.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/40/176094706969ef0560e64608ae05ef5b3fd4be9494_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/7f/1760947074a9a0a0eaa42f5f99066b6ff69e7e040d.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '135961850',
    name: 'Men\'s Casual Outdoor Cargo Pants, Fashionable Drawstring Waist Workwear Trousers',
    category: 'Men',
    subcategory: 'Pants',
    price: 175835,
    originalPrice: 211002,
    link: 'https://www.shein.com/a-p-135961850.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/07/59/17518867507d12eba3c87d5bab9de0ffb4f8da400d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/07/07/55/1751886779f91a8f8fed7d9451ffe93b1d7746fae2.png'
    ],
    inStock: true,
    rating: 4.41,
    reviews: 263
  },
  {
    id: '60515930',
    name: 'Manfinity EZcore Men\'s Street Collegiate Style Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 290260,
    originalPrice: 348312,
    link: 'https://www.shein.com/a-p-60515930.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/03/d6/1756887191e76a9fa3aa06a4d2b05349adeff5b7a5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/03/6d/1756887200a883ce92d4a308d30582e75d9723ea47.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '51294529',
    name: 'SUMWON Regular Fit Corduroy Pants With Draw Strings,Men\'s Dark Brown Loose Fitting Casual Pants | Fashion Sports Style | Comfortable And Breathable Fabric, Suitable For Daily Wear | Modern Cut Design, Perfect For Various Occasions | Easily Paired With Sneakers And Casual Tops.',
    category: 'Men',
    subcategory: 'Pants',
    price: 370070,
    originalPrice: 444084,
    link: 'https://www.shein.com/a-p-51294529.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/30/34/17460161545ad1d70e71220ac5b71e7e5e709206d9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/30/70/17460161728997b6aa9557ac093dd35d5ca12256fc.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 877
  },
  {
    id: '318033395',
    name: 'HUEFORM Men\'s Woven Casual Loose Straight Leg Pants, Solid Color Elastic Waist, Suitable For Summer, Vacation, Daily Match, Party, Couple, Male Gift, School, Fall ... Men Wide Leg Pants Mens Pleated Suit Pants Men Baggy Wide Pants Loose Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 425040,
    originalPrice: 510048,
    link: 'https://www.shein.com/a-p-318033395.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/05/90/1764948314a58dcc6c9ba25104b29e4452da0247dc_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/05/05/176494831782b8bcc7d4ee670e6166bd7bfa04f438.jpg'
    ],
    inStock: true,
    rating: '5.0',
    reviews: 142
  },
  {
    id: '29782664',
    name: 'Claim Dot Men\'s Solid Color Pleated Loose Casual Pants, Plain Long Vacation Baggy Slacks Pants, For Husband, Boyfriend Gifts, For Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 350980,
    originalPrice: 421176,
    link: 'https://www.shein.com/a-p-29782664.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/01/31/76/1706680479f66c8d9064dcd76e137498fecb0f28dc_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/01/31/17/17066804939bdf7ad221e161d18585e2d6282c553a.jpg'
    ],
    inStock: true,
    rating: 4.69,
    reviews: 580
  },
  {
    id: '100388466',
    name: 'Men\'s Drawstring Waist Loose Casual Harem Pants, Street Style',
    category: 'Men',
    subcategory: 'Pants',
    price: 451950,
    originalPrice: 542340,
    link: 'https://www.shein.com/a-p-100388466.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/06/3b/1749189431212d87cde1951b56a4bf43d7d544ec86_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/06/06/33/17491894376b87da458f3539a291bdda25b46ef218.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 422
  },
  {
    id: '88275931',
    name: 'Men\'s Suit Pants, Business Lightweight Trousers, Men\'s Formal Pants, Straight Leg Casual Pants, Straight Solid Color Dress Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 202745,
    originalPrice: 243294,
    link: 'https://www.shein.com/a-p-88275931.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/22/53/1763801142b3633f253364d383c4f5dc61015104f2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/22/a4/1763801132f1ac3053f3e28d233f87cd39861cd7d3.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 345
  },
  {
    id: '101636185',
    name: 'Calvornis Men\'s Solid Color Pleated Pocket Straight Leg Casual Pants Men Black Dress Pants Men Slim Fit Dress Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 337410,
    originalPrice: 404892,
    link: 'https://www.shein.com/a-p-101636185.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/11/b6/1752228300943f3bfd46f236cae985c21ab9851cae_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/11/0a/17522283098d0ec21b96bf5f2eefd91d03084e82c4.jpg'
    ],
    inStock: true,
    rating: 4.69,
    reviews: 726
  },
  {
    id: '37187366',
    name: 'Manfinity Homme Men Casual Solid Slant Pocket Plain Long Vacation Baggy Dress Pants, For Husband, Boyfriend Gifts',
    category: 'Men',
    subcategory: 'Pants',
    price: 276805,
    originalPrice: 332166,
    link: 'https://www.shein.com/a-p-37187366.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/23/19/172705722951e95225d8cce5edfd113713a6ff27d8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/23/b5/172705725045a0b45d9f4d7359a34192b6eff8394a.jpg'
    ],
    inStock: true,
    rating: 4.72,
    reviews: 1001
  },
  {
    id: '306643426',
    name: 'Driftmere One Pair Of Men\'s Casual Sport Long Pants, With A Loose Straight-Leg Fit And A Sense Of Drape. They Are Suitable For Both Indoor And Outdoor Activities, And Can Be Used As A Couple\'s Gift. The Material Is 100% Polyester. It Comes With A Drawstring Waistband For Easy Adjustment, And There Are Various Colors To Choose From.',
    category: 'Men',
    subcategory: 'Pants',
    price: 222985,
    originalPrice: 267582,
    link: 'https://www.shein.com/a-p-306643426.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/26/d8/1764149879b68098cf4d68eacbce7f61f7ff691856_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/26/de/1764149890789befe4dbe013ec0db34eac9a273556.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 5
  },
  {
    id: '137279194',
    name: 'ROMWE MEN Goth Men\'s Loose Fit Straight Leg Sweatpants With Dark Floral Pattern, Comfortable Sports Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 350980,
    originalPrice: 421176,
    link: 'https://www.shein.com/a-p-137279194.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/14/c9/17604285348520ccf169890186f0119e50cddc1dd2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/23/dd/1753236951e0ebf69f49eca2e3f5d3ab824515c88b.jpg'
    ],
    inStock: true,
    rating: 4.74,
    reviews: 305
  },
  {
    id: '60055615',
    name: 'Claim Dot Men\'s Casual Suit Pants, Minimalist, Suitable For Summer',
    category: 'Men',
    subcategory: 'Pants',
    price: 364435,
    originalPrice: 437322,
    link: 'https://www.shein.com/a-p-60055615.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/04/08/b9/1744106843e6d8726487c653e6d6db52d5044a0134_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/04/08/f3/174410685652a60d9235568f8c8628c9b915cdb0ba.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 1001
  },
  {
    id: '59149607',
    name: 'PAVTROS Men\'s Drawstring Waist Side Striped Wide Leg Loose Casual Sweatpants, Track Pants For Men, For Rave',
    category: 'Men',
    subcategory: 'Pants',
    price: 364435,
    originalPrice: 437322,
    link: 'https://www.shein.com/a-p-59149607.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/11/63/1744358416acdba972d27498391f3259e08e7ce517_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/11/11/17443584285d9139d40292c884a27b4d8918067451.jpg'
    ],
    inStock: true,
    rating: 4.77,
    reviews: 570
  },
  {
    id: '38579252',
    name: 'Manfinity Homme Men\'s Solid Color Cargo Pocket Straight Loose Casual Trousers, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 411585,
    originalPrice: 493902,
    link: 'https://www.shein.com/a-p-38579252.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/07/12/c9/172077773577f26a3a1ca32d4658a41e764085ebb6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/07/12/ac/172077776804bb0c6b552b04a3666585415cec9e91.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 1001
  },
  {
    id: '222956088',
    name: 'Manfinity Homme Men\'s Suit Pants, High-End New Design, Draping Suit Pants, Designer Fashion Casual Black Minimalist Business Trousers Mens Loose Straight Leg Casual Pants Beige Pants For Men Mens Pleated Suit Pants Men Slacks Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 330740,
    originalPrice: 396888,
    link: 'https://www.shein.com/a-p-222956088.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/18/19/17607900709dbafc41eaa29ed30ff88e8915e1c416_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/18/bc/17607900827ba27eaddfea12ec0724efbb6c936636.jpg'
    ],
    inStock: true,
    rating: 4.39,
    reviews: 705
  },
  {
    id: '324211326',
    name: 'HUEFORM Men\'s American Street Style PU Leather Brown Relaxed Fit Wide Leg Casual Pants,Boyfriend Gift,Men Pants,Leather Pants,Men\'s Street Loose Leather Pants For Men',
    category: 'Men',
    subcategory: 'Pants',
    price: 539465,
    originalPrice: 647358,
    link: 'https://www.shein.com/a-p-324211326.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/12/47/1765510514c82c6cca49f3192cadd2d328260451ec_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/12/78/1765510517992f77193be07a720e7630f4326757a7.jpg'
    ],
    inStock: true,
    rating: '4.6',
    reviews: 129
  },
  {
    id: '296715129',
    name: 'Men\'s Sports Outdoor Work Pants, Solid Color Ankle Tied Multi Pocket Cropped Pants, Simple And Versatile Pants, Elastic Waistband With Drawstring, Suitable For Giving To Husbands, Boyfriends, As Gifts',
    category: 'Men',
    subcategory: 'Pants',
    price: 263350,
    originalPrice: 316020,
    link: 'https://www.shein.com/a-p-296715129.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/22/1f/1766377110a788c32dfe945e49ab3adb0fbe05fd47_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/16/45/17632752381cbcd130103569a183b71e001b4d7479.png'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 35
  },
  {
    id: '138198143',
    name: 'Manfinity EMRG Men\'s Solid Color Casual Sweatpants Black Washed Pants Black Sweatpants Men Men Black Joggers Washed Black Pants Men Black Denim Sweatpants Black Washed Sweatpants Washed Sweatpants Acid Wash Sweatpants Vintage Sweatpants',
    category: 'Men',
    subcategory: 'Pants',
    price: 465405,
    originalPrice: 558486,
    link: 'https://www.shein.com/a-p-138198143.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/29/7d/175376591331243ae422c15fd4427836c48bd875b4_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/29/d4/1753765924cb4c67483d242e6df02891b6c6d0b174.jpg'
    ],
    inStock: true,
    rating: 4.67,
    reviews: 34
  },
  {
    id: '70824951',
    name: 'Men\'s Casual Color Block Patchwork Long Pants, Fashionable For Summer, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 377890,
    originalPrice: 453468,
    link: 'https://www.shein.com/a-p-70824951.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/04/25/0e/17455699287d5f25eec1743925b98081d2a4f8e564_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/04/25/82/1745569935dfb753f57cb2b2295c14288216a5e051.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 466
  },
  {
    id: '301742043',
    name: 'PAVTROS Young Street Style Wide Leg Pants With Double Zipper Waist And Side Panels,Streetwear,Baggy,Graphic,Matching,Friends,I Love My Boyfriend,Street Style,Couples,Double Waistband Reflective Edge Strips For Hot-Selling Embroidered Patterns',
    category: 'Men',
    subcategory: 'Pants',
    price: 465405,
    originalPrice: 558486,
    link: 'https://www.shein.com/a-p-301742043.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/cf/1764293597cd160ed1e28d28dd3ea9d234ec94dcb1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/cd/176429361111ee283913193e08fa8bc2777ddcb134.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 70
  },
  {
    id: '25370391',
    name: 'Manfinity Homme Men\'s Casual Solid Color Cargo Pants With Flap Pockets And Drawstring Waist, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 391345,
    originalPrice: 469614,
    link: 'https://www.shein.com/a-p-25370391.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/06/18/47/1718692266f672ab2ba43f7d1e1579ce9af9234ad8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/10/26/49/1698284989d2d986a70c4f2270432293f94b26fc6d.jpg'
    ],
    inStock: true,
    rating: 4.77,
    reviews: 1001
  },
  {
    id: '324530000',
    name: 'HUEFORM Men\'s Solid Color Pleated Straight Loose Casual Pants Mens High Waisted Pants White Dress Pants Cream Pants Mens Pleated Suit Pants Men Church Pants Old Money,Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions, Boyfriend/Husband Gift, Anniversary /Birthday Gift Party Christmas New Years Wedding',
    category: 'Men',
    subcategory: 'Pants',
    price: 350980,
    originalPrice: 421176,
    link: 'https://www.shein.com/a-p-324530000.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/12/9a/1765532232f3fbdbca85162dd795bed14da3160335_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/12/b2/17655322478b05bfe9daafe15fd17af9fa0e9188be.jpg'
    ],
    inStock: true,
    rating: '4.3',
    reviews: 51
  },
  {
    id: '63412546',
    name: 'Men\'s Solid Color Sports Pants Loose American Casual Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 222985,
    originalPrice: 267582,
    link: 'https://www.shein.com/a-p-63412546.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/03/24/16/1742806624c67e958ad58ea04a23c84705d0326ca0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/03/24/d1/1742806716628ffd4fef8d2a8a63a4bc49fb42a39d.png'
    ],
    inStock: true,
    rating: 4.73,
    reviews: 384
  },
  {
    id: '35744820',
    name: 'Men\'s Fashion Straight Corduroy Casual Pants, For Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 310500,
    originalPrice: 372600,
    link: 'https://www.shein.com/a-p-35744820.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/05/23/06/1716460251f3a545f94c9318fb60b32849e6679376_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/05/23/a7/1716460274952ad68d90a0d51cf7d5ab6087c3891e.jpg'
    ],
    inStock: true,
    rating: 4.67,
    reviews: 642
  },
  {
    id: '22142621',
    name: 'Manfinity Homme Men\'s Loose Fit Cargo Pants With Letter Print And Flap Pockets, Plain Work Long Baggy Light Grey Cargo Pants, For Husband, Boyfriend Gifts, For Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 350980,
    originalPrice: 421176,
    link: 'https://www.shein.com/a-p-22142621.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/03/22/7e/171110310648f15bf9d804af4d879659ca4c800192_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/03/22/1f/17111031195bd7c9334ff4620d5fd3747b5eec7038.jpg'
    ],
    inStock: true,
    rating: 4.74,
    reviews: 1001
  },
  {
    id: '241340321',
    name: '1pc Men\'s Thermal Lined Thermal Leggings - Thick Wool Autumn/Winter Pants, Elastic Waist Skinny Trousers',
    category: 'Men',
    subcategory: 'Pants',
    price: 175835,
    originalPrice: 211002,
    link: 'https://www.shein.com/a-p-241340321.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/11/40/17654168103b3bb65b94a1511ae53c8da7033a2636_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/09/19/ba/1726713071a86adedbacc091a351e916ab4cf9b0ec.jpg'
    ],
    inStock: true,
    rating: '4.4',
    reviews: 146
  },
  {
    id: '161545981',
    name: 'Calvornis Men\'s Solid Color Pleated Casual Formal Button Trousers Suit Pants Loose Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-161545981.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/20/d5/1763603129f4c8a58f9587ae1ddfb040a62d0a9cd6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/25/bd/1756085387f2c37b793effa82d573aecdf75ae930c.jpg'
    ],
    inStock: true,
    rating: 4.72,
    reviews: 1001
  },
  {
    id: '52990844',
    name: 'Men\'s Casual Drawstring Sports Pants, For Running, Exercising, Jogging, Fitness, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 283590,
    originalPrice: 340308,
    link: 'https://www.shein.com/a-p-52990844.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/01/13/a1/17367527901644bd1b992e71c63d062292e49ad3c5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/01/04/e4/173595864703f721cb1eecd09db8efc9ba8ed86ddd.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 700
  },
  {
    id: '137741415',
    name: 'Men\'s Pants, Solid Color Minimalist Multi-Pocket Cargo Pants, Fashionable Tapered Leg, Campus Style Outdoor Hiking Casual Pants, Autumn',
    category: 'Men',
    subcategory: 'Pants',
    price: 175835,
    originalPrice: 211002,
    link: 'https://www.shein.com/a-p-137741415.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/04/15/17622704867bc9f763ee985a1a94b55b4dd5b00bfd_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/04/83/1762270496ac41dd334856ace343728937e3ecadb2.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 105
  },
  {
    id: '302017402',
    name: 'Manfinity Homme Men\'s Solid Color Drawstring Waist Cargo Pocket Pleated Pants Mens Cargo Men Cargo Pants Army Green Army Green Cargo Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 310500,
    originalPrice: 372600,
    link: 'https://www.shein.com/a-p-302017402.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/24/15/1763948996b7de3438928609aee7d1a4bbe0d8e530_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/24/e9/17639490048c96cf9e3fff25291a875d50fff11a21.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 679
  },
  {
    id: '242918066',
    name: 'Men\'s Lightweight Casual Fashionable Versatile Pants, Outdoor Cargo Pants, Spring/Autumn',
    category: 'Men',
    subcategory: 'Pants',
    price: 290260,
    originalPrice: 348312,
    link: 'https://www.shein.com/a-p-242918066.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/20/c5/17609743373d94ff7a7e0dce653fd07de7f3059b3e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/20/1c/17609743465af16f516488c8e76cee5b9a310b43ce.jpg'
    ],
    inStock: true,
    rating: 4.64,
    reviews: 14
  },
  {
    id: '71785522',
    name: 'Men\'s 2 Pieces Sports Outdoor Running Ankle Pants, Solid Color Simple Fitness Pants, Elastic Waistband With Drawstring, Multiple Colors To Choose From, For All Seasons, Suitable For Giving As A Gift To Husbands, Boyfriends, Young People, Suitable For Friends Who Like Fitness Sports',
    category: 'Men',
    subcategory: 'Pants',
    price: 438495,
    originalPrice: 526194,
    link: 'https://www.shein.com/a-p-71785522.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/04/17/ed/1744871389eb20898327074f090e979ce9704b17d6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/07/18/43/175283022142a32f1ac4b9f4bfb371a04abba7bf0c.png'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 269
  },
  {
    id: '230159983',
    name: 'HIMLAND Men\'s Woven Pocket Plaid Wide Leg Loose Elastic Waist Casual Pants Vintage Pants Men Men Drawstring Pants Men Pajama Pant Lounge Pants Men Plaid Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-230159983.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/23/b8/1761198843e80fd29a4a90f68980d7e9b999d3b570_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/23/60/1761198853b9e3c4ff6b65804204012d6fbef61a38.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 1
  },
  {
    id: '320706983',
    name: 'TOKVUE Men\'s Vintage Loose Wide Leg Pants,Overalls,Corduroy,With Metallic Stud Detail,Streetwear,Grunge Streetwear Casual Cargo Pants,Daily Boyfriend/Husband Gift, Anniversary Gift, Christmas Outfits,Fall&Winter',
    category: 'Men',
    subcategory: 'Pants',
    price: 445280,
    originalPrice: 534336,
    link: 'https://www.shein.com/a-p-320706983.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/09/54/1765264781d47b665ec376df118d649197a935aaeb_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/09/b5/1765264790683b449e05546e943de24b837f0d594b.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 110
  },
  {
    id: '61192040',
    name: 'Claim Dot Men\'s Solid Color Pleated Pocket Loose Straight Casual Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 303830,
    originalPrice: 364596,
    link: 'https://www.shein.com/a-p-61192040.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/03/17/01/174217599022ff713dc85355bb3520e0a93790f366_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/03/17/75/1742176013ece794d4b51746861fbb64fa8dd85f6a.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 431
  },
  {
    id: '306633045',
    name: '2pcs Men\'s Drawstring Waist Solid Color Long Sports Pants, Basic Black Fitness Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 209530,
    originalPrice: 251436,
    link: 'https://www.shein.com/a-p-306633045.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/12/90/1757686187a5dd74663d2171d6a7c896fd703dcb9f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/09/12/88/1757686202c368cf7acdf59d3e383578863758a1b1.png'
    ],
    inStock: true,
    rating: '4.4',
    reviews: 88
  },
  {
    id: '30756311',
    name: 'Men\'s Solid Color Straight Loose Casual Zip-Up Cargo Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 478860,
    originalPrice: 574632,
    link: 'https://www.shein.com/a-p-30756311.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/05/30/08/171705401153403cd7af866102de7bd790fd59c9af_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/02/29/ad/170919502339beb2271b9b84c8ce522a0bd44d6d7c.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 914
  },
  {
    id: '44385166',
    name: 'Manfinity EZcore Men\'s Street Collegiate Style Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 290260,
    originalPrice: 348312,
    link: 'https://www.shein.com/a-p-44385166.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/10/09/9c/1728466403cf8541eedb6aa67e7342d4ec28de1d38_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/10/09/1a/1728466418efe1b383dc37b96c400827c41dea05be.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '52883255',
    name: 'Manfinity Roghcode Men\'s Niche Design Multi-Panel Fake Two-Piece Loose Japanese Dark Oversized Wide-Leg Pants Boyfriend Gift Solid Color Long Oversized Pure Black Pants For Husband',
    category: 'Men',
    subcategory: 'Pants',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-52883255.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/01/23/cc/1737613135b2b32669a56c3825779974dcca4cfc0b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/01/23/f0/173761315341d844d09fa7de9256fd9394702e0531.jpg'
    ],
    inStock: true,
    rating: 4.51,
    reviews: 295
  },
  {
    id: '63086190',
    name: 'Sport MetroGents Men\'s Solid Color Drawstring Waist Casual Fitness Sports Pants Fall Breathable',
    category: 'Men',
    subcategory: 'Pants',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-63086190.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/03/29/e1/1743236363a6360f301d277dbf68c90f99bea5d83e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/03/29/67/1743236371e7cd00d3b0af5ec4113c917e94f94908.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 1001
  },
  {
    id: '21137731',
    name: 'Men Contrast Tape Side Drawstring Waist Pants, For Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 330740,
    originalPrice: 396888,
    link: 'https://www.shein.com/a-p-21137731.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/09/11/24/1694402983167cb44cb2fc3c65f3f725d7e498464d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/09/11/fd/169440299561820986e3715ca37fb4aefaa344c47b.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 433
  },
  {
    id: '245671378',
    name: 'Men\'s Old Money Men Casual Business Suit Trousers',
    category: 'Men',
    subcategory: 'Pants',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-245671378.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/21/b5/1761041783cf68332631fbdf7e5b4c0c0c1cf70604_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/21/63/1761042066ff60f11a7f1e9f817a3757bc067c7f34.jpg'
    ],
    inStock: true,
    rating: 4.51,
    reviews: 147
  },
  {
    id: '308666580',
    name: 'SUMWON Men\'s Heathered Sweatpants Relaxed Fit Casual Joggers Elastic Waistband Side Pockets Drawstring Closure Comfortable Loungewear Everyday Wear',
    category: 'Men',
    subcategory: 'Pants',
    price: 294515,
    originalPrice: 353418,
    link: 'https://www.shein.com/a-p-308666580.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/61/1764294857f1a24a846720bca9d300fec4fe7bdd2f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/49/17642948713b97f8e48074a38b21e29b648a50153f.jpg'
    ],
    inStock: true,
    rating: '4.6',
    reviews: 46
  },
  {
    id: '144468989',
    name: 'Men\'s Autumn & Winter Outdoor Workwear Straight-Leg Pants: Large Zippered Pockets, Elastic Drawstring Waist, Slant Pockets-Perfect For Trekking, Fishing, Camping, Climbing, Sports, Fitness, Running And Casual Wear.',
    category: 'Men',
    subcategory: 'Pants',
    price: 195960,
    originalPrice: 235152,
    link: 'https://www.shein.com/a-p-144468989.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/08/05/53/175438273722cffc5d5bd5e9603d83565eeb45649c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/07/28/2e/17536907996ce4492ee7e98307729e0abdf261d978.png'
    ],
    inStock: true,
    rating: 4.71,
    reviews: 660
  },
  {
    id: '147584877',
    name: 'Men\'s Solid Color Lightweight Breathable Knit Polyester Casual Joggers, Outdoor Exercise Boyfriend Style Essential Basketball Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 175835,
    originalPrice: 211002,
    link: 'https://www.shein.com/a-p-147584877.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/08/19/f6/175559550219b199fd9faf056c92fc4c62a1b3dee8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/09/02/19/1756805605a323f9158088eeafa0af99f6a746f3a6.png'
    ],
    inStock: true,
    rating: 4.47,
    reviews: 104
  },
  {
    id: '74652056',
    name: 'Manfinity Roghcode Men\'s Black High Waist Fold Pleated Wide Leg Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-74652056.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/08/5b/174669532175de90dd7a516b6b6b139619bad069c3_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/08/13/174669533737901b5aefe801cf08408867b0f21dd3.jpg'
    ],
    inStock: true,
    rating: 4.56,
    reviews: 305
  },
  {
    id: '149300588',
    name: 'Letter & Cross Print Solid Color Straight Leg Sweatpants, Loose Fit, Unisex, Streetwear Casual, Comfortable, Sports Pants, For Men, 2000s Style',
    category: 'Men',
    subcategory: 'Pants',
    price: 330740,
    originalPrice: 396888,
    link: 'https://www.shein.com/a-p-149300588.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/spmp/2025/08/05/03/17543756958424209d2fe370f1d2db6edc2bf5b913_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/p/abc/2025/08/05/81/1754375711652609e841d72c234b5497760c2773fe.png'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 14
  },
  {
    id: '304900262',
    name: 'Men Letter Graphic Drawstring Waist Sweatpants Straight Leg Long Plain Black Going Out Goth, Goth Sweatpants, Men\'s Graphic Sweatpants, Black Sweatpants With White Graphic, For Rave, Back To School,Sport Drawstring Waist Loose Fit Wide Leg Sweatpants,For Workout Gymwear, Emo, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 337410,
    originalPrice: 404892,
    link: 'https://www.shein.com/a-p-304900262.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/73/17643173167fa9d4993ff3f2fbfe2b228febb340bd_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/58/17643173301f7a963a30f9dc6f699f665a54eabe53.jpg'
    ],
    inStock: true,
    rating: 4.73,
    reviews: 56
  },
  {
    id: '303585328',
    name: 'Claim Dot Loose Fit Men\'s Solid Color Pleated Wide Leg Pants Men Flared Dress Pant Men S Wide Leg Pants Men Baggy Wide Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 323955,
    originalPrice: 388746,
    link: 'https://www.shein.com/a-p-303585328.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/25/2b/176403297057cc1991e2e7a0d543c46715e3151d9e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/25/8b/17640329770f5131efae5802667817a9b8bb33fe73.jpg'
    ],
    inStock: true,
    rating: 4.74,
    reviews: 694
  },
  {
    id: '68265275',
    name: 'Men\'s Suit Pants, Business Lightweight Trousers, Men\'s Formal Pants, Straight Leg Casual Pants, Straight Solid Color Dress Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 195960,
    originalPrice: 235152,
    link: 'https://www.shein.com/a-p-68265275.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/22/ed/176380113904f8d1b46dbed66dd7a7654a949c50d7_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/03/82/17647643925ee1a1d3ad3bb45dd7bb1a56293e38c2.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 345
  },
  {
    id: '11068371',
    name: 'DAZY Men Zipper Fly Straight Leg Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 451950,
    originalPrice: 542340,
    link: 'https://www.shein.com/a-p-11068371.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2022/09/02/16620968952c0219b37357ec4041a471706592b253_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2022/09/02/16620969184dd7a8425a5bd6909c70ea4411916499.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 190
  },
  {
    id: '309624599',
    name: '1PC Men\'s Solid Color Simple Style Versatile Knitted Pants With Cross Print, Fashionable And Good-Looking, Suitable For Sports And Leisure Occasions, Stylish And Versatile, Comfortable To Wear. Women Can Buy Them As Gifts For Boyfriends And Husbands, And They Will Be A Wonderful Present.',
    category: 'Men',
    subcategory: 'Pants',
    price: 169050,
    originalPrice: 202860,
    link: 'https://www.shein.com/a-p-309624599.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/16/fd/1765892363f53d2b42a98a432198e12d5398371983_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/15/d2/176053252684037947d0544abd2170a85aa8fd3ec8.jpg'
    ],
    inStock: true,
    rating: '4.7',
    reviews: 74
  },
  {
    id: '98094023',
    name: 'Men\'s Classic Dress Pants, Solid Color Elastic Business Casual Pants, Elegant Luxury Style For Spring/Summer',
    category: 'Men',
    subcategory: 'Pants',
    price: 202745,
    originalPrice: 243294,
    link: 'https://www.shein.com/a-p-98094023.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/spmp/2025/03/31/3f/1743424866599286b459c2b412cf17fd78d1ae5b95_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/03/31/e1/1743426163beaa025b3ee3ea8e7f230505128c13d4.png'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 1001
  },
  {
    id: '317546095',
    name: 'TOKVUE Men\'s Street Style INS Side Embroidered Pants, Suitable For Music Festivals, Nightclubs, Boyfriend/Husband Gifts, Anniversary Gifts, Black Casual Sweatpants',
    category: 'Men',
    subcategory: 'Pants',
    price: 377890,
    originalPrice: 453468,
    link: 'https://www.shein.com/a-p-317546095.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/05/cf/1764917985593b55792b810f592eafbae7cee8f487_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/05/12/1764917994105f6a1e7465b33898766b0739430750.jpg'
    ],
    inStock: true,
    rating: 4.67,
    reviews: 87
  },
  {
    id: '39362823',
    name: 'Men Solid Color Casual Loose Sweatpants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 297045,
    originalPrice: 356454,
    link: 'https://www.shein.com/a-p-39362823.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/07/23/2e/1721703504ec341ae6573fdd369d229d2413fa84b9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/07/23/a4/172170351831bc0d4c3dddbda5ccd2f048f3d1ef91.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 708
  },
  {
    id: '227759910',
    name: 'Claim Dot Men\'s Solid Color Pleated Straight Loose Casual Suit Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 323955,
    originalPrice: 388746,
    link: 'https://www.shein.com/a-p-227759910.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/21/0d/176104029426499ceffd160c7c1c9355b100327f45_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/21/15/1761040307c3ac1f5cb5bcd7a34b7460340656828b.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 418
  },
  {
    id: '91455666',
    name: 'Men\'s Retro Loose Corduroy Casual Pants With Slant Pockets - Breathable Straight Leg Drawstring Waist Sweatpants, Suitable For Urban Strolling And Outdoor Activities',
    category: 'Men',
    subcategory: 'Pants',
    price: 337410,
    originalPrice: 404892,
    link: 'https://www.shein.com/a-p-91455666.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/08/02/3a/1754104835315c9494970d4bb35351dbd3a3400639_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/05/28/fc/1748419940651cdad8fabc59477f8ea038a684a204.png'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 166
  },
  {
    id: '288882370',
    name: '1pc Men\'s Linen Drawstring Pants,Trousers Men,Casual Trousers For All Seasons,Casual Daily Wear, Weekend Outings,Linen Blend, Solid Color, Knit Fabric, Yoga & Beach Pants, Fall,Making It A Great Gift For Boyfriends Or Husbands',
    category: 'Men',
    subcategory: 'Pants',
    price: 337410,
    originalPrice: 404892,
    link: 'https://www.shein.com/a-p-288882370.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/24/79/17612688087a7841f3db10c167307de8e13663a646_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/24/3f/17612688464e52a6aa219bb300f85122bd303b1d2b.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 24
  },
  {
    id: '49036130',
    name: 'Manfinity Homme Men\'s Solid Color Drawstring Pocket Simple Casual Trousers, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 263350,
    originalPrice: 316020,
    link: 'https://www.shein.com/a-p-49036130.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/11/29/0d/1732842734c9b43e35fec688824c18d75cafc75843_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/11/29/95/1732842752707625bf9a5f9ce3bd599641bb8ebf88.jpg'
    ],
    inStock: true,
    rating: 4.72,
    reviews: 1001
  },
  {
    id: '35151561',
    name: '1pc Men\'s Black Street Style Comfortable Casual Jeans, Spring & Summer Cargo Pants, Suitable For City Walking & Outdoor Activities',
    category: 'Men',
    subcategory: 'Pants',
    price: 404800,
    originalPrice: 485760,
    link: 'https://www.shein.com/a-p-35151561.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/06/29/f6/17196477404a0bff6c91d7aedc50fb580a732f77ea_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/28/52/17643302536f5a6446b6af112414330671ad679b4a.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 631
  },
  {
    id: '13737815',
    name: 'DAZY Men Slant Pocket Suit Pants Without Belt Dress Pants Business Attire',
    category: 'Men',
    subcategory: 'Pants',
    price: 404800,
    originalPrice: 485760,
    link: 'https://www.shein.com/a-p-13737815.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/03/10/16784131472430c194bccd173aad2f01499123e20d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/03/10/16784132148a58c796a2791f22c847c796b4586431.jpg'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 1001
  },
  {
    id: '36843342',
    name: 'Men\'s Solid Color Straight Leg Casual Business Travel Pants, Old Money Style, For Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 323955,
    originalPrice: 388746,
    link: 'https://www.shein.com/a-p-36843342.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/06/27/b4/1719455491d146cbfd042dc6c542b97d4daac4030d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/06/27/6c/1719455499e800adecda6d974ccc1b358c8cf03469.jpg'
    ],
    inStock: true,
    rating: 4.71,
    reviews: 1001
  },
  {
    id: '294374338',
    name: 'Men\'s Casual Sports Pants, With A Loose Straight Fit And A Drapey Feel, Suitable For Home And Outdoor Activities. They Can Be Used As A Couple\'s Gift. Made Of 100% Polyester Fiber, They Come With A Drawstring Waistband For Easy Adjustment And Are Available In Multiple Colors.',
    category: 'Men',
    subcategory: 'Pants',
    price: 155595,
    originalPrice: 186714,
    link: 'https://www.shein.com/a-p-294374338.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/10/35/17653765296105b5b1a3d57e0269690cfcc5e4c943_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/10/63/17653765163f5102cd70ac6460deae12790ceac774.jpg'
    ],
    inStock: true,
    rating: '4.4',
    reviews: 26
  },
  {
    id: '31581967',
    name: 'Manfinity Homme Men\'s Letter Patch Cargo Style Pants With Pockets And Elastic Cuffs, For Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 310500,
    originalPrice: 372600,
    link: 'https://www.shein.com/a-p-31581967.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/03/15/3c/17104905260223fc0ac7495f5ddcdd377f658871ca_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/03/15/1e/171049055148a07a5d30fca562a7167b4328cae84f.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 1001
  },
  {
    id: '59055020',
    name: 'Men\'s Retro Old Money Style Drawstring Casual Comfortable Long Sweatpants Four Seasons Versatile, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 330740,
    originalPrice: 396888,
    link: 'https://www.shein.com/a-p-59055020.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/11/d3/1765444999486d68d295a227b57fc6387dbb135696_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/11/b8/176544502934316945547fdbd1427ecef6e43b009c.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 150
  },
  {
    id: '22278095',
    name: 'Men\'s Lightweight Casual Zipper Pocket Drawstring Waist Harem Pants, Spring/Summer',
    category: 'Men',
    subcategory: 'Pants',
    price: 310500,
    originalPrice: 372600,
    link: 'https://www.shein.com/a-p-22278095.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/08/29/e2/1693286745149b00c320e286bd5454c23d51cba4c9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/08/29/38/1693286748f90caccf7149c3f8264d0f0b4e5fdc07.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 1001
  },
  {
    id: '63308876',
    name: 'Manfinity Sport Corelite Graphic Print Drawstring Waist Casual Jogger Pants Comfortable Breathable Pattern Design Baggy For Gym Slacks',
    category: 'Men',
    subcategory: 'Pants',
    price: 249895,
    originalPrice: 299874,
    link: 'https://www.shein.com/a-p-63308876.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/19/48/176353236099d6525885a5685bd2959e228cd8b9fd_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/19/46/1763532369f5f729d3f13d3e1d2c9f22e361eb52c6.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 195
  },
  {
    id: '53334322',
    name: 'Manfinity RSRT Men Solid Drawstring Waist Pants Tapered Long Slacks Linen Cool Plain Going Out, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 337410,
    originalPrice: 404892,
    link: 'https://www.shein.com/a-p-53334322.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/01/13/fa/173674028024c7423a61913fe2460dee1fdebad9e7_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/01/13/f3/173674029689fa2efb463e4e270310ce43ffb20537.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 1001
  },
  {
    id: '15467167',
    name: 'Men Plaid Print Slant Pocket Suit Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-15467167.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/04/27/16825828970ee9fb7d16cb6180f2ed10311cc7ebb6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/04/27/168258290823d0110ddb0c229b7c18fb29b3930d28.jpg'
    ],
    inStock: true,
    rating: 4.74,
    reviews: 1001
  },
  {
    id: '28744240',
    name: 'Claim Dot Men\'s Simple Pants Baggy Long Drawstring Cargo Plain Going Out, For Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 337410,
    originalPrice: 404892,
    link: 'https://www.shein.com/a-p-28744240.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/01/05/b9/17044592657786c827ffd775a6fa722bfd2f921fbb_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/01/05/49/1704459291d7afc6f42eb0afb2286f9f033b856ecc.jpg'
    ],
    inStock: true,
    rating: 4.74,
    reviews: 1001
  },
  {
    id: '266571686',
    name: '1PC-Men\'s Fleece Jogger Pants - Soft Thermal Outdoor Lounge Sweatpants, Elastic Waist Athletic Casual Trousers For Running Hiking Winter',
    category: 'Men',
    subcategory: 'Pants',
    price: 121900,
    originalPrice: 146280,
    link: 'https://www.shein.com/a-p-266571686.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/31/38/176192431899159f56be656890a3a0d742b551bd77_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/10/31/55/176192511545d451c6d897eac8928586b8ffb41bec.png'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 162
  },
  {
    id: '15728046',
    name: 'Manfinity Homme Men Loose Grid Print Drawstring Waist Pants, For Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 303830,
    originalPrice: 364596,
    link: 'https://www.shein.com/a-p-15728046.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/07/29/5d/1722216625f2a649fc66f176ad6956b64d5665dd71_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/07/29/4c/1722216648ca38e2fc8b28e637787426b168df246e.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 1001
  },
  {
    id: '323273922',
    name: 'ROMWE MEN Men\'s Fashion Leopard Print Elastic Waist Loose Straight Leg Casual Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-323273922.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/11/61/1765439493ca02d94425132e96d915e57bae2f771c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/11/3b/17654395057c7f1fbf2a1213a737f5b769173b3c1b.jpg'
    ],
    inStock: true,
    rating: '4.7',
    reviews: 27
  },
  {
    id: '249506895',
    name: 'HIMLAND Men\'s Casual Solid Color Woven Long Pants Men Cords Corduroy Pants Men Olive Green Pants Men Men S Loose Straight Leg Casual Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 404800,
    originalPrice: 485760,
    link: 'https://www.shein.com/a-p-249506895.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/ea/1761788993acb34e00a953bfa144731cc9d690c9be_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/a5/1761789004d4184aa6da627d0d035504fea4c0d9b1.jpg'
    ],
    inStock: true,
    rating: '4.3',
    reviews: 12
  },
  {
    id: '268567154',
    name: 'PAVTROS Men\'s Letter Print Drawstring Waist Loose Fit Casual Sweatpants Sweatpants Grey Stacked Sweat Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 465405,
    originalPrice: 558486,
    link: 'https://www.shein.com/a-p-268567154.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/05/2f/1762336182a7161fb2fdf8e155d92fef7281984286_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/05/96/1762336185863f4dad03cd1fdc8c9a9ad99c943700.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 4
  },
  {
    id: '31979925',
    name: '2pcs/Pack Men\'s Casual Versatile Simple Cargo Pants, Fall Clothes',
    category: 'Men',
    subcategory: 'Pants',
    price: 519340,
    originalPrice: 623208,
    link: 'https://www.shein.com/a-p-31979925.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/12/15/6a/17342446822efbdfd8aafa01ed8ad5d1abb5d77469_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/03/22/c5/1711109862e4b2c81665955f4fd78d12e4a72169cc.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 1001
  },
  {
    id: '40425858',
    name: 'Grunge Goth Y2K Style Men\'s Cargo Pants With Pentagram Patch, Straight Leg Pockets, Casual Loose Fit Streetwear Jeans',
    category: 'Men',
    subcategory: 'Pants',
    price: 505885,
    originalPrice: 607062,
    link: 'https://www.shein.com/a-p-40425858.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/08/20/d7/1724147088de29b6089ef8e1e4d1ad8cebbd7a55b5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/08/05/ac/1722844507fd3ad1897db17fd5a226cea097e10e5b.png'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '53990685',
    name: '1pc Men\'s Multi-Pocket Cargo Pants, Suitable For Spring/Autumn, Summer Beach, Daily Commute, Sports Training, Outdoor Hiking, Casual, Fitness, Jogging, Straight Leg Trousers, Versatile & Fashionable, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 283590,
    originalPrice: 340308,
    link: 'https://www.shein.com/a-p-53990685.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/01/05/e7/17360637280c3c0c7aed972b0b26c958ce0efd391a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/12/03/86/173319530564dab9815c839f70d3a0c804fb06d536.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 487
  },
  {
    id: '297386541',
    name: 'Rest Era Men\'s Contrast Color Drawstring Hooded Top And Pants Loungewear Set, Fluffy Winter Clothes',
    category: 'Men',
    subcategory: 'Pants',
    price: 344195,
    originalPrice: 413034,
    link: 'https://www.shein.com/a-p-297386541.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/7b/1763705697434487469470a2e26b8785a64b7ba10a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/d0/1763705707f071b85cdfa63b33c3de19d9e4f809e0.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 2
  },
  {
    id: '305809254',
    name: 'Claim Dot Manfinity Hypemode High Waist Designer Men\'s Wide Leg Pleated Loose Casual Pants Wide Leg Pants Grey Pants Pleated Pants Loose Pants Oversized Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-305809254.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/26/8d/1764122633904fd5f4abd532d331bc7961ff6265cd_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/26/e3/1764122643bba84cc916ce66eb2cde63237cbd9107.jpg'
    ],
    inStock: true,
    rating: 4.74,
    reviews: 119
  },
  {
    id: '157482428',
    name: 'PAVTROS Manfinity Streetrush Men\'s 2 In 1 Zipper Hem Streetwear Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 364435,
    originalPrice: 437322,
    link: 'https://www.shein.com/a-p-157482428.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/08/fa/175464705058a6548ad1d31dde075b507c3a09047b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/08/46/17546470567f4144aacef6819f7522964c0f2680b4.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 453
  },
  {
    id: '127068031',
    name: '1pc Men\'s Drawstring Waist Solid Color Sports Pants, Long Casual Trousers, Basic Style',
    category: 'Men',
    subcategory: 'Pants',
    price: 222985,
    originalPrice: 267582,
    link: 'https://www.shein.com/a-p-127068031.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/08/57/1751963024e9702f0ee71bf6a0e8fda260a68a730c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/07/20/bb/1752998618607d94db76576bf482f623b91bf7151b.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 338
  },
  {
    id: '76094920',
    name: 'Men\'s Corduroy Straight-Leg Pants, Comfortable Casual Loose Solid Color Versatile Long Trousers, Spring/Autumn',
    category: 'Men',
    subcategory: 'Pants',
    price: 310500,
    originalPrice: 372600,
    link: 'https://www.shein.com/a-p-76094920.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/05/06/28/174651611415b6c1e008d67625d57bbd59d5c461f0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/05/06/72/1746516120b57bba9055aed8a2af8c5ded665683c6.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 670
  },
  {
    id: '41239105',
    name: 'Calvornis Men\'s Casual Solid Color Tapered Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-41239105.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/08/22/47/1724293689af0a86d88a59f75f400f0831240d994c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/08/22/f7/17242937157cf506d56cb40d42ec2ec6bab38ae5ae.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 1001
  },
  {
    id: '43191244',
    name: 'Manfinity Homme Men\'s Casual Multi-Pocket Cargo Pants For All Seasons, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 411585,
    originalPrice: 493902,
    link: 'https://www.shein.com/a-p-43191244.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/21/e2/1726886686e3f1efd6de5bfed096f7a5a929ac561f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/21/0a/17268867134b59832092e317746b7b87fd67cdbb7e.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 1001
  },
  {
    id: '227621845',
    name: 'Manfinity Hypemode Men Drawstring Waist Wide Leg Sweatpants, Y2k Black Baggy Pants Oversized Sweatpants Gym Sweats Sweatpants Wide Bottom For Men Grey Baggy Sweatpants Loose Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 337410,
    originalPrice: 404892,
    link: 'https://www.shein.com/a-p-227621845.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/07/f7/176248469652cd141fa7ec4d87d6e5605f59c638b9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/07/10/176248470709ef7b12e8c94931f59b0837a3e123d5.jpg'
    ],
    inStock: true,
    rating: 4.74,
    reviews: 258
  },
  {
    id: '278317270',
    name: '1pc Men\'s Casual Cargo Pants, Suitable For Outdoor Travel, Multi-Pocket College Style Work Pants, Gift For Boyfriend And Husband',
    category: 'Men',
    subcategory: 'Pants',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-278317270.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/27/21/17615644987243f116657b4cb952787f121531b7d3_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/24/8b/176399824572f15a8972a2a675418ae2d18862e887.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 27
  },
  {
    id: '35095885',
    name: 'Manfinity Fitness Boyfriend Style Men\'s Colorblock Drawstring Casual Sports Pants For Daily Wear, Men\'s Joggers, Men\'s Athletic Pants Fall Breathable',
    category: 'Men',
    subcategory: 'Pants',
    price: 263350,
    originalPrice: 316020,
    link: 'https://www.shein.com/a-p-35095885.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/09/1c/1725880965254e5e0ce007eb24a24098060579b104_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/09/ec/1725880976baaae7a01a5a5b4d3214a9251da515dd.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '42601743',
    name: 'Men\'s Ripped Distressed Patch Denim Skinny Jeans Biker Stretch Pencil Pants, Emo Style',
    category: 'Men',
    subcategory: 'Pants',
    price: 418255,
    originalPrice: 501906,
    link: 'https://www.shein.com/a-p-42601743.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/12/23/14/1734948084a44dc1885b3d174a6fc89f794d3be448_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/08/23/37/1724376193c74acf0bff82bf2d6e23927f6253d9bf.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 257
  },
  {
    id: '86781260',
    name: 'Musero Men Oversized Linen Pants Only Spring Summer Vacation Easter',
    category: 'Men',
    subcategory: 'Pants',
    price: 270135,
    originalPrice: 324162,
    link: 'https://www.shein.com/a-p-86781260.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/01/e4/17513617616dd4fe60139dd99d50e1ab2e097c6971_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/01/0f/175136177059f542cafa70425a882d3673a05b9952.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 1001
  },
  {
    id: '280637085',
    name: 'Manfinity Hypemode Men\'s Casual Streetwear Style Pants: Loose Patchwork Design Sweatpants, Suitable For Streetwear, Everyday Casual, Weekend Outings, Music Festivals, Social Gatherings And More. This Versatile Pant Is A Must-Have In Every Man\'s Wardrobe, Making It A Great Gift For Boyfriends Or Husbands.Streetwear,Friends,Matching,Baggy,For Men,Graphic,Japanese Style,Unisex,I Love My Girlfriend',
    category: 'Men',
    subcategory: 'Pants',
    price: 330740,
    originalPrice: 396888,
    link: 'https://www.shein.com/a-p-280637085.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/11/90/17628247976f589cfd09a682bcd7356498ad08a928_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/11/23/17628248133c01b4a198ef37cdc81882322e4f7e07.jpg'
    ],
    inStock: true,
    rating: 4.37,
    reviews: 179
  },
  {
    id: '47695385',
    name: 'Men\'s Solid Color Thermal Lined Drawstring Pants, For Fall Winter',
    category: 'Men',
    subcategory: 'Pants',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-47695385.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/22/e2/1758546586a35d6ef7a719859054d69caadc5f9862_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/25/70/1758806438bfe6f69f3953c5b45176eb0ef793d4f1.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 1001
  },
  {
    id: '29751822',
    name: 'Manfinity EZcore Men\'s Gingham Pattern Slant Pocket Pants, For Fall Winter',
    category: 'Men',
    subcategory: 'Pants',
    price: 411585,
    originalPrice: 493902,
    link: 'https://www.shein.com/a-p-29751822.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/01/30/0d/1706578315e9ce19054d602262651767f17e4f8092_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/01/30/17/17065783263dc0cfd507c71e0da1e36f25964be3da.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 1001
  },
  {
    id: '101219078',
    name: 'Calvornis Men\'s Solid Color Pleated Pocket Straight Loose Casual Pants Olive Green Pants Men Men Pleated Suit Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 350980,
    originalPrice: 421176,
    link: 'https://www.shein.com/a-p-101219078.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/17/25/1750170276a400cbd1b12685014749c32c6de24a0d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/17/5d/1750170284d86d21a8c3aa1eb7f0679996b0ebfcf0.jpg'
    ],
    inStock: true,
    rating: 4.69,
    reviews: 726
  },
  {
    id: '153413268',
    name: 'Manfinity Hypemode Men\'s Letter & Floral Print Drawstring Waist Pockets Wide Leg Loose Casual Sweatpants, Flower Pants Men, Men Sweatpants Baggy, Cream Joggers Men, Joggers With Flowers, Sweatpants With Flowers, 2000s Style',
    category: 'Men',
    subcategory: 'Pants',
    price: 451950,
    originalPrice: 542340,
    link: 'https://www.shein.com/a-p-153413268.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/08/b2/175732198523dd24ccd71b3590bd7b171121eb757b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/08/f2/1757321995da26da7ded0acb6624db8d250d29d251.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 58
  },
  {
    id: '41356981',
    name: '1pc Men\'s Spring/Summer Outdoor Camouflage Print Cargo Pants, Multi-Pocket Hiking Trousers Suitable For Beach Holiday, Daily Commute, Running, Fitness Training, Loose Casual Sports Pants, Ankle-Length, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 297045,
    originalPrice: 356454,
    link: 'https://www.shein.com/a-p-41356981.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/08/20/73/17240874883ae9f8b4959e26a81650a11c92043225_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/09/15/66/172638209968d5674d696d2c3d0242a55fecfa29af.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 1001
  },
  {
    id: '249384794',
    name: 'Men\'s Solid Color Pocket Simple Commuter Casual Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 458735,
    originalPrice: 550482,
    link: 'https://www.shein.com/a-p-249384794.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/24/87/176129353045f1963e95ea1f0e0c3ffd3c22053a97_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/24/56/17612935986fd0c9200230b60e6d0b3632dae2d0eb.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 1001
  },
  {
    id: '100177652',
    name: 'Men\'s Casual Pocketed Wide Leg Loose Fit Pants, Business Formal Style, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 310500,
    originalPrice: 372600,
    link: 'https://www.shein.com/a-p-100177652.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/20/33/1750396609754ce82ae0c7a48bd7458522539051c5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/06/20/df/17503966166d2438c5b71356fb702b9ee46eba33d3.jpg'
    ],
    inStock: true,
    rating: 4.71,
    reviews: 587
  },
  {
    id: '223226454',
    name: 'PAVTROS Men\'s Contrast Color Patchwork Drawstring Waist Wide Leg Sweatpants Men Black And White Pants Men Flare Sweatpants Men Wide Leg Side Stripe Gym Pants Men Track Pants Street Wear Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 384560,
    originalPrice: 461472,
    link: 'https://www.shein.com/a-p-223226454.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/80/1760924951adbe86ea208b45865bb646d29858f351_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/29/1760924966269647931a9c1cea73acff7f7def1697.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 19
  },
  {
    id: '59814368',
    name: '1 Pair Of Men\'s Loose And Fashionable Sporty Long Pants, Featuring A Casual And Simple Solid Color Wide-Leg Design, With Drawstring At The Waist And Large Pockets, Suitable For Daily Strolls, Work, Travel, Etc.',
    category: 'Men',
    subcategory: 'Pants',
    price: 195960,
    originalPrice: 235152,
    link: 'https://www.shein.com/a-p-59814368.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/02/28/28/17407428670fe6e611269cc04e0863ef89f3f3a507_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/02/28/33/17407430489471a8b8953f53152a5126d87097faa5.png'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 320
  },
  {
    id: '35716950',
    name: 'Spring/Autumn New Multi-Pocket Loose Casual Cargo Pants For Men, Runs Small, Order 1 Size Up, For Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 283590,
    originalPrice: 340308,
    link: 'https://www.shein.com/a-p-35716950.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/01/10/62/173649103252c285ced0d72183784065f43b4d6acd_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/08/28/e6/1724834931131c71c7d7adadb03161e60c186b6d9c.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 1001
  },
  {
    id: '302821358',
    name: 'Manfinity Roghcode Men\'s Fashionable Versatile Solid Color Pants, Suitable For Commuting',
    category: 'Men',
    subcategory: 'Pants',
    price: 337410,
    originalPrice: 404892,
    link: 'https://www.shein.com/a-p-302821358.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/24/fb/17639557619cdc534b950eca818b8cc4ed8d77891a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/24/60/176395576955f1f113200bf3c5a08e154de0dc3f45.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 54
  },
  {
    id: '75767055',
    name: 'Men\'s Loose Fit Straight Leg Knit Pants, Lightweight, Solid Color, Casual, Suitable For Spring, Autumn And Early Winter',
    category: 'Men',
    subcategory: 'Pants',
    price: 330740,
    originalPrice: 396888,
    link: 'https://www.shein.com/a-p-75767055.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/05/14/51/17471882804e45c42fa874a8dbfd42fa1cfd12b0ac_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/05/14/0f/1747188286c397290e3d76807be1627e702b585df7.jpg'
    ],
    inStock: true,
    rating: 4.77,
    reviews: 1001
  },
  {
    id: '23954592',
    name: 'HUEFORM Loose Men\'s Flap Pocket Side Drawstring Waist Cargo Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 323955,
    originalPrice: 388746,
    link: 'https://www.shein.com/a-p-23954592.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/09/28/06/169589190571807e75c150ac32a7d901bbbd7f8740_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/09/28/ce/169589191406e8221360c0d7db0d5dfbd8bc7151db.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '67053762',
    name: 'Manfinity Sport Corelite Men\'s Cross Print Drawstring Waist Loose Casual Sports Pants Comfortable Breathable Pattern Design Baggy For Gym Slacks',
    category: 'Men',
    subcategory: 'Pants',
    price: 229655,
    originalPrice: 275586,
    link: 'https://www.shein.com/a-p-67053762.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/15/50/174469376082ade6a38c81cfb414adaeeacb45494b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/15/c0/1744693766fd36ad838d9942b978f93bac44f4733d.jpg'
    ],
    inStock: true,
    rating: 4.54,
    reviews: 93
  },
  {
    id: '57716274',
    name: 'Calvornis Men\'s Casual/Formal Solid Color Tapered Suit Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 303830,
    originalPrice: 364596,
    link: 'https://www.shein.com/a-p-57716274.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/02/21/3f/17401163846aa0eddaef2cdc020aeafd975c4ea2cc_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/02/21/c5/1740116400f1eb25b9a2dec186a0292fca20b02656.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 1001
  },
  {
    id: '56087228',
    name: 'Men\'s Drawstring Waist Loose Wide Leg Casual Sweatpants, Autumn/Winter',
    category: 'Men',
    subcategory: 'Pants',
    price: 222985,
    originalPrice: 267582,
    link: 'https://www.shein.com/a-p-56087228.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/02/07/e7/173890907213a60926e79deb230c8dde4cb5ce7d2b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/02/07/7f/1738909165f97ed553d4f2f01a13bc216fd24fef4d.png'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 66
  },
  {
    id: '314204282',
    name: '1PC Men\'s Sports Work Pants, Suitable For Outdoor Travel, Multi Pocket University Style Work Pants, Gifts For Boyfriends And Husbands',
    category: 'Men',
    subcategory: 'Pants',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-314204282.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/27/17/17642249094e96efe3dd3ca61684eaf2df2b4ca759_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/10/bf/1765352359ee54f3e99b141f920c9f6d91e14b5ce0.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 27
  },
  {
    id: '63311333',
    name: 'Calvornis Men\'s Wrinkle Casual Business Suit Pants, Slim Straight Leg Gray Trousers, Versatile Casual Pants For Men Men Pants Casual Men Clothes Pants Pants For Men Casual Men Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 276805,
    originalPrice: 332166,
    link: 'https://www.shein.com/a-p-63311333.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/03/27/0a/17430613138aa8fed6a5b571f86bf3b068269f9079_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/03/27/b4/17430613265ffe9e042df4322292eb09a39849fb3b.jpg'
    ],
    inStock: true,
    rating: 4.59,
    reviews: 172
  },
  {
    id: '260292548',
    name: 'Men\'s Black Straight-Cut Pants With Lightning Embroidery Design, Casual Daily Commuting Jeans',
    category: 'Men',
    subcategory: 'Pants',
    price: 694600,
    originalPrice: 833520,
    link: 'https://www.shein.com/a-p-260292548.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/24/18/1763953870a25134cc378aa20a60c90c87e20ed32b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/24/c4/1763953875b6c449c240c4e726826d4dba9d43d23c.jpg'
    ],
    inStock: true,
    rating: '4.5',
    reviews: 122
  },
  {
    id: '142205359',
    name: 'Manfinity Homme Men\'s Casual Versatile Commuter Solid Color Wide Leg Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 371105,
    originalPrice: 445326,
    link: 'https://www.shein.com/a-p-142205359.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/01/d3/175404350327c3977b518bee15f270feef33bc41d5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/01/4d/1754043509324c9f68e12855cdff99921cc8d119a0.jpg'
    ],
    inStock: true,
    rating: 4.52,
    reviews: 19
  },
  {
    id: '47949306',
    name: 'SWAVVY Men\'s Woven Fashion Casual Solid Color Elastic Waist Straight Leg Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 330740,
    originalPrice: 396888,
    link: 'https://www.shein.com/a-p-47949306.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/01/6a/176456677236693bb24c9addad7da4577435096890_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/01/22/176456677819f864c19beb8d37b93f5318ea22be06.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 516
  },
  {
    id: '57867580',
    name: 'Casual Straight Leg Soft Breathable Loose Pants, Men\'s Classic Suit Pants, Solid Color Stretchy Business Trousers, Elegant & Luxurious Style For Spring/Summer',
    category: 'Men',
    subcategory: 'Pants',
    price: 195960,
    originalPrice: 235152,
    link: 'https://www.shein.com/a-p-57867580.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/05/07/8e/1746611282ddce6d86e46a9d297a2b3ad84c539de6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/02/16/af/17397054130b82587d8e4686aa1f80e91e2379fed4.jpg'
    ],
    inStock: true,
    rating: 4.69,
    reviews: 288
  },
  {
    id: '225073008',
    name: 'PAVTROS Men\'s Young Street Style Distressed Unclosed Double-Layer Raw Edge Arched Structure Loose Wide-Leg Sports Pants, Elastic Waist Knitted Sports Pants With Subtle Distressed Details, Casual Street Style, Suitable For Daily, Casual And Fashionable Wear, Suitable As A Holiday Gift Black Sports Pants Black Jogging Pants Men\'s Black Pants Loose Sports Pants Men\'s Black Loose Sports Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 425040,
    originalPrice: 510048,
    link: 'https://www.shein.com/a-p-225073008.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/95/1760942697dba5966de67345aa97bf6f5f0e11596c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/ea/1760942709355e8f89ae631a3790365c733f58f68b.jpg'
    ],
    inStock: true,
    rating: 4.68,
    reviews: 25
  },
  {
    id: '262632735',
    name: 'SUMWON Printed Wide Leg Joggers With Toggle Waist Drawstring Snake Scale Pattern Elastic Cuff Casual Streetwear Comfortable Relaxed Fit',
    category: 'Men',
    subcategory: 'Pants',
    price: 319815,
    originalPrice: 383778,
    link: 'https://www.shein.com/a-p-262632735.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/05/eb/1762308862b67b68cd7b0d3745cf6202d3ecd4f920_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/05/16/176230887632791e9bb5a2d55a81532c82f08a4687.jpg'
    ],
    inStock: true,
    rating: '4.4',
    reviews: 101
  },
  {
    id: '99304095',
    name: 'Men\'s Casual Sweatpants - Adjustable Waistband With Drawstring, Minimalist Design, Suitable For Outdoor Sports, Jogging And Daily Wear, Christmas Gift',
    category: 'Men',
    subcategory: 'Pants',
    price: 229655,
    originalPrice: 275586,
    link: 'https://www.shein.com/a-p-99304095.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/08/16/d8/1755337437ed22806aa9f8b31ad55fc1a65dd0829b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/07/24/e3/17533394428b79c4a994df752fa210349539a5f780.png'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 231
  },
  {
    id: '221106500',
    name: 'Core Aspect Men\'s Pleated Solid Color Linen Pants With Belt Loops, Straight Leg Casual Business Cropped Trousers,Gentleman\'s British Linen Neapolitan Casual Straight-Leg Pants, High-Waisted Adjustable Nine-Inch Suit Trousers,,Old Money Style,Vintage Gentleman, British Gentleman Style, Business Casual Style, Formal,Old Money Style,Vintage Gentleman, British Gentleman Style, Business Casual Style, Formal',
    category: 'Men',
    subcategory: 'Pants',
    price: 485645,
    originalPrice: 582774,
    link: 'https://www.shein.com/a-p-221106500.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/28/76/176162171614479a1cf57058abdcac7928c7ed6fbf_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/28/68/1761621726b5483497d681f588db43e68e0beba5de.jpg'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 4
  },
  {
    id: '73359968',
    name: 'Manfinity Homme Men\'s Casual Sport Cargo Pockets Drawstring Black Cargo Baggy Capri Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 276805,
    originalPrice: 332166,
    link: 'https://www.shein.com/a-p-73359968.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/06/f6/174649601281bf8de773a071c5a2dd3275960f6b85_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/06/1c/174649602000079eb36052533486ad3ee03187cbea.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '257273806',
    name: 'Manfinity EMRG Men\'s Loose Fit Casual Sweatpants,Baggy Pants,Track Pants,Jogging,Baggy Versatile Street Style Joggers Suitable For Streetwear, Casual Daily Wear, Weekend Outings, Music Festivals, Social Gatherings And More. This Pant Is An Essential Versatile Piece In A Man\'s Wardrobe, Making It A Great Gift For Boyfriends Or Husbands. Oversized Sweatpants  Sweats Sweatpants Wide For Men Pro Club Sweat Pants Grey Baggy Sweatpants',
    category: 'Men',
    subcategory: 'Pants',
    price: 620310,
    originalPrice: 744372,
    link: 'https://www.shein.com/a-p-257273806.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/03/d0/176213369306b77c3f1d7ea14727087f02569f1bf6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/03/b8/1762133709d649d7ec0da48464467d1a5cd93e3422.jpg'
    ],
    inStock: true,
    rating: 4.52,
    reviews: 741
  },
  {
    id: '22945318',
    name: 'Manfinity EMRG Men Flap Pocket Side Drawstring Waist Oversize Cargo Pants Baggy Long Plain Black Going Out, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 323955,
    originalPrice: 388746,
    link: 'https://www.shein.com/a-p-22945318.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/09/11/a7/16944062497d1618f7d52bcdc1062c1a5072424127_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/09/11/82/169440625690ae5c9ed5d2274465c6a9d86f563bf6.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 1001
  },
  {
    id: '29577765',
    name: 'Manfinity LEGND Men\'s Sculpture Print Elastic Ankle Jogger Pants Going Out Street Wear Sweatpants, For Husband, Boyfriend Gifts, Men Graphic Pants, For Rave',
    category: 'Men',
    subcategory: 'Pants',
    price: 303830,
    originalPrice: 364596,
    link: 'https://www.shein.com/a-p-29577765.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/03/15/f9/1710484634473e0bb701a5d0c926c6f2dbe6b43bd2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/03/15/e3/1710484652b984ab0817d81cf9c15bcf443bde8fe4.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 492
  },
  {
    id: '74786991',
    name: 'Men\'s Spring/Autumn Casual Drawstring Corduroy Pants, Breathable And Comfortable, Suitable For Daily Leisure And Vacation, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 310500,
    originalPrice: 372600,
    link: 'https://www.shein.com/a-p-74786991.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/07/e9/176508694428b04ce5918676ef79e6fdcf1c8c08d1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/07/4d/176508695600a47b70730b92ce8db113102db3c7e2.jpg'
    ],
    inStock: true,
    rating: 4.74,
    reviews: 147
  },
  {
    id: '77908111',
    name: 'PAVTROS Manfinity Streetrush Men\'s Casual Mixed Rivet Wide Leg Pants, Streetwear Work Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 391345,
    originalPrice: 469614,
    link: 'https://www.shein.com/a-p-77908111.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/14/1c/174720674641a88aef8e7b28dd77f3a3413c413033_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/14/f2/17472067556c8667eeef43738e7ec7d6b4f39f320f.jpg'
    ],
    inStock: true,
    rating: 4.62,
    reviews: 102
  },
  {
    id: '249509235',
    name: 'HIMLAND Men\'s Plaid Casual Drawstring Waist Woven Pocket Pants, Christmas Flannel Manfinity Men Pants Men Pajama Pant Lounge Pants Elf Men Plaid Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-249509235.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/15/24/1763183986a14b4ed5ad9aed76f0b36cdfa0925dfe_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/e1/176181115321f0098a0f1060a29ffe861e0cc3ed79.jpg'
    ],
    inStock: true,
    rating: '4.8',
    reviews: 116
  },
  {
    id: '317521525',
    name: 'Cotton Men\'s Trousers, Basic Style, Loose-Fitting Trousers With Pockets, Soft And Breathable Pure Cotton Fabric, Perfect For Spring And Autumn.',
    category: 'Men',
    subcategory: 'Pants',
    price: 323955,
    originalPrice: 388746,
    link: 'https://www.shein.com/a-p-317521525.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/02/0f/17646658167edb9daec5da8ad781924825d4053f9c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/02/70/176466582652c68b8ac7fcf81bb2d37301127a0ac2.jpg'
    ],
    inStock: true,
    rating: '4.8',
    reviews: 26
  },
  {
    id: '227791279',
    name: 'Manfinity Homme Men\'s Solid Color Toothpick Stripe Design Loose Fit Casual Pants Wide Leg Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 384560,
    originalPrice: 461472,
    link: 'https://www.shein.com/a-p-227791279.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/21/b4/1761040297164f36a63f0235513955fd7258e30f5c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/21/47/1761040307c29d28a3962e025192d3c218492eaebe.jpg'
    ],
    inStock: true,
    rating: 4.77,
    reviews: 214
  },
  {
    id: '222960668',
    name: 'Manfinity EMRG Men\'s Loose Fit Contrast Color Casual Jeans With Belt Loops Baggy Vintage Washed Blue Vacation Party Distressed Jeans For Couples Japanese Pants Men Baggy Jeans With Design',
    category: 'Men',
    subcategory: 'Pants',
    price: 492315,
    originalPrice: 590778,
    link: 'https://www.shein.com/a-p-222960668.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/28/cd/17616415460c3134ffdc447e0fee0775dd56d8eccc_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/28/43/17616415638b60ba8a2353698ed7b91218293814de.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 67
  },
  {
    id: '112074084',
    name: 'Manfinity RSRT Men\'s Wide Leg Loose Casual Pants, Bohemian Nepal Retro Style Trousers Harem Pants Japanese Pants Black Baggy Pants Balloon Pants Boho Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 418255,
    originalPrice: 501906,
    link: 'https://www.shein.com/a-p-112074084.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/30/03/17512649911df2655a5297d986d58004dad473c13a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/30/e3/1751265002e1a0b7b18c9b525c2b414357a4c54e01.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 241
  },
  {
    id: '44215247',
    name: '1pc Men\'s Outdoor Camouflage Print Multi-Pocket Cargo Pants, Casual Loose Fit Drawstring Joggers For Spring/Autumn Hiking, Beach, Daily Commute, Running, Fitness, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 364435,
    originalPrice: 437322,
    link: 'https://www.shein.com/a-p-44215247.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/09/28/cc/17274877654b8e30ba6745f374266c0ea92da90fcf_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/12/04/8d/173329050215dbc7efe368f447d7479af863b06a79.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 252
  },
  {
    id: '144342519',
    name: 'Men\'s Loose Linen Lantern Pants, Casual Wide Leg Harem Cropped Trousers, Lightweight Breathable, Suitable For Spring And Autumn',
    category: 'Men',
    subcategory: 'Pants',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-144342519.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/spmp/2025/07/21/6b/175308632402a349481d6fd40372761dda0c447405_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/07/21/a3/17530868383df135692deaadc13d3d3a3966db9646.png'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 91
  },
  {
    id: '46257183',
    name: 'Manfinity Homme Solid Color Casual Straight Leg Pocket Pants, Versatile',
    category: 'Men',
    subcategory: 'Pants',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-46257183.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/10/29/46/1730197309823b8edea5d085a71fb26500fb0d1d23_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/10/29/35/1730197334b9f230ddfbd684b01059908eb541e3d4.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 418
  },
  {
    id: '24588553',
    name: 'Manfinity EMRG Men Cross Letter Graphic Drawstring Waist Oversize Sweatpants Wide Leg Long Sweat Pants Going Out Goth Boyfriend Gift, Halloween, Goth Sweatpants, Baggy Streetwear, Black Graphic Sweat Pants, Sweat Pants For Men God Christ, For Rave',
    category: 'Men',
    subcategory: 'Pants',
    price: 323955,
    originalPrice: 388746,
    link: 'https://www.shein.com/a-p-24588553.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/10/23/0c/16980280385fd05f4bf3e57927c086c07db9626b69_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/10/13/9a/16971802281c49ba441742341b1a4baad39cfe0867.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '315724977',
    name: 'Manfinity Homme Men\'s Casual Drawstring Waist Solid Color Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 283590,
    originalPrice: 340308,
    link: 'https://www.shein.com/a-p-315724977.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/03/a1/17647434691c511c57f8f684a1314c50971ce688bf_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/03/5e/1764743483290be070b16faa346f4e2f497dc4d48e.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 1001
  },
  {
    id: '66556883',
    name: 'TOKVUE Men\'s Solid Color Casual Sweatpants, Suitable For Summer, Baggy Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 323955,
    originalPrice: 388746,
    link: 'https://www.shein.com/a-p-66556883.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/04/10/41/1744281000f454059e04aa50ee7ca698414ddcb9fd_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/04/10/c3/1744281006936c0aa205846ddde806fd7d6d817ce2.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '153377818',
    name: 'Sport MetroGents Men\'s Japanese Dragon Print Drawstring Waist Pocket Loose Fit Sweatpants',
    category: 'Men',
    subcategory: 'Pants',
    price: 290260,
    originalPrice: 348312,
    link: 'https://www.shein.com/a-p-153377818.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/08/ee/1757299573df950e813c8b8358aaae3d420603e4fa_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/14/5c/17551401577a52a0a4de5090c0b81b15172e6f8d70.jpg'
    ],
    inStock: true,
    rating: 4.64,
    reviews: 102
  },
  {
    id: '43345651',
    name: 'Manfinity EZcore Men\'s Loose Fit Straight Leg Casual Denim Jeans With Pockets, Plain Long Washed White Straight Leg Cargo Jeans Light Jeans, For Husband, Boyfriend Gifts, Men White Pants, Men\'s Loose Straight Leg Casual Pants, Men Pants Jeans Loose Going Out Hang Out Urban Work Commute',
    category: 'Men',
    subcategory: 'Pants',
    price: 411585,
    originalPrice: 493902,
    link: 'https://www.shein.com/a-p-43345651.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/14/14/1726297651f1b748b31944b71231e0a0b4af5b4e3f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/14/e1/172629767544b4c447a3aed03a08e23f42b7cd4b0a.jpg'
    ],
    inStock: true,
    rating: 4.77,
    reviews: 158
  },
  {
    id: '317473233',
    name: 'Cotton Men\'s Trousers, Basic Style, Loose-Fitting Trousers With Pockets, Soft And Breathable Pure Cotton Fabric, Perfect For Spring And Autumn.',
    category: 'Men',
    subcategory: 'Pants',
    price: 323955,
    originalPrice: 388746,
    link: 'https://www.shein.com/a-p-317473233.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/02/de/17646655199d1bf252c50bf8e41c3f90dc300856f8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/02/58/17646655302a4f896349875adbb453d15c375905c5.jpg'
    ],
    inStock: true,
    rating: '4.2',
    reviews: 100
  },
  {
    id: '43528974',
    name: 'Calvornis Men\'s Solid Color Pocket Slim Fit Casual Pants, Suitable For Commuting, For Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 297045,
    originalPrice: 356454,
    link: 'https://www.shein.com/a-p-43528974.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/11/03/bb/1730616077f44493b26c90cb3bf359f797e015ccc1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/11/03/99/173061609972ea7711a3e618b480029ab0bca81745.jpg'
    ],
    inStock: true,
    rating: 4.73,
    reviews: 1001
  },
  {
    id: '96014067',
    name: '1pc Plus Size Men\'s Multi-Pocket Solid Color Cargo Pants, Casual Loose Fit For Beach, Vacation, Daily Wear, Sports, Workout, Outdoor, Streetwear, Fitness, Jogging, Straight Leg Trousers, All-Match, Fashionable, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 297045,
    originalPrice: 356454,
    link: 'https://www.shein.com/a-p-96014067.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/21/eb/17636933309ca38e4341c20aeff04c7d5279b670d1_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/p/abc/2025/11/21/e4/1763693421402ac94ad5d4a7ed4dd720f3ab880200.png'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 209
  },
  {
    id: '67388869',
    name: 'PAVTROS Men\'s New York Letter Flocking Casual Gym Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 357650,
    originalPrice: 429180,
    link: 'https://www.shein.com/a-p-67388869.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/15/9c/17447162851a492791a1907a42d8f6f6e45a02ff9c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/15/79/1744716293832512341fe7b3bf47561da14a068aa3.jpg'
    ],
    inStock: true,
    rating: 4.71,
    reviews: 606
  },
  {
    id: '33777452',
    name: 'Manfinity Homme Men Casual Solid Color Tapered Pants, For Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 404800,
    originalPrice: 485760,
    link: 'https://www.shein.com/a-p-33777452.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/01/14/8b/1736822594969d2b50eb9dbda9eea85c463eaf54f1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/01/14/22/1736822613929b8e0fa119cb10f3d42de114c4d6ba.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 1001
  },
  {
    id: '151126257',
    name: 'Men\'s Outdoor Casual Pants - Suitable For All Seasons - Featuring A Loose Straight-Leg Silhouette, With A Basic Drawstring Waistband And Pockets. An Ideal Choice For Fitness, Outdoor Hiking, And Back-To-School Essentials.',
    category: 'Men',
    subcategory: 'Pants',
    price: 162380,
    originalPrice: 194856,
    link: 'https://www.shein.com/a-p-151126257.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/08/08/a5/1754658957d4c06b2ac377e17823f9bd1cb61d8e42_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/08/08/e6/17546593447842af5b26f6aec564eea8f12c43bc2d.png'
    ],
    inStock: true,
    rating: 4.48,
    reviews: 263
  },
  {
    id: '243184579',
    name: 'Men\'s Lightweight Casual Fashionable Versatile Pants, Outdoor Cargo Pants, Spring/Autumn',
    category: 'Men',
    subcategory: 'Pants',
    price: 290260,
    originalPrice: 348312,
    link: 'https://www.shein.com/a-p-243184579.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/20/11/17609744115ddfdc1154baf63048d531925a373ff1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/20/76/176097442631d34de2cfedcf8a70a752dbfa75ddc9.jpg'
    ],
    inStock: true,
    rating: 4.64,
    reviews: 14
  },
  {
    id: '278723640',
    name: 'Manfinity Hypemode Men\'s Casual Solid Color Drawstring Waist Sweatpants Black Baggy Sweat Pants Men Baggy Streetwear Black Joggers Men Pro Club Sweat Pants Double Waist Sweatpants',
    category: 'Men',
    subcategory: 'Pants',
    price: 323955,
    originalPrice: 388746,
    link: 'https://www.shein.com/a-p-278723640.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/07/bb/1762506157720e1920480ba0b784f7c7556935b0ef_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/07/5e/1762506172b0813ab59b64981f340c92a296b6bff3.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 376
  },
  {
    id: '231787830',
    name: 'Manfinity EMRG Men\'s Pentagram Print Drawstring Waist Straight Loose Casual Sweatpants Sweat Pants For Men Pro Club Sweat Pants Red Sweatpants Men Men Track Pants Red Sweats',
    category: 'Men',
    subcategory: 'Pants',
    price: 377890,
    originalPrice: 453468,
    link: 'https://www.shein.com/a-p-231787830.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/22/bb/1761121375099c864e795657db5119ec41b9d296ad_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/22/5d/176112139036240094480858a8e6f89aee73df2a9f.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 2
  },
  {
    id: '112134202',
    name: 'Claim Dot Men\'s Loose Straight Wide Leg Linen Drawstring Waist Casual Pants, Baggy Pants, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 350980,
    originalPrice: 421176,
    link: 'https://www.shein.com/a-p-112134202.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/30/c4/1751275860daec548b95fe04aff94da4ff321950b7_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/30/13/175127587060f6124d30ddf86c89043907b224b699.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 49
  },
  {
    id: '86920467',
    name: 'Musero Men Oversized Linen Pants Only Spring Summer Vacation Easter',
    category: 'Men',
    subcategory: 'Pants',
    price: 270135,
    originalPrice: 324162,
    link: 'https://www.shein.com/a-p-86920467.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/26/36/1748227313fc767c73e67d70b3d12370dedd93e435_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/26/93/17482273231cdd9dbbda0058e1b14ca76f9336fe31.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 1001
  },
  {
    id: '231707133',
    name: 'Manfinity Hypemode Young Casual, Drawstring, Split Hem Grey Men Sweatpants Men Grey Flared Sweatpants Men Straight Leg Sweatpants Sweatpants Wide Bottom For Men Men Flare Sweatpants Pro Club Sweat Pants,Perfect For Christmas And Halloween, An Excellent Gift For Your Boyfriend Grey Joggers Men Baggy Grey Sweatpants Men Cotton Sweats Long Pants Sweat Pants Man',
    category: 'Men',
    subcategory: 'Pants',
    price: 330740,
    originalPrice: 396888,
    link: 'https://www.shein.com/a-p-231707133.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/22/2c/176112158288b97606d5fffe5cf95a8d4b4b3f2267_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/22/15/17611215892438f0c69b0b17e2555cbb263f6dc98c.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 11
  },
  {
    id: '316348263',
    name: 'Core Aspect Solid Color Pleated Pocket Loose Fashion Versatile Pants Mens Black Dress Pants Mens Pleated Suit Pants Black Mens Trousers',
    category: 'Men',
    subcategory: 'Pants',
    price: 344195,
    originalPrice: 413034,
    link: 'https://www.shein.com/a-p-316348263.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/04/cc/1764826690b459783803d3732614d957f877052148_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/04/bc/17648267043b571c0562d1fcc81acc6c8f18c630db.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 1001
  },
  {
    id: '59226528',
    name: '1pc Men\'s Gradient Multi-Pocket Cargo Pants, Streetwear Casual Trousers For Commuting, Sports, Beach, Daily, Outdoor, Fitness, Jogging, Loose Fitting Sporty Joggers, Versatile, Fall',
    category: 'Men',
    subcategory: 'Pants',
    price: 297045,
    originalPrice: 356454,
    link: 'https://www.shein.com/a-p-59226528.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/01/1c/17645693506ab43889bed12eda27c71baffb279570_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/01/b9/17645694072ade29579756c9c228bce786cb21c8fe.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 185
  },
  {
    id: '280813591',
    name: 'Manfinity EZcore Men\'s Fashionable Versatile Solid Color Straight-Leg Suit Pants Dress Pants Men S Pleated Suit Pants Grey Dress Pants Men Formal Pants Men Slacks Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 398130,
    originalPrice: 477756,
    link: 'https://www.shein.com/a-p-280813591.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/25/a0/17640330862199c13c8a319a6fc65204cfbb893b27_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/25/6d/17640330976d6cedf15cae7c8024481fb04080bf1b.jpg'
    ],
    inStock: true,
    rating: '4.8',
    reviews: 110
  },
  {
    id: '210596825',
    name: 'Manfinity Mode Men\'s Fleece-Lined Pullover Sweater, Solid Color Knitted Sweater, Autumn/Winter Brown Sweater Men Brown Jersey For Men Quarter Zip Men Brown Tops For Men',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 379845,
    originalPrice: 455814,
    link: 'https://www.shein.com/a-p-210596825.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/10/5a/1760063787d54cac72c9940f07c035ca1800730060_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/10/a0/17600637973371f7eafe5547386248b9df00cc1819.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '178481099',
    name: 'GRDR Men\'s Regular Shoulder Long Sleeve High Neck Sweater, Versatile For Daily Wear Knitted Pullover',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 426995,
    originalPrice: 512394,
    link: 'https://www.shein.com/a-p-178481099.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/d7/17634489079300416bc80d68976eef3dbf24b6eb58_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/18/b4/176344891466acb865d29291507a97d6d62dc63422.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 1001
  },
  {
    id: '46882823',
    name: 'Claim Dot Men\'s Crew Neck Long Sleeve Graphic Detail Casual Sweater, For Fall Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 359605,
    originalPrice: 431526,
    link: 'https://www.shein.com/a-p-46882823.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/11/07/64/17309424234ce893032bf0fde4adbbeec49d971613_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/11/07/c4/17309424485df7d8ab50b3a410889022c9c7e632d0.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '46335055',
    name: 'DAZY Men\'s Solid Color Knit Sweater, Simple Fashion Casual For Daily Wear, Fall',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 440450,
    originalPrice: 528540,
    link: 'https://www.shein.com/a-p-46335055.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/10/31/40/17303379645f4609d21516f80fa20e40d7a50365c2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/10/31/7d/17303379849cc4606c1d6e517765747c37caac0b6e.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '186815103',
    name: '1pc Men\'s Vintage Solid Color Sweater, Casual Everyday Wear, Quarter Zip High Neck Pullover, Fashionable Streetwear For Halloween, Fall/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 373060,
    originalPrice: 447672,
    link: 'https://www.shein.com/a-p-186815103.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/spmp/2025/09/09/1e/17574046945de4e22493c86e47c3f6787188126595_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/p/abc/2025/09/09/bb/1757404731f9dee35c3303b16f5c2b91484a052e1e.png'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 94
  },
  {
    id: '51540638',
    name: 'Manfinity Mode Men\'s Lightweight Half-Zip Knit Sweater, Long Sleeve Pullover, Fall/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 299000,
    originalPrice: 358800,
    link: 'https://www.shein.com/a-p-51540638.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/90/1759973302af0f6c185e0fbf7300083f22b08488dd_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/3b/17599733145af8b70b7b6f2d5f63b290b332a84e97.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 1001
  },
  {
    id: '46061724',
    name: 'Lightweight, Warm Knit Pullover Sweater, Loose Fit, Polyester Fabric, Casual, Collegiate Style, Unisex Design, Long Sleeve, Drop Shoulder, Minimalist Crew Neck, Suitable For Autumn And Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 346150,
    originalPrice: 415380,
    link: 'https://www.shein.com/a-p-46061724.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/11/17/99/1731827745d26de2bd0a67643bc7b91040289564d5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/11/17/34/1731827769168bec982faf7d6550b02247c8f4874d.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 1001
  },
  {
    id: '208376583',
    name: 'GRDR Men\'s Casual Long Sleeve Half-Zip Pullover Sweater, Versatile For Daily Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-208376583.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/24/08/17639713138d753f44bb3029909fc9f692a36f304c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/08/8c/175991473184c2c40922068311337158e8d8429c77.jpg'
    ],
    inStock: true,
    rating: 4.59,
    reviews: 365
  },
  {
    id: '42046844',
    name: 'DAZY Men\'s Solid Color Crew Neck Long Sleeve Minimalist Sweater, Casual Autumn',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 413540,
    originalPrice: 496248,
    link: 'https://www.shein.com/a-p-42046844.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/04/4e/17254403696063d2a7b368d8084a74d13d22da39c2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/04/ee/172544040484794a102d87f74f808fa84ab41a2db0.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '117721420',
    name: 'Crew Neck Sweater For Men, Soft & Cozy Solid Color, Dropped Shoulder, Versatile, Loose Fit, Lightweight, Suitable For Business & Casual Wear, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 325910,
    originalPrice: 391092,
    link: 'https://www.shein.com/a-p-117721420.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/13/12/17524135341e83f61dfb063126a5cab6100c20b273_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/07/13/73/17524135477293154b2360615961a126bf6fef0d46.jpg'
    ],
    inStock: true,
    rating: 4.57,
    reviews: 57
  },
  {
    id: '130758200',
    name: 'Manfinity CasualKnits Men\'s Striped Crew Neck Casual Loose Knit Pullover Sweater Ombre Knit Sweater, Back To School , Fall Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-130758200.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/02/df/1756818270506b1d7f5f7a6f41a473adfc600e4595_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/26/24/175613769770ed5a7d7e804629230302f437d0fdfe.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 119
  },
  {
    id: '91556866',
    name: 'Men\'s Solid Color Long Sleeve Casual Versatile Crew Neck Sweater, For Fall Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 305785,
    originalPrice: 366942,
    link: 'https://www.shein.com/a-p-91556866.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/20/14/1753003487f9d00b3091e440f09157eaf93ddbd8bb_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/08/14/bf/17551729345db692f118fb9764ef13f80daea3219f.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '144379702',
    name: 'Manfinity Mode Casual Fashion Versatile Solid Color Loose Fit Long Sleeve Men Sweater Men Quarter Zip Sweater Men Mock Neck Sweater Men Brown Sweater , Fall Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 413540,
    originalPrice: 496248,
    link: 'https://www.shein.com/a-p-144379702.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/05/90/1754371465dda2ce356cd3db545f720dc09903aa43_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/05/c5/1754371478a643245c5a59820118f0d52e01b6de52.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '24061531',
    name: 'Manfinity Roghcode Men Graphic Pattern Drop Shoulder Sweater, For Fall Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 366390,
    originalPrice: 439668,
    link: 'https://www.shein.com/a-p-24061531.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/10/06/13/16965597521228fd21f775805d0d39127c60fc59c8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/10/06/19/1696559765b614273b178f5cf7f075c70247e0fa2a.jpg'
    ],
    inStock: true,
    rating: 4.99,
    reviews: 1001
  },
  {
    id: '91546664',
    name: 'Men\'s Solid Color Long Sleeve Casual Versatile Zip-Up Stand Collar Sweater, For Fall Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 339480,
    originalPrice: 407376,
    link: 'https://www.shein.com/a-p-91546664.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/31/c0/1753943840b36d3621ffd74014d8a7f146ca46bc02_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/07/31/d5/1753943910f9d8d7cfc19a9f734b28d595f61ff1be.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 1001
  },
  {
    id: '43517311',
    name: 'Unisex Vintage Casual Loose Fit Crew Neck Sweater With Star Pattern, Lightweight & Comfortable, Suitable For Spring, Autumn & Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 447235,
    originalPrice: 536682,
    link: 'https://www.shein.com/a-p-43517311.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/02/ee/17568185714fb5bc9ba9775478b9eac1cf5abbd7fe_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/26/62/1764146370a8606028d614577ae1b8235d80dcb3ad.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 748
  },
  {
    id: '221049278',
    name: 'Men\'s Solid Color Crew Neck Long Sleeve Casual Pullover Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 224940,
    originalPrice: 269928,
    link: 'https://www.shein.com/a-p-221049278.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/10/58/1760068381c9355e458e5941a765a58655c9355d90_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/22/69/1761111028aa9ee8b71b3d08e7558d63a13ff0651b.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 403
  },
  {
    id: '38262439',
    name: 'Men\'s Casual Solid Color Half-Zip High Neck Cable Knit Sweater, Autumn/Winter , Fall, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 554990,
    originalPrice: 665988,
    link: 'https://www.shein.com/a-p-38262439.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/07/db/17624948625a585a9e31568e2491b3101e450e33e9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/07/f3/1762494872ed95c1e8fc18597f844972b5a5245142.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 1001
  },
  {
    id: '44915982',
    name: 'Men\'s Slim Fit Street Style Solid Color Long Sleeve Sweater, Casual Crew Neck Pullover, Lightweight Polyester Knit Top, Suitable For Spring, Autumn, Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 373060,
    originalPrice: 447672,
    link: 'https://www.shein.com/a-p-44915982.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/10/12/5a/17287218134739d245390fd44340c79f231cfce9d6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/10/11/50/1728651969199a6979135533193cfc535c670b936a.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 1001
  },
  {
    id: '187984413',
    name: 'Manfinity CasualKnits Men\'s Casual College Style Crew Neck Long Sleeve Sweater, Fall/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 373060,
    originalPrice: 447672,
    link: 'https://www.shein.com/a-p-187984413.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/19/2b/1758247807c55f16fb4c621f76933492e30602975c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/19/14/1758247816e7644e808ba1da77d4d2982c8c976b11.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '44122087',
    name: 'Men\'s Casual Crew Neck Lightweight Pullover Sweater With Patterned English Text, Loose Fit, Versatile, Suitable For Spring, Autumn, Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 501055,
    originalPrice: 601266,
    link: 'https://www.shein.com/a-p-44122087.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/10/09/30/172847043439baec1d55233fbc2d517ab167bfc81f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/07/11/46/1720697205dd080000e5406f44f3b43740d19e4b15.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 628
  },
  {
    id: '240415202',
    name: 'GRDR Men\'s Casual Long Sleeve Half-Zip Pullover Sweater, Versatile For Daily Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-240415202.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/02/1763452387259fa7c1a0f747108fdeb2423b45acf1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/25/d1/1761371806a4468ba61fa48e1aba4c038070e803dd.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 29
  },
  {
    id: '12000414',
    name: 'Manfinity EMRG Men Graphic Pattern Sweater , Fall Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 278760,
    originalPrice: 334512,
    link: 'https://www.shein.com/a-p-12000414.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/25/45/17640335995a9293aae99adadd01448610e47a5bb4_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/25/54/1764033607156d079bdee74e1be743c0e74db4400f.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '196707057',
    name: 'DAZY Men\'s Casual Solid Color Knit Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 426995,
    originalPrice: 512394,
    link: 'https://www.shein.com/a-p-196707057.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/28/85/1759038926172f8fa0376d09e23b9763b1d62e093d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/28/15/1759038935681762e7f6f0f739e94565a0fe9ca45b.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '227792937',
    name: 'GRDR Men\'s Regular Shoulder Long Sleeve High Neck Sweater, Versatile For Daily Wear Knitted Pullover',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 426995,
    originalPrice: 512394,
    link: 'https://www.shein.com/a-p-227792937.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/26/17634489215f859fb190da941ea62fe35f4636bc30_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/18/b8/17634489282063cfd6731e009b9fa256856c346eda.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 1001
  },
  {
    id: '184749843',
    name: 'Men\'s Casual Solid Color Turtleneck Sweater, Autumn/Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 319240,
    originalPrice: 383088,
    link: 'https://www.shein.com/a-p-184749843.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/07/05/17625050474ae02cef82945e89406903fcace83d27_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/07/3a/17625050578f6244715cb2789b00689142ef6d3054.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '43674833',
    name: 'Lightweight, Loose Fit Knit Sweater With Textured Pattern, Casual Unisex Design, Suitable For Autumn And Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 352935,
    originalPrice: 423522,
    link: 'https://www.shein.com/a-p-43674833.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/11/12/6f/173139373944aeb27d7a738997f7b6de746304666f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/09/28/b6/172751405874cee070c5bc8968422b752a423bc90a.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 1001
  },
  {
    id: '186355534',
    name: 'GRDR Men\'s Casual Long Sleeve Half-Zip Pullover Sweater, Versatile For Daily Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-186355534.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/24/26/17639713004b4dc36e12ec32c6b892ad660be69626_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/08/14/d5/1755163533a555d6af09b2be2c9dbec012d4310950.jpg'
    ],
    inStock: true,
    rating: 4.59,
    reviews: 365
  },
  {
    id: '44229675',
    name: 'Manfinity Homme Men\'s Solid Color Round Neck Casual Versatile Long Sleeve Pullover Sweater, For Fall Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 339480,
    originalPrice: 407376,
    link: 'https://www.shein.com/a-p-44229675.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/10/08/f6/172835130523a2642a743b539de64c75da8e11954d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/10/08/da/1728351326d0fd14896424a27f2b64ba52ed70d52c.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '41528775',
    name: 'DAZY Men\'s Loose Fit Gradient Striped Crewneck Casual Brown Sweater, Autumn',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 494385,
    originalPrice: 593262,
    link: 'https://www.shein.com/a-p-41528775.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/08/22/ab/1724290214b708f16809cb8764fe24864f4d66501b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/08/22/37/17242902455eb876d16af5b4e9b9deab549bc053dd.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 181
  },
  {
    id: '155261278',
    name: 'GRDR Men\'s Casual Long Sleeve Zip-Up Cardigan Sweater, Versatile For Daily Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 696440,
    originalPrice: 835728,
    link: 'https://www.shein.com/a-p-155261278.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/20/e8/1763616109e1690b21f2d458812a03c3ba3755c5f0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/08/14/86/1755164267d56fd072243269d7045babf899e5c41e.jpg'
    ],
    inStock: true,
    rating: 4.59,
    reviews: 507
  },
  {
    id: '42602503',
    name: 'ROMWE MEN Grunge Punk Men\'s Portrait Graphic Distressed Crew Neck Pullover Sweater, For Fall Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 426995,
    originalPrice: 512394,
    link: 'https://www.shein.com/a-p-42602503.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/12/f5/1726108315275b531a179bdae2a8de3cde7d758597_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/12/91/172610832831790fa267f789173cc5dff7e8d2dbca.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 694
  },
  {
    id: '94096602',
    name: 'Men\'s Fashion V-Neck Long Sleeve Knit Sweater, For Fall Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 312455,
    originalPrice: 374946,
    link: 'https://www.shein.com/a-p-94096602.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/ssms/2025/11/24/52/176396721939c5c385fc56aa5e5a591e307ca3091f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/29/90/17644210915d8dd5b68f2234482e5b590fc83ef95e.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 11
  },
  {
    id: '104923670',
    name: 'Manchic Men\'s Fashion Texture Sense Solid Color Simple Regular Knit Sweater, Streetwear, Christmas, New Year Attire, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 413540,
    originalPrice: 496248,
    link: 'https://www.shein.com/a-p-104923670.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/29/09/1753779952e58bb29ba479d22c8cc0c6a01ab39587_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/18/05/176347896489ee3ffdd9ca1b313d5d27b7fe3d04e1.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 214
  },
  {
    id: '39060597',
    name: 'Men\'s Casual Zip-Up Knitted Sweater With Collar, Versatile For Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 433780,
    originalPrice: 520536,
    link: 'https://www.shein.com/a-p-39060597.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/15/98/176321076447c1576dcb3aeeb9d4cbf32494ad6318_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/09/ca/1765248124659a026750d2db084cea715603dd498b.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 477
  },
  {
    id: '238622543',
    name: 'Men\'s Casual Twist Floral Pattern Crew Neck Long Sleeve Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 305785,
    originalPrice: 366942,
    link: 'https://www.shein.com/a-p-238622543.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/24/8c/1761273491e0de7eae36b7122409b2f311ecdd137a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/29/b9/17617031000eb577c08f1d2c16f86b147eac1a71f5.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 12
  },
  {
    id: '112477259',
    name: 'Men\'s Crew Neck Long Sleeve Casual Versatile Sweater , Fall Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 238395,
    originalPrice: 286074,
    link: 'https://www.shein.com/a-p-112477259.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/23/6d/17506781650ca5b4412e9802f9fd120dd55b601c06_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/08/07/af/1754555063a02fafb137965541ac94b73009c0eeab.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 403
  },
  {
    id: '42151843',
    name: 'Casual Loose Fit Crew Neck Sweater, Slouchy Fashion Pullover With Embroidered Heart Design, Suitable For Spring, Autumn, Winter, Unisex',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 447235,
    originalPrice: 536682,
    link: 'https://www.shein.com/a-p-42151843.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/12/07/65/1733554364a1676b8575642252ea3b273a0745968f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/07/19/ab/1721357606d73b1bf294f53f1b9545e395c9ba2465.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '43720800',
    name: 'Men\'s Slim Fit Street Style Solid Color Long Sleeve Sweater, Casual Crew Neck Pullover, Lightweight Polyester Knit Top, Suitable For Spring, Autumn, Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 379845,
    originalPrice: 455814,
    link: 'https://www.shein.com/a-p-43720800.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/09/24/b6/1727169775b793f35a19b0d7417670e5a3b374a21e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/10/12/ef/172870148907e022d047792790143279335b3c57f5.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 1001
  },
  {
    id: '209862788',
    name: ' OFFICEAU Men\'s Ribbed Knit Sweater, Casual Loose Pullover Polo Neck Knitwear Top, Autumn/Winter, Old Money',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 433780,
    originalPrice: 520536,
    link: 'https://www.shein.com/a-p-209862788.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/02/2e/17514276370cdbb1b5bf9b89da234d50ed7abecd3e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/07/13/e8/1752412603a5545697582ca95fe2ad2a69afb4edbd.jpg'
    ],
    inStock: true,
    rating: 4.69,
    reviews: 126
  },
  {
    id: '188037659',
    name: 'Manfinity EMRG Men\'s Casual Letter Pattern Crew Neck Long Sleeve Sweater, Everyday Wear, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 373060,
    originalPrice: 447672,
    link: 'https://www.shein.com/a-p-188037659.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/18/9d/1758158264f86b03d78ea5f5b3e5a57c2bed507f3e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/18/29/1758158274f29698bc51cd8e8881271f441053b445.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '155731796',
    name: 'Men\'s Old Money Thickened Versatile Sweater, Fall Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 366390,
    originalPrice: 439668,
    link: 'https://www.shein.com/a-p-155731796.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/06/9d/175178601540f65d0f1f311b95be140840b310d0a0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/07/06/97/17517860594412144913d332fc3c3aebad62575928.png'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 105
  },
  {
    id: '207661358',
    name: 'Claim Dot Men\'s Stand Collar Solid Color Drop Shoulder Long Sleeve Casual Loose Pullover Sweater Green Sweater Turtle Neck',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 433780,
    originalPrice: 520536,
    link: 'https://www.shein.com/a-p-207661358.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/00/1759972252aeff388723e87d3c1ec3aa479a133302_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/7e/17599722655683cb9e871c26df30c1c3415cf1878e.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '50440440',
    name: 'DAZY Men\'s Casual Plain Brown Sweater, Spring Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 426995,
    originalPrice: 512394,
    link: 'https://www.shein.com/a-p-50440440.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/12/13/d0/1734055789bea8c0d69f721c565b12386929c9d8bc_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/12/13/f4/1734055808c0f915927e17eee31d8d5939b8c3ed1f.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '47525113',
    name: 'Lightweight Casual Textured Knit Sweater, Minimalist Design, Loose Fit Crew Neck Pullover For Unisex, Suitable For Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 332695,
    originalPrice: 399234,
    link: 'https://www.shein.com/a-p-47525113.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/12/21/66/1734791172731e941b6bc2d36807503e8255c27da1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/11/08/e5/17310379141675289d07cfc54beea758640445c28d.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 471
  },
  {
    id: '26125863',
    name: 'Manfinity LEGND Men Graphic Pattern Drop Shoulder Sweater, For Fall Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 400085,
    originalPrice: 480102,
    link: 'https://www.shein.com/a-p-26125863.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/11/23/7d/1700744432a2121353d70b988ba9ef2180f63de1fa_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/11/23/a6/1700744458f9160773018b077ce15e655cd8008c78.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 1001
  },
  {
    id: '177011404',
    name: 'Lightweight, Loose Fit Knit Sweater With Textured Pattern, Casual Unisex Design, Suitable For Autumn And Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 346150,
    originalPrice: 415380,
    link: 'https://www.shein.com/a-p-177011404.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/04/06/17569699493f1f8c4f7e996636c76c0d8fb8b50c0f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/04/97/17569700442eb29c7d56ec0b3c54739fe7de2f4fd8.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 1001
  },
  {
    id: '39148462',
    name: 'Manfinity Mode Men\'s Solid Color Front Half Zip Plain Long Sleeve Casual Pullover Sweater, For Friends, Fall/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 352935,
    originalPrice: 423522,
    link: 'https://www.shein.com/a-p-39148462.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/04/9d/1762234620151249a88dfe589ad8cdac6b8073a5ea_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/28/58/1761620123c0ce50f9d1695a66272a9bab6084e8bf.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 1001
  },
  {
    id: '186823792',
    name: 'Men\'s Solid Color Long Sleeve Casual Zip-Up Stand Collar Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 339480,
    originalPrice: 407376,
    link: 'https://www.shein.com/a-p-186823792.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/10/5c/1757489550340197fff79e110f5f7fef7dd66c8c8c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/10/b4/175748955615d10a6bd2413abccafac48ffc65b328.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 1001
  },
  {
    id: '37382526',
    name: 'ANDREILEE Men\'s Casual Loose White Star Jacquard Pattern Sweater, Unisex Round Neck Pullover Long Sleeve Knit Top, Versatile For Autumn And Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 548205,
    originalPrice: 657846,
    link: 'https://www.shein.com/a-p-37382526.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/07/03/9b/1719999271b8e4062c7ebdaf124772d1750b51744f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/07/03/cb/1719999276756e840e3be949a2dd18da51d7b66dba.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 289
  },
  {
    id: '146209001',
    name: 'Manfinity Hypemode Men\'s Casual Contrast Trim Knit Sweater, Autumn/Winter Men Navy Blue Cable Knit Sweater Men V-Neck Sweater Cable Knit Pullover Men Navy Sweater Men Cricket Sweater Back To School Cable Knit V-Neck Sweater Men Pullover Sweater Navy Blue V-Neck Pullover Mens V-Neck Sweater Navy Blue Sweater 90s Sweater Sporty Sweater Men Mens Navy Blue V-Neck Sweater 90s Sporty Sweater Men Mens Knit Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 400085,
    originalPrice: 480102,
    link: 'https://www.shein.com/a-p-146209001.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/25/35/17561248458545c83855e0e024ea10b7e34d252d91_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/06/65/1754452891df35da63dcac9d978b31b790f5bfd863.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 55
  },
  {
    id: '316197043',
    name: 'GRDR Men\'s Casual Long Sleeve Half-Zip Pullover Sweater, Versatile For Daily Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-316197043.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/24/a8/17639519475af2280f3cccff61d285e35df35c6b36_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/24/7b/1763951955555681c90f280d22043e5e4daac006e6.jpg'
    ],
    inStock: true,
    rating: 4.64,
    reviews: 162
  },
  {
    id: '45557376',
    name: 'ROMWE MEN Grunge Punk Men\'s Casual Crew Neck Figure & Letter Graphic Distressed Pullover Sweater, For Fall Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 440450,
    originalPrice: 528540,
    link: 'https://www.shein.com/a-p-45557376.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/10/22/49/1729590723d6de0363db0afa7d5a65d34f7d322f8a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/10/22/01/17295907390ff5a2b7b6cd1f4c228d3037fa94a73f.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 694
  },
  {
    id: '169053858',
    name: 'GRDR Men\'s Regular Shoulder Long Sleeve High Neck Sweater, Versatile For Daily Wear Knitted Pullover',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-169053858.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/27/88/17642381444aca59c255340332dea0841297affd3f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/02/8b/17620917311cbdaf007bc78ed9bd1ca007521f547e.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '229817046',
    name: 'ROMWE MEN Men\'s Retro Collared Football Inspired Knit Sweater, Preppy Streetwear Style',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 534750,
    originalPrice: 641700,
    link: 'https://www.shein.com/a-p-229817046.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/23/86/1761189479ba884cf64db66c787a45ae4cce9a7a0a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/23/5c/1761189496c982815faa425f2876537938c30a07b5.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 129
  },
  {
    id: '217257412',
    name: 'Manfinity CasualKnits Men\'s Casual Contrast Color Loose Fit Crew Neck Sweater, Autumn/Winter Brown Sweater Men Earthy Men, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 379845,
    originalPrice: 455814,
    link: 'https://www.shein.com/a-p-217257412.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/90/1760630553b755f195f8b183a477ed47caafa2b8f0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/4b/1760630565d4d4b164cf4a6e3d53312cc631ba6d9d.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 119
  },
  {
    id: '317388640',
    name: 'Zip-Up Long Sleeve Soft Knit Cardigan, Round Neck Sweater For Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 325910,
    originalPrice: 391092,
    link: 'https://www.shein.com/a-p-317388640.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/26/b9/1764143549f5d46f0159320595484d94a33dcbcbab_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/26/70/1764143558c17fcb051f3d602461f18e0704ebbd84.jpg'
    ],
    inStock: true,
    rating: '4.9',
    reviews: 21
  },
  {
    id: '156425465',
    name: 'Manfinity Homme Men\'s Solid Color Half-Zip Raglan Sleeve Knit Casual Sweater, Fall Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 420210,
    originalPrice: 504252,
    link: 'https://www.shein.com/a-p-156425465.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/19/92/1755566118649cd579c48f7e3011e0cc87f6836e19_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/19/23/1755566130be2155051e907cf2f7b935966bee5db7.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '45529668',
    name: 'Men\'s Slim Fit Street Style Solid Color Long Sleeve Sweater, Casual Crew Neck Pullover, Lightweight Polyester Knit Top, Suitable For Spring, Autumn, Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 373060,
    originalPrice: 447672,
    link: 'https://www.shein.com/a-p-45529668.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/10/17/ff/17291449013c2248e781c3f0ad20d7a16e55c9ef9a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/10/17/c7/1729145402bec1a085c1ca35cc896145f028efa1ed.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 1001
  },
  {
    id: '317171578',
    name: 'Men\'s Basic Solid Color Turtleneck Sweater, Warm Layering Knit Pullover For Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 426995,
    originalPrice: 512394,
    link: 'https://www.shein.com/a-p-317171578.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/03/03/1764749099427530b803e85adeb26072865f118a7e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/abc/2025/12/03/86/176474911286b2b81c8e5a78c3add1495170d3a2ff.png'
    ],
    inStock: true,
    rating: 5,
    reviews: 1
  },
  {
    id: '42583198',
    name: 'Manfinity EMRG Men\'s Casual Loose Letter Print Drop Shoulder Sweater, Fall/Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 366390,
    originalPrice: 439668,
    link: 'https://www.shein.com/a-p-42583198.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/12/72/1726105579052b4f7757af21d2d2d61186f7e85553_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/12/9a/1726105599da95824993fc74cdfb898a8b55404fe3.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '143236466',
    name: 'Manfinity Homme Men\'s Casual Solid Color Knit Sweater, Autumn/Winter Men Blue Sweater Cable Knit Sweater Men Men V-Neck Sweater Light Blue Knit Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 453905,
    originalPrice: 544686,
    link: 'https://www.shein.com/a-p-143236466.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/04/c9/1754272404f75958bced3cd9e6106714e8ebf64845_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/04/19/17542724186555420a3cafc9c4d4d7dc154f0f1387.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 214
  },
  {
    id: '227790241',
    name: 'GRDR Vintage 7-Gauge Jacquard Crew Neck Sweater, Warm Thick Casual Long Sleeve Knitted Pullover For Men',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 292330,
    originalPrice: 350796,
    link: 'https://www.shein.com/a-p-227790241.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/18/86/1763456054dd8b0f33ef05ce7d3f8ca332d8964b4e_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/p/abc/2025/11/18/b7/17634560707c085bdcfdc7ed7b12501217395dd8b1.png'
    ],
    inStock: true,
    rating: 4.71,
    reviews: 90
  },
  {
    id: '50503861',
    name: 'DAZY Men\'s Solid Color Knit Sweater, Simple Casual Style For Daily Wear, Autumn',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 433780,
    originalPrice: 520536,
    link: 'https://www.shein.com/a-p-50503861.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/12/14/b8/173416629671419eb79db0e32f1bacaa9d3f263d7c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/12/14/59/173416631425626ecc0b0131f3f5a2f761d374c960.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '193132213',
    name: 'Manfinity EMRG Men\'s Letter Distressed Crew Neck Long Sleeve Casual Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 433780,
    originalPrice: 520536,
    link: 'https://www.shein.com/a-p-193132213.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/24/d3/17586964918a254e437b0092b3602ffcfb27df82a9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/24/b9/17586965066abf7c637af4e3e3a5caa996b4c942c8.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 270
  },
  {
    id: '185313815',
    name: 'Manfinity Hypemode Men\'s Casual Colorblock Pattern Sweater, Autumn/Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 393300,
    originalPrice: 471960,
    link: 'https://www.shein.com/a-p-185313815.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/17/1a/1758071981b86410c0f16ba7326aa9f02a68bc4029_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/17/e3/1758071990b0e8a1e274e3b6a747299539bc95834a.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 1001
  },
  {
    id: '176611572',
    name: 'Lightweight, Loose Fit Knit Sweater With Textured Pattern, Casual Unisex Design, Suitable For Autumn And Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 346150,
    originalPrice: 415380,
    link: 'https://www.shein.com/a-p-176611572.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/04/26/1756969389b6e939ce1fa5f7eddd9d058382826473_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/04/91/1756969482d89070a54e6de04714367527ae4df344.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 1001
  },
  {
    id: '250351443',
    name: 'GRDR Men\'s Casual Twist Floral Pattern Crew Neck Long Sleeve Knit Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 305785,
    originalPrice: 366942,
    link: 'https://www.shein.com/a-p-250351443.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/21/0c/17637082721b8edaddc756e669a989f9dfcc646522_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/08/11/10/1754903587b174dd09e96c4e20a393a855d57e84cc.jpg'
    ],
    inStock: true,
    rating: 4.94,
    reviews: 19
  },
  {
    id: '187200595',
    name: 'BAI YUE Fashion Lethargic Style Thick Twisted Button Rope Drop Shoulder Round Neck Sweater Men\'s Sweater, Suitable For Commuting, New Fall And Winter, Christmas, New Year, New Year Attire, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 447235,
    originalPrice: 536682,
    link: 'https://www.shein.com/a-p-187200595.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/14/65/1757780998652417fbb5bbaf459b4d56ee0d9a5b01_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/14/1b/17577810320845ac08cd84a818b51b0626b1818351.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 141
  },
  {
    id: '24829582',
    name: 'RueChic Men\'s Printed Drop Shoulder Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 312455,
    originalPrice: 374946,
    link: 'https://www.shein.com/a-p-24829582.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/11/08/85/16994238695ba5c5077b8568f56bb2724b28993f06_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/11/08/c5/169942388354b0ba8aa2963d6e08db34dcca485264.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '103935485',
    name: 'Men Long Sleeve Striped Airplane Collar Knit Sweater , Fall Winter, Grunge Style',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 251850,
    originalPrice: 302220,
    link: 'https://www.shein.com/a-p-103935485.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/spmp/2025/12/22/45/1766381540c4f31743044a2326342d9f9f35db2efd_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/p/abc/2025/12/22/1f/1766381561e28512057acba825916bd1b835451059.png'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 73
  },
  {
    id: '217153983',
    name: '1pc Men\'s Solid Color Sweater, Vintage Style, Casual Everyday Wear, Quarter Zip High Neck Pullover, Warm & Comfortable, Suitable For Halloween, Autumn/Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 379845,
    originalPrice: 455814,
    link: 'https://www.shein.com/a-p-217153983.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/17/5f/176066440141604ee22336c78d1d7b92ac1a6101d8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/10/26/36/176144327079b92b173293090e8a339b7682f8e637.png'
    ],
    inStock: true,
    rating: '4.3',
    reviews: 37
  },
  {
    id: '21436632',
    name: 'DAZY Men\'s Casual Everyday Commute Simple Solid Color Ribbed Knit Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 447235,
    originalPrice: 536682,
    link: 'https://www.shein.com/a-p-21436632.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/11/b3/1762827847030c1ae1e67baadc6fc1311360315778_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/11/b3/1762827859030340600f9ca0cdb94a14994271937a.jpg'
    ],
    inStock: true,
    rating: 4.94,
    reviews: 1001
  },
  {
    id: '196100518',
    name: 'Men\'s Knitted Sweater With Twisted Lapel And Warm Loose Design',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 359605,
    originalPrice: 431526,
    link: 'https://www.shein.com/a-p-196100518.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/11/9f/1757580884353d2f6aca582015e848c6e3da800725_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/11/14/1757580893e21510602e9fdd276db7ed1d720e1822.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 906
  },
  {
    id: '138981279',
    name: '1pc Men\'s Half-Zip Pullover Sweater, Comfortable Soft Skin-Friendly Stretchy Fabric, Black Minimalist Textured, Versatile For Home, Travel, Business, Men Sweater , Fall Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 494385,
    originalPrice: 593262,
    link: 'https://www.shein.com/a-p-138981279.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/04/bb/1751563236d027cb47ab2754965ae3f64037308109_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/07/04/9a/17515632424a07876a60f916aff50d0141f04368e0.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 238
  },
  {
    id: '208388962',
    name: 'GRDR Men\'s Stand Collar Double-Breasted Long Sleeve Cardigan Sweater, Versatile For Daily Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 507840,
    originalPrice: 609408,
    link: 'https://www.shein.com/a-p-208388962.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/7d/1763450021ed0b831b83dd26a2eb71850d3e167cbc_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/13/65/1763021085003e1df22e0a6f2d86b9afd7f5aed53b.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 47
  },
  {
    id: '210652906',
    name: 'GRDR Men\'s Casual Versatile Solid Color Twist Knit Crew Neck Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 332695,
    originalPrice: 399234,
    link: 'https://www.shein.com/a-p-210652906.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/97/17634365684e7e685714d75112f4a2f74142d1b5bd_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/18/a1/1763436577d84734bf122723d46062896b2d86356f.jpg'
    ],
    inStock: true,
    rating: 4.95,
    reviews: 47
  },
  {
    id: '40381652',
    name: 'DAZY Men\'s Solid Color Loose Fit Dropped Shoulder Casual Cardigan, Autumn Jacket',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 494385,
    originalPrice: 593262,
    link: 'https://www.shein.com/a-p-40381652.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/08/09/50/1723168749a149ba63993c1cb8acd944d1568b3b1b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/08/09/a3/1723168774498b569ecd9009569a1371d94d1ec910.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '305901954',
    name: 'Men\'s Casual Ribbed Knit Sweater, Round Neck, Minimalist & Fashionable For Everyday Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 312455,
    originalPrice: 374946,
    link: 'https://www.shein.com/a-p-305901954.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/02/1c/17646583502881457f7143d2fd736c99f308d23230_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/02/5f/17646584427fed117a5da8ed5fa5b9dbbfababcc44.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 537
  },
  {
    id: '103680892',
    name: 'Men\'s Casual Solid Color V-Neck Pullover Sweater, Navy Blue, Autumn/Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 305785,
    originalPrice: 366942,
    link: 'https://www.shein.com/a-p-103680892.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/19/12/17503005244368f4d7098e398feaa831fdc0b3c652_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/08/19/60/1755582725b10521e9d5ba5d5395c3ba8b8b7608a5.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 627
  },
  {
    id: '40188745',
    name: 'Solid Color Crew Neck Men\'s Casual Sweater , Minimalist For Daily Commute , Essential For Layering, For Fall Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 406755,
    originalPrice: 488106,
    link: 'https://www.shein.com/a-p-40188745.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/10/15/89/17289784483730de4ae7bb38543479b6aa99cd8341_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/11/43/17628462476f60ab5b4eba4daa45fa881a99a8c768.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 910
  },
  {
    id: '217275844',
    name: 'Manfinity CasualKnits Men\'s Contrast Color Pattern Crew Neck Long Sleeve Sweater, Fall/Winter Men S 90s Fashion Men Clothes Street Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-217275844.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/52/17606305195a25625783b3aec36bb50755d3d51987_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/d8/17606305292d36754fdbb385ba5e410858b7cab816.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 119
  },
  {
    id: '279302758',
    name: 'RONVEXI Men\'s Simple Stylish Casual Zip-Up Knit Sweater, Suitable For Autumn/Winter, Mock Neck Men, Men Knit Tops, Quarter Zip Sweater Men, Men S Sweater Men\'s Casual Solid Color Knit Sweater, Autumn/Winter Men Sweater Top Jumper For Men Knit Wear Men Sweaters For Men Cashmere Men S Clothing It Is Great For Couples And Makes An Excellent Gift Idea For Boyfriends Or Husbands Navy Blue Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 420210,
    originalPrice: 504252,
    link: 'https://www.shein.com/a-p-279302758.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/11/fe/1762861031d4b0ff907fa61f63c58533d1e13af9cf_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/11/ca/1762861046b409eefe07f0b6acaa98a1a9b880e87a.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '182697064',
    name: 'Men Knitted Casual Loose Fit Long Sleeve Sweater, Stylish And Youthful, For Daily Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 480815,
    originalPrice: 576978,
    link: 'https://www.shein.com/a-p-182697064.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/14/a8/17604309695e373ed1dcbda49c34a9da98ea77b055_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/14/64/1760431045311580ff4bfc9bb36c291432704efd03.jpg'
    ],
    inStock: true,
    rating: 4.94,
    reviews: 1001
  },
  {
    id: '195881215',
    name: 'Manfinity Homme Men\'s Fashion Casual Cable V-Neck Long Sleeve Knit Sweater, Fall/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 460690,
    originalPrice: 552828,
    link: 'https://www.shein.com/a-p-195881215.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/26/48/17588776524a7ce16436d501a40188cd7fa4ca3af9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/pi/2025/09/26/84/1758877661b700617c73a02be0a0ecec74a71a7bf6.png'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 214
  },
  {
    id: '186494605',
    name: 'Manfinity Hypemode Men\'s Casual Loose Fit Graphic Pattern Crew Neck Long Sleeve Pink Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 393300,
    originalPrice: 471960,
    link: 'https://www.shein.com/a-p-186494605.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/18/26/1758158254b0c866e7539c73b7870b39df9d5bae4d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/18/d8/17581582653c004d6f0511fc3b9518c80c52d91716.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 1001
  },
  {
    id: '205163268',
    name: 'GRDR Men\'s Casual Long Sleeve Half-Zip Pullover Sweater, Versatile For Daily Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-205163268.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/70/17634427497b89f632a92896b6b984bcfa897a66a7_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/18/33/1763442787dfb712dc07c178f1e032d56d0d198118.jpg'
    ],
    inStock: true,
    rating: 4.64,
    reviews: 162
  },
  {
    id: '261138671',
    name: 'Manfinity EMRG Men\'s Casual Letter Pattern Distressed Knit Sweater, Autumn/Winter Men Long Sleeve Top Knit Sweater Graphic',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 467360,
    originalPrice: 560832,
    link: 'https://www.shein.com/a-p-261138671.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/04/35/17622186967efca1edc2c998943644274b6ed38c4a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/04/5e/1762218709a16cd3baaa54fa5cdc5034d8ca1eab70.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 270
  },
  {
    id: '182196771',
    name: 'Manfinity Homme Men\'s Casual Everyday Commute Simple Solid Color Short Sleeve Cable Knit Sweater, Autumn',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 285545,
    originalPrice: 342654,
    link: 'https://www.shein.com/a-p-182196771.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/15/58/1757899381e4f7183e33d5a6779239b58f666b78d2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/15/b5/17578993882203f7b30952e558e7366d635254b704.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '163462840',
    name: 'Manfinity Homme Men\'s Casual Loose Fit Knitted Sweater With Cable Pattern, Round Neck, Drop Shoulder, Long Sleeve, Suitable For Autumn Men Sweater Knitwear Cable Knit Sweater Men Pullover Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 420210,
    originalPrice: 504252,
    link: 'https://www.shein.com/a-p-163462840.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/16/52/17580038672c04542a1c3dc6ec451b60f0eb9c808c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/27/71/1756257682b7c0975206ee0699cad1c8dd2e02eb43.jpg'
    ],
    inStock: true,
    rating: 4.95,
    reviews: 63
  },
  {
    id: '179791997',
    name: 'GRDR Men\'s Regular Shoulder Long Sleeve High Neck Sweater, Versatile For Daily Wear Knitted Pullover',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-179791997.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/19/48/1763557211d25d495e596229505e4d40df0c7b9fcf_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/19/df/1763530245f2f3802d841b26c971066e071408d924.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '50296970',
    name: 'DAZY Solid Color Beige Casual Daily Wear Knitted Sweater For Men, Spring Winter Quarter Zip Men',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 575115,
    originalPrice: 690138,
    link: 'https://www.shein.com/a-p-50296970.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/12/13/b6/1734056534bc303674ba0757d067175b9cc96feb6a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/12/13/90/17340565550c9267c544727bc96ad9bdee2c323651.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 428
  },
  {
    id: '221080220',
    name: 'Men\'s Casual Solid Color Minimalist Crew Neck Long Sleeve Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 238395,
    originalPrice: 286074,
    link: 'https://www.shein.com/a-p-221080220.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/10/8f/176006840905d7eea96cb16553ee85676a2f8a8d2a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/22/fb/1761111144e34f1d985d23fb2682cd47f7fd8f5afa.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 403
  },
  {
    id: '179616279',
    name: 'Musero Oversized Long Sleeve Chunky Knit Style Jumper Sweater Button Placket Detailing',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 460690,
    originalPrice: 552828,
    link: 'https://www.shein.com/a-p-179616279.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/26/2a/17588689650a89dfdd0ff0187cab4c7715c64804c3_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/12/5d/175765618116c8eca46b3490772a9af194c9b19fa8.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 24
  },
  {
    id: '303688268',
    name: 'DAZY Khaki Patchwork Collar Short Men Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 433780,
    originalPrice: 520536,
    link: 'https://www.shein.com/a-p-303688268.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/25/c5/17640361778c563be78fd364f73f7cf8b10f0fba89_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/25/6b/17640361937dc662df601638bd8f374915cb94ae4a.jpg'
    ],
    inStock: true,
    rating: '4.5',
    reviews: 149
  },
  {
    id: '136385176',
    name: 'Manfinity CasualKnits Men\'s Casual Solid Color Knit Pink Sweater, Autumn/Winter Back To School Fur, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 467360,
    originalPrice: 560832,
    link: 'https://www.shein.com/a-p-136385176.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/02/a5/1756818309e4ddc42a49b59d3caf6f2c2ba4d8ba66_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/26/67/1753544553efe978aa0a46d47c95fe0995ebbde9c2.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 67
  },
  {
    id: '44993495',
    name: 'Claim Dot Men\'s Casual Solid Color Fringe Pullover Sweater, Autumn/Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 413540,
    originalPrice: 496248,
    link: 'https://www.shein.com/a-p-44993495.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/10/16/f9/1729042505e0c31667ba4f187f11e95993bfe62707_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/10/16/ec/1729042534f8f992036c98d22cd7d95df08689b9eb.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '239449441',
    name: 'Lightweight Casual Textured Knit Sweater, Minimalist Design, Loose Fit Crew Neck Pullover For Unisex, Suitable For Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 339480,
    originalPrice: 407376,
    link: 'https://www.shein.com/a-p-239449441.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/23/54/176119819622beb8ef5acd9e6bb33ed5379031d647_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/23/1e/1761198211c2163c0f2fd815a616b3b5ac61de6964.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 471
  },
  {
    id: '149682729',
    name: 'ROMWE MEN Prep Men\'s Retro Collared Football Inspired Knit Sweater , Fall Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 527965,
    originalPrice: 633558,
    link: 'https://www.shein.com/a-p-149682729.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/11/f5/1754900189484e6573f37bf6cc598c45f684895072_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/11/28/1754900196ed9847a32dfb0054a9781c6ae3b3533b.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 129
  },
  {
    id: '212613411',
    name: 'Men\'s Casual Loose Minimalist Commuting High-End Everyday Versatile Solid Color Knitted Long Sleeve Crew Neck Pullover Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 325910,
    originalPrice: 391092,
    link: 'https://www.shein.com/a-p-212613411.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/20/ee/176360989441bf56f23fd171f4ddd92e92f9a43b76_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/20/60/1763609978a6bc922afe7216ea7ee21d59ae76f341.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 76
  },
  {
    id: '210123262',
    name: 'Men\'s Solid Color Casual Thin Turtleneck Long Sleeve Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 312455,
    originalPrice: 374946,
    link: 'https://www.shein.com/a-p-210123262.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/31/c0/17618731232d366172f13000bd41aa87f9522fd5ab_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/31/01/1761873138dab57ae39ac8ddb3a1baa6f968e0e87b.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 671
  },
  {
    id: '172592310',
    name: 'GRDR Men\'s Casual Jacquard Knit Crew Neck Long Sleeve Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-172592310.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/48/17634564197c479de5baafd2ffd45a0f79d171cf2a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/04/38/17622234392a6511995285395a7d5fc7301334af14.jpg'
    ],
    inStock: true,
    rating: 4.77,
    reviews: 187
  },
  {
    id: '144369030',
    name: 'Manfinity Homme Casual Fashion Versatile Solid Color Loose Fit Long Sleeve Men Sweater Quarter Zip Sweater Men Mock Neck , Fall Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 426995,
    originalPrice: 512394,
    link: 'https://www.shein.com/a-p-144369030.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/05/b3/1754371465d74b125c2efd61eb4d41e22cb1149fdd_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/05/61/175437147888fc400298c9d1a63f3f303ff9aa37f5.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '24877384',
    name: 'DAZY Men Solid Ribbed Knit Fall Brown Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 480815,
    originalPrice: 576978,
    link: 'https://www.shein.com/a-p-24877384.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/10/18/f4/169762890615b722ba92e96b8bec0197c79b264fd4_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/10/18/30/1697628918140e9430fe8e2bfc9dc24011ef3a3945.jpg'
    ],
    inStock: true,
    rating: 4.94,
    reviews: 1001
  },
  {
    id: '305022288',
    name: 'NEON BLANC Men\'s Zebra Print Crew Neck Dropped Shoulder Loose Casual Pullover Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 548205,
    originalPrice: 657846,
    link: 'https://www.shein.com/a-p-305022288.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/25/19/176407174329ce80126f303480a80a0868eb29a243_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/25/6a/176407175747fb0d9abe79308dfbd39d2195a46c41.jpg'
    ],
    inStock: true,
    rating: 4.96,
    reviews: 26
  },
  {
    id: '38899086',
    name: 'Manfinity LEGND Men\'s Asymmetrical Line Pattern Casual Loose Knitted Sweater, Autumn Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 379845,
    originalPrice: 455814,
    link: 'https://www.shein.com/a-p-38899086.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/07/24/1f/172180518587e824755c959f2ea45af6a4bafc1731_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/07/18/8c/1721283023bce7cd00a32cc3b373b8db067e426c16.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 1001
  },
  {
    id: '232173321',
    name: 'GRDR Autumn/Winter New High Neck Pullover Sweater, Casual Thin Knit Top For Daily Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 373060,
    originalPrice: 447672,
    link: 'https://www.shein.com/a-p-232173321.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/fc/17634495395b471bb51caeb930c3a024dd337a6592_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/18/2a/1763449763265a564de626806f1dc620f06ab3e232.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 533
  },
  {
    id: '219537677',
    name: 'Men\'s Casual Loose Fit Solid Color Pullover Sweater, Streetwear Style, Round Neck, Long Sleeve, Versatile, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 373060,
    originalPrice: 447672,
    link: 'https://www.shein.com/a-p-219537677.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/13/7f/1760333927abc2ef9930f7784b5d6d89cd75d7a5b4_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/13/ce/17603339476fced6069d8b1537107c0d6b6edf9a19.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 255
  },
  {
    id: '182705930',
    name: 'Men\'s Fashion Casual Daily Loose Knit Long Sleeve Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 480815,
    originalPrice: 576978,
    link: 'https://www.shein.com/a-p-182705930.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/07/8b/1762513461ff6746454da5ce76bd40f6005e3bf3b2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/07/5e/1762513481577c128847062def4e11cebdf3b7e182.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 1001
  },
  {
    id: '132835054',
    name: 'Calvornis Men\'s Casual Solid Color Knit Sweater, Autumn/Winter Men Quarter Zip Thermal Lined Thermal Lined And Thickened Sweater, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 373060,
    originalPrice: 447672,
    link: 'https://www.shein.com/a-p-132835054.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/22/b8/1753181236f41900afd741f15da70a1a42aa5fba1d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/22/6d/17531812467743d4b09b89e6e7b74ae1ef4a4ead71.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '179809618',
    name: 'GRDR Men\'s Regular Shoulder Long Sleeve High Neck Sweater, Versatile For Daily Wear Knitted Pullover',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-179809618.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/19/cf/1763557235e2632be3208dcbd4d306be5c15ef30e4_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/10/e2/1757475696c5b69835fd2d8ab06520c83f25e96f4a.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '207656776',
    name: 'Claim Dot Men\'s Solid Color Minimalist Everyday Wear Half-Turtleneck Long Sleeve Knit Sweater Earthy Clothes Men Brown Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 433780,
    originalPrice: 520536,
    link: 'https://www.shein.com/a-p-207656776.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/dd/1759972245de46e20fb12145b3fda4b59cc78109a9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/db/17599722582cdb2ca1a3503c1dee399cec6681a1de.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '184751907',
    name: 'Men\'s Loose Solid Color Long Sleeve Zip-Up Casual Knit Cardigan, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 487600,
    originalPrice: 585120,
    link: 'https://www.shein.com/a-p-184751907.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/16/4a/1758014292d376b2338c7d658537becb50ac1aad46_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/09/16/70/17580143584f45331181275e72d32b90edea077655.png'
    ],
    inStock: true,
    rating: 4.71,
    reviews: 157
  },
  {
    id: '200119542',
    name: 'ROMWE MEN Goth Men\'s Punk Distressed Apocalyptic Print Knit Sweater, Fall/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 460690,
    originalPrice: 552828,
    link: 'https://www.shein.com/a-p-200119542.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/29/44/17591119009bf4812e6be679696b6e782ca8d58d0d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/29/59/1759111907f3aacd13aeca46081f3a65449fdb5093.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 278
  },
  {
    id: '197201847',
    name: ' OFFICEAU 1pc Men\'s Casual Regular Fit Twisted Floral Embroidered Crew Neck Knit Sweater, Autumn/Winter, Old Money',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 406755,
    originalPrice: 488106,
    link: 'https://www.shein.com/a-p-197201847.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/28/d2/1759058414834c0bed62fb19622bf5267318d50b23_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/28/2e/1759058427f2e5d560d134053f5b4bc20cb7ba6bd1.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 1
  },
  {
    id: '11032300',
    name: 'DAZY Men Striped Pattern Polo Neck Fall Sweater Without Tee Quarter Zip Men',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 541535,
    originalPrice: 649842,
    link: 'https://www.shein.com/a-p-11032300.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2022/07/13/165767851674b06c1b8fb022846d6330b08f034362_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2022/07/13/1657678530ae630653d368e880e9c63fab7d3bc190.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '245626206',
    name: 'Manfinity Homme Men\'s Casual Solid Color Knit Sweater, Autumn/Winter Men Cable Knit Men V-Neck Sweater Cream Men Sweater, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 460690,
    originalPrice: 552828,
    link: 'https://www.shein.com/a-p-245626206.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/31/42/1761873987032dfde081ac3a0900b177fe2af6f3d4_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/31/e1/17618740003b5e3d24228a81119523c18524ac9321.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 214
  },
  {
    id: '239466591',
    name: 'Lightweight Casual Textured Knit Oversized Unisex Sweater, Minimalist Design, Loose Fit Crew Neck Pullover, Suitable For Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 332695,
    originalPrice: 399234,
    link: 'https://www.shein.com/a-p-239466591.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/23/7b/176118489001c521ec9371bcaadea9a5273addee5e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/20/4a/1760969361368ec2109e7a8b98440feabecf013913.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 471
  },
  {
    id: '318116093',
    name: 'GRDR Men\'s Casual Twist Floral Pattern Crew Neck Long Sleeve Knit Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 305785,
    originalPrice: 366942,
    link: 'https://www.shein.com/a-p-318116093.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/19/a8/17661495575c31c94dcead428889dd84da23c1c926_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/19/26/1766149564c494a77591e2653ed9fbbad97e4cf608.jpg'
    ],
    inStock: true,
    rating: 4.94,
    reviews: 19
  },
  {
    id: '280675525',
    name: 'SWAVVY Men\'s Casual Loose Fit Solid Color Round Neck Drop Shoulder Long Sleeve Knit Pullover Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 514510,
    originalPrice: 617412,
    link: 'https://www.shein.com/a-p-280675525.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/26/9f/17641462137b3de53601b919105eff953255d4c9dd_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/26/43/1764146223b239280b8a29a9c2b7ba056b0ceec563.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 127
  },
  {
    id: '44923420',
    name: 'BAI YUE Oversized Solid-Color Casual Commuter Style, Crew Neck Knit Sweater Men\'s Base Layer Sweater, Christmas, New Year Attire, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 426995,
    originalPrice: 512394,
    link: 'https://www.shein.com/a-p-44923420.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/10/29/68/1730210633ea4d18641fb275b738e5d37dd4a21a46_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/07/11/10/1752244969060a7a9bccd4cb3ee4af2fcc40e0a620.png'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 472
  },
  {
    id: '46291828',
    name: 'Manfinity Mode Men\'s Casual Solid Color Round Neck Sweater, Autumn/Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 265305,
    originalPrice: 318366,
    link: 'https://www.shein.com/a-p-46291828.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/10/30/b0/1730268015251fc733abac59b01be0491e3d0c3a06_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/10/30/a8/173026802763ffe74d40259812d7a0d8a83d58c868.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 1001
  },
  {
    id: '156321503',
    name: 'Manfinity Homme Men\'s Solid Color Raglan Sleeve Zip-Up Half Placket Casual Sweater, Autumn',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 406755,
    originalPrice: 488106,
    link: 'https://www.shein.com/a-p-156321503.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/19/16/1755566102674ef473008b220aca6f25bdffc072a2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/19/20/1755566114d539a9edae11f0b1d735df312625ecb9.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '38140686',
    name: 'ANDREILEE Men\'s Asymmetrical Abstract Pattern Colorblock Long Sleeve Casual Loose Fit Pullover Sweater, Versatile Round Neck Knit Top, Suitable For Spring, Autumn, Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 426995,
    originalPrice: 512394,
    link: 'https://www.shein.com/a-p-38140686.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/07/10/b2/17205980352cf7c116a8cf090f27443d36feaf0f9e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/07/10/4c/17205980387724012c2847192f8ac366e07757e876.jpg'
    ],
    inStock: true,
    rating: 4.94,
    reviews: 148
  },
  {
    id: '217115836',
    name: 'Men\'s Crew Neck 7-Gauge Jacquard Knit Long Sleeve Casual Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 272090,
    originalPrice: 326508,
    link: 'https://www.shein.com/a-p-217115836.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/spmp/2025/09/25/a3/175879927322457275bb9ced8968ef4991d0044678_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/p/abc/2025/09/25/f9/1758799294ca6a867f136689c4c2cf51876f4b6678.png'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 10
  },
  {
    id: '159538015',
    name: 'Manfinity Homme Men\'s Old Money Casual Striped Crew Neck Sweater, Autumn Men Long Sleeve Sweater, Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 319240,
    originalPrice: 383088,
    link: 'https://www.shein.com/a-p-159538015.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/01/7d/17566995096ac8bc8682ba2dd4865883dc2ee1321d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/22/29/1755828533c133c6a1ea27ab596189094af0af254b.jpg'
    ],
    inStock: true,
    rating: 4.96,
    reviews: 159
  },
  {
    id: '265999857',
    name: 'Manfinity EMRG Men\'s Solid Color Crew Neck Long Sleeve Distressed Loose Knit Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 447235,
    originalPrice: 536682,
    link: 'https://www.shein.com/a-p-265999857.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/05/6a/176230532681a537c69194e539263d2110d3250e85_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/05/0c/1762305336d429d72d22ad1e2f8d1c8db7d66a8612.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '207197388',
    name: 'Manfinity Homme Men\'s Solid Color Casual Drop Shoulder Long Sleeve Quarter Zip Knit Sweater, Fall/Winter Turtle Neck Men Mens Pullover Sweater Mock Neck Men',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 426995,
    originalPrice: 512394,
    link: 'https://www.shein.com/a-p-207197388.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/07/72/1759840093834e70b17dd812b1b9cd25d28ecaface_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/07/f3/1759840103b75454a991fdaefdd2e633e50ce94899.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 169
  },
  {
    id: '26344541',
    name: 'Manfinity Homme Men\'s Crew Neck Sweater, Long Sleeve Knit Pullover For Casual Wear, Home, Work Commute, Gift For Boyfriend/Family, Autumn/Winter Christmas, For Fall',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 366390,
    originalPrice: 439668,
    link: 'https://www.shein.com/a-p-26344541.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/51/1763342656171eceeb25e919fe6cd4a7d2c9575728_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/bf/1763342665c3c00f560722359816e75e47783fced6.jpg'
    ],
    inStock: true,
    rating: 4.94,
    reviews: 1001
  },
  {
    id: '279815029',
    name: 'Manfinity Homme Men\'s Contrast Color Minimalist Crew Neck Long Sleeve Sweater, Casual Everyday Wear Earthy Clothes Men Jumper For Men Men Sweater Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 359605,
    originalPrice: 431526,
    link: 'https://www.shein.com/a-p-279815029.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/08/a9/176260402998b91f8aef04b478bbdc3e684134c67d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/08/a0/1762604045f3ceeb33145a051ae07de933572c7bc8.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '245818618',
    name: 'GRDR Men\'s Casual Long Sleeve Half-Zip Pullover Sweater, Versatile For Daily Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-245818618.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/1e/176345210868a2253e2cf000b33a57173c01521a7d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/abc/2025/10/25/7e/176137177186caf37baf756f2d56e5f8b6f1d1fbdf.png'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 29
  },
  {
    id: '204689867',
    name: '1pc Men\'s Casual Long Sleeve Half-Zip Pullover Sweater, Versatile For Daily Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 359605,
    originalPrice: 431526,
    link: 'https://www.shein.com/a-p-204689867.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/17/89/17633923299eeb76e135da4ebf51ded484f9a03c6b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/17/a8/1763392335516638fba7492f50c68b9603d9f4c236.jpg'
    ],
    inStock: true,
    rating: 4.55,
    reviews: 34
  },
  {
    id: '48031865',
    name: 'Men\'s Solid Color Crew Neck Casual Sweater, Minimalist For Daily Commute, Essential For Layering, Autumn/Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 406755,
    originalPrice: 488106,
    link: 'https://www.shein.com/a-p-48031865.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/11/21/c3/1732169598df206c304fa6b9bc8ffa8260abcddc8c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/11/13/7b/1731495470c49f1a4574ba7aa7029c000c4f18ec3a.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 910
  },
  {
    id: '182205839',
    name: 'Manfinity Homme Men\'s Solid Color Cable Knit Crew Neck Casual Short Sleeve Sweater Men Knitted Shirt Turquoise Clothes Men Men Knit Tops',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 285545,
    originalPrice: 342654,
    link: 'https://www.shein.com/a-p-182205839.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/15/17/1757899380232315778b7cbb3ab4a8a44814e06355_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/15/27/175789938816ffb4417e21528e994582f186b6156f.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '215901096',
    name: 'Men\'s Solid Color Crew Neck Casual Loose Fit Long Sleeve Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 440450,
    originalPrice: 528540,
    link: 'https://www.shein.com/a-p-215901096.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/17/55/1760686105d579ea17ba31631288e941858463e499_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/10/e7/1760067037ea18c54edb5cd2083fad10496a4c0aa0.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 3
  },
  {
    id: '208929288',
    name: 'Autumn/Winter Unisex Street Style Minimalist Long Sleeve Crew Neck Pullover Sweater With Fringe & Distressed Details, Loose & Comfortable',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 534750,
    originalPrice: 641700,
    link: 'https://www.shein.com/a-p-208929288.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/27/02/176154597835cb6490d40ee4ce58ce5622afa0ce65_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/27/5e/1761546032e6a4b2c5440c280fc3e43c7ee39f4b82.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 808
  },
  {
    id: '45139745',
    name: 'BAI YUE Men\'s Autumn/Winter Retro Old Money Style Knitted Sweater, Loose Round Neck Textured Pullover, Christmas, New Year Attire, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 400085,
    originalPrice: 480102,
    link: 'https://www.shein.com/a-p-45139745.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/10/11/7a/17286518926ec64b333c96417e7d959acec806758b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/11/29/04/173289456980ccd757784771a1ad92dd9d78af9093.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 409
  },
  {
    id: '246580317',
    name: 'ROMWE MEN Goth Men\'s Casual Spider Web Pattern Sweater, Autumn/Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 420210,
    originalPrice: 504252,
    link: 'https://www.shein.com/a-p-246580317.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/29/5d/1761707416f8dc665b645232a5680ead7bad9f6658_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/29/c3/1761707427e862eecb35fb9be4e607468bdfe44c2e.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 758
  },
  {
    id: '212657233',
    name: 'Men\'s Casual Loose Retro Striped Pullover Sweater, Minimalist Street Style, Autumn/Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 413540,
    originalPrice: 496248,
    link: 'https://www.shein.com/a-p-212657233.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/19/bf/17608612916cde59b2b400290581c891e84b57f3fd_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/15/c1/1760517882be1e57937485f14089da18f58a72d958.jpg'
    ],
    inStock: true,
    rating: 4.73,
    reviews: 105
  },
  {
    id: '239427472',
    name: 'Lightweight Casual Textured Knit Sweater, Minimalist Design, Loose Fit Crew Neck Pullover For Unisex, Suitable For Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 332695,
    originalPrice: 399234,
    link: 'https://www.shein.com/a-p-239427472.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/23/43/176118482667e526676be04c8771acd951a2d0d979_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/15/5a/1760526274f9832b470332b97624f869e4443b416b.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 471
  },
  {
    id: '184637409',
    name: 'Men\'s Thick Round Neck Sweater, Business Casual Jacquard Knit Long Sleeve Top, Versatile Layering Piece, Plaid & Striped Pattern, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 433780,
    originalPrice: 520536,
    link: 'https://www.shein.com/a-p-184637409.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/08/10/56/17548268866c58d40919ef0bc602a61cb082b4804f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/08/10/fa/1754826928aec45058258c294cf82b9e0da7e0079b.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 61
  },
  {
    id: '154321869',
    name: 'AKNOTIC Business Casual Men\'s Contrast Color Round Neck Drop Shoulder Casual Knit Cardigan Sweater , Fall Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 494385,
    originalPrice: 593262,
    link: 'https://www.shein.com/a-p-154321869.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/15/f4/17552448236dedd2a7038aec99361c441e4fb556a9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/15/9e/1755244829afdbb95bd6983f07f8cd2368a6c7b6a3.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 66
  },
  {
    id: '164968787',
    name: 'Unisex Vintage Casual Loose Fit Crew Neck Sweater With Star Pattern, Lightweight & Comfortable, Suitable For Spring, Autumn & Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 447235,
    originalPrice: 536682,
    link: 'https://www.shein.com/a-p-164968787.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/02/b3/1756775684ba78f929892fa402f082d386877d44a7_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/26/fd/1764146362ceb14dc3ad9b14a3663ba7ad7ec057ce.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 748
  },
  {
    id: '181771273',
    name: 'Men\'s Zip-Up Sweater, Slim Fit Casual Pullover Sweater With Textured Polo Collar, Half-Zip Stand Collar Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 467360,
    originalPrice: 560832,
    link: 'https://www.shein.com/a-p-181771273.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/05/86/1762313138970e38d81e8a8120f23e5b0cabd82a03_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/05/40/17623131547e35eda7e4309ea556bda531751ab98a.jpg'
    ],
    inStock: true,
    rating: '4.7',
    reviews: 142
  },
  {
    id: '240972635',
    name: 'HIMLAND Men\'s Fashionable Versatile Crew Neck Long Sleeve Sweater, Autumn/Winter Knit Wear Men Cable Knit Sweater Men Mens Sweaters Pullover Sweater Polo Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 393300,
    originalPrice: 471960,
    link: 'https://www.shein.com/a-p-240972635.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/27/2f/176154202185245e1d92ee9d8d97f5ba650b5f2d77_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/27/4d/17615420351e3d65b6d6a89dec097fb7a9c52ed167.jpg'
    ],
    inStock: true,
    rating: 4.68,
    reviews: 16
  },
  {
    id: '249268162',
    name: 'Manfinity EMRG Men\'s Crew Neck Drop Shoulder Long Sleeve Casual Contrast Color Jacquard Knit Sweater Pink Sweater Pullover Sweater Sweaters Y2k',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-249268162.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/26/64/176413378824298ac3bdb45c176a95f3f148a1cdf9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/af/176178692034e1d50272c9aed820fc568013966ef0.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '221797461',
    name: 'Manfinity EZcore Men\'s Fashionable Casual Solid Color Crew Neck Long Sleeve Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 413540,
    originalPrice: 496248,
    link: 'https://www.shein.com/a-p-221797461.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/18/1760678344d7a92160f3a3281b9005b7b41742de01_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/88/1760678357d986ce4500d02ad3b588f77b225a0fd3.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '203632517',
    name: 'Claim Dot Men\'s Casual Solid Color Round Neck Drop Shoulder Long Sleeve Pink Sweater, Fall/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 393300,
    originalPrice: 471960,
    link: 'https://www.shein.com/a-p-203632517.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/29/7d/175913427619af80553ff6af593a1b83e805c9586c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/29/84/1759134286bafec37768129cfb74364b3f574d4d33.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 171
  },
  {
    id: '219639393',
    name: 'Lightweight, Warm Knit Pullover Sweater, Loose Fit, Polyester Fabric, Casual, Collegiate Style, Unisex Design, Long Sleeve Top, Drop Shoulder, Minimalist Crew Neck, Suitable For Autumn And Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 352935,
    originalPrice: 423522,
    link: 'https://www.shein.com/a-p-219639393.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/23/db/1761197829fd772f19aa1dc602e535f299b6e096d9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/23/93/176119784595002bcf41500809e3633f11e23c38c0.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 1001
  },
  {
    id: '223093857',
    name: 'Manfinity EMRG Men\'s Casual Fashion Street Holey Letter Pattern Dropped Shoulder Loose Knit Sweater, Autumn/Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 460690,
    originalPrice: 552828,
    link: 'https://www.shein.com/a-p-223093857.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/fc/17607037435c7777f9dc86425221b8726b80187bad_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/86/176070375581b8de7eb5fcc5cf79a9a9d63a972a1c.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 270
  },
  {
    id: '185862724',
    name: 'STONE DISTRICT Men\'s Oversized Sweater, Warm Autumn/Winter, European & American Style, Unisex, Business Casual, Streetwear, Unique Design, Loose Fit, Drop Shoulder, Simple Crew Neck Knitted Pullover',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 420210,
    originalPrice: 504252,
    link: 'https://www.shein.com/a-p-185862724.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/26/77/17588574768a8001c1ec5378622e44a2ed3cc80743_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/26/a3/1758857488b027849e55fbff93a29c8940f328bad6.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 259
  },
  {
    id: '216145548',
    name: 'Men\'s V-Neck Solid Color Thick Knitted Sweater, Autumn/Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-216145548.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/14/db/176042496129e76177ad3fbc319a307770791c6513_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/14/fd/1760424968e6b95ec03e098d625ceb7a4e30a2cc37.jpg'
    ],
    inStock: true,
    rating: 4.94,
    reviews: 118
  },
  {
    id: '241178823',
    name: 'Men\'s Casual Ribbed Knit Sweater, Round Neck, Minimalist & Fashionable For Everyday Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 312455,
    originalPrice: 374946,
    link: 'https://www.shein.com/a-p-241178823.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/02/67/17646577646a045856880e3e27bb73e01e4c35121d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/02/bf/1764657816702f8776d9214690163329153e4232c1.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 537
  },
  {
    id: '250319738',
    name: 'Manfinity EMRG Men\'s Casual Daily Pattern Crew Neck Loose Knit Sweater, Autumn/Winter Streetwear Long Sleeve Top Knit Men Sweater Graphic Knitwear Graphic Sweater Graphic Magnified Men Long Sleeve Knit Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 359605,
    originalPrice: 431526,
    link: 'https://www.shein.com/a-p-250319738.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/75/176181243896357376bd73254eda45837ac1197883_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/47/176181244904d7306ae3af7a4f51dea9c98362b283.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 39
  },
  {
    id: '192033250',
    name: 'Men\'s Solid Color Turtleneck Long Sleeve Casual Pullover Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 312455,
    originalPrice: 374946,
    link: 'https://www.shein.com/a-p-192033250.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/10/ea/17653541028121ca99f84a59b2543ec3a6f7688830_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/10/fb/1765354122553826dd82700e227ccba9db50c41c42.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '186985526',
    name: 'Men\'s Solid Color Long Sleeve Casual Zip-Up Stand Collar Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 346150,
    originalPrice: 415380,
    link: 'https://www.shein.com/a-p-186985526.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/10/61/1757489360cc712efbd9c7229eba4560b36862ad2b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/10/17/17574893682eb1ab0f08b293b2bcc7b81598578a42.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 1001
  },
  {
    id: '12490576',
    name: 'DAZY Men Ribbed Knit Solid Fall Sweater Business Attire',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 487600,
    originalPrice: 585120,
    link: 'https://www.shein.com/a-p-12490576.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2022/12/15/1671083987f9cc33c56bc4c6ce1aa26bdc87151ee0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2022/12/15/16710840102fccba07439a400f41d7b182375e1f76.jpg'
    ],
    inStock: true,
    rating: 4.94,
    reviews: 1001
  },
  {
    id: '191889726',
    name: 'DAZY Men\'s Casual Solid Color Pullover Sweater, Autumn',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 433780,
    originalPrice: 520536,
    link: 'https://www.shein.com/a-p-191889726.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/24/59/17586843357bc23aa0ceefd9196efe09f546079eda_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/24/59/1758684342f4959b803bb669071ab6bab965e65495.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '306610748',
    name: '1pc Men\'s Casual Basic Solid Color Slim Fit Crew Neck Long Sleeve Knitted Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 224940,
    originalPrice: 269928,
    link: 'https://www.shein.com/a-p-306610748.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/16/a3/1763273531b87583ac9caf19e6dc041c0f8babc491_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/16/d6/176327353501d9b8fa9b7c6b5844d2ff98f7f8032b.jpg'
    ],
    inStock: true,
    rating: '4.4',
    reviews: 144
  },
  {
    id: '282742526',
    name: 'SUMWON Ribbed Knit Cropped Sweater With Round Neckline Long Sleeves Fitted Silhouette Textured Jumper Fall Winter Layering Essential',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 333385,
    originalPrice: 400062,
    link: 'https://www.shein.com/a-p-282742526.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/13/9a/1763027152ee430c5429499f96f38b6e53cb8c617e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/13/55/176302716535c17c60b16f7a1fd3676f3e63f7f5ab.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 8
  },
  {
    id: '196440415',
    name: 'Manfinity Homme Men\'s Casual Colorblock Striped Sweater, Autumn/Winter Men Stripe T Shirt Long Sleeve Maroon And White Shirt Men Striped Long Sleeve Burgundy Men Rugby Long Sleeve For Men',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 312455,
    originalPrice: 374946,
    link: 'https://www.shein.com/a-p-196440415.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/27/f6/1758945668ed9e61b4a0e9e92be2de8ca033c47c44_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/27/9a/17589456760cf59aee96608161685d068b7743ae3a.jpg'
    ],
    inStock: true,
    rating: 4.96,
    reviews: 159
  },
  {
    id: '219144858',
    name: 'EASEVO Plus Size Men\'s Casual Cable Knit Crew Neck Long Sleeve Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 541535,
    originalPrice: 649842,
    link: 'https://www.shein.com/a-p-219144858.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/16/c6/1760579160c32aa0e0133168859bdaca52c11f05d1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/16/0a/176057917079d22a807b6e52391d32124970446dc4.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 63
  },
  {
    id: '225549524',
    name: 'DAZY Men\'s Solid Color Polo Neck Long Sleeve Casual Sweater, Autumn',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 413540,
    originalPrice: 496248,
    link: 'https://www.shein.com/a-p-225549524.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/21/28/17610292775d21c0a1f8acd526fef9e92560d94592_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/21/d0/1761029287b47199629dec3a83527664bdba4ac92a.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '188070688',
    name: 'ROMWE MEN Street Life Men\'s Casual Everyday Contrast Color Crew Neck Loose Knit Sweater, Autumn/Winter, Grunge Style',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 635835,
    originalPrice: 763002,
    link: 'https://www.shein.com/a-p-188070688.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/08/a0/175729826388a1dae8277b1e120b95aa6d1e53d947_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/08/19/1757298272ce58407b9bb63ac8438139ebb048fce5.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 1
  },
  {
    id: '212559874',
    name: 'Crew Neck Sweater For Men, Soft & Solid Color, Loose Fit, Lightweight, Versatile For Business & Casual Wear, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 305785,
    originalPrice: 366942,
    link: 'https://www.shein.com/a-p-212559874.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/02/64/1759399055d01d1a471413efebb622e6f5c514fd28_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/02/f2/1759399061c31b07159b8a97440bdbe1f8a9a482ce.jpg'
    ],
    inStock: true,
    rating: 4.57,
    reviews: 57
  },
  {
    id: '243392857',
    name: 'Manfinity Homme Men\'s V-Neck Long Sleeve Casual Sweater With Cable Pattern, Autumn/Winter Brown Sweater Men Men V Neck Brown Knitted Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 460690,
    originalPrice: 552828,
    link: 'https://www.shein.com/a-p-243392857.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/28/79/1761614763b45f10a5f07f931044f969d70c48bbd6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/28/33/176161477729175db7f28232462654c924d2dd7c65.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 214
  },
  {
    id: '44523865',
    name: 'BAI YUE Fashion Vintage Christmas Green Japanese-Style Relaxed Twisted-Knit Sweater For Men - Warm Autumn/Winter Round-Neck Knitwear Christmas, New Year Attire, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 453905,
    originalPrice: 544686,
    link: 'https://www.shein.com/a-p-44523865.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/10/19/c1/1729342952dba2e65c0ff0c7d823a0b811e2afb9c5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/09/25/4f/1727272341cc016b4c470bfa9eeae9a830c261a9bd.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 536
  },
  {
    id: '178472774',
    name: 'GRDR Men\'s Casual Long Sleeve Half-Zip Pullover Sweater, Versatile For Daily Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-178472774.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/e6/17634544890890ff11cbd8631bb4e5604db32018d7_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/08/29/2d/175646000772cef488209c47275fc1e00ebb194250.jpg'
    ],
    inStock: true,
    rating: 4.77,
    reviews: 93
  },
  {
    id: '38910758',
    name: 'Men\'s Solid Color Crew Neck Long Sleeve Casual Pullover Sweater, Versatile For Daily Wear, Autumn/Winter , Fall',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 406755,
    originalPrice: 488106,
    link: 'https://www.shein.com/a-p-38910758.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/05/87/176492403877ca6f7ecd3cd3106ff63a0ed04165e8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/05/2d/17649240502fff06d9bcdccf508668f8d174ba5747.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 977
  },
  {
    id: '45817378',
    name: 'Manfinity Mode Men\'s Solid Color Front Zipper Long Sleeve Minimalist Sweater, Casual Daily Wear, Men Knit Tops, Mock Neck Men, Men Sweater Top, Quarter Zip Sweater Men, For Fall Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 433780,
    originalPrice: 520536,
    link: 'https://www.shein.com/a-p-45817378.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/10/24/10/172976810761429c17a2737e354fe4761b7470965f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/10/24/d1/172976812422e76f5ceeba279ef283057100b3aecd.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '218785916',
    name: 'Manfinity Unisex Men\'s Loose Fit Letter Print Crew Neck Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 467360,
    originalPrice: 560832,
    link: 'https://www.shein.com/a-p-218785916.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/e5/17606644793ed1a453db656eb1575c3237c4cc54bb_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/0b/1760664494154e617aa0672226b2ea876428628ad5.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 3
  },
  {
    id: '280560889',
    name: 'Manfinity EMRG Men\'s Casual Abstract Line Pattern Crew Neck Sweater, Autumn/Winter Knit Sweater Men 90s Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 393300,
    originalPrice: 471960,
    link: 'https://www.shein.com/a-p-280560889.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/11/52/176282348506ad41fad62095b99846463b4485afa2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/11/e2/176282349647a0d1775e8dd02900740274a7b16905.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 1001
  },
  {
    id: '307557296',
    name: 'Men\'s Casual Ribbed Knit Sweater, Round Neck, Minimalist & Fashionable For Everyday Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 319240,
    originalPrice: 383088,
    link: 'https://www.shein.com/a-p-307557296.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/03/11/176476668779f52a043a62d60d1f5efca2e919a29d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/03/c9/1764766693b84bd45be5902dcd60d9b8296f692221.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 537
  },
  {
    id: '277700908',
    name: 'Men\'s Casual Loose Minimalist Commuting High-End Sense Daily Versatile Solid Color Knitted Long Sleeve Crew Neck Pullover Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 352935,
    originalPrice: 423522,
    link: 'https://www.shein.com/a-p-277700908.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/20/f3/1763610210d22f00c88902d69a445bc6f39fbcea99_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/20/0c/1763610228e5e7fd7ee0de6b1210dbd855e31508ef.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 76
  },
  {
    id: '227586572',
    name: 'Manfinity CasualCool Men\'s Coffee Brown Knitwear Cardigan Full Zip Long Sleeve Regular Fit Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 467360,
    originalPrice: 560832,
    link: 'https://www.shein.com/a-p-227586572.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/10/23/17600872169bace2489e9452831228ab4428ab2577_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/10/73/1760087225bebab99fc328a7c12c9e4517e207e3bd.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 132
  },
  {
    id: '306536378',
    name: 'Manfinity EMRG Men\'s Casual Distressed Crew Neck Long Sleeve Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 373060,
    originalPrice: 447672,
    link: 'https://www.shein.com/a-p-306536378.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/26/95/176414337840f96fc1508a5718c9863cfe7380b642_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/26/21/1764143387b6271e08b6900024b3ba15e34ac91ef8.jpg'
    ],
    inStock: true,
    rating: 4.95,
    reviews: 49
  },
  {
    id: '40299199',
    name: 'BAI YUE Fall/Winter Men\'s Fashion Contrasting Colors, Striped Crew Neck Loose-Fit Slouchy Style, Pullover Sweater, Christmas, New Year Attire, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 420210,
    originalPrice: 504252,
    link: 'https://www.shein.com/a-p-40299199.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/09/11/0f/172604262367c6a4f631eacd2d177918a7111cbb1c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/10/24/e5/1729784421dcb4df72f9d67f590cb4145df08e3907.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 34
  },
  {
    id: '179792656',
    name: 'GRDR Men\'s Regular Shoulder Long Sleeve High Neck Sweater, Versatile For Daily Wear Knitted Pullover',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-179792656.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/19/66/1763557274c053f2486d1bb6d0b75c9de9d0ae322f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/29/57/1764409825d1e285411a175b0095a99f108db1e297.png'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '223167068',
    name: 'HIMLAND Standard Size Men\'s Embroidered Cable Knit Crew Neck Casual Long Sleeve Pullover Sweater Sweater Polo Men Knit Wear Men Men Navy Blue Navy Blue Sweater Knitted Jersey',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 426995,
    originalPrice: 512394,
    link: 'https://www.shein.com/a-p-223167068.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/0a/1763704828b04519d804a3b19070c2f48222e61454_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/99/1763704832624440043f94990859dbf1bec91753bc.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 4
  },
  {
    id: '184754483',
    name: 'Men\'s Solid Color Casual Turtleneck Sweater, Versatile For Autumn/Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 319240,
    originalPrice: 383088,
    link: 'https://www.shein.com/a-p-184754483.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/08/5e/17626011433f02c43892fcebb03102335c0f94e805_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/08/1f/1762601171f419022b73275be14c9bfb9028f62b22.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '224848749',
    name: 'Manfinity Mode Men\'s Pullover Sweater, Solid Color Knitted Sweater With Thermal Lined, Autumn/Winter Quarter Zip, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 379845,
    originalPrice: 455814,
    link: 'https://www.shein.com/a-p-224848749.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/ba/1760932445a34875d3ff23325bd73f16df49dcce84_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/f1/17609324532c357d0f0c232fdea746e3ed57f24a12.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '42652687',
    name: 'Claim Dot Men\'s Cartoon Bear Embroidered Crew Neck Long Sleeve Casual Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 534750,
    originalPrice: 641700,
    link: 'https://www.shein.com/a-p-42652687.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/11/18/ce/1731893948b6fb55df887d412d33e13a59268b0871_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/11/18/90/1731893972ad6b14fcc30eb8be7f00264d7a60917f.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '215413677',
    name: 'Men\'s Casual Retro Jacquard Knit Pullover Sweater, Lightweight Crew Neck Long Sleeve Knitwear, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 379845,
    originalPrice: 455814,
    link: 'https://www.shein.com/a-p-215413677.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/16/dc/1760593945131ffe35e78336fe4b4bd97c7be5dcd5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/16/18/1760593964ce02d468c9df2b307e8487e657afd8bc.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 124
  },
  {
    id: '218872869',
    name: 'Manfinity Homme Men\'s Casual Zip-Up Half Placket Long Sleeve Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 420210,
    originalPrice: 504252,
    link: 'https://www.shein.com/a-p-218872869.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/8b/1760526577cdec5452a622591404e6022933a539b6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/95/176052658646afb1bbd320bfe38c1a0cd0ac9e29d6.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 889
  },
  {
    id: '231512313',
    name: 'Manfinity CityGents Men\'s Casual Zip-Up Half Placket Long Sleeve Sweater, Autumn/Winter Brown Sweater Men Mens Half Zip Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 406755,
    originalPrice: 488106,
    link: 'https://www.shein.com/a-p-231512313.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/24/d8/1761269565fcdb566f73163e44150b0c7ed011b571_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/24/b0/17612695834edeb3fdb5e8b7891574efdf8d5c48cf.jpg'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 8
  },
  {
    id: '207649435',
    name: 'Manfinity Homme Men\'s Solid Color Crew Neck Long Sleeve Cable Knit Pullover Sweater, For Fall Winter Brown Sweater Men Jumper For Men',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 346150,
    originalPrice: 415380,
    link: 'https://www.shein.com/a-p-207649435.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/30/175997227264bfcb1033003e331914637f5f6cc196_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/0d/17599722853a4abc6461895a67157264d4249fc3b6.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '307661711',
    name: 'Men\'s Crew Neck 7-Gauge Jacquard Knit Long Sleeve Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 278760,
    originalPrice: 334512,
    link: 'https://www.shein.com/a-p-307661711.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/20/21/1763637467e3aa88fba542ce1a4a234f67655f25ff_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/20/42/1763637483837274a33b8849237437ef43fe6756a6.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 10
  },
  {
    id: '246187636',
    name: 'Artur Kramer Men\'s Fashionable American Casual Warm Knit Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 366390,
    originalPrice: 439668,
    link: 'https://www.shein.com/a-p-246187636.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/28/f6/17616207812780ae2da108a35ee779f7a91d1ce2c6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/28/15/1761620794400af18edacfebde1fdbc73957973dde.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 1001
  },
  {
    id: '43478080',
    name: 'DAZY Men\'s Casual Solid Color Drop Shoulder Loose Knit Polo Sweater, Autumn',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 426995,
    originalPrice: 512394,
    link: 'https://www.shein.com/a-p-43478080.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/24/49/1727148611a2078346a341127edeaf1cc8cdc60a87_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/24/4b/172714863116761b67088c982c4b0767ec3a152a20.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '232457775',
    name: '1pc Men\'s Black Half-Zip Sweater, Casual Loose Fit Pullover, Fashion Streetwear Vintage Polo Shirt, Quarter-Zip, Suitable For Everyday, Commuting, Autumn/Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 420210,
    originalPrice: 504252,
    link: 'https://www.shein.com/a-p-232457775.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/18/ce/17607795981b3934575accf42782cf2354394b381b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/18/5f/1760779604e50aff03efdaaf9fc40dac8a1b0c58fa.jpg'
    ],
    inStock: true,
    rating: '4.6',
    reviews: 16
  },
  {
    id: '225261424',
    name: 'GRDR Men\'s Casual Versatile Solid Color Twist Knit Crew Neck Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 413540,
    originalPrice: 496248,
    link: 'https://www.shein.com/a-p-225261424.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/20/15/17636192133792fafc355df2e4418a6abf81cdf965_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/20/32/1763619219f077dd4de359fe5191b5dca413cf3e4f.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 10
  },
  {
    id: '197077203',
    name: 'Manfinity Hypemode Men\'s Contrast Color Pattern Crew Neck Long Sleeve Knit Sweater, Fall/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 373060,
    originalPrice: 447672,
    link: 'https://www.shein.com/a-p-197077203.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/28/e6/17590223044e6b483c556ee066f7993c2d66a5c2ab_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/28/08/17590223156384d8947ea7ce2185d760efbf0e3b2e.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 1001
  },
  {
    id: '328438766',
    name: 'Men\'s Minimalist Stylish Turtleneck Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-328438766.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/11/17/1765459286547d5c3174c654b1ee22709ae35791dc_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/11/d7/176545929476fc47b8201dfe5bc7427dba9abaeec0.jpg'
    ],
    inStock: true,
    rating: '4.6',
    reviews: 41
  },
  {
    id: '219367288',
    name: 'Men\'s Slim Fit Street Style Solid Color Long Sleeve Sweater, Casual Crew Neck Pullover, Lightweight Polyester Knit Top, Suitable For Spring, Autumn, Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 393300,
    originalPrice: 471960,
    link: 'https://www.shein.com/a-p-219367288.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/13/6c/1760324570c96d5be818169a81108be412d0cb3769_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/13/d9/1760324601f761bc3694c8b1f25a70c43f67dbdb20.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 1001
  },
  {
    id: '111170960',
    name: 'Men\'s Long Sleeve Turtleneck Pullover Knit Sweater , Fall Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 245180,
    originalPrice: 294216,
    link: 'https://www.shein.com/a-p-111170960.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/24/17/17612722135a13a98d47f74eaac943b565cc670051_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/24/90/1761272232e9db56f4d6cd133425ec5d05a82173c5.jpg'
    ],
    inStock: true,
    rating: 4.97,
    reviews: 84
  },
  {
    id: '12509293',
    name: 'ROMWE MEN Grunge Punk Men Striped Color-Block Pullover Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 359605,
    originalPrice: 431526,
    link: 'https://www.shein.com/a-p-12509293.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/07/06/1688622369f5f91e42cb7cf44390af8c7c4cbd5eae_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/07/06/1688622391a32538e4b3489972db0df2542b7dd478.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '218365446',
    name: 'Men\'s Beige Turtleneck Cable Knit Sweater, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 366390,
    originalPrice: 439668,
    link: 'https://www.shein.com/a-p-218365446.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/09/f4/1759998922223661f928c843269ee55a300eca00d1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/09/e5/1759998936c160dfb181c70b92b1ce3b014f876715.jpg'
    ],
    inStock: true,
    rating: '4.2',
    reviews: 67
  },
  {
    id: '179807105',
    name: 'GRDR Men\'s Regular Shoulder Long Sleeve High Neck Sweater, Versatile For Daily Wear Knitted Pullover',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-179807105.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/19/f3/1763557255eefff868ef54f6c137fe9efd12854935_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/08/69/176259918353d9f1693b0d3742cae5fa9604f4aeaf.png'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '190884115',
    name: 'GRDR Men\'s Regular Shoulder Long Sleeve High Neck Sweater, Versatile For Daily Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 426995,
    originalPrice: 512394,
    link: 'https://www.shein.com/a-p-190884115.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/79/17634496977870054fd6d580dd0403b07bb8c15794_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/09/23/02/1758639437ab6a31cba905d928bb5ed53e53d82dfb.png'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 1001
  },
  {
    id: '208524628',
    name: 'Men\'s Solid Color Long Sleeve Casual Versatile Turtleneck Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 319240,
    originalPrice: 383088,
    link: 'https://www.shein.com/a-p-208524628.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/04/6f/17622218937a9a63dfdac4db5b80c5e127f7fd77b9_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/04/b7/1762221915f4196d1f87d17630aa3112d8c060ac84.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '208978032',
    name: 'Men\'s Casual Loose Solid Color Pullover Sweater With English Letter, Number, David Statue Graphic Design, High Street Slouchy Style, Knitted Long Sleeve Crew Neck Sweater Top, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 453905,
    originalPrice: 544686,
    link: 'https://www.shein.com/a-p-208978032.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/17/71/1760704163ebfce1411c5c3ea5aafa0eb012ed2e90_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/17/69/1760704171e5daba1af728846f886720f305cb0b5d.jpg'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 2
  },
  {
    id: '184332063',
    name: 'Men\'s Thin Knit Sweater, Stand Collar Casual Style, Business/Commute Inner/Outer Wear, Autumn/Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 379845,
    originalPrice: 455814,
    link: 'https://www.shein.com/a-p-184332063.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/09/be/17573981515f56712f991561cc72945beb4904ed72_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/09/b6/1757398187e22f32aaaf470e88b0c4de6f8f40f50e.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 12
  },
  {
    id: '260607527',
    name: 'SWAVVY Men\'s Casual Letter Embroidered Crew Neck Long Sleeve Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 507840,
    originalPrice: 609408,
    link: 'https://www.shein.com/a-p-260607527.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/04/1b/1762222208b0d1552ca98a67edeb06c561fd281d63_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/04/b6/17622222270344feb1b4945b1479012b2855d31962.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 127
  },
  {
    id: '218839507',
    name: 'RONVEXI Men\'s Casual Zip-Up Half Placket Long Sleeve Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 433780,
    originalPrice: 520536,
    link: 'https://www.shein.com/a-p-218839507.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/12/52/176291068432129a0b58c3bdf92d25b6db03f51ce1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/12/2b/176291070239b60cc0a6836d498e6b3c5309cc76f5.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 889
  },
  {
    id: '308250477',
    name: 'Men\'s V-Neck Long Sleeve Sweater, Versatile For Daily Wear, Knitted',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 238395,
    originalPrice: 286074,
    link: 'https://www.shein.com/a-p-308250477.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/19/59/1763547402800f360cf33d636449e9898b19873c56_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/28/b3/17642985492d927152f7953bf74a09f0c108a93c3d.jpg'
    ],
    inStock: true,
    rating: '4.3',
    reviews: 31
  },
  {
    id: '250106287',
    name: 'GRDR Men\'s Regular Shoulder Long Sleeve High Neck Sweater, Versatile For Daily Wear Knitted Pullover',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-250106287.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/6e/176344322289bfa948da61c2e32cc881bb63dd0949_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/28/32/17616318178f33e75a79dec955098ad95190873146.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 16
  },
  {
    id: '207642262',
    name: 'Claim Dot Men\'s Solid Color Minimalist Crew Neck Long Sleeve Knit Sweater, Casual Everyday Wear Mens Cable Knit Sweater Turquoise Sweater Men',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 346150,
    originalPrice: 415380,
    link: 'https://www.shein.com/a-p-207642262.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/91/175997219164a7127689e8b500912cb0f6f907b5bf_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/67/17599722042767b4f83e994a4a8ef2b4e6a2bae7c6.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '208361852',
    name: 'Autumn/Winter Unisex Street Style Minimalist Long Sleeve Crew Neck Pullover Sweater With Fringe & Distressed Details, Loose & Comfortable',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 521295,
    originalPrice: 625554,
    link: 'https://www.shein.com/a-p-208361852.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/27/78/1761545895044cece114c2279776e29d0da57a4cae_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/27/b0/176154592795b35e20891ed088de9a497935b02356.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 808
  },
  {
    id: '196708041',
    name: 'DAZY Men\'s Casual Solid Color Knit Sweater, Versatile For Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 379845,
    originalPrice: 455814,
    link: 'https://www.shein.com/a-p-196708041.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/28/81/17590389584f630006fd396daa304bbfac631a547d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/28/b1/1759038967655d4e2da80d136c471e9867c710b609.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '20024443',
    name: 'Manfinity Homme Contrast Binding V Neck Casual Sweater Vest For Men, Standard Size, For Fall Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 265305,
    originalPrice: 318366,
    link: 'https://www.shein.com/a-p-20024443.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/07/21/168992416221541680134ab4cf41381c871a1fc253_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/07/21/1689924179a0f3becd468938e272a8b55d07ac6535.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '240414960',
    name: 'GRDR Men\'s Casual Jacquard Knit Crew Neck Long Sleeve Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-240414960.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/05/b6/1764932723548850c55acd81e1fcc7e6eaa3506bf5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/12/05/73/1764932771fdec2889844da7c122bf38f2e96f5c44.png'
    ],
    inStock: true,
    rating: 4.09,
    reviews: 11
  },
  {
    id: '244239258',
    name: 'Autumn/Winter New Personalized Angel Cartoon Pattern Jacquard Knit Casual Retro Versatile Long Sleeve Crew Neck Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 359605,
    originalPrice: 431526,
    link: 'https://www.shein.com/a-p-244239258.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/30/26/1761790569d24667a7134a151b5c13dc28906c42ef_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/30/25/1761790580ba31ed35e1f15905beec281e14d01112.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 80
  },
  {
    id: '145391125',
    name: 'Manfinity Homme Men\'s Casual Versatile Solid Color Distressed Knit Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 272090,
    originalPrice: 326508,
    link: 'https://www.shein.com/a-p-145391125.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/06/a0/175446366218d9c58523413193f47043acf9c1cf61_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/pi/2025/08/06/95/17544636733e698f319409b60965ab3ca6e4d3f4d9.png'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 60
  },
  {
    id: '219339986',
    name: 'Men\'s Slim Fit Streetwear Solid Color Long Sleeve Sweater, Casual Crew Neck Lightweight Pullover Knitted Top, Suitable For Spring, Autumn, Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 400085,
    originalPrice: 480102,
    link: 'https://www.shein.com/a-p-219339986.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/13/45/17603242332a021b416e61c064011f50bcf0b98861_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/10/18/89/1760769664fb651291b99553800a0055613a73ef1a.png'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 1001
  },
  {
    id: '195915253',
    name: 'Manfinity Mode Men\'s Solid Color V-Neck Drop Shoulder Long Sleeve Cable Knit Pullover Sweater, Fall/Winter Grey Sweater Men',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 453905,
    originalPrice: 544686,
    link: 'https://www.shein.com/a-p-195915253.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/26/31/1758877660f59a4827bdb81345d679183a8938f3eb_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/pi/2025/09/26/1f/1758877670b9d691a166185f76b352f84ff5deb100.png'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 214
  },
  {
    id: '206089340',
    name: 'Manchic Men\'s Fashion Texture Sense Solid Color Simple Regular Knit Sweater, Streetwear,Christmas, New Year, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 426995,
    originalPrice: 512394,
    link: 'https://www.shein.com/a-p-206089340.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/30/b0/17591676085b8de6a6b2f518527010166ecb996a3b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/09/30/af/175916768596689e738454656f3dbec4a12bde6174.png'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 214
  },
  {
    id: '306611672',
    name: 'Men\'s Half-Zip Stand Collar Sweater, Business/Commute Wrinkle-Resistant Warm Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 285545,
    originalPrice: 342654,
    link: 'https://www.shein.com/a-p-306611672.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/30/7f/176448570274c11abb8009c1f3585d3151e1ca0a97_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/30/30/176448573047795eae53893263897997eb78b34c17.jpg'
    ],
    inStock: true,
    rating: '4.4',
    reviews: 93
  },
  {
    id: '179807292',
    name: 'GRDR Men\'s Regular Shoulder Long Sleeve High Neck Sweater, Versatile For Daily Wear Knitted Pullover',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-179807292.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/29/6a/1764409182906a8e4c4f165b1c30322dcbfc3dc4c7_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/07/78/1765075518f9d5094d69d66a0921843231fd954cf0.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '46883716',
    name: 'Manfinity Homme Men\'s Blend Knitted Round Neck Long Sleeve Loose Casual Cable Knit Color Block Sweater, Autumn/Winter, For Going Out, Husband',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 453905,
    originalPrice: 544686,
    link: 'https://www.shein.com/a-p-46883716.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/11/06/6e/173088992051ec5670a2c86ea714aa0f6e253bbdb9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/11/06/9e/1730889942ad69f17fe9392c3c824f663c23ff4549.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 196
  },
  {
    id: '208992997',
    name: 'Men\'s Solid Color Long Sleeve Casual Versatile Turtleneck Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 325910,
    originalPrice: 391092,
    link: 'https://www.shein.com/a-p-208992997.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/05/e1/1759651910e9cf45f56578fef3793d16eee518d03b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/21/2e/17610251870f907c834eaa895116aa192e585156e1.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '210282705',
    name: 'Men\'s Casual Solid Color Long Sleeve Knitted Polo Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 420210,
    originalPrice: 504252,
    link: 'https://www.shein.com/a-p-210282705.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/10/95/1760093731afed04b3e5ba70d02854d06cc6e5d29a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/10/f2/17600937388a27bb2fb76c3afe39ed5eb39f232b2d.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 118
  },
  {
    id: '177421189',
    name: 'Manfinity Homme 2pcs Set Men\'s Casual Solid Color Long Sleeve Sweater Mens Sweaters Mens Knitwear Mock Neck Men Mens Fall Collection Mens Mock Neck Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 817650,
    originalPrice: 981180,
    link: 'https://www.shein.com/a-p-177421189.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/08/ab/17573370576be90bc3fdc921967d7c9c685bdc0322_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/29/16/17275720896f2c718b7aa056067d1a7a12a122ed1f.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '250647589',
    name: 'SWAVVY Men\'s Casual Slogan Embroidered Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 494385,
    originalPrice: 593262,
    link: 'https://www.shein.com/a-p-250647589.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/12/1a/17629424056356e235e40e844e55e53f180bdfaf6c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/12/db/176294241511b30d80cad874760da70a4aa18fe98c.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 127
  },
  {
    id: '219171550',
    name: 'Men\'s Casual Loose Fit Solid Color Pullover Sweater, Streetwear American Style, Round Neck, Long Sleeve, Versatile, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 346150,
    originalPrice: 415380,
    link: 'https://www.shein.com/a-p-219171550.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/13/6d/176033409533ac0ecc8a2740676d5dffd9dcb6b08f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/13/a2/17603341151cb2119d0dd1dd1a3aad990ab64a0d19.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 255
  },
  {
    id: '46396795',
    name: 'Claim Dot Men\'s Solid Color Stand Collar Casual Versatile Long Sleeve Pullover Sweater, Fall/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 440450,
    originalPrice: 528540,
    link: 'https://www.shein.com/a-p-46396795.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/10/31/47/1730367649a8b1ed9d9863b479289ddf668b910c4e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/10/31/29/17303676711cf9413b57540b9d1d044789bab49f63.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '182203832',
    name: 'Claim Dot Plus Size Men\'s Letter Graphic Crew Neck Casual Long Sleeve Pullover Sweater, For Fall Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 426995,
    originalPrice: 512394,
    link: 'https://www.shein.com/a-p-182203832.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/15/88/1757899480d4896c98330c79b68d5893365572ba11_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/15/f0/17578994929f3827db210a42a3526eeee498932289.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 466
  },
  {
    id: '227143649',
    name: 'Men\'s Solid Color Casual Thin Turtleneck Long Sleeve Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 312455,
    originalPrice: 374946,
    link: 'https://www.shein.com/a-p-227143649.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/10/d9/17627633978af9179596dd176ad69d233c240ac9f8_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/p/abc/2025/11/10/18/17627635384ac1c0fbed7d377916cd558bac196a9e.png'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 671
  },
  {
    id: '233867159',
    name: 'Claim Dot Men\'s Solid Color Minimalist Casual Zip-Up Long Sleeve Sweater Men Sweater Top Men Ribbed Grey Sweater Knit Tops Jumper For Men Suitable For Parties, Offices, Homes, Commutes, And Outdoor Activities Men Ribbed Sweater Men Grey Sweater, For Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 460690,
    originalPrice: 552828,
    link: 'https://www.shein.com/a-p-233867159.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/23/db/1761201084e1d7d2f6b4dcf8c0e1849f7190018082_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/23/fb/176120109137fb442d64c221bd2366662d78ccc199.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '203636267',
    name: 'Manfinity Mode Men\'s Casual Solid Color Turtleneck Long Sleeve Sweater, Fall/Winter Black Turtleneck Men Men Turtleneck Shirts',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 305785,
    originalPrice: 366942,
    link: 'https://www.shein.com/a-p-203636267.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/03/51/17594721244e09b85d77f199b6b60b47e3f5d4d7b4_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/03/85/175947213428a6bd2b74dfd71dfa768b123e81e5ba.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '186954839',
    name: 'Men\'s Casual Long Sleeve All-Match Zip-Up Cardigan, Solid Color Knitted Sweater For Everyday Wear, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 379845,
    originalPrice: 455814,
    link: 'https://www.shein.com/a-p-186954839.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/15/7c/1757915404704d56bfddec59d40c5824e958776708_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/30/08/176181478977994b99cc4af3080dbf47a954e60d2b.jpg'
    ],
    inStock: true,
    rating: '5.0',
    reviews: 52
  },
  {
    id: '155239249',
    name: 'GRDR Autumn/Winter New High Neck Pullover Sweater, Casual Thin Knit Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 373060,
    originalPrice: 447672,
    link: 'https://www.shein.com/a-p-155239249.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/0e/1763449432462feb27fb3172a7b9de7e1119047bd5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/18/91/17634495701fb6c3a6fd6058ba7a894ed8872326aa.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 533
  },
  {
    id: '212600455',
    name: 'Autumn/Winter New Knitted Casual Loose Pullover Sweater, Simple Style Beaded Texture, Commuting Business Turndown Collar Zipper Long Sleeve Oversized Unisex Knitwear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 433780,
    originalPrice: 520536,
    link: 'https://www.shein.com/a-p-212600455.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/08/cc/1759906547ba87fc04422e363098e4da0adc9b1854_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/08/76/175990660349a2f673d157117c2fa0fd4cd55f6f7d.jpg'
    ],
    inStock: true,
    rating: 4,
    reviews: 2
  },
  {
    id: '193570952',
    name: 'BAI YUE Men\'s Autumn/Winter Retro Old Money Style Knitted Sweater, Loose Round Neck Textured Pullover,Christmas, New Year, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 379845,
    originalPrice: 455814,
    link: 'https://www.shein.com/a-p-193570952.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/14/6c/175778172025ba9aeddc93d8aeb8644f3b533925fe_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/14/22/1757781728202c1bc985f45bbb3508fd9a34d32731.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 409
  },
  {
    id: '227791165',
    name: 'GRDR Men\'s Solid Color 7-Gauge Jacquard Knit Sweater, Basic Warm Thick Pullover For Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 292330,
    originalPrice: 350796,
    link: 'https://www.shein.com/a-p-227791165.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/18/ef/17634567648ed984d62eaf2c4e39a78fa6db1610b6_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/p/abc/2025/11/18/89/176345677741ecd258444c85f39790abc8dd1534fa.png'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 103
  },
  {
    id: '195907900',
    name: 'Manfinity Homme Men\'s Solid Color Minimalist V-Neck Long Sleeve Knit Sweater, Casual Everyday Wear, Fall/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 433780,
    originalPrice: 520536,
    link: 'https://www.shein.com/a-p-195907900.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/26/f8/1758877663de8dc139b70828eca493b9c9e2f158dd_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/pi/2025/09/26/e1/17588776769ba7ac5c9436be001eda6668063f9e8e.png'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 214
  },
  {
    id: '298233030',
    name: 'SUMWON Crop Fit Ribbed Knit Textured Crew Neck Pullover Sweater For Winter Fall Casual Everyday Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 350060,
    originalPrice: 420072,
    link: 'https://www.shein.com/a-p-298233030.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/e9/1763732464dd24ce4944ff0fbc8ba3e0fd5adf8ae8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/1a/17637324764aa2fe5c6449651c99b6529c93973672.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 8
  },
  {
    id: '303687117',
    name: 'DAZY Men\'s Loose Fit Multi-Color Contrast Crew Neck Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 400085,
    originalPrice: 480102,
    link: 'https://www.shein.com/a-p-303687117.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/25/e2/17640360452113e3af952f2861a5044875ecc9c39b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/25/41/1764036059696c35e11b238aaac85ad2704701c7c1.jpg'
    ],
    inStock: true,
    rating: '4.7',
    reviews: 44
  },
  {
    id: '41447079',
    name: 'Manfinity Homme Men\'s Solid Color Plain Crew Neck Long Sleeve Simple Pullover Sweater, Casual Everyday Wear, For Couple, Work, For Fall Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 406755,
    originalPrice: 488106,
    link: 'https://www.shein.com/a-p-41447079.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/24/63/172717648569d6928b875a4c7f0229be5bb9e0847e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/24/9d/172717650439a026e7fdac076f700675c4fff93a48.jpg'
    ],
    inStock: true,
    rating: 4.97,
    reviews: 382
  },
  {
    id: '246173604',
    name: 'Artur Kramer Men\'s Solid Color Round Neck Long Sleeve Sweater For Daily Wear, Emo, For Fall Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 420210,
    originalPrice: 504252,
    link: 'https://www.shein.com/a-p-246173604.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/28/37/17616207763762fb671853760eff5d7135d87fd5af_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/28/7d/1761620787b759f7a60183a35a0e9057596d5a4292.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '215603242',
    name: 'ROMWE MEN Goth Men\'s Punk Distressed Apocalyptic Print Knit Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 480815,
    originalPrice: 576978,
    link: 'https://www.shein.com/a-p-215603242.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/38/1760496351bba25a0151f8bf36b1e0a93608ff554c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/d8/176049636698eeee06bcf2b15a0f88064f9d280016.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 278
  },
  {
    id: '249978959',
    name: 'New Men\'s Plain Color Simple And Versatile Sweater Warm And Comfortable Round Neck Everyday Sweater For Autumn And Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 561775,
    originalPrice: 674130,
    link: 'https://www.shein.com/a-p-249978959.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/28/62/1761633719e2fad1b7c7d8b64e89171b54c92e06a7_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/28/ce/1761633742e46fd5bf961ec711a60ce2c7e2d7cb63.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 42
  },
  {
    id: '246170449',
    name: 'Artur Kramer Men High Neck Oversized Plain Knit Pullover Sweater, Casual Style, Fall/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 460690,
    originalPrice: 552828,
    link: 'https://www.shein.com/a-p-246170449.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/31/ce/1761895729e774fda0305181e0f6e4b8c042ee074d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/31/36/17618957403c1661c2f59b258201147524facad3ef.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 169
  },
  {
    id: '44307036',
    name: 'Autumn/Winter Unisex Street Style Minimalist Long Sleeve Crew Neck Pullover Sweater With Fringe & Distressed Details, Loose & Comfortable',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 554990,
    originalPrice: 665988,
    link: 'https://www.shein.com/a-p-44307036.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/03/ea/176213704673ec73ac1f11777cda18c695ad8d99a4_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/03/07/1762137107eb18748fb1a287ea83c753742174a691.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 808
  },
  {
    id: '316245878',
    name: 'GRDR Men\'s Casual Versatile Solid Color Twist Knit Turtleneck Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-316245878.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/28/f5/1764302266e26ae19906df3dff5561e84d5abc98f6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/27/62/1764236788c3498bf5b5a63f933899a686bbb5d6e0.jpg'
    ],
    inStock: true,
    rating: 4.61,
    reviews: 18
  },
  {
    id: '27559160',
    name: 'Manfinity Homme Men\'s Color Block Round Neck Long Sleeve Sweater, For Fall Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 373060,
    originalPrice: 447672,
    link: 'https://www.shein.com/a-p-27559160.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/12/13/c6/17024309728439f628c73bdfc6632c56e3b95182cb_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/12/13/ce/170243098431f8f994e204a4d8a70488bebd49e4d7.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '217262387',
    name: 'Manfinity CasualKnits Men\'s Casual Commuting Ombre Striped Pattern Dropped Shoulder Loose Knit Sweater, Suitable For Autumn/Winter And Christmas Red Striped Sweater Streetwear Men 90s Fashion, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-217262387.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/2f/1760630492bf80aef8fe7d954447be9cd3b0c67100_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/09/1760630502da55ac3f70d60911499146dc19e9d6ca.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 119
  },
  {
    id: '265501321',
    name: 'Men\'s Solid Color Crew Neck Long Sleeve Casual Pullover Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 224940,
    originalPrice: 269928,
    link: 'https://www.shein.com/a-p-265501321.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/01/d4/17619849608c2c555e4583d7fd0f3233e8e25a0c42_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/01/2f/1761987245e890204c9efb9c388690296260fd1553.png'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 403
  },
  {
    id: '215409742',
    name: 'Sweaters For Men Old Money Men Turtle Neck Men, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 501055,
    originalPrice: 601266,
    link: 'https://www.shein.com/a-p-215409742.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/09/6a/1759997762d0386021cf185f5e914069f15d80e4ee_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/09/ef/175999777889f274fce40a5da3a2e860105af6791c.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 105
  },
  {
    id: '281946755',
    name: 'Manfinity Homme Men\'s Casual Distressed Crew Neck Knit Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 278760,
    originalPrice: 334512,
    link: 'https://www.shein.com/a-p-281946755.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/08/cc/176259939872958206771ac26872986903aa8b8f95_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/08/26/17625994128ceaca5b22f491aab767b9f4616c8c7e.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 60
  },
  {
    id: '187197239',
    name: 'BAI YUE Fashion Lethargic Style Thick Twisted Button Rope Drop Shoulder Round Neck Sweater Men\'s Sweater, Suitable For Commuting, New Fall And Winter, Christmas, New Year, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 426995,
    originalPrice: 512394,
    link: 'https://www.shein.com/a-p-187197239.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/14/3d/17577810144ba6907e1525961e0afc020bf25d31c3_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/09/14/bb/1757780979f4678e8c73ba723bb23fe120a7baa161.png'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 141
  },
  {
    id: '179806521',
    name: 'GRDR Men\'s Regular Shoulder Long Sleeve High Neck Sweater, Versatile For Daily Wear Knitted Pullover',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-179806521.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/19/c0/176355729365bd2313f06d33903780597f913284bc_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/02/f1/1762091774e727be334ea755f3e2081f0bf029aee9.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '44636956',
    name: 'Calvornis Men\'s Casual Long Sleeve Fleece Lined Pullover Sweater, Solid Color Plain Knit Warm Thermal Lined Sweater, Autumn/Winter, For Going Out, Friends',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 373060,
    originalPrice: 447672,
    link: 'https://www.shein.com/a-p-44636956.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/10/12/c5/1728702386fc62c71c701bd73dbdadceafdb7f2d8b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/10/12/9c/1728702402b1ce97bf598765baaeb120de48c6d880.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '186773465',
    name: 'Men\'s Casual Loose Solid Color Cross & Abstract Pattern Vintage Street Style Knit Long Sleeve Pullover Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 460690,
    originalPrice: 552828,
    link: 'https://www.shein.com/a-p-186773465.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/09/9a/17599996410206a030013414456a6dcb7d4ddae120_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/09/12/1759999682d2e68cde0337a280790c4dc2b042523b.jpg'
    ],
    inStock: true,
    rating: '4.5',
    reviews: 54
  },
  {
    id: '185094215',
    name: 'SUMWON Crop Fit Ribbed Knit Classic Crew Neck Jumper Textured Sweater With Balloon Sleeves Winter Pullover Casual Everyday Wear Long Sleeve Knitwear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 434125,
    originalPrice: 520950,
    link: 'https://www.shein.com/a-p-185094215.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/18/c8/1758162029c4e09f81c7e5a78315558953b271d70d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/18/d0/1758162042d7d108e3b3b244a70ea38ad7f02cc68e.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 8
  },
  {
    id: '217549698',
    name: 'Manfinity Homme Men\'s Casual Loose Fit Cable Knit Crew Neck Long Sleeve Sweater, Autumn/Winter Suitable For Parties, Offices, Homes, Commutes, And Outdoor Activities',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 379845,
    originalPrice: 455814,
    link: 'https://www.shein.com/a-p-217549698.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/df/17605060183fb6aa3d56789e5cda7774b2263b6ffa_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/d8/17605060273d83df8e4a89b17f66b92b9bc1739321.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 2
  },
  {
    id: '249310513',
    name: 'Manfinity Homme Men\'s Simple Casual Solid Color Cable V-Neck Knit Sweater, Autumn/Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 433780,
    originalPrice: 520536,
    link: 'https://www.shein.com/a-p-249310513.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/62/17617881182773974d3ce2ddbde556813e36de4ea1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/pi/2025/10/30/df/17617881286c2214b8b2d6e2ca7bc86275d6fcd8bf.png'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 214
  },
  {
    id: '194858339',
    name: 'Men\'s Casual Loose Pullover Sweater With English Embroidery, Versatile Round Neck Knitted Long Sleeve Top, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 400085,
    originalPrice: 480102,
    link: 'https://www.shein.com/a-p-194858339.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/19/8c/17582731868fc22ef2d06fa6b0e94387ee0de7d6e2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/19/f8/1758273323cc599a25fd944438d9c54f25e8db8e19.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 20
  },
  {
    id: '262851458',
    name: 'Men\'s Blue Striped Chenille Knitted Sweater, Thermal Lined, Thick For Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 379845,
    originalPrice: 455814,
    link: 'https://www.shein.com/a-p-262851458.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/03/76/1762174639d537ff3e1aed848eb68655cc0192ffe8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/03/8c/1762174656909210683efcf064eac256ef6db1e2cb.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 366
  },
  {
    id: '278611644',
    name: 'Unisex Fluffy Round Neck Sweater, Korean Style Casual Loose Fit Knitted Pullover Top, Suitable For Autumn, Winter, Back To School',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 413540,
    originalPrice: 496248,
    link: 'https://www.shein.com/a-p-278611644.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/20/d4/1763626847bd27b5d256929989a7feaebcc1ee6755_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/20/79/1763626852cb58d87ba043d0c6a47d57e795964e76.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 25
  },
  {
    id: '190996614',
    name: 'Men\'s Slim Fit Streetwear Solid Color Long Sleeve Sweater, Casual Crew Neck Lightweight Pullover Knitted Top, Suitable For Spring, Autumn, Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 359605,
    originalPrice: 431526,
    link: 'https://www.shein.com/a-p-190996614.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/15/18/175791609930436299494777612291115801bacb25_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/15/98/17579162013dcad890f082771b49798636d5291fa2.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 1001
  },
  {
    id: '46013788',
    name: 'Manfinity Homme Men\'s Plain Casual Pullover Long Sleeve Half Zip Sweater, For Fall Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 413540,
    originalPrice: 496248,
    link: 'https://www.shein.com/a-p-46013788.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/10/26/c6/1729936019ce938b5f55a6526731fe2445fd13b1c1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/10/26/42/17299360317f4920d316a2c658b24d55dd766e57c9.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '316242715',
    name: 'Men\'s Casual Versatile Solid Color Twist Knit Crew Neck Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 426995,
    originalPrice: 512394,
    link: 'https://www.shein.com/a-p-316242715.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/21/f5/17637015507adfa48c9988cfb2a9102d8ef7cd908c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/21/42/176370295020c58c0773f295ddfa3a70497cc1cdcf.png'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 96
  },
  {
    id: '50958945',
    name: 'Manfinity Homme Men\'s Solid Color Turndown Collar Long Sleeve Minimalist Sweater, Casual Daily Wear, Fall',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-50958945.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/12/20/41/1734658642d54f1ec95901e69c6e34403587530f51_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/12/20/87/1734658666827657b06cebb4cc4efc73b58d259cac.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 203
  },
  {
    id: '241179113',
    name: 'Lightweight Casual Textured Knit Oversized Unisex Sweater, Minimalist Design, Loose Fit Crew Neck Pullover, Suitable For Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 339480,
    originalPrice: 407376,
    link: 'https://www.shein.com/a-p-241179113.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/23/ec/17611847032ddc290d1e4125c7d2bffe9810aed00d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/20/46/1760967774ca5999891d7507b154d6105f683ceb12.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 471
  },
  {
    id: '27559157',
    name: 'Manfinity Homme Men\'s Gradient Raglan Sleeves Sweater, Fall/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 366390,
    originalPrice: 439668,
    link: 'https://www.shein.com/a-p-27559157.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/07/36/176250737521335f63451f66fea209426a9ae4504e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/07/ad/1762507383890f7f308b3869efd44be413162c83e7.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '49703622',
    name: 'ROMWE MEN Goth Men\'s KPOP Apocalyptic Distressed Print Pullover Knit Sweater, For Fall Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 480815,
    originalPrice: 576978,
    link: 'https://www.shein.com/a-p-49703622.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/12/06/1e/1733450020af4dee60939cfdc8a12d9c0b7ed0e476_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/12/06/97/17334500423b8012895b3d2e2bd4ef0691e3d002b5.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 278
  },
  {
    id: '246557522',
    name: 'Men\'s Casual Loose Fit Striped Textured Sweater, European And American Street Style Design, Minimalist Round Neck Drop Shoulder Long Sleeve Pullover Knit Top, Suitable For Autumn And Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 332695,
    originalPrice: 399234,
    link: 'https://www.shein.com/a-p-246557522.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/08/01/36/175403390293e0c4585d5a1c747fd36dcfc3ed568a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/08/30/d6/175654422648c29798f6b06e07de25685440a175d4.jpg'
    ],
    inStock: true,
    rating: '4.4',
    reviews: 124
  },
  {
    id: '223018398',
    name: 'Men\'s Casual Ribbed Knit Sweater, Minimalist Turtleneck Style, Suitable For Everyday Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 346150,
    originalPrice: 415380,
    link: 'https://www.shein.com/a-p-223018398.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/6b/176345305282a5db7fe4a328bd0cae33d4d7435939_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/17/4b/176070307547edac85738ef532d3d2402407f7a165.jpg'
    ],
    inStock: true,
    rating: 4.95,
    reviews: 72
  },
  {
    id: '265391129',
    name: 'Men\'s Solid Color Crew Neck Long Sleeve Casual Pullover Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 218155,
    originalPrice: 261786,
    link: 'https://www.shein.com/a-p-265391129.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/01/4f/17619850688e284e36fcdb7989391501a9ee6b2cb9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/01/18/1761987337a6339fbcd1663215d5466c31e8055256.png'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 403
  },
  {
    id: '216084114',
    name: '1pc Men\'s Casual Sports Comfortable Thermal Lined Turtleneck Sweater, Slim Fit, Suitable For Home And Outdoor Activities, Can Be Gifted To Couples, 100% Polyester Material, Available In Multiple Colors, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 352935,
    originalPrice: 423522,
    link: 'https://www.shein.com/a-p-216084114.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/27/a7/1764237551dedaaac3eb1a386f5f19320b98eec77f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/27/47/1764237563f67b000b1743449cfb3e5d7672ec2328.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 64
  },
  {
    id: '295046424',
    name: 'Men\'s Casual Long Sleeve Half-Zip Pullover Sweater, Versatile For Daily Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 285545,
    originalPrice: 342654,
    link: 'https://www.shein.com/a-p-295046424.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/22/fb/1766380984661b52be1841d57f56ce1d1fff73aed7_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/27/2b/1764245058319665da2b95aaac1078185357fc38f9.jpg'
    ],
    inStock: true,
    rating: '4.5',
    reviews: 69
  },
  {
    id: '209000457',
    name: 'GRDR Men\'s Casual Long Sleeve Half-Zip Pullover Sweater, Versatile For Daily Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-209000457.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/dc/17634546386c21fdce717e79c8b57da74222b72025_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/08/9f/175989492191b755b7016f8ecf2e9182be2f8f5e38.jpg'
    ],
    inStock: true,
    rating: 4.77,
    reviews: 93
  },
  {
    id: '189803163',
    name: 'SWAVVY Men\'s Casual Cable Pattern Round Neck Drop Shoulder Long Sleeve Cotton Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 480815,
    originalPrice: 576978,
    link: 'https://www.shein.com/a-p-189803163.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/20/b6/175833210936b415169ab45ccb03e996a220f1a4a2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/20/47/175833211845c1365a339db57e9187e663b8d9e3ac.jpg'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 4
  },
  {
    id: '187204230',
    name: 'BAI YUE Fashion Lethargic Style Thick Twisted Button Rope Drop Shoulder Round Neck Sweater Men\'s Sweater, Suitable For Commuting, New Fall And Winter, Christmas, New Year, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 440450,
    originalPrice: 528540,
    link: 'https://www.shein.com/a-p-187204230.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/14/d8/1757780907f78b197c45e07f10bfcdca003111d139_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/14/3d/1757780913f30b2950adee4bcfe61e8eb3eca726dd.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 141
  },
  {
    id: '222760026',
    name: 'GRDR Men\'s Casual Jacquard Knit Crew Neck Long Sleeve Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-222760026.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/26/70/1764129418aa6fb629e18a9deb11389b479d44bed5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/15/3b/1760505951eb6275de7f95cc7a9d7fbc223190959b.jpg'
    ],
    inStock: true,
    rating: 4.77,
    reviews: 187
  },
  {
    id: '306764841',
    name: 'Long Sleeve Striped Airplane Collar Knit Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 251850,
    originalPrice: 302220,
    link: 'https://www.shein.com/a-p-306764841.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/spmp/2025/12/04/10/1764834338a5766ff898dfa2eef65c94899f859d15_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/p/abc/2025/12/04/8d/176483435077b46cf305faefa5e3452867788eed91.png'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 73
  },
  {
    id: '282066904',
    name: 'ROMWE MEN Street Life Men\'s Preppy Retro Collared Football Inspired Knit Sweater, Streetwear Style',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 541535,
    originalPrice: 649842,
    link: 'https://www.shein.com/a-p-282066904.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/13/da/1763011403e5f955b441494d87f3f1e367c4ea868d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/13/0b/176301141586ccf6488c8d000b9b79ac07aa640747.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 129
  },
  {
    id: '225418279',
    name: '3pcs Men\'s Casual Comfortable Thermal Lined Turtleneck Sweaters, Slim Fit, Suitable For Indoor And Outdoor Activities, Can Be Gifted To Couples, 100% Polyester, Multiple Colors Available',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 763715,
    originalPrice: 916458,
    link: 'https://www.shein.com/a-p-225418279.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/spmp/2025/10/13/47/176035747316ca0ac2b43d9355e6363be56e0d4318_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/14/5e/1763124560e58655d2a66d6f837e6e391a0aebb373.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 6
  },
  {
    id: '216551450',
    name: 'RONVEXI Men\'s Casual Solid Color Cable Knit Sweater, Autumn/Winter Jumper, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 474145,
    originalPrice: 568974,
    link: 'https://www.shein.com/a-p-216551450.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/97/1760527298db7d3d9342fa2d70f5a77ba8d64b2358_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/fe/17605273134bd293c3a86376036e2236c995d99f14.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 5
  },
  {
    id: '316258557',
    name: 'GRDR Men\'s Casual Long Sleeve Half-Zip Pullover Sweater, Versatile For Daily Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-316258557.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/29/01/17644077201055dde32f89df6d1b0e4955ce999440_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/29/5f/176440774681ea971c614c0a544c508e2d7b8bce11.jpg'
    ],
    inStock: true,
    rating: 4.64,
    reviews: 162
  },
  {
    id: '279827720',
    name: 'Manfinity Homme Men\'s Casual Solid Color Half-Zip Pullover Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 319240,
    originalPrice: 383088,
    link: 'https://www.shein.com/a-p-279827720.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/08/6d/1762604071f8465d2171a99609cae8606aea788fa1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/08/79/176260408396b85483cb7d4e4224c39177b5bb9a36.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '231737760',
    name: 'Manfinity EMRG Men\'s Casual Distressed Letter Pattern Sweater, Autumn/Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 467360,
    originalPrice: 560832,
    link: 'https://www.shein.com/a-p-231737760.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/1d/1760947463e48c177a3a799bb5d8b5a6ac02baf375_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/a4/1760947475cfcda058cfffac303f1a338bf1697fd2.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 270
  },
  {
    id: '282318332',
    name: 'ROMWE MEN Street Life Men\'s Casual Marble Pattern Crew Neck Long Sleeve Cashmere Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 480815,
    originalPrice: 576978,
    link: 'https://www.shein.com/a-p-282318332.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/12/75/17629152327a5268c948e5b529aa631f9264dc659a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/12/e9/17629152422192b7a52570e56220cb37e1679d1ddd.jpg'
    ],
    inStock: true,
    rating: 4.95,
    reviews: 42
  },
  {
    id: '239447557',
    name: 'Lightweight Casual Textured Knit Oversized Unisex Sweater, Minimalist Design, Loose Fit Crew Neck Pullover, Suitable For Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 332695,
    originalPrice: 399234,
    link: 'https://www.shein.com/a-p-239447557.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/23/95/17611848607c0c334bf8f01cbe89151739974377be_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/23/51/1761184890e56d7386ed4c0a9a348567b171614550.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 471
  },
  {
    id: '196771043',
    name: 'Autumn/Winter New Men\'s Unisex Niche Design American Minimalist Striped Streetwear Casual Versatile Pullover Knit Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 346150,
    originalPrice: 415380,
    link: 'https://www.shein.com/a-p-196771043.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/10/c2/175213675632ce877a4c1996b915c558adf1490a75_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/07/10/76/17521367618257c6a046bd1e11afbbd3ec17ca9dd8.jpg'
    ],
    inStock: true,
    rating: '4.3',
    reviews: 131
  },
  {
    id: '189956170',
    name: 'Men\'s Casual Slim Fit Solid Color Ribbed Vintage Versatile Commuting Polo Collar Zip-Up Long Sleeve Knit Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 426995,
    originalPrice: 512394,
    link: 'https://www.shein.com/a-p-189956170.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/08/aa/17598901010f42c1dd964f1e9ef513c660819ad37e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/08/63/175989015978c49d19bd3a65cc839122fe3b9f48c5.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 7
  },
  {
    id: '282314779',
    name: 'Manfinity Joysei Men Graphic Pattern Drop Shoulder Sweater, For Fall Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 393300,
    originalPrice: 471960,
    link: 'https://www.shein.com/a-p-282314779.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/e2/176369140199920d5ba1f2f99b6614cd696bb417d8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/83/17636914176aac389a0164d7b9bca256ed2c863f62.jpg'
    ],
    inStock: true,
    rating: 4.99,
    reviews: 1001
  },
  {
    id: '242916925',
    name: 'Men\'s Casual Loose Fit Solid Color Pullover Sweater, Streetwear American Style, Round Neck, Long Sleeve, Versatile, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 352935,
    originalPrice: 423522,
    link: 'https://www.shein.com/a-p-242916925.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/22/dc/176112708159ad8147b893d9e3e49f22af0bb15a8c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/22/fa/1761127168303b4616822a7a7b3da2ce27c3c866ca.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 255
  },
  {
    id: '40306001',
    name: 'Manfinity Mode Men\'s Solid Color Plain Zippered Front Long Sleeve Simple Knit Sweater, Casual Urban Everyday Wear, For Boyfriend Gift, Men Knit Tops, Mock Neck Men, Men Sweater Top, Man Sweater, For Fall Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 420210,
    originalPrice: 504252,
    link: 'https://www.shein.com/a-p-40306001.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/08/21/9f/1724217102da972ac44a25bbde57c46f432ff93d9b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/08/21/e1/1724217125e60698b7fb0c0406acd7ebd8fc6aeef2.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '316409961',
    name: 'Men\'s Fashionable Versatile Jacquard Knit Crew Neck Long Sleeve Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 332695,
    originalPrice: 399234,
    link: 'https://www.shein.com/a-p-316409961.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/20/97/17636379772294368a4df58437ab2a08aa31309fc7_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/09/a1/17652484567f3c78dc3113ffb6e658f681da5a1f57.jpg'
    ],
    inStock: true,
    rating: '4.4',
    reviews: 46
  },
  {
    id: '308173129',
    name: 'SWAVVY Men\'s Letter Graphic Casual Knit Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 460690,
    originalPrice: 552828,
    link: 'https://www.shein.com/a-p-308173129.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/27/1e/17642344172ea2c93e016a2c6949c7333c752cff1c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/27/b3/17642344396e7a61a5c0a436ec08d5a9f119163e8d.jpg'
    ],
    inStock: true,
    rating: 4.72,
    reviews: 33
  },
  {
    id: '245943849',
    name: 'Navy Blue Crew Neck Drawstring Jacquard Casual College Style Pullover Sweater For Men, Spring/Autumn/Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 379845,
    originalPrice: 455814,
    link: 'https://www.shein.com/a-p-245943849.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/25/c5/1761398556994a98a4c16417a61439fce585504496_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/25/46/1761398692f5d8e8f4cf51c0023e10636c1d63fa9c.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 758
  },
  {
    id: '246310893',
    name: 'Manfinity Homme Men\'s Casual Solid Color Knit Sweater, Autumn/Winter Brown Cable Knit Sweater Brown Sweater Brown Knit Sweater, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 420210,
    originalPrice: 504252,
    link: 'https://www.shein.com/a-p-246310893.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/29/63/176170002927fedd4000c312577a9c54000447a394_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/29/13/17617000372df3873523a9ee544df7a136b7c2327b.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '279061583',
    name: 'Men\'s Knitted Sweater With Twisted Lapel And Warm Loose Design',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 346150,
    originalPrice: 415380,
    link: 'https://www.shein.com/a-p-279061583.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/05/9d/1762326121a7fdcc09f57626776da6c9d575832e0b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/05/b8/1762326167e6f99c1e2845cab7ee1e3b452be2c427.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 906
  },
  {
    id: '28770249',
    name: 'Men\'s Street Fashion Letter Embroidery Distressed Ripped Versatile Sweater, Suitable For Autumn And Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 642505,
    originalPrice: 771006,
    link: 'https://www.shein.com/a-p-28770249.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/01/08/e1/1704686517958308544f7f6ae3dc33f2539da2760e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/01/08/db/17046865374c00ac2fdab7c2b0a11e65b04fa48654.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 423
  },
  {
    id: '219346632',
    name: 'Men\'s Slim Fit Street Style Solid Color Long Sleeve Sweater, Casual Crew Neck Pullover, Lightweight Polyester Knit Top, Suitable For Spring, Autumn, Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-219346632.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/13/76/1760324321e18b3fd58c51c89cd8a074c09546b6e1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/13/99/17603243532f3327475ad1b57a18a5b3e68254837f.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 1001
  },
  {
    id: '316428769',
    name: 'Men\'s Contrast Color V-Neck Long Sleeve Sweater, Versatile',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 332695,
    originalPrice: 399234,
    link: 'https://www.shein.com/a-p-316428769.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/20/9b/176361597498009edab6427f21a6caeb5c8f448e00_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/20/9c/176361598522a0fd0965b54233aa5f60ebfe024cab.jpg'
    ],
    inStock: true,
    rating: '4.9',
    reviews: 15
  },
  {
    id: '208418384',
    name: 'GRDR Men\'s Casual Long Sleeve Half-Zip Pullover Sweater, Versatile For Daily Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-208418384.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/24/12/1763971661f095f49dafde64e384f764098b754ecd_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/08/d0/1759914750a045f44809e45cca274c9acaeb4ac9ac.jpg'
    ],
    inStock: true,
    rating: 4.59,
    reviews: 365
  },
  {
    id: '206077369',
    name: 'Manchic Men\'s Fashion Texture Sense Solid Color Simple Regular Knit Sweater, Streetwear,Christmas, New Year, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 406755,
    originalPrice: 488106,
    link: 'https://www.shein.com/a-p-206077369.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/30/3f/1759167795d6bd15872743e85e492ef63570ece10a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/09/30/26/17591678412c39db5e14fa35dc48e5bd35c91f7286.png'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 214
  },
  {
    id: '243108052',
    name: 'ROMWE MEN Prep Men\'s Letter Pattern Contrast Color Loose Knit Long Sleeve Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 501055,
    originalPrice: 601266,
    link: 'https://www.shein.com/a-p-243108052.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/27/fc/1761564299de854a064d8d36130ff9df164bc4205f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/27/12/1761564317eb787d12d92a4cfbdf1ca07ebb8a69dc.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 11
  },
  {
    id: '240939587',
    name: 'GRDR Men\'s Casual Jacquard Knit Crew Neck Long Sleeve Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-240939587.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/1b/1763452490329984162cb54c876ece842698f1025e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/18/57/1763452497850109596311081a87f36995fdd350c1.jpg'
    ],
    inStock: true,
    rating: 4.69,
    reviews: 13
  },
  {
    id: '260399826',
    name: 'Men\'s Casual Loose Fit Dropped Shoulder Half-Turtleneck Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 420210,
    originalPrice: 504252,
    link: 'https://www.shein.com/a-p-260399826.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/21/ab/1763712584ad68045281a5c3f8a1019d8bc062ea36_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/29/64/176438342029f00ca124c0f2f705a81880bb236583.jpg'
    ],
    inStock: true,
    rating: '4.3',
    reviews: 98
  },
  {
    id: '246420114',
    name: 'Manfinity Mode Men\'s Solid Color Crew Neck Cable Casual Versatile Long Sleeve Pullover Sweater Cable Knit Sweater Men',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 406755,
    originalPrice: 488106,
    link: 'https://www.shein.com/a-p-246420114.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/29/db/1761700038de225066a3831597a50c6ba59add2911_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/29/4c/1761700045a51e92fe9fdd8f774067d2e3875eb8c8.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '22976804',
    name: 'Manfinity Unisex Men Solid Cable Knit Fall Sweater Round Neck Long Sleeve Plain White Urban Casual Fall Sweater, Winter, Couple Things',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 420210,
    originalPrice: 504252,
    link: 'https://www.shein.com/a-p-22976804.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/09/12/ac/1694489552a21550b558ee4463bdf32a44e710ff52_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/09/12/7a/1694489564b00d5927578e84723a3bdbe5b0ef35b2.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '280672344',
    name: 'Manfinity CasualKnits Men\'s Casual Striped Crew Neck Pullover Sweater, Autumn/Winter Streetwear Purple Sweater Men Magnified Men Long Sleeve Top Lavender For Men Purple Street Wear Purple Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 285545,
    originalPrice: 342654,
    link: 'https://www.shein.com/a-p-280672344.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/11/80/176279057553fbd2b0ae19f467408c4e262c78d22a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/11/ed/1762790583e13161f56da5e17b5b27511e54c17d74.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 119
  },
  {
    id: '310572679',
    name: 'Black Half-Zip Stand Collar Knit Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 272090,
    originalPrice: 326508,
    link: 'https://www.shein.com/a-p-310572679.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/06/6a/176241378977ee0d3a76b13019d4ca4d0b70c1003f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/06/49/17624138191605367dc153b0b03b97dca669390e2a.jpg'
    ],
    inStock: true,
    rating: '4.4',
    reviews: 100
  },
  {
    id: '193145845',
    name: 'Manfinity EMRG Men\'s Casual Letter Distressed Crew Neck Long Sleeve Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 426995,
    originalPrice: 512394,
    link: 'https://www.shein.com/a-p-193145845.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/24/61/1758696498ab64413b08ea37815c22dcaf3d83ca1a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/24/28/17586965090b84dbf8cff1ad7edd373a4fd76a8b3b.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 270
  },
  {
    id: '315663968',
    name: 'Men\'s Casual Striped Crew Neck Long Sleeve Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 305785,
    originalPrice: 366942,
    link: 'https://www.shein.com/a-p-315663968.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/25/56/1764050986eca7bdba0a67f0eb3b51bef728c56296_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/08/10/1765175768487cea01f01e2a79990c2d02a7330d25.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 58
  },
  {
    id: '39940622',
    name: 'Manfinity Homme Men\'s Casual Colorblock Design Loose Fit Sweater For Autumn And Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 447235,
    originalPrice: 536682,
    link: 'https://www.shein.com/a-p-39940622.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/10/53/17259693613d3c2355a5062ee3ab58f7124ad75ef0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/10/1e/1725969381b218148e87cf7dee18dde99a71f1986e.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 4
  },
  {
    id: '169044465',
    name: 'GRDR Men\'s Casual Long Sleeve Half-Zip Pullover Sweater, Versatile For Daily Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 359605,
    originalPrice: 431526,
    link: 'https://www.shein.com/a-p-169044465.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/50/1763463596e24aa9ec75a792122316963ee25fa753_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/08/29/49/1756459970c27fa7689935ba0a86ddad6a12a2487c.jpg'
    ],
    inStock: true,
    rating: 4.74,
    reviews: 135
  },
  {
    id: '229825690',
    name: 'Claim Dot New Autumn/Winter Crew Neck Half-Zip Front Long Sleeve Sweatshirt, Grey & White Men Sweater Hoodie Spring And Autumn Vintage Cityboy Long Sleeved Shirt Men Casu Al Inside With A Luffian Top Jacket Striped Sweater Men Striped Long Sleeve',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 453905,
    originalPrice: 544686,
    link: 'https://www.shein.com/a-p-229825690.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/22/91/1761099685ca638fd313129bca1d0e06747284e17c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/22/64/17610996929f8810e327c9c416f4016e4622c8095b.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 7
  },
  {
    id: '227784494',
    name: 'GRDR Men\'s Solid Color 7-Gauge Jacquard Knit Sweater, Basic Warm Thick Pullover For Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 292330,
    originalPrice: 350796,
    link: 'https://www.shein.com/a-p-227784494.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/18/1a/17634567699744fe11819353e1416e2f67f5343443_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/p/abc/2025/11/18/44/1763456782c5556bd2451dcbf78d245f06862a492f.png'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 103
  },
  {
    id: '314239208',
    name: 'RONVEXI Men\'s Casual V-Neck Drop Shoulder Cable Knit Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 440450,
    originalPrice: 528540,
    link: 'https://www.shein.com/a-p-314239208.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/02/5d/17646431274911e728afbcc51171bd8f077f044020_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/02/97/17646431430a22f6035a798a39274af8003e2c52c0.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 214
  },
  {
    id: '269021633',
    name: 'GRDR Men\'s Casual Jacquard Knit Crew Neck Long Sleeve Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-269021633.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/05/1c/1764932725aa7b6066d2374c224b08289274b19396_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/03/a1/176217459663ab9def03a9767cce0bde20f0259c12.jpg'
    ],
    inStock: true,
    rating: 4.09,
    reviews: 11
  },
  {
    id: '266267060',
    name: 'RONVEXI Men Basic Solid Color Thermal Lined Top, Autumn/Winter Knit Sweater Grey Knit Long Sleeve Grey Long Sleeve Knit Streetwear Sweater, Fleece Lined',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 339480,
    originalPrice: 407376,
    link: 'https://www.shein.com/a-p-266267060.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/86/17643146995fdd9ce111d5ae0b56456242b6b5b77a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/21/17643147163c42ec244d92134c6b48e306e453cc70.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '217497864',
    name: 'GRDR Men\'s Casual Versatile Solid Color Twist Flower High Neck Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-217497864.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/25/76/1764059235e94b1bf698b641716763f0dcc6f5be41_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/27/e3/17589723888f90835a22c8aae671ba5c6855b8ad87.jpg'
    ],
    inStock: true,
    rating: 4.61,
    reviews: 18
  },
  {
    id: '317785854',
    name: '1pc Men\'s Casual Long Sleeve Half-Zip Pullover Sweater, Versatile For Daily Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 359605,
    originalPrice: 431526,
    link: 'https://www.shein.com/a-p-317785854.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/21/dd/17637126596ab0416a1a75169029c051b292658d09_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/21/11/1763712675c9ebf6e1cf8bcd5e5bbd5a81cdeafdfe.jpg'
    ],
    inStock: true,
    rating: 4.55,
    reviews: 34
  },
  {
    id: '214190477',
    name: 'V Neck Sweater Men, Ribbed Knit Pullover Sweater, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 299000,
    originalPrice: 358800,
    link: 'https://www.shein.com/a-p-214190477.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/11/65/176016141188cfdfcb7dc6cb77be46a23e5a42c28d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/11/4b/1760161416c3f46a797e0098454bf23168c4cc19a4.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 627
  },
  {
    id: '208806012',
    name: 'Men\'s Solid Color Long Sleeve Casual Versatile Turtleneck Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 319240,
    originalPrice: 383088,
    link: 'https://www.shein.com/a-p-208806012.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/03/3a/17621685492b67d02fa156d5c1137d79f943231189_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/03/bc/176216857960a9cc9fa0cf8b49ad92db0be24f3b28.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '307984981',
    name: '1pc Men\'s Crew Neck Solid Color Casual Versatile Long Sleeve Pullover Knit Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 218155,
    originalPrice: 261786,
    link: 'https://www.shein.com/a-p-307984981.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/19/b7/17635303888b56a578d5bb2c437805eafd5ed8ed3c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/19/10/1763530392529139e614f1a274a696af358d1db2fd.jpg'
    ],
    inStock: true,
    rating: '4.4',
    reviews: 63
  },
  {
    id: '200538411',
    name: 'Manfinity EMRG Men\'s Letter Distressed Crew Neck Long Sleeve Casual Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 460690,
    originalPrice: 552828,
    link: 'https://www.shein.com/a-p-200538411.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/29/19/1759134245fb290cf7faff83afaf8852cef6a5e96b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/29/65/175913425729d01304aa321de93e846936d2080784.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 270
  },
  {
    id: '171569033',
    name: 'Manfinity Homme Men\'s Casual Solid Color Cable Knit Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 440450,
    originalPrice: 528540,
    link: 'https://www.shein.com/a-p-171569033.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/10/c5/1760087360256f5dd4b411c62daf349977513c13ea_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/10/00/176008737092be59f574a094710bd76ac3de1e34e1.jpg'
    ],
    inStock: true,
    rating: '4.7',
    reviews: 69
  },
  {
    id: '318061352',
    name: '1pc Men\'s Casual Striped Knit Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 298885,
    originalPrice: 358662,
    link: 'https://www.shein.com/a-p-318061352.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/16/04/1765870473d3239e216cf73531b5e634ac17c4cd02_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/16/d1/1765870480ea222455fc72765c68f72729c30f4c90.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 189
  },
  {
    id: '308150738',
    name: 'SWAVVY Men\'s Green Crew Neck Casual Long Sleeve Letter Pattern Pullover Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 332695,
    originalPrice: 399234,
    link: 'https://www.shein.com/a-p-308150738.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/27/2d/1764234415bc752ef2a419c95aafc46568692c6c02_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/27/68/1764234439727fd7354a7b81d6a5caf4f035c5f1f5.jpg'
    ],
    inStock: true,
    rating: 4.72,
    reviews: 33
  },
  {
    id: '193256789',
    name: 'Claim Dot Men\'s Casual Slogan Graphic Crew Neck Drop Shoulder Sweater, Autumn/Winter Streetwear Clothes Grunge Sweater Grey Sweater Masculine Clothes Male Sweater Graphic',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 426995,
    originalPrice: 512394,
    link: 'https://www.shein.com/a-p-193256789.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/12/35/1760255723562e9dea8e6f87480b493b572836207c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/24/c9/1758719442b162d05d6192753cec95d31e605acfad.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 380
  },
  {
    id: '45993923',
    name: 'ROMWE MEN Street Life Men\'s Bone Print Crew Neck Casual Pullover Sweater, For Fall Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 460690,
    originalPrice: 552828,
    link: 'https://www.shein.com/a-p-45993923.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/10/26/8c/17299271008bd849036a126fabe78c55d3394c3f38_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/10/26/58/1729927121a97e5b7510d648e6265ae320985d577a.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '240729477',
    name: 'Men\'s Casual Loose Minimalist Commuting High-End Sense Daily Versatile Solid Color Knitted Long Sleeve Crew Neck Pullover Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 346150,
    originalPrice: 415380,
    link: 'https://www.shein.com/a-p-240729477.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/06/cd/1762397106af2ab7a1f644f7ac68b9ba5424a75ceb_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/06/11/176239711522757e49a7250deaa090b827b4c4f92d.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 76
  },
  {
    id: '219371335',
    name: 'Men\'s Slim Fit Street Style Solid Color Long Sleeve Sweater, Casual Crew Neck Pullover, Lightweight Polyester Knit Top, Suitable For Spring, Autumn, Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 379845,
    originalPrice: 455814,
    link: 'https://www.shein.com/a-p-219371335.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/13/d3/1760324108d632ace70b969259a166474ef73b7a54_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/13/8f/17603241365cc56becd33ad19c1e2958fd40683917.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 1001
  },
  {
    id: '250171032',
    name: 'New Men\'s Plain Color Simple And Versatile Sweater Warm And Comfortable Round Neck Everyday Sweater For Autumn And Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 561775,
    originalPrice: 674130,
    link: 'https://www.shein.com/a-p-250171032.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/28/68/17616335478a2348353a76f2538626e1053184ac93_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/28/46/17616363095e29b09f96b6788a28bd405dfcf4e1f2.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 42
  },
  {
    id: '283938129',
    name: 'Manfinity CasualKnits Men\'s Heart Embroidery Button Half-Placket Long Sleeve Pullover Sweater Streetwear Heart Sweater Sweater Polo Men Men Buttoned Knitted Polo Men Navy Blue Outfit Navy Blue Sweater Heart Embroidered Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 332695,
    originalPrice: 399234,
    link: 'https://www.shein.com/a-p-283938129.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/19/8c/1766128929bce1b7b169f96c5bd94d1ebbf8060092_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/19/a4/17661289469752404d8ed08a82722fa86f4e5f0d52.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 67
  },
  {
    id: '221802273',
    name: 'Manfinity EZcore Men\'s Fashionable Casual Solid Color Crew Neck Long Sleeve Sweater Distressed Sweater Brown Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 420210,
    originalPrice: 504252,
    link: 'https://www.shein.com/a-p-221802273.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/ae/17606783446eba5573de16036a51db0f30bd234594_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/3a/17606783578782863ec3ff6a5b67330789c678e550.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '193571915',
    name: 'BAI YUE Men\'s Autumn/Winter Retro Old Money Style Knitted Sweater, Loose Round Neck Textured Pullover,Christmas, New Year, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-193571915.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/14/e5/1757781650199d546e208310d1682b8c54bbc961d2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/14/b5/1757781658dc77c6823e35c9ecd03120d5669d77d2.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 409
  },
  {
    id: '260472756',
    name: 'Claim Dot Men\'s Casual Solid Color Stand Collar Sweater, Autumn/Winter, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 319240,
    originalPrice: 383088,
    link: 'https://www.shein.com/a-p-260472756.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/04/98/17622192742c5051b37454471dd9000b722f8007ff_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/04/95/17622192876d874905de0ec41b8d2c074f2217b039.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '199606195',
    name: 'Men\'s Old Money Thickened Versatile Sweater, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 379845,
    originalPrice: 455814,
    link: 'https://www.shein.com/a-p-199606195.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/19/46/175825190623cc667e2468130414d023956f519b11_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/19/2b/1758252096919b27f8049bd3bbbc734f406ba8868a.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 105
  },
  {
    id: '264669812',
    name: '1 Piece Men\'s Round Neck Sweater: Outer Material Made Of 100% Cotton, Exquisite Printing, Suitable For Outdoor Use When Commuting And Going To School In Autumn And Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 413655,
    originalPrice: 496386,
    link: 'https://www.shein.com/a-p-264669812.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/05/4a/17623344391b9611938a859c31316216a00e0d7270_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/05/ff/17623344451bf7b43d6a889614641f3e2eeccd3307.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 14
  },
  {
    id: '225554534',
    name: 'DAZY Men\'s Casual Solid Color Knit Sweater, Versatile For Autumn',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 413540,
    originalPrice: 496248,
    link: 'https://www.shein.com/a-p-225554534.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/21/83/176102929460c6b4c80e14b2353e09a2ce4a10712e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/21/55/17610293038b4229b1f4b1c4618905e0889b2f29a6.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '203887702',
    name: 'Men\'s Solid Color Half-Zip Dropped Shoulder Loose Fit Casual Plush Sweater, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 406755,
    originalPrice: 488106,
    link: 'https://www.shein.com/a-p-203887702.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/09/af/17599810038d7f8a98798f6972c2094945a8fa5dcd_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/09/43/1759981031f4f7f675f57a3dfa57c9e2bdcbd0253e.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 21
  },
  {
    id: '214158826',
    name: 'Men\'s Casual Ribbed Knit Sweater, Round Neck, Minimalist & Fashionable For Everyday Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 325910,
    originalPrice: 391092,
    link: 'https://www.shein.com/a-p-214158826.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/02/f2/1764657727f89fcc1951d1e0a955c9794a59657c5f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/02/34/17646577558097398f0e8dfc7541cb20851fb68629.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 537
  },
  {
    id: '184637727',
    name: 'Men\'s Casual Solid Color Minimalist Zip-Up Collar Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 346150,
    originalPrice: 415380,
    link: 'https://www.shein.com/a-p-184637727.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/16/b7/1752653901e284840547f75c7b53f0838eddb34b08_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/08/15/30/1755246572d130fad4fb89f4b67bc8c6d5d2685d2c.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 1001
  },
  {
    id: '234922525',
    name: 'Manfinity EMRG Men\'s Letter Pattern Crew Neck Long Sleeve Pullover Sweater, Autumn/Winter Men Sweater Graphic Men Long Sleeve Knit Sweatshirt Graphic Grunge Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-234922525.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/24/98/17612681937df0db9d403a34d582af89a57377e926_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/24/c7/1761268204b150ec04547676cdeb6f9aeb10c3e85b.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '316234787',
    name: 'GRDR Men\'s Solid Color 7-Gauge Jacquard Knit Sweater, Basic Warm Thick Pullover For Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 292330,
    originalPrice: 350796,
    link: 'https://www.shein.com/a-p-316234787.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/25/99/17640550354772b6b5a742f552e54544daab6d967b_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/p/abc/2025/11/25/88/176405507843a74872cc356df76c3b7d1dde67eb53.png'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 103
  },
  {
    id: '304635293',
    name: 'New Arrival Men\'s Casual Solid Color Pullover Sweater, Half-Turtleneck, Knitted, Warm, Spring & Autumn',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 224940,
    originalPrice: 269928,
    link: 'https://www.shein.com/a-p-304635293.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/29/02/1764385603a3db902d49e8e3d9d6fd58dcb605719b_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/29/d1/1764385588caf33d0e94fbeeeed6b57f6cbe45f390.jpg'
    ],
    inStock: true,
    rating: '4.9',
    reviews: 130
  },
  {
    id: '218808752',
    name: 'Manfinity Homme Men\'s Solid Color Cable Knit Stand Collar Half Zip Casual Long Sleeve Pullover Sweater, Fall/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 420210,
    originalPrice: 504252,
    link: 'https://www.shein.com/a-p-218808752.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/58/1760526577536998e68d63e0e72b86b9636ad49edd_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/cc/1760526586b2bdcfb762d03b1314950a05755bcc20.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 889
  },
  {
    id: '269300860',
    name: 'Claim Dot Men\'s Solid Color Loose Fit Crew Neck Long Sleeve Casual Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 433780,
    originalPrice: 520536,
    link: 'https://www.shein.com/a-p-269300860.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/05/e3/1762306070fa97872f8e2bdb845be0b37b775d5a9d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/05/e6/17623060811229440b2370f46b33e06cb555f37fdf.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 85
  },
  {
    id: '20081831',
    name: 'Manfinity BRENVOR Men Cable Knit Sweater Vest',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 231610,
    originalPrice: 277932,
    link: 'https://www.shein.com/a-p-20081831.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/07/24/1690170791b793f3d22e9e265b435fa50308b64376_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/07/24/169017080416d44b1c8eeed6f1eb0cffc6ed2cb4f0.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 1001
  },
  {
    id: '218763261',
    name: 'Manfinity Unisex Men\'s All-Over Print Crew Neck Casual Versatile Long Sleeve Sweater, Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 440450,
    originalPrice: 528540,
    link: 'https://www.shein.com/a-p-218763261.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/c2/1760663905b05c26519f9a78d85f583962eb690007_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/80/1760663917029d799549c2e842ac45e21485241a28.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 1
  },
  {
    id: '250088718',
    name: 'GRDR Men\'s Casual Long Sleeve Zip-Up Cardigan Sweater, Versatile For Daily Wear',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 561660,
    originalPrice: 673992,
    link: 'https://www.shein.com/a-p-250088718.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/23/c6/17638961398d3fb45266a08256d2426bcb5c26c147_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/27/50/176421106356361f749e05d2c194fb6b00cf94e356.jpg'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 5
  },
  {
    id: '288733925',
    name: 'Manfinity Homme Men\'s Solid Color Minimalist Casual Zip-Up Long Sleeve Sweater Cashmere Men S Clothing Knit Wear Men Men Buttoned Knitted Polo Mock Neck Men Men Sweater Men Quarter Zip Men Knitted',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 433780,
    originalPrice: 520536,
    link: 'https://www.shein.com/a-p-288733925.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/11/1763347665f60dc72ae1fea309074826efb88d0125_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/d9/1763347673541daf48cfa173c2c2f55b40a20ef016.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '221782839',
    name: 'Manfinity EZcore Men\'s Solid Color Minimalist Crew Neck Long Sleeve Sweater, Casual Everyday Wear Burgundy Top Men Men Long Sleeve Knit',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 426995,
    originalPrice: 512394,
    link: 'https://www.shein.com/a-p-221782839.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/8b/1760678343a151e8c6b7481e31f1d1521b84ab4b9d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/32/1760678355d87a81c6f28a4148b834706dd0e0abe3.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '301027294',
    name: 'Manfinity EZcore Men\'s Contrast Color Crew Neck Loose Fit Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 440450,
    originalPrice: 528540,
    link: 'https://www.shein.com/a-p-301027294.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/22/5b/1763809303456d4b765e2c8963bb478ce34573b315_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/22/47/17638093169e5cae61c860a0dbe32c70f025178ab3.jpg'
    ],
    inStock: true,
    rating: 4.74,
    reviews: 203
  },
  {
    id: '186809414',
    name: 'Men\'s Casual Patchwork Polo Collar Pullover Sweater, Loose Fit College Style, Spring/Autumn, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 568445,
    originalPrice: 682134,
    link: 'https://www.shein.com/a-p-186809414.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/08/26/175730994901c45d092a0296c930586a5864aa460e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/08/e7/17573099649ac45ac02592fc3682b6b971fd271e6e.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 581
  },
  {
    id: '318085063',
    name: 'GRDR Men\'s Casual Jacquard Knit Crew Neck Long Sleeve Sweater',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 386630,
    originalPrice: 463956,
    link: 'https://www.shein.com/a-p-318085063.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/22/d8/176381200084867c450a9c8abc6bff5fc286056dc2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/22/57/1763812004af04c72153446e9cf610b2b34fbaf5f2.jpg'
    ],
    inStock: true,
    rating: 4.69,
    reviews: 13
  },
  {
    id: '206147134',
    name: 'Manchic Men\'s Fashion Texture Sense Solid Color Simple Regular Knit Sweater, Streetwear,Christmas, New Year, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 420210,
    originalPrice: 504252,
    link: 'https://www.shein.com/a-p-206147134.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/30/01/1759167465f446592624ad079273cee9b9d9075912_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/09/30/e3/17591675183e81154f65ee7952fdbeb6a4453bcb06.png'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 214
  },
  {
    id: '307703834',
    name: 'Men\'s Fashionable Versatile Twist Floral Crew Neck Long Sleeve Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 366390,
    originalPrice: 439668,
    link: 'https://www.shein.com/a-p-307703834.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/20/9c/1763622891dd4f539c101ef24e26884b3e85638083_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/27/12/1764243741bb177173b5165348f5c30601a62bcb7e.jpg'
    ],
    inStock: true,
    rating: '4.7',
    reviews: 97
  },
  {
    id: '196099894',
    name: 'Men\'s Knitted Polo Collar Casual Long Sleeve Pullover Sweater, Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 339480,
    originalPrice: 407376,
    link: 'https://www.shein.com/a-p-196099894.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/22/f7/17585304802592cf407b50b3f85914ce083459f3e4_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/22/c1/175853049115aaf335cc28862ceeee0ccdaa4de057.jpg'
    ],
    inStock: true,
    rating: 4.96,
    reviews: 56
  },
  {
    id: '179794471',
    name: 'Men\'s Stand Collar Long Sleeve Solid Color Minimalist Casual Lightweight Knit Sweater, Autumn/Winter',
    category: 'Men',
    subcategory: 'Sweaters',
    price: 393300,
    originalPrice: 471960,
    link: 'https://www.shein.com/a-p-179794471.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/11/fa/1757600117f4fcf8d0cc9215fccb9f4947ba6754be_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/11/5e/1757600147ff5698a741db9b80affdeee9f36937c3.jpg'
    ],
    inStock: true,
    rating: 4.95,
    reviews: 1001
  },
  {
    id: '101333416',
    name: 'Men\'s Long Sleeve PU Leather Padded Coat With Detachable Hood, Casual Daily Wear, Street Fashion , Fall Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 782000,
    originalPrice: 938400,
    link: 'https://www.shein.com/a-p-101333416.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/07/50/175721815896800e8929306241021583800c16b026_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/06/06/12/1749215954fa8103e3512f9adaec623497e2770eac.jpg'
    ],
    inStock: true,
    rating: 4.97,
    reviews: 40
  },
  {
    id: '109168476',
    name: 'Men\'s Casual Sports Sweatshirt - Solid Color, Long Sleeve, Knit Fabric, H-Fit, For Hiking & Outdoor Activities, Polyester, Round Neck, Athletic Style Top For Fall/Winter Season',
    category: 'Men',
    subcategory: 'Jackets',
    price: 162380,
    originalPrice: 194856,
    link: 'https://www.shein.com/a-p-109168476.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/29/92/1753756260f93f209e1db268fbf96864b0a27950ce_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/05/05/e7/1746440694dcdd30343effc30ad609d75be2748d74.png'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 412
  },
  {
    id: '23830483',
    name: 'Men Long Sleeve Slant Pocket Drawstring Hooded Padded Coat, For Fall Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 970600,
    originalPrice: 1164720,
    link: 'https://www.shein.com/a-p-23830483.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/11/16/7f/1700123340c9b6222adeb27d5ae21e1292d72cff58_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/09/26/2d/16957261996c6fda5172260181cf5ebec11fed76b8.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '41144231',
    name: 'Manfinity Homme Men\'s Solid Color Long Sleeve Hooded Padded Coat, Winter Going Out Black Bubble Coat, For Friends, Husband, Boyfriend Gifts, Men Winter Jacket, Men Outerwear, Cheap Jackets For Men, For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 728065,
    originalPrice: 873678,
    link: 'https://www.shein.com/a-p-41144231.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/08/21/8f/1724218507ea342dc563f8e9ed012910f1a19d2132_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/08/21/79/17242185239f5ccaee2044a9536c4a80492b2bd56f.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '141142390',
    name: 'PAVTROS Manfinity Streetrush Men\'s Casual Contrast Color Patchwork Jacket, Autumn/Winter , Men Zip Up Thermal Lined Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 485645,
    originalPrice: 582774,
    link: 'https://www.shein.com/a-p-141142390.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/12/00/175499102787576246d864c6d7645e0dbdf8ae222b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/31/28/1753939828405735663d6d066daf8be9a26b2f7ad6.jpg'
    ],
    inStock: true,
    rating: 4.74,
    reviews: 1001
  },
  {
    id: '194862141',
    name: 'FeverCity Men\'s Casual Contrast Color Patchwork Jacket, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 546250,
    originalPrice: 655500,
    link: 'https://www.shein.com/a-p-194862141.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/10/52/176533061206a9e13e02cf436fe57a2083d4f7d8f9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/10/62/17653306233bb2e9276633ba0f9a06b0f2afd1367e.jpg'
    ],
    inStock: true,
    rating: '4.3',
    reviews: 54
  },
  {
    id: '238418988',
    name: 'PAVTROS Men\'s Casual Windbreaker Long Sleeve Fleece Lined Jacket, Black Patchwork Versatile, INS Style, Suitable For Autumn/Winter Matching And Daily Wear, Outdoor Hiking, Photo-Shoot Essential, Perfect Gift For Boyfriend/Husband, Men\'s Leisure, Y2K Style Oversized Bomber Windbreaker Thermal Lined Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 694485,
    originalPrice: 833382,
    link: 'https://www.shein.com/a-p-238418988.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/05/f2/176233770959c9568970db03532137407812cf41dc_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/05/ea/176233772235a81ec687e0d42aa0730f077fc01b48.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 889
  },
  {
    id: '101829460',
    name: ' Aesthetic Post--Men\'s Long Sleeve Sportswear Varsity Jacket, Color Block Half Zip Stand Collar Jacket With Letter Graphic, Adjustable Drawstring Hem, Suitable For Daily Wear, Outdoor, Sports, Casual, School, Party, Music Festival. Can Be Gifted To Friends And Boyfriends , Men Quarter Zip , Black And White Jacket, Football Jacket, Personalize Ball Jacket , Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-101829460.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/18/82/1750237479b3c03d90e1dfa0e1b77a699917354ced_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/18/f4/1750237493b39166f608b1f7b59d039b93fc2f1709.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 524
  },
  {
    id: '45056283',
    name: 'Thermal Lined Corduroy Jacket, Warm And Stylish Casual Outerwear, Suitable For Youth,Fleece,Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 606855,
    originalPrice: 728226,
    link: 'https://www.shein.com/a-p-45056283.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/10/11/95/1728645762458f130af411951b49e822e747811ffd_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/10/11/4f/1728645771a0d7ccf7d19de08f16392c037592ba4d.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 697
  },
  {
    id: '45773447',
    name: 'Manfinity Hypemode Men\'s Long Sleeve Solid Color Stand Collar Winter Coat, Solid Color Fleece Warm Winter Coat, For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 707940,
    originalPrice: 849528,
    link: 'https://www.shein.com/a-p-45773447.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/01/ef/175669782835c1c44da0ab3dac93c387e3dc46ba7b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/01/77/1756697838639fd3e43008139b718cbdc3e18178a2.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 457
  },
  {
    id: '40485609',
    name: 'Men\'s Long Sleeve Outdoor Sporty Casual Thermal Lined Warm Thick Jacket, For Fall Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 775215,
    originalPrice: 930258,
    link: 'https://www.shein.com/a-p-40485609.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/09/09/17/17258580833767377649db1532c29210767c3e3113_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/07/23/9b/1721712680fe7fe4ea351a1146049b7dcdfe8b21c6.jpg'
    ],
    inStock: true,
    rating: 4.94,
    reviews: 419
  },
  {
    id: '232091817',
    name: 'Men\'s Faux Leather Jacket With Stand-Up Collar, Removable Fur Lining, Zipper Closure, Stylish Jacket With Pockets And Elastic Cuffs, Smart Casual Style, Suitable For Everyday And Urban Looks',
    category: 'Men',
    subcategory: 'Jackets',
    price: 593400,
    originalPrice: 712080,
    link: 'https://www.shein.com/a-p-232091817.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/22/dc/176111329104d8ca50a747e1750c4b6798141b9250_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/22/05/1761113317d92fbc4863cdb48a7feff653eb78173b.jpg'
    ],
    inStock: true,
    rating: '4.4',
    reviews: 25
  },
  {
    id: '123274244',
    name: '1 Piece Men\'s Long Sleeve Vintage Worn Full Zipper PU Leather Jacket, Spring Autumn Men\'s Long Sleeve Motorcycle Style Casual PU Leather Jacket, Grunge',
    category: 'Men',
    subcategory: 'Jackets',
    price: 458735,
    originalPrice: 550482,
    link: 'https://www.shein.com/a-p-123274244.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/28/e7/176426534083a06c4197e63055d0500afc5d0423a6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/28/3b/1764265371465b78b25f57adc0eb399ddfa667874a.png'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 75
  },
  {
    id: '43645593',
    name: ' Aesthetic Post--Men\'s Casual Contrast Color Patchwork Slogan & Letter Print Baseball Jacket, Autumn/Winter, Going Out Street Wear Baseball Long Sleeve Color Block Jacket, For Friends, Husband, Boyfriend Gifts, Men Rave Varsity Jacket, Baseball Jacket, Men Graphic Jacket, For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 539465,
    originalPrice: 647358,
    link: 'https://www.shein.com/a-p-43645593.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/26/c3/1727318816e95b22d552837a82c5ec31416a11298c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/26/79/1727318837c91bf48f7e8d3a8a9792551027da4d64.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 236
  },
  {
    id: '37438114',
    name: 'Manfinity Homme Men Zip Up Bomber Jacket Without Tee, Light Jacket, Plain, Husband, Long Sleeve, Work, For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 411585,
    originalPrice: 493902,
    link: 'https://www.shein.com/a-p-37438114.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/06/25/87/171928448910e17b6d8a77ae1dc101ce828805e516_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/06/25/eb/171928450775ff012724731eff3ee72f1833f45e3a.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 1001
  },
  {
    id: '235991733',
    name: 'Manfinity CasualCool Men\'s Fleece Flannelette Dark Grey Jacket Regular Fit Wrist-Length Sleeve Casual And Cozy Top Men Knitted Button Up Woolen Jacket Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 606855,
    originalPrice: 728226,
    link: 'https://www.shein.com/a-p-235991733.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/24/95/1761293335bd8a86c56ce455ab52255d85ece671df_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/24/51/1761293352dc3f11b6d54c0b0ba76205bce8fb6fd9.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 411
  },
  {
    id: '47204189',
    name: 'Manfinity Homme Men\'s Solid Color Casual Long Sleeve Zip-Up Hooded Outdoor Windbreaker Jacket, For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 337410,
    originalPrice: 404892,
    link: 'https://www.shein.com/a-p-47204189.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/11/11/e6/1731310472ae38a18a485d4e5c59818d50e54c9a0d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/11/11/30/173131049410a13ddb5597af6a37578eb41d41414e.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 1001
  },
  {
    id: '241341932',
    name: 'Men\'s Outdoor Thickened Hooded Jacket, Casual & Fashionable, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 620310,
    originalPrice: 744372,
    link: 'https://www.shein.com/a-p-241341932.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/14/93/1760446364ecb636931be4a171082bc8491f0c0a01_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/14/86/17604463725cbd251eef26d36087e23230306cf4ac.jpg'
    ],
    inStock: true,
    rating: '4.3',
    reviews: 137
  },
  {
    id: '213774762',
    name: 'Manfinity CasualCool Men\'s Casual Everyday Commute Patchwork Pocket Corduroy Long Sleeve Jacket, Autumn',
    category: 'Men',
    subcategory: 'Jackets',
    price: 445280,
    originalPrice: 534336,
    link: 'https://www.shein.com/a-p-213774762.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/13/f7/176031818860b301c953cf880c89045640ac2f00df_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/13/c4/1760318204b7d85df2897e626f0023e34922c5a0e6.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 677
  },
  {
    id: '118448136',
    name: 'PAVTROS Manfinity Streetrush Men\'s Casual Embroidered Fleece Jacket, Autumn/Winter, Y2k Jacket, Cross Jacket, Letter Man Jacket, Grunge',
    category: 'Men',
    subcategory: 'Jackets',
    price: 526010,
    originalPrice: 631212,
    link: 'https://www.shein.com/a-p-118448136.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/21/0a/175309609215129254969bf15e8bddbb495c52bf93_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/24/2c/1753328105588784dbb84c7c5b871c6190bc2e978c.jpg'
    ],
    inStock: true,
    rating: 4.73,
    reviews: 628
  },
  {
    id: '24337948',
    name: 'Manfinity Homme Men Long Sleeve Zip Up Slant Pocket Jacket, Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 519340,
    originalPrice: 623208,
    link: 'https://www.shein.com/a-p-24337948.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/25/df/1756085995a9c314b9b2648136490952ba1d508a44_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/25/29/1756086005fe227904f0866a5c9978dd4b2b1883c0.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '54243565',
    name: 'NASBING Men\'s Winter Ski Jacket Water Resistant Windproof Snowboard Thermal Lined Hooded Winter Clothes 4 Pockets Parka Hiking Camping Climbing,Fleece,Skiing',
    category: 'Men',
    subcategory: 'Jackets',
    price: 822365,
    originalPrice: 986838,
    link: 'https://www.shein.com/a-p-54243565.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/01/20/8e/17373536957ddaba77e7291e1efba4fbf881ca0b5c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/01/20/99/1737353694fe005511fc7b8d23f3e957225cdc455f.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 510
  },
  {
    id: '48777330',
    name: '1pc Men\'s Long Sleeve Versatile Stand Collar Moto Winter Coat, Quilted Lining, Lightweight & Warm, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 330740,
    originalPrice: 396888,
    link: 'https://www.shein.com/a-p-48777330.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/12/16/64/173432937552f69ff08cf51f2e5a5a3c2b487f073f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/08/24/18/1724492070cf232b36e84d07e46fa34ac7f5d24db8.png'
    ],
    inStock: true,
    rating: 4.77,
    reviews: 607
  },
  {
    id: '121802188',
    name: 'DAZY Men\'s Solid Brown Suede Faux Fur Jacket, Autumn',
    category: 'Men',
    subcategory: 'Jackets',
    price: 775215,
    originalPrice: 930258,
    link: 'https://www.shein.com/a-p-121802188.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/11/14/17575817572426a68c8ee264b37dde5b89dc5d4a48_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/10/1b/17521124495cb31c8aadf8f8eaf991783b00d1f0ff.jpg'
    ],
    inStock: true,
    rating: 4.77,
    reviews: 277
  },
  {
    id: '31704454',
    name: 'Men\'s Spring Autumn New Motorcycle Leather Jacket Outerwear,Fleece',
    category: 'Men',
    subcategory: 'Jackets',
    price: 425040,
    originalPrice: 510048,
    link: 'https://www.shein.com/a-p-31704454.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/03/12/5c/17102317131bba0e183e5b63d53c4a721233bd0416_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/03/02/f0/17093737460f72f1f675304551054c4839f364f414.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '23082923',
    name: 'Manfinity Homme Men\'s Casual Letter Patched Teddy Lined Corduroy Thermal Lined Jacket, Autumn/Winter, Going Out Warm Jacket Long Sleeve Khaki Jacket, For Friends, Husband, Boyfriend Gifts, Men Jacket Winter, Brown Jacket Men, Light Brown Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 795455,
    originalPrice: 954546,
    link: 'https://www.shein.com/a-p-23082923.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/12/27/e1/17036678037dd8a676c130303b8295cfccca77eb87_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/12/27/10/1703667813dc97f9a0efbb67c2c38c9dfc9e857e15.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '96669253',
    name: 'Men\'s Casual Sports Jacket, Spring Autumn Corduroy Windbreaker Jacket, Retro Multi-Pocket Cargo Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 357650,
    originalPrice: 429180,
    link: 'https://www.shein.com/a-p-96669253.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/03/07/17489318597d1a72f19f22a6834aa082331b0bdbd3_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/06/03/d6/17489320051f63d29a806ffb43b87d3e4d94e68ada.png'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 89
  },
  {
    id: '25524362',
    name: 'Men\'s Long Sleeve Fashion Fleece Casual Basic Everyday Wear Jacket, For Fall Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 411585,
    originalPrice: 493902,
    link: 'https://www.shein.com/a-p-25524362.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/12/20/ff/170307475643aa2e2f4946ce7dcfe3f6fe5fd9f731_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/12/09/2e/1702112514ed5dd20a53079213652ac43dee544c26.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 1001
  },
  {
    id: '21312059',
    name: 'Manfinity LEGND Men Slogan Graphic Two Tone Varsity Jacket, Going Out Street Wear Letter Baseball Long Sleeve Color Block Jacket, For Friends, Husband, Boyfriend Gifts, For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 431710,
    originalPrice: 518052,
    link: 'https://www.shein.com/a-p-21312059.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/08/12/c5/169180601706e21853ab6077c86b06577a9e647a87_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/08/12/47/1691806033286613dc4603ea9fae028e7f129605d3.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '47618117',
    name: 'Thermal Lined Corduroy Jacket, Thicken Stylish Versatile Casual Warm Padded Coat For Young Adults,Fleece,Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 613640,
    originalPrice: 736368,
    link: 'https://www.shein.com/a-p-47618117.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/11/10/0b/1731227985bb6f537a8ee3aacccd60d32f59101ceb_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/11/10/79/1731228014ceb49f903001c33cd905e678730afe3b.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 697
  },
  {
    id: '225078441',
    name: 'Manfinity Homme Men\'s Solid Color Contrast Trim Button Front Pocket Furry Long Sleeve Casual Jacket,Turtleneck Men,Men Cardigan,Flannel Men Jacket,Men Flannel,Winter Men Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 364435,
    originalPrice: 437322,
    link: 'https://www.shein.com/a-p-225078441.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/1b/1760943507765516793d195479094ab5797d4cf89e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/c4/176094351750a5a73bc048996156b1bb5874fe914f.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 336
  },
  {
    id: '46958582',
    name: 'Men\'s Solid Color Front Zipper Long Sleeve Simple Casual Jacket, Daily Wear, Fall/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 492315,
    originalPrice: 590778,
    link: 'https://www.shein.com/a-p-46958582.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/28/58/176430805830146fcb7d4ecb841de3eedeb11c2dc9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/28/41/1764308078d8c1923b8caee097f9e56e0dc514c1c6.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 951
  },
  {
    id: '51949722',
    name: 'Men\'s Long Sleeve Autumn/Winter Contrast Color Thickened Warm Hooded Padded Coat',
    category: 'Men',
    subcategory: 'Jackets',
    price: 849390,
    originalPrice: 1019268,
    link: 'https://www.shein.com/a-p-51949722.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/12/16/30/17343422558938b3017bf0bc55679b306b322685f1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/12/16/b8/1734342279444c795b9c7359ff347504558f1010ff.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 1001
  },
  {
    id: '82810577',
    name: 'Manfinity Homme Men\'s Shirt Jacket, Men\'s Front Button Long-Sleeved Pocket Simple Shirt Jacket, Casual Daily Wear, Men\'s Jacket, Men\'s Shirt Jacket, Autumn And Winter Men\'s Jacket, Boyfriend Gift, Go Out Warm Long-Sleeved Casual Corduroy Flannel Jacket Men Shacket Men Shirts Streetwear Streetwear Men Shirts Work Shirt Men Beige Men Shirt Overshirt Men Beige Shirt For Men Beige Men Western Shirts',
    category: 'Men',
    subcategory: 'Jackets',
    price: 364435,
    originalPrice: 437322,
    link: 'https://www.shein.com/a-p-82810577.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/21/9d/176102622577e9968a64c0f134f8a2696368696274_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/21/8f/17610262392c8caaf64645e51afd16d79d7d3d89f8.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 1001
  },
  {
    id: '24654352',
    name: ' Aesthetic Post--Men\'s Long Sleeve Contrast Color Zipper Front Casual Loose Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 364435,
    originalPrice: 437322,
    link: 'https://www.shein.com/a-p-24654352.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/e7/17617948366c2b4563e650b033057a0efe6aedc10d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/ef/17617948522d3de35fdaeec8ac97e04b882c257ed8.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 1001
  },
  {
    id: '123301830',
    name: 'Manfinity Roughcore Men\'s Long Sleeve Single-Breasted Casual Loose Suede Fleece Jacket Brown Jacket Men Cropped Men Jacket Men Mocha Bomber Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 310500,
    originalPrice: 372600,
    link: 'https://www.shein.com/a-p-123301830.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/11/dc/1752215968cfcee9018bae5ce82e074accb175016c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/11/8e/1752215977a1fdf914bcba714ad0215987cbc1979b.jpg'
    ],
    inStock: true,
    rating: 4.63,
    reviews: 61
  },
  {
    id: '143327981',
    name: 'Men\'s Fashionable Retro Long Sleeve Jacket, Corduroy Contrast Color Lapel Casual Loose Fit Workwear Jacket, Suitable For Casual Outings, College Style, Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 337410,
    originalPrice: 404892,
    link: 'https://www.shein.com/a-p-143327981.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/08/13/5b/1755065681cf44910f699672e86249cf65c0f782d1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/08/13/e5/1755065864060ffa57427f2ea494ac87ac8e3ad6f4.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 11
  },
  {
    id: '46928881',
    name: 'Manfinity Homme Men\'s Long Sleeve Solid Color Zippered Stand Collar Casual Outdoor Windbreaker Jacket, Autumn',
    category: 'Men',
    subcategory: 'Jackets',
    price: 512555,
    originalPrice: 615066,
    link: 'https://www.shein.com/a-p-46928881.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/30/fe/17644745727d5c0a9a31bd206ece328495710aa419_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/30/45/1764474580293a2bdf6e3d9101e8f86feedf0339bd.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 1001
  },
  {
    id: '137439814',
    name: 'PAVTROS Manfinity Streetrush Men\'s Patchwork Fleece Lined Baseball Jacket, Long Sleeve Sky Blue Varsity Jacket, Men\'s Letterman Jacket, Fall Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 539465,
    originalPrice: 647358,
    link: 'https://www.shein.com/a-p-137439814.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/26/53/175619029415ad9b3dd3d01e18b93b5f3616db8f2c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/26/64/1756190305f3ee353ec10699bfcd0522bae6a2b0a7.jpg'
    ],
    inStock: true,
    rating: 4.95,
    reviews: 120
  },
  {
    id: '48316666',
    name: 'Manfinity Homme Men\'s Long Sleeve Casual Simple Solid Color Jacket, Autumn, For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 532795,
    originalPrice: 639354,
    link: 'https://www.shein.com/a-p-48316666.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/11/21/81/17321815789110f6304860301e0ab2828dbfcdd43f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/11/21/96/1732181601e2aea9cb20f8400a94b541e0f99268ff.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '123189775',
    name: 'Men\'s Fashion Versatile Chest Embroidered Letter Decor Corduroy Sherpa Reversible Casual Stand Collar Winter Coat, Suitable For Outdoor , Fall Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 923450,
    originalPrice: 1108140,
    link: 'https://www.shein.com/a-p-123189775.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/18/0b/175023105774a150fc3b7d6fc831d1127056eac5d0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/06/18/dd/17502310763a89297d1e990c50da1d657efcb4ea43.png'
    ],
    inStock: true,
    rating: 4.56,
    reviews: 125
  },
  {
    id: '41488593',
    name: 'Manfinity Homme Men\'s Faux Shearling Thermal Lined Jacket, Warm Collar Coat, Going Out Long Sleeve Jacket, For Friends, Husband, Boyfriend Gifts, For Fall Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 889755,
    originalPrice: 1067706,
    link: 'https://www.shein.com/a-p-41488593.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/05/91/17255049556c17bea7eefacdb46348e51ef69cf947_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/05/56/1725504986a9e9a5819bf1dce9a4e836e1b1e5d564.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 1001
  },
  {
    id: '53917120',
    name: 'Men\'s Casual Baseball Collar Lightweight Zipper Jacket, Black Color, For Spring And Summer Everyday, Commuting, Outdoor Use',
    category: 'Men',
    subcategory: 'Jackets',
    price: 303830,
    originalPrice: 364596,
    link: 'https://www.shein.com/a-p-53917120.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/01/07/c3/173623831500a8190eeef33e23a368aba9b32d9d89_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/03/04/de/17410934355fac7746ce08a4beab0e357a20836e98.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 408
  },
  {
    id: '220930167',
    name: 'Manfinity EMRG Men\'s Street-Style Hoodie, Popular Gift Choice For Boyfriend Hoodie Jacket Men S Techwear Men S Street Wear Zip Up Black Hoodie Men Zip Up Boxy Double Zipper Hoodie',
    category: 'Men',
    subcategory: 'Jackets',
    price: 472190,
    originalPrice: 566628,
    link: 'https://www.shein.com/a-p-220930167.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/07/4d/1762479024daf94730ac5ba2656b82939648fbd0f5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/07/69/1762479036a9d788cc6f9fa77c1716a6eee1bab6d4.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 74
  },
  {
    id: '42338363',
    name: 'Manfinity Homme Men Zip-Up Going Out Hooded Black Long Sleeve Light Hooded Outdoor Windbreaker, For Friends, Husband, Boyfriend Gifts, For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-42338363.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/09/16/1725851544c40adcc273012189a8be0de95e1474e5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/09/e1/1725851569f278b6639756a03fd09e157fa2dd2477.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 1001
  },
  {
    id: '24019558',
    name: 'Men Long Sleeve Color Block Embroidery Detail Colorblock Teddy Jacket, For Fall Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 808910,
    originalPrice: 970692,
    link: 'https://www.shein.com/a-p-24019558.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/18/a1/1760752063456afea602bcd54421a60bca26327a0e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/18/13/1760752072a1694e3d2191c2cc13a3781d17e19324.jpg'
    ],
    inStock: true,
    rating: 4.94,
    reviews: 1001
  },
  {
    id: '47598579',
    name: 'Manfinity Homme Men\'s Solid Color Thermal Thermal Lined Casual Bomber Jacket, Versatile Autumn/Winter, Going Out Long Sleeve Baseball Jacket, For Friends, Husband, Boyfriend Gifts',
    category: 'Men',
    subcategory: 'Jackets',
    price: 391345,
    originalPrice: 469614,
    link: 'https://www.shein.com/a-p-47598579.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/11/14/98/17315545519ef45f30813f5d04a31836509ac2f514_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/11/14/8b/173155457456c61ef193ee4242eccbb571142e090a.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 556
  },
  {
    id: '23569834',
    name: 'Manfinity Homme Men Long Sleeve Slogan Graphic Two Tone Varsity Jacket, For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 451950,
    originalPrice: 542340,
    link: 'https://www.shein.com/a-p-23569834.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/10/07/d8/169666928508f804bbb7c5d9c91caf6385140af79f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/09/22/db/169537075313a1be7a33b760f5317569a641f70fc4.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '43528028',
    name: 'Manfinity Mode Men\'s Solid Color Button-Up Collar Long Sleeve Double-Breasted Casual Jacket, Autumn',
    category: 'Men',
    subcategory: 'Jackets',
    price: 755090,
    originalPrice: 906108,
    link: 'https://www.shein.com/a-p-43528028.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/01/e7/17619795146f19080db4f58f3d2bf8c65c5de73cd5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/01/d8/1761979526bb46ed5d0f6997d644b998378f94a687.jpg'
    ],
    inStock: true,
    rating: 4.49,
    reviews: 581
  },
  {
    id: '40484253',
    name: '2024 New Men\'s Long Sleeve Outdoor Casual Thicken Warm Fleece Jacket, Winter, For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 782000,
    originalPrice: 938400,
    link: 'https://www.shein.com/a-p-40484253.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/07/31/61/17224292030b329f06bdd4de5c010eee93dde8a760_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/07/23/ba/1721713690d0ba15608c5ab21ca20b0d2efccb7e56.jpg'
    ],
    inStock: true,
    rating: 4.94,
    reviews: 419
  },
  {
    id: '145938123',
    name: 'Manfinity CasualCool Men\'s Long Sleeve Casual Solid Color Fleece Hooded Jacket, Versatile For Autumn/Winter Fur Hoodie Sherpa Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 606855,
    originalPrice: 728226,
    link: 'https://www.shein.com/a-p-145938123.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/06/32/1754473713a47beeb8e2a34756d018bcc966c9124e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/06/9e/17544737222f3856f486997ca07cee272615c94bf4.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 105
  },
  {
    id: '118567288',
    name: 'Manfinity Homme Men\'s Casual Collegiate Style Floral Print Patchwork Drawstring Hooded Shirt Jacket, Spring/Autumn, Men Plaid Jacket, Black And White Plaid Jacket, Checkered Jacket, Men Winter Jacket, Men Black And White Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 411585,
    originalPrice: 493902,
    link: 'https://www.shein.com/a-p-118567288.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/12/0f/1754967668fd4c38c865a16b3ab5e8519bd5f1c769_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/07/93/1751853062dfcf052fe0f79f2e5c86ac981d4ced9f.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '26475007',
    name: 'DAZY Men\'s Button-Down Collar Cardigan Jacket Fall,Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 532795,
    originalPrice: 639354,
    link: 'https://www.shein.com/a-p-26475007.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/11/14/bd/16999518543358356b46e9873902f9120087d1b04c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/11/14/78/1699951873073595eeadf4436eb726315858244c2a.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '209679653',
    name: 'Manfinity Homme Men\'s Shirt Jacket, Men\'s Front Button Long-Sleeved Pocket Simple Shirt Jacket, Casual Daily Wear, Men\'s Jacket, Men\'s Shirt Jacket, Autumn And Winter Men\'s Jacket, Boyfriend Gift, Go Out Warm Long-Sleeved Casual Corduroy Flannel Jacket Men Overshirt Men Corduroy Shirt Work Jacket Men Shacket Grey Button Up Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 391345,
    originalPrice: 469614,
    link: 'https://www.shein.com/a-p-209679653.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/c8/176049177961268d2fa99e1f057d79aaaf716fa439_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/f7/17604917893f58a9eb7b95c7460afb3e2c8077d086.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 1001
  },
  {
    id: '289511468',
    name: 'Manfinity Mode Men\'s Casual Wool Blend Double-Breasted Long Sleeve Jacket, Autumn/Winter Men Coat Suit Men Grey Coat Mens Classy Clothes Grey Outfit Men Grey Jacket Old Money,Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions, Boyfriend/Husband Gift, Anniversary /Birthday Gift Party Christmas New Years Wedding',
    category: 'Men',
    subcategory: 'Jackets',
    price: 734850,
    originalPrice: 881820,
    link: 'https://www.shein.com/a-p-289511468.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/48/176337069966c4a3087390fd1154f07ea5d907fa5b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/ce/1763370710f3580ebde387ed915a460f7eaa74cc96.jpg'
    ],
    inStock: true,
    rating: 4.62,
    reviews: 153
  },
  {
    id: '207385212',
    name: '1 Piece Men\'s Vintage Worn Full Zipper Lapel Leather Long Sleeve Jacket, Spring Autumn Men\'s Motorcycle Style Casual PU Leather Coat.',
    category: 'Men',
    subcategory: 'Jackets',
    price: 492315,
    originalPrice: 590778,
    link: 'https://www.shein.com/a-p-207385212.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/28/45/1764265145b2508de07cf39ce7ab79bf34856d8297_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/28/de/1764265294487c32f5410a2900bc9cf7aafc31b7e1.png'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 75
  },
  {
    id: '44287055',
    name: 'Manfinity Homme Men\'s Zipper Front Long Sleeve Pocket Casual Outerwear Thermal Lined Jacket, Simple Design For Everyday Wear, For Fall Winter, Corduroy',
    category: 'Men',
    subcategory: 'Jackets',
    price: 775215,
    originalPrice: 930258,
    link: 'https://www.shein.com/a-p-44287055.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/01/10/4a/17365059371d89985590e058e2d3731b80507eba69_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/01/10/c2/173650595323e19d6822c28025bf166b8ba313b8a4.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '212057283',
    name: 'Manfinity CasualCool Men\'s Solid Color Pocket & Button Front Long Sleeve Overcoat, Autumn Fall Going Out Overcoat, For Friends, Husband, Boyfriend Gifts Coat For Men Beige Men Men Beige Coat Men Blazer Jacket Men Coat',
    category: 'Men',
    subcategory: 'Jackets',
    price: 674245,
    originalPrice: 809094,
    link: 'https://www.shein.com/a-p-212057283.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/27/10/1761528960d0e53c62174606b45618b3ea3b3480e2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/27/a2/1761528974eef722ad9268bbacf22c542f5db4713d.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 1001
  },
  {
    id: '47477202',
    name: 'Manfinity Campus Court Men\'s Casual Color Block Front Button Long Sleeve Rave Baseball Jacket, New York Jacket, Graphic Jacket, For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 526010,
    originalPrice: 631212,
    link: 'https://www.shein.com/a-p-47477202.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/10/4a/17627386223fced87f02811057e092a9ce84b8ba3d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/10/ac/1762738626182360496e028848c73b55feedb29f47.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 710
  },
  {
    id: '145934419',
    name: 'Manfinity CasualCool Men\'s Long Sleeve Solid Color Single-Breasted Button Front Casual Jacket Beige , Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 451950,
    originalPrice: 542340,
    link: 'https://www.shein.com/a-p-145934419.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/06/8f/17544736215e2fbf99ce5131aabecc360c11c4d733_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/06/83/1754473631edf2f106233840149e9f25c9493f81b1.jpg'
    ],
    inStock: true,
    rating: 4.67,
    reviews: 34
  },
  {
    id: '170209417',
    name: 'Manfinity Homme Men\'s Solid Color Zip-Up Casual Long Sleeve Jacket, Autumn',
    category: 'Men',
    subcategory: 'Jackets',
    price: 425040,
    originalPrice: 510048,
    link: 'https://www.shein.com/a-p-170209417.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/03/85/1756863759e6c678803a516158b8e492ea4fafe708_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/03/c9/1756863763b4aef49f528a28b01a6d311badb398e2.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 81
  },
  {
    id: '43544811',
    name: 'GALLERY FADE Men\'s Button Front Long Sleeve Pocket Casual Denim Hoodie Jacket, For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 707940,
    originalPrice: 849528,
    link: 'https://www.shein.com/a-p-43544811.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/10/39/1762739768f83294e2e5f73fe89486668d9828adbb_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/10/bc/1762739781b05cbed938d3ed2bfcc95392886c1e9a.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 1001
  },
  {
    id: '22007345',
    name: 'Manfinity Homme Men Plaid Pattern Teddy Jacket, Going Out Colorful Long Sleeve Casual Flannel Jacket, For Friends, Husband, Boyfriend Gifts, For Fall Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 566490,
    originalPrice: 679788,
    link: 'https://www.shein.com/a-p-22007345.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/04/35/1762243111b6851ba84ffc16c490c381416f9617b6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/04/2b/1762243122921b85b459991d93ee2e05e8f2fc10ee.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '106731816',
    name: 'Manfinity Homme Men Black Fabric Bomber Jacket With Long Regular Sleeves And Zipper Closure For Everyday Wear , Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 290260,
    originalPrice: 348312,
    link: 'https://www.shein.com/a-p-106731816.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/24/47/1750737761408f5e3a1b49b25e36f06222cfe27c73_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/24/21/1750737767b11678ceb04750de0ef06a8993255097.jpg'
    ],
    inStock: true,
    rating: 4.71,
    reviews: 90
  },
  {
    id: '125303241',
    name: 'Men\'s Long Sleeve Loose Fit Motorcycle Leather Jacket With Hood, New Autumn/Winter Collection',
    category: 'Men',
    subcategory: 'Jackets',
    price: 889755,
    originalPrice: 1067706,
    link: 'https://www.shein.com/a-p-125303241.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/22/02/17506037334d1cdb75633c952f5f1a6c3d6142f1fc_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/06/22/7c/1750603739bf9a1607aa2d660b25b98b6d6d5e4544.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 24
  },
  {
    id: '192139202',
    name: 'Manfinity Homme Men\'s Solid Color Long Sleeve Lapel Neck Casual Jacket, Autumn/Winter Men Grey Elegant For Men Casual Suits For Men Luxury For Men Fashion Blazer',
    category: 'Men',
    subcategory: 'Jackets',
    price: 714610,
    originalPrice: 857532,
    link: 'https://www.shein.com/a-p-192139202.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/23/ae/1758592291ef195fa32cb7ec33653eb2da66c3f617_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/23/e1/1758592299ed785487d1cab2c606a658092b283394.jpg'
    ],
    inStock: true,
    rating: 4.63,
    reviews: 606
  },
  {
    id: '81468679',
    name: 'Manfinity Homme Men\'s Fashion Button Up Black Jacket, Suitable For Summer, Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 391345,
    originalPrice: 469614,
    link: 'https://www.shein.com/a-p-81468679.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/19/4a/174763224731dd303c5e81137ed6a9a7362bd8d58c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/19/24/1747632253dc516173def0477cfdcc60dcb58a3f36.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 106
  },
  {
    id: '288776856',
    name: 'Manfinity CasualCool Men\'s Casual Fashion Street Simple Solid Color Flap Pocket Shacket, Autumn Men Shirts Streetwear Jackets For Men Long Sleeve Men Overshirt Men Shacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 431710,
    originalPrice: 518052,
    link: 'https://www.shein.com/a-p-288776856.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/fb/17633601194a537c69ec362108837c754d24bc5817_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/bf/1763360130cebbd088acf411881d0d0640faa2d96c.jpg'
    ],
    inStock: true,
    rating: 4.21,
    reviews: 47
  },
  {
    id: '145983121',
    name: 'Men\'s Fashion Tie-Dye Chest Patch Decor Elastic Cuff Outdoor Casual Thermal Lined Warm Stand Collar Faux Fur Long Sleeve Coat, Fall Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 721395,
    originalPrice: 865674,
    link: 'https://www.shein.com/a-p-145983121.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/21/54/1750516611fe5e3622566d9e244da359d3ae2311dc_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/06/21/6f/175051662067b4ca0b2639bdef4078e1f262dc336f.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 171
  },
  {
    id: '49780415',
    name: 'Manfinity CasualCool Manfinity Flap Detail Button Front Flannel Fleece Jacket, Men Front Button Long Sleeve Pocket Simple Jacket, Casual Daily Wear, Autumn And Winter, Boyfriend Gift, For Going Out, Teddy Lined Coat, Streetwear, Street Style American Retro Jacket, Grunge',
    category: 'Men',
    subcategory: 'Jackets',
    price: 620310,
    originalPrice: 744372,
    link: 'https://www.shein.com/a-p-49780415.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/05/cd/1754388992d1eee70bf3e8a7b35d4239bb19f1083b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/05/f0/1754388999f3ddf42575d425fc416374524a6210c7.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 411
  },
  {
    id: '39308008',
    name: 'Manfinity Homme Men Spring And Autumn Solid Color White Zipper Front Long Sleeve Motorcycle Jacket,Men Jacket,Winter Jacket,Fall Men Going Out Casual Motorcycle Jacket, For Friends, Husband, Boyfriend Gifts, Old Money Style',
    category: 'Men',
    subcategory: 'Jackets',
    price: 579945,
    originalPrice: 695934,
    link: 'https://www.shein.com/a-p-39308008.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/07/24/78/1721808903d290d1d683989fc454ba1152d5ac0b47_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/07/24/38/17218089270b2822f84148fa4461f6e55c5463140c.jpg'
    ],
    inStock: true,
    rating: 4.74,
    reviews: 715
  },
  {
    id: '41054111',
    name: 'Manfinity Homme Men\'s Casual Solid Color Short Style Jacket, Autumn , Red Winter Men Jacket, Fall , Men\'s Long Sleeve Zip Up Jacket, Burgundy Jacket Men, Christmas',
    category: 'Men',
    subcategory: 'Jackets',
    price: 445280,
    originalPrice: 534336,
    link: 'https://www.shein.com/a-p-41054111.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/12/26/1b/173517918687f4e418accfb1233cd0b6f062044da2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/06/1c/1725599775c3b978e09062245ce3b0e76accea35bd.jpg'
    ],
    inStock: true,
    rating: 4.77,
    reviews: 810
  },
  {
    id: '49865126',
    name: 'Manfinity CasualCool Men\'s Long Sleeve Autumn Color Block Single Breasted Pocket Casual Jacket , Men\'s Long Sleeve Casual Metal Buckle Front Pocket Corduroy Texture Shirt Style Jacket INS Best-Selling Casual Elegant Jacket Suitable For Spring And Autumn',
    category: 'Men',
    subcategory: 'Jackets',
    price: 418255,
    originalPrice: 501906,
    link: 'https://www.shein.com/a-p-49865126.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/12/db/1757659777f25157063e5bf3950838a24e831af1c5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/12/ef/17576597910f60b91890c3cf48cec1ba78615f441e.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 677
  },
  {
    id: '40375769',
    name: 'DAZY Men\'s Solid Color Loose Fit Casual Cardigan, Autumn Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 526010,
    originalPrice: 631212,
    link: 'https://www.shein.com/a-p-40375769.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/08/09/18/172316873523dcbba53a9c1a9c04b06b44aa477cc2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/08/09/68/1723168769da13d68ef3b5ddddc2718ceb3f6b49b6.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '39309723',
    name: 'Manfinity Homme Men Long Sleeve Work Going Out Hooded Black Sherpa Jacket, Outdoor Windbreaker For Friends, Husband, Boyfriend Gifts',
    category: 'Men',
    subcategory: 'Jackets',
    price: 714610,
    originalPrice: 857532,
    link: 'https://www.shein.com/a-p-39309723.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/27/52/17274271770c5644b9e29af779e48e237819db4aee_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/07/24/70/1721801705f66ac176c8e5dddb38a92fd2411484e7.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 314
  },
  {
    id: '93952186',
    name: 'Men Long Sleeve Casual Hooded Jacket Lightweight Zip-Up Windbreaker With Drawstring & Pockets Outdoor Activities, Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 465405,
    originalPrice: 558486,
    link: 'https://www.shein.com/a-p-93952186.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/05/23/0d/174798121192c3617f9836b7f2218e680c4314bacb_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/07/25/6a/1753431935e1a07e30aa80586604bdf043f2a05a97.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 101
  },
  {
    id: '328345977',
    name: 'Sport MetroGents Men\'s Letter Print Long Sleeve Sports Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 297045,
    originalPrice: 356454,
    link: 'https://www.shein.com/a-p-328345977.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/17/9b/1765970272b4760ccd805e4b6e9e37d7c3053ecfdb_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/17/6d/17659702830313f78468e94ecde81babf0eb6e32e5.jpg'
    ],
    inStock: true,
    rating: '4.5',
    reviews: 19
  },
  {
    id: '45203798',
    name: 'Calvornis Men\'s Autumn Casual Shawl Collar Double-Breasted Long Sleeve Black Jacket ,Fall And Winter Men ,Men Jacket. Going Out Light Jacket, For Friends, Husband, Boyfriend Gifts',
    category: 'Men',
    subcategory: 'Jackets',
    price: 532795,
    originalPrice: 639354,
    link: 'https://www.shein.com/a-p-45203798.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/10/18/57/172922072022b1684d9e1539c3318070d45a2dc372_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/10/18/08/17292207453b7ccbd6bb40cc91b4f7d817969f2b74.jpg'
    ],
    inStock: true,
    rating: 4.69,
    reviews: 148
  },
  {
    id: '181207719',
    name: 'Calvornis Men\'s Front Button Long Sleeve Pocket Casual Going Out Business Overcoat, For Friends, Husband, Boyfriend Gifts, Men Black Overcoat, Men Double Breasted Coat, Men Belted Coat Men Long Coat Men Outerwear Overcoat Classy Church Elegant , Fall/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 660790,
    originalPrice: 792948,
    link: 'https://www.shein.com/a-p-181207719.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/27/43/17589556881d579937149971116e99df5ca58e5d02_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/27/17/1758955698506c56e0250569e8aa0f3dd89fb7fcdc.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 1001
  },
  {
    id: '40210978',
    name: '1pc Men\'s Long Sleeve Fleece Thick Zip-Up Hooded Casual Knitted Jacket, Fall/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 371105,
    originalPrice: 445326,
    link: 'https://www.shein.com/a-p-40210978.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/10/18/3c/1729241971ece12f3b8e4f245ccd0d859a40e36f1f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/07/18/bd/1721314909eada123db9f653e3eaf5b21e4eddd8e2.png'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '27064846',
    name: 'Manfinity Homme Loose Fit Men\'s Long Sleeve Corduroy Letter Patched Thermal Lined Jacket, Fall Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 768545,
    originalPrice: 922254,
    link: 'https://www.shein.com/a-p-27064846.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/12/6e/1762932684c01c47cb1c5bbdda1c322e58f7b59b40_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/12/49/1762932693acacb4bac076524389e22a9cd8d853fd.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '20700225',
    name: 'Men\'s Long Sleeve Casual Patchwork Hooded Drawstring Jacket , Spring/Autumn Outerwear',
    category: 'Men',
    subcategory: 'Jackets',
    price: 519340,
    originalPrice: 623208,
    link: 'https://www.shein.com/a-p-20700225.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/10/09/b7/17284523147e2846913318ee5f53df9e5580196dab_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/08/01/1690889833d0fef90756cbe4f14f41fa1bb44c71db.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 1001
  },
  {
    id: '223201426',
    name: 'Manfinity CasualCool Men\'s Solid Color Zip-Up Casual Jacket, Autumn/Winter Men Zip Up Shirt Crop Jacket For Men Jackets For Men Long Sleeve Men Sweater Jacket Men Jackets Casual',
    category: 'Men',
    subcategory: 'Jackets',
    price: 411585,
    originalPrice: 493902,
    link: 'https://www.shein.com/a-p-223201426.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/8f/1760693442891cd7402ebefcb67d7221d2fcd17f92_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/e3/1760693456f73cef3f73d32884b9db11706f3f5e75.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: '289545651',
    name: 'Manfinity Mode Men\'s Casual Solid Color Wool Blend Jacket, Autumn/Winter Men Dressed Wear Brown Cashmere Mens Clothing Overcoat Men Fall Clothes For Men Winter Outfits For Men Old Money,Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions, Boyfriend/Husband Gift, Anniversary /Birthday Gift Party Christmas New Years Wedding',
    category: 'Men',
    subcategory: 'Jackets',
    price: 748305,
    originalPrice: 897966,
    link: 'https://www.shein.com/a-p-289545651.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/24/9b/1766541025aff884a860f0973e0e4d7ebaf044c6bd_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/24/f0/1766541034fab85d5d8e0c79e1665d451e957b74f7.jpg'
    ],
    inStock: true,
    rating: 4.62,
    reviews: 153
  },
  {
    id: '296851455',
    name: 'Manfinity CasualCool Men Solid Color Casual Jacket, Suitable For Autumn And Winter Sky Blue Button Shirt Men Light Blue Jacket Men Baby Blue Men Outfit Men Shacket Powder Blue Shirt Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 465405,
    originalPrice: 558486,
    link: 'https://www.shein.com/a-p-296851455.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/87/1763687922964c58e22be7df458d8bf1eff52ac5cb_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/75/176368793606a9f3f08a8aad5f10760ee2d90a1c1b.jpg'
    ],
    inStock: true,
    rating: 4.77,
    reviews: 160
  },
  {
    id: '231102015',
    name: 'Men\'s Autumn/Winter Corduroy Long Sleeve Jacket, Casual & Fashionable Thermal Lined Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 532795,
    originalPrice: 639354,
    link: 'https://www.shein.com/a-p-231102015.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/18/bc/17607990795078653173e4f46a0b7337f30d274351_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/18/b9/176079909226d94d5277c4b2e40986fd1ef64771cc.jpg'
    ],
    inStock: true,
    rating: 4.69,
    reviews: 13
  },
  {
    id: '123225706',
    name: 'Men\'s Long Sleeve Casual Letter Graphic Simple Fashionable Turndown Collar Printed Jacket , Spring Autumn, Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 337410,
    originalPrice: 404892,
    link: 'https://www.shein.com/a-p-123225706.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/04/29/15/1745908720fd70ddbb71e0a87fa9ab77ca62ee409c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/04/29/da/1745908740447bdf16395ef78c0c85d7e799eb3fd6.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 20
  },
  {
    id: '217338427',
    name: 'PAVTROS Men\'s Autumn Letter Graphic Zip-Up Casual Corduroy Long Sleeve Jacket, Y2k Letter & Figure Graphic Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 472190,
    originalPrice: 566628,
    link: 'https://www.shein.com/a-p-217338427.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/07/1760491046fb756b4c448b2378befc07aaf44ec0a1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/35/176049106456f3d224bbf8d2be76f64b205c129fc4.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 36
  },
  {
    id: '288775964',
    name: 'Manfinity CasualCool Men\'s Casual Fashion Street Simple Solid Color Flap Pocket Shacket, Autumn Men Overshirt Men Street Wear Shirt Men Shacket Grey Jacket Grey Button Up Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 411585,
    originalPrice: 493902,
    link: 'https://www.shein.com/a-p-288775964.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/19/1763360109f62d1ff78c70c5612fb18f712f4ea373_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/8c/1763360121691720e1459cfa21869c114661d72ed4.jpg'
    ],
    inStock: true,
    rating: 4.21,
    reviews: 47
  },
  {
    id: '47898491',
    name: 'Manfinity Homme Men\'s Casual Minimalist Style Jacket, For Everyday Wear, Men Jacket, Suitable For Christmas, New Year Holidays, Parties, Dinners, Fall And Winter Men Urban Warm Jacket Plaid Colorful Long Sleeve Americana Jacket, For Friends, Husband, Boyfriend Gifts',
    category: 'Men',
    subcategory: 'Jackets',
    price: 485645,
    originalPrice: 582774,
    link: 'https://www.shein.com/a-p-47898491.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/28/97/1761616974fc9e5ed0dc159aaa2bae0952fec22ae3_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/28/37/17616169839bb5696297563f9921f7db1f00da4acc.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 797
  },
  {
    id: '53604182',
    name: 'RivetRise Men\'s Dark Grey Washed Loose Casual Short Cropped Denim Classic Jacket Going Out Hang Out College Street Work',
    category: 'Men',
    subcategory: 'Jackets',
    price: 613640,
    originalPrice: 736368,
    link: 'https://www.shein.com/a-p-53604182.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/01/15/80/1736904670739a07298adc3b08d406058a3631c8d1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/01/15/19/1736904684ee234c30d68ce7ebf0b53c5a0a415052.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 224
  },
  {
    id: '225083129',
    name: 'Manfinity Homme Men\'s Hooded Solid Color Zip-Up Long Sleeve Padded Coat, Winter Winter Jacket For Men Men Outerwear Men Fur Lined Jacket Thermal Lined Men Jacket Men Red Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 734850,
    originalPrice: 881820,
    link: 'https://www.shein.com/a-p-225083129.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/29/1760943438889938cb55169cb22ef2251ab5858f29_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/9a/176094344727b9b2792cddce717ac40936850b2e1f.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '213773095',
    name: 'Manfinity Homme Men\'s Loose Fit Plaid Fleece Long Sleeve Single Breasted Casual Jacket, Autumn Winter,Men Flannel,Winter Men Jacket Men Knitted Button Up Men Shacket Men Flannels Black And White Jacket Plaid Jacket Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 579945,
    originalPrice: 695934,
    link: 'https://www.shein.com/a-p-213773095.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/13/8e/1760318187350a2b76c0ddaa6dbb7d88df686abeef_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/13/5b/1760318200908ac0441517c846ad1c28df9b502412.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 409
  },
  {
    id: '81497043',
    name: 'Men\'s Casual Letter Print Long Sleeve Jacket, Spring/Autumn Street Style Racing Jacket, Black Motorcycle Jacket, Long Sleeve Outgoing Designer Bomber Jacket, Street Style Version, Gift For Friends, Husband, Boyfriend',
    category: 'Men',
    subcategory: 'Jackets',
    price: 539465,
    originalPrice: 647358,
    link: 'https://www.shein.com/a-p-81497043.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/21/21/17530762759dc183d4bf113ff93896d8552cbe1adb_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/05/10/88/17468601985ee8e2aaff835d513f45c6e0a6a3d8e3.jpg'
    ],
    inStock: true,
    rating: 4.98,
    reviews: 63
  },
  {
    id: '134785727',
    name: 'Manfinity EMRG Men\'s Letter Graphic Long Sleeve Zip Front Casual Track Jacket, Fall Outdoor Windbreaker',
    category: 'Men',
    subcategory: 'Jackets',
    price: 310500,
    originalPrice: 372600,
    link: 'https://www.shein.com/a-p-134785727.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/25/ba/1753372937c3ab4bbbeb59c9f271bdd2fe07e0f618_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/25/e0/175337294834793150fc6684663d29a654d49eb12f.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 48
  },
  {
    id: '44874190',
    name: 'Manfinity Mode Men\'s Solid Color Zip Front Casual Loose Jacket, Autumn, Old Money Style',
    category: 'Men',
    subcategory: 'Jackets',
    price: 808910,
    originalPrice: 970692,
    link: 'https://www.shein.com/a-p-44874190.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/12/03/be/17332226718c7958543bb6bcd069775f2eea6e1303_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/10/08/9d/172835686949f4b5c813d7ec45fada18be79cb93cb.jpg'
    ],
    inStock: true,
    rating: 4.71,
    reviews: 1001
  },
  {
    id: '45490098',
    name: 'Men\'s Long Sleeve Zipper Open Front Hooded Winter Coat , Warm, Loose, Lightweight , For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 930120,
    originalPrice: 1116144,
    link: 'https://www.shein.com/a-p-45490098.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/09/13/d0/17262142145b03734bcccb3d885c012ff5355f1961_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/07/31/bb/1753962403bc3d8ef3fbf1fba03cb1289002816bf5.png'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 264
  },
  {
    id: '210360478',
    name: 'Manfinity Homme Men\'s Fashionable Versatile Thermal Lined Long Sleeve Jacket, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 694485,
    originalPrice: 833382,
    link: 'https://www.shein.com/a-p-210360478.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/31/17600045632ce4c806e3d249e583ee5dca63480065_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/3e/176000457485484e87e41ae8bebf7255b55f5da068.jpg'
    ],
    inStock: true,
    rating: 4.61,
    reviews: 71
  },
  {
    id: '137341803',
    name: 'Manfinity EMRG Men\'s Casual Loose Fit Drop Shoulder Jacket Grey Jacket Men Grey Grey Zip Up Jacket Grey Jacket Grey Shacket Fashion Jacket, Light Grey Jacket, Grey Jacket, Jacket, Old Money Style Fleece',
    category: 'Men',
    subcategory: 'Jackets',
    price: 654005,
    originalPrice: 784806,
    link: 'https://www.shein.com/a-p-137341803.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/28/32/175368619037803762307400e3d8757a841c8bcb3f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/28/e6/17536861999661d1f7aba8a2cebc7aa822dc44e246.jpg'
    ],
    inStock: true,
    rating: 4.51,
    reviews: 117
  },
  {
    id: '41115507',
    name: 'Manfinity EMRG Men\'s Casual Letter Print Rave Long Sleeve Jacket, Spring And Autumn Going Out Color Block Lightweight Jacket, For Friends, Husband, Boyfriend Gifts, For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 357650,
    originalPrice: 429180,
    link: 'https://www.shein.com/a-p-41115507.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/08/21/f8/1724205389a3402130b87b9cf038d2c843d82c5985_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/08/21/16/1724205410214a51fa45e42888c31a150950cbe8b2.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 378
  },
  {
    id: '133803497',
    name: 'DAZY Men\'s Solid Blue Denim Jacket, Autumn',
    category: 'Men',
    subcategory: 'Jackets',
    price: 687700,
    originalPrice: 825240,
    link: 'https://www.shein.com/a-p-133803497.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/24/f5/1753325983bc2513dd079a5bf81fa21c8180b01128_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/24/b6/17533259931fcfa8560470a9c1f0c9533cf20b8ae5.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 131
  },
  {
    id: '139042244',
    name: 'Manfinity CasualCool Men\'s Long Sleeve Embellished Zipper Collar Casual Bomber Jacket, Old Money , Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 472190,
    originalPrice: 566628,
    link: 'https://www.shein.com/a-p-139042244.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/23/ff/1758605052a1061363490371af7c447345c14b00c5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/23/62/17586050590ef402904ffde600baf6d3173cde1799.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 12
  },
  {
    id: '209659424',
    name: 'Manfinity Homme Men\'s Casual Solid Color Fuzzy Fleece Long Sleeve Jacket For Autumn/Winter, Winter Green Button Up Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 505885,
    originalPrice: 607062,
    link: 'https://www.shein.com/a-p-209659424.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/6e/1759988359fa20945f040c1e24f91d5efafebfe57a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/63/17599883678c76e166809b09280c4dee82b42d1926.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 834
  },
  {
    id: '288043081',
    name: 'Manfinity Homme Men\'s Short Casual Knitted Jacket,Fall Men Clothes,Winter Men Coat,Green Coat Jacket For Man Men Shacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 431710,
    originalPrice: 518052,
    link: 'https://www.shein.com/a-p-288043081.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/15/c3/1763205612fddfa220cb15aefeb69e11f775296924_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/15/c5/1763205622cee2e66c0be1cacc95efd37ae8e23e18.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 433
  },
  {
    id: '218793933',
    name: 'PAVTROS Men\'s Fleece Casual Versatile Embroidered Detail Thermal Lined Jacket, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 438495,
    originalPrice: 526194,
    link: 'https://www.shein.com/a-p-218793933.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/3c/1760519691283f43d56e024fc2b18f616407bfeb6e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/cc/176051970861c3e74764204a4d6fc14c2d0079f9fa.jpg'
    ],
    inStock: true,
    rating: 4.73,
    reviews: 628
  },
  {
    id: '327349353',
    name: 'Adidas Spring & Autumn Casual Comfortable Printed Sports Hooded Jacket For Men, IM9878',
    category: 'Men',
    subcategory: 'Jackets',
    price: 2311385,
    originalPrice: 2773662,
    link: 'https://www.shein.com/a-p-327349353.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/10/94/1765354321f7cc1710f8a7f478a052fd52c716c375_square_thumbnail_405x552.jpg'
    ],
    inStock: true,
    rating: '4.8',
    reviews: 137
  },
  {
    id: '66013235',
    name: 'Men\'s Comfy Lapel Jackets - Soft Solid Colour, Zipper Closure, Long Sleeve, Business Style, Casual Wear For Outdoor Activities, Versatile And Breathable',
    category: 'Men',
    subcategory: 'Jackets',
    price: 243110,
    originalPrice: 291732,
    link: 'https://www.shein.com/a-p-66013235.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/09/34/1765285276aede3fd40389190dd5932071ee70e33b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/09/75/1765285281ac90cac1874f8a124bf9a085a64378ee.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '139670718',
    name: '1pc Men\'s Hooded Sherpa Fleece Sweatshirt, Thick Warm Sweatshirt Jacket, Sports Casual Outdoor Wear, Christmas Gift',
    category: 'Men',
    subcategory: 'Jackets',
    price: 364435,
    originalPrice: 437322,
    link: 'https://www.shein.com/a-p-139670718.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/01/e9/1761998125d94fbc5ab65eed05ad632c7608da3b5d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/10/14/86/1760423962db3e1a925477559e5256258b2d6b3906.png'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 334
  },
  {
    id: '222764713',
    name: 'Manfinity Homme Men\'s Solid Color Raglan Sleeve Casual Zip-Up Fashion Jacket Men Zip Up Shirt Beige Men Jacket Men Summer Jacket Cream Men Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 418255,
    originalPrice: 501906,
    link: 'https://www.shein.com/a-p-222764713.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/b8/17604918304b4f3d4b6eafb47455399a866209440f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/31/1760491836bc9333c2e3cc891eb14100768242b083.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 81
  },
  {
    id: '43823652',
    name: 'Manfinity EZcore Men\'s Letter Print Contrast Color Long Sleeve Casual Thermal Lined Baseball Jacket, Autumn, Black Rave Varsity Jacket, Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 499100,
    originalPrice: 598920,
    link: 'https://www.shein.com/a-p-43823652.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/27/d6/1727420817c5ffc92ac501d7c0c076381b238f6caf_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/27/45/172742083951f999a8936140b04b36e4fa9e5443c1.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 914
  },
  {
    id: '44677719',
    name: 'PAVTROS Manfinity Streetrush Men Long Sleeve Street Flame Pattern Winter Coat, Gift For Boyfriend, Streetwear, For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 734850,
    originalPrice: 881820,
    link: 'https://www.shein.com/a-p-44677719.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/12/31/b0/1735610898d90735b7ee22b17b24df7388fc161d61_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/12/31/09/1735610926d7c9224d7e77a3ff75370eee69692620.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 257
  },
  {
    id: '65676434',
    name: 'Men\'s Casual Warm Jacket, Outdoor Tactical Multi-Function Windbreaker',
    category: 'Men',
    subcategory: 'Jackets',
    price: 788785,
    originalPrice: 946542,
    link: 'https://www.shein.com/a-p-65676434.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/12/e5/17629154304b48e3e7f4618151b19f422fb8c76468_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/12/c6/17629154359767108da0ad43052a197ead8ef89df8.jpg'
    ],
    inStock: true,
    rating: '4.6',
    reviews: 131
  },
  {
    id: '43586358',
    name: 'Men Casual Graphic Printed Zipper Pockets Spring Autumn Rave Jacket For Traveling, Camping And Outdoor Activities, Emo, 2000s Style, Grunge',
    category: 'Men',
    subcategory: 'Jackets',
    price: 337410,
    originalPrice: 404892,
    link: 'https://www.shein.com/a-p-43586358.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/09/23/f4/17270919900b8142fd0a206634ecb5a187158bc51d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/07/20/c8/172145492428ad44eafa26fd72cd85cc5075f260e6.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 131
  },
  {
    id: '213755115',
    name: 'Manfinity Roghcode Men\'s Contrast Color Zip-Up Long Sleeve Jacket Motorsport Jacket Racing Shirt Race Jacket Racing Jacket Speed Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 458735,
    originalPrice: 550482,
    link: 'https://www.shein.com/a-p-213755115.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/13/e0/1760319322984b4cbe91a4dc7d976062052c139768_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/13/d6/17603193360c9d5401415710b92b7388253feed697.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 351
  },
  {
    id: '240766257',
    name: 'This Men\'s Hoodie Features A Zipper Design, A Closed Hem, And A Drawstring. It Has A Solid Color Design And A Long Sleeve Style. Suitable For Graduation Season, Collegiate/Street Style, And Can Also Be Paired With Autumn Hoodies. It Is An Ideal Choice For Autumn Wear.',
    category: 'Men',
    subcategory: 'Jackets',
    price: 243110,
    originalPrice: 291732,
    link: 'https://www.shein.com/a-p-240766257.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/06/6f/1762424299e1b581add9be7774a7a555afbbd0bfdc_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/10/17/9a/1760695019f6c81790b97cfc34da6295c43b30c3de.png'
    ],
    inStock: true,
    rating: 5,
    reviews: 2
  },
  {
    id: '63767037',
    name: 'Manfinity Dauomo Men\'s Camo Print Raglan Sleeve Zipper Front Hooded Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 357650,
    originalPrice: 429180,
    link: 'https://www.shein.com/a-p-63767037.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/03/31/fd/1743412505f32f3c93ceae8cb39b86ad8657717447_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/03/31/b8/1743412512e81b65cc860406142b2cbf6b1b3c1eac.jpg'
    ],
    inStock: true,
    rating: 4.55,
    reviews: 385
  },
  {
    id: '44946673',
    name: 'Men Long Sleeve Vintage American Style Denim Jacket , For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 694485,
    originalPrice: 833382,
    link: 'https://www.shein.com/a-p-44946673.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/26/57/17614743499a8331436665140cdddf005e797ead92_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/26/ab/176147439306ef2037fc62722f73691a168d878e84.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 663
  },
  {
    id: '262882525',
    name: 'Men\'s Casual Coffee Color Corduroy Collar Warm Thermal Lined Jacket, Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 579945,
    originalPrice: 695934,
    link: 'https://www.shein.com/a-p-262882525.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/20/3b/176096913192f1a1466d150c0b1a10691edb34a4f8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/20/98/17609691385af5194417572c700065f16351c13e3a.jpg'
    ],
    inStock: true,
    rating: '4.5',
    reviews: 50
  },
  {
    id: '224897290',
    name: 'Manfinity Roghcode Men\'s Casual Loose Fit Drop Shoulder Long Sleeve Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 701155,
    originalPrice: 841386,
    link: 'https://www.shein.com/a-p-224897290.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/fc/17609396012641b3cd2050d321ef9fc2cb7ff39e9b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/d4/1760939617d8ec0d5d7a227353e1a35ddcf8bfc32b.jpg'
    ],
    inStock: true,
    rating: 4.51,
    reviews: 117
  },
  {
    id: '260613657',
    name: 'Manfinity Homme Men\'s Casual Zip-Up Hooded Long Sleeve Jacket Pink Jacket Men Pink Hoodie For Men Jacket For Man Pink Zip Up Men Color Waterproof Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 350980,
    originalPrice: 421176,
    link: 'https://www.shein.com/a-p-260613657.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/10/fc/176533733255e1acc65902121405a6210ebc5a55b0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/04/a3/1762222183af307c4e23dc4212df3e84bc54a6c052.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 1001
  },
  {
    id: '166796657',
    name: 'Unisex American Style Zip-Up Hoodie Sweatshirt, Casual Jacket, Versatile, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 546365,
    originalPrice: 655638,
    link: 'https://www.shein.com/a-p-166796657.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/spmp/2025/08/29/97/1756433535430e1400927c722230e63d1e350724ae_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/01/9d/176197855338d64382028f64c643ef8c87a1397e2d.png'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 111
  },
  {
    id: '156564054',
    name: 'PAVTROS Manfinity Streetrush Men\'s Long Sleeve Paratrooper Camouflage Patchwork Hooded Jacket, Casual Loose Streetwear Vintage American Style, Autumn/Winter Men Windbreaker Jacket Rain Jacket Digital Camo Jacket Camo Windbreaker Men Camo Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 566490,
    originalPrice: 679788,
    link: 'https://www.shein.com/a-p-156564054.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/18/66/17554960281a952b4f0920c4c8b0d285f5f59c2e24_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/18/90/175549604133a7d78ca5172b630afade528072b307.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 58
  },
  {
    id: '208699444',
    name: 'Men\'s Autumn/Winter Outdoor Casual Sports Fashion Big Pocket Detachable Hood Thick Thermal Lined Jacket, Suitable As Gift For Boyfriend, Husband, Father',
    category: 'Men',
    subcategory: 'Jackets',
    price: 788785,
    originalPrice: 946542,
    link: 'https://www.shein.com/a-p-208699444.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/09/64/1759942493900c092376ce900a6681aced7cf5298d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/09/06/1759942743f31891f4b9210a70c0c841326e10a42f.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 88
  },
  {
    id: '214819233',
    name: 'Men\'s Casual Thick Hooded Jacket With Pockets And Zipper, Polyester Fabric, Long Sleeve, Loose Fit, Solid Color, Suitable For Casual Occasions In Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 957145,
    originalPrice: 1148574,
    link: 'https://www.shein.com/a-p-214819233.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/10/33/1765348223188f310a5ee55358b1bccc2ae6855ada_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/10/75/17653482364cfae7be044645c28455655b3e143b77.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 80
  },
  {
    id: '211414102',
    name: 'PAVTROS Plus Size Men\'s Zebra Print Long Sleeve Zip-Up Fuzzy Jacket, Autumn/Winter Camo Zip Up Men S Sweater Fleece Jacket Jacket Graphic Graphic Jacket Zip Up',
    category: 'Men',
    subcategory: 'Jackets',
    price: 647335,
    originalPrice: 776802,
    link: 'https://www.shein.com/a-p-211414102.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/10/d7/1760094580103588b4fc646d4b28e5b9e1127debc6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/10/f4/176009459518257b565043d7df5215f0ba240d9d0d.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 36
  },
  {
    id: '313120545',
    name: 'Men\'s Jacket With Hooded Design, Convenient Zipper Closure, Simple Yet Layered Style. Overall Slim Fit, Suitable For Daily Outings, Casual Gatherings And More Occasions.',
    category: 'Men',
    subcategory: 'Jackets',
    price: 425040,
    originalPrice: 510048,
    link: 'https://www.shein.com/a-p-313120545.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/20/b1/1766201631cae1efc251027f343b52829cab5e1659_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/20/ca/1766201643bcf22c8a1562bf33b09edb0feb1dc653.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 6
  },
  {
    id: '25969446',
    name: 'Manfinity LEGND Loose Fit Men\'s Letter Printed Collar Jacket, For Fall Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 526010,
    originalPrice: 631212,
    link: 'https://www.shein.com/a-p-25969446.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/11/17/d6/1700211732cbf3ffdbc62f3a468c76bfb2d34a8e94_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/11/06/df/1699252053f6d3f8e733d796f1f4fd8ad5ff9e8f12.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 309
  },
  {
    id: '42691259',
    name: 'Manfinity EZcore Men\'s Long Sleeve Casual Zip-Up Contrast Color Drawstring Mock Neck Jacket, Spring Autumn Outdoor Windbreaker, For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-42691259.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/13/6f/1726194714e2ead28739764dd88ec6a13b1dd07cd9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/13/06/172619472905285a2de7de5ce8dea9b7e181dda913.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 436
  },
  {
    id: '211202878',
    name: 'Men\'s Casual Sports Sweatshirt - Solid Color, Long Sleeve, Knit Fabric, H-Fit, For Hiking & Outdoor Activities, Polyester, Round Neck, Athletic Style Top For Fall/Winter Season',
    category: 'Men',
    subcategory: 'Jackets',
    price: 270135,
    originalPrice: 324162,
    link: 'https://www.shein.com/a-p-211202878.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/03/c7/17647305965716e0b93a26776b8e67de11beae5782_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/09/25/bb/17587739026b274107ecd64474dc805cf59942033b.png'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 412
  },
  {
    id: '222192527',
    name: 'Manfinity CasualCool Men\'s Warm Fleece Zip-Up Hooded Long Sleeve Jacket, Autumn/Winter Black Jacket For Outerwear Men Jacket Winter Designer Jacket Men Black Hoodie Men Zip Up Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 573160,
    originalPrice: 687792,
    link: 'https://www.shein.com/a-p-222192527.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/af/176069353818ccdaa22e88694c59a0f06e4c632024_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/b5/1760693548d0de5ff9de16291cc5872bd67c653a6c.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 105
  },
  {
    id: '176318195',
    name: 'Men\'s Thick Fleece Jacket For Winter, With Pockets, Warm And Windproof, Suitable For Outdoor, Travel, Running And Daily Wear, Comfortable And Breathable',
    category: 'Men',
    subcategory: 'Jackets',
    price: 411585,
    originalPrice: 493902,
    link: 'https://www.shein.com/a-p-176318195.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/12/89/176025169488d50d81065a0f15391841302917cb80_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/10/16/43/1760597225fa90e4e993814bc9053962e655af1144.png'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 106
  },
  {
    id: '21783838',
    name: 'Manfinity Homme Loose Fit Men\'s Letter Patched Thick Fleece Lined Padded Vest Jacket, Black Vest Gilet ,Outerwear, For Fall Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 465405,
    originalPrice: 558486,
    link: 'https://www.shein.com/a-p-21783838.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/04/19/dc/1713484833b627c9602e5b525bda3d9402a9592dcb_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/10/28/2b/1698498022e82e83be4701d1906a2c3f22274e15dd.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 1001
  },
  {
    id: '309817238',
    name: 'Manfinity CasualCool Men\'s Solid Color Hooded Zipper Pocket Long Sleeve Jacket Green Zip Up Hoodie Olive Hoodie For Men Green Hoodie For Men Green Sweater Men Green Jacket Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 532795,
    originalPrice: 639354,
    link: 'https://www.shein.com/a-p-309817238.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/6c/1764321113ee10867d8682f90a474119442da3cb3e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/7b/17643211227c2ec21bc4220316be5327e523685f79.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 93
  },
  {
    id: '229469069',
    name: 'Manfinity Homme Men\'s Casual Lightweight Long Sleeve Jacket, Suitable For Everyday Casual Wear, Commuting, Street Fashion, Ideal For Spring And Autumn. This Jacket Is An Indispensable Versatile Item In A Man\'s Wardrobe, Making It A Great Gift For A Boyfriend Or Husband. Men Street Wear Zip Up Loose Fit Jacket Sweater Jacket Zip Up Jacket Men Streetwear Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 478860,
    originalPrice: 574632,
    link: 'https://www.shein.com/a-p-229469069.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/8e/176334335483e4de8ac692ad195e9a44e22ada7572_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/21/dc/1761051384387b6966d95afba92267bc3201c3215d.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 1
  },
  {
    id: '228923068',
    name: 'Plus Size Men\'s Hooded Windbreaker Loose Long Sleeve Coat With Drawstring Casual Solid Color Mid-Length With Pocket Versatile For Spring/Autumn, Daily Wear, Going Out Outdoor Camping Hiking Coat',
    category: 'Men',
    subcategory: 'Jackets',
    price: 512555,
    originalPrice: 615066,
    link: 'https://www.shein.com/a-p-228923068.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/14/97/176040884256535c3ed9c114bb4966a0718cec511c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/14/f6/1760408848902e301882a43c3840040c4d6bcf6632.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 30
  },
  {
    id: '225293518',
    name: 'Manfinity CasualCool Men\'s Casual Solid Color Long Sleeve Jacket, Versatile For Autumn/Winter Men Jacket Men Zip Up Black Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 505885,
    originalPrice: 607062,
    link: 'https://www.shein.com/a-p-225293518.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/9f/1760952230a66cb8e9501934fd52e10c31083eb628_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/45/176095224258eb0bc4399df4f8523b61f0f0bdd23c.jpg'
    ],
    inStock: true,
    rating: 4.54,
    reviews: 22
  },
  {
    id: '250042125',
    name: 'Manfinity CasualCool Men\'s Casual Solid Color Jacket, Versatile For Spring And Autumn Black Shacket Men Button Up Jacket Men Men Shacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 465405,
    originalPrice: 558486,
    link: 'https://www.shein.com/a-p-250042125.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/08/1761793720d86ccf9ecc30d5918400a1ed18c4aa73_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/eb/17617937323a909499c7b33619b83a33ea0ce8f884.jpg'
    ],
    inStock: true,
    rating: 4.94,
    reviews: 38
  },
  {
    id: '281828179',
    name: 'Manfinity Homme Men\'s Casual Versatile Solid Color Suede Fleece Jacket, Autumn',
    category: 'Men',
    subcategory: 'Jackets',
    price: 431710,
    originalPrice: 518052,
    link: 'https://www.shein.com/a-p-281828179.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/11/6e/1762872277d3d6e2ee159549e03ff57e7babc30c6f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/11/2b/1762872284d04600cb864552e918b701723766a768.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 25
  },
  {
    id: '288035293',
    name: 'Manfinity Homme Men\'s Casual Solid Color Short Style Jacket, Autumn,Red Winter Men Jacket,Fall Men Clothes,Men\'s Long Sleeve Padded Coat Men Zip Up Jacket Men Jackets Casual Cropped Men Jacket Men Shacket Grey Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 445280,
    originalPrice: 534336,
    link: 'https://www.shein.com/a-p-288035293.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/15/44/17632056223767b3938d3bbdea1f302d6ac5cda78b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/15/0e/176320563341a08ad62d7d31bf368e4755dbd99234.jpg'
    ],
    inStock: true,
    rating: 4.77,
    reviews: 810
  },
  {
    id: '158078103',
    name: 'PAVTROS Men\'s Motorcycle Stand Collar Letter Print Raglan Sleeve Casual Winter Coat, Racing Sport Coat, Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 822365,
    originalPrice: 986838,
    link: 'https://www.shein.com/a-p-158078103.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/20/f7/1755659319c17b11c9456a8e4b7c649c53fcb6d18d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/20/9b/1755659332ec3358bdb782365600823f095dd184fa.jpg'
    ],
    inStock: true,
    rating: 4.98,
    reviews: 53
  },
  {
    id: '127165729',
    name: 'Men\'s Long Sleeve Shiny PU Leather Padded Coat, Warm Winter Casual Commuter Streetwear, Detachable Hood Design',
    category: 'Men',
    subcategory: 'Jackets',
    price: 775215,
    originalPrice: 930258,
    link: 'https://www.shein.com/a-p-127165729.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/07/7c/17572368892228c1321859f4f2a37c72202f076a1e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/07/83/1757235778bba4ab27ca9d0e642cf8ba17a73e4531.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 78
  },
  {
    id: '317448359',
    name: 'Manfinity Roghcode Men\'s Casual Printed Hooded Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 472190,
    originalPrice: 566628,
    link: 'https://www.shein.com/a-p-317448359.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/24/fb/1763950213d3857a6ecdaddb850e87c0f4a83ae23d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/24/c6/1763950226d81eea7b9bfad508ef65afe89611f3c1.jpg'
    ],
    inStock: true,
    rating: 4.96,
    reviews: 216
  },
  {
    id: '44193323',
    name: 'Men\'s Long Sleeve Casual Sports Style Color Block Letter Print Zip-Up Drawstring Hooded Jacket For Spring And Autumn, For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 337410,
    originalPrice: 404892,
    link: 'https://www.shein.com/a-p-44193323.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/16/04/17632599834d7799ceb740e43551eebb3aa7ab51ed_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/16/06/1763259991d6f13572762129f2bce104fdab02c3c5.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 831
  },
  {
    id: '30489580',
    name: 'AXEPEAK Men\'s Letter Printed Woven Casual Baseball Jacket, Long Sleeve Going Out Designer Baseball Jacket, Streetwear Edition, For Fall, Winter, Grunge, Couple Things',
    category: 'Men',
    subcategory: 'Jackets',
    price: 586615,
    originalPrice: 703938,
    link: 'https://www.shein.com/a-p-30489580.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/14/64/17472335202618a4467c0175a9f313c3618061262a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/14/ab/1747233529f0b4ffc81e3ceeb7897a94ec742cd655.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 858
  },
  {
    id: '225227031',
    name: 'PAVTROS Men\'s Solid Color Long Sleeve Zip-Up Collar Fleece Casual Baseball Jacket, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 573160,
    originalPrice: 687792,
    link: 'https://www.shein.com/a-p-225227031.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/08/37/176516334208127194cf95c8fb9782de574afd7cef_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/08/9a/1765163357a2344e0cfcd57ebd44c1fcbcf08b9b4f.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 1001
  },
  {
    id: '284046697',
    name: 'Manfinity CasualCool Men\'s Solid Color Minimalist Everyday Long Sleeve Suede Fleece Jacket Jackets For Men Long Sleeve Men Zip Up Shirt Grey Jacket Jackets Casual, For Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 458735,
    originalPrice: 550482,
    link: 'https://www.shein.com/a-p-284046697.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/19/a3/1763524448ec78092bcc062e337cf8e0bd65203bf5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/13/e8/176301800121937f1675ea1af1e2f30eea6ab18e7b.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 3
  },
  {
    id: '297865319',
    name: 'Manfinity Bizformal Men\'s Front Button Long Sleeve Pocket Casual Jacket, Going Out Business Overcoat, For Friends, Husband, Boyfriend Gifts, Men Black Trench Coat, Men Double Breasted Coat, Men Belted Coat Men Coat Suit Overcoat Men Men Black Dress Outfits Black Suit For Men Suits For Men Tuxedo',
    category: 'Men',
    subcategory: 'Jackets',
    price: 721395,
    originalPrice: 865674,
    link: 'https://www.shein.com/a-p-297865319.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/3d/1763687943604a45c8fba00a3ec5ac81ad31e42363_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/4a/17636879573c4cc09ae212adae9b2ba0f43db90017.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 1001
  },
  {
    id: '52668979',
    name: 'Men\'s Outdoor Waterproof Softshell Jacket With Zipper Pockets - Loose Fit, Removable Hood, Windproof And Water-Resistant Coat For Daily Outdoor Activities, Hiking, And Mountaineering',
    category: 'Men',
    subcategory: 'Jackets',
    price: 411585,
    originalPrice: 493902,
    link: 'https://www.shein.com/a-p-52668979.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/03/19/a9/1742390741bc3eebe2fbb9eb78f83261709aa0be0b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/12/24/4b/17350518280d9e28d60eebcef83fd61b58914e5491.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 59
  },
  {
    id: '200760908',
    name: 'Manfinity EMRG Contrast Color Patchwork Design Men\'s Hooded Long Sleeve Jacket, Light Windbreaker Y2k Techwear Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 566490,
    originalPrice: 679788,
    link: 'https://www.shein.com/a-p-200760908.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/21/b3/1761009990c6c6cc149da6dae0a63e76bfda23bf65_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/30/b3/175919555506ee6a8f6059270b5cd4b338b8e7a0f0.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 889
  },
  {
    id: '52640708',
    name: 'Men\'s Long Sleeve New Windproof Thickened Warm Casual Hooded Padded Coat',
    category: 'Men',
    subcategory: 'Jackets',
    price: 903210,
    originalPrice: 1083852,
    link: 'https://www.shein.com/a-p-52640708.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/18/61/1758175144bc8a6aa548e901c74fd20f84ef84474c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/18/5b/1758175176ea41ccf5dac087fd3af818dd04b9d403.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 279
  },
  {
    id: '320247521',
    name: 'Manfinity CasualCool Men\'s Solid Color Double-Breasted Casual Wool Blend Jacket, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 687700,
    originalPrice: 825240,
    link: 'https://www.shein.com/a-p-320247521.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/08/ca/17651835415594e3f34a9666b0751c054191df3ed8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/08/c4/1765183554cc72136260b0cd44acdb39f9d2e0943f.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 54
  },
  {
    id: '218785411',
    name: 'PAVTROS Men\'s Autumn/Winter Moon Embroidery Zip-Up Fleece Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 606855,
    originalPrice: 728226,
    link: 'https://www.shein.com/a-p-218785411.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/c0/1760519698e5910c29dbe74c24737fee6b593c788e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/69/176051971798d9ebbba6aad344316d9088f8a42463.jpg'
    ],
    inStock: true,
    rating: 4.73,
    reviews: 628
  },
  {
    id: '266180453',
    name: 'TOKVUE Loose Fit Men\'s Letter Graphic Colorblock Drop Shoulder Varsity Jacket Without Hoodie, For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 505885,
    originalPrice: 607062,
    link: 'https://www.shein.com/a-p-266180453.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/26/cd/1764142541f94c937909148f061db8c94fb612923d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/26/48/17641425614f9699f468abeb3acf965952d3e9b034.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '225171086',
    name: 'Manfinity Hypemode Men\'s Navy Blue Woven Fabric Long Sleeve Regular Length Jacket With Striped Detail',
    category: 'Men',
    subcategory: 'Jackets',
    price: 418255,
    originalPrice: 501906,
    link: 'https://www.shein.com/a-p-225171086.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/c3/176094867190efd4d010cf023ccef3d3a8ae56fa50_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/2c/1760948689de22baba8b4224f83349418aa3be3f58.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 87
  },
  {
    id: '310764105',
    name: 'Manfinity Homme Plus Size Men\'s Casual Solid Color Front Button Pocket Shacket, Autumn Men Overshirt Mens Long Sleeve Button Up Men Shacket Men Summer Jacket Casual Shirt With Two Pockets Long Sleeve For Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 425040,
    originalPrice: 510048,
    link: 'https://www.shein.com/a-p-310764105.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/29/66/1764386977b278e654f0b4347363e44f8524a10210_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/29/71/1764386988e17008414503e5b3e7b16f6d6a33bcbf.jpg'
    ],
    inStock: true,
    rating: 4.95,
    reviews: 22
  },
  {
    id: '111889074',
    name: 'Plus Size Men\'s Padded Vest Jacket, Casual Sleeveless Waistcoat, Winter Warm Thicken , Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 499100,
    originalPrice: 598920,
    link: 'https://www.shein.com/a-p-111889074.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/20/fc/176363969695d59c1521158373ce38052cb567b98e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/20/00/1763639701cfd5a47dbf777a831ecf9cbb05950e55.jpg'
    ],
    inStock: true,
    rating: 4.97,
    reviews: 147
  },
  {
    id: '12073697',
    name: 'Manfinity Homme Men Long Sleeve Cotton Letter Graphic Patch Detail Denim Jacket Without Tee , Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 654005,
    originalPrice: 784806,
    link: 'https://www.shein.com/a-p-12073697.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/09/12/d7/169449122781cf5ec1b45f8c2bff1e1fdc8de03743_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/09/12/f8/16944912429dc89a7dcd39fcfa71e7f6c330f7ad1d.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 1001
  },
  {
    id: '41048228',
    name: 'New Autumn/Winter Men Long Sleeve Fleece Varsity Jacket , Casual Fashion Patchwork Button Baseball Uniform',
    category: 'Men',
    subcategory: 'Jackets',
    price: 425040,
    originalPrice: 510048,
    link: 'https://www.shein.com/a-p-41048228.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/07/31/ae/17224195848a461c0c30ede82092a4c8eaf5659c7c_thumbnail_405x552.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 58
  },
  {
    id: '309849540',
    name: 'Manfinity Homme Men\'s Geometric Print Contrast Color Pocket Zip-Up Long Sleeve Jacket And Coat',
    category: 'Men',
    subcategory: 'Jackets',
    price: 485645,
    originalPrice: 582774,
    link: 'https://www.shein.com/a-p-309849540.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/b8/176432108295b6100802ac5f7f6cf4191b4a931d2a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/51/17643210978c8637331e468fb1847f0a7925308caa.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 29
  },
  {
    id: '278744332',
    name: 'Manfinity CasualCool Men\'s Solid Color Casual Long Sleeve Fleece Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 485645,
    originalPrice: 582774,
    link: 'https://www.shein.com/a-p-278744332.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/08/c7/1762571506cc3a2f7493e1a969fa486c427f4a2eb8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/08/43/1762571514b9ca5b8520e18a073a056bf0c6fc44fe.jpg'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 48
  },
  {
    id: '215806455',
    name: 'NASBING Men\'s Winter Ski Jacket Water Resistant Windproof Snowboard Thermal Lined Hooded Winter Clothes 4 Pockets Parka Hiking Camping Climbing,Skiing',
    category: 'Men',
    subcategory: 'Jackets',
    price: 943690,
    originalPrice: 1132428,
    link: 'https://www.shein.com/a-p-215806455.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/10/e4/17600810414565e4aa6adf345eee5fc14271801fb1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/10/10/d4/17600814538d5c4529e5b2bbb31ce0bb4dd0db0783.png'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 510
  },
  {
    id: '119895664',
    name: 'Winter Men\'s Plus Size Corduroy Jacket, Wear-Resistant Vintage Soft Skin-Friendly Warm Coat, Stand-Up Collar Design, Fashionable Zipper Cardigan, For Shopping, Dating, Work, Daily Travel And Outing.',
    category: 'Men',
    subcategory: 'Jackets',
    price: 323955,
    originalPrice: 388746,
    link: 'https://www.shein.com/a-p-119895664.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/24/24/1763997657280e50cc80335eced1475c189a0460e4_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/06/12/9f/17497017785e0fe2092858311830cfae899effcdd0.png'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 127
  },
  {
    id: '216144496',
    name: 'Calvornis Men\'s Casual Commuter Double-Breasted Long Sleeve Jacket, Autumn',
    category: 'Men',
    subcategory: 'Jackets',
    price: 532795,
    originalPrice: 639354,
    link: 'https://www.shein.com/a-p-216144496.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/14/1f/1760411437681e098e12fb6980d29f54837a8a365a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/14/d9/17604114500832de9c673e3de465cb96849b428416.jpg'
    ],
    inStock: true,
    rating: 4.69,
    reviews: 148
  },
  {
    id: '303660875',
    name: 'Manfinity Homme Men\'s Casual Plaid Hooded Shacket, Autumn/Winter Checkered Shirt Men Knitted Button Up Men Black And White Shirt Long Sleeves Plaid Jacket Men Jacket Men Jacket Men Shirt Men Jacket Men Streetwear Shirt Old Money,Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions, Boyfriend/Husband Gift, Anniversary /Birthday Gift Party Christmas New Years Wedding',
    category: 'Men',
    subcategory: 'Jackets',
    price: 404800,
    originalPrice: 485760,
    link: 'https://www.shein.com/a-p-303660875.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/e1/1764321616e35fd6e38c2b4756237667151a71ca23_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/63/17643216275a91dbec0e7fd90940e321323ac653ba.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '321697196',
    name: 'Manfinity Homme Men\'s Casual Versatile Hooded Zip-Up Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 330740,
    originalPrice: 396888,
    link: 'https://www.shein.com/a-p-321697196.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/10/f6/176533724981308ab6f3abda4f15b67eed2b2185d6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/10/b0/176533726192c09a8d134e5f373eb72672c754fb56.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 1001
  },
  {
    id: '260495037',
    name: 'Manfinity CasualCool Men Solid Color Casual Jacket, Suitable For Autumn And Winter Cowboy Jacket For Men Men Jackets Casual Woolen Jacket Men Men Shacket Navy Blue Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 627095,
    originalPrice: 752514,
    link: 'https://www.shein.com/a-p-260495037.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/03/bb/1762147046a00c836212281c905806ef1a9f3aae50_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/03/99/1762147058c03b9f10e8d7843bd4c1da9eb35f0b33.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 53
  },
  {
    id: '291616091',
    name: 'Manfinity Nomadique Men\'s Geometric Pattern Loose Casual Autumn Winter Going Out Cowboy Graphic Overcoat, For Friends, Husband, Boyfriend Gifts, Men Casual Jacket, Print Jacket Men, Graphic Jackets For Men Western Wear Men Cowboy Jacket For Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 532795,
    originalPrice: 639354,
    link: 'https://www.shein.com/a-p-291616091.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/18/a5/1763465488a376a8a9846f54e968cc3a91898c97c4_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/18/a8/1763465503bf56f0f593c835319589e0825d5e2f66.jpg'
    ],
    inStock: true,
    rating: 4.96,
    reviews: 26
  },
  {
    id: '234885122',
    name: 'Manfinity Homme Men\'s Casual Lapel Collar Single-Breasted Warm Thermal Lined Long Sleeve Jacket, Suitable For Daily Commute In Autumn/Winter Old Money,Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions,Boyfriend/Husband Gift, Anniversary Gift Christmas Coat For Outerwear Jackets Suit For Man Woolen Jacket Men Grey Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 674245,
    originalPrice: 809094,
    link: 'https://www.shein.com/a-p-234885122.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/24/a7/17612710007b425f69830a55937e32082d268b0d56_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/24/a5/176127100973f5f9decb7dd9e416f077a46a383c7c.jpg'
    ],
    inStock: true,
    rating: 4.31,
    reviews: 67
  },
  {
    id: '283010141',
    name: 'The North Face Limbara Men\'s Insulated Jacket Black',
    category: 'Men',
    subcategory: 'Jackets',
    price: 3402160,
    originalPrice: 4082592,
    link: 'https://www.shein.com/a-p-283010141.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/09/34/1765279980453ef2b47ff24ea35e160b500d20304c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/13/f8/1763041758511bbbd7e0c65dfa870619b60c90fb12.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 1
  },
  {
    id: '318793372',
    name: 'Manfinity Homme Men\'s Casual Turndown Collar Zip Front Loose Fleece Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 714610,
    originalPrice: 857532,
    link: 'https://www.shein.com/a-p-318793372.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/09/83/1765209711230f1c68c165f575eae01c38086f21f8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/09/cb/1765209724eb9b16aae9a896a4fbc9c51926f8999e.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 48
  },
  {
    id: '222156887',
    name: 'Manfinity CasualCool Men\'s Casual Fleece Hooded Jacket, Warm For Autumn/Winter Brown Zip Up Hoodie Men Brown Sweater Men Men Sweater Jacket Brown Cardigan Men Brown Jacket Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 472190,
    originalPrice: 566628,
    link: 'https://www.shein.com/a-p-222156887.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/fb/17606935137dbaaaf909012885cac89c1db8096398_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/a8/176069352261033850cdc6a43bfd87c43ca6c9a5e0.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 93
  },
  {
    id: '43963298',
    name: 'PAVTROS Manfinity Streetrush Men\'s Streetwear-Inspired Racing Element Black And White Letter Pattern Positioning Print Zip-Up Stand-Up Collar Short Racing Jacket With College Style, Jersey Jacket, Fall And Winter Men Going Out Fashion Graphic Long Sleeve Color Block Racing Jacket, For Friends, Husband, Boyfriend Gifts',
    category: 'Men',
    subcategory: 'Jackets',
    price: 411585,
    originalPrice: 493902,
    link: 'https://www.shein.com/a-p-43963298.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/29/3a/1727599263ec653130f9aa583c7e212275ec37e6f2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/29/f3/1727599287728a843d73627c0605dfe3b30cb3855d.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 132
  },
  {
    id: '316217584',
    name: 'Manfinity CasualCool Men\'s Solid Color Lapel NeckLong Sleeve Double-Breasted Casual Wool Blend Jacket, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 707940,
    originalPrice: 849528,
    link: 'https://www.shein.com/a-p-316217584.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/01/e8/176455158316e09fe7085d0ceb78e8a077c44111d8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/01/cd/176455159748ea88b5d33e6ac17ef107ede6b3f034.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 54
  },
  {
    id: '213743503',
    name: 'Manfinity EZcore Men\'s Solid Color Long Sleeve Zip-Up Casual Jacket, Brown Jacket Streetwear, Fall/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 633765,
    originalPrice: 760518,
    link: 'https://www.shein.com/a-p-213743503.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/13/e3/17603194698ad5a2def9a82e71f880781ef7b4fe6a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/13/9b/1760319484146c69de661a95c41befefa06225107a.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 387
  },
  {
    id: '240797260',
    name: 'Manfinity EZcore Loose Fit Men\'s Fleece-Lined Quilted Padded Vest Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 431710,
    originalPrice: 518052,
    link: 'https://www.shein.com/a-p-240797260.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/27/cf/1761545605a43de2765c2db21518144c085b70a7a6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/27/b1/17615456191d2625dd1ffaebb38875494acb013c2a.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 662
  },
  {
    id: '219116638',
    name: 'AXEPEAK Men\'s Long Sleeve Autumn Fashionable Color Block Hooded Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 640550,
    originalPrice: 768660,
    link: 'https://www.shein.com/a-p-219116638.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/16/66/176058291096bbe7252ba67ed09961425f43fcd416_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/16/02/1760582924559e0655833e58e47f03c321654974bf.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 162
  },
  {
    id: '222163185',
    name: 'Manfinity CasualCool Men\'s Solid Color Casual Warm Versatile Long Sleeve Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 573160,
    originalPrice: 687792,
    link: 'https://www.shein.com/a-p-222163185.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/7c/176069340111490e5a73653eed3f8304e1eac27e71_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/a1/17606934133782cb18cfc927fee6dcce28eab45207.jpg'
    ],
    inStock: true,
    rating: 4.64,
    reviews: 25
  },
  {
    id: '250397478',
    name: 'GRDR Fashionable Zip-Up Sweatshirt Men\'s Sweatshirt Jacket, Comfortable & Warm For Autumn/Winter, Versatile For Casual Wear',
    category: 'Men',
    subcategory: 'Jackets',
    price: 333385,
    originalPrice: 400062,
    link: 'https://www.shein.com/a-p-250397478.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/87/1763457389e21b888b457874e7bdb22326cdb6fa42_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/18/2f/1763457399940d1d0f8f5026dd4260983aad545030.jpg'
    ],
    inStock: true,
    rating: 3,
    reviews: 2
  },
  {
    id: '309842638',
    name: 'Manfinity Homme Men\'s Geometric Print Contrast Color Pocket Zip-Up Long Sleeve Jacket And Coat',
    category: 'Men',
    subcategory: 'Jackets',
    price: 519340,
    originalPrice: 623208,
    link: 'https://www.shein.com/a-p-309842638.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/00/176432109425ca88a06f734e66ba7f86bf155d1736_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/a2/1764321107f3c6262d0fb8984ae34f0bac2139907f.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 29
  },
  {
    id: '250087452',
    name: 'Manfinity Homme Men\'s Solid Color Raglan Sleeve Zip-Up Casual Minimalist Design Jacket Men Zip Up Jacket Men Jackets Casual Cropped Men Jacket Men Summer Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 512555,
    originalPrice: 615066,
    link: 'https://www.shein.com/a-p-250087452.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/f6/17617919544d8cd68527b862c27ef1866da3b4e67a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/35/17617919644d07c59a709f485e823d75a65caebacd.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '208310444',
    name: 'NASBING Men\'s Winter Ski Jacket Water Resistant Windproof Snowboard Thermal Lined Hooded Winter Clothes 4 Pockets Parka Hiking Camping Climbing,Skiing',
    category: 'Men',
    subcategory: 'Jackets',
    price: 957145,
    originalPrice: 1148574,
    link: 'https://www.shein.com/a-p-208310444.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/26/c0/175887269616e1ac8b0ffa3fa060d2148fa86db1bd_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/09/26/52/1758872781be3e96ba41f717cd5cfb280b36bdea84.png'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 510
  },
  {
    id: '41494517',
    name: 'Men\'s Outdoor Winter Plus Fleece Aviator PU Leather Jacket, Black Lapel Motorcycle Style Leather Jacket.',
    category: 'Men',
    subcategory: 'Jackets',
    price: 1132290,
    originalPrice: 1358748,
    link: 'https://www.shein.com/a-p-41494517.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/03/09/0f/17415276001abcdae8b7c0776797dbc6782c22881e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/03/09/f2/17415275985af6916630e44416c9380929587116c3.jpg'
    ],
    inStock: true,
    rating: 4.77,
    reviews: 304
  },
  {
    id: '38530013',
    name: 'Manfinity Homme Men Solid Color Button Front Pocket Long Sleeve Casual Light Jacket, Plain, Fashion, Husband, Urban, Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 418255,
    originalPrice: 501906,
    link: 'https://www.shein.com/a-p-38530013.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/07/12/65/172076196240c7829c2f0554cee877a4f3c06d5a5f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/07/12/61/17207619798c22f2aa888778bed5f2f46da380b55b.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 767
  },
  {
    id: '222754937',
    name: 'EGENSIO Men\'s Fleece-Lined Solid Color Thermal Lined Hooded Casual Long Sleeve Jacket, Versatile',
    category: 'Men',
    subcategory: 'Jackets',
    price: 472190,
    originalPrice: 566628,
    link: 'https://www.shein.com/a-p-222754937.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/18/44/1760760056bb974796c886193e02115155da0e580b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/18/e9/1760760067928f8c5bb3e93131b9542059f7748b03.jpg'
    ],
    inStock: true,
    rating: 4.66,
    reviews: 6
  },
  {
    id: '53190976',
    name: 'Manfinity Homme Men\'s Long Sleeve Royal Blue Hooded Zip-Up Outdoor Windbreaker Jacket, For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 330740,
    originalPrice: 396888,
    link: 'https://www.shein.com/a-p-53190976.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/01/10/49/1736503840bfb0f7d6f1e8b33ce5088cc1eafe8759_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/01/10/06/1736503856e483ff011a6c9a7d866b94516f5c3864.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 1001
  },
  {
    id: '269213597',
    name: 'Manfinity EMRG Men\'s Letter Print Contrast Color Zipper Collar Casual Long Sleeve Jacket Motorsport Jacket Racing Coat Race Jacket Racing Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 431710,
    originalPrice: 518052,
    link: 'https://www.shein.com/a-p-269213597.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/06/ba/17624002328eb3a3dec6086ee8fbc512183cef5c3f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/06/2e/1762400246549ba1f65d6b9e9d8ff2c1ff861a92af.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 351
  },
  {
    id: '230115255',
    name: 'Manfinity Hypemode Men\'s Embroidered Design Long Sleeve Casual Drawstring Hooded Winter Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 687700,
    originalPrice: 825240,
    link: 'https://www.shein.com/a-p-230115255.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/22/8a/1761109653754eaff02c26011356e3c52845b4e6d6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/22/38/1761109668adcd00d94396b11fafecfa1dea0e7b8c.jpg'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 8
  },
  {
    id: '306249603',
    name: 'Manfinity Homme Men\'s Autumn Contrast Color Zipper Collar Casual Baseball Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 290260,
    originalPrice: 348312,
    link: 'https://www.shein.com/a-p-306249603.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/26/98/17641372756a1f38f4538fba78297d18e89bacd8d2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/26/3c/1764137285a8d3e81cd55de30005c6730f7e6687d2.jpg'
    ],
    inStock: true,
    rating: 4.71,
    reviews: 90
  },
  {
    id: '225695994',
    name: 'Men\'s Casual Minimalist Outdoor Long Sleeve Jacket, Thermal Lined Thickened Jacket With Collar, Suitable For Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 734850,
    originalPrice: 881820,
    link: 'https://www.shein.com/a-p-225695994.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/12/48/17629486567b6b1b5d33ec8996710146ae89eaed50_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/12/26/1762948703e62b5bc43e47a0dc0f26d941653e7dbf.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 2
  },
  {
    id: '246594601',
    name: 'Manfinity LEGND Men\'s Cozy Flannelette Long Sleeve Zebra Pattern Fleece Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 431710,
    originalPrice: 518052,
    link: 'https://www.shein.com/a-p-246594601.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/29/3b/176170307161bbef3747a549be2a91f39ef5bb90be_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/29/70/1761703085bb74f1a224bffd5745d47b929a03281f.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 834
  },
  {
    id: '277183376',
    name: 'Manfinity Homme Men\'s Solid Color Single-Breasted Casual Wool Blend Jacket, Autumn/Winter Cream Outfit Men Men Jackets Plus Size Men Jackets Men Shacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 526010,
    originalPrice: 631212,
    link: 'https://www.shein.com/a-p-277183376.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/07/a2/17624846911e404305f4705e78b38b20f20e805834_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/07/fc/1762484705ebc3f0249d20a431bdd68c2c9700dd2f.jpg'
    ],
    inStock: true,
    rating: 4.58,
    reviews: 51
  },
  {
    id: '308128772',
    name: 'Manfinity Hypemode Men\'s Casual Solid Color Hooded Jacket, Versatile For Vacation Outerwear Men Men Jacket Winter Men S Light Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 714610,
    originalPrice: 857532,
    link: 'https://www.shein.com/a-p-308128772.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/27/8f/17642255837c73ecdecdb4776751ea9452ad73a6b8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/27/ed/17642255944368a02e61e2d536665f045d54362ed0.jpg'
    ],
    inStock: true,
    rating: 4.36,
    reviews: 30
  },
  {
    id: '231727030',
    name: 'PAVTROS Men\'s Fashionable Castle Print Jacket, Autumn Graphic Print Jacket Men S Graphic Shirt Men Summer Jacket Men S Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 391345,
    originalPrice: 469614,
    link: 'https://www.shein.com/a-p-231727030.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/22/71/1761119328b2df8e8e31c15e6d20a4777a14052649_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/22/d4/1761119349a262f13f8885c110d0c092a9f25eca22.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 1
  },
  {
    id: '50198842',
    name: 'Warm Thermal Lined Winter Jacket For Men, Zipper Front Pockets Long Sleeve Hooded Padded Coat, Suitable For City Streets And Outdoor Activities In Cold Season, For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 654005,
    originalPrice: 784806,
    link: 'https://www.shein.com/a-p-50198842.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/09/67/175998103278caf5f957d07361c3ef569018409a4c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/11/23/48/1732343318ca57b87ec5754b74422641589dcfb7c9.jpg'
    ],
    inStock: true,
    rating: 4.72,
    reviews: 105
  },
  {
    id: '301742274',
    name: ' Aesthetic Post--Men\'s Casual Versatile Sporty Stand Collar Jacket, Large Graphic Print, Young Couple Style, Large Pockets, Autumn/Winter Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 532795,
    originalPrice: 639354,
    link: 'https://www.shein.com/a-p-301742274.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/24/50/176394769996b00a254c53ae47166d55c303ed61f2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/24/08/1763947711ed1bafa38c27e97698eb59448f3c8c4b.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 84
  },
  {
    id: '213740263',
    name: 'Manfinity EMRG Men\'s Fashionable Retro Casual Zip-Up Long Sleeve Jacket, Young Streetwear',
    category: 'Men',
    subcategory: 'Jackets',
    price: 539465,
    originalPrice: 647358,
    link: 'https://www.shein.com/a-p-213740263.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/13/84/17603194740fa669c5bff02df47508f0928f28e089_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/13/92/1760319486651a2061ae232da74487f490d94d096c.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 132
  },
  {
    id: '101638116',
    name: 'STYNVO Men\'s Black Woven Outdoor Jacket With White Stripe Graphic Print, Full Zip Hooded Long Sleeve Athletic Style Windbreaker, A Great Gift For Your Boyfriend, Back To School, Men\'s Windbreaker Jacket, Wind Breaker, Street Wear Jacket, Reflective Jacket, Wind Breaker Set , Fall, Grunge',
    category: 'Men',
    subcategory: 'Jackets',
    price: 411585,
    originalPrice: 493902,
    link: 'https://www.shein.com/a-p-101638116.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/18/8c/1750233960d4d5502c561ba27880840b15678f65e4_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/18/91/1750233970ee412f3fd31325af0450df06cf2a51d7.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 50
  },
  {
    id: '40119392',
    name: 'Men\'s Long Sleeve New Patchwork Baseball Winter Coat, Embroidery Thick Outerwear With Detachable Hood, For Fall Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 977270,
    originalPrice: 1172724,
    link: 'https://www.shein.com/a-p-40119392.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/07/22/ec/1721613107d85bd2e99e5bc813c8698124e7f87141_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/07/22/d7/1721613095fdd2f4aa52129a074f55b2c42194a3a1.jpg'
    ],
    inStock: true,
    rating: 4.94,
    reviews: 142
  },
  {
    id: '215849611',
    name: 'NASBING Men\'s Winter Ski Jacket Water Resistant Windproof Snowboard Thermal Lined Hooded Winter Clothes 4 Pockets Parka Hiking Camping Climbing,Skiing',
    category: 'Men',
    subcategory: 'Jackets',
    price: 977270,
    originalPrice: 1172724,
    link: 'https://www.shein.com/a-p-215849611.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/10/dc/176008103595f50e49624bd3774099cac4cecbdbc2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/10/10/1a/1760081446108aabfa2b14f8751964fa0765a403ec.png'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 510
  },
  {
    id: '254479120',
    name: 'ROMWE MEN Street Life Men\'s Long Sleeve Casual Tie-Dye Hooded Jacket, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 546250,
    originalPrice: 655500,
    link: 'https://www.shein.com/a-p-254479120.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/31/75/1761907985b6f9e38e8c2a6a5d0519aa5953d5983b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/31/9b/1761908001adec95a46df39db4d65f7c6dfbeeb972.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 288
  },
  {
    id: '283297323',
    name: 'Manfinity Campus Court Loose Fit Men\'s Letter Graphic Two-Tone Varsity Jacket Without Hoodie Black Varsity Jacket Men Chicago Jersey Mens Street Wear Zip Up Letterman Jacket Mens Letter Graphic Print Zip Up Hoodie',
    category: 'Men',
    subcategory: 'Jackets',
    price: 472190,
    originalPrice: 566628,
    link: 'https://www.shein.com/a-p-283297323.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/26/e0/1764122656747fe3375333b4ad0763bacb776606e6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/26/22/17641226649c4060510aff1d72d842a30674b253ad.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '215893915',
    name: 'Manfinity Homme Men\'s Solid Color Long Sleeve Single-Breasted Casual Pocket Jacket, Autumn Black Jacket For Men Men Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 371105,
    originalPrice: 445326,
    link: 'https://www.shein.com/a-p-215893915.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/14/16/176040581384bff4ed5825f6faf133ea623a3499a6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/14/53/1760405821d1d2328a65544cab3963e9ba7f40665a.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 42
  },
  {
    id: '261069704',
    name: 'Men\'s Thick Jacket With Thermal Lined And Zipper, Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 478860,
    originalPrice: 574632,
    link: 'https://www.shein.com/a-p-261069704.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/22/91/17611260470317d0b2c2eba0a056561b0cc515ce5c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/22/0a/17611260719e34e7428037460490523bf9a5ed4494.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 310
  },
  {
    id: '225544918',
    name: 'Men\'s Casual Long Sleeve Jacket With Vintage Print, Lightweight Windbreaker, Zip-Up, Lapel Collar, Men\'s Culture Revival All-Over Print Retro Casual Zipper Jacket,Allover Print, Fashionable Outerwear',
    category: 'Men',
    subcategory: 'Jackets',
    price: 425040,
    originalPrice: 510048,
    link: 'https://www.shein.com/a-p-225544918.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/28/80/17590276141061596e9c91db59342e98e4555eefb5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/09/da/17599795045d3c0232376c8749a7b9c6edf8e18d34.jpg'
    ],
    inStock: true,
    rating: '4.6',
    reviews: 75
  },
  {
    id: '30472490',
    name: '1pc Men\'s Outdoor Multi-Pocket Military Green Hooded Windbreaker Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 371105,
    originalPrice: 445326,
    link: 'https://www.shein.com/a-p-30472490.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/01/20/bb/17057436878123177f9f77e9edc349010cc63f2556_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/01/20/a2/17057443118808998d752ab0ed11cccaebe535bdc6.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 531
  },
  {
    id: '214804027',
    name: 'Manfinity Homme Men\'s Casual Solid Color Jacket, Versatile For Autumn/Winter Jackets For Men Long Sleeve Men Jackets Casual Grey Jacket Jackets For Men Grey Long Sleeve Jackets For Men Men S Jackets',
    category: 'Men',
    subcategory: 'Jackets',
    price: 431710,
    originalPrice: 518052,
    link: 'https://www.shein.com/a-p-214804027.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/14/a5/17604396119e40b174e92e08a668a04d3b8bb06706_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/14/fb/1760439626825ede45fabfe39fd751989b97cb5022.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 1001
  },
  {
    id: '225158906',
    name: 'Manfinity Hypemode Men\'s Casual Street Fashion Zip-Up Stand Collar Windbreaker Long Sleeve Jacket, Grey Techwear Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 418255,
    originalPrice: 501906,
    link: 'https://www.shein.com/a-p-225158906.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/76/1760948694e42e9c3aabe703344c6930eb38041b23_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/43/17609487118ba6dba01df887d6575a29cd91ea426f.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 87
  },
  {
    id: '20181820',
    name: '2025 New Men\'s Long Sleeve Solid Color Casual Simple Padded Coat With Thermal Lined, Warm Stand Collar Winter Coat',
    category: 'Men',
    subcategory: 'Jackets',
    price: 660790,
    originalPrice: 792948,
    link: 'https://www.shein.com/a-p-20181820.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/12/20/d3/170304191239c13eb4fc6684cb3f607770bca0b88f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/07/24/16901789259eb8f0017881389ba87b7ecd121473b4.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '209070510',
    name: 'Manfinity Homme Men\'s Casual Single-Breasted Pocket Jacket, Autumn Men Overshirt Vintage Jacket Men Men Shacket Men Summer Jacket Corduroy Jacket Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 438495,
    originalPrice: 526194,
    link: 'https://www.shein.com/a-p-209070510.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/fc/1759988242b8da7629f6f13e5c8a4fd27b5ef50b23_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/5e/175998825868725975df1eaeb4d0cf5b2314ba405d.jpg'
    ],
    inStock: true,
    rating: 4.74,
    reviews: 157
  },
  {
    id: '229490348',
    name: 'Manfinity EMRG Casual Men\'s Black Stand Collar Woven Fabric Jacket With Front Zipper And Subtle Contrast Stitching Detailing Long Sleeve Regular Fit',
    category: 'Men',
    subcategory: 'Jackets',
    price: 344195,
    originalPrice: 413034,
    link: 'https://www.shein.com/a-p-229490348.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/22/24/17610625906057f73159b5ee681459bbe1551e5134_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/22/23/1761062604186f37f0c92f876dcf7c39dd63a81b1a.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 2
  },
  {
    id: '313378688',
    name: 'PAVTROS Men\'s Casual Black Jacket Men Techwear Rain Jacket Y2k Style Jacket Men Windbreaker Jacket Techwear Jacket,Windbreaker/Outdoor Windbreaker, Parka,Baggy,Winter Jacket,Streetwear',
    category: 'Men',
    subcategory: 'Jackets',
    price: 532795,
    originalPrice: 639354,
    link: 'https://www.shein.com/a-p-313378688.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/01/59/17645530861f8ee508ef22c4ad54b24e73c7969d55_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/01/90/1764553099d0ce9a290a035a8e080a146569596508.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 167
  },
  {
    id: '216916361',
    name: 'Men\'s Long Sleeve Jacket With Hooded Design, Convenient Zipper Closure, Simple Yet Layered Style. Overall Slim Fit, Suitable For Daily Outings, Casual Gatherings And More Occasions.',
    category: 'Men',
    subcategory: 'Jackets',
    price: 418255,
    originalPrice: 501906,
    link: 'https://www.shein.com/a-p-216916361.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/12/dd/1762941968f2a2352296a10b9c3964eb9a1ceb80c5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/12/de/17629419759dcc2687806f4fee2b9975417f86d280.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 6
  },
  {
    id: '293002354',
    name: 'Multi Pocket Design Men\'s Solid Color Full-Zip Hooded Sweatshirt Cardigan Outdoor Daily Wear, Spring And Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 189290,
    originalPrice: 227148,
    link: 'https://www.shein.com/a-p-293002354.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/13/20/17630129291724101bd4ff5a5aa1a7885555717a4b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/13/39/1763012962a3d67e0fdc630c4bd46c811a4ab68cac.png'
    ],
    inStock: true,
    rating: '4.7',
    reviews: 132
  },
  {
    id: '146273607',
    name: 'New Plus Size Men\'s Outdoor Casual Hooded Long Sleeve Jacket, Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 526010,
    originalPrice: 631212,
    link: 'https://www.shein.com/a-p-146273607.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/20/eb/1758353691be929ae85445e4245296f5b28a866d08_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/20/89/175835369861867f21b65e76bbd2b0f096629b89b6.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 106
  },
  {
    id: '257364643',
    name: 'Manfinity Homme Men\'s Autumn/Winter Hooded Padded Coat, Multi-Pocket Design, Quilted, Thermal Lining, Boyfriend Gift, Streetwear Casual Loose Fit Zip-Up Outerwear Waterproof Jacket Men Men"S Thermal Lined Jacket Men"S Tech Wear Grey Men"S Jacket Men"S Warm Jacket Old Money,Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions,Boyfriend/Husband Gift, Anniversary Gift Christmas Outfits Grey Jackets Thermal Lined Jacket Men Men Tech Wear Men Windb',
    category: 'Men',
    subcategory: 'Jackets',
    price: 788785,
    originalPrice: 946542,
    link: 'https://www.shein.com/a-p-257364643.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/06/b1/17650096939061a28bb1320655bed78ac4f603db01_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/06/dd/17650097023af9d11306bed506f706ab9ea3e1fe22.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 120
  },
  {
    id: '213969698',
    name: 'PAVTROS Men\'s Long Sleeve Short Zip-Up PU Leather Jacket, Black Leather Jacket Outerwear , Fall Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 606855,
    originalPrice: 728226,
    link: 'https://www.shein.com/a-p-213969698.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/14/fd/176041294033b934755c85f36c1570cdd35e29b289_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/14/11/1760412962fbdbdd6e5efb491206b11ce2c899a9c0.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 1
  },
  {
    id: '62612872',
    name: 'Manfinity Homme Men\'s Long Sleeve Casual Zip-Up Hooded Outdoor Windbreaker Jacket, Spring/Autumn, Navy Blue Zip Up Hooded, For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 323955,
    originalPrice: 388746,
    link: 'https://www.shein.com/a-p-62612872.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/31/91/17618736877d755b8c09fc6ddb5f8106f8872d7178_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/03/24/43/17428216385bb8f0b5d1c1f60a44c7ead677fd1603.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 1001
  },
  {
    id: '280553546',
    name: 'Manfinity Homme Men\'s Contrast Color Zip-Up Collar Casual Fleece Baseball Jacket, Autumn/Winter Crop Jacket For Men Anime Clothes Men Jackets For Men Long Sleeve Anime Jacket Designer Jacket Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 404800,
    originalPrice: 485760,
    link: 'https://www.shein.com/a-p-280553546.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/11/28/1762827050bad4b55f6111b311391590fdd6de3690_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/11/c8/1762827063131fd6ec1fe6bcc921f3f92d3003b3c5.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 556
  },
  {
    id: '288509439',
    name: 'Manfinity CasualCool Men\'s Solid Color Minimalist Everyday Long Sleeve Suede Jacket Vintage Jacket Men Brown Jacket Men Western Mens Clothing',
    category: 'Men',
    subcategory: 'Jackets',
    price: 499100,
    originalPrice: 598920,
    link: 'https://www.shein.com/a-p-288509439.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/ac/1763345343df435a02f2a2cc1a0ee76a46444e7961_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/d7/1763345346981614b3786f777d5da64447d032daf0.jpg'
    ],
    inStock: true,
    rating: '4.3',
    reviews: 110
  },
  {
    id: '42624669',
    name: 'DAZY Men\'s Solid Color Long Sleeve Simple Cardigan Jacket, Casual Daily Wear Fall,Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 815695,
    originalPrice: 978834,
    link: 'https://www.shein.com/a-p-42624669.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/12/f0/17261361014801736fda4ac248883864f518c2df08_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/12/43/1726136129672e00ca714ecf69c5a2516bc8a647c4.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 229
  },
  {
    id: '238197440',
    name: 'Manfinity CasualCool Men\'s Solid Color Minimalist Everyday Long Sleeve Overcoat Brown Sweater Men Brown Jacket Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 505885,
    originalPrice: 607062,
    link: 'https://www.shein.com/a-p-238197440.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/25/71/1761392064fbb44bbd619f40c371344b55fa31dc7c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/25/2e/17613920783e709bce00967d915a9e64c8ef2ce7ef.jpg'
    ],
    inStock: true,
    rating: 4.55,
    reviews: 18
  },
  {
    id: '314570645',
    name: 'Men\'s Autumn/Winter Jacket, Thermal Lined Thick PU Leather Motorcycle Jacket, Casual Wear',
    category: 'Men',
    subcategory: 'Jackets',
    price: 553035,
    originalPrice: 663642,
    link: 'https://www.shein.com/a-p-314570645.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/03/a2/17647670140e290aa57b1154291e4a9eed107aca2a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/04/63/17648319770a7768f4316eb6de292fc1afc1234050.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 85
  },
  {
    id: '242890995',
    name: 'Manfinity Homme Men\'s Solid Color Long Sleeve Single-Breasted Casual Loose Jacket, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 478860,
    originalPrice: 574632,
    link: 'https://www.shein.com/a-p-242890995.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/27/46/17615530438defa07133c9aed1dbfdb5f9351468af_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/27/c5/1761553058b97d5f5d695e32049faed3124cb27a7b.jpg'
    ],
    inStock: true,
    rating: 4.58,
    reviews: 51
  },
  {
    id: '231800017',
    name: 'Men\'s Autumn/Winter Multi-Collar Motorcycle Long Sleeve Coat, Quilted Lining, Lightweight, Casual Outerwear',
    category: 'Men',
    subcategory: 'Jackets',
    price: 478860,
    originalPrice: 574632,
    link: 'https://www.shein.com/a-p-231800017.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/12/50/176293008374fff7ccf500d04b2570880c732f4c86_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/12/5d/1762930112fe2fb38740096e3bed14d2c47d81bf08.jpg'
    ],
    inStock: true,
    rating: '4.7',
    reviews: 66
  },
  {
    id: '44963880',
    name: 'Lightweight Jacket Outdoor Windbreaker For Men, Water-Resistant Hooded Jacket Suitable For Outdoor Activities Like Hiking, Fishing And Daily Wear, Spring/Summer/Autumn',
    category: 'Men',
    subcategory: 'Jackets',
    price: 303830,
    originalPrice: 364596,
    link: 'https://www.shein.com/a-p-44963880.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/28/f5/1761636247bde9034806378a3132c1ba84a052fe49_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/09/20/95/1726792428997160509dae054d0e5bcbe64cb34cb0.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 780
  },
  {
    id: '296619498',
    name: 'Men\'s Jacket, Warm Thermal Lined Faux Leather Jacket, Casual Lapel PU Leather Coat For Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 761760,
    originalPrice: 914112,
    link: 'https://www.shein.com/a-p-296619498.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/17/8e/1765980089059e0a34b0a25b6db453370b60fd0e9c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/17/0a/1765980069c50ba109baf795287e0d3b43ac6bacfa.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 81
  },
  {
    id: '11422963',
    name: 'DAZY Men Half Zipper Drawstring Hem Hooded Coat,Fall Clothes',
    category: 'Men',
    subcategory: 'Jackets',
    price: 478860,
    originalPrice: 574632,
    link: 'https://www.shein.com/a-p-11422963.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2022/09/05/16623677438601d7350a1d19e8897c4775c67636f7_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2022/09/05/1662367755da588ccb92af22c8f0ceff81d904209e.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 208
  },
  {
    id: '126042094',
    name: 'Men\'s Jacket, Simple Solid Color Hooded Jacket, Fashion Comfortable Casual Sports Coat, Large Pocket Design Sports Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 647335,
    originalPrice: 776802,
    link: 'https://www.shein.com/a-p-126042094.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/21/eb/17505057389540566a3c876481a07cc20faf518412_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/06/21/a6/1750505765e76c0f3946701ffa00b85bc118c278fb.png'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 53
  },
  {
    id: '105968646',
    name: 'Men\'s Stand Collar Windbreaker Jacket, Thick Casual Slim Fit Outerwear,Fleece,Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 323955,
    originalPrice: 388746,
    link: 'https://www.shein.com/a-p-105968646.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/12/23/174973659723cd468e2f117437b89c9e3778eb2366_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/06/12/e5/1749736633053d7cd4133f46fd8abc604a70b30209.png'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 64
  },
  {
    id: '290138161',
    name: 'Manfinity CasualCool Men\'s Contrast Color Plaid Warm Long Sleeve Fleece Coat',
    category: 'Men',
    subcategory: 'Jackets',
    price: 458735,
    originalPrice: 550482,
    link: 'https://www.shein.com/a-p-290138161.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/0b/176336382398512c883d2b87af71486fe913ad43ca_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/fe/176336383500aa7df907706a78b354e97d96fe225c.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 834
  },
  {
    id: '289472366',
    name: 'Manfinity EMRG Men\'s Solid Color Glossy Zipper Front Casual Hooded Vest Winter Jacket Puffer Vest Dark Blue Gilet Men Royal Blue Vest Men Bubble Coat Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 606855,
    originalPrice: 728226,
    link: 'https://www.shein.com/a-p-289472366.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/19/1763365267bbbf43395e4495b7b34f11e8012be89a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/db/17633652781c23c1fd1dd20345ad5240ed7b27f65f.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 286
  },
  {
    id: '269481160',
    name: 'PAVTROS Casual Modern Men\'s Green Colorblock Woven Fabric Jacket Featuring Stand Collar Zipper And Long Sleeves With Tight Hem Race Car Jacket Green Jackets Wind Breaker Windbreaker Track Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 485645,
    originalPrice: 582774,
    link: 'https://www.shein.com/a-p-269481160.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/06/1f/176242343910153e554f08bdc7e7d0afc7186bf619_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/06/10/1762423455d3649beb8f9f2502ab95c24a9494c7f5.jpg'
    ],
    inStock: true,
    rating: 4.97,
    reviews: 49
  },
  {
    id: '212618389',
    name: 'Men\'s Black Fleece Lapel Button Dual Pocket Casual Jacket, Suitable For Daily Wear, Gatherings, And Relaxation, New Autumn/Winter Long Sleeve Outerwear',
    category: 'Men',
    subcategory: 'Jackets',
    price: 371105,
    originalPrice: 445326,
    link: 'https://www.shein.com/a-p-212618389.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/15/d7/1760496380004614eba6c5fa465bf6a76f50854ce2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/15/63/176049638892d1bb95cd78cbeb7bbbf00341d99a8a.jpg'
    ],
    inStock: true,
    rating: '4.8',
    reviews: 148
  },
  {
    id: '39443363',
    name: 'Manfinity Roghcode Men\'s Casual Letter Printed Hooded Jacket, Spring And Autumn, Going Out Hooded Black Friends Long Sleeve Light Jacket, For Friends, Husband, Boyfriend Gifts',
    category: 'Men',
    subcategory: 'Jackets',
    price: 458735,
    originalPrice: 550482,
    link: 'https://www.shein.com/a-p-39443363.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/07/25/38/172189319729fe9387229fb6a067d346b9d4b98885_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/07/25/5d/17218932245a0c5c99829e8ae75f5d85c458013dbe.jpg'
    ],
    inStock: true,
    rating: 4.96,
    reviews: 216
  },
  {
    id: '291621415',
    name: 'Manfinity Dauomo Winter Outwear Going Out Tops Fall Long Sleeve Tops Embroidered Minimalist Chic Bomber Jacket Men\'s Hooded Sweatshirt Men\'s Sweatshirt Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 350980,
    originalPrice: 421176,
    link: 'https://www.shein.com/a-p-291621415.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/08/20/1762598591d711f4bdd6aa52b87d42f785b26b4383_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/08/e0/17625986001800a159594e387cb4c5d86395e23e40.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 1001
  },
  {
    id: '278663619',
    name: 'PAVTROS Men\'s Letter Print Long Sleeve Casual Loose Jacket Custom Jacket Racing Jacket Black And White Jacket Streetwear Jacket Romwe Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 384560,
    originalPrice: 461472,
    link: 'https://www.shein.com/a-p-278663619.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/07/95/176250623089bf9ef109cf9bd8d4c15e2f48da5c9f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/07/18/176250624576788668b61d0bebd3d18b5080614754.jpg'
    ],
    inStock: true,
    rating: 4.95,
    reviews: 20
  },
  {
    id: '222327262',
    name: 'ROMWE MEN Men\'s Casual Everyday Contrast Color Zip-Up Stand Collar Fleece Jacket, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 404800,
    originalPrice: 485760,
    link: 'https://www.shein.com/a-p-222327262.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/11/1760708902766ff6047f56fbeaa73482e0ea468c91_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/3e/1760708918f9fac199905b4bc7cf2ac76f54cd980d.jpg'
    ],
    inStock: true,
    rating: 4.71,
    reviews: 14
  },
  {
    id: '27615092',
    name: 'Men\'s Casual Loose Thickened Fleece Hooded Jacket, Fall/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 680915,
    originalPrice: 817098,
    link: 'https://www.shein.com/a-p-27615092.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/02/24/06/17087652622dadf3a81eaea69ccf4ee43b2fd6501b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/02/24/02/170876527427d12ad94af249049eae51e1df63b86a.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '211486057',
    name: 'Men\'s Hooded Drawstring Soft Shell Windbreaker Long Sleeve Jacket, Outdoor Sports Casual Jacket With Front Large Pockets, Zipper Side Pockets, Suitable For Daily Wear, Versatile And Popular',
    category: 'Men',
    subcategory: 'Jackets',
    price: 451950,
    originalPrice: 542340,
    link: 'https://www.shein.com/a-p-211486057.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/17/00/17633589707a3e9eff467a89b69e6fd47214823713_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/17/fe/17633589883ee14e906a02b2a1f411b01d9be1c501.png'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '260498068',
    name: 'Manfinity Homme Stylish Men\'s Grey Plaid Woven Fabric Long Sleeve Regular Length Overcoat Flannels For Men Men Shacket Plaid Jacket Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 519340,
    originalPrice: 623208,
    link: 'https://www.shein.com/a-p-260498068.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/04/cb/1762185732cd0e1fa6a5c105f3617bfa4b5b3b221d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/04/5d/1762185742f2299865f3c096895a4d1c9042ccacc0.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 175
  },
  {
    id: '259932250',
    name: 'Men\'s Fashion Casual Versatile Thermal Lined Zip-Up Hooded Jacket,Hoodie Sherpa Lined Casual Sweatshirt Coat,Heavyweight Sherpa Fleece-Lined Full Zip Hoodie,For Fall Winter,Thermal Long Sleeve, Thermal Men, Winter Clothes, Black Hoodie',
    category: 'Men',
    subcategory: 'Jackets',
    price: 391345,
    originalPrice: 469614,
    link: 'https://www.shein.com/a-p-259932250.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/13/87/17630249982937b793ac64e0a7cdda0f7846ad08fd_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/18/70/17634318461d31f6870ee47cea518f6a279d9ebba3.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 31
  },
  {
    id: '228108845',
    name: '2025 Men\'s Autumn/Winter Stand Collar Fleece Jacket, Lightweight Breathable Zip-Up Outerwear',
    category: 'Men',
    subcategory: 'Jackets',
    price: 445280,
    originalPrice: 534336,
    link: 'https://www.shein.com/a-p-228108845.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/15/34/176052264295d6d71f615f46ec5409e52bacaa005e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/15/fc/176052264762ab55fd39540564fbbcab9275829fdb.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 32
  },
  {
    id: '225272548',
    name: 'Manfinity CasualCool Men\'s Solid Color Minimalist Casual Long Sleeve Jacket Men Zip Up Jacket Men Jacket, For Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 505885,
    originalPrice: 607062,
    link: 'https://www.shein.com/a-p-225272548.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/88/17609522416078b9fd8f66c8e8940abc71d7e8c1a1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/d9/1760952255b0d0964b3ee9d0ee554350753b435f6c.jpg'
    ],
    inStock: true,
    rating: 4.54,
    reviews: 22
  },
  {
    id: '234903794',
    name: 'AXEPEAK Men\'s Casual Stand Collar Zip-Up Long Sleeve Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 573160,
    originalPrice: 687792,
    link: 'https://www.shein.com/a-p-234903794.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/24/ca/1761272266d855e6a97883d5cff383608053e6b709_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/24/0a/1761272276f7e237dd8f69808fa62b46928691fd90.jpg'
    ],
    inStock: true,
    rating: 4.52,
    reviews: 53
  },
  {
    id: '298164887',
    name: 'PAVTROS Men\'s Casual Best-Selling Jacket Windbreaker Patchwork Versatile, INS Style, Suitable For Autumn/Winter, Outdoor Hiking, Photo Shoot Essential, Great Gift For Boyfriend/Husband, Leisure Y2K Hooded Windbreaker Y2k Crop Streetwear Jacket, Fleece Lined',
    category: 'Men',
    subcategory: 'Jackets',
    price: 694485,
    originalPrice: 833382,
    link: 'https://www.shein.com/a-p-298164887.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/26/6a/1764148976718f0c339a30b9716626b2ff0893a8ba_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/26/76/176414898857e19dd5dec6b34b8d7eb64e73b62aa7.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 889
  },
  {
    id: '54670215',
    name: 'Manfinity Homme Men\'s Slim-Fit Olive Green American Casual Denim Jacket Going Out Hang Out Work Commute Street',
    category: 'Men',
    subcategory: 'Jackets',
    price: 573160,
    originalPrice: 687792,
    link: 'https://www.shein.com/a-p-54670215.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/01/23/d4/173761718536f5e11bb4b292fe07d6730409631448_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/01/23/6d/17376172043e8090405c3c9fa1a7c224ee7546f9af.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 238
  },
  {
    id: '169282932',
    name: 'Manfinity EMRG Men\'s Long Sleeve Casual Street Style Zip-Up Jacket, Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 539465,
    originalPrice: 647358,
    link: 'https://www.shein.com/a-p-169282932.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/02/af/17567803390573cac52307daa4ab053ba62726a621_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/02/c8/1756780349145b1f9f31cab4efc6a6a4e784a1970e.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 132
  },
  {
    id: '308129658',
    name: 'Manfinity Unisex Men\'s Casual Contrast Color Collar Long Sleeve Jacket, Versatile For Autumn',
    category: 'Men',
    subcategory: 'Jackets',
    price: 707940,
    originalPrice: 849528,
    link: 'https://www.shein.com/a-p-308129658.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/08/3c/17651641461a8f88e48c6c3577742a9c3113f42d90_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/27/e5/17642344634e192e5cce9893d3d5286ffec9fc0718.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 11
  },
  {
    id: '315626196',
    name: 'Men\'s Mid-Length Hooded Down Jacket, Thick Windproof Warm, Solid Color Design, Fashion New Style, Men\'s Casual Outerwear',
    category: 'Men',
    subcategory: 'Jackets',
    price: 728065,
    originalPrice: 873678,
    link: 'https://www.shein.com/a-p-315626196.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/25/f2/17640407181897ed9563cc04afff597082c450a463_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/25/69/176404078433bd4ba307fac95ed41e6ddc85153c28.png'
    ],
    inStock: true,
    rating: 4.66,
    reviews: 15
  },
  {
    id: '278694699',
    name: 'PAVTROS Men\'s Casual Everyday Contrast Color Letter Pattern Stand Collar Jacket Race Car Jacket Custom Jacket Wind Breaker Windbreaker Track Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 384560,
    originalPrice: 461472,
    link: 'https://www.shein.com/a-p-278694699.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/07/d4/17625062207ec8e6d5c948b4186e0b862ba105417c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/07/34/176250623517e1327abd02a86ebf563d1201253266.jpg'
    ],
    inStock: true,
    rating: 4.95,
    reviews: 20
  },
  {
    id: '238395666',
    name: 'Men\'s Outdoor Casual Fashion Jacket, Comfortable Faux Fur Collar Coat, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 519340,
    originalPrice: 623208,
    link: 'https://www.shein.com/a-p-238395666.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/19/be/17608744091e5f402b7bef5b41fe16b12392c970d1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/19/9f/176087442697cb099d880e3a84786ff9578c303cc8.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 5
  },
  {
    id: '308159739',
    name: ' Aesthetic Post--Men\'s Casual Letter Print Thermal Lined Jacket, Autumn/Winter Baseball Jacket Mens Street Wear Zip Up Letter Men Jacket Men Graphic Jacket Mens Varsity Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 553035,
    originalPrice: 663642,
    link: 'https://www.shein.com/a-p-308159739.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/06/8d/1765009637b34135c605c7f293febf62ff25e0eca1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/06/47/17650096482be35b07ec3a088c21d3687af88b7767.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 227
  },
  {
    id: '215458425',
    name: 'HIMLAND Loose Casual Jacket For Men, Suitable For Spring, Autumn And Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 667460,
    originalPrice: 800952,
    link: 'https://www.shein.com/a-p-215458425.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/f8/176049256332ce84c3c9808d7dd5237bcfea997034_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/88/17604925766e903ab44f9de86f393692959b19ad26.jpg'
    ],
    inStock: true,
    rating: '4.7',
    reviews: 99
  },
  {
    id: '240520194',
    name: 'PAVTROS Men\'s Casual Street Style Wool Blend Long Sleeve Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 512555,
    originalPrice: 615066,
    link: 'https://www.shein.com/a-p-240520194.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/27/1d/1761536489829b6acc300a925d04150e5ee8b72345_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/27/56/17615365044912f6c9caeae8d793eb3f6bf8aab530.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 21
  },
  {
    id: '249909386',
    name: 'Manfinity CasualCool Men\'s Solid Color Minimalist Casual Hooded Long Sleeve Fleece Jacket , Grey Zip Up Hoodie',
    category: 'Men',
    subcategory: 'Jackets',
    price: 593400,
    originalPrice: 712080,
    link: 'https://www.shein.com/a-p-249909386.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/fb/1761794533799c3e46ae4fb71872439768c65627e2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/c4/17617945469c7376df908983e3c92d9b028cfe5687.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 105
  },
  {
    id: '109368618',
    name: 'Manfinity CasualCool Men\'s Jackets, Men\'s Buttoned Front Long Sleeve Pocket Simple Jacket, Casual Everyday Wear, Men\'s Jackets, Men\'s Jackets For Fall Winter Edition, Boyfriend Gifts, Warm Long Sleeve Casual Jackets For Going Out Black Jacket For Men Men Casual Jacket Men Shacket Textured Jacket Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 478860,
    originalPrice: 574632,
    link: 'https://www.shein.com/a-p-109368618.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/31/56/1753951925677b2bcae37b46630e24af59b2f3c2ef_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/31/75/175395193660d383d745ba5d5f8545491d5bb584f3.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 65
  },
  {
    id: '216235226',
    name: 'PAVTROS Men\'s Raglan Sleeve Warm Fashion Printed Motorcycle Stand Collar Winter Coats Race Car Jacket Puffy Jacket Men Puffer Jacket Cropped Jacket Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 815695,
    originalPrice: 978834,
    link: 'https://www.shein.com/a-p-216235226.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/14/da/1760418256c010b6d93e298530e99c8a95c710b609_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/14/85/176041826991d66f2a353bda70688680fcbc858e96.jpg'
    ],
    inStock: true,
    rating: 4.98,
    reviews: 53
  },
  {
    id: '288759939',
    name: 'Manfinity CasualCool Men\'s Solid Color Fashionable Minimalist Front Button Lapel Neck Shacket Brown Button Up Men Mens Mocha Bomber Jacket Men Shacket Mens Jackets Casual',
    category: 'Men',
    subcategory: 'Jackets',
    price: 438495,
    originalPrice: 526194,
    link: 'https://www.shein.com/a-p-288759939.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/45/176336010973de1b2b810c6bf7c37f586136a6c6ca_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/ff/1763360121021c2d784f6a402c82523c5c23e08abc.jpg'
    ],
    inStock: true,
    rating: 4.21,
    reviews: 47
  },
  {
    id: '289434887',
    name: 'Manfinity Homme Men\'s Solid Color Single-Breasted Casual Wool Blend Jacket, Autumn/Winter Men Coat Brown Outfit For Men Men Outerwear Woolen Jacket Men Fall Clothes For Men Old Money,Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions, Boyfriend/Husband Gift, Anniversary /Birthday Gift Party Christmas New Years Wedding',
    category: 'Men',
    subcategory: 'Jackets',
    price: 613640,
    originalPrice: 736368,
    link: 'https://www.shein.com/a-p-289434887.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/04/1763687332aef6610cd36aac489f0e7cb3bd1fa67f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/e3/17636873393bd26fd4ff0b79b64fb37f40b657c6dc.jpg'
    ],
    inStock: true,
    rating: 4.59,
    reviews: 44
  },
  {
    id: '234180086',
    name: 'Manfinity LEGND Plus Size Men\'s Contrast Color Patchwork Front Button Baseball Long Sleeve Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 573160,
    originalPrice: 687792,
    link: 'https://www.shein.com/a-p-234180086.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/23/cd/1761205837a4bdea3012c0133b7acf47ae6fdb3d60_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/23/c7/1761205853e318ef3f90531ab3b01cd768e40d75cd.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 116
  },
  {
    id: '42055207',
    name: 'Men\'s Casual Spring Autumn Lightweight Jacket, Stand Collar, Full Print, Zip-Up Long Sleeve Outerwear',
    category: 'Men',
    subcategory: 'Jackets',
    price: 404800,
    originalPrice: 485760,
    link: 'https://www.shein.com/a-p-42055207.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/09/08/44/1725788254cfd8f934fcd44b83ce26622c7a1638a0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/08/21/38/172422482449f83a55287c7c45e4ddaa1f05a224e1.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 390
  },
  {
    id: '295107857',
    name: 'Men\'s Jacket, Warm Thermal Lined Turndown Collar PU Leather Casual Jacket For Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 782000,
    originalPrice: 938400,
    link: 'https://www.shein.com/a-p-295107857.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/17/d2/1765980093087f88a01836581a6bc0aafaab593a76_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/17/3b/1765980072788aa85319fe314b5146d3fd33cf6ce7.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 81
  },
  {
    id: '66759017',
    name: 'PAVTROS Manfinity Streetrush Men\'s Long Sleeve Street College Style, INS Matching High Street Hip-Hop Rock Thick Foam Board Red And White Color-Block Checkered Texture Pattern Design Lapel Zip-Up Jacket, Suitable For All Seasons, Street Rock Style, Perfect For Music Festivals And Everyday',
    category: 'Men',
    subcategory: 'Jackets',
    price: 674245,
    originalPrice: 809094,
    link: 'https://www.shein.com/a-p-66759017.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/16/45/1744797963562b0498e5f78f1f3c6e0b683c931617_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/16/82/1744797967911ef60694730ba5f1f3c6212a3e1e3f.jpg'
    ],
    inStock: true,
    rating: 4.97,
    reviews: 160
  },
  {
    id: '236481263',
    name: 'Manfinity CasualCool Manfinity Homme Men Flap Detail Button Front Flannel Fleece Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 640550,
    originalPrice: 768660,
    link: 'https://www.shein.com/a-p-236481263.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/24/be/17612933376a55ca0d14c69c33590be76fd107e42b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/24/21/17612933478554accf0cf5999ccec3eceb0807cd19.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 411
  },
  {
    id: '281808744',
    name: 'Manfinity Homme Men\'s Solid Color Faux Suede Fleece Long Sleeve Single-Breasted Casual Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 445280,
    originalPrice: 534336,
    link: 'https://www.shein.com/a-p-281808744.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/11/f1/1762872278b4800a4fc0e07a3c97ec9f843a852b26_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/11/f0/1762872286d423fce007128dcd35ebed8670221ed4.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 25
  },
  {
    id: '280826253',
    name: 'Manfinity Mode Men\'s Solid Color Lapel NeckLong Sleeve Double-Breasted Casual Wool Blend Jacket, Autumn/Winter Men Long Coat Mens European Style Overcoat Men Men Street Style Grey Outfit Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 963815,
    originalPrice: 1156578,
    link: 'https://www.shein.com/a-p-280826253.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/45/17636880265b70b15fd0b784edfe55a5b79ab513b9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/bf/176368803751a5f29424b3b515588f5b549ea13577.jpg'
    ],
    inStock: true,
    rating: 4.57,
    reviews: 38
  },
  {
    id: '262899432',
    name: 'Men\'s Casual Sports Jacket, Corduroy Windbreaker Coat, Vintage Multi-Pocket Cargo Jacket, Spring/Autumn',
    category: 'Men',
    subcategory: 'Jackets',
    price: 350980,
    originalPrice: 421176,
    link: 'https://www.shein.com/a-p-262899432.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/28/dc/1761649257ee68e15fc98145a78124a096cfe2a493_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/10/28/9f/17616493299ff0a418407ec7cc5ddde8652614409b.png'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 89
  },
  {
    id: '250013231',
    name: '1pc Men\'s Jacket, Men\'s Casual Minimalist Style Jacket,Fashionable College Style Lightweight,New Spring/Autumn Casual Loose Coat, Suitable For Christmas, New Year Holidays,For Friends, Husband, Boyfriend Gifts',
    category: 'Men',
    subcategory: 'Jackets',
    price: 377890,
    originalPrice: 453468,
    link: 'https://www.shein.com/a-p-250013231.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/26/d4/1761456921fc82a50fcce6cc4a2963501bb1694862_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/26/0c/17614569662950de8cce836562a68b0922eb571db6.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '240922179',
    name: 'Adidas Entrada 22 Men\'s Full Zip Jacket Black',
    category: 'Men',
    subcategory: 'Jackets',
    price: 506000,
    originalPrice: 607200,
    link: 'https://www.shein.com/a-p-240922179.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/09/96/1765279960b41f0ffb2ca261231e88616df6197803_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/27/b9/1761557491629edb92be34025302f61e602b4b6b39.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 1
  },
  {
    id: '134786429',
    name: 'Manfinity CasualCool Men\'s Casual Plant Pattern Long Sleeve Single-Breasted Jacket, Men Graphic Jacket, Mens Streetwear Jacket, Handprint Jacket Men, Floral Jacket Men, Camo Jacket Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 438495,
    originalPrice: 526194,
    link: 'https://www.shein.com/a-p-134786429.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/25/cf/1753406728a517fcdaf34e56c5cbb64870f45d21ac_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/25/bd/17534067425f552f0be45c74d43d232b01c050664b.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 395
  },
  {
    id: '269434308',
    name: 'Manfinity Homme Men\'s Loose Fit Plaid Fleece Long Sleeve Single Breasted Casual Jacket, Autumn Winter,Men Flannel,Winter Men Jacket Men Sweater Jacket Mens Hooded Shacket Men Shacket Mens Plaid Shacket Plaid Jacket Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 741635,
    originalPrice: 889962,
    link: 'https://www.shein.com/a-p-269434308.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/06/e8/17624216302a68781aea8f95247d1a2879ed51e0a1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/06/71/1762421642ab03e04a4e97e1e90833c85e64608a53.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 409
  },
  {
    id: '250046164',
    name: 'Manfinity CasualCool Men\'s Casual Plush Long Sleeve Zip Up Fleece Jacket, Autumn/Winter White',
    category: 'Men',
    subcategory: 'Jackets',
    price: 438495,
    originalPrice: 526194,
    link: 'https://www.shein.com/a-p-250046164.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/82/1761794541d9e1f1033ed7f0e7778ed90855abc58c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/23/176179455230ed1d973c85fbe92dc7394447eff3f3.jpg'
    ],
    inStock: true,
    rating: 4.64,
    reviews: 25
  },
  {
    id: '40244650',
    name: 'Men Long Sleeve Casual Loose Business Leather Jacket, For Fall, Grunge',
    category: 'Men',
    subcategory: 'Jackets',
    price: 694485,
    originalPrice: 833382,
    link: 'https://www.shein.com/a-p-40244650.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/09/11/6c/1726034839cd03ec0246a49ae671a549074f634eb5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/08/06/4d/1722925948fe1462d987d2d914148612359c9fb2a7.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 558
  },
  {
    id: '280706055',
    name: 'Manfinity Homme Men\'s Contrast Color Patchwork Long Sleeve Zip-Up Casual Hoodie Men Zip Up Jacket Men Red Jacket Red Zip Up Red And Black Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 297045,
    originalPrice: 356454,
    link: 'https://www.shein.com/a-p-280706055.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/12/02/17629346359b5bdad80e14cdc017b31a96878d0620_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/12/7f/1762934646acf6bd3148ccb6deaf968b45559b0cf8.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '283924330',
    name: 'Manfinity Hypemode Men\'s Casual Printed Zip-Up Long Sleeve Shirt Patterned Jacket Cropped Zip Up Men Loose Fit Jacket Men S Street Wear Zip Up Zip Up Jacket Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 371105,
    originalPrice: 445326,
    link: 'https://www.shein.com/a-p-283924330.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/25/ef/1764033012f2ed1c97df5f4961e03d149c09c3be78_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/25/c1/1764033029d948905b86292594966b0a83ba8e79cb.jpg'
    ],
    inStock: true,
    rating: 4.68,
    reviews: 57
  },
  {
    id: '99731088',
    name: '2025 Men\'s Long Sleeve Solid Color Casual Simple Padded Coat With Warm Thermal Lining, Stand Collar, For Winter, Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 640550,
    originalPrice: 768660,
    link: 'https://www.shein.com/a-p-99731088.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/10/8d/17495469551a487133624dd00fa2d52026a052219b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/06/10/fe/17495469710614f0498a947d8a5a89234fdc478d21.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 157
  },
  {
    id: '316249982',
    name: 'Men\'s Fashion Casual Versatile Thermal Lined Zip-Up Hooded Jacket,Hoodie Sherpa Lined Casual Sweatshirt Coat,Heavyweight Sherpa Fleece-Lined Full Zip Hoodie,For Fall Winter,Thermal Long Sleeve, Thermal Men, Winter Clothes',
    category: 'Men',
    subcategory: 'Jackets',
    price: 418255,
    originalPrice: 501906,
    link: 'https://www.shein.com/a-p-316249982.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/30/e9/17644928847fdc404c85dc1a40ddd1e92a09bb78ac_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/03/15/1764748461dd4aa3939d7e2b72ea2f4f82b26cc13c.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 31
  },
  {
    id: '214038016',
    name: 'Winter Plus Size Men\'s Fashionable Outdoor Casual Winter Zip-Up Hooded Multi-Pocket Button Thick Thermal Lined Windbreaker Jacket, Suitable For Outings, Hiking, Fishing, Parties, Running, Great Gift For Boyfriend, Husband, Graduation, Father',
    category: 'Men',
    subcategory: 'Jackets',
    price: 640550,
    originalPrice: 768660,
    link: 'https://www.shein.com/a-p-214038016.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/13/f0/1760330642c2288df9bf22960db408d1da7a0dc9f5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/10/13/db/17603307352f94842728be3a78b32d4de36c56831c.png'
    ],
    inStock: true,
    rating: 4.36,
    reviews: 52
  },
  {
    id: '284109505',
    name: 'ROMWE MEN Prep Men\'s Color Block Raglan Sleeve Zipper Closure Casual Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 451950,
    originalPrice: 542340,
    link: 'https://www.shein.com/a-p-284109505.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/27/87/1764223832a04055c80383979822ee44e47764a158_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/27/03/17642238432420f2bccb66147069e2d558bf2fe88c.jpg'
    ],
    inStock: true,
    rating: 4.77,
    reviews: 238
  },
  {
    id: '225969933',
    name: 'New Men\'s Lightweight Zip-Up Hooded Long Sleeve Jacket, Suitable For Spring And Autumn Outdoor Wear',
    category: 'Men',
    subcategory: 'Jackets',
    price: 492315,
    originalPrice: 590778,
    link: 'https://www.shein.com/a-p-225969933.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/13/71/17603386866b1ebc2f60cf164128542fb4465c5d8e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/13/60/17603387134a839b063d602b8ae772f5251f8642f9.jpg'
    ],
    inStock: true,
    rating: 4.96,
    reviews: 30
  },
  {
    id: '222159348',
    name: 'Manfinity CasualCool Men\'s Fashionable Casual Zip-Up Long Sleeve Overcoat Crop Jacket For Men Men Zip Up Jacket Designer Jacket Men Men Summer Jacket Men Jackets Casual',
    category: 'Men',
    subcategory: 'Jackets',
    price: 418255,
    originalPrice: 501906,
    link: 'https://www.shein.com/a-p-222159348.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/19/3f/1763523154d1cf8f62f25ce007ef890b8e1642bc0c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/19/0f/17635231661910c1789f6c56961537617502c5e9b4.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: '209042247',
    name: 'Manfinity Homme Men\'s Plush Hooded Casual Long Sleeve Fleece Jacket, Autumn/Winter Black Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 640550,
    originalPrice: 768660,
    link: 'https://www.shein.com/a-p-209042247.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/e6/175998679154a00a5e84f3e2e037b4c99dfa2e46ac_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/1b/17599868013db4be5f8a2fa95d2e5cceab13a867dd.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 834
  },
  {
    id: '277283209',
    name: 'HIMLAND Men\'s Casual Corduroy Collar Jacket, Suitable For Everyday Wear',
    category: 'Men',
    subcategory: 'Jackets',
    price: 472190,
    originalPrice: 566628,
    link: 'https://www.shein.com/a-p-277283209.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/20/65/17636032917b9da9e383cc9e28a7a02f80dbd1ed7a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/20/9a/17636033066f3221fdadde1fffbd051a43be12062a.jpg'
    ],
    inStock: true,
    rating: 4.94,
    reviews: 76
  },
  {
    id: '208922138',
    name: 'PAVTROS Men\'s Street Style Long Sleeve Jacket, INS Inspired, Black Cross Leather Patches, Colorful Cross Embroidery, Stand Collar Zipper Design, Suitable For Daily Wear, Outings, Sports & Leisure, School, Parties, Music Festivals. Can Be Given As A Gift To Friends Or Boyfriends. Street Wear, Cross Jacket, Y2K Jacket,Windbreaker/Outdoor Windbreaker, Parka,Baggy,',
    category: 'Men',
    subcategory: 'Jackets',
    price: 425040,
    originalPrice: 510048,
    link: 'https://www.shein.com/a-p-208922138.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/9f/1760519826d0af15b716c14110fe415832a04e8c62_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/1c/176051983753d2aaedd44b3d355227ccc27c25b245.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 1
  },
  {
    id: '288756214',
    name: 'Manfinity CasualCool Men\'s Solid Color Regular Shoulder Long Sleeve Zipper Casual Overcoat Men Sports Jackets Light Blue Jacket Men Men Zip Up Jacket Jacket For Man Mens Summer Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 485645,
    originalPrice: 582774,
    link: 'https://www.shein.com/a-p-288756214.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/87/176336006943064ef4772f85ae496f3cc2324c0583_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/c7/1763360082efb65198870cab1dd01bf3966d0483d8.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 209
  },
  {
    id: '40876270',
    name: 'Manfinity EZcore Men\'s Long Sleeve Casual Letter Print Bomber Jacket, Autumn, For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 411585,
    originalPrice: 493902,
    link: 'https://www.shein.com/a-p-40876270.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/10/24/de/1729757325b8a4632ab961cfef8d0c4d5e3b62bbca_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/10/24/df/17297573557aad91ce224ac16f9c7c45952796f87f.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '219382727',
    name: 'Manfinity EMRG Men\'s Geometric Print Long Sleeve Zip Front Casual Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 330740,
    originalPrice: 396888,
    link: 'https://www.shein.com/a-p-219382727.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/16/93/176059572355203f121f18529d1616a47cb973672e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/16/8d/17605957368814c405af9c20d7598bad2fe74ff266.jpg'
    ],
    inStock: true,
    rating: 4.32,
    reviews: 25
  },
  {
    id: '208787864',
    name: 'DAZY Apricot Suede Men\'s Jacket And Coat, Solid Color, Autumn',
    category: 'Men',
    subcategory: 'Jackets',
    price: 782000,
    originalPrice: 938400,
    link: 'https://www.shein.com/a-p-208787864.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/10/2e/17600774335d4a7c70a8d49b2139205961c7ad1ddb_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/10/7c/1760077446378da9de62338f4aed7205f32b862b6a.jpg'
    ],
    inStock: true,
    rating: 4.77,
    reviews: 277
  },
  {
    id: '223228849',
    name: 'Manfinity Homme Women\'s Autumn/Winter Raglan Sleeve Letter Embroidery PU Leather & Woolen Patchwork Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 465405,
    originalPrice: 558486,
    link: 'https://www.shein.com/a-p-223228849.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/18/c5/17607569426c283f9d125e461981900237ddda5d00_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/18/1e/1760756955c5ba06a442237f6656f08c1e37a48f86.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 4
  },
  {
    id: '46855862',
    name: 'AXEPEAK Men\'s Long Sleeve Autumn Fashion Contrast Color Letter Embroidered Hooded Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 667460,
    originalPrice: 800952,
    link: 'https://www.shein.com/a-p-46855862.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/11/06/c7/17308796896b13cfdc71c771018fd0499e471ca146_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/11/06/6b/1730879706d2ab10facf2780f02e8f146a7874b77e.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 162
  },
  {
    id: '278481018',
    name: 'Manfinity Homme Men\'s Casual Everyday Commute Fashion Street Corduroy Lined Warm Loose Long Sleeve Jacket, Autumn/Winter Streetwear, Old Money,Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions,Boyfriend/Husband Gift, Anniversary Gift Christmas',
    category: 'Men',
    subcategory: 'Jackets',
    price: 829150,
    originalPrice: 994980,
    link: 'https://www.shein.com/a-p-278481018.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/02/72/1764643930ab3e494e25dca570b8bd22b79264497c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/02/6c/17646439378d5fff30f6cd2058954c5aee0bfd7225.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '24621802',
    name: 'Men\'s Waterproof Windproof Hooded Fleece Softshell Jacket, Camouflage Design, Ideal For Hiking, Winter Gym Clothes Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 526010,
    originalPrice: 631212,
    link: 'https://www.shein.com/a-p-24621802.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/12/5a/1762940429c819f3dddd4fd2af45047b7573da11f9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2023/10/12/c7/1697112277020cb92b761849eb65da9528847d16dc.jpg'
    ],
    inStock: true,
    rating: 4.95,
    reviews: 835
  },
  {
    id: '309826061',
    name: 'Manfinity CasualCool Men\'s Casual Plaid Pattern Patchwork Pocket Teddy Fleece Jacket, Suitable For Work Commute, Autumn/Winter Plaid Flannel Rhinestone Flannel Men Shacket Men Flannels Plaid Jacket Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 526010,
    originalPrice: 631212,
    link: 'https://www.shein.com/a-p-309826061.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/db/17643219511bf64cb0fe24d7c000babf2edd029453_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/aa/1764321963cc1d088a3816677a10279d95e29c562b.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 834
  },
  {
    id: '312445813',
    name: 'PAVTROS Men\'s Jacket, Casual Hooded Jacket, Solid Color Minimalist Zipper, Versatile Fashion Casual, Open Cardigan Design Casual Top, This Style Makes A Great Gift For Friends, Husbands, Relatives Jacket Hoodie Light Jacket Cropped Zip Up Men Jacket Zip Up Men S Windbreaker Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 532795,
    originalPrice: 639354,
    link: 'https://www.shein.com/a-p-312445813.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/01/2a/1764555093db59b3fe75a0e64a60d564c2228c2817_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/01/da/1764555110d8b4155d9a25f3718bb44423214b1ce8.jpg'
    ],
    inStock: true,
    rating: 4.65,
    reviews: 23
  },
  {
    id: '308070364',
    name: 'Manfinity CasualCool Men\'s Comfortable Flannel Plaid Hooded Long Sleeve Single Pocket Shirt Jacket, Casual For Autumn/Winter, Suitable For Vacation, Party, Office, Dating, Minimalist & Versatile, Fashionable & Elegant Collegiate Style, Great For Self-Wear Or Gift',
    category: 'Men',
    subcategory: 'Jackets',
    price: 458735,
    originalPrice: 550482,
    link: 'https://www.shein.com/a-p-308070364.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/27/53/1764221602a27d3e136f911ebbdb3e24d3dee12de6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/27/bd/1764221616f85979f769757b088e096a9713ae1329.jpg'
    ],
    inStock: true,
    rating: 4.94,
    reviews: 37
  },
  {
    id: '315133962',
    name: 'PAVTROS Men\'s Stand Collar Contrast Color Zip-Up Jacket Rain Jacket Windbreaker Y2k Jacket Mens Windbreaker Jacket Reflective Outfit',
    category: 'Men',
    subcategory: 'Jackets',
    price: 485645,
    originalPrice: 582774,
    link: 'https://www.shein.com/a-p-315133962.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/02/4d/17646669435406b250516a4aa1c0270ef7fe0b2bf6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/02/2a/1764666958f71b910c43b39d0a9a38c1ddbc4846c4.jpg'
    ],
    inStock: true,
    rating: 4.97,
    reviews: 49
  },
  {
    id: '288722433',
    name: 'PAVTROS Men\'s Casual Fashion Street Contrast PU Leather Collar Zip-Up Jacket, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 532795,
    originalPrice: 639354,
    link: 'https://www.shein.com/a-p-288722433.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/51/176335667046c6db8d1c80386dddfcf9bc7d1efb27_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/76/1763356683a7dcee43124b0443d6b596baddb55266.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 43
  },
  {
    id: '23755199',
    name: 'Boyfriend Style Men\'s Color Block Sports Jacket, Windbreaker Gym Clothes Boyfriend Style Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 505885,
    originalPrice: 607062,
    link: 'https://www.shein.com/a-p-23755199.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2023/09/23/e3/1695449930d754bc9cec91c44034582786d0f11d47_square_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2023/08/07/c1/169139248777e1348f5f11e7fd96eba730c951b426.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 346
  },
  {
    id: '316658345',
    name: 'Men\'s Autumn And Winter New Men\'s Lamb Wool Thick And Plush Cotton Jacket, Stand Collar And Plush Jacket, New Plush Jacket, Warm And Comfortable, Suitable For Outdoor Sports, For Friends,Thermal Long Sleeve, Thermal Men, Winter Clothes, Husband, Boyfriend Gifts',
    category: 'Men',
    subcategory: 'Jackets',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-316658345.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/22/67/176380711959c951d472ff266cbfd2b2d321fd6e15_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/22/58/1763807122d75f18fa05a7f7185607f43211e10aed.jpg'
    ],
    inStock: true,
    rating: '4.2',
    reviews: 60
  },
  {
    id: '282318996',
    name: 'Manfinity EMRG Plus Size Men\'s Fashionable Versatile Stand Collar Jacket, Winter Men Puffer Jacket Puffer Jacket Black And Red Puffer Jacket Men Streetwear Jacket Men Bomber Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 1112050,
    originalPrice: 1334460,
    link: 'https://www.shein.com/a-p-282318996.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/12/a9/1762914283f651e34d78bc7068e2a77ff606004b8a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/12/a0/1762914290b5d229104e1aa25d8f46002950ad590a.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 1
  },
  {
    id: '292269149',
    name: 'Manfinity Homme Men\'s Casual Leaf Print Jacket, Autumn Men Graphic Jacket Men Summer Jacket Manfinity Men Jacket Men Bomber Jacket Navy Blue Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 357650,
    originalPrice: 429180,
    link: 'https://www.shein.com/a-p-292269149.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/19/56/176352295496fe9793ef5b4b58634a3f2f4614a88e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/19/1d/176352296458417921aa90642c8803dd36e0cfeaa0.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 33
  },
  {
    id: '238627906',
    name: 'Manfinity Dauomo Men\'s Graphic Print Zip-Up Hoodie Long Sleeve Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 404800,
    originalPrice: 485760,
    link: 'https://www.shein.com/a-p-238627906.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/23/bc/17612102565eb2099dd78251901dafcfeb30b50095_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/23/7d/1761210266b1cb962cd99457988fb022cda86b1bc0.jpg'
    ],
    inStock: true,
    rating: '4.6',
    reviews: 149
  },
  {
    id: '216416568',
    name: 'New Plus Size Men\'s Outdoor Casual Long Sleeve Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 532795,
    originalPrice: 639354,
    link: 'https://www.shein.com/a-p-216416568.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/13/94/176034459854dfc98f0377e211f2ebbc3da392f015_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/13/4c/1760344602f6b73d5d70439ba1f3207d64ceba5775.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 106
  },
  {
    id: '249500435',
    name: '1pc Men\'s Hooded Cotton Padded Mid-Length Jacket, Drawstring Waist, Casual Thick Outerwear For Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 627095,
    originalPrice: 752514,
    link: 'https://www.shein.com/a-p-249500435.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/29/db/176173865125f292064bab7d88ccd9caf12af254a4_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/10/29/3a/1761738896d33a8e313059cb6d256f9116b8054396.png'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 41
  },
  {
    id: '219359173',
    name: 'Manfinity EMRG Men\'s Casual Contrast Color Print Jacket, Autumn',
    category: 'Men',
    subcategory: 'Jackets',
    price: 310500,
    originalPrice: 372600,
    link: 'https://www.shein.com/a-p-219359173.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/16/30/1760595721cb9462895eca25fd18f6faeac48394f8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/16/04/1760595735741df509a553fff2ee995bd73faf0d75.jpg'
    ],
    inStock: true,
    rating: 4.32,
    reviews: 25
  },
  {
    id: '211053213',
    name: 'PAVTROS Young Men\'s Streetwear-Inspired Racing Element Black And White Letter Pattern Positioning Print Zip-Up Stand-Up Collar Short Racing Jacket With College Style ,Jersey Jacket ,Men Jacket ,Fall And Winter Men Clothes',
    category: 'Men',
    subcategory: 'Jackets',
    price: 418255,
    originalPrice: 501906,
    link: 'https://www.shein.com/a-p-211053213.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/10/ab/176006500812361193263f125d99075b872d21a790_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/10/d9/176006501914b8a96a257128759790b123b53920e3.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 132
  },
  {
    id: '227332967',
    name: 'Manfinity Homme Men\'s Solid Color Drop Shoulder Long Sleeve Zip-Up Casual Versatile Jacket Men Jacket Men Zip Up Jacket Grey Jacket Jackets Casual Old Money,Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions,Boyfriend/Husband Gift, Anniversary Gift Christmas Spring/Autumn Fall/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 357650,
    originalPrice: 429180,
    link: 'https://www.shein.com/a-p-227332967.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/15/54/1763175012310a7bb5cd7af8b1531d319f10e88b6d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/15/cc/176317502199d30fd2c69379a81c77d7c0d5d6d09c.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 51
  },
  {
    id: '278704555',
    name: 'Men\'s Hooded Drawstring Soft Shell Windbreaker Jacket, Outdoor Sports Casual Jacket With Front Large Pockets, Zipper Side Pockets, Suitable For Daily Wear, Versatile And Popular,Sun Protection Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 451950,
    originalPrice: 542340,
    link: 'https://www.shein.com/a-p-278704555.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/20/2a/17662161038850043f92d49108275b953983f3b1b0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/20/57/1766216110482091a7e82b789340afb91e3026992c.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '38900519',
    name: 'Manfinity Homme Men\'s Long Sleeve Casual Hooded Padded Coat With Fur Collar, Going Out Winter Coat, For Friends, Husband, Boyfriend Gifts, Men Outerwear, For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 687700,
    originalPrice: 825240,
    link: 'https://www.shein.com/a-p-38900519.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/07/18/b6/17212838214af9db496c77ad583587d99d690d7c2f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/07/18/7f/17212838437c24834aaf76168efda356fb6edf7323.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 224
  },
  {
    id: '317448395',
    name: 'Manfinity Roghcode Men\'s Long Sleeve Hooded Zip-Up New York Casual Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 478860,
    originalPrice: 574632,
    link: 'https://www.shein.com/a-p-317448395.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/25/09/1764038828373a637f4b8b5b6519c3f1674e8de8d4_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/25/a4/1764038840980859872f0bbcb3f0d854e2ae129021.jpg'
    ],
    inStock: true,
    rating: 4.96,
    reviews: 216
  },
  {
    id: '245415857',
    name: 'Men\'s Solid Color Simple Double-Faced Fleece Hooded Plush Casual Zipper Jacket,Men\'s Autumn Winter Reversible Sherpa Thermal Lined Jacket, Lightweight Warm Zip Up Hoodie, For Outdoor Sports, Daily Streetwear, Travel, And Cold Weather Protection',
    category: 'Men',
    subcategory: 'Jackets',
    price: 404800,
    originalPrice: 485760,
    link: 'https://www.shein.com/a-p-245415857.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/24/39/17612741929252d3b9f4d413b7724f886341af5519_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/24/8b/17612742014491baac14ad319f2df966e6ca070054.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 240
  },
  {
    id: '290135558',
    name: 'Claim Dot Men\'s Solid Color Single-Breasted Casual Wool Blend Jacket, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 566490,
    originalPrice: 679788,
    link: 'https://www.shein.com/a-p-290135558.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/d3/1763371552110aba5ade5e2c74683cef701d90213f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/74/176337156713c36ba293988f1a6edd8e49d3701d0d.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 185
  },
  {
    id: '211542233',
    name: 'NASBING Men\'s Winter Ski Jacket Water Resistant Windproof Snowboard Thermal Lined Hooded Winter Clothes 4 Pockets Parka Hiking Camping Climbing,Skiing',
    category: 'Men',
    subcategory: 'Jackets',
    price: 977270,
    originalPrice: 1172724,
    link: 'https://www.shein.com/a-p-211542233.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/10/12/1760080988eb675041af2e3e5b4f015c89f96b6b05_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/10/10/63/1760081438fbe498b69794f524ea2d485f1673fc2a.png'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 510
  },
  {
    id: '25655817',
    name: 'Men Long Sleeve Geo Print Flap Pocket Rave Jacket, For Fall Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 694485,
    originalPrice: 833382,
    link: 'https://www.shein.com/a-p-25655817.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/08/02/31/172258943622755637a2a51dc50679c3fcb0b92cc0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/10/28/74/16984227377f00c4a1c9006fc7e97a3aa87d9c7ecb.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 229
  },
  {
    id: '292112338',
    name: 'Manfinity Homme Men\'s Casual Thermal Lined Hooded Jacket, Versatile For Winter Winter Jacket For Men Bubble Coat Men Mens Outerwear',
    category: 'Men',
    subcategory: 'Jackets',
    price: 734850,
    originalPrice: 881820,
    link: 'https://www.shein.com/a-p-292112338.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/19/a2/1763522986372c64f34f9b202c6afe98a01eb02d89_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/19/1c/1763522998bdc311396dbda1dbaf10375a181c433c.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '305569188',
    name: 'PAVTROS Men\'s Contrast Color Collar Letter Print Zip Front Casual Commuter Jacket Graphic Jackets Zip Up Race Jacket Men S Street Wear Zip Up Streetwear Jacket Men S Windbreaker Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 438495,
    originalPrice: 526194,
    link: 'https://www.shein.com/a-p-305569188.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/25/6c/17640644977d7a8a014a3d1c042785fd74122ab308_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/25/7e/1764064509c6a807f78245756c0155592635a0cab1.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 7
  },
  {
    id: '229419937',
    name: 'Manfinity EMRG Men\'s Casual Long Sleeve Jacket With Contrast Color Line Design',
    category: 'Men',
    subcategory: 'Jackets',
    price: 418255,
    originalPrice: 501906,
    link: 'https://www.shein.com/a-p-229419937.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/21/98/17610479467ee1b180450c353a9ba48fbd9223d544_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/21/43/1761047961bf3602904420eba52a65625bfd08a199.jpg'
    ],
    inStock: true,
    rating: 4.69,
    reviews: 99
  },
  {
    id: '222768844',
    name: 'HUEFORM Men\'s Fleece-Lined Thermal Lined Suedette Long Sleeve Jacket, Sherpa Collar',
    category: 'Men',
    subcategory: 'Jackets',
    price: 889755,
    originalPrice: 1067706,
    link: 'https://www.shein.com/a-p-222768844.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/18/15/1760758158966c7df0eb27c5bf921c79542cc65a52_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/18/fa/17607581735be366d2bc4801d7fc6e838397835ad9.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 1001
  },
  {
    id: '267328239',
    name: '1pc Men\'s Corduroy Collar Long Sleeve Jacket, Thermal Lined Winter Coat, Comfortable For Autumn/Winter, Versatile For Daily Wear And Commute, Machine Washable, Christmas Gift, Old Money Style',
    category: 'Men',
    subcategory: 'Jackets',
    price: 627095,
    originalPrice: 752514,
    link: 'https://www.shein.com/a-p-267328239.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/29/42/17617194288cca204bbd02cb0edb72419b2674a72f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/10/29/59/1761719538d57293cb23bb23167b55e193930e4d05.png'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 14
  },
  {
    id: '266228534',
    name: 'Manfinity Sport Corelite Men\'s Letter Print Long Sleeve Zip Front Drawstring Hooded Sports Jacket Sportswear Men Gym Zip Up Zip Up Athletic Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 330740,
    originalPrice: 396888,
    link: 'https://www.shein.com/a-p-266228534.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/02/25/17646432461245229049efc2928b12bb5c74438a88_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/02/d0/1764643250aece7b6bf8e04aad3e740c7eb791924f.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '303652290',
    name: 'Manfinity Homme Men\'s Plaid Long Sleeve Single-Breasted Drawstring Hooded Casual Shacket Checkered Shirt Men Shirts Streetwear Men Knitted Button Up Men Flannels Plaid Jacket Men Old Money,Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions, Boyfriend/Husband Gift, Anniversary /Birthday Gift Party Christmas New Years Wedding',
    category: 'Men',
    subcategory: 'Jackets',
    price: 411585,
    originalPrice: 493902,
    link: 'https://www.shein.com/a-p-303652290.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/25/ff/1764034508ba68db29945281e8ad48cea4323fc9dd_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/25/a3/1764034521a46516639b4503d6e9b6a4c115c791e4.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '42601449',
    name: 'Men\'s Long Sleeve Letter Print Lightweight Bomber Rave Jacket, Spring Autumn Casual Zippered Baseball Collar Outerwear',
    category: 'Men',
    subcategory: 'Jackets',
    price: 411585,
    originalPrice: 493902,
    link: 'https://www.shein.com/a-p-42601449.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/09/03/77/1725359547fd9c51faa8f269190033ca96ec652f7c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/07/24/5e/17217933527f896b0b8806f0bd547309196e14f469.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 215
  },
  {
    id: '246287289',
    name: 'Men\'s Hooded Jacket With Zipper, Featuring Reflective Stripes For Fashion, Refined Zipper Design, Suitable For Sports Or Casual Wear',
    category: 'Men',
    subcategory: 'Jackets',
    price: 445280,
    originalPrice: 534336,
    link: 'https://www.shein.com/a-p-246287289.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/28/2e/17616362572cd40eea9f7b7725c88348cfb776f3d3_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/28/cd/17616362989baa6afb71815fa8101dbc9235ce98b7.jpg'
    ],
    inStock: true,
    rating: 4.72,
    reviews: 22
  },
  {
    id: '212706037',
    name: 'Manfinity Homme Men\'s Casual Versatile Commuter Corduroy Long Sleeve Jacket, Autumn',
    category: 'Men',
    subcategory: 'Jackets',
    price: 425040,
    originalPrice: 510048,
    link: 'https://www.shein.com/a-p-212706037.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/6a/1759988235af3239f96a5410d0e428dd0afb0cf8c0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/1d/1759988252c6d71ebf4b1be54442f874d3bb9caa85.jpg'
    ],
    inStock: true,
    rating: 4.74,
    reviews: 157
  },
  {
    id: '292210266',
    name: 'PAVTROS Plus Size Men\'s Street Style PU Embroidered Fleece Hoodie Jacket Fur Hoodie Men Letter Men Jacket Mens Plus Fur Men Jackets Zip Up Motorcycle Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 835820,
    originalPrice: 1002984,
    link: 'https://www.shein.com/a-p-292210266.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/25/e0/1764064482b29b642d203baafef2058c84bb4d9ba6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/19/10/1763530000c2b31b65d0b5a3a8b9e998ee965fac5f.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 1
  },
  {
    id: '165999643',
    name: 'PAVTROS Men\'s Long Sleeve Simple Black Corduroy Zip Up Jersey Jacket , Black Corduroy Jacket , Cropped Zip Up Jacket , Streetwear, Jersey Zip Up Jacket, Grunge, Fall/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 458735,
    originalPrice: 550482,
    link: 'https://www.shein.com/a-p-165999643.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/28/40/175635865558d3d0db7beec7712241953d69caaaa7_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/28/e3/17563586675e12656f6e165d28244312a5395e7d59.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 27
  },
  {
    id: '283751036',
    name: 'Manfinity Dauomo Men\'s Casual Everyday Commute Simple Solid Color Zip-Up Baseball Jacket, Spring/Autumn',
    category: 'Men',
    subcategory: 'Jackets',
    price: 283590,
    originalPrice: 340308,
    link: 'https://www.shein.com/a-p-283751036.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/25/5f/176403784114ccc1bfa1376393dbcc941f9d3b088c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/25/6b/17640378471b0db2622005a71a48e5b48deb0d7375.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 1001
  },
  {
    id: '211490582',
    name: 'Men\'s Hooded Drawstring Soft Shell Windbreaker Long Sleeve Jacket, Outdoor Sports Casual Jacket With Front Zipper Pockets, Side Zipper Pockets For Storage, Versatile And Popular',
    category: 'Men',
    subcategory: 'Jackets',
    price: 458735,
    originalPrice: 550482,
    link: 'https://www.shein.com/a-p-211490582.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/17/5c/1763358291fe1039c82103d64f5ce823049869e778_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/17/3c/17633582975d11e7e9d738e39468192cb392631f0d.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '295480615',
    name: 'Aesthetic Post Men\'s Casual Contrast Color Patchwork Slogan Print Jacket, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 451950,
    originalPrice: 542340,
    link: 'https://www.shein.com/a-p-295480615.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/27/76/1764222378e016f0df69336c14caf46506c4913638_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/27/90/1764222386892e7626996189570091b313694b957c.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 2
  },
  {
    id: '210202875',
    name: 'Modcrash Men\'s Stand Collar Fitted Faux Leather Rave Jacket With Zipper Pockets, Motorcycle Style',
    category: 'Men',
    subcategory: 'Jackets',
    price: 640550,
    originalPrice: 768660,
    link: 'https://www.shein.com/a-p-210202875.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/08/23/8b/1724389447163e82fc1130e9f7eef11e58559c7303_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/08/23/41/17243894536ba2253639fe61b8f4aec1067536eb93.jpg'
    ],
    inStock: true,
    rating: 4.71,
    reviews: 645
  },
  {
    id: '240845191',
    name: 'Manfinity Homme Men\'s Long Sleeve Casual Zipper Front Jacket, Spring/Autumn Fall/Winter Old Money,Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions,Boyfriend/Husband Gift, Anniversary Gift Christmas',
    category: 'Men',
    subcategory: 'Jackets',
    price: 532795,
    originalPrice: 639354,
    link: 'https://www.shein.com/a-p-240845191.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/27/54/176154564554f21f085b60b38e6382de91f3557328_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/27/89/1761545658aa58ff2e2c2b6f9f30ed0075a2cabcd5.jpg'
    ],
    inStock: true,
    rating: 4.53,
    reviews: 49
  },
  {
    id: '39389864',
    name: 'Boyfriend Style Men\'s Breathable, Lightweight, Reflective, Thin, Loose New Windproof Jacket, Suitable For Fitness, Running, Exercise, Mountaineering And Other Outdoor Sports Hooded Jackets',
    category: 'Men',
    subcategory: 'Jackets',
    price: 256680,
    originalPrice: 308016,
    link: 'https://www.shein.com/a-p-39389864.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/08/17/55/172390325030e145c82ad37fdfcebb8825a31048e1_thumbnail_405x552.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 373
  },
  {
    id: '214279964',
    name: 'AXEPEAK Men\'s Casual Solid Color Long Sleeve Loose Hooded Winter Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 1064900,
    originalPrice: 1277880,
    link: 'https://www.shein.com/a-p-214279964.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/13/9e/176034520713de4fee76ba00f48aa6af868c4834e5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/13/bd/17603452198571687affb162c1268e3f6cb7f1d683.jpg'
    ],
    inStock: true,
    rating: '4.4',
    reviews: 99
  },
  {
    id: '211500215',
    name: 'Men\'s Hooded Drawstring Soft Shell Windbreaker Long Sleeve Jacket, Outdoor Sports Casual Jacket With Front Large Pockets, Zipper Side Pockets, Suitable For Daily Wear, Versatile And Popular',
    category: 'Men',
    subcategory: 'Jackets',
    price: 458735,
    originalPrice: 550482,
    link: 'https://www.shein.com/a-p-211500215.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/17/3e/1763358267cf96715e1b626032f64b42ed7cfbed88_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/17/c5/17633582790b6e722f258194840304df2e12aac557.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '43889339',
    name: 'Men Long Sleeve Winter Thermal Lined Coat , Loose Casual Windbreaker With Detachable Hood',
    category: 'Men',
    subcategory: 'Jackets',
    price: 775215,
    originalPrice: 930258,
    link: 'https://www.shein.com/a-p-43889339.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/09/21/60/1726851752b1a1c06d2fb58456d0ea45da1f5bffb0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/09/21/b3/172685175487ad58b82256d28131c0febf287f2026.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 231
  },
  {
    id: '230075926',
    name: 'Manfinity Homme Men\'s Plaid Long Sleeve Single-Breasted Fleece Jacket, Autumn/Winter Flannel Plaid Flannel Men Shacket Men Flannels Plaid Jacket Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 553035,
    originalPrice: 663642,
    link: 'https://www.shein.com/a-p-230075926.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/22/da/1761104542a7e5e6b0fac4a2fb72c4b1d4f7fa55eb_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/22/9c/1761104560fcd92528fddc75e470cf3b96e759b152.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '11918976',
    name: 'Manfinity Homme Loose-Fit Men\'s Long Sleeve Drawstring Hooded Zip-Up Outdoor Windbreaker Padded Coat Without Sweater, Fall Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 734850,
    originalPrice: 881820,
    link: 'https://www.shein.com/a-p-11918976.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/10/30/fb/16986565474dfccd2f36fcf44af0ae7acf7dd01a22_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/10/30/b7/1698656572601fcd01824cd106d1694e115e38712d.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '269180414',
    name: 'PAVTROS Men\'s Sports Outdoor Navy Blue Colorblock Jacket With Stand Collar Long Sleeve Woven Fabric And Pockets Regular Length Windbreaker Jacket Race Jacket Cropped Jacket Men S Windbreaker Jacket Track Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 492315,
    originalPrice: 590778,
    link: 'https://www.shein.com/a-p-269180414.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/06/ba/1762400273d1fc28286b36120dea33d6e03b415653_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/06/48/1762400287fed21c83ac658c10bcf8f20028120825.jpg'
    ],
    inStock: true,
    rating: 4.97,
    reviews: 49
  },
  {
    id: '238365044',
    name: 'Manfinity Homme Men\'s Casual Solid Color Fuzzy Long Sleeve Jacket For Autumn/Winter Men Flannel,Winter Men Jacket Men Knitted Button Up Woolen Jacket Shacket Men Fur Coat',
    category: 'Men',
    subcategory: 'Jackets',
    price: 640550,
    originalPrice: 768660,
    link: 'https://www.shein.com/a-p-238365044.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/27/2a/1761527663f0e0672a34cde62a93f3f8281e6d132a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/27/2f/176152767425ba23a72613a8db59a11e26245ec627.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 834
  },
  {
    id: '296857711',
    name: 'Manfinity Homme Men\'s Slim Fit Casual Reversible Lined Jacket, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 734850,
    originalPrice: 881820,
    link: 'https://www.shein.com/a-p-296857711.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/03/176368895944c3a4170098f91678878c25ae373ad3_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/d2/1763688963f7ab17fa28261f67d079b2505af5832d.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 46
  },
  {
    id: '294996064',
    name: 'Men\'s Outdoor Sports PU Leather Jacket, Casual Fashion Thermal Lined Coat, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 748305,
    originalPrice: 897966,
    link: 'https://www.shein.com/a-p-294996064.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/14/d1/1763128608fa3542d45b43686f2827823c7a059f93_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/14/f7/176312865213c4f9f5cb13a23cc50c93a071b6fa93.png'
    ],
    inStock: true,
    rating: 4,
    reviews: 7
  },
  {
    id: '266812087',
    name: 'Men\'s Outdoor Casual Waterproof Windproof Thermal Lined Thick Long Sleeve Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 519340,
    originalPrice: 623208,
    link: 'https://www.shein.com/a-p-266812087.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/05/1e/17623253640c4ab69524176112e887ad5854cca2d3_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/05/53/176232537266e162332a06edc08ad9b94ee974106f.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 374
  },
  {
    id: '250034465',
    name: 'Manfinity CasualCool Men\'s Casual Everyday Contrast Color Print Long Sleeve Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 519340,
    originalPrice: 623208,
    link: 'https://www.shein.com/a-p-250034465.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/81/176179454107d6ef60917e4c1aa129c76f1c304234_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/5a/1761794555f685b7dea4dba1b10d6df072f012bc2c.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 395
  },
  {
    id: '302831820',
    name: 'PAVTROS Men\'s Casual Black Jacket Men Techwear Rain Jacket Y2k Style Jacket Men Windbreaker Jacket Techwear Jacket,Windbreaker/Outdoor Windbreaker, Parka,Baggy,Winter Jacket,Streetwear',
    category: 'Men',
    subcategory: 'Jackets',
    price: 526010,
    originalPrice: 631212,
    link: 'https://www.shein.com/a-p-302831820.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/24/48/1763948149cf8c042d2156807205bacb7c55c0dc85_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/24/64/17639481649f71125959107cd2bd5a67cb9758365f.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 167
  },
  {
    id: '288564689',
    name: 'Manfinity Mode Men\'s Casual Single-Breasted Lapel Wool Blend Coat, Autumn/Winter Cashmere Men S Clothing Woolen Jacket Men Mens Coat Grey Outfit Men Grey Jacket Old Money,Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions, Boyfriend/Husband Gift, Anniversary /Birthday Gift Party Christmas New Years Wedding',
    category: 'Men',
    subcategory: 'Jackets',
    price: 620310,
    originalPrice: 744372,
    link: 'https://www.shein.com/a-p-288564689.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/14/176334201798c1ef59b213530b63f53c7e3ed0f95e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/56/1763342028d22ccbc789c329695f9689a6bcd52016.jpg'
    ],
    inStock: true,
    rating: 4.59,
    reviews: 44
  },
  {
    id: '269442516',
    name: 'Manfinity CasualCool Men\'s Contrast Color Zip-Up Casual Long Sleeve Jacket With Thermal Lining, Autumn/Winter Men Coats Men Outerwear Men Jacket Winter Men Thermal Lined Jacket Men Sherpa Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 815695,
    originalPrice: 978834,
    link: 'https://www.shein.com/a-p-269442516.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/06/3b/1762422651f6f49a2e2e6b179a39929a11f865b0f1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/06/4e/17624226622e79b6fc7b70a0ae308a8cfd38c29151.jpg'
    ],
    inStock: true,
    rating: 4.57,
    reviews: 68
  },
  {
    id: '277079954',
    name: 'Manfinity CasualCool Men\'s Solid Color Zip-Up Casual Wool Blend Jacket, Autumn/Winter Cream Outfit Men Cashmere Men S Clothing Men Zip Up Jacket White Jackets For Men Men Sweater Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 519340,
    originalPrice: 623208,
    link: 'https://www.shein.com/a-p-277079954.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/07/31/1762484700d76a53099d75a3b39ab8356912a0964b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/07/3e/1762484712d35eb0b597df733b7245b1465dc1322d.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 209
  },
  {
    id: '309855408',
    name: 'Manfinity CasualCool Men\'s Applique Hooded Zipper Pocket Solid Color Long Sleeve Jacket And Coat Fur Hoodie Men Winter Clothes Men Fur Jacket Men Hoodie Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 512555,
    originalPrice: 615066,
    link: 'https://www.shein.com/a-p-309855408.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/01/1764321123b79507d8c2d3ca3a5fe50640bb22eab5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/16/176432113454d284097782b5cbcb672308ab7c0488.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 105
  },
  {
    id: '278083715',
    name: 'Men\'s Casual Hooded Sporty Cardigan - Solid Color, Printed, Long-Sleeved, Knitted Fabric, Loose Fit, Suitable For Hiking And Outdoor Activities, Polyester, Round Neck, Sporty Style Jacket And Hooded Coat Suitable For Autumn/Winter Wear',
    category: 'Men',
    subcategory: 'Jackets',
    price: 330740,
    originalPrice: 396888,
    link: 'https://www.shein.com/a-p-278083715.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/30/8d/176180756693d3329277927677fefdf9f892fcbd4e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/10/30/fc/176180762910439a602c948c329738c6be77b970f3.png'
    ],
    inStock: true,
    rating: 5,
    reviews: 1
  },
  {
    id: '246204455',
    name: 'Artur Kramer Men\'s Loose Fit Motorcycle Leather Jacket, New Autumn/Winter Design',
    category: 'Men',
    subcategory: 'Jackets',
    price: 714610,
    originalPrice: 857532,
    link: 'https://www.shein.com/a-p-246204455.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/31/2f/176189577185a60e62386804121378aa53a98a2a96_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/31/90/17618957814fbafbec9b12dae141ef27aa8479f372.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 60
  },
  {
    id: '259722119',
    name: 'Manfinity CasualCool Men\'s Casual Solid Color Single-Breasted Jacket, Autumn Casual Men Cream Men Autumn Fall/Winter Beige Shacket Men Long Sleeve Jacket Old Money,Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions,Boyfriend/Husband Gift, Anniversary Gift Christmas',
    category: 'Men',
    subcategory: 'Jackets',
    price: 445280,
    originalPrice: 534336,
    link: 'https://www.shein.com/a-p-259722119.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/03/22/1762153822fb483f692023c174f82409c3d8248ed8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/03/1f/176215383271bf93b85c8f2a0b4ea2e976040d9539.jpg'
    ],
    inStock: true,
    rating: 4.56,
    reviews: 23
  },
  {
    id: '42546428',
    name: '1pc Men Outdoor Windbreaker, Waterproof Sports Jacket For Spring And Autumn',
    category: 'Men',
    subcategory: 'Jackets',
    price: 323955,
    originalPrice: 388746,
    link: 'https://www.shein.com/a-p-42546428.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/10/08/cb/1728389649e72f6b452c91b6ef63875f7e15f4866f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/09/05/30/1725516593bdbad099da9e776929665273f7b79dbb.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 293
  },
  {
    id: '208390819',
    name: 'ROMWE MEN Men\'s Letter Embroidered Corduroy Zip-Up Casual Winter Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 923450,
    originalPrice: 1108140,
    link: 'https://www.shein.com/a-p-208390819.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/07/80/1762483101c5aa8758f672e74a41970ced077631fa_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/07/8b/17624831206849bb062c967151ead0682069ae692a.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 1
  },
  {
    id: '280648148',
    name: 'Manfinity CasualCool Men\'s Casual Versatile Contrast Color Patchwork Jacket, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 728065,
    originalPrice: 873678,
    link: 'https://www.shein.com/a-p-280648148.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/10/04/176278954046af9cf4eeee40763713ae9a391ff4d9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/10/f5/17627895525a5d21ef704317a4ccc369c2c083ae68.jpg'
    ],
    inStock: true,
    rating: 4.57,
    reviews: 68
  },
  {
    id: '269021572',
    name: 'PAVTROS Men\'s Casual Turndown Collar Thermal-Lined Black Jacket With Small Logo Print, Retro Streetwear Style, Suitable For Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 788785,
    originalPrice: 946542,
    link: 'https://www.shein.com/a-p-269021572.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/06/95/17623975050b924567ca0bd785610dab474c1aa630_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/06/04/17623975190237c835a095e2800d02a5e78a5bfa38.jpg'
    ],
    inStock: true,
    rating: 4.59,
    reviews: 42
  },
  {
    id: '306240911',
    name: 'Manfinity Homme Men\'s Casual Long Sleeve Short Versatile Simple Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 216200,
    originalPrice: 259440,
    link: 'https://www.shein.com/a-p-306240911.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/26/34/176413725161805f92bf529b6b241dd476569515a2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/26/7e/17641372637018dd9175a540aac833e6f5376879b2.jpg'
    ],
    inStock: true,
    rating: 4.71,
    reviews: 90
  },
  {
    id: '257764739',
    name: 'PAVTROS Men\'s Casual Solid Color Long Sleeve Jacket, Versatile For Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 492315,
    originalPrice: 590778,
    link: 'https://www.shein.com/a-p-257764739.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/03/71/17621468937f253f3337a30407d138a687bab899fb_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/03/81/17621469081205b5e25f45f16084079c094acf197a.jpg'
    ],
    inStock: true,
    rating: 4.74,
    reviews: 1001
  },
  {
    id: '301748764',
    name: ' Aesthetic Post--Men\'s Casual Versatile Sporty Stand Collar Jacket, Large Graphic Print, Young Couple Style, Large Pockets, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 532795,
    originalPrice: 639354,
    link: 'https://www.shein.com/a-p-301748764.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/24/2b/1763947689c39abb268afc54c7911087de94571c5d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/24/fc/1763947701ba413bbd0bd098b18061e36b1348863b.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 84
  },
  {
    id: '303056007',
    name: 'Men\'s Casual Fashion PU Leather Jacket, Outdoor Sports Thermal Lining Coat, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 660790,
    originalPrice: 792948,
    link: 'https://www.shein.com/a-p-303056007.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/28/bb/1764311067448ed97331151310a88d9fe2c7278395_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/28/ea/17643111063498f90740e8ded822f8a20dab0e4d55.jpg'
    ],
    inStock: true,
    rating: 4.58,
    reviews: 24
  },
  {
    id: '315647225',
    name: 'Manfinity CasualCool Plaid Casual Warm Long Sleeve Men\'s Jacket, Autumn/Winter Mens Knitted Cardigans Men Sweater Jacket Black And White Jacket Men Cardigan Plaid Jacket Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 519340,
    originalPrice: 623208,
    link: 'https://www.shein.com/a-p-315647225.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/03/51/176474725765854d3312bf4662a8404fccc6327af6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/03/dc/1764747268ba2b13d3f9c930f7a2dafeb3f5d93838.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 797
  },
  {
    id: '309854542',
    name: 'Manfinity Roghcode Men\'s Casual Contrast Color Hooded Long Sleeve Jacket And Coat Star Jacket Cropped Zip Up Men Men S Street Wear Zip Up Men S Tech Wear',
    category: 'Men',
    subcategory: 'Jackets',
    price: 586615,
    originalPrice: 703938,
    link: 'https://www.shein.com/a-p-309854542.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/20/1e/1763629638247fbfc6fff6c534ff9be5d2808b3479_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/20/47/176362965153907a3a4371adb552b692fbcb997586.jpg'
    ],
    inStock: true,
    rating: 1,
    reviews: 1
  },
  {
    id: '297960209',
    name: 'PAVTROS Men\'s Casual Best-Selling Jacket Windbreaker Black Patchwork Versatile, INS Style, Suitable For Autumn/Winter Matching And Daily Wear, Outdoor Hiking Outfit, Photo Shoot Essential, Perfect Gift For Boyfriend/Husband, Men\'s Casual, Y2K Y2k Jacket Streetwear Jacket Mens Streetwear Zip Up Techwear Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 694485,
    originalPrice: 833382,
    link: 'https://www.shein.com/a-p-297960209.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/fd/1763689492a433129826e23c0a0de5b26f71bc6ba3_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/93/176368950461e4cbfaf30cd21c07f3e766a6564d6f.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 889
  },
  {
    id: '283010857',
    name: 'The North Face Simple Dome Men\'s Full Zip Hoodie Black',
    category: 'Men',
    subcategory: 'Jackets',
    price: 1112165,
    originalPrice: 1334598,
    link: 'https://www.shein.com/a-p-283010857.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/09/2f/1765279983353efff69ef47b42eca52a069d2966e5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/13/55/17630417679896d57a66817b1254832eb6521bf358.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 1
  },
  {
    id: '288519444',
    name: 'Manfinity Homme Men\'s Solid Color Contrast Trim Button Front Pocket Furry Long Sleeve Casual Jacket,Turtleneck Men,Men Cardigan,Flannel Men Jacket,Mens Flannel,Winter Men Jacket Men Sweater Jacket Woolen Jacket Men Men Shacket Men Cardigan Sweater Men Cardigans',
    category: 'Men',
    subcategory: 'Jackets',
    price: 492315,
    originalPrice: 590778,
    link: 'https://www.shein.com/a-p-288519444.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/48/17633424116890f1ad1bfb8789fb3112ebf87c8a79_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/ad/17633424184016aa75782b238d9f1648011691bfa7.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 336
  },
  {
    id: '269703599',
    name: 'Devon Thys Men Casual Loose Business Leather Jacket, For Fall, Grunge',
    category: 'Men',
    subcategory: 'Jackets',
    price: 694485,
    originalPrice: 833382,
    link: 'https://www.shein.com/a-p-269703599.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/df/1763713557137ffe41f8c94b3bc05c91addb3b7ef6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/f0/17637135693a3657b5d0e29b761b9541ffd4fd90a7.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 558
  },
  {
    id: '283452447',
    name: 'Men\'s Lapel NeckLong Sleeve Single-Breasted Casual Suit Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 620310,
    originalPrice: 744372,
    link: 'https://www.shein.com/a-p-283452447.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/13/06/17630241666bb5bc2f1edc0bb93a14161454441956_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/13/2a/1763024175e98255e04effb85f110cf64ff2fe5115.png'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '208480933',
    name: 'Thermal Lined Corduroy Jacket, Thick & Stylish, Versatile Warm Padded Coat For Youth,Fleece,Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 606855,
    originalPrice: 728226,
    link: 'https://www.shein.com/a-p-208480933.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/09/f4/1759989315fd68dfb3b7eae69c0e811c1a7a7d4a69_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/10/09/e2/1759989321ec3ccc051c337974517df5054b222d00.png'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 697
  },
  {
    id: '283885126',
    name: ' PAVTROS Manfinity Streetrush Men\'s Street-Style Popular INS Matching Men Jackets And Coats,Men\'s Casual Short Brown PU Leather Zip-Up Jacket, Autumn,Leather Jacket,Streetwear,Winter Jacket,Warm Winter Outfits, Christmas Outfits,Boy Friend Gifts Mens Cropped Jacket Work Jacket Cropped Men Jacket Cropped Zip Up Men Jacket Grey Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 613640,
    originalPrice: 736368,
    link: 'https://www.shein.com/a-p-283885126.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/13/79/1763001926f8f0a8e3d773c9fa7ad51ca07d7d7879_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/13/c7/17630019410c7d0561c5eaeb5f0ba442a581f7b2fe.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 64
  },
  {
    id: '265282920',
    name: 'Men\'s Autumn/Winter New Letter Embroidered Baseball Long Sleeve Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 546250,
    originalPrice: 655500,
    link: 'https://www.shein.com/a-p-265282920.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/08/72/176258687262f1b2d3d59aef0cc99aba21c3337ba7_square_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/08/eb/17625868530ee4ee78635b79e63b3c2e794b96c26c.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 12
  },
  {
    id: '222165156',
    name: 'Manfinity CasualCool Men\'s Solid Color Minimalist Casual Long Sleeve Jacket Jackets For Men Long Sleeve Men Jacket Casual Men Summer Jacket Grey Jacket Grey Button Up Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 438495,
    originalPrice: 526194,
    link: 'https://www.shein.com/a-p-222165156.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/c6/176069346258b54d451b19a51be1b5c1fc8fcb9b0f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/af/17606934750ea9d93f86bf012e15bd82bc7eb7bf7c.jpg'
    ],
    inStock: true,
    rating: 4.67,
    reviews: 34
  },
  {
    id: '246535615',
    name: 'Manfinity LEGND Men\'s Casual Solid Color Jacket, Autumn Mens Jackets Grey Jackets Cropped Men Jacket Men Shacket Mens Jackets Casual',
    category: 'Men',
    subcategory: 'Jackets',
    price: 559705,
    originalPrice: 671646,
    link: 'https://www.shein.com/a-p-246535615.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/28/1763359933dc66c34b6aaf7c5bfcbb964830b7adef_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/9b/17633599475f47a95e6d495ac90ba0dc285b6c6afd.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 249
  },
  {
    id: '250286416',
    name: 'PAVTROS Plus Size Men\'s Casual Fashion Street Hooded Drawstring Loose Cargo Jacket Hooded Jacket Black Jacket Mens Windbreaker Jacket Techwear Jacket,Streetwear,Baggy,Graphic,Matching,Friends,I Love My Boyfriend,Street Style,Couples',
    category: 'Men',
    subcategory: 'Jackets',
    price: 593400,
    originalPrice: 712080,
    link: 'https://www.shein.com/a-p-250286416.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/e1/1761813612cdf16d4d0c310f0dc34886779425e777_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/e1/176181363087ac547eedbb05d94ecf9f9e19518a47.jpg'
    ],
    inStock: true,
    rating: '4.5',
    reviews: 44
  },
  {
    id: '229816448',
    name: 'Manfinity Homme Plus Size Men\'s Letter Print Long Sleeve Zip Front Pocket Drawstring Hoodie Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 377890,
    originalPrice: 453468,
    link: 'https://www.shein.com/a-p-229816448.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/29/aa/1761720449357ed75064822b1dc829430cb0948032_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/22/bc/17610992992e2513b9beecd77a7a86bcb5f9a4d983.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 715
  },
  {
    id: '131136643',
    name: 'Manfinity Homme Men\'s Long Sleeve Casual Solid Color Hooded Jacket, Versatile For Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 586615,
    originalPrice: 703938,
    link: 'https://www.shein.com/a-p-131136643.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/21/36/1753063558fbfee8beec8e3094d616c584787f8b2c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/21/db/175306356877d7dc579fe3df1b5947c1477c3eedeb.jpg'
    ],
    inStock: true,
    rating: 4.98,
    reviews: 63
  },
  {
    id: '317389647',
    name: 'Manfinity EMRG Men\'s Patchwork Baseball Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 593400,
    originalPrice: 712080,
    link: 'https://www.shein.com/a-p-317389647.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/03/1c/17647440806208c1ed575a9059eb267b4e76271c2a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/03/b2/17647440952c437a7f7159d0091dc8dd2fea2f5a41.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 364
  },
  {
    id: '283010300',
    name: 'The North Face Antora Men\'s Full Zip Jacket Black',
    category: 'Men',
    subcategory: 'Jackets',
    price: 1785720,
    originalPrice: 2142864,
    link: 'https://www.shein.com/a-p-283010300.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/pi/2025/12/09/19/1765279981aabae53b9cbc134d35a24ad6da040f3b_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/13/ed/1763041753319d03cd098904a3d0b50e7e458abbe0.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 1
  },
  {
    id: '44111395',
    name: 'Manfinity Homme Men\'s Outdoor Windbreaker Jacket, Multi-Pocket Sports Casual Thermal Lined Going Out Hooded Black Long Sleeve Hooded Jacket, For Friends, Husband, Boyfriend Gifts, For Fall Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 600185,
    originalPrice: 720222,
    link: 'https://www.shein.com/a-p-44111395.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/30/ef/17276785386eeb673aeea1a466c5b68d47cdb9dc07_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/30/32/17276785595bbe7cc88b5c52b774ad177ec4f7c689.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 288
  },
  {
    id: '310754552',
    name: 'PAVTROS Men\'s Casual Zip-Up Thermal Lined Jacket, Warm For Autumn/Winter Racing Jacket Men Cropped Men Jacket Y2k Jacket Men Navy Blue Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 559705,
    originalPrice: 671646,
    link: 'https://www.shein.com/a-p-310754552.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/08/27/176516315788d0f2d2d2b05dd7489d2e47ce96b296_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/08/86/17651631651d7377a57f3d5b76ba17d75f9fb7d84b.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 1001
  },
  {
    id: '313068544',
    name: 'PAVTROS Men\'s Letter Print Long Sleeve Zip Front Casual Jacket Zip Up Jacket Graphic Y2k Zip Up Jacket Y2k Anime Jacket Jacket Graphic',
    category: 'Men',
    subcategory: 'Jackets',
    price: 472190,
    originalPrice: 566628,
    link: 'https://www.shein.com/a-p-313068544.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/01/b0/17645774307768530839ff37dd076cd3fbfdf7c9c2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/01/70/17645774467c9d7630cbc6f84dfda97e3a2d797f2e.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 36
  },
  {
    id: '291700751',
    name: 'Manfinity Homme Men\'s Casual Zip-Up Long Sleeve Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 593400,
    originalPrice: 712080,
    link: 'https://www.shein.com/a-p-291700751.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/19/e4/176351710301ebd7fff5f733932e65b3cb61f02309_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/19/3b/17635171165e6b02dec5ceb79e98ab0ce520bc33cb.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '240555710',
    name: 'Manfinity Homme Plus Size Men\'s Casual Printed Hooded Long Sleeve Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 404800,
    originalPrice: 485760,
    link: 'https://www.shein.com/a-p-240555710.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/23/99/17612057338f160febd75af1fa56736ed8a9ae5d3e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/23/77/1761205746a5dfdb6187b5138a673913d200ff3b43.jpg'
    ],
    inStock: true,
    rating: 4.73,
    reviews: 57
  },
  {
    id: '259956642',
    name: 'Manfinity Denimwave Men\'s Light Blue Drop Shoulder Long Sleeve Short Casual Denim Jacket Cropped Jacket Light Blue Jacket OVERSIZE Washed Blue Street Hang Out Distressed Jeans For Boyfriend & Husband',
    category: 'Men',
    subcategory: 'Jackets',
    price: 505885,
    originalPrice: 607062,
    link: 'https://www.shein.com/a-p-259956642.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/03/75/1762158350a6c25c6d897be3583126aa422b3af9a1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/03/2f/17621583666325547bdab4e62650a86906fc09b338.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 8
  },
  {
    id: '250087260',
    name: 'Manfinity CasualCool Men\'s Long Sleeve Casual Everyday Commute Simple Solid Color Patchwork Pocket Fleece Jacket, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 579945,
    originalPrice: 695934,
    link: 'https://www.shein.com/a-p-250087260.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/b3/17618024166ba07313d6152195b8e71884e71750bc_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/05/1761802426540a96efc588fb152600782bc22dcf20.jpg'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 48
  },
  {
    id: '219262287',
    name: 'Men\'s Casual Patchwork Hooded Drawstring Long Sleeve Jacket For Spring/Autumn Outerwear',
    category: 'Men',
    subcategory: 'Jackets',
    price: 640550,
    originalPrice: 768660,
    link: 'https://www.shein.com/a-p-219262287.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/10/1c/17600946377663edf1d65a1f97ab56c7f0c0937d1e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/10/e6/1760094643b150b7a7891ac94db557efbe00064f9a.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 1001
  },
  {
    id: '265592906',
    name: 'Manfinity Homme Men\'s Solid Color Single-Breasted Casual Long Sleeve Jacket, Autumn Men Casual Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 371105,
    originalPrice: 445326,
    link: 'https://www.shein.com/a-p-265592906.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/04/8d/176224455392f6bb2c292e443335a0761305210cf8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/04/3b/1762244563f64278bbeba528a5a622f4b2a2f7496b.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 42
  },
  {
    id: '260494692',
    name: 'Manfinity Homme Casual Men\'s Grey Lightweight Hooded Jacket Long Sleeve Regular Fit Outdoor Coat Jackets For Men Zip Up Hoodie Jacket Men Grey Jacket Grey Zip Up Hoodie Zipper',
    category: 'Men',
    subcategory: 'Jackets',
    price: 344195,
    originalPrice: 413034,
    link: 'https://www.shein.com/a-p-260494692.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/04/f9/17622198929485f61f0368afe9d6e46034b0c2c5fb_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/04/0f/17622199064bbe15a95ef4144628534533fde1e034.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 1001
  },
  {
    id: '228626892',
    name: 'New Plus Size Men\'s Outdoor Casual Long Sleeve Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 391345,
    originalPrice: 469614,
    link: 'https://www.shein.com/a-p-228626892.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/20/e6/176093786550ea0825166cf26ed2793f8763b68b14_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/20/4a/176093787106bf852a533b9f16296392791574d8d2.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 106
  },
  {
    id: '302361617',
    name: 'Manfinity Homme Men\'s Hooded Thermal Lined Jacket, Black Zip-Up Knit Cardigan, Autumn/Winter Men Winter Jacket Warm Men Hoodie Thermal Lined Men Hoodie Plush Lined Jacket Men Zip Up Hoodie Old Money,Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions, Boyfriend/Husband Gift, Anniversary /Birthday Gift Party Christmas New Years',
    category: 'Men',
    subcategory: 'Jackets',
    price: 559705,
    originalPrice: 671646,
    link: 'https://www.shein.com/a-p-302361617.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/20/7c/176360450692c07c4ec570fa7feb5feed883c75405_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/20/38/1763604515b4f3cd5c02efd76067255f083b7e4862.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 282
  },
  {
    id: '217554760',
    name: ' Aesthetic Post--Men\'s Casual Letter Print Hooded Jacket, Autumn',
    category: 'Men',
    subcategory: 'Jackets',
    price: 478860,
    originalPrice: 574632,
    link: 'https://www.shein.com/a-p-217554760.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/13/48/1760319508b148c1274b41276f13af7faae8d20ea6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/13/65/1760319524cd33097dfe30f048d37090ada66d426d.jpg'
    ],
    inStock: true,
    rating: 4.96,
    reviews: 216
  },
  {
    id: '309840961',
    name: 'Manfinity Homme Men\'s Solid Color Front Button Pocket Casual Long Sleeve Wool Blend Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 600185,
    originalPrice: 720222,
    link: 'https://www.shein.com/a-p-309840961.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/c9/1764321890c0477a0e67f80f3407eb114a77bad9bf_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/e3/1764321903a127fbd684ee9b70f70e7fdf9a8c8062.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 8
  },
  {
    id: '112992392',
    name: 'Men\'s Long Sleeve Padded Hooded Coat, Casual Daily Commute Wear, Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 748305,
    originalPrice: 897966,
    link: 'https://www.shein.com/a-p-112992392.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/04/74/176481414197383cb81edc76923cb9c69f75afd06d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/04/df/1764814153620aca97cc8b9748c86f32c3b68a4cc4.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 69
  },
  {
    id: '296845673',
    name: 'Manfinity Homme Men\'s Slim Fit Casual Reversible Jacket, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 519340,
    originalPrice: 623208,
    link: 'https://www.shein.com/a-p-296845673.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/6b/17636891348330461117893a94008374d41c5c17bf_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/26/176368914698fe6a2b73675774af06739e7ac6997f.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 46
  },
  {
    id: '280240188',
    name: 'Manfinity Homme Men\'s Casual Everyday Contrast Color Zip-Up Hooded Long Sleeve Jacket, Autumn Men Techwear Cropped Techwear Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 478860,
    originalPrice: 574632,
    link: 'https://www.shein.com/a-p-280240188.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/10/de/1762756673904074f75a76f395e6e962fd17d2ab20_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/10/79/17627566852814796bef330477495b04b100b9aba9.jpg'
    ],
    inStock: true,
    rating: '4.7',
    reviews: 130
  },
  {
    id: '225470607',
    name: 'MEN Street Life Men\'s Vintage Washed Loose Metal Zipper Sweatshirt Hoodie (Reinforced Collar, Hem And Shoulder Seams To Prevent Deformation), School',
    category: 'Men',
    subcategory: 'Jackets',
    price: 189290,
    originalPrice: 227148,
    link: 'https://www.shein.com/a-p-225470607.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/16/77/176060469271fd40815e2e605a7eceb8fdc4dc0a5b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/10/16/ac/17606047223503d118f22b6e5530ff271c0ac02238.png'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 261
  },
  {
    id: '316453691',
    name: 'HIMLAND Men\'s Short Leather Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 701155,
    originalPrice: 841386,
    link: 'https://www.shein.com/a-p-316453691.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/15/1e/17657658760e2f98d2a6219ed5f1d9cbbde3b93916_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/15/13/1765765890fca1e97e64ec2f427b753e3fbe52ab1b.jpg'
    ],
    inStock: true,
    rating: 4.54,
    reviews: 11
  },
  {
    id: '216171530',
    name: 'PAVTROS Men\'s Raglan Sleeve Warm Fashion Printed Motorcycle Stand Collar Winter Coats Race Car Jacket Puffy Jacket Men Green Jacket Racing Jacket Padded Jacket Mens Racing Jacket Green Racing Jacket Sport Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 829150,
    originalPrice: 994980,
    link: 'https://www.shein.com/a-p-216171530.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/14/2e/1760418265a199815f27e561d98d7610bdacc6bb88_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/14/3c/176041827854f8c2730693da76633dcc54eeda24f7.jpg'
    ],
    inStock: true,
    rating: 4.98,
    reviews: 53
  },
  {
    id: '250350194',
    name: 'EASEVO Plus Size Men\'s Fashionable Street-Style PU Leather Zip-Up Long Sleeve Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 728065,
    originalPrice: 873678,
    link: 'https://www.shein.com/a-p-250350194.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/e5/1761811938de204c47e0832d02c72dc268d49c5f48_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/18/ec/175021473528c7e3a00bc56f4ddcd32302b1bb2519.jpg'
    ],
    inStock: true,
    rating: '4.6',
    reviews: 21
  },
  {
    id: '250591085',
    name: 'PAVTROS Men\'s Woven Casual Floral Pattern Vacation Style Jacquard Zip-Up Long Sleeve Jacket Summer',
    category: 'Men',
    subcategory: 'Jackets',
    price: 579945,
    originalPrice: 695934,
    link: 'https://www.shein.com/a-p-250591085.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/29/a1/1761715472b1be733ed50f35fe5b642f77ee32088b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/29/ba/1761715490be91c7bac076be8477d74e84fa1ccb5d.jpg'
    ],
    inStock: true,
    rating: 4.97,
    reviews: 160
  },
  {
    id: '232090944',
    name: 'Manfinity EMRG Men\'s Casual Hooded Color Block Patchwork Long Sleeve Jacket, Autumn',
    category: 'Men',
    subcategory: 'Jackets',
    price: 505885,
    originalPrice: 607062,
    link: 'https://www.shein.com/a-p-232090944.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/22/a6/1761138159140d7d1dc1c9584070de7e28689782a5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/22/3b/1761138173c4a84a0f31da60211a5ddb2210492d20.jpg'
    ],
    inStock: true,
    rating: '4.6',
    reviews: 82
  },
  {
    id: '222193131',
    name: 'Manfinity CasualCool Men\'s Solid Color Raglan Sleeve Front Button Casual Versatile Jacket Dusty Blue Shirt Men Light Blue Jacket Men Men Summer Jacket Blue Jacket Men Men Jackets Casual',
    category: 'Men',
    subcategory: 'Jackets',
    price: 445280,
    originalPrice: 534336,
    link: 'https://www.shein.com/a-p-222193131.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/26/1760693493711d2eec62e1d4606d15b731f776f1db_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/93/1760693507d46f797318f309bc42931fa98842ac92.jpg'
    ],
    inStock: true,
    rating: 4.67,
    reviews: 34
  },
  {
    id: '257363304',
    name: 'Manfinity Homme Men\'s Autumn/Winter Multi-Pocket Design Thermal Lined Long Sleeve Jacket, Boyfriend Style Casual Corduroy Lapel Jacket, Fashionable Warm Outerwear Men Jacket Winter Jacket Men Jacket Casual Outerwear Thermal Lined Jacket Men Corduroy Jacket Outerwear Old Money,Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions,Boyfriend/Husband Gift, Anniversary Gift Christmas',
    category: 'Men',
    subcategory: 'Jackets',
    price: 842605,
    originalPrice: 1011126,
    link: 'https://www.shein.com/a-p-257363304.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/03/b9/1762133342d97c742a544202f214dc0d8bb59c123f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/03/08/1762133352be70248e36b67090ba14c29ce23874f1.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '240743048',
    name: 'HIMLAND Men\'s Short Leather Long Sleeve Jacket Mocha Bomber Jacket Loose Vuitton Jacket For Men Brown Jacket Cropped Men Jacket Manfinity Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 674245,
    originalPrice: 809094,
    link: 'https://www.shein.com/a-p-240743048.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/11/6a/17628382836a08eb73c310e493605e2072a468279d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/11/99/17628382995d8abba862208ac04e1b9d503efd8152.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 1
  },
  {
    id: '256771788',
    name: 'Manfinity Homme Men\'s Dropped Shoulder Long Sleeve Warm Casual Hooded Jacket, Versatile Brown Zip Up Hoodie Men Zipper Hoodies For Men Mens Hoodies Casual',
    category: 'Men',
    subcategory: 'Jackets',
    price: 499100,
    originalPrice: 598920,
    link: 'https://www.shein.com/a-p-256771788.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/01/41/1761982216fe3b1c562320d587c8af0274a694350d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/01/8a/176198223038976f6a53cd92059661c3b4e99f657f.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 642
  },
  {
    id: '234858025',
    name: 'Manfinity EZcore Men\'s Casual Street Style Denim Long Sleeve Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 640550,
    originalPrice: 768660,
    link: 'https://www.shein.com/a-p-234858025.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/24/c7/17612693438cffa7c81b3a0f4a9a008884368600dd_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/24/75/176126936347a3732a6f65fd89776c12b163728558.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 754
  },
  {
    id: '250332377',
    name: 'Manfinity Hypemode Men\'s Embossed Zipper Pocket Casual Fashion Long Sleeve Shirt Silver Jacket Men S Street Wear Zip Up Cropped Zip Up Graphic Jacket Zip Up',
    category: 'Men',
    subcategory: 'Jackets',
    price: 357650,
    originalPrice: 429180,
    link: 'https://www.shein.com/a-p-250332377.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/01/82/17619781540318687c10c5c52993d3ba6f87f57506_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/pi/2025/11/01/e2/176197816369e1856f96098caa5681eaca39a07d3b.png'
    ],
    inStock: true,
    rating: 4.68,
    reviews: 57
  },
  {
    id: '213737702',
    name: 'Chillumni Men\'s Casual PU Zipper Long Sleeve Jacket, Fall/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 627095,
    originalPrice: 752514,
    link: 'https://www.shein.com/a-p-213737702.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/13/67/1760319447db86d0f131483662a9aa076320db061e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/13/b0/176031946340fb4fcbf4622ed85f3e01fe951fdb9d.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 387
  },
  {
    id: '250253739',
    name: 'Men\'s Solid Color Lapel Wool Blend Full Zip Jacket, Thick Outerwear, Streetwear, Gentleman Style, Versatile For Multiple Occasions, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 553035,
    originalPrice: 663642,
    link: 'https://www.shein.com/a-p-250253739.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/28/3e/17616332609d74b0353ee35e42c7293ee70b7a9ab8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/16/e6/17632767155cc54e23924aad64bf97e94241bdaa3e.jpg'
    ],
    inStock: true,
    rating: 3.66,
    reviews: 3
  },
  {
    id: '280362340',
    name: 'PAVTROS Men\'s Casual Fashion Street Collegiate Style Patch Decor Baseball Jacket, Autumn/Winter Custom Jacket Mens Jacket Men S Varsity Jacket Letterman Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 505885,
    originalPrice: 607062,
    link: 'https://www.shein.com/a-p-280362340.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/10/08/176276186485f7b21e241043c564b74198a1faacf6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/10/55/1762761881606c7979398ba36b5779f0735e50ad60.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 364
  },
  {
    id: '318822360',
    name: '1pc Thermal Lined Stand Collar Jacket For Men, Casual Zip-Up Windbreaker Coat For Winter, Thermal Lined, Zipper Pockets, Suitable For Daily Wear, Holiday Gift',
    category: 'Men',
    subcategory: 'Jackets',
    price: 532795,
    originalPrice: 639354,
    link: 'https://www.shein.com/a-p-318822360.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/02/af/1764691172e5e20a996f66e9df63cbc848992ed07d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/12/03/b6/1764691287329273214f53abcabeaee19e2db2e4df.png'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 10
  },
  {
    id: '240417984',
    name: ' Aesthetic Post--Men\'s Casual Versatile Sporty Stand Collar Long Sleeve Jacket, Large Graphic Print Young Couple Style, Large Pockets, Autumn/Winter Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 532795,
    originalPrice: 639354,
    link: 'https://www.shein.com/a-p-240417984.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/27/9a/1761536089234368f35a449197abaf2e16533f43c5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/27/1d/1761536103603203a23004eece3c7696d6f7dd2746.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 84
  },
  {
    id: '269443056',
    name: 'Manfinity LEGND Men\'s Letter Graphic Long Sleeve Single-Breasted Casual Baseball Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 505885,
    originalPrice: 607062,
    link: 'https://www.shein.com/a-p-269443056.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/05/69/1762309118ba6c90f0df31e6fcd15074b6314c7560_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/05/2d/17623091272cd72c88b6691f976728635d92dd8908.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 11
  },
  {
    id: '277062340',
    name: 'Manfinity Homme Men\'s Casual Business Long Sleeve Button-Up Overcoats Men Long Coat Black And White Outfit Men White Jackets For Men Men Trench Coat Black And White Jacket Old Money,Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions, Boyfriend/Husband Gift, Anniversary /Birthday Gift Party Christmas New Years',
    category: 'Men',
    subcategory: 'Jackets',
    price: 680915,
    originalPrice: 817098,
    link: 'https://www.shein.com/a-p-277062340.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/07/78/1762479970cbfd29adb15dc24b2c1164227aadd180_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/07/c9/17624799790d255466e3fae1d03dab929f49061139.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 24
  },
  {
    id: '249067714',
    name: 'ROMWE MEN Prep Men\'s Long Sleeve Jacket And Coat, Street American Design Sense Sprouting English Print Motorcycle Windbreaker Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 478860,
    originalPrice: 574632,
    link: 'https://www.shein.com/a-p-249067714.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/29/cf/1761740810e13490cf02db3c2f2c9ad08cd565a456_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/29/06/1761740825a66382f2ce25e60075d859d987c86bbd.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 1
  },
  {
    id: '137423134',
    name: 'Manfinity Hypemode Men\'s Solid Color Stand Collar Long Sleeve Warm Padded Coat, Casual Short Style For Winter Black Zip Up Jacket Winter Jacket Y2k Jacket Puffer Jacket Black Puffer Jacket , Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 539465,
    originalPrice: 647358,
    link: 'https://www.shein.com/a-p-137423134.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/28/6d/1753690009a04e5247f2a97ffb865afda4f493ce09_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/28/6c/175369001726b794611f315c69abfd8f165404ef4f.jpg'
    ],
    inStock: true,
    rating: 4.77,
    reviews: 31
  },
  {
    id: '249560763',
    name: 'Men\'s Streetwear Denim Jacket With Heavy Distressed Frayed Details, Vintage Lapel Collar, Slim Fit Denim Top',
    category: 'Men',
    subcategory: 'Jackets',
    price: 613640,
    originalPrice: 736368,
    link: 'https://www.shein.com/a-p-249560763.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/12/e3/1765524383f365251a54b283c3a4c0814c83c52e31_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/12/12/39/1765524411e39387e50a3f5ebe62dd4fca59e3611a.png'
    ],
    inStock: true,
    rating: '4.3',
    reviews: 88
  },
  {
    id: '326795546',
    name: 'Manfinity EMRG Men\'s Jacket Coat, Turndown Collar Zipper Front, Gray & White Color Block, Spring/Autumn Casual Wear, Commuting, Dating, Photography Outfit',
    category: 'Men',
    subcategory: 'Jackets',
    price: 310500,
    originalPrice: 372600,
    link: 'https://www.shein.com/a-p-326795546.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/16/d8/1765814566be975d48813250742fb97664ccc8fb46_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/16/b6/1765814574a7f5d8d5cb6e7587f195f6a6aaa58f5d.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 47
  },
  {
    id: '216040380',
    name: 'Men\'s Loose Fit Motorcycle Leather Long Sleeve Jacket, New Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 728065,
    originalPrice: 873678,
    link: 'https://www.shein.com/a-p-216040380.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/29/2a/1759078174cae881db3825e801d8209c2e654a5176_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/29/ca/175907818129fa9de9e86495e22428836bfe2630f9.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 60
  },
  {
    id: '261069792',
    name: 'Men\'s Thick Jacket With Thermal Lined And Zipper, Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 492315,
    originalPrice: 590778,
    link: 'https://www.shein.com/a-p-261069792.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/22/92/17611259522def5d517831b4d9b679b08fc9802fa7_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/22/f1/17611259757a3a11a032520e1471a16baad3522632.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 310
  },
  {
    id: '28136489',
    name: 'Men\'s Long Sleeve Minimalist Color Block Bomber Jacket, For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 519340,
    originalPrice: 623208,
    link: 'https://www.shein.com/a-p-28136489.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/12/13/a3/1702437352f418730a36f430621178f96dbb2d6058_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/12/13/36/1702437373f799999499f3475032f7c875e4333df4.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 157
  },
  {
    id: '315621218',
    name: 'Men\'s Hooded Mid-Length Down Jacket, Thick Windproof Warm, Solid Color Design, Fashion New Style, Men\'s Casual Outerwear',
    category: 'Men',
    subcategory: 'Jackets',
    price: 782000,
    originalPrice: 938400,
    link: 'https://www.shein.com/a-p-315621218.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/25/e9/1764040811b23d4beeaa2dab7308833ed272b5806f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/25/6d/1764040927bfb90f55178b381130dfa29c873ca9cc.png'
    ],
    inStock: true,
    rating: 4.66,
    reviews: 15
  },
  {
    id: '301742176',
    name: ' Aesthetic Post--Men\'s Casual Versatile Sporty Stand Collar Jacket, Large Graphic Print, Young Couple Style, Large Pockets, Autumn/Winter Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 519340,
    originalPrice: 623208,
    link: 'https://www.shein.com/a-p-301742176.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/29/97/17643853678e21a884318526a4a05631b7cfbc1f55_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/29/be/1764385378bce08ed915d213ed51848529df6a4568.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 84
  },
  {
    id: '224087448',
    name: 'MEN Street Life Men\'s Vintage Washed Loose Metal Zipper Sweatshirt Hoodie (Reinforced Collar, Hem And Shoulder Seams To Prevent Deformation), School',
    category: 'Men',
    subcategory: 'Jackets',
    price: 283590,
    originalPrice: 340308,
    link: 'https://www.shein.com/a-p-224087448.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/16/44/17606046302520bcb4d4cb0103e533681170fe39d7_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/10/16/5c/1760604671c32179b94dee7574d397073c91d1ea54.png'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 261
  },
  {
    id: '294070518',
    name: 'Manfinity Homme Men\'s Casual Everyday Commute Simple Versatile Contrast Color Zip-Up Hooded Fleece Jacket, Autumn/Winter Hoodie Jacket Mens Streetwear Zip Up Hoodie Zip Fleece Hoodie Cropped Zip Up',
    category: 'Men',
    subcategory: 'Jackets',
    price: 795455,
    originalPrice: 954546,
    link: 'https://www.shein.com/a-p-294070518.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/19/23/17635187434ae25c78ed99486ea9d1b55e0d94fd53_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/19/68/17635187550abebc352bbf2f9d101af3b1afe6f5de.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 14
  },
  {
    id: '42152677',
    name: 'Men\'s New Solid Color Padded Coat, Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 984055,
    originalPrice: 1180866,
    link: 'https://www.shein.com/a-p-42152677.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/08/30/e1/17250202167d060afc59d8c343c353e8d20175efcc_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/08/26/7b/172467700814ec9febf67897cb7d7a8cb53dc1ecbc.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 220
  },
  {
    id: '292379427',
    name: 'Manfinity Homme Men\'s Casual Contrast Color Fleece Zip-Up Jacket, Autumn/Winter Hoodie Jacket Motorcycle Hoodie Racing Hoodie Hoodie Zip Men S Street Wear Zip Up',
    category: 'Men',
    subcategory: 'Jackets',
    price: 620310,
    originalPrice: 744372,
    link: 'https://www.shein.com/a-p-292379427.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/19/6c/1763518178fb91822050aef2b3b118cffbc7f93292_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/19/e2/17635181897accb748174b8b6f62c3dc852a538e5b.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 14
  },
  {
    id: '246310184',
    name: 'Manfinity CasualCool Black Zipper Casual Thermal Lined Long Sleeve Jacket, Winter Black Jacket For Men Men Outerwear Men Jacket Winter Jacket For Man Designer Jack',
    category: 'Men',
    subcategory: 'Jackets',
    price: 802240,
    originalPrice: 962688,
    link: 'https://www.shein.com/a-p-246310184.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/07/be/176248130497acbd74e3f7d5e7e30144757a0fda7e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/07/c1/1762481315b81067da065207c2b94aa7ea1d39711b.jpg'
    ],
    inStock: true,
    rating: 4.57,
    reviews: 68
  },
  {
    id: '262777638',
    name: 'Men\'s Hooded Long Sleeve Jacket With Zipper, Featuring Reflective Stripes For Fashion, Refined Zipper Design, Suitable For Sports Or Casual Wear',
    category: 'Men',
    subcategory: 'Jackets',
    price: 451950,
    originalPrice: 542340,
    link: 'https://www.shein.com/a-p-262777638.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/21/03/1763728981a820f87858cf09361337b510bd6e90ed_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/21/49/1763728989808fc7e87b510f4de3e6a73377c9f70f.jpg'
    ],
    inStock: true,
    rating: 4.72,
    reviews: 22
  },
  {
    id: '320408418',
    name: 'Manfinity Homme Men\'s Jacket And Coat',
    category: 'Men',
    subcategory: 'Jackets',
    price: 579945,
    originalPrice: 695934,
    link: 'https://www.shein.com/a-p-320408418.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/08/97/1765186281b0584a180700c4f943702ab4950fe47b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/08/06/1765186294c4745b16c079cf2f574cb313d6da915b.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 24
  },
  {
    id: '218109499',
    name: 'Men\'s Casual Patchwork Hooded Drawstring Long Sleeve Jacket For Spring/Autumn Outerwear',
    category: 'Men',
    subcategory: 'Jackets',
    price: 586615,
    originalPrice: 703938,
    link: 'https://www.shein.com/a-p-218109499.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/10/58/1760094610156df6fcade436dc29cdc062de1c5b12_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/10/3e/1760094616a30864741d482cf0e4f203965d1645c6.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 1001
  },
  {
    id: '41180506',
    name: 'Manfinity Roghcode Men\'s Long Sleeve Casual Colorblock Letter Printed Rave Outdoor Windbreaker Jacket, Autumn, For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 451950,
    originalPrice: 542340,
    link: 'https://www.shein.com/a-p-41180506.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/13/b2/17261983468d53b56e468716369dedbb0f53e7073a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/08/21/e8/1724231830ee7efa32e2019cb73fe2edef389fc1b3.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 351
  },
  {
    id: '218767803',
    name: 'PAVTROS Men\'s Fleece-Lined Casual Versatile Embroidered Detail Jacket, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 499100,
    originalPrice: 598920,
    link: 'https://www.shein.com/a-p-218767803.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/82/176051970102337103b73c51507be10deac4148a88_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/3a/1760519717cd158187b26f3d1aafa62ee6383773a5.jpg'
    ],
    inStock: true,
    rating: 4.73,
    reviews: 628
  },
  {
    id: '156696973',
    name: 'Manfinity EMRG Men\'s Oblique Button Long Sleeve Jacket, Asymmetrical Button Design Casual Jacket, Recommended Gift For Husband, Boyfriend, Friend, Black Cropped Jacket Men, Black Jacket Men, Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 674245,
    originalPrice: 809094,
    link: 'https://www.shein.com/a-p-156696973.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/21/38/1755762987fa4a1ca426e16c2f958fd7778300f414_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/21/bd/17557629961c7cc170e4b2e793db23d4c15969cf47.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 53
  },
  {
    id: '269146516',
    name: 'PAVTROS Men\'s Stand Collar Contrast Color Zip-Up Jacket Zipup Jacket Wind Breaker Windbreaker Race Jacket Y2k Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 492315,
    originalPrice: 590778,
    link: 'https://www.shein.com/a-p-269146516.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/06/31/17624002831c237af487324560c152f6094c6c9a58_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/06/42/1762400299f1b783c5495a49deb21e95eeddca0073.jpg'
    ],
    inStock: true,
    rating: 4.97,
    reviews: 49
  },
  {
    id: '245839817',
    name: 'Manfinity Sport Corelite Men\'s Casual Solid Color Stand Collar Slim Fit Sports Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 249895,
    originalPrice: 299874,
    link: 'https://www.shein.com/a-p-245839817.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/14/03/1763084737745da3f1afb7e3a9f5118ef443957d86_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/14/52/1763084741f67d6c5cef31ac17709332800d3ca6fa.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '222097273',
    name: 'Men\'s Thermal Lined Jacket, Casual Stand Collar Padded Winter Coat, Warm Thick Outerwear',
    category: 'Men',
    subcategory: 'Jackets',
    price: 371105,
    originalPrice: 445326,
    link: 'https://www.shein.com/a-p-222097273.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/10/4e/17601016986a9fad3ff6b2295bcdae3c99fcb9d4c1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/12/19/d8/1766129382f4cfd792d304a7fb2d84fe3d389f9ebd_square.png'
    ],
    inStock: true,
    rating: 5,
    reviews: 1
  },
  {
    id: '221143659',
    name: 'Core Aspect Men\'s Casual Everyday Commute Simple Solid Color Zip-Up Fold Pleated Collar Jacket, Autumn',
    category: 'Men',
    subcategory: 'Jackets',
    price: 472190,
    originalPrice: 566628,
    link: 'https://www.shein.com/a-p-221143659.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/18/e0/1760779622b69648ac744c73ee806211b062198da0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/18/0b/17607796305a6522665bac667928b484d8baa5ef8b.jpg'
    ],
    inStock: true,
    rating: '4.3',
    reviews: 89
  },
  {
    id: '217328659',
    name: 'PAVTROS Men\'s Contrast Color Print Zip-Up Long Sleeve Corduroy Jacket, Y2k Zip Up Black Graphic Jacket, Fall/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 472190,
    originalPrice: 566628,
    link: 'https://www.shein.com/a-p-217328659.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/e2/176049102526e7810d04d9a76ebe9b096af7070901_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/ae/1760491041be9fcd240ce93b54d8aaf63be1a76858.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 36
  },
  {
    id: '287341292',
    name: 'HUEFORM Men\'s Textured Zipper Casual Versatile Fashion Long Sleeve Jacket Crop Jacket For Men Light Blue Jacket Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 411585,
    originalPrice: 493902,
    link: 'https://www.shein.com/a-p-287341292.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/16/55/176330573193c2a25b90995cb867072284a2648a19_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/16/43/176330573673309d0236647b0ed8168abfa0a227a9.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 1
  },
  {
    id: '256943029',
    name: 'PAVTROS Men\'s Minimalist Printed Hooded Long Sleeve Padded Coat Hoodie Jacket Men Jacket Quilted Jacket Puffy Jacket Streetwear Jacket,Baggy,Graphic,Friends,Alternative,Friends,Streetwear,For Men,Jogging,Hodddie',
    category: 'Men',
    subcategory: 'Jackets',
    price: 788785,
    originalPrice: 946542,
    link: 'https://www.shein.com/a-p-256943029.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/03/a2/1762137758a110d56171f2ba397dfbcda053b7a380_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/03/a6/176213777842987118f402bc5a914795534b78c808.jpg'
    ],
    inStock: true,
    rating: 4,
    reviews: 2
  },
  {
    id: '317520289',
    name: 'Manfinity Hypemode Men\'s Casual Warm Mountain Print Zip-Up Hooded Padded Coat, Autumn/Winter Men Winter Jacket Puffy Jacket Men Bubble Coat Men Mens Outerwear',
    category: 'Men',
    subcategory: 'Jackets',
    price: 761760,
    originalPrice: 914112,
    link: 'https://www.shein.com/a-p-317520289.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/05/64/17649115885277efb70d0b165b1e5ff1fd20182f24_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/05/91/1764911600e1e86248f97838337e12dbc1152ffc90.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 33
  },
  {
    id: '294620514',
    name: 'ROMWE MEN Prep Men\'s Casual Chinese Dragon Print Zip-Up Hooded Jacket, Autumn',
    category: 'Men',
    subcategory: 'Jackets',
    price: 391345,
    originalPrice: 469614,
    link: 'https://www.shein.com/a-p-294620514.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/20/2e/1763618337f4795c4424245923f6bd622da55748b1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/20/bd/1763618354a57aee4fa8034ad9b0b53e982cdb1ac0.jpg'
    ],
    inStock: true,
    rating: '4.7',
    reviews: 85
  },
  {
    id: '316521291',
    name: 'Manfinity Homme Men\'s Casual Plaid Single-Breasted Long Sleeve Jacket, Autumn/Winter Flannels For Men Men Black And White Shirt Long Sleeves Men Street Wear Shirt Men Shacket Plaid Jacket Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 600185,
    originalPrice: 720222,
    link: 'https://www.shein.com/a-p-316521291.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/03/a0/1764749597cfe59ffa59b8f30754ae4225fa16776c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/03/18/17647496104950ef6536aff6322a28ff2688b46818.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 24
  },
  {
    id: '240746827',
    name: 'Men\'s Single-Breasted Pocket Casual Fleece Long Sleeve Jacket, Autumn/Winter Jacket Man Men\'s Outerwear Man,Autumn/Winter Oversized Textured Fabric Jacket Cozy Homewear Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 438495,
    originalPrice: 526194,
    link: 'https://www.shein.com/a-p-240746827.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/23/23/176120625653444df3221b65780aa228f26f913e9c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/23/23/1761206320a48fce5cc9041417a023475c6e7e0e55.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 24
  },
  {
    id: '218827026',
    name: 'DAZY Men\'s Solid Brown Suede Fleece Jacket And Coat, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 775215,
    originalPrice: 930258,
    link: 'https://www.shein.com/a-p-218827026.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/5b/176066553998ad31c0c1314ea50b20aaf71145643a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/2d/176066554911dbd0d010be0585419017d6852993ad.jpg'
    ],
    inStock: true,
    rating: 4.77,
    reviews: 277
  },
  {
    id: '211052762',
    name: 'PAVTROS Young Men\'s Streetwear-Inspired Racing Element Black And White Letter Pattern Positioning Print Zip-Up Stand-Up Collar Short Racing Long Sleeve Jacket With College Style,Jersey Jacket, Fall And Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 418255,
    originalPrice: 501906,
    link: 'https://www.shein.com/a-p-211052762.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/10/19/17600650185c032d24f0e368cf4de2354877732774_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/10/43/17600650299427ec22b49979c862d210b9a7589dae.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 132
  },
  {
    id: '213903687',
    name: 'PAVTROS Men\'s "New York" Slogan Print Terry Embroidery Long-Sleeve Single-Breasted Casual Fashion Baseball Jacket (Including Black Varsity/Letterman Jacket Versions) For Autumn & Winter, Thermal Lined Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 579945,
    originalPrice: 695934,
    link: 'https://www.shein.com/a-p-213903687.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/27/4d/176155833175fb652d867fa751df8237f73aeb63a6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/13/8c/1760319915791681eef17fbba348f434c3fda05350.jpg'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 2
  },
  {
    id: '306240808',
    name: 'Manfinity Homme Men\'s Contrast Color Minimalist Casual Long Sleeve Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 283590,
    originalPrice: 340308,
    link: 'https://www.shein.com/a-p-306240808.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/01/83/17645472115803be21aabea49149e46f84b24d1be7_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/01/ef/17645472216b4846b42e8cfb6638b9db80e863fd28.jpg'
    ],
    inStock: true,
    rating: 4.71,
    reviews: 90
  },
  {
    id: '237999511',
    name: 'SWAVVY Men\'s Tie-Dye Long Sleeve Zip-Up Casual Jacket, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 788785,
    originalPrice: 946542,
    link: 'https://www.shein.com/a-p-237999511.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/27/b8/17615282976c9d6ac241366db5ef68a5232d35acff_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/27/f4/1761528315eee097c2dcaf30645b35d480523b25df.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 2
  },
  {
    id: '207245324',
    name: 'Manfinity EMRG All-Over Print Zip-Up Fleece Casual Jacket, Long Sleeve, Autumn/Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 755090,
    originalPrice: 906108,
    link: 'https://www.shein.com/a-p-207245324.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/12/26/1762876939784ce74865bf9179ddd16bffa73ed3ea_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/12/c1/17628769485c19d20d8e7b53a0f427033f26e410ad.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 14
  },
  {
    id: '318466033',
    name: 'Manfinity Homme Plus Size Men\'s Solid Color Long Sleeve Zip-Up Casual Hooded Winter Jacket Men Winter Jacket Navy Blue Jacket Mens Outerwear Fleece Lined Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 1112050,
    originalPrice: 1334460,
    link: 'https://www.shein.com/a-p-318466033.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/06/11/1765003136dfd9394ab2600e3ca1598996d1327f58_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/06/82/17650031482a5c8ce821ae93953925df452756697a.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 244
  },
  {
    id: '43597640',
    name: 'Manfinity Homme Men Long Sleeve All-Over Print Quilted Zip-Up Hooded Padded Coat For Winter, Going Out Warm Graphic Casual Coat, For Friends, Husband, Boyfriend Gifts, Men Outerwear, For Fall',
    category: 'Men',
    subcategory: 'Jackets',
    price: 768545,
    originalPrice: 922254,
    link: 'https://www.shein.com/a-p-43597640.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/11/01/8d/17304485010c910c0c5171268a70f3661e3719e0da_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/25/6f/1727264373f241d3233ddd9bec3b0da80a6ce081d5.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 157
  },
  {
    id: '278316455',
    name: 'Manfinity Homme Men\'s Textured Jacquard Jacket Set Mens Two Piece Set Mens Grey And White Set Mens Co-Ord Set Mens 2 Piece Set Mens Floral Set',
    category: 'Men',
    subcategory: 'Jackets',
    price: 701155,
    originalPrice: 841386,
    link: 'https://www.shein.com/a-p-278316455.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/10/05/1762768189daa23367b562d3d34fdbfd117d142f16_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/10/0c/1762768209c5d6b2b8687cf6dff1a5c135d6e7b2b6.jpg'
    ],
    inStock: true,
    rating: '4.4',
    reviews: 100
  },
  {
    id: '314549685',
    name: 'Men\'s Autumn/Winter Jacket, Thermal Lined Thick PU Leather Motorcycle Jacket, Casual Wear',
    category: 'Men',
    subcategory: 'Jackets',
    price: 579945,
    originalPrice: 695934,
    link: 'https://www.shein.com/a-p-314549685.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/03/f1/176476701095ca276e19ebf90da95f8baad7ea143b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/04/1b/1764831955d784be9e38a246d897fd209a17a49392.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 85
  },
  {
    id: '257777210',
    name: 'Manfinity CasualCool Men Solid Color Casual Jacket, Suitable For Autumn And Winter Black Denim Jacket Men Men Jacket Winter Men Jackets Casual Woolen Jacket Men Men Shacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 627095,
    originalPrice: 752514,
    link: 'https://www.shein.com/a-p-257777210.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/03/fd/17621470461db1a0ddb2012505a2e97e3a25de94fe_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/03/a3/176214705938daa84e434669c1570b036dfb8d589e.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 53
  },
  {
    id: '229489627',
    name: 'Manfinity EMRG Men\'s Avant-Garde Street Casual Colorblock Woven Fabric Jacket With Stand Collar Zipper And Drop Shoulder Long Sleeves Regular Length',
    category: 'Men',
    subcategory: 'Jackets',
    price: 350980,
    originalPrice: 421176,
    link: 'https://www.shein.com/a-p-229489627.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/22/bd/1761062549571171957d7d12e77662f712d7b5a93a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/22/5a/1761062562b304823ecea0a53dfb760973353b93ea.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 2
  },
  {
    id: '289508975',
    name: 'Manfinity Homme Men\'s Casual Solid Color Double-Breasted Wool Blend Coat, Autumn/Winter Men Fashion Blazer Mens Sports Coat Men Double Breasted Blazer Grey Jacket Grey Double Breasted Blazer Old Money,Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions, Boyfriend/Husband Gift, Anniversary /Birthday Gift Party Christmas New Years Wedding',
    category: 'Men',
    subcategory: 'Jackets',
    price: 633765,
    originalPrice: 760518,
    link: 'https://www.shein.com/a-p-289508975.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/96/17633703868e21d470659980215c2cc737f6a53c15_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/d9/1763370396602718e9f9382c38c1740df6525f5490.jpg'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 88
  },
  {
    id: '223053470',
    name: 'PAVTROS Men\'s Fashionable Young Casual Zip-Up Collar Long Sleeve Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 573160,
    originalPrice: 687792,
    link: 'https://www.shein.com/a-p-223053470.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/6b/176092359920b2cd3d5d356c8758a7d86a91234df7_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/a3/1760923610d59a9c60b3e74a7a22d1cf7efc9a6012.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 43
  },
  {
    id: '256991052',
    name: 'Manfinity Homme Men\'s Street Fashion Motorcycle Long Sleeve Jacket With Zipper And Thermal Lined, Autumn',
    category: 'Men',
    subcategory: 'Jackets',
    price: 721395,
    originalPrice: 865674,
    link: 'https://www.shein.com/a-p-256991052.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/01/e5/176199524419e89778fd974c002fe7673213e801e8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/01/75/176199525141e082a8ffe8ff1be60a97f11bc48936.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 1
  },
  {
    id: '291616645',
    name: 'NEON BLANC Men\'s Fashion Drop Shoulder Long Sleeve Short Faux Fur Jacket, Versatile For Winter',
    category: 'Men',
    subcategory: 'Jackets',
    price: 1112050,
    originalPrice: 1334460,
    link: 'https://www.shein.com/a-p-291616645.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/26/8b/17641258651c0267003190084f3aefe95e3ed6ea61_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/26/28/17641258807d1f0af457f42dcfd098be5087cfdeb1.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 17
  },
  {
    id: '305559274',
    name: 'Men\'s Sports Jacket Windbreaker, Outdoor Travel Hiking Softshell Jacket, Spring & Autumn',
    category: 'Men',
    subcategory: 'Jackets',
    price: 249895,
    originalPrice: 299874,
    link: 'https://www.shein.com/a-p-305559274.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/17/0c/1763356332d156baefe803057bedb8f5fd45919d18_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/17/15/1763357694e0ad1522d3f88e0ae537b7144c2b5311.png'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 19
  },
  {
    id: '282476822',
    name: 'AXEPEAK Men\'s Woven Casual Loose Fit Long Sleeve Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 694485,
    originalPrice: 833382,
    link: 'https://www.shein.com/a-p-282476822.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/12/c4/1762933862084713ece9ff625982d4c708c709007d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/12/f3/1762933875894c5edac6fcc99200055f95b9415e58.jpg'
    ],
    inStock: true,
    rating: 4.71,
    reviews: 14
  },
  {
    id: '308134956',
    name: 'Manfinity EMRG Men\'s Oblique Button Jacket, Asymmetrical Button Design Casual Jacket, Recommended Gift For Husband, Boyfriend, Friend Mens Cropped Blazer Cropped Men Jacket Cropped Zip Up Men Grey Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 667460,
    originalPrice: 800952,
    link: 'https://www.shein.com/a-p-308134956.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/01/bf/1764577363e2a40fcff4df6ed85eb90e96268d7136_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/01/e6/1764577378e38b4bc4d09b33ad427734502ca83026.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 53
  },
  {
    id: '138637130',
    name: 'Manfinity Homme Men\'s Solid Color Stand Collar Loose Casual Winter Jacket Bubble Coat Men Men Winter Clothes Outerwear Men Men Puffer Jacket, Puffer Jacket Men, Puff Coat Men, Black Bubble Coat Men, Coat For Men Puffer',
    category: 'Men',
    subcategory: 'Jackets',
    price: 802240,
    originalPrice: 962688,
    link: 'https://www.shein.com/a-p-138637130.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/04/6e/17542737214b4c446b23000fd4addaac77c0aac065_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/04/cd/1754273727041a86a811e27a58d7ba970238785a6a.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 7
  },
  {
    id: '292042469',
    name: 'Manfinity EMRG Men\'s Casual Contrast Color Patchwork Hooded Jacket, Autumn/Winter Hoodie Jacket Motorcycle Hoodie Hoodie Zip Men S Street Wear Zip Up',
    category: 'Men',
    subcategory: 'Jackets',
    price: 876300,
    originalPrice: 1051560,
    link: 'https://www.shein.com/a-p-292042469.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/19/78/17635181457c2f8e43e3454e8d75d31091d7905cba_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/19/23/1763518156b2469a9162fa7c6acf316bd6dd5028ca.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 14
  },
  {
    id: '309818392',
    name: 'PAVTROS Men\'s Fleece Letter Patch Zip-Up Jacket And Outerwear Cute Jacket Cool Jacket Street Wear Jacket Fleece Jacket Zip Up Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 478860,
    originalPrice: 574632,
    link: 'https://www.shein.com/a-p-309818392.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/1e/1764322027d8e69c0ae67469141e853254a3082c9e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/94/17643220411399fd088a2496286465e1275aef4026.jpg'
    ],
    inStock: true,
    rating: 4.55,
    reviews: 9
  },
  {
    id: '276456374',
    name: 'DAZY Men\'s Autumn Black Zipper Collar Casual Patch Pocket Fleece Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 728065,
    originalPrice: 873678,
    link: 'https://www.shein.com/a-p-276456374.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/10/38/1762739580cc7775e9106635b1a1ace00cffa1973c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/10/d1/1762739585041fb5503d4b7f4e953188c3e34cf391.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 229
  },
  {
    id: '128846944',
    name: 'Manfinity EMRG Men\'s Letter Graphic Street Casual PU Leather Jacket, Y2k, Letter Man Jacket, Personalize Ball Jacket , Fall Winter, Grunge',
    category: 'Men',
    subcategory: 'Jackets',
    price: 627095,
    originalPrice: 752514,
    link: 'https://www.shein.com/a-p-128846944.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/29/1f/17537569685bd25e8b57a8aed025a98b14fd0114b2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/24/da/17533278173d1e2b0cb599404d38392462256607fd.jpg'
    ],
    inStock: true,
    rating: 4.96,
    reviews: 187
  },
  {
    id: '224091968',
    name: 'Winter Plus Size Men\'s High Quality Solid Color Hooded Jacket, Comfortable Lightweight Casual Sporty Bomber Jacket For Spring & Autumn',
    category: 'Men',
    subcategory: 'Jackets',
    price: 270135,
    originalPrice: 324162,
    link: 'https://www.shein.com/a-p-224091968.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/16/06/176061826556080684a60819bc940be6062a552552_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/10/16/b3/17606183385aa00c54db702c083f69cbc63b92eb74.png'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 132
  },
  {
    id: '207649489',
    name: 'Manfinity Homme Loose Fit Men\'s Letter Graphic Zip-Up Hoodie Jacket (Without T-Shirt)',
    category: 'Men',
    subcategory: 'Jackets',
    price: 485645,
    originalPrice: 582774,
    link: 'https://www.shein.com/a-p-207649489.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/ff/1759972293a3c699bac1593eeec5d0ba6f71a8c0b9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/03/1759972307b16de86f5985b3432273496630f6b42c.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '224210898',
    name: 'Manfinity EZcore Men\'s Street Fashion Solid Color Jacket Dark Blue Navy Blue Long Sleeve Mens Clothing Draped Neckline',
    category: 'Men',
    subcategory: 'Jackets',
    price: 317285,
    originalPrice: 380742,
    link: 'https://www.shein.com/a-p-224210898.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/e0/17609624217fa8418c81f62bcfe51e07640e3ad286_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/0a/1760962429e6a658513e8d7a699d46aebe0524ae8e.jpg'
    ],
    inStock: true,
    rating: 4.48,
    reviews: 506
  },
  {
    id: '219878289',
    name: 'Men\'s Outdoor Sports Jacket, Wind-Resistant Jacket, Steel Stamping Phoenix Print Texture, Bomber Jacket, Fashion & Versatile',
    category: 'Men',
    subcategory: 'Jackets',
    price: 135355,
    originalPrice: 162426,
    link: 'https://www.shein.com/a-p-219878289.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/18/87/1760717215e4a559a1dab66184502246a301e14e99_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/03/26/a8/17429962896dc80aa825e1803fb38193519248fa93.png'
    ],
    inStock: true,
    rating: '4.9',
    reviews: 51
  },
  {
    id: '214460667',
    name: 'PAVTROS Men\'s Contrast Stripe Hooded Long Sleeve Jacket Coat Men S Techwear Cropped Zip Up Men Cropped Jacket Men Techwear Jacket Cross Hoodie Men Techwear Techwear Jacket Men Y2k Jacket Men',
    category: 'Men',
    subcategory: 'Jackets',
    price: 404800,
    originalPrice: 485760,
    link: 'https://www.shein.com/a-p-214460667.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/14/b2/17604190634624fefb8b10c6f18570ae01aa81ee83_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/14/54/176041908129d784ea1b0a91590f3ac76a61f7d13a.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 8
  },
  {
    id: '293316254',
    name: 'PAVTROS Men\'s Casual Fashion Street Daily Commute Reflective Contrast Piping Zip-Up Jacket, Spring/Autumn Men Windbreaker Jacket Men Zip Up Jacket Race Jacket Track Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 445280,
    originalPrice: 534336,
    link: 'https://www.shein.com/a-p-293316254.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/19/1f/1763553510cce72ad4371fbcdb5803160a2728b692_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/19/48/17635535299c21328e05f3f702ade667d38c865f53.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 87
  },
  {
    id: '229823041',
    name: 'Manfinity Homme Plus Size Men\'s Casual Printed Hooded Long Sleeve Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 384560,
    originalPrice: 461472,
    link: 'https://www.shein.com/a-p-229823041.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/22/12/17610993766df88dffb01f195245a4aa62da3b9cc2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/22/24/1761099387b9b36b6a5c0d6535438f6011f35df076.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 715
  },
  {
    id: '52661242',
    name: 'Manfinity Mode Men\'s Fashion Casual Business Commuting Men\'s Stand-Up Collar Solid Color Button Long Sleeve Shirt, Men\'s Formal Shirt, Men\'s Solid Color Shirt. Suitable For Daily Wear, Commuting To Work, Going Out, Party, Can Be Paired With Suit Pants Or Suit Suits To Attend Parties, Weddings, Honeymoon Scenes. Can Be Given As A Gift To Sons, Husbands, Boyfriends, Fathers, For Fall, Old Money Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 245180,
    originalPrice: 294216,
    link: 'https://www.shein.com/a-p-52661242.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/f7/1763369722ee182ef635909f8b519140447ecdabe4_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/17/36/17633697290e1f2d84093fc148d8dee804d7d6c826.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 1001
  },
  {
    id: '52271876',
    name: 'Men\'s Casual Eagle Print Round Neck Short Sleeve T-Shirt, Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 191245,
    originalPrice: 229494,
    link: 'https://www.shein.com/a-p-52271876.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/02/07/16/17389208796cf670ad925d6d18f72624f4b7c10786_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/02/07/ca/17389210033d85437d909285ced13e665a0d294c81.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '43967757',
    name: 'Men\'s Business Casual Long Sleeve Solid Black Shirt, Versatile, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 231610,
    originalPrice: 277932,
    link: 'https://www.shein.com/a-p-43967757.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/10/19/84/1729326338da3c3d724dcda0168112d89c77e1f628_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/08/19/3b/1724057349bb8b2265deb5350e7c60d5e479b6c29a.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '65851749',
    name: 'Men\'s Fashionable Printed Loose Short Sleeve T-Shirt | Exquisite Design | Summer Essential | Easy To Pair, Showcases Your Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 157550,
    originalPrice: 189060,
    link: 'https://www.shein.com/a-p-65851749.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/03/31/db/1743426091b5e9d8ca0d01c0c6df97c8c0137e838b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/06/30/18/17512705786ce0c86a9887d5771fd47d347455b147.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 845
  },
  {
    id: '155263736',
    name: 'Men\'s Fashionable New Long Sleeve T-Shirt, Autumn/Winter',
    category: 'Men',
    subcategory: 'Shirts',
    price: 206885,
    originalPrice: 248262,
    link: 'https://www.shein.com/a-p-155263736.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/17/38/1763393271d342cb85f148445951528d07dbaac008_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/09/33/176000289821fa64251effe4116e58994cd33b0975.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 351
  },
  {
    id: '270234514',
    name: 'Men\'s Long Sleeve Single-Breasted Pocket Business Casual Shirt, Autumn/Winter',
    category: 'Men',
    subcategory: 'Shirts',
    price: 352935,
    originalPrice: 423522,
    link: 'https://www.shein.com/a-p-270234514.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/31/a0/1761897986340e29c54027ecdc4442a1c0762906ee_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/31/f8/1761898015dfc6a2b225eabd26b949a8ee39b3d237.jpg'
    ],
    inStock: true,
    rating: '4.7',
    reviews: 39
  },
  {
    id: '150010886',
    name: 'Men\'s Fashion Loose Fit Short Sleeve T-Shirt | Exquisite Design | Summer Essential | Easy To Match | Showcase Your Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 195385,
    originalPrice: 234462,
    link: 'https://www.shein.com/a-p-150010886.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/c6/17633982320f248757510296e4af91f3073aa7e4e2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/18/39/1763398284d79bf2f6dab4aaba4dedd20b9e7c2e3a.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '46995462',
    name: 'Manfinity Mode Men\'s Front Button Long Sleeve Pocket Casual Shirt, Daily Wear, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 265305,
    originalPrice: 318366,
    link: 'https://www.shein.com/a-p-46995462.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/11/08/5d/1731036677b91c2be3feb43dcba984177852a7e368_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/11/08/5c/1731036707290a57bab7de375e423ee2a16c2ff977.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '99355656',
    name: 'Men\'s Fashion Loose Fit Short Sleeve T-Shirt | Elegant Design | Essential For Summer | Easy To Match | Showcases Your Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 206885,
    originalPrice: 248262,
    link: 'https://www.shein.com/a-p-99355656.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/d8/17633976751fef83a970e13522b745db4f96b9306a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/18/bf/1763397695905d17af0dd1a67e9ecc55263d667b3f.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '165627747',
    name: 'Manfinity Homme Men\'s Casual Contrast Trim Short Sleeve Polo Shirt, Versatile For Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 171005,
    originalPrice: 205206,
    link: 'https://www.shein.com/a-p-165627747.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/27/f0/17562850357afe13bdcd6193222f518b59139a0788_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/27/c6/17562850486eaaefe0e707827659d74c2df8c633ef.jpg'
    ],
    inStock: true,
    rating: '5.0',
    reviews: 41
  },
  {
    id: '199715174',
    name: '1pc Men\'s Navy Half-Zip Polo Shirt, For Back To School In Autumn/Winter, Herringbone Jacquard Knit Textured Top, Perfect For Vacation & Casual Wear, Upgraded Fashion Style, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Shirts',
    price: 352935,
    originalPrice: 423522,
    link: 'https://www.shein.com/a-p-199715174.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/03/a9/176215156829dbb4a4f130f67a9ba412c830ef5c9a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/03/55/17621515768af283b1c1608550c84988077030e8a3.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 536
  },
  {
    id: '274783652',
    name: 'Men\'s Retro American Style Plaid Patchwork Design Casual Western Cowboy Loose Long Sleeve Pocket Decor Turndown Collar Full Button Down Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 346150,
    originalPrice: 415380,
    link: 'https://www.shein.com/a-p-274783652.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/10/33/17627533544708644feb7dc7c71d43ab6bf027c1b5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/10/e5/1762753273ca2d5b5954cbcb5c422aa03eb624b902.jpg'
    ],
    inStock: true,
    rating: '4.6',
    reviews: 50
  },
  {
    id: '87466338',
    name: 'GRDR Men\'s Summer Polo Collar Half Zip Short Sleeve T-Shirt, Suitable For Outdoor, Vacation And Casual Wear',
    category: 'Men',
    subcategory: 'Shirts',
    price: 264385,
    originalPrice: 317262,
    link: 'https://www.shein.com/a-p-87466338.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/02/4b/1764673444b71b22bfd32dcbc003367269257b4d7c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/18/59/176348075710a74ba4768ef57e1c16dd3b13243d54.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 700
  },
  {
    id: '103602626',
    name: 'SHEINxLarissa&André Manfinity Homme Manfinity Men\'s Textured Design Polo Shirt Men Knitted Polo Shirt Men Light Blue Polo Shirt Men Baby Blue Shirt Men Textured Polo Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 285545,
    originalPrice: 342654,
    link: 'https://www.shein.com/a-p-103602626.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/20/de/175039019173f13fb3f432d269f57444d72be58238_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/20/5a/1750390200b8b284419b7fd28d4361d0f747310875.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '131148160',
    name: 'Calvornis Elegant White Long Sleeve Dress Shirt For Formal Or Office Wear With Shirt Collar Business Shirts Business Casual Men Shirt , Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 238395,
    originalPrice: 286074,
    link: 'https://www.shein.com/a-p-131148160.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/27/db/1756257817c3a848cd614620b07321073c4a7e657a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/21/60/17530641088933c914a808f7a509b8402929c0621e.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 1001
  },
  {
    id: '132032066',
    name: 'Men\'s Spring/Summer Japanese Style Yin Yang Koi Fish & Samurai Sword Graphic Print Round Neck White T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 191245,
    originalPrice: 229494,
    link: 'https://www.shein.com/a-p-132032066.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/18/19/17528344647c640c79475ea485f85e2aafc68a38db_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/07/18/71/175283448368e119f1e8e91f3b74a9abb3817ad327.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 72
  },
  {
    id: '269643991',
    name: 'Urban Street Wear Men\'s Casual Loose Cropped Shirt.Color-Block Striped.Featuring A Button Placket,Soft And Warm, Comfortable And Breathable, Suitable For Street Wear, Casual Daily Wear, Weekend Outings, Social Gatherings.Christmas&New Year\'s Excellent Gift For Boyfriends Or Husband.',
    category: 'Men',
    subcategory: 'Shirts',
    price: 332695,
    originalPrice: 399234,
    link: 'https://www.shein.com/a-p-269643991.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/15/7e/1765791026d6feda3b3fa6c0fcbdbbc17b066b80ca_thumbnail_405x552.jpg'
    ],
    inStock: true,
    rating: '4.7',
    reviews: 111
  },
  {
    id: '58996112',
    name: 'Plus Size Men\'s Long Sleeve Shirt, Black Button-Down Shirt, Fashion Solid Color Casual Jacket For Stylish Big & Tall Men, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 231610,
    originalPrice: 277932,
    link: 'https://www.shein.com/a-p-58996112.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/03/30/cf/174332502679b5be466f64027ec85c0ce086fabb36_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/spmp/2025/04/02/e2/1743579439a3be73bfc61440f7934a6c9bff509766.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 341
  },
  {
    id: '199169192',
    name: 'Glimmora Casual Loose Fit Crew Neck Short Sleeve T-Shirt For Men',
    category: 'Men',
    subcategory: 'Shirts',
    price: 184460,
    originalPrice: 221352,
    link: 'https://www.shein.com/a-p-199169192.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/22/04/176638442914fe13b959170085b0d7c1c911bd15a1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/31/00/176187658901056621e0241cfe7dbb9b4335a04ef4.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 160
  },
  {
    id: '42895388',
    name: 'Aesthetic Post Men\'s Front-Button Short Sleeve Letter Print Casual Polo Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 245180,
    originalPrice: 294216,
    link: 'https://www.shein.com/a-p-42895388.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/14/f1/1726310497fa27930e2bfce3d5abb34d76361ecb11_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/14/2b/1726310509d321ebebc141c2ed5271afbd7260a9ce.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 1001
  },
  {
    id: '46483000',
    name: 'Manfinity Mode Men\'s Fashion Casual Business Commuting Men\'s Stand-Up Collar Solid Color Button Long Sleeve Shirt, Men\'s Formal Shirt, Men\'s Solid Color Shirt. Suitable For Daily Wear, Commuting To Work, Going Out, Party, Can Be Paired With Suit Pants Or Suit Suits To Attend Parties, Weddings, Honeymoon Scenes. Can Be Given As A Gift To Sons, Husbands, Boyfriends, Fathers, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 245180,
    originalPrice: 294216,
    link: 'https://www.shein.com/a-p-46483000.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/18/58/1744963975a6391a2e0d14a9d11a79f0fc80ce61ca_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/18/2e/17449639802b94692161399406a19af4d3354983c8.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 1001
  },
  {
    id: '91279785',
    name: 'GRDR Men\'s Summer Ribbed Knit Short Sleeve T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 448385,
    originalPrice: 538062,
    link: 'https://www.shein.com/a-p-91279785.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/5a/1763472638e1f8000f7ad511cee0afd34af2e67a29_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/05/f9/1764921218d14b19914f6c8e3900ae2f1cdadef154.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 797
  },
  {
    id: '132889390',
    name: 'Plus Size Men\'s Western Cowboy Vintage Floral Print Button Down Long Sleeve Bullfighter Shirt, Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 258635,
    originalPrice: 310362,
    link: 'https://www.shein.com/a-p-132889390.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/02/7a/1751427269f2ab0ac2ad2e300e391baed188302219_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/07/02/bb/1751427279f5ea6cc91aa2a4930813338209d5fc87.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 5
  },
  {
    id: '127981384',
    name: 'Men\'s Casual Summer Short Sleeve T-Shirt - White, With Print, Round Neck, Soft Polyester Fabric, Lightweight And Breathable, Suitable For Casual Wear',
    category: 'Men',
    subcategory: 'Shirts',
    price: 171005,
    originalPrice: 205206,
    link: 'https://www.shein.com/a-p-127981384.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/12/e7/1752315004835d0111b56a3ab7fc6660a148e6a572_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/07/12/61/17523150097497a0cf5d2c890f539a0831eb42daa6.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 656
  },
  {
    id: '45098779',
    name: 'Manfinity Mode Men\'s Casual/Business Solid Color Long Sleeve Shirt, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 245180,
    originalPrice: 294216,
    link: 'https://www.shein.com/a-p-45098779.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/11/25/10/17325018941ac22cd62ac942969a1e953b9170d2ec_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/11/25/9c/1732501907b3423479422a5ea4d0d56345adf645ef.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 1001
  },
  {
    id: '119273871',
    name: 'GRDR Men\'s Graphic Letter Print Short Sleeve T-Shirt, Comfortable Breathable, Fashionable And For Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 275885,
    originalPrice: 331062,
    link: 'https://www.shein.com/a-p-119273871.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/15/1763456462c2aa241864c9f0856dca022752cc3f4f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/18/34/176345652077102fdd30e8dd60c4ad3543af995647.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 370
  },
  {
    id: '99412062',
    name: 'GRDR Men Fashionable Print Loose Short Sleeve T-Shirt | Exquisite Design | Summer Essential | Easy To Match | Showcase Your Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 206885,
    originalPrice: 248262,
    link: 'https://www.shein.com/a-p-99412062.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/58/1763446908e672bb0fcef8b3561e029b426a713a1e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/18/d3/17634469781adba88d05219b676e3668663ec01f48.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '53352611',
    name: 'Men\'s Fashionable Printed Loose Short Sleeve T-Shirt | Exquisite Design | Essential For Summer | Easy To Match, Showcases Your Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 157550,
    originalPrice: 189060,
    link: 'https://www.shein.com/a-p-53352611.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/01/07/3d/1736259610598e05611740b9aad94372c84ff63f81_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/07/01/b5/1751348972c77704e68cbcfac05729b6efed3ef734.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '63477900',
    name: 'Men\'s Personalized Los Angeles Slogan Print Short Sleeve T-Shirt, Comfortable Breathable Fabric, For Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 164335,
    originalPrice: 197202,
    link: 'https://www.shein.com/a-p-63477900.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/ssms/2025/11/21/d0/17637184685bab54b7d232cc578f226e4cde60dc59_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/23/ed/17638692279e6a7b5930a18a63a9732060a3ab6167.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 790
  },
  {
    id: '62439271',
    name: 'Vintage Men\'s Ribbed Knit Shirt, Short Sleeve Polo Collar, Solid Brown Textured Shirt, Suitable For Summer Vacation, Casual And Office Wear. An Excellent Christmas And New Year Gift For Dad Or Husband.',
    category: 'Men',
    subcategory: 'Shirts',
    price: 299000,
    originalPrice: 358800,
    link: 'https://www.shein.com/a-p-62439271.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/05/07/6d/17466051448e458589f82138ed59711fbc44cb2200_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/05/07/a1/1746605211c9bb8b4d03a911e071c813144380fef4.png'
    ],
    inStock: true,
    rating: 4.97,
    reviews: 183
  },
  {
    id: '47692162',
    name: 'Men\'s Fashion Casual Business Commuter Mandarin Collar Solid Color Button Down Long Sleeve Shirt, Men\'s Formal Slim Fit Shirt, Men\'s Solid Color Shirt. Suitable For Daily Wear, Work Commute, Going Out, Parties, Can Be Paired With Suit Pants Or Suits For Gatherings, Weddings, And Honeymoons. Can Be Given As A Gift To Sons, Husbands, Boyfriends, And Fathers., Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 258635,
    originalPrice: 310362,
    link: 'https://www.shein.com/a-p-47692162.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/20/1b/1766210363b99399b5ad69c203a38b29adc5192fd9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/20/1b/1766210371e829a9ebb9c5faa7c22ff4efffdbd411.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 343
  },
  {
    id: '126090308',
    name: 'Manfinity CasualCool Men\'s Casual Solid Color Long Sleeve Shirt Men White Linen Shirt Men White Casual Shirt Men Textured Shirt Pure Cotton Men Shirt, White Shirt For Men, Men Summer, Fall, Old Money Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 305785,
    originalPrice: 366942,
    link: 'https://www.shein.com/a-p-126090308.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/14/2a/1752463530ab98568a747e4bbec60203903263d6a6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/14/02/1752463542b1fc672c3ad95a699823968c9a2635d8.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 377
  },
  {
    id: '98485402',
    name: 'Men\'s Black Striped Formal Shirt, Gentlemanly & Simple Striped Long Sleeve Shirt, Slim Fit, Suitable For Business, Casual Wear In Spring/Autumn/Summer, Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 224940,
    originalPrice: 269928,
    link: 'https://www.shein.com/a-p-98485402.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/13/62/1749776504aee3933a5d30b6ed199b3a215804ce51_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/06/13/0a/17497765205d933f91c2a091c05ff3aa37a25943aa.jpg'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 110
  },
  {
    id: '122891529',
    name: 'Men\'s Fashionable Loose Short Sleeve T-Shirt | Exquisite Design | Essential For Summer | Easy To Match | Showcases Your Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 206885,
    originalPrice: 248262,
    link: 'https://www.shein.com/a-p-122891529.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/da/176339767944e5cb79a7d192108f34a950aeb14ca9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/18/e3/1763397701f8f8d2fa12a6743162497d6c9d5781b5.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '31307284',
    name: 'Men\'s Solid Color Versatile Crew Neck Casual Short Sleeve T-Shirt, 2000s Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 272090,
    originalPrice: 326508,
    link: 'https://www.shein.com/a-p-31307284.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/08/05/8c/175436263246fd9c6743845ccf6c28dce222da307b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/08/05/c7/1754362644bec8ed3ceedc465fd3c63d75536d3926.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '22143644',
    name: 'Manfinity Homme Loose Fit Men\'s Solid Color Button-Up Short Sleeve Casual Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 258635,
    originalPrice: 310362,
    link: 'https://www.shein.com/a-p-22143644.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/08/28/15/169318887068e8d858bf3676d7257df7cf871160f4_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/08/28/e7/1693188884904b3377ef9e9fe0e0a6b12b06f73a90.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '87508302',
    name: 'Manfinity Homme Men\'s Solid Color Zip-Up Short Sleeve Polo Shirt Polo Shirt For Men Men Shirts Polo Polo Shirts For Men Collar Polo T Shirt Men',
    category: 'Men',
    subcategory: 'Shirts',
    price: 278760,
    originalPrice: 334512,
    link: 'https://www.shein.com/a-p-87508302.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/28/0b/17483971959a96d13249d3c7272c0434702afdd3a0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/28/8c/174839720208dbb4764b6d8405b2797655f8a63cce.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '44808174',
    name: 'Manfinity Homme 1pc Men Floral Patchwork Print Long Sleeve Button Down Shirt, Chic Party Wear For Spring And Autumn, Fall, Old Money Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 272090,
    originalPrice: 326508,
    link: 'https://www.shein.com/a-p-44808174.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/10/14/7e/1728872269ee0e4443930eeb3fdde0ad98b0d5f8b8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/10/14/38/1728872292bb6aebac66ed066cb6aea28bbf9f6929.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '68726935',
    name: 'Manfinity BRENVOR Men\'s Fitted Jacquard Knit Turn-Down Collar Short Sleeve Casual Shirt, Suitable For Summer Daily Wear',
    category: 'Men',
    subcategory: 'Shirts',
    price: 305785,
    originalPrice: 366942,
    link: 'https://www.shein.com/a-p-68726935.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/13/23/17445491852ef890c1a42847eeeac31a03a05c2e7c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/13/17/17445491996fdd03a475d8c6fc2c41c6df3efa2344.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 99
  },
  {
    id: '205358480',
    name: 'Manfinity Homme Men\'s Fashionable Casual Plaid Print Button-Down Long Sleeve Shirt Brown Button Up Men Shirt Grunge Streetwear Men Shirt Layered Shirts Plaid Jacket Men Old Money,Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions,Boyfriend/Husband Gift, Anniversary Gift,Christmas Mens Shirt Grunge Mens Layered Shirts',
    category: 'Men',
    subcategory: 'Shirts',
    price: 285545,
    originalPrice: 342654,
    link: 'https://www.shein.com/a-p-205358480.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/04/38/1759549680ced3510fb079a78b58cf5a736389de8a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/04/87/175954969056e1f5b2ef017ed46925b6f72d4a828c.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 722
  },
  {
    id: '83590026',
    name: 'Manfinity CasualCool Men\'s Casual Vacation Style, Featuring An INS-Inspired Geometric Diamond-Textured Jacquard Knit Short-Sleeve Polo Shirt. Perfect For Music Festivals, Hawaii Beach Getaways',
    category: 'Men',
    subcategory: 'Shirts',
    price: 258635,
    originalPrice: 310362,
    link: 'https://www.shein.com/a-p-83590026.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/21/2c/174781776422a2cfde963f64472cd70b383fdbfcd0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/21/18/17478177716f1f2a3fd6a62f217e01e138c9054f4e.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '41378933',
    name: 'Manfinity BRENVOR 3pcs Pack Men\'s Solid Color Crew Neck Short Sleeve Casual T-Shirt, Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 352935,
    originalPrice: 423522,
    link: 'https://www.shein.com/a-p-41378933.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/08/24/b7/172447650795982e38050f6b480ac99a8081fcb9b8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/08/24/a3/172447655569063da0e8381f74534ade74911e8f9b.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '27576311',
    name: 'Manfinity Homme Men\'s Color-Block Polo Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 231610,
    originalPrice: 277932,
    link: 'https://www.shein.com/a-p-27576311.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/12/13/6c/1702439074954dfa067814ebb62eb205bac4e8e0c6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/12/13/59/17024390947544893c6346fd71e9dfe6dcad025dfb.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 1001
  },
  {
    id: '46495292',
    name: 'Manfinity Mode Men\'s Fashion Casual Business Commuting Men\'s Stand-Up Collar Solid Color Button Long Sleeve Shirt, Men\'s Formal Shirt, Men\'s Solid Color Shirt. Suitable For Daily Wear, Commuting To Work, Going Out, Party, Can Be Paired With Suit Pants Or Suit Suits To Attend Parties, Weddings, Honeymoon Scenes. Can Be Given As A Gift To Sons, Husbands, Boyfriends, Fathers, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 245180,
    originalPrice: 294216,
    link: 'https://www.shein.com/a-p-46495292.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/13/b6/1760336644b13f80c86ccc2d581562d223111cadc2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/13/c5/17603366510c351bff336c7a71031b8012e2d371a9.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 1001
  },
  {
    id: '73616290',
    name: 'Men\'s Solid Color Casual Shirt, Short Sleeve Shacket, White Fashion Shirt, Hawaiian Resort Beach Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 218155,
    originalPrice: 261786,
    link: 'https://www.shein.com/a-p-73616290.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/05/21/7a/17478146154d022a97b3ac951448f426ee77171cab_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/05/21/86/17478146258d1d79fe2298c8f231a3815d63e86fc6.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '82452320',
    name: 'Manfinity Men\'s Casual Plaid Short Sleeve Shirt, Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 224940,
    originalPrice: 269928,
    link: 'https://www.shein.com/a-p-82452320.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/22/72/1747877509e508c808218d124a99ea1e27835f6c30_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/20/1f/1747710331ec012d2fd8bc2dca1facc4177a91e10d.jpg'
    ],
    inStock: true,
    rating: 4.57,
    reviews: 237
  },
  {
    id: '74365076',
    name: 'GRDR Men\'s Fashionable Printed Loose Short Sleeve T-Shirt | Elegant Design | Must-Have For Summer | Easy To Match, Showcase Your Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 238395,
    originalPrice: 286074,
    link: 'https://www.shein.com/a-p-74365076.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/f9/176344618827f15bd30ffae54db6cceb89250b338e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/18/fa/17634462387d73b52cc2972fec6aa0e512fcb578dd.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '96603215',
    name: 'Men\'s Washed Casual Style, Creative Cartoon Print Comfortable Short Sleeve T-Shirt For Everyday Wear, Summer For Going Out And At Home',
    category: 'Men',
    subcategory: 'Shirts',
    price: 258635,
    originalPrice: 310362,
    link: 'https://www.shein.com/a-p-96603215.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/09/cf/17494602046f186a5d0c04d35b70a005b29753ea1d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/06/09/96/1749460231337129385402fad4b49d833794cc446e.png'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 446
  },
  {
    id: '76543291',
    name: 'Manfinity Dauomo Men\'s Casual Slogan Printed Short Sleeve T-Shirt, Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 171005,
    originalPrice: 205206,
    link: 'https://www.shein.com/a-p-76543291.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/09/00/1746767380343e0f033d70b958d332549812a0a936_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/09/13/174676738804ec45f7aee6e777a9ca30ac3055d006.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 708
  },
  {
    id: '128866582',
    name: 'Men\'s Fashionable Versatile Racing Culture Graphic Print Short Sleeve T-Shirt, 2000s Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 164335,
    originalPrice: 197202,
    link: 'https://www.shein.com/a-p-128866582.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/22/fe/1763798810016f3891b5daa7d3cc942f3ee58861c5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/22/44/1763798870525c0211f6cbd5b16092aca20de8b4dd.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 161
  },
  {
    id: '32954109',
    name: 'Manfinity Homme Men Spring Casual Solid Color Long Sleeve Shirt, Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 359605,
    originalPrice: 431526,
    link: 'https://www.shein.com/a-p-32954109.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/04/09/c1/17126265675a6d93cdc332e22898f0ba6ce421d36f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/04/09/62/1712626585b81ffea0588b6923fa7f74107d13a130.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '48932752',
    name: 'Men\'s Cartoon Print Khaki T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 184460,
    originalPrice: 221352,
    link: 'https://www.shein.com/a-p-48932752.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/11/27/d7/1732670918d16af8a9eac8daedaeb3da5902bcf397_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/11/27/e6/173267092164ff389fbca0997243891d70def51d2c.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '308642107',
    name: 'Officeau Men\'s Long Sleeve Polo Shirt, Casual Lightweight Business Solid Color Simple Campus Style Long Sleeve T-Shirt, Autumn/Winter',
    category: 'Men',
    subcategory: 'Shirts',
    price: 177790,
    originalPrice: 213348,
    link: 'https://www.shein.com/a-p-308642107.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/49/17643105791a3e4e299fb49922b52021504c1b41dc_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/28/24/176431059425b892475702f1051aa7abf396a15128.jpg'
    ],
    inStock: true,
    rating: 4.72,
    reviews: 581
  },
  {
    id: '122891389',
    name: 'New Men\'s Fashion Casual Dot & Diamond Plaid Print Long Sleeve Shirt,Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 272090,
    originalPrice: 326508,
    link: 'https://www.shein.com/a-p-122891389.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/18/c1/175024478215a3fa14cbf3f653691ac62037f0d456_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/06/18/cf/1750244847458c2becebe41056c390370ea9b629ed.png'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 105
  },
  {
    id: '101598490',
    name: 'Men\'s Personalized Cute Letter Print Short Sleeve T-Shirt, Suitable For Summer Wear, Leading Fashion',
    category: 'Men',
    subcategory: 'Shirts',
    price: 238395,
    originalPrice: 286074,
    link: 'https://www.shein.com/a-p-101598490.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/c3/1763446105c4b409b67f0337e16ce268096e10927a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/18/25/1763446131e56093eeb5d161bba09cb707694ef25f.jpg'
    ],
    inStock: true,
    rating: 4.72,
    reviews: 549
  },
  {
    id: '21604157',
    name: 'Manfinity Homme Men Striped Print Shirt, Men\'s Summer Shirt, Men\'s Button Up Shirt, Striped Button Down Shirt, Men\'s Vertical Striped Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 231610,
    originalPrice: 277932,
    link: 'https://www.shein.com/a-p-21604157.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/04/66/17648165747e533bbfbec6da44e510aead7b58e2b4_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/04/2e/176481658371894dabefe04589918b7da8d096478e.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '48513195',
    name: 'Men\'s Casual Cotton Shirt, Solid Color, Comfortable, Multi-Pocket, Vintage Style, Suitable For Daily Wear, Spring/Autumn, Fall, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Shirts',
    price: 393300,
    originalPrice: 471960,
    link: 'https://www.shein.com/a-p-48513195.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/11/07/4e/1730980667949deacfa361b8414e3c1e7f46ae984e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/11/07/66/1730980707ecf37f00a064ea1709ed5d15d619f3d6.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 268
  },
  {
    id: '87496538',
    name: 'Manfinity Homme Men\'s Solid Color Green Loose Fit Short Sleeve Half-Placket Casual Summer Polo Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 238395,
    originalPrice: 286074,
    link: 'https://www.shein.com/a-p-87496538.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/13/29/176300261630323811cf608ea7a65126f472f9f4bb_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/13/bd/17630026279976847d2620a61e82ca8feb1f1997b4.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 1001
  },
  {
    id: '106849536',
    name: 'Men\'s Long Sleeve Henley Collar Shirt, Button Front, Lightweight Polyester Fabric, Striped & Plaid Design, Casual & Comfortable, Soft Fabric, Suitable For Daily Wear, Summer Beach Vacation Fashionable & Breathable, Rolled-Up Sleeves, Fashionable Men\'s Wear, Outdoor Casual Apparel, Classic Fit, Versatile & Lightweight Shirt, Men\'s Casual Top',
    category: 'Men',
    subcategory: 'Shirts',
    price: 251850,
    originalPrice: 302220,
    link: 'https://www.shein.com/a-p-106849536.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/30/f7/1759229503f03aec799791e598c5b1e9b2a36d4257_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/30/45/1759229521e0d027c05055a799bb6cd1a3d606bba7.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 962
  },
  {
    id: '81874196',
    name: 'Musero Slim Fit Fitted Short Sleeve Basic Plain T-Shirt Autumn Winter Capsule Wardrobe',
    category: 'Men',
    subcategory: 'Shirts',
    price: 204700,
    originalPrice: 245640,
    link: 'https://www.shein.com/a-p-81874196.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/19/43/1763530686329647e367eb238435d1057b35198920_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/19/ab/17476468160e481176c30fa42c1a3f5e48b71a5215.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '46934308',
    name: 'Manfinity Homme Men\'s Casual Vacation Style, Featuring An INS-Inspired Geometric Diamond-Textured Jacquard Knit Short-Sleeve Khaki Polo Shirt With A V-Neck Design. Perfect For Music Festivals, Hawaii Beach Getaways, And Everyday Outfits, Making It A Stylish Gift For Your Boyfriend Or Husband. It Embodies A French-Inspired Elegance And Romance. Men\'s Knitted Textured Jacquard Polo Shirt, Minimalist & Fashionable, Suitable For Summer , Polo Shirt For Men , Polos For Men',
    category: 'Men',
    subcategory: 'Shirts',
    price: 319240,
    originalPrice: 383088,
    link: 'https://www.shein.com/a-p-46934308.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/11/07/26/173096585622b536559735a6751bd13b1c091f3896_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/11/07/17/17309658743b40ecdf56f8db3638b66481cdbc90d7.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '222428862',
    name: 'TOKVUE Men\'s Comfortable Letter Graphic Round Neck Long Sleeve Short T-Shirt, Autumn',
    category: 'Men',
    subcategory: 'Shirts',
    price: 258635,
    originalPrice: 310362,
    link: 'https://www.shein.com/a-p-222428862.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/19/29/176087888108e5093dad43bcb5a93bb664ab4a61ea_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/19/b7/17608788966511d2b1ce5b39320db34e020296f422.jpg'
    ],
    inStock: true,
    rating: 4.62,
    reviews: 70
  },
  {
    id: '66072059',
    name: 'Manfinity Dauomo Men\'s Branch Print Round Neck Short Sleeve Casual Versatile T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 171005,
    originalPrice: 205206,
    link: 'https://www.shein.com/a-p-66072059.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/04/10/ff/1744268758d7197e5615888a36785f8d3df277c68f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/04/10/1a/1744268766bcd9bc5595c79a9690811e402de83882.jpg'
    ],
    inStock: true,
    rating: 4.36,
    reviews: 276
  },
  {
    id: '94968164',
    name: 'Men\'s Round Neck Drop Shoulder Short Sleeve Casual Loose T-Shirt For Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 177790,
    originalPrice: 213348,
    link: 'https://www.shein.com/a-p-94968164.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/05/6b/1749094622a5d382a5dc773d9fdf53db65b81eacee_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/14/25/1763090873797bee334a620fdbfb9353447a644b61.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 1001
  },
  {
    id: '52192156',
    name: 'Men\'s Letter & Rose Graphic Round Neck Short Sleeve Casual T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 171005,
    originalPrice: 205206,
    link: 'https://www.shein.com/a-p-52192156.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/12/31/e2/173563706080157d9fb5dc26d8d93c045df31f650e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/11/20/f4/1732073785f41c8080fb19acf44b554166fdb2fada.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '106779883',
    name: 'Men\'s Vintage Old Coin Style Digital Print Short Sleeve Shirt, Fashion Versatile, Suitable For Casual Daily Wear And Travel',
    category: 'Men',
    subcategory: 'Shirts',
    price: 218155,
    originalPrice: 261786,
    link: 'https://www.shein.com/a-p-106779883.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/22/62/17663968080e26ada484f4940581b1a3d1611b1aae_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/22/d4/1766396818b7738cda3bbdd104014ba86d93e1aefd.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 435
  },
  {
    id: '57173930',
    name: ' Sumwon Club Monaco Citrus Print T-Shirt Summer Streetwear Urban Style Boxy Fit Casual Spring Fashion Vacation Holiday Beach Travel Theme Tee',
    category: 'Men',
    subcategory: 'Shirts',
    price: 291525,
    originalPrice: 349830,
    link: 'https://www.shein.com/a-p-57173930.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/02/21/ae/1740126491017bfb33bd205e6ac8dd3d8192e16f15_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/02/18/ce/1739844788fe5d98879fb59a6eb94506009f866a32.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 587
  },
  {
    id: '74366490',
    name: 'GRDR Men\'s Fashion Printed Loose Short Sleeve T-Shirt | Elegant Design | Must-Have For Summer | Effortless Styling, Showcase Your Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 238395,
    originalPrice: 286074,
    link: 'https://www.shein.com/a-p-74366490.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/24/17634461846eac67c3d2470ea99de3e637a45581e5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/18/e4/17634462504a206b94a412c0aff5f08beff984d199.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '45527988',
    name: 'Manfinity BRENVOR 3pcs/Pack Men\'s Casual Solid Color Oversized Drop Shoulder Short Sleeve T-Shirt, Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 420210,
    originalPrice: 504252,
    link: 'https://www.shein.com/a-p-45527988.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/10/22/28/172957639388db22a6dd875e9a7ab443bf2f43cbee_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/10/22/5f/1729576455e0b4409a0b38e46567050fcd80f753f8.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '288365488',
    name: 'Manfinity Dauomo Comfortable Men\'s Crew Neck Y2K Style Loose Printed Long-Sleeved T-Shirt, Casual Crew Neck English Letter Print Solid Color Long-Sleeved T-Shirt, Cross, , Street Style, Suitable As A Gift, Suitable For Autumn And Winter Daily Wear, And Fashionable.',
    category: 'Men',
    subcategory: 'Shirts',
    price: 238395,
    originalPrice: 286074,
    link: 'https://www.shein.com/a-p-288365488.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/01/cf/17645664856245c78c3b176fd190cdd433741bf02e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/01/8e/176456649411749302afc133dd26e53cb1c77471ac.jpg'
    ],
    inStock: true,
    rating: '4.3',
    reviews: 105
  },
  {
    id: '68766666',
    name: 'AXEPEAK Men\'s Knitted Casual Everyday Loose Fit Short Sleeve Patchwork T-Shirt, Summer, Streetwear Essentials',
    category: 'Men',
    subcategory: 'Shirts',
    price: 198030,
    originalPrice: 237636,
    link: 'https://www.shein.com/a-p-68766666.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/21/d8/17451976664b7cd714f0506b910930a0d1bb5e8c1d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/21/29/17451976785d5d211ec81d4c47fa470154bf062010.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 1001
  },
  {
    id: '171587603',
    name: 'Manfinity Homme Casual Loose Plaid Long Sleeve Western Shirt For Men, Streetwear Western Shirts Men Rodeo Shirts, Fall, Christmas',
    category: 'Men',
    subcategory: 'Shirts',
    price: 272090,
    originalPrice: 326508,
    link: 'https://www.shein.com/a-p-171587603.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/23/d5/1758609750cd2b6ff618c6e75b679c49a3d339063c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/03/a5/175686498345c2f8b9aa33ca3ddc609baf7d5d9f69.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 32
  },
  {
    id: '158291661',
    name: 'ROMWE MEN Men\'s Patchwork Contrast Color Star Print Casual Street T-Shirt, Fall, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Shirts',
    price: 325910,
    originalPrice: 391092,
    link: 'https://www.shein.com/a-p-158291661.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/20/9e/175567010519dcc66bc6c64e6afd8506722a17db76_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/20/1a/1755670112976e78dc7de83a860a7066da2339f972.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 102
  },
  {
    id: '53436643',
    name: 'Men\'s Casual Business Long Sleeve Plain Black Dress Shirt, Versatile, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 231610,
    originalPrice: 277932,
    link: 'https://www.shein.com/a-p-53436643.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/01/06/cd/17361280343c232ede1a5f3230fe91941a17e37fd5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/01/05/d8/1736068824a0c27a55c8d502789c24e2a38b265021.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '39516557',
    name: 'Manfinity Mode Men\'s Spring And Autumn Casual Knight Printed Long Sleeve Shirt, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 265305,
    originalPrice: 318366,
    link: 'https://www.shein.com/a-p-39516557.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/07/26/48/1721981966d90e3273d1be78bf4aea633c33be3b77_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/07/26/03/1721981983fe5ecc2df871150f0bd1813930ae1c67.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '327346873',
    name: 'Manfinity Unisex Men\'s Contrast Color Letter Print Long Sleeve Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 406755,
    originalPrice: 488106,
    link: 'https://www.shein.com/a-p-327346873.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/22/2d/1766368931552f064fa63d6bc2989b4094acabadc1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/13/91/1765606738f10e4cc580b585b113f84d1b01e5113d.jpg'
    ],
    inStock: true,
    rating: 4.94,
    reviews: 157
  },
  {
    id: '48150624',
    name: 'Manfinity Homme Men\'s Solid Color Front Button Short Sleeve Casual Polo Shirt, Minimalist Everyday Wear, For Golf',
    category: 'Men',
    subcategory: 'Shirts',
    price: 305785,
    originalPrice: 366942,
    link: 'https://www.shein.com/a-p-48150624.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/11/19/fb/1731994065851dd6096c5af08db3a4ce8fc52f5809_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/11/19/36/1731994084578d21bd81a66b236b1a625cfd11c11b.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '27616716',
    name: 'Manfinity Mode Men\'s Solid Color Plain Button Open Long Sleeve Shirt, For Husband, Work, Fall, Old Money Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 251850,
    originalPrice: 302220,
    link: 'https://www.shein.com/a-p-27616716.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/01/07/4d/170463244010e5e07e87bff1c224c53a25ef407d9a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/01/07/31/1704632464bcee789780068460af86018a9adb652b.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '34003234',
    name: 'Manfinity Homme Men Summer Letter Embossed Print Casual Round Neck Short Sleeve T-Shirt Streetwear Shirtsstreetwear Topstreetwear Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 198030,
    originalPrice: 237636,
    link: 'https://www.shein.com/a-p-34003234.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/04/25/08/1714022867a649715604e6eeeeea85d65d20773e7b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/04/25/3c/1714022886dd63758ae94f6e873b582a848fbedbf9.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '216177295',
    name: 'Manfinity Homme Men\'s Letter Graphic Round Neck Casual Loose T-Shirt Men Boxy T Shirts',
    category: 'Men',
    subcategory: 'Shirts',
    price: 177790,
    originalPrice: 213348,
    link: 'https://www.shein.com/a-p-216177295.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/14/af/17604117759b08befa67d2fb9997cb2ea0c427109f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/14/0f/1760411782a125c9e1f0b656504dde8f34df7b9be6.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 1001
  },
  {
    id: '322951508',
    name: 'STYNVO Men\'s Casual Printed Round Neck Long Sleeve T-Shirt Mens Oversized Long Sleeve Mens Graphic Long Sleeve Mens Cropped Long Sleeve',
    category: 'Men',
    subcategory: 'Shirts',
    price: 312455,
    originalPrice: 374946,
    link: 'https://www.shein.com/a-p-322951508.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/10/aa/176536819296bcc97b3d566866025046687cc94a58_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/10/cb/176536820297af35a4698dcf93e7619eb779d0950f.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 6
  },
  {
    id: '50862319',
    name: 'Manfinity Mode Men\'s Plain Front Button Short Sleeve Casual Black Shirt, Daily Wear Short Sleeve Dress Shirt For Men Black Designer Shirt Men Black Shirts',
    category: 'Men',
    subcategory: 'Shirts',
    price: 224940,
    originalPrice: 269928,
    link: 'https://www.shein.com/a-p-50862319.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/01/10/0a/17365038072c44fa956565007550d2a13b4676d51f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/01/10/d9/17365038188f80d842fb9ffde4478be1c59996915f.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '123427589',
    name: 'New Summer Shirt For Men, Minimalist Style Fashion Short Sleeve Top, Sky Blue Color, Casual Outdoor Style, Button Closure, Stretchy & Lightweight Fabric, Suitable For Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 137310,
    originalPrice: 164772,
    link: 'https://www.shein.com/a-p-123427589.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/07/65/175185485843d0f698c68fc243a0885bcf45538057_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/07/07/f9/17518549144aa5e09c08cd1460aaf22b0d1fb426b0.png'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 72
  },
  {
    id: '9079582',
    name: 'Manfinity Homme Men Single Striped Trim Quarter Button Work Casual Polo Shirt, Boyfriend Gift',
    category: 'Men',
    subcategory: 'Shirts',
    price: 245180,
    originalPrice: 294216,
    link: 'https://www.shein.com/a-p-9079582.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/05/04/16831705632240e91ba198c72270474dce7dd8c911_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/05/04/168317057465a183620c20fd79e63aead8de7cbc90.jpg'
    ],
    inStock: true,
    rating: 4.94,
    reviews: 1001
  },
  {
    id: '48038754',
    name: 'Manfinity Homme Long Sleeve Casual Shirt, Minimalist Fashion Daily Wear, Black And Grey Plaid Shirt, Men Casual Long Sleeve Shirt, Grey And Black Plaid Shirt, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 325910,
    originalPrice: 391092,
    link: 'https://www.shein.com/a-p-48038754.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/11/19/e7/1731989367f1e574b0d7361945dd300cdc7549b477_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/11/19/39/1731989404c4b18c0e286b1319301d81702a230f23.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 1001
  },
  {
    id: '42699017',
    name: 'Men\'s Jacquard Knit Long Sleeve Top, Autumn/Winter Minimalist Stand Collar Undershirt, Solid Crew Neck T-Shirt, Men\'s Long Sleeve T-Shirt, Holiday Gift For Boyfriend',
    category: 'Men',
    subcategory: 'Shirts',
    price: 359605,
    originalPrice: 431526,
    link: 'https://www.shein.com/a-p-42699017.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/12/52/17602510134450c818e7162272abf22c7d91594550_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/12/cf/176025101977ce863b193ec29991307e1acf73ab4f.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '87880649',
    name: 'Manfinity Homme Men\'s Casual Commuting Color Block Short Sleeve Polo Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 265305,
    originalPrice: 318366,
    link: 'https://www.shein.com/a-p-87880649.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/27/e6/1748338382b2665f2700aa6522c902b12529a9d85e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/27/b2/174833839394fbbfe4154a01191f01eb58d0b431de.jpg'
    ],
    inStock: true,
    rating: 4.96,
    reviews: 152
  },
  {
    id: '78909177',
    name: 'Men\'s Casual Striped Short Sleeve Breathable Shirt, Fashionable And Simple, Suitable For Spring/Summer Vacation',
    category: 'Men',
    subcategory: 'Shirts',
    price: 224940,
    originalPrice: 269928,
    link: 'https://www.shein.com/a-p-78909177.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/25/ff/17508397531b9aa93f621e12701aac43c963203fcf_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/06/25/fb/1750839783ee64ebf863900e582ca0497ed0377dfe.jpg'
    ],
    inStock: true,
    rating: 4.67,
    reviews: 715
  },
  {
    id: '165664572',
    name: 'Manfinity Homme Men\'s Shirt Jacket, Men\'s Front Button Long-Sleeved Pocket Simple Shirt Jacket, Casual Daily Wear, Men\'s Jacket, Men\'s Shirt Jacket, Autumn And Winter Men\'s Jacket, Boyfriend Gift, Go Out Warm Long-Sleeved Casual Corduroy Flannel Jacket',
    category: 'Men',
    subcategory: 'Shirts',
    price: 373060,
    originalPrice: 447672,
    link: 'https://www.shein.com/a-p-165664572.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/29/a6/176171652700d789289d3667d1c7b973f897b6b614_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/29/8b/17617165405ac624380791d54f912e8c8bd780ce1a.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 1001
  },
  {
    id: '64863509',
    name: 'Men Slogan Print Crew Neck Short Sleeve Casual Loose Fit Versatile T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 177790,
    originalPrice: 213348,
    link: 'https://www.shein.com/a-p-64863509.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/04/01/ed/1743489583b1ebccfe50277809768aedab7b0842c4_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/spmp/2025/04/09/ca/17441845023a9a139b9b0b53fc8bef435a170db2b2.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 1001
  },
  {
    id: '135200136',
    name: 'Calvornis Men\'s Dark Grey Semi-Sheer Business Shirt With Long Sleeves And Regular Fit Dark Grey Polyester Button-Up Shirt For Business With Regular Hem And Shirt Collar Men\'s Casual Commute Daily Simple Solid Color Long Sleeve Shirt, Elegant Men\'s Long Sleeve Plain Shirt For Business Commuting In Regular Length Spring Autumn Men Gray Dress Shirt Men Dress Shirts Men Business Casual Shirts Men Stretch Shirts Slim Fit Dress Shirt, Business Formal Style,Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 245180,
    originalPrice: 294216,
    link: 'https://www.shein.com/a-p-135200136.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/pi/2025/11/17/23/176334254604f26578b4a157a8beb9383d92472c26_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/18/0a/1752826897c3123fc2e55089328a8642bcbd73d3bb.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 1001
  },
  {
    id: '73226278',
    name: 'GRDR Men\'s Fashionable Printed Loose Short Sleeve T-Shirt | Exquisite Design | Summer Essential | Easy To Match | Showcase Your Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 206885,
    originalPrice: 248262,
    link: 'https://www.shein.com/a-p-73226278.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/a2/1763446901caafa57f55efb3eb5905fa4e97495e44_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/18/19/1763446944a226c76955e6958cd091b2bcf614c312.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '58559074',
    name: 'Solid Color Casual Men\'s Shirt, Lightweight & Breathable For Summer, Suitable For Island Vacation, Daily Commute, For Fall, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Shirts',
    price: 272090,
    originalPrice: 326508,
    link: 'https://www.shein.com/a-p-58559074.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/02/28/d8/174070583874aa799c727c8cfdc364255df09cdc9a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/02/28/56/17407060914cde321645f973e47a0a3e4c2bdcba19.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 842
  },
  {
    id: '318017532',
    name: 'Men\'s Casual Versatile Simple English Slogan Chest Graphic Print Short Sleeve T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 150880,
    originalPrice: 181056,
    link: 'https://www.shein.com/a-p-318017532.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/27/90/1764231176141279ff7901455f344e41767c74d0e9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/08/ac/17651799562234e2f9b29eaf1e63aeb9440442d6fe.jpg'
    ],
    inStock: true,
    rating: '4.4',
    reviews: 36
  },
  {
    id: '106221947',
    name: 'Manfinity Homme Red Plaid Short Sleeve Shirt With Unique Embroidered Logo, Casual Versatile Lightweight Plaid Button Down Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 251850,
    originalPrice: 302220,
    link: 'https://www.shein.com/a-p-106221947.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/24/38/175072959895f8ed9e283b7a8c9f6bbbc71d6466db_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/24/43/17507296051e07be667af8db77545fe50faf911694.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 108
  },
  {
    id: '54690252',
    name: 'SUMWON Pacific Avenue Santa Cruz Graphic T-Shirt Summer Casual Streetwear Short Sleeve Unisex Crew Neck California Tourism Souvenir Tee Athletic Travel Beach Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 179285,
    originalPrice: 215142,
    link: 'https://www.shein.com/a-p-54690252.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/01/24/d7/173769992442a383772bf1369b1d134c1a47af5ce8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/01/24/61/17376999388bc0e14cbc26647b95f7194177166d1b.jpg'
    ],
    inStock: true,
    rating: 4.61,
    reviews: 636
  },
  {
    id: '61256215',
    name: 'Men\'s Minimalist Mountain Silhouette Print Round Neck Short Sleeve T-Shirt, Coffee Color, Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 184460,
    originalPrice: 221352,
    link: 'https://www.shein.com/a-p-61256215.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/03/14/37/1741945386588ead9602a3e39e7e5ef7f32684e60d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/03/14/d9/17419453845a303010c2e7ba9a0afc299cf31b6058.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 246
  },
  {
    id: '44806653',
    name: 'Manfinity AFTRDRK Men\'s Ombre Gradient Long Sleeve Dress Shirt, Business/Social Gathering, Spring/Autumn, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 278760,
    originalPrice: 334512,
    link: 'https://www.shein.com/a-p-44806653.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/10/11/e5/17286147023279bf45730fdfb15c9522546c648d75_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/10/11/ea/17286147263ff074a0ae2449593ff6538baba81026.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '124800095',
    name: 'Manfinity Homme Men\'s Mature Vacation Casual Shirt Set And Shorts',
    category: 'Men',
    subcategory: 'Shirts',
    price: 346150,
    originalPrice: 415380,
    link: 'https://www.shein.com/a-p-124800095.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/11/c8/175222731480c8477ae5d1d5c56b2c41a0cfa58f1c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/11/ca/1752227327c78ec5043a2c378f1656be6955ccbbf1.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 316
  },
  {
    id: '323250187',
    name: 'Manfinity Homme Men\'s Casual Valentine\'s Day Faux Dark Gold Rose & Thorn Print Slim Fit Long Sleeve Shirt, Valentine\'s Day Gift, Gift For Boyfriend',
    category: 'Men',
    subcategory: 'Shirts',
    price: 238395,
    originalPrice: 286074,
    link: 'https://www.shein.com/a-p-323250187.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/11/e2/176544141558e4184badb6cca615456fefbfd99fff_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/11/66/176544142722904b3e2b46fdad46c3db963fa7fbc1.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 74
  },
  {
    id: '85931251',
    name: 'PAVTROS Manfinity Streetrush Men\'s Round Neck Short Sleeve T-Shirt, Fashion And Suitable For Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 150880,
    originalPrice: 181056,
    link: 'https://www.shein.com/a-p-85931251.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/03/e3/174891406962f122465c15d49214cdcc1ca010b017_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/23/f8/17479699100b0dd29182ba414d83e6cd8bfb3af984.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 503
  },
  {
    id: '132952639',
    name: 'Manfinity Homme Men\'s Summer Letter Print Crew Neck Loose Casual T-Shirt Oversized T Shirt Men',
    category: 'Men',
    subcategory: 'Shirts',
    price: 171005,
    originalPrice: 205206,
    link: 'https://www.shein.com/a-p-132952639.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/23/9d/17532396439d024c3484402407c361b09ca3d6d802_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/23/d3/175323965061f4288e1ef67275875e868d15ff1290.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 1001
  },
  {
    id: '150079776',
    name: 'Looney Tunes X Manfinity Manfinity Joysei Men\'s Casual Cute Cartoon Animal Print Short Sleeve T-Shirt, Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 191245,
    originalPrice: 229494,
    link: 'https://www.shein.com/a-p-150079776.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/11/f8/17548903025833b0b90d05925b4e7663a2714c6b67_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/11/a5/1754890312f73f894fc61660ace1ff5d3ee2ba850a.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 192
  },
  {
    id: '47930203',
    name: 'PAVTROS Manfinity Streetrush Men\'s Casual Letter Print Round Neck 2 In 1 Long Sleeve T-Shirt For Autumn, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 245180,
    originalPrice: 294216,
    link: 'https://www.shein.com/a-p-47930203.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/02/08/6a/17389786311552ccfbef1ef0933995a4e8ed658131_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/11/18/56/1731910695302716caa3021f975de5d69218afc286.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 1001
  },
  {
    id: '21987945',
    name: 'Manfinity Homme Men Solid Collar Long Sleeve Plain Polo Shirt, For Work, For Golf, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 278760,
    originalPrice: 334512,
    link: 'https://www.shein.com/a-p-21987945.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/09/01/bc/169356153330d4b6e242b6cb3c967c2e17bc7dc81f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/09/01/34/16935615519e84db3094e1b13a97759845014f5e97.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '315720566',
    name: 'STYNVO Men\'s Casual Letter Print Short Sleeve Shirt, Autumn Mens Button Up Shirt Mens Cropped Button Up',
    category: 'Men',
    subcategory: 'Shirts',
    price: 299000,
    originalPrice: 358800,
    link: 'https://www.shein.com/a-p-315720566.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/03/0f/176475144893c90db266ab8ce64a64ff9ec6cd7b6d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/03/27/17647514611f08bc2e924c5b17dcfee71f657e0273.jpg'
    ],
    inStock: true,
    rating: 4.77,
    reviews: 57
  },
  {
    id: '63315150',
    name: 'Manfinity LEGND Men\'s Casual Letter Print Round Neck Short Sleeve T-Shirt, Summer Men T Shirts Casual Vintage Shirt Men',
    category: 'Men',
    subcategory: 'Shirts',
    price: 144095,
    originalPrice: 172914,
    link: 'https://www.shein.com/a-p-63315150.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/03/27/f8/1743044876429e87b6d6ce40c1a8c724e69780ada5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/03/27/33/17430448894606e3d362015f4a0597d77ded476c67.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 1001
  },
  {
    id: '32487563',
    name: 'Manfinity CasualCool Men Solid Color Simple Long Sleeve Striped Shirt, Old Money Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 325910,
    originalPrice: 391092,
    link: 'https://www.shein.com/a-p-32487563.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/05/27/9f/1716803719ffd1e58180b27d940dfcaa2d614c1869_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/05/27/eb/1716803744f41290250697cec8643b06959c2a4c47.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '89236438',
    name: 'Manfinity RSRT Striped Print Front Button Casual Short Sleeve Shirt, Versatile For Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 224940,
    originalPrice: 269928,
    link: 'https://www.shein.com/a-p-89236438.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/17/d5/1750127610f682aad3478424771187b10a92c79e6e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/17/35/17501276213823f82683f71996990748f371bce035.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 765
  },
  {
    id: '161561747',
    name: 'Manfinity Homme Men\'s Casual Everyday Minimalist Raglan Ribbed Short Sleeve Polo Shirt Business Casual Brown Shirt Men Brown Ribbed Shirt Men Dark Brown Polo Shirt, Old Money Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 218155,
    originalPrice: 261786,
    link: 'https://www.shein.com/a-p-161561747.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/25/cf/1756085178a6756b47bb731b71d84e8acebb25cdc2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/25/64/175608518482b1e5f9ae4741432c387f0646d062d3.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 1001
  },
  {
    id: '71266122',
    name: 'Manfinity Homme Men\'s Summer Simple Solid Color Short Sleeve Shirt And Long Pants Set Men Two Pieces Casual',
    category: 'Men',
    subcategory: 'Shirts',
    price: 406755,
    originalPrice: 488106,
    link: 'https://www.shein.com/a-p-71266122.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/28/8f/1745805045b4c160e715cb19bacba33ad60da0e0de_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/28/77/1745805054824de1d85c189692b33882fbeb6baf62.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '323262437',
    name: 'Manfinity EMRG Men\'s Navy Blue White Abstract Wavy Colorblock Oversized T-Shirt | Irregular Patchwork Varsity Letter Print Drop Shoulder Tee | Y2K Streetwear Hip Hop Loose Fit Short Sleeve Top | Contrast Stitch Crew Neck Casual Summer Shirt | Retro Sports Jersey Style Graphic Unisex Blouse | Breathable Lightweight Skate Fashion Wear,Men\'s Casual Contrast Color Drop Shoulder Printed T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 191245,
    originalPrice: 229494,
    link: 'https://www.shein.com/a-p-323262437.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/11/2a/1765420953d316cbc565170392c1a89a981a866984_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/11/e6/1765420963277ba03f55470e6f9146dd077b3e7aa6.jpg'
    ],
    inStock: true,
    rating: '4.9',
    reviews: 102
  },
  {
    id: '33404628',
    name: 'Manfinity Mode Solid Color Front Button Long Sleeve Shirt, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 231610,
    originalPrice: 277932,
    link: 'https://www.shein.com/a-p-33404628.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/04/16/d7/171323095329cabbb7fd7eea1407db57c756018765_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/04/16/3e/1713230978dde18329c97a5ea6d2cec15d8f8189c4.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '49978684',
    name: 'Manfinity Mode Men\'s Casual Versatile Color Block Long Sleeve Shirt Black Dress Shirt Men S Long Sleeve Designer Dress Shirts Black Long Sleeve Shirt, Men Black Dress Shirts, Business Casual Men Shirt, Formal Shirts For Men, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 265305,
    originalPrice: 318366,
    link: 'https://www.shein.com/a-p-49978684.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/12/10/bc/1733809116bf188cf240e59a8bc42987c544c0ca8c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/12/10/70/1733809136d9b3dc5dc893a0092ff87893a647fe2c.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '203963887',
    name: 'Manfinity Homme Men Yellow Plaid Long Sleeve Button-Front Casual Versatile Shirt, Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 285545,
    originalPrice: 342654,
    link: 'https://www.shein.com/a-p-203963887.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/04/8f/17595495394d08ab63488b245e5fe1f858761653f1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/04/e6/1759549550327cf9599a7d39cc13d103f1d80f29db.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 722
  },
  {
    id: '111276880',
    name: 'Manfinity Homme Men\'s Casual Classic Solid Color Long Sleeve Polo Shirt Men Black Knit Polo Men Black Long Sleeve Polo Shirt,Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 272090,
    originalPrice: 326508,
    link: 'https://www.shein.com/a-p-111276880.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/29/bd/17511793031725ee5dea88d6671c5bb834f66e91d4_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/29/e5/1751179309aa4a46a69ca2a2c8fea68a954dc2d434.jpg'
    ],
    inStock: true,
    rating: 4.67,
    reviews: 1001
  },
  {
    id: '81736037',
    name: 'Manfinity Homme Men\'s Slim Fit Letter Print Round Neck Short Sleeve T-Shirt, Summer Men T Shirts Casual',
    category: 'Men',
    subcategory: 'Shirts',
    price: 164335,
    originalPrice: 197202,
    link: 'https://www.shein.com/a-p-81736037.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/19/12/174763613714a0fb1d6cfa8377430f6e26554b5337_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/19/66/174763614966a6415782019d0379f8ace437fbf5bc.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '327766603',
    name: 'STYNVO Men\'s Crew Neck Faux Snow Flake Casual Commuting Short Sleeve T-Shirt Mens Boxy T-Shirt Oversized Cropped Tee Men',
    category: 'Men',
    subcategory: 'Shirts',
    price: 245180,
    originalPrice: 294216,
    link: 'https://www.shein.com/a-p-327766603.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/17/10/176593637097664408feaa4759dc547ced77819e50_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/17/f1/1765936385ef051a7dec5fce94332e898756515acf.jpg'
    ],
    inStock: true,
    rating: '4.4',
    reviews: 131
  },
  {
    id: '91557933',
    name: 'Manfinity Homme Men\'s Casual Colorblock Striped Polo Shirt, Men\'s Brown Striped Polo Shirt With Embroidered Detail For Business Commuting Summer Polo Shirts For Men Polo Shirt For Men Men Polo Shirt Men Polo Shirts Polo T Shirts For Men Men Polo Shirts Burgundy Polo Shirts For Men Maroon Polo Shirt Men Men Fashion Men Burgundy Shirts, Old Money Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 245180,
    originalPrice: 294216,
    link: 'https://www.shein.com/a-p-91557933.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/11/dc/1760147075aae1e348528b5fd9a6c565df82ca60bf_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/11/05/1760147082189582bb4bb05aad33361ded832f3176.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '87509712',
    name: 'Manfinity Homme Men\'s Plain Shoulder Short Sleeve Half-Zip Casual Summer Polo Shirt Polo Shirt For Men Men Shirts Polo Polo Shirts For Men Collar Polos For Men',
    category: 'Men',
    subcategory: 'Shirts',
    price: 278760,
    originalPrice: 334512,
    link: 'https://www.shein.com/a-p-87509712.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/28/f2/1748397203f8ceb3c9144b430edb2c6bb3207daa06_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/pi/2025/05/28/14/1748397217014c251ff18bec6f58a3366cf1b8cfe8.png'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '36826156',
    name: 'Manfinity Mode Men\'s Solid Color Casual Long Sleeve Shirt, Spring/Summer, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 272090,
    originalPrice: 326508,
    link: 'https://www.shein.com/a-p-36826156.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/06/13/b4/1718268419927c6d321dced3799730b0e0a51ccd30_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/06/13/35/1718268429ea71f717c6f4b020d4875550b33d7636.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 1001
  },
  {
    id: '328449208',
    name: 'GRDR Men\'s Summer American Graphic Print Round Neck Short Sleeve T-Shirt, Comfortable & Fashionable',
    category: 'Men',
    subcategory: 'Shirts',
    price: 238395,
    originalPrice: 286074,
    link: 'https://www.shein.com/a-p-328449208.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/12/17/17655254061c370046590a23d4aa5f88d97e892460_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/12/83/176552543067241caac4d66f5d697d392588c887b4.jpg'
    ],
    inStock: true,
    rating: '4.2',
    reviews: 52
  },
  {
    id: '98614091',
    name: 'Manfinity Homme Men\'s Solid Color Casual Fashionable Short Sleeve Polo Shirt For Summer Men Ribbed Polo Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 224940,
    originalPrice: 269928,
    link: 'https://www.shein.com/a-p-98614091.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/13/e7/174980639942bfd01cb164d4f264076d217210f964_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/13/ed/1749806404fffb061983fb291577da6116c494bb82.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 1001
  },
  {
    id: '18610105',
    name: 'Manfinity BRENVOR Men Contrast Plaid Collar Polo Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 231610,
    originalPrice: 277932,
    link: 'https://www.shein.com/a-p-18610105.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/06/30/168809801754303b053e85c9f355c56853e1c1f600_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/06/30/1688098030f18eaa6d09c17f5dffb54df540615dcc.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '70844283',
    name: 'SWAVVY Men\'s Knit Casual Short Sleeve Loose Fit Polo Shirt, Fashion Daily Wear Young Style, School',
    category: 'Men',
    subcategory: 'Shirts',
    price: 278760,
    originalPrice: 334512,
    link: 'https://www.shein.com/a-p-70844283.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/19/9e/1750344902c655f2bf05ad9d7eec96dd57c6647c2b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/19/18/1750344908bb3d7f4cceef23057533467ab4139203.jpg'
    ],
    inStock: true,
    rating: 4.98,
    reviews: 52
  },
  {
    id: '96979180',
    name: 'Manfinity Homme Plus Size Men\'s Coffee Color T-Shirt, Simple Yet Stylish, Essential For Summer, Casual And Fashionable',
    category: 'Men',
    subcategory: 'Shirts',
    price: 184460,
    originalPrice: 221352,
    link: 'https://www.shein.com/a-p-96979180.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/11/97/174962257400a0ebc8761d79b926a9ad2793479cdd_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/11/cf/17496225807da225cfba034cc2dc59165e5d54206d.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '22277753',
    name: 'Claim Dot Men Letter Graphic Drop Shoulder Casual Short Sleeve Velvet Tee, Boyfriend Gift, For Going Out, For Fall Winter',
    category: 'Men',
    subcategory: 'Shirts',
    price: 204700,
    originalPrice: 245640,
    link: 'https://www.shein.com/a-p-22277753.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/08/30/8c/1693364915c0ca0585daebc1a1eed8ea4b1258d4e8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/08/30/fd/1693364928ecc4c738c8a811eb9f9f5736fcd76060.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '54365151',
    name: 'Men\'s Loose Fit Black Short Sleeve Shirt | Retro Racing Graphic | Los Angeles Streetwear Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 171005,
    originalPrice: 205206,
    link: 'https://www.shein.com/a-p-54365151.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/01/21/8e/1737431506b23f747f5a5dcccc1f79e5fb4716813f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/12/17/ba/17344275485e6673d422f8e44bc10fffed0b601f18.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 772
  },
  {
    id: '48867134',
    name: 'Men Plain Long Sleeve T-Shirt, Minimalist & Versatile Spring/Autumn, Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 204700,
    originalPrice: 245640,
    link: 'https://www.shein.com/a-p-48867134.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/08/cc/17573007190866b197b08ee2b8f23777e3a0127eea_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/08/85/17573007445126c21e8a733c6422486a4fc7023403.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 522
  },
  {
    id: '150011257',
    name: 'GRDR Men\'s Fashionable Printed Loose Short Sleeve T-Shirt | Exquisite Design | Summer Essential | Easy To Match, Showcasing Your Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 206885,
    originalPrice: 248262,
    link: 'https://www.shein.com/a-p-150011257.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/ff/1763396998470458f5820771785b5551ba453a545a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/18/08/1763397016fdd1c48ae8c525e303fb00e3a01eed74.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 630
  },
  {
    id: '90147276',
    name: 'Manfinity Homme Men\'s Casual Linen Button Down Long Sleeve Shirt Men Casual Long Sleeve Shirts Men Casual Dress Shirt Men\'s Textured Shirt, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 332695,
    originalPrice: 399234,
    link: 'https://www.shein.com/a-p-90147276.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/30/fc/1748569678d56129f235bc60e0482c57840df2332a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/30/0a/174856969368d3b2e709104fb2d8fa81dca10d3ded.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 619
  },
  {
    id: '85040459',
    name: 'Manfinity Homme Men\'s Letter Print Round Neck Casual Summer Short Sleeve T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 144095,
    originalPrice: 172914,
    link: 'https://www.shein.com/a-p-85040459.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/22/84/17479039933b94356b7bc54501078350f0441bb68d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/22/be/174790400200ffa08aa951f9e96672201be84a0926.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 1001
  },
  {
    id: '40072716',
    name: 'DAZY Men\'s Solid Color Button Front Pocket Long Sleeve Baggy Shirt,Fall Clothes',
    category: 'Men',
    subcategory: 'Shirts',
    price: 440450,
    originalPrice: 528540,
    link: 'https://www.shein.com/a-p-40072716.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/08/05/a4/1722821356b9c2335832dabb788a12f0fb99f2fed3_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/08/05/9c/1722821373dcaf9da0a0b1b66a34f9b54f02be9731.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '29214810',
    name: 'AXEPEAK Men\'s Checkered Bear Print Short Sleeve T-Shirt And Drawstring Waist Shorts Set Summer Outfit, Streetwear Casual, Cozy Outfits, Couple Things',
    category: 'Men',
    subcategory: 'Shirts',
    price: 379845,
    originalPrice: 455814,
    link: 'https://www.shein.com/a-p-29214810.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/14/62/1747233546ed244a56d2142f0e46ab2629a914fea9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/14/bd/174723355708243d19c63e64deba20d3cba8b0483b.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '62448874',
    name: 'Men\'s Long Sleeve Formal Shirt, Solid Brown Color, Button Design, Suitable For Weddings, Office, Formal Occasions, Parties, Showcasing Gentlemanly Style, A Classic Gift For Father Or Boyfriend. Simple White Shirt, Black Shirt, Essential For Autumn.',
    category: 'Men',
    subcategory: 'Shirts',
    price: 251850,
    originalPrice: 302220,
    link: 'https://www.shein.com/a-p-62448874.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/05/07/1f/1746605670ef7d676a2f6b2c8c2e57ac58ac225fd9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/05/07/90/1746605702e7ab09cd7bbc36b0ac79ca6cf12d083f.png'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 163
  },
  {
    id: '106274540',
    name: 'Manfinity Homme Men\'s Casual Short Sleeve Single-Breasted Shirt With Strap White Dress Shirt Men Men Short Sleeve Dress Shirt Men Resort Wear Shirts Ivory Dress Shirt Men Champagne Dress Shirt Men',
    category: 'Men',
    subcategory: 'Shirts',
    price: 258635,
    originalPrice: 310362,
    link: 'https://www.shein.com/a-p-106274540.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/24/dc/1750730479107d3ff257798cf1b9ce25923078f962_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/24/df/17507304890d9242be1440bf1bc65ce825f13f2b0f.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 76
  },
  {
    id: '52258499',
    name: 'Men\'s Summer Eagle Print Round Neck Short Sleeve Casual T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 198030,
    originalPrice: 237636,
    link: 'https://www.shein.com/a-p-52258499.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/02/07/ae/173892097841ce69ca47ed23f4998539b79e8dfde1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/02/07/ca/173892100351f95c9528a1b4ebdce0a28c5618407f.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '62057214',
    name: 'Manfinity Mode Men\'s Fashion Casual Business Commuting Men\'s Stand-Up Collar Solid Color Button Long Sleeve Shirt, Men\'s Formal Shirt, Men\'s Solid Color Shirt. Suitable For Daily Wear, Commuting To Work, Going Out, Party, Can Be Paired With Suit Pants Or Suit Suits To Attend Parties, Weddings, Honeymoon Scenes. Can Be Given As A Gift To Sons, Husbands, Boyfriends, Fathers, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 238395,
    originalPrice: 286074,
    link: 'https://www.shein.com/a-p-62057214.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/13/6f/176033668112e984499747aefd609b094cad12802b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/13/85/17603366881307fde0f1a8011562a62625c86d84d7.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 1001
  },
  {
    id: '76084274',
    name: 'Manfinity Mode Men\'s Casual Solid Color V-Neck Short Sleeve Polo Shirt, Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 218155,
    originalPrice: 261786,
    link: 'https://www.shein.com/a-p-76084274.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/16/61/175262973985edac4e5acfc90a9de92baa63c01682_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/16/3c/175262974920349e4dad02595b89866b842ebba8bb.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '22486516',
    name: 'Men Plaid Print Button Up Long Sleeve Shirt, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 292330,
    originalPrice: 350796,
    link: 'https://www.shein.com/a-p-22486516.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/09/01/d1/16935460008e3b30ef69e3d8cdad6c2a1468e5a055_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/09/01/6e/1693546017b2256edbe9122096283de4d81c1cde19.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '62516290',
    name: 'Manfinity Homme Casual Short Sleeve Shirt With Random Print, Simple & Fashionable Suitable For Summer Shirts For Guys Men Clothes Men Shirts Men Dress Shirts Short Men Short Sleeve Dress Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 211485,
    originalPrice: 253782,
    link: 'https://www.shein.com/a-p-62516290.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/03/24/6d/17428120224b8aa7b76f726d68ebc5a6a44133af67_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/03/24/93/17428120455b7341c397a80c6af47408ba0af041c3.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '60060238',
    name: 'Manfinity Homme Long Sleeve Striped Shirt, Minimalist And Fashionable, Suitable For Summer Men Clothes Men Shirts Men Fashion Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 272090,
    originalPrice: 326508,
    link: 'https://www.shein.com/a-p-60060238.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/03/07/c5/1741316499dde2faf0e07b47c0ba273dd56598ef11_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/03/07/25/1741316518b04a4675c6f92677c24a3b2398eef28c.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '3996946',
    name: 'Manfinity Homme Men Plaid Button Up Shirt, Fall, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Shirts',
    price: 312455,
    originalPrice: 374946,
    link: 'https://www.shein.com/a-p-3996946.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2021/09/10/16312508596ee9dcd9340d7f37ea85263ed658a71a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2021/09/10/1631250885ce52fab36fa2d1324f615bc3aee0475d.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '77660458',
    name: 'GRDR Men\'s V-Neck Short Sleeve T-Shirt, Suitable For Outdoor Casual Wear In Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 292330,
    originalPrice: 350796,
    link: 'https://www.shein.com/a-p-77660458.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/26/3e/17641598584b00cf4d694df749f387f19a58b6ea95_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/16/fe/1763271201ae587450fba01905944864531c6ccc85.jpg'
    ],
    inStock: true,
    rating: 4.94,
    reviews: 348
  },
  {
    id: '34695272',
    name: 'Claim Dot Men Summer Cute Cartoon Printed Round Neck Short Sleeve Casual T-Shirt, Boyfriend Gift, For Going Out, White Graphic Tee',
    category: 'Men',
    subcategory: 'Shirts',
    price: 164335,
    originalPrice: 197202,
    link: 'https://www.shein.com/a-p-34695272.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/05/08/60/171517022884bbe793ae4c8c9349c8408a9d87ed17_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/05/08/d9/1715170247be526ced494f3ecaad3d5546c3394d89.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '56970950',
    name: 'Men\'s Classic Solid Color Formal Dress Shirt, Button-Up Long Sleeve Shirt, Suitable For Party/Wedding/Formal Dance, Business Casual As Well! European And American Bestseller White Shirt, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 245180,
    originalPrice: 294216,
    link: 'https://www.shein.com/a-p-56970950.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/02/10/fe/17391554737305832736eda7eb6d516db466688e19_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/02/10/a6/1739168524336540ad4e1b033fb6cbf7ade98ad279.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 721
  },
  {
    id: '53357057',
    name: 'Manfinity Homme Men\'s Vacation Casual Style, INS Matched With A Knitted Black And White Geometric Striped Crochet Textured Jacquard Loose Short-Sleeve Shirt. Featuring A Button Placket, This Shirt Embodies French Elegance And Romance, Making It Perfect For Hawaiian Beach Vacations, As Well As Music Festivals And Everyday Wear. It Also Serves As An Ideal Gift For Boyfriends Or Husbands. Men\'s Striped Short Sleeve Single-Breasted Casual Commuter Shirt, Cool Shirts For Men, Nice Shirts For Men, Men\'s Fashion Shirts',
    category: 'Men',
    subcategory: 'Shirts',
    price: 272090,
    originalPrice: 326508,
    link: 'https://www.shein.com/a-p-53357057.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/01/13/50/173675075837b46b767b82f63ec1403f84289e13c4_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/01/13/87/173675078327ed9092a52408b763dcb8449067a596.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '54030551',
    name: 'Manfinity Dauomo Standard Size Men\'s T-Shirt With Funny Internet Meme Black Person Kicking Crocodile Graphic Print',
    category: 'Men',
    subcategory: 'Shirts',
    price: 177790,
    originalPrice: 213348,
    link: 'https://www.shein.com/a-p-54030551.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/01/18/63/1737182360fe025b1f3a49b9ea9ac68780e407ca78_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/01/18/63/17371823755aafe384f4fbcd80b8e149ffab85afcf.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '57701946',
    name: 'SHEIN Manfinity Dauomo Men\'s Summer Casual Plaid Cropped Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 198030,
    originalPrice: 237636,
    link: 'https://www.shein.com/a-p-57701946.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/03/06/3b/17412281990d7cc6f5dfbbe1c9581df7cfe13571d2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/03/06/2d/1741228223d7b02d72463d9f04a3be8bb5b8f3ad3d.jpg'
    ],
    inStock: true,
    rating: 4.73,
    reviews: 1001
  },
  {
    id: '86307783',
    name: 'European & American Style Men\'s Summer Casual Color Block Polo Shirt With Turndown Collar & Buttons',
    category: 'Men',
    subcategory: 'Shirts',
    price: 272090,
    originalPrice: 326508,
    link: 'https://www.shein.com/a-p-86307783.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/05/11/ca/174694198570183ca8a8b73ef4aba3110be98255b3_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/05/11/5d/174694199249ecd13825cf64bb5fcbb595f7b9c314.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 379
  },
  {
    id: '56964170',
    name: 'Manfinity Homme Men\'s Casual Solid Color Textured Short Sleeve Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 272090,
    originalPrice: 326508,
    link: 'https://www.shein.com/a-p-56964170.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/02/14/52/1739521954746015ab3e3721a270895f81941395c9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/02/14/57/1739521977879679087c72745e65d1d04e3a712203.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '101184699',
    name: 'Manfinity Homme Men\'s Summer Casual Solid Color Short Sleeve Shirt Light Blue Shirt Baby Blue Shirt Sky Blue Shirt Turquoise Shirt Men Light Blue Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 218155,
    originalPrice: 261786,
    link: 'https://www.shein.com/a-p-101184699.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/18/5b/17502262623292f24509d94b3169084a9903b71ae6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/18/fc/1750226273360ca3fdf07ce0b434e117196a535dca.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '200515325',
    name: 'Glimmora Men\'s Slogan Print Crew Neck Loose Casual Short Sleeve T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 191245,
    originalPrice: 229494,
    link: 'https://www.shein.com/a-p-200515325.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/10/ab/17627659938ba8103b3eed8f4056b3a90469654111_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/10/fa/1762766001680c8ff0cf8c074aa0a5759a59f14716.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 464
  },
  {
    id: '187747716',
    name: 'Manfinity Homme Loose Fit Men\'s Contrast Collar Polo Neck Sweatshirt Long Sleeve Polo Shirt Rugby Shirt Polo Polo Sweater Rugby Long Sleeve For Men, For Fall Winter',
    category: 'Men',
    subcategory: 'Shirts',
    price: 339480,
    originalPrice: 407376,
    link: 'https://www.shein.com/a-p-187747716.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/13/5b/176033854586b1682997d8d27dbec7ab11c2ffcb92_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/18/7e/1758192623ac244b4a1166bfb11c4920d36ba9cc9e.jpg'
    ],
    inStock: true,
    rating: 4.74,
    reviews: 937
  },
  {
    id: '156349650',
    name: 'Men\'s Long Sleeve Shirt, Solid Color Button-Up Shirt, Suitable For Weddings, Office, Formal Occasions, Parties, Showcasing A Gentlemanly Style, A Classic Gift For Father Or Boyfriend. Simple Shirt, Autumn Season.',
    category: 'Men',
    subcategory: 'Shirts',
    price: 258635,
    originalPrice: 310362,
    link: 'https://www.shein.com/a-p-156349650.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/08/14/7f/175514692288d04f23d3eb1f5cd25f3ac329f4f283_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/08/14/96/1755146926f42f1d6d559b2286909ca967a658e83c.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 163
  },
  {
    id: '106343941',
    name: 'Men\'s Vintage Old Coin Style Digital Print Short Sleeve Shirt, Fashion Versatile, Suitable For Casual Daily Wear And Travel',
    category: 'Men',
    subcategory: 'Shirts',
    price: 218155,
    originalPrice: 261786,
    link: 'https://www.shein.com/a-p-106343941.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/22/18/17663974760624935c88cc9d68b602c26bbc106adf_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/12/22/4e/176639749468ac38a41b466199922597723dfed8e7_square.png'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 435
  },
  {
    id: '53682982',
    name: 'Men\'s Summer Tops Casual Beach Vacation Button Up Shirt Street Vintage Style Streetwear Angel Printed Casual Shirts',
    category: 'Men',
    subcategory: 'Shirts',
    price: 218155,
    originalPrice: 261786,
    link: 'https://www.shein.com/a-p-53682982.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/03/21/8a/17425276670e7e5aa6272960f5551d9c0c94180fa2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/spmp/2025/03/21/65/174252835366136829bb866fd626ea03d454699294.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 318
  },
  {
    id: '99626095',
    name: 'Manfinity Homme Men\'s Summer Beach Holiday Style Contrast Striped Print Short Sleeve Shirt Men Beach Shirts Striped Beach Shirt Men Men Striped Shirt Men Summer Shirts Men Casual Short Sleeve Shirt Blue And White Men Shirt Blue And White Striped Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 224940,
    originalPrice: 269928,
    link: 'https://www.shein.com/a-p-99626095.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/05/5a/175435948258332453f7befe20c3ca27e521401950_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/14/33/1749879620f40eee1cdf0582448449e07b6b781eab.jpg'
    ],
    inStock: true,
    rating: 4.69,
    reviews: 210
  },
  {
    id: '87492733',
    name: 'Manfinity Homme Men\'s Drop Shoulder Colorblock Casual Numeric Graphic Round Neck T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 171005,
    originalPrice: 205206,
    link: 'https://www.shein.com/a-p-87492733.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/04/ce/1756978096f8eae955ce55e38052bcbf57d42d4dcf_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/27/5e/1748310203a78873e37928de603b84347366d6e79a.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 984
  },
  {
    id: '205325151',
    name: 'Manfinity Homme Men\'s Retro Casual Plaid Front Button Long Sleeve Shirt, Autumn Shirt Grunge Romwe Men Shirt Men Casual Long Sleeve Shirts Streetwear Men Shirt Plaid Jacket Men Old Money Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions,Boyfriend/Husband Gift, Anniversary Gift Christmas Outfits',
    category: 'Men',
    subcategory: 'Shirts',
    price: 278760,
    originalPrice: 334512,
    link: 'https://www.shein.com/a-p-205325151.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/06/52/175971936955056880e5dde295f8f41aa7ccad1896_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/06/77/17597193809125dbfb4c86784bf30361240902daf0.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 722
  },
  {
    id: '71687142',
    name: 'Men\'s Casual Striped Slogan Print Short Sleeve Shirt, Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 258635,
    originalPrice: 310362,
    link: 'https://www.shein.com/a-p-71687142.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/05/12/71/174703231146f33d467cbe2aac74a4ddc4c020a90b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/05/12/9e/17470323384d3ce5d4cec9b8e69af5fd41037406eb.jpg'
    ],
    inStock: true,
    rating: 4.46,
    reviews: 167
  },
  {
    id: '46258413',
    name: 'Manfinity Mode Men\'s Casual Color Block Trim Long Sleeve Shirt, Autumn, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 265305,
    originalPrice: 318366,
    link: 'https://www.shein.com/a-p-46258413.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/01/14/c2/17368171948058755a03366282b9511d4f547e3355_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/11/09/49/17311243671200f13af8a7510b5cb577337e5a9ba9.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '87743685',
    name: 'Manfinity Homme Men\'s Single Breasted Casual Plaid Print Long Sleeve Shirt Black And White Checkered Shirt Men Checkered Shirt Men Plaid Shirt Gingham Shirt Men Black And White Gingham Shirt, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 278760,
    originalPrice: 334512,
    link: 'https://www.shein.com/a-p-87743685.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/30/14/17644744553335cdf4cd404b944e6d8c9985fc97ce_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/27/af/174831748656c07dd5002f838776c48d83a2c24907.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 344
  },
  {
    id: '74705574',
    name: 'Plus Size Men\'s Long Sleeve Shirt, White Dress Shirt, Fashion Solid Color Shirt Jacket, Plus Size Stylish Casual Shirt, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 231610,
    originalPrice: 277932,
    link: 'https://www.shein.com/a-p-74705574.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/04/18/d1/1744945897a60bb32a6002be090fd2bad23a507e67_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/04/18/02/174494590288c091109f2cc97233565c237c9bf5fb.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 341
  },
  {
    id: '52870780',
    name: 'Calvornis Men\'s Fashion Casual Business Commuting Men\'s Stand-Up Collar Solid Color Button Long Sleeve Shirt, Men\'s Formal Shirt, Men\'s Solid Color Shirt. Suitable For Daily Wear, Commuting To Work, Going Out, Party, Can Be Paired With Suit Pants Or Suit Suits To Attend Parties, Weddings, Honeymoon Scenes. Can Be Given As A Gift To Sons, Husbands, Boyfriends, Fathers, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 238395,
    originalPrice: 286074,
    link: 'https://www.shein.com/a-p-52870780.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/13/af/17603366391a6c029c8b28dd844e1d2689c7de9185_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/01/08/3e/1736332553a31315c87251ea4c59d5641f567e43a1.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '288026886',
    name: 'Manfinity Homme Men\'s Solid Color Minimalist Casual Zip-Up Long Sleeve T-Shirt Men Sweater Top Thermals For Men Men Turtleneck Shirts Mens Turtle Neck Quarter Zip Men Old Money,Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions, Boyfriend/Husband Gift, Anniversary /Birthday Gift Party Christmas New Years Wedding',
    category: 'Men',
    subcategory: 'Shirts',
    price: 224940,
    originalPrice: 269928,
    link: 'https://www.shein.com/a-p-288026886.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/15/75/1763174748b6facf659f018b89467ddf7418456e1a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/15/e5/1763174759732fe203246ed2835f2d209eee9bf3a3.jpg'
    ],
    inStock: true,
    rating: 4.54,
    reviews: 88
  },
  {
    id: '45116380',
    name: 'Manfinity RSRT Men\'s Front Button Short Sleeve Casual Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 245180,
    originalPrice: 294216,
    link: 'https://www.shein.com/a-p-45116380.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/10/17/d1/1729145034ab7740fde699875a97fff8a9bcead66f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/10/17/2c/172914505225bb15002391fbea73c91a24361a38c4.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 820
  },
  {
    id: '164649470',
    name: 'Men\'s Solid Color Pocket Front Button Long Sleeve Casual Shirt, Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 346150,
    originalPrice: 415380,
    link: 'https://www.shein.com/a-p-164649470.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/09/08/1f/17572966072c2860abf7306b464061527d4c081b5a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/09/08/b2/1757297317153f11933acc72b2373917cfb4fb5725.jpg'
    ],
    inStock: true,
    rating: 4.73,
    reviews: 15
  },
  {
    id: '30068921',
    name: 'Airaco Men\'s Solid Color Stand Collar Short Sleeve T-Shirt, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 171005,
    originalPrice: 205206,
    link: 'https://www.shein.com/a-p-30068921.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/06/28/f1/1719567584007d3e05f70659534dae569245bbfd85_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/06/28/d2/17195676041fe7d5cd07e13e934ece4950ca027b47.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 939
  },
  {
    id: '32828522',
    name: 'Claim Dot Men Loose Funny Cartoon & Slogan Graphic Drop Shoulder Short Sleeve Tee, For Going Out, For Friends',
    category: 'Men',
    subcategory: 'Shirts',
    price: 198030,
    originalPrice: 237636,
    link: 'https://www.shein.com/a-p-32828522.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/11/83/17260359854492035d51a3e14ea02a6bada39833e3_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/11/8e/1726036000d146e238e0161a2c33d5342a530b6bda.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '28410746',
    name: 'Manfinity EMRG Loose Fit Men\'s Drop Shoulder Cross Embroidery Vintage T-Shirt, 2000s Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 231610,
    originalPrice: 277932,
    link: 'https://www.shein.com/a-p-28410746.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/12/30/c8/17039131927845c2f32830f4c944bc9bd3bd88ee15_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/12/30/0d/17039132068b1d8098412c4058f25c6e25937adbed.jpg'
    ],
    inStock: true,
    rating: 4.94,
    reviews: 646
  },
  {
    id: '158376787',
    name: 'Manfinity Homme Men\'s Casual Solid Color Short Sleeve T-Shirt, Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 171005,
    originalPrice: 205206,
    link: 'https://www.shein.com/a-p-158376787.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/20/4e/1755673889d0388fbc7f950eec11e5577cb122317a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/20/94/1755673896fe0e78933468108e5b3a0264d9372a82.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 1001
  },
  {
    id: '48857363',
    name: 'AXEPEAK Men\'s Loose Digital Print Short Sleeve Basketball Jersey Style T-Shirt, Summer Wear, School, Streetwear',
    category: 'Men',
    subcategory: 'Shirts',
    price: 218155,
    originalPrice: 261786,
    link: 'https://www.shein.com/a-p-48857363.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/11/28/e2/1732758355e48bf11d06ace9d0ac602cbfd24230fa_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/11/28/55/1732758372fca1eb35c86e4150f59e461524f8af7f.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 385
  },
  {
    id: '12704740',
    name: 'Manfinity Homme Loose Fit Men\'s Ombre Kimono With Japanese Letter Graphic Colorful, Drop Shoulder Style (Without T-Shirt), For Boyfriend Gift, Going Out,Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 251850,
    originalPrice: 302220,
    link: 'https://www.shein.com/a-p-12704740.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/01/06/1672995076916d1195e02da36b44c383043db7dcb6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/01/06/1672995086a3f2323616d0ae3068d7e4bd40c9eb80.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 1001
  },
  {
    id: '192176011',
    name: 'Manfinity Homme Men\'s Casual Solid Color Shirt And Pants 2 Pieces Set Men Casual Top And Bottom Set Men White Suit Set Men Shirt Set Men 2 Pieces Sets White, Fall Clothes',
    category: 'Men',
    subcategory: 'Shirts',
    price: 373060,
    originalPrice: 447672,
    link: 'https://www.shein.com/a-p-192176011.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/23/12/1758592357c0199d78d6972399518ca7cfb5a8d926_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/23/a9/17585923667228f59f7b42eab2a7d4c9139edcd58f.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 976
  },
  {
    id: '76747713',
    name: 'Manfinity Homme Men\'s Casual Letter Print Short Sleeve T-Shirt, Summer American Flag Men T Shirts',
    category: 'Men',
    subcategory: 'Shirts',
    price: 164335,
    originalPrice: 197202,
    link: 'https://www.shein.com/a-p-76747713.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/13/5f/17471065949e53a3d0db50a131fb0b55049385694a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/13/2d/1747106603e62ca65e7d6362db4568a147270c67a9.jpg'
    ],
    inStock: true,
    rating: 4.96,
    reviews: 509
  },
  {
    id: '223197930',
    name: 'Manfinity Homme Plus Size Men\'s Solid Color Long Sleeve Single-Breasted Casual/Business Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 258635,
    originalPrice: 310362,
    link: 'https://www.shein.com/a-p-223197930.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/aa/1760706643434b90f8ab8e333b0c8df3ee59ef1009_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/17/23/1760706652f07fda6b22d173b5b7f714860cc97d47.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '40821066',
    name: 'Manfinity AFTRDRK Men\'s Fall Long Sleeve Button Down Casual Contrast Geo Printed Disco Graphic Vintage Collar Shirt, For Dad And Me, Shirt, Daddy',
    category: 'Men',
    subcategory: 'Shirts',
    price: 238395,
    originalPrice: 286074,
    link: 'https://www.shein.com/a-p-40821066.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/09/dd/1746780764870f8ccd5874a63bd61beab9fef58308_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/09/72/174678077097ab4822d0c0e9472a6852457a3f9e21.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 918
  },
  {
    id: '54076763',
    name: 'Men\'s Solid Color Casual Office Commuter Polo Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 198030,
    originalPrice: 237636,
    link: 'https://www.shein.com/a-p-54076763.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/02/04/dc/1738649865d348736216ba1a76ca6d8abc0e0e9719_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/01/15/9c/17369039084ef701b406ababf7cecf4383a35f2229.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 265
  },
  {
    id: '59738415',
    name: 'AXEPEAK Men\'s Street Style Gothic Letter Air Layer Suede Texture Embossed Loose Fit Dropped Shoulder Crew Neck Short Sleeve T-Shirt, Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 305785,
    originalPrice: 366942,
    link: 'https://www.shein.com/a-p-59738415.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/03/06/58/1741231020b04355b53b8ef473d9b7f21eec5f8dd6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/03/06/a5/1741231033525b400d2547b2cfa6133823685ddd1e.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 580
  },
  {
    id: '104831569',
    name: 'Men\'s Rugged Style Versatile Black Shirt, Unlock The Charm Of A Western Cowboy, Men\'s Printed Long Sleeve Shirt, Fashionable And Stylish, Ignite The Street,Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 272090,
    originalPrice: 326508,
    link: 'https://www.shein.com/a-p-104831569.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/09/03/1759992796a77980de6ad803ea8816f950b148d43e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/09/11/1759992814ff44585cdb8dd5eaa1a899ffc11235a7.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 115
  },
  {
    id: '325092879',
    name: 'Manfinity Hypemode Men\'s Casual Heart Print T-Shirt, Suitable For Couple Dates, Friend Gifts',
    category: 'Men',
    subcategory: 'Shirts',
    price: 171005,
    originalPrice: 205206,
    link: 'https://www.shein.com/a-p-325092879.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/11/81/1765437760f2afdfa268ac4a30cacdeeea84828cb1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/11/54/17654377670deec62bddcedf7d79616bc8bead5fa1.jpg'
    ],
    inStock: true,
    rating: '4.7',
    reviews: 59
  },
  {
    id: '214311839',
    name: 'Men\'s Casual Versatile Simple Japanese Crane Print Short Sleeve T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 164335,
    originalPrice: 197202,
    link: 'https://www.shein.com/a-p-214311839.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/22/c7/17637928733930507cc0addd2aa68470da920dbf49_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/22/c6/176379290138d96d17e7202fc4d4632242fc1020e3.jpg'
    ],
    inStock: true,
    rating: 4.46,
    reviews: 62
  },
  {
    id: '92016966',
    name: 'Manfinity Homme Men\'s Summer Casual Solid Color Short Sleeve Shirt Men Summer Shirts Shirts For Men Summer Cool Shirts For Men Men\'s Short Shirts Summer Shirts For Men',
    category: 'Men',
    subcategory: 'Shirts',
    price: 211485,
    originalPrice: 253782,
    link: 'https://www.shein.com/a-p-92016966.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/05/dd/17490938217ddc306bdbfd8cf0460baca6e4474304_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/05/63/1749093833a24ecff7347aa50bab6687234a05a4cb.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '184641342',
    name: '1pc Men\'s Grey Half-Zip Polo Shirt, Essential For Autumn/Winter, Herringbone Textured Jacquard Knit, Vacation & Casual, Elevated Fashion, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Shirts',
    price: 346150,
    originalPrice: 415380,
    link: 'https://www.shein.com/a-p-184641342.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/03/68/1762151620481f6f3dec8c7d2234fe84eb79bc90f5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/03/c2/176215162817abf1b99b4738444e09a255ce4bc54a.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 536
  },
  {
    id: '180525015',
    name: 'Manfinity Homme Men\'s Crinkle Fabric Collared Short Sleeve Top + Drawstring Matching Pants Set, Must-Have For Outings And Gatherings, Ideal Gift For Successful Husbands Men Two Pieces Set Brown Co Ord Set',
    category: 'Men',
    subcategory: 'Shirts',
    price: 406755,
    originalPrice: 488106,
    link: 'https://www.shein.com/a-p-180525015.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/27/97/1764235784fe4929a46695ca6f44c57015dcb091c9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/27/45/1764235797b2a290b71a8e37e39db68febbb1b2943.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 734
  },
  {
    id: '114912865',
    name: 'Men\'s Casual Solid Color Henley Neck Long Sleeve Undershirt, Comfortable & Soft, Versatile For All Seasons,Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 224940,
    originalPrice: 269928,
    link: 'https://www.shein.com/a-p-114912865.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/25/0d/1750845982b5bc48bda5969a42555953b3bfaabfb3_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/06/25/e5/1750845989b8bb009249294392fd13b7bae0906aba.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 975
  },
  {
    id: '31387803',
    name: 'Manfinity Homme Men\'s Printed Alphabet T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 204700,
    originalPrice: 245640,
    link: 'https://www.shein.com/a-p-31387803.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/06/26/77/1719380720ee6b17a64be6977cc8bb390516dba180_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/04/02/e5/1712048826e16208afdfbd28e9d021920e4f285173.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '49280941',
    name: 'ROMWE MEN Street Life Men\'s Racing Letter Print Long Sleeve T-Shirt Suitable For Everyday Wear, Spring/Summer, Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 238395,
    originalPrice: 286074,
    link: 'https://www.shein.com/a-p-49280941.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/01/9a/1754018097217021dfe06cb72978e4f46563ea1ac3_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/12/02/94/1733133877bb5dcb769944b3dcf417c84afe980e4b.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 536
  },
  {
    id: '37805892',
    name: 'Manfinity Mode Men Solid Button Front Long Sleeve Shirt, Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 245180,
    originalPrice: 294216,
    link: 'https://www.shein.com/a-p-37805892.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/07/01/c2/1719810343f4c403d4bb21303f2fb2388dffd71a2b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/07/01/31/1719810370e8db244b3e2b8529015aa7df774a94ba.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '85057134',
    name: 'Manfinity RelaxMax Men\'s Plain Front Button Casual Short Sleeve Shirt For Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 191245,
    originalPrice: 229494,
    link: 'https://www.shein.com/a-p-85057134.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/23/3e/1747964856aa25a5a06f41002306d5e976b3eeb358_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/23/89/17479648653ada7e77f9386498e79adea989a4c119.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 739
  },
  {
    id: '89201905',
    name: 'AXEPEAK Men\'s Casual Knitted Patchwork Short Sleeve Loose T-Shirt, Everyday Wear, Streetwear Feels',
    category: 'Men',
    subcategory: 'Shirts',
    price: 191245,
    originalPrice: 229494,
    link: 'https://www.shein.com/a-p-89201905.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/29/d2/1748506758c86d83dd8bfe1a35b6ef36ebe7c06f5b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/29/88/1748506769624b6c8c42083d1b8123b458099e3994.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 1001
  },
  {
    id: '65857616',
    name: 'Men\'s Short Sleeve Henley Shirt, Summer, Deep V-Neck Linen Breathable, Solid Color Minimalist Multi-Button Mature Retro Style, Suitable For Casual, Holiday, And Daily Wear',
    category: 'Men',
    subcategory: 'Shirts',
    price: 299000,
    originalPrice: 358800,
    link: 'https://www.shein.com/a-p-65857616.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/03/31/98/17434082621860b76062eca5adaddd7e8481c0b104_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/spmp/2025/03/31/ba/17434087292223f98edfdaadc0606950be2460b4e4.jpg'
    ],
    inStock: true,
    rating: 4.95,
    reviews: 1001
  },
  {
    id: '179390617',
    name: 'Manfinity Homme Plus Size Men\'s Plaid Long Sleeve Shirt, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 352935,
    originalPrice: 423522,
    link: 'https://www.shein.com/a-p-179390617.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/10/b3/1757485955dcebe4322fe2616a1c3740bd2ff0344c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/10/b4/175748596665c690e2b07bfe4bd24dddb983a25698.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 308
  },
  {
    id: '291612943',
    name: 'Manfinity Homme Men\'s Casual Versatile Solid Color Linen Long Sleeve Shirt Men S Textured Shirt Mens Shirts Summer Men Shirts Linen Men Boho Shirt Casual Men Shirts',
    category: 'Men',
    subcategory: 'Shirts',
    price: 332695,
    originalPrice: 399234,
    link: 'https://www.shein.com/a-p-291612943.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/18/70/176345992302c752deba735717f181ec3dbe3b11a5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/18/93/17634599371c3dc19b202f49ac8d46e42ba0bb3e4f.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 619
  },
  {
    id: '57758592',
    name: 'Manfinity BRENVOR 3pcs/Set Men\'s Casual Round Neck Short Sleeve T-Shirts Tee',
    category: 'Men',
    subcategory: 'Shirts',
    price: 352935,
    originalPrice: 423522,
    link: 'https://www.shein.com/a-p-57758592.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/02/21/14/17401159968559940bbc9280356dd8fb6c8087165b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/02/21/72/1740116019d29d90cd89f51852b9db46197d8abeca.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '64100042',
    name: 'Summer New Men Outdoor Sports T-Shirt, "Cool Dad Club" Graphic Print, Suitable For Gift, Hiking Fishing T-Shirt, Suitable For Daily Wear, Outdoor Travel, Father\'s Day Gift, Christmas Gift For Dad, Daily Casual Versatile Short Sleeve T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 164335,
    originalPrice: 197202,
    link: 'https://www.shein.com/a-p-64100042.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/03/29/55/17432366663549e1df73907c914cbea50b98eb0503_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/spmp/2025/03/29/28/1743236709e750c34e1a30418498b25c1242432fe4.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '98614425',
    name: 'Manfinity Homme Men\'s Solid Color Summer Casual Fashionable Short Sleeve Polo Shirt Men Ribbed Polo Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 218155,
    originalPrice: 261786,
    link: 'https://www.shein.com/a-p-98614425.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/13/22/17498064151d251bb353dfba14734907412f743b48_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/13/d4/17498064193e399d01a8e9e1017191c812e9f2b8de.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 1001
  },
  {
    id: '100356097',
    name: 'Manfinity Homme Men\'s Plus Casual And Holiday Wear Short Sleeve Shirt, Featuring Vintage Luxurious Romantic Solid Color Textured Jacquard, Coffee Brown With Rose Pattern. This Shirt Has A Button Placket Closure, Suitable For All-Season Breezy Attire. It Is Perfect For Pairing With Hawaiian Beach Vacation, As Well As Couples Wear, Making It An Excellent Gift For Boyfriends Or Husbands.',
    category: 'Men',
    subcategory: 'Shirts',
    price: 352935,
    originalPrice: 423522,
    link: 'https://www.shein.com/a-p-100356097.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/16/35/17500444021a71166dc5cc7e751682bc35edf2a914_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/16/33/17500444143b6c1f85656c6706c2e4453c7c558eb4.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 52
  },
  {
    id: '46110174',
    name: 'Manfinity Homme Men\'s Casual Everyday Front Button Long Sleeve Shirt, Autumn, Winter',
    category: 'Men',
    subcategory: 'Shirts',
    price: 346150,
    originalPrice: 415380,
    link: 'https://www.shein.com/a-p-46110174.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/10/29/ae/173016608479413db20c26b5747b2de65ce41e8bd2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/10/29/b5/1730166099ce37be53a878db94081ab55b70acbd77.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '169488946',
    name: 'Manfinity Homme Men\'s Plaid Front Button Casual Long Sleeve Versatile Flannel Shirt, For Fall, Old Money',
    category: 'Men',
    subcategory: 'Shirts',
    price: 285545,
    originalPrice: 342654,
    link: 'https://www.shein.com/a-p-169488946.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/02/22/1756800366222a4afb5da90502ea2732b3033547a1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/02/1b/17568003785bdbd77b70b71b128e25d8db12f42fc6.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 722
  },
  {
    id: '43349128',
    name: 'Manfinity Homme Plus Size Men Casual Solid Color Long Sleeve Shirt For Autumn, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 278760,
    originalPrice: 334512,
    link: 'https://www.shein.com/a-p-43349128.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/23/af/17270698029f7eb4e48216b1157151acad129d2bc3_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/23/1c/17270698176b5a8898c8be5586fac174f8ed5a27b3.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '27459889',
    name: 'Manfinity Homme Loose Fit Men\'s Solid Color Short Sleeve Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 251850,
    originalPrice: 302220,
    link: 'https://www.shein.com/a-p-27459889.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/06/03/d7/1717382813d7eb3eb53578e6796b38d1f2d9f3f90b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/06/03/0e/17173828430f30f9d77da7bab0a0116c4e7e37ca3b.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '71324418',
    name: '3pcs Set Men\'s Summer Polo Shirts, Versatile, Breathable, Comfortable Short Sleeve Tops, Casual Business Polo Shirts, Outdoor Sports Moisture-Wicking T-Shirts',
    category: 'Men',
    subcategory: 'Shirts',
    price: 204700,
    originalPrice: 245640,
    link: 'https://www.shein.com/a-p-71324418.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/02/62/176208669193bd71ea99458deb4ba9b2b0b733fa5d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/02/4b/176208669736322ffa4068e7e826a896461fa73ec5.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 589
  },
  {
    id: '48294965',
    name: 'Manfinity Homme Men\'s Front Button Long Sleeve Plaid Casual Blouse, Everyday Wear, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 332695,
    originalPrice: 399234,
    link: 'https://www.shein.com/a-p-48294965.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/11/21/3c/17321817353721c3d41eaf3655a34478fe4e991d59_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/11/21/25/1732181756752c8e497e7aedb6bb9bce3aae5da0e0.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 1001
  },
  {
    id: '107778386',
    name: 'Manfinity Homme Men\'s Plain Textured Short Sleeve Casual Shirt, Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 272090,
    originalPrice: 326508,
    link: 'https://www.shein.com/a-p-107778386.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/23/ba/175067170652bb266b11d687e4274506df3ed3923e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/23/88/1750671714601306c3d92c992017ef9a124d36e8eb.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 295
  },
  {
    id: '243061324',
    name: 'Manfinity Homme Plus Size Men\'s Casual Versatile Solid T-Shirt For Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 211485,
    originalPrice: 253782,
    link: 'https://www.shein.com/a-p-243061324.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/27/4d/1761556704f0746a6569e22cbdc2535bb76d3b3b72_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/27/d1/17615567142e312e8fb63c4e9491d32fc11d79093f.jpg'
    ],
    inStock: true,
    rating: 4.94,
    reviews: 946
  },
  {
    id: '18821113',
    name: 'Manfinity Mode Men Solid Button Up Shirt Slim Fit Long Sleeve Plain Dress Shirt, Slim Fit Dress Shirt Men, Fitted Men Shirt, Black Shirt, Men Shirt, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 258635,
    originalPrice: 310362,
    link: 'https://www.shein.com/a-p-18821113.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/08/22/29/169269487131f9fdea1eca666ddeec4e44efd10ae1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/08/22/d5/1692694888e1c3cff9195f98586307643c92a60ca3.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '79667107',
    name: 'Manfinity Homme Men\'s Solid Color Single-Breasted Knitted Argyle Casual Short Sleeve Shirt Brown Shirt Men',
    category: 'Men',
    subcategory: 'Shirts',
    price: 258635,
    originalPrice: 310362,
    link: 'https://www.shein.com/a-p-79667107.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/14/e4/1747229449833369cc36224e1987637d5d021a95f1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/14/86/174722945611e4eb25748863ef63bbf317d0924a00.jpg'
    ],
    inStock: true,
    rating: 4.94,
    reviews: 209
  },
  {
    id: '74805927',
    name: 'Men\'s Summer Eagle Print Round Neck Short Sleeve Casual Lightweight T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 191245,
    originalPrice: 229494,
    link: 'https://www.shein.com/a-p-74805927.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/05/03/51/1746269168c66e1b36af57934aa57ccc02c26f7d3f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/05/03/8e/1746269175101a37b1b1edd2dca056d25f7f76835b.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '57275830',
    name: 'Men\'s Fashion Button Down Short Sleeve Collared Shirt With Random Prints And Contrast Design, Suitable For Casual, Simple, Versatile Everyday Wear, Commute, Street Style, Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 218155,
    originalPrice: 261786,
    link: 'https://www.shein.com/a-p-57275830.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/02/20/e4/17400488375efd4a7d878590d8604dd93b1a0106ad_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/02/20/c5/1740048835a4b086f0dfdfd1483e9dfd8155ba434b.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 144
  },
  {
    id: '89289644',
    name: 'Manfinity Homme Men\'s All-Over Print Front Button Casual Versatile Short Sleeve Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 278760,
    originalPrice: 334512,
    link: 'https://www.shein.com/a-p-89289644.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/29/c6/1748501788de1b1672cbdf180fbd4298fdb325d1ec_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/29/93/17485017959a27e5ecca1206880e08f9f4f47763d5.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 83
  },
  {
    id: '68219449',
    name: 'Manfinity Joysei 1pc Men Short Sleeve Round Neck T-Shirt, Fashionable For Summer Cat Tshirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 171005,
    originalPrice: 205206,
    link: 'https://www.shein.com/a-p-68219449.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/18/bd/1744960205a5112d5e9fbcdefb6581f73d9f4d8829_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/18/e2/17449602159d78096ae5e4c4f72387119f5e996d19.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 242
  },
  {
    id: '62559883',
    name: 'Manfinity Homme Casual Short Sleeve Printed Shirt, Simple Solid Color Fashion Suitable For Summer Men Fitted Shirts Shirts For Guys Men Clothes Men Shirts Men Short Sleeve Dress Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 211485,
    originalPrice: 253782,
    link: 'https://www.shein.com/a-p-62559883.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/01/66/1756692044713f80ea4341f8551504cd792bf2e3eb_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/01/85/175669205474af8f5af8eef5fd384b8dad6d54b747.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '42042958',
    name: '1pc Men Slim Fit Outdoor Long Sleeve Shirt, Spring/Autumn Multi-Pocket Casual Shirt, Pair Well With Jeans, Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 420210,
    originalPrice: 504252,
    link: 'https://www.shein.com/a-p-42042958.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/09/02/c7/17252699076d142119f034028df2b5676a8bfb590a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/09/02/d7/172526992139dfe693cef4ea5c2ba234848a9ca678.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 871
  },
  {
    id: '144220402',
    name: 'Manfinity Homme Plus Size Men\'s Casual Commuter Striped Shirt, For Fall, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Shirts',
    price: 305785,
    originalPrice: 366942,
    link: 'https://www.shein.com/a-p-144220402.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/30/f1/17592091601c047e08dedf9577e36b82cc323a6aa2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/30/60/1759209165cbc142dde772f0a458faa06dd0d3e5ca.jpg'
    ],
    inStock: true,
    rating: 4.65,
    reviews: 44
  },
  {
    id: '60595469',
    name: 'Manfinity Homme Men\'s Solid Color Short Sleeve Casual/Office Polo Shirt , Polo Shirts For Men , Polo Shirts For Men Collar',
    category: 'Men',
    subcategory: 'Shirts',
    price: 285545,
    originalPrice: 342654,
    link: 'https://www.shein.com/a-p-60595469.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/03/11/f9/174169034857284a031f835ec923accd546ba1393b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/03/11/d0/1741690360971fa6bc0661369e3b5d31c323404e10.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '176411174',
    name: 'Manfinity Homme Men\'s Casual Basic Button-Down Long Sleeve Shirt Men White Linen Shirt Men White Casual Shirts Deer Print Men Shirt Men Cotton Shirt White Shirt For Men Graphic Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions,Boyfriend/Husband Gift, Anniversary Gift, Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 305785,
    originalPrice: 366942,
    link: 'https://www.shein.com/a-p-176411174.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/25/7b/175877748475fca91f55a8b288b4c60a267b522b5a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/08/e2/1757295527ee7a9920f10b1821e3c97c44f42841c4.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 377
  },
  {
    id: '56794356',
    name: 'Men\'s Classic Formal Navy Blue Dress Shirt, Collared Button-Down Long Sleeve Shirt, Overseas Bestseller! Navy Blue Fitted Shirt, Unlock The Charm Of A Stylish Man, Business Formal Style, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 265305,
    originalPrice: 318366,
    link: 'https://www.shein.com/a-p-56794356.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/03/13/91/17418332906a828a5aab5c9959109063ad928a7948_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/03/13/d9/1741833288a11a2337746ae9098fd85f26639b2873.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 378
  },
  {
    id: '68263849',
    name: 'Men\'s Fashion Casual Business Commuter Stand Collar Solid Color Button-Up Long Sleeve Shirt, Men\'s Formal Slim-Fit Shirt, Men\'s Solid Color Argyle Jacquard Shirt. Suitable For Daily Wear, Work Commute, Outings, Gatherings, Can Be Paired With Suit Pants Or Suits To Attend Parties, Weddings, Honeymoons. Can Be Given As A Gift To Sons, Husbands, Boyfriends, Fathers, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 251850,
    originalPrice: 302220,
    link: 'https://www.shein.com/a-p-68263849.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/04/3e/17516033111a72016ccd0a76b9ef76fd31cbe23fd6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/07/04/63/17516033259fd8c84309f73d310f7bbbe60ad16ceb.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 105
  },
  {
    id: '174867659',
    name: 'Manfinity CasualCool Men\'s Casual Solid Color Half-Zip Long Sleeve T-Shirt, Old Money, Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 231610,
    originalPrice: 277932,
    link: 'https://www.shein.com/a-p-174867659.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/22/9d/1758510062aa12ba548a1749b12bc42322db5b7309_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/22/de/1758510073b477187a692331c7aadba9e10fadb410.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 514
  },
  {
    id: '52551223',
    name: 'Manfinity Dauomo Amazing Lightning Raccoon Print Funny Meme Men\'s Standard T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 177790,
    originalPrice: 213348,
    link: 'https://www.shein.com/a-p-52551223.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/01/06/0a/1736126897a0a01f4a40095ba44e2073feb0d8c85c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/01/06/c8/17361269141a97219b9d145ee163b6432209106455.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '23425366',
    name: 'Claim Dot Men Solid Color English Letter Printed Short-Sleeved Round Neck T-Shirt, Suitable For Daily Wear, Going Out, Leisure, Sports, School, Travel, Family Gatherings And Other Occasions. Short-Sleeved T-Shirt, Summer T-Shirt. Multiple T-Shirts Can Be Given As Gifts To Family Members., 2000s Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 184460,
    originalPrice: 221352,
    link: 'https://www.shein.com/a-p-23425366.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/11/e0/1726040686165dbef571bbaa46672fc3ba6f4e30fd_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/11/0f/1726040701cd2c22737792a842803be281a8213a0f.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 1001
  },
  {
    id: '72376194',
    name: 'INAWLY Men\'s Striped & Numeric Print Crew Neck Short Sleeve T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 238395,
    originalPrice: 286074,
    link: 'https://www.shein.com/a-p-72376194.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/13/07/1747129307f6ed94f15b614d2c6d448042573a4ec2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/13/e4/1747129319242c1bd5f96b6ab0abc662d9e546acf7.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 905
  },
  {
    id: '89202801',
    name: 'AXEPEAK Men\'s Knit Casual Loose Short Sleeve Patchwork T-Shirt, Daily Wear, Streetwear Ready',
    category: 'Men',
    subcategory: 'Shirts',
    price: 184460,
    originalPrice: 221352,
    link: 'https://www.shein.com/a-p-89202801.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/22/38/175585725500ad1619b94f3ae53ba070acfcc40d0d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/22/24/17558572627a050ba16b6027ba28f7347a19543c96.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 917
  },
  {
    id: '36801173',
    name: 'Manfinity Mode Men\'s Spring/Summer Solid Color Casual Commute Long Sleeve Shirt, Men Green Dress Shirt, Dark Green Men Shirt, Men Teal Shirt, Fitted Men Shirt, Elegant Shirts For Men, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 272090,
    originalPrice: 326508,
    link: 'https://www.shein.com/a-p-36801173.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/12/24/4e/17350221192cc029f1f5155312cdc553ffd13ba923_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/12/24/c4/173502213367d3950f44d111fb34ba2458ade5b14f.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 1001
  },
  {
    id: '27088671',
    name: 'ROMWE MEN Casual Men Solid Color Drawstring Hooded Corduroy Shirt, School',
    category: 'Men',
    subcategory: 'Shirts',
    price: 379845,
    originalPrice: 455814,
    link: 'https://www.shein.com/a-p-27088671.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/12/15/cd/1702612841a6ed29da432e7e6770a783c827eaa2b7_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/11/30/bc/1701317228fe05c11519f8c778d4775d9c7c8c4966.jpg'
    ],
    inStock: true,
    rating: 4.79,
    reviews: 1001
  },
  {
    id: '32621185',
    name: 'Manfinity Homme Men Summer Short Sleeve Casual T-Shirt With Letter Print And Round Neck',
    category: 'Men',
    subcategory: 'Shirts',
    price: 171005,
    originalPrice: 205206,
    link: 'https://www.shein.com/a-p-32621185.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/10/8e/17574989249d3023af4647d5153a617288fcff23bf_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/04/02/47/1712049733274bb6b4614b78b05afa5139bc0aef66.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '210047074',
    name: 'Manfinity Homme Since 1973 Legendary\' Classic Graphic Men\'s Short Sleeve T-Shirt, Retro Style Short Sleeve Top Men Vintage Tshirt Fashion Tshirts For Men',
    category: 'Men',
    subcategory: 'Shirts',
    price: 177790,
    originalPrice: 213348,
    link: 'https://www.shein.com/a-p-210047074.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/3b/1760000161595d7d9b0cc9dbb6c19b75fa1142882f_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/65/17600001692d9e056ae90d6b6b2586b521fe84e5df.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 1001
  },
  {
    id: '58043705',
    name: 'Lion Print T-Shirt, Men\'s Casual Street Style Stretch Round Neck Tee Shirt For Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 177790,
    originalPrice: 213348,
    link: 'https://www.shein.com/a-p-58043705.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/14/35/17604103094f277a85df8837ee6d9f17de8d345823_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/14/44/17604103064bc19e1326e1a4a880d1858eba0fce43.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 61
  },
  {
    id: '52133586',
    name: 'WASSUP OTHER Men\'s Shirt, Men\'s Loose Fit Casual Business POLO Shirt, Fashion Knit Sweater, Casual T-Shirt With Turndown Collar, Short Sleeve Top',
    category: 'Men',
    subcategory: 'Shirts',
    price: 150880,
    originalPrice: 181056,
    link: 'https://www.shein.com/a-p-52133586.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/03/09/ba/17415079877d0bbd0949b7fe1be17c19ca12fd0807_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/images3_spmp/2025/03/09/2d/17415079845f0c211a13fb3c10744c522782bcb934.png'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 555
  },
  {
    id: '70915370',
    name: 'Manfinity Homme Men\'s Casual Vacation Style, Featuring An INS-Inspired Geometric Diamond-Textured Jacquard Knit Short-Sleeve Polo Shirt. Perfect For Music Festivals, Hawaii Beach Getaways',
    category: 'Men',
    subcategory: 'Shirts',
    price: 319240,
    originalPrice: 383088,
    link: 'https://www.shein.com/a-p-70915370.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/27/f0/174575808255226143157a89abe4e0d4c67631b77a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/27/d4/17457580916ff303bea812f2ed878335500c66b16e.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '41307594',
    name: 'Manfinity BRENVOR 3pcs Pack Men\'s Casual Solid Color Crew Neck Short Sleeve T-Shirt, Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 352935,
    originalPrice: 423522,
    link: 'https://www.shein.com/a-p-41307594.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/11/7d/17496466689a7d90d42d4668651f7ed3ee7b7c6ae4_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/11/89/1749646687b63a1994abdfa3f58061fdd91b4194d6.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '189652652',
    name: 'Manfinity Sport Corelite 3pcs Men\'s Contrast Stitch Raglan Short Sleeve Soft & Breathable Athletic T-Shirts Spandex Shirts Gym Compression Shirt Dry Fit Shirts Men Men Compression Shirts Gym Shirts Pack',
    category: 'Men',
    subcategory: 'Shirts',
    price: 299000,
    originalPrice: 358800,
    link: 'https://www.shein.com/a-p-189652652.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/28/e8/17616237202c48852f9732e249e54be11623bd50cf_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/28/83/1761623728b3514cb618d33c01a8681323eb8fee73.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 686
  },
  {
    id: '103602412',
    name: 'SHEINxLarissa&André Manfinity Homme Manfinity Men\'s Textured Design Polo Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 285545,
    originalPrice: 342654,
    link: 'https://www.shein.com/a-p-103602412.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/20/ca/175039024824f1e2e1bc18970345a4b7007256a166_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/20/22/1750390256c581a83cc331655b345a3aab469cf771.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '74093869',
    name: 'Manfinity Homme Men\'s Summer Plaid Short Sleeve Single Breasted Pocket Casual Shirt Clothing Men Shirts Men\'s Fashion Shirts Nice Shirts For Men\'s Shirts With Pockets, Black Button Up Shirt Men, Men\'s Black Dress Shirt Short Sleeve, Black Short Sleeve Shirt With Plaid Accent, Men\'s Summer Black Short Sleeve Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 258635,
    originalPrice: 310362,
    link: 'https://www.shein.com/a-p-74093869.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/08/8e/17466755181bb6aa9baf409c4cc3096ca5cd20c6a8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/08/aa/1746675529e1d491a9e44b7cae2ca5153ddcc712a1.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '171428428',
    name: 'Manfinity Homme Plus Size Men\'s Solid Color Short Sleeve Single-Breasted Casual Pocket Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 272090,
    originalPrice: 326508,
    link: 'https://www.shein.com/a-p-171428428.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/19/1760494293d3e27282f900f857b8febac517125cef_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/03/f3/175690545192d064e3940726f76e4cbca525cad598.jpg'
    ],
    inStock: true,
    rating: 4.95,
    reviews: 42
  },
  {
    id: '26657148',
    name: 'Manfinity Homme Men Waffle Knit Long Sleeve Plain Vintage Drawstring Hooded T-Shirt, Casual, Spring/Fall, Vacation, For Husband & Daddy',
    category: 'Men',
    subcategory: 'Shirts',
    price: 292330,
    originalPrice: 350796,
    link: 'https://www.shein.com/a-p-26657148.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/12/19/1f/17029502559fc1e6d7b65e20add7b68d756e125aa6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/11/20/0c/17004517155536839ab8b57f0280f96d81ee6be2c6.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 1001
  },
  {
    id: '212380369',
    name: 'Manfinity Homme Men\'s Plaid Casual Long Sleeve Shirt Men Stripe Shirt Or Plaid Men Shirts Plaid Men Casual Long Sleeve Shirts Multi Color Shirts For Men Old Money,Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions,Boyfriend/Husband Gift, Anniversary Gift Christmas',
    category: 'Men',
    subcategory: 'Shirts',
    price: 245180,
    originalPrice: 294216,
    link: 'https://www.shein.com/a-p-212380369.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/12/22/176022003467387ac1dcf57befa542f27f0823b059_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/12/55/17602200453a1d1242038981aaba465f09e018659d.jpg'
    ],
    inStock: true,
    rating: 4.74,
    reviews: 130
  },
  {
    id: '83454254',
    name: 'Manfinity RSRT Men\'s Western Style Button Front Floral Print Long Sleeve Shirt Men Cowboy Shirts Cowboy Men Shirts Western Men Shirts, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 265305,
    originalPrice: 318366,
    link: 'https://www.shein.com/a-p-83454254.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/21/a5/174780491541214c3391de9517a84042c7f1363795_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/21/68/1747804925b869ec2453c269c35361ad4759b71b43.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 727
  },
  {
    id: '854187',
    name: 'Manfinity BRENVOR Men Cotton Embroidered Rose Tee, Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 191245,
    originalPrice: 229494,
    link: 'https://www.shein.com/a-p-854187.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2019/10/11/15707838107f3d39d193931dfa2cea95dbec0200b8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2019/10/11/15707838034eb581da5b2c7248856fa06b1c69f191.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 1001
  },
  {
    id: '156349516',
    name: 'Men\'s Long Sleeve Shirt, Solid Color Button-Down Shirt, Suitable For Weddings, Office, Formal Occasions, Parties, Showcasing A Gentlemanly Style, A Classic Gift For Father Or Boyfriend. Simple White Shirt, A Must-Have For Autumn.',
    category: 'Men',
    subcategory: 'Shirts',
    price: 258635,
    originalPrice: 310362,
    link: 'https://www.shein.com/a-p-156349516.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/08/14/11/1755146945c37c1de63239a4b3646502734943d825_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/08/14/9b/1755146950a7a5e9bab076ee4e6b5378c1a9f0bc7d.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 163
  },
  {
    id: '290384724',
    name: 'Manfinity Homme Men\'s Solid Color Single-Breasted Casual/Business Long Sleeve Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 245180,
    originalPrice: 294216,
    link: 'https://www.shein.com/a-p-290384724.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/18/71/1763452226e3c49c2b4b7054d2c352f1dbbdec80ad_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/18/67/1763452237e98abaa275369f44a7e100ac3e1863b3.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '160716791',
    name: 'Manfinity Homme Plus Size Men\'s Solid Color Single-Breasted Long Sleeve Shirt, Suitable For Autumn, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 272090,
    originalPrice: 326508,
    link: 'https://www.shein.com/a-p-160716791.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/22/75/1755853194ad12bd0cb296e5cd0b697b3bb2bfed5d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/22/2f/1755853203096af2c75a68ce0e197bab8f98275079.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '102633753',
    name: 'Men\'s Casual Letter Print Round Neck Short Sleeve T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 171005,
    originalPrice: 205206,
    link: 'https://www.shein.com/a-p-102633753.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/17/14/1750144349d952bcc4baf289597531ea8f2b9a2fb1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/06/17/22/17501443743628cceccd5f307e4b17becc7c4f9934.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 1001
  },
  {
    id: '74349055',
    name: 'Men\'s Classic Navy Blue Formal Shirt, Button-Up Long Sleeve Dress Shirt With Lapel Collar, Overseas Bestseller! Slim Fit Navy Blue Shirt, Unlock The Charm Code Of A Fashionable Man, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 258635,
    originalPrice: 310362,
    link: 'https://www.shein.com/a-p-74349055.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/08/19/d4/17555853800db42822ab95ca824a7e1ac73aab66a6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/08/19/e4/175558538942912911ddbce55d9d556b6b47499077.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 378
  },
  {
    id: '52231985',
    name: 'Manfinity Mode Men\'s Korean Style Anchor Printed Short Sleeve Casual Polo Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 218155,
    originalPrice: 261786,
    link: 'https://www.shein.com/a-p-52231985.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/01/16/99/173699583172534697df5d260e79163acd2bc89567_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/01/02/d7/1735812477849599b48a02159597617d0b2439e6ba.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '51970989',
    name: 'ROMWE MEN Prep Men\'s Ice Hockey Jersey Short Sleeve Football Jersey Style T-Shirt, Sports Tee For Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 224940,
    originalPrice: 269928,
    link: 'https://www.shein.com/a-p-51970989.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/12/30/3d/17355231405274f6c90bc6fe1ee84fa7ae21ab4405_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/12/30/a9/17355231575cecfc93bafad869e7362fbff942a140.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '106786836',
    name: 'Men\'s Vintage Old Coin Style Digital Print Short Sleeve Shirt, Fashion Versatile, Suitable For Casual Daily Wear And Travel',
    category: 'Men',
    subcategory: 'Shirts',
    price: 211485,
    originalPrice: 253782,
    link: 'https://www.shein.com/a-p-106786836.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/22/59/17663973867acd4317f1dc901b8e492b1d1f3ca2a5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/12/22/5f/17663974356bf888e7c60fec9feccaa5119e4b8a40_square.png'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 435
  },
  {
    id: '85241513',
    name: 'Manfinity Homme Men\'s Casual Textured Fabric Half-Button Polo Shirt, Short Sleeve, Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 258635,
    originalPrice: 310362,
    link: 'https://www.shein.com/a-p-85241513.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/03/34/1748921640d773e07cc8c7d950563e6fbe8eff6979_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/03/59/1748921648d800464ca63ab95e5b0f50a3548e0adc.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 435
  },
  {
    id: '175321066',
    name: 'Manfinity Homme Men\'s Colorblock Letter & Number Graphic Round Neck Short Sleeve T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 171005,
    originalPrice: 205206,
    link: 'https://www.shein.com/a-p-175321066.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/06/b1/1757122933b612382ee63c855f0ea46b7ad7f643cf_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/06/e0/1757122941ff9ed19ee08b4d5dbc857b0cce611623.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 984
  },
  {
    id: '268522817',
    name: 'Manfinity Homme Men\'s Plaid Long Sleeve Single-Breasted Casual/Business Shirt Mens Flannel Shirt Flannels For Men Men Shacket Mens Layered Shirts Plaid Jacket Men Old Money,Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions,Boyfriend/Husband Gift, Anniversary Gift Christmas Outfits',
    category: 'Men',
    subcategory: 'Shirts',
    price: 285545,
    originalPrice: 342654,
    link: 'https://www.shein.com/a-p-268522817.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/05/e4/1762332866eb727deab6ba1a6914cf5969309ef22b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/05/27/17623328771efff6e429a0eb7dd8d863593f2531dc.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 722
  },
  {
    id: '76744081',
    name: 'Manfinity Homme Manfinity Nomadique Men\'s Casual Cotton-Linen Shirt Summer Hengli Collar Polo Shirts For Men Cotton Polo Shirts For Men Men Shirts Polo Polo Shirt For Men Polo Designer Shirts 4xl For Men S',
    category: 'Men',
    subcategory: 'Shirts',
    price: 265305,
    originalPrice: 318366,
    link: 'https://www.shein.com/a-p-76744081.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/13/ed/174709871537ca3a48c2aeade526e62aca6944a404_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/13/7e/1747098725510f108ff221d5caf347b75c1bb91d6f.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '86296326',
    name: 'Manfinity Homme 2pcs/Set Men\'s Solid Color Textured Short Sleeve Shirt And Shorts Set, Summer Men Shirt And Shorts Set, Cozy Outfits',
    category: 'Men',
    subcategory: 'Shirts',
    price: 420210,
    originalPrice: 504252,
    link: 'https://www.shein.com/a-p-86296326.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/28/c4/1753685787d455608348d8cebcb402dbb78e9f297a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/28/10/1753685795d2c3a7d7d81ace3da6859ce2421b7c6a.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 121
  },
  {
    id: '37561720',
    name: 'SWAVVY Men Knitted Fashionable Casual Loose Letter Graphic Color Block Short Sleeve T-Shirt With Patchwork And Printed Pattern, Suitable For Daily Wear, For Going Out, Vintage Baseball T-Shirt, For Friends, Summer, Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 258635,
    originalPrice: 310362,
    link: 'https://www.shein.com/a-p-37561720.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/06/26/8a/1719366265ed2427c8936d23dcf28ad00c3fcdbc81_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/06/26/90/17193662843a2c54729cecd8e370ccda90af411801.jpg'
    ],
    inStock: true,
    rating: 4.97,
    reviews: 149
  },
  {
    id: '203225025',
    name: 'Manfinity Homme Classic Versatile Short Sleeve T-Shirt, Gold "King" Icon Sleeve Cuff Floral Pattern Design, Mature Cool Street Style Men Black Gold T Shirt Men Graphic Tee King',
    category: 'Men',
    subcategory: 'Shirts',
    price: 171005,
    originalPrice: 205206,
    link: 'https://www.shein.com/a-p-203225025.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/30/0c/175923037034409cfa7f46448cdcd55601da35697d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/30/a8/1759230377a94d8fe5b249e9d64a6f68fdc9f42761.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 29
  },
  {
    id: '63500665',
    name: 'PAVTROS Manfinity Streetrush Men\'s Sporty Numeric Print Casual T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 218155,
    originalPrice: 261786,
    link: 'https://www.shein.com/a-p-63500665.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/03/31/59/1743384054d9834022b7a787258a05c58075a824b5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/03/31/a3/174338406540321ab21d7ac5e1886b1becaaa06aee.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 418
  },
  {
    id: '72881120',
    name: 'Men\'s Casual Contrast Color Retro Print Shirt, For Fall, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Shirts',
    price: 278760,
    originalPrice: 334512,
    link: 'https://www.shein.com/a-p-72881120.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/04/23/49/1745404827c57632f26195e4f3fdc28225ea1513d1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/04/23/0b/174540485591eb1123192d4f076044abaf0d648ef9.jpg'
    ],
    inStock: true,
    rating: 4.96,
    reviews: 26
  },
  {
    id: '278548302',
    name: 'Manfinity Homme Men\'s Contrast Stripe Patchwork Half-Zip Long Sleeve Polo Shirt Mens Casual Tops Men S Long Sleeve Summer T Shirts Good Quality Tshirt Polo Shirts For Men Long Sleeve Rugby Long Sleeve For Men',
    category: 'Men',
    subcategory: 'Shirts',
    price: 191245,
    originalPrice: 229494,
    link: 'https://www.shein.com/a-p-278548302.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/11/d1/176284019576e6e7c6087237d64081e86171b54113_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/11/f8/1762840204b9870ea09485f0c279ff06a9330698cf.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '81455637',
    name: 'Manfinity Homme Men\'s Summer Geometric Print Short Sleeve Casual Commute Polo Shirt Polo Shirts For Men Polo Shirt For Men Men Shirts Polo Men T Shirts Men Fitted Shirts',
    category: 'Men',
    subcategory: 'Shirts',
    price: 245180,
    originalPrice: 294216,
    link: 'https://www.shein.com/a-p-81455637.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/19/0c/17476318081454025b06587d3cc7fc72a8f32d5fa6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/19/38/1747631816d85be3fa4bafe918c9a5f6b691d383c1.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 367
  },
  {
    id: '43497738',
    name: 'Manfinity Mode Men Contrast Color Patchwork Long Sleeve Casual Commuter Shirt, Autumn, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 265305,
    originalPrice: 318366,
    link: 'https://www.shein.com/a-p-43497738.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/24/56/17271559175eba8e3bca863b7277e5743b42191ac9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/24/b9/1727155935dc41116ed575b190a7207083c5d28f41.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '28564969',
    name: 'Men\'s Striped Button-Up Long Sleeve Shirt, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 245180,
    originalPrice: 294216,
    link: 'https://www.shein.com/a-p-28564969.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/01/03/ee/17042694342d4ae0f40880c9515ffc669c2f33d4e3_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/01/03/a7/17042694535fa587dc1355e019c1349ed3032a3bad.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '215842512',
    name: 'Men\'s Contrast Color Design Casual Crew Neck Sweatshirt - White Ribbed With Brown Splice, Thick Warm Pullover, Stand Collar Zipper Design, Suitable For Casual, Fashion, Simple, Versatile Outings And Commuting Long Sleeve Personalized Sweatshirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 433780,
    originalPrice: 520536,
    link: 'https://www.shein.com/a-p-215842512.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/03/75/17594888367b55816658cf8620ab3cb5fe959d4413_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/03/f5/17594888507a5259bf2bb2fc30c862e8c87fe57b02.jpg'
    ],
    inStock: true,
    rating: 4.97,
    reviews: 44
  },
  {
    id: '60863311',
    name: 'Men\'s Loose Fit Street Style Washed Print Round Neck Short Sleeve T-Shirt, Emo',
    category: 'Men',
    subcategory: 'Shirts',
    price: 258635,
    originalPrice: 310362,
    link: 'https://www.shein.com/a-p-60863311.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/03/20/8e/17424477709bb1e576964f4f2b7ae95b9e421bf4de_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/03/20/22/17424482807853f8dae6161a481cb3bf1697dc50cb.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 193
  },
  {
    id: '21459701',
    name: 'NITAGUT Men Solid Button Up Long Sleeve Shirt, Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 305785,
    originalPrice: 366942,
    link: 'https://www.shein.com/a-p-21459701.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/03/24/93/1742808034c837a88005b98dbc87ecbe6fb0008c2e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/11/20/e8/17004458463f39c23e67e918d5ae5495a8d58c6428.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '15637824',
    name: 'Manfinity Homme Men Solid Button Up Shirt & Shorts Set, Vacation Plain Husband Casual Clothes',
    category: 'Men',
    subcategory: 'Shirts',
    price: 379845,
    originalPrice: 455814,
    link: 'https://www.shein.com/a-p-15637824.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/05/05/16832499810f91ff5db9304c00d6e0b24c08498584_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/05/05/16832500000a6851958a4c8ea42afcd7882d5c051b.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '54194590',
    name: 'Men\'s Summer Business Cooling Collar Casual Vacation Polo Shirt Short Sleeve T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 204700,
    originalPrice: 245640,
    link: 'https://www.shein.com/a-p-54194590.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/spmp/2025/07/18/25/1752827747512fe3c64fac5bc56b4c297e3116b339_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/p/abc/2025/07/18/01/1752827792f49f368aa173b14de998b0497b5ba9cd.png'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 109
  },
  {
    id: '78005823',
    name: 'Manfinity Sport Corelite Men\'s Botanical Print Round Neck Short Sleeve Sports T-Shirt For Summer Workout Clothes Running Tees & Tanks, Black T-Shirt, Spider T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 171005,
    originalPrice: 205206,
    link: 'https://www.shein.com/a-p-78005823.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/14/ff/17471913581a3147e4c0188525cbd454c5ce0fce11_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/14/70/174719136735831412c42647a38291747322307643.jpg'
    ],
    inStock: true,
    rating: 4.69,
    reviews: 466
  },
  {
    id: '61711878',
    name: 'Men\'s Personalized T-Shirt, Unique 3D Broken Wall Cute Expression Print, Summer Round Neck Short Sleeve White Top',
    category: 'Men',
    subcategory: 'Shirts',
    price: 164335,
    originalPrice: 197202,
    link: 'https://www.shein.com/a-p-61711878.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/03/17/63/1742199907ee5129e8c81e7a5fee0e3777cf1b848b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/03/17/75/174219990580281bb617a09a65010bdfca12b43e4a.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 371
  },
  {
    id: '132109206',
    name: 'Manfinity EMRG Men\'s Casual Loose Fit Round Neck Short Sleeve T-Shirt With Creative Letter Graphic, 2000s Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 171005,
    originalPrice: 205206,
    link: 'https://www.shein.com/a-p-132109206.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/15/dd/1752566220eae4cf26935f54b4f1e931b8ff330b39_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/15/72/175256622929b836e0cdfcc2e6fbff099024db1741.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 1001
  },
  {
    id: '50756573',
    name: 'PAVTROS Manfinity Streetrush Men\'s Washed Snow-Washed Blurred Face Print Round Neck Short-Sleeved T-Shirt, Spring And Summer Men\'s Clothing, Boyfriend Gift T T Tee Shirt For Men Graphic',
    category: 'Men',
    subcategory: 'Shirts',
    price: 292330,
    originalPrice: 350796,
    link: 'https://www.shein.com/a-p-50756573.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/12/18/91/1734490782e3177705670b6d2519f57f973b05dea8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/12/18/40/17344908072866295e0d05427e5611b0f09f74ad72.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 62
  },
  {
    id: '36357210',
    name: 'Manfinity RSRT Men\'s Jacquard Mesh Semi-Transparent Short Sleeve Shirt , Casual Summer Hawaiian Baggy Button Up Lace See Through Plain Black Vacation Beach',
    category: 'Men',
    subcategory: 'Shirts',
    price: 258635,
    originalPrice: 310362,
    link: 'https://www.shein.com/a-p-36357210.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/06/06/0e/17176528071c7550b62269a96ff53d2e3f8ace260b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/06/06/ce/1717652837c051883487db906fe56746d4b3693c6c.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 420
  },
  {
    id: '166051216',
    name: 'Manfinity Homme Men\'s Plaid Print Button Casual Fashion Long Sleeve Polo Shirt Men White And Brown Shirts Men Long Sleeve Polo Shirts White Polo Shirt Men Collared Shirts Plaid Trim Polo Shirt, Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 299000,
    originalPrice: 358800,
    link: 'https://www.shein.com/a-p-166051216.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/28/06/17563714339f7185ae63a3c76b2b3f8ca4f2fcbef6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/28/2b/1756371444c502f21a62ce7da1a73a326db53936e0.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 1001
  },
  {
    id: '208931228',
    name: 'Manfinity Homme Plus Size Men\'s Solid Color Short Sleeve Single-Breasted Casual Pocket Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 305785,
    originalPrice: 366942,
    link: 'https://www.shein.com/a-p-208931228.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/08/98/1762609087b17a4f6c789ed1cf8a58faf4ef7fbdf0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/08/3a/1762609101a1d0e06ee62807a188af2f151c21a19c.jpg'
    ],
    inStock: true,
    rating: 4.95,
    reviews: 42
  },
  {
    id: '61332637',
    name: 'Men Short Sleeve Henley Shirt For Summer, Deep V Neck Linen Breathable Solid Color Vintage Style Casual Multi-Button Shirt, Suitable For Vacation, Daily Wear',
    category: 'Men',
    subcategory: 'Shirts',
    price: 299000,
    originalPrice: 358800,
    link: 'https://www.shein.com/a-p-61332637.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/03/11/b9/17416754970e2a84e75c9b9a45a9bde4927ada911d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/03/11/53/1741675495281cfd071da6e10d6d8989d49bc19bdd.png'
    ],
    inStock: true,
    rating: 4.95,
    reviews: 1001
  },
  {
    id: '150085018',
    name: 'AXEPEAK Men\'s Knit Casual Daily Loose Short Sleeve T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 245180,
    originalPrice: 294216,
    link: 'https://www.shein.com/a-p-150085018.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/11/32/17548880738b05e24522b54c9552986f47f009a476_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/11/46/1754888082841a6b3312f8e48f221f50f4926b3773.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 90
  },
  {
    id: '33291849',
    name: 'ROMWE MEN Anime Men Short Sleeved Y2k T-Shirt With Slogan/Character Print For Summer, School, Emo, 2000s Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 184460,
    originalPrice: 221352,
    link: 'https://www.shein.com/a-p-33291849.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/04/19/0e/171349249834f6ee6ca1cc5d3640ff24a59a55d0f6_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/04/19/2a/17134925094204d508cacfe3a48e00d6107579b1d9.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '294442461',
    name: 'ROMWE MEN Prep Men\'s Contrast Color Snake Print Dark Academia Style Short Sleeve Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 258635,
    originalPrice: 310362,
    link: 'https://www.shein.com/a-p-294442461.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/18/95/17634565545e2a822bb6fbd95abaa592dd49154f5e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/18/c3/17634565601a1afcf90702b9d8b4bcdfc98ad26ebe.jpg'
    ],
    inStock: true,
    rating: 4.83,
    reviews: 12
  },
  {
    id: '108929877',
    name: 'Manfinity Homme Men\'s Casual Letter Print Round Neck Short Sleeve T-Shirt, Summer Christian T-Shirts For Men',
    category: 'Men',
    subcategory: 'Shirts',
    price: 150880,
    originalPrice: 181056,
    link: 'https://www.shein.com/a-p-108929877.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/26/2a/17509205231a71a10f49879189cc95316ccb4ec3b5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/26/a3/17509205323ad588030041789a8bf7047836eceb3c.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 409
  },
  {
    id: '53001349',
    name: 'Manfinity Homme Plus Size Men\'s Geometric Patterned Short Sleeve Casual Polo Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 299000,
    originalPrice: 358800,
    link: 'https://www.shein.com/a-p-53001349.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/01/09/da/173642461417c48269ced5c36e28de6a888bcf4f2c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/01/09/ed/173642462995ed0ca5fe5216cc0a16122e328f4b58.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 659
  },
  {
    id: '53783518',
    name: '3D Digital Print Japanese Samurai Pattern Men\'s T-Shirt, Summer Outdoor Sports Men\'s Short Sleeve Top, Refreshing Casual Holiday Gift Men\'s T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 157550,
    originalPrice: 189060,
    link: 'https://www.shein.com/a-p-53783518.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/04/25/14/1745589132e6a6036cab9930d80c1f076f092dca28_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/04/25/c6/174558914960c2d187a00623f21e21c682bf7f2a7e.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '16498955',
    name: 'FeverCity Men T-Shirts V Neck Short Sleeve Sexy Fashion Men Summer Fishnet Top Tee',
    category: 'Men',
    subcategory: 'Shirts',
    price: 137310,
    originalPrice: 164772,
    link: 'https://www.shein.com/a-p-16498955.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/06/05/16859272987047c5cea20c734787192d2a2236835a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/06/05/16859273082c2839fcdd94395583232d28e96368c0.jpg'
    ],
    inStock: true,
    rating: 4.75,
    reviews: 846
  },
  {
    id: '39525826',
    name: 'Men\'s Summer Slogan Pigeon Print Short-Sleeved Round Neck Casual Commuter T-Shirt, Emo',
    category: 'Men',
    subcategory: 'Shirts',
    price: 184460,
    originalPrice: 221352,
    link: 'https://www.shein.com/a-p-39525826.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2024/07/26/4f/17219596498a5ea43bc35c7880889ac232062b96d5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2024/07/26/f1/172195965205d23edb46a457b065774c55d9428f26.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '158173353',
    name: 'Manfinity Homme Men\'s Casual Solid Color Short Sleeve T-Shirt, Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 171005,
    originalPrice: 205206,
    link: 'https://www.shein.com/a-p-158173353.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/20/e4/175566905235f5e2580967620a62951c91b221e442_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/20/95/1755669057ea6e93b7d0fe254868a873b5f45a9c65.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 1001
  },
  {
    id: '212084944',
    name: 'Manfinity Homme Plus Size Men\'s Loose Fit Dark Gray T-Shirt, Minimalist Design. Young Men\'s Street Style Clothing. Bear Print, Teddy Bear Graphic, Comfortable, Modern, Casual, Daily Style, Perfect Street Fashion Item, Also An Excellent Gift For Boyfriend Or Husband. Versatile, Travel Style.',
    category: 'Men',
    subcategory: 'Shirts',
    price: 211485,
    originalPrice: 253782,
    link: 'https://www.shein.com/a-p-212084944.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/11/e4/176016083329aa585043cc7ce5643123134ff5d012_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/11/f1/1760160837ce1a865b6df950f8554a140c8994a175.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 76
  },
  {
    id: '310824743',
    name: 'Manfinity Homme Men\'s Striped Long Sleeve Casual Commuter Polo Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 198030,
    originalPrice: 237636,
    link: 'https://www.shein.com/a-p-310824743.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/29/c4/176438804979970bfc8a5834103b53173640a16faa_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/29/20/1764388060678ecea16ed35d61a9a9cc8a0c36c0e7.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 1001
  },
  {
    id: '110635378',
    name: 'Manfinity Homme Men\'s Summer Solid Color Short Sleeve Casual Office POLO Shirt Men Ribbed Polo Shirt Men Knit Polo Men Navy Blue Polo Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 245180,
    originalPrice: 294216,
    link: 'https://www.shein.com/a-p-110635378.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/29/e7/17511792355ed991da8334a9bb7a73647ae1d6060d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/29/e5/175117923987fe1143bb497f08129c56af26dc4e68.jpg'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 462
  },
  {
    id: '144212890',
    name: 'Manfinity Homme Plus Size Men\'s Solid Color Round Neck Short Sleeve Casual Versatile T-Shirt, Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 177790,
    originalPrice: 213348,
    link: 'https://www.shein.com/a-p-144212890.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/04/ee/17543015887671f61969fd3433a61c7b83e8be28d7_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/04/1c/1754301598d1d622b9e9a6d49495aeaa6ecf97dab4.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '90233548',
    name: 'Manfinity Mode Men\'s Casual Versatile Solid Color Long Sleeve Shirt Men Blue Dress Shirt Teal Dress Shirt Teal Shirt For Men, For Fall, Old Money Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 245180,
    originalPrice: 294216,
    link: 'https://www.shein.com/a-p-90233548.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/06/ea/17491838200fed399bd35c8271d553f309aae2634a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/06/c7/174918383127b9c6cc1540d0b4eac5ee211dfc2365.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '65977620',
    name: '2025 Men\'s Comfortable Casual Summer Vacation Colorblock Striped Versatile Short Sleeve Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 251850,
    originalPrice: 302220,
    link: 'https://www.shein.com/a-p-65977620.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/06/09/5e/17494504615d7969f6cbee8d50257fc4f3df187077_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/06/09/a9/17494510250901fab83c0a022c59ab6078aaf20568.png'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 1001
  },
  {
    id: '16081736',
    name: 'Manfinity Homme Men T-Shirts Fit Short Sleeve Henley Casual Dad Summer Polyester Tee',
    category: 'Men',
    subcategory: 'Shirts',
    price: 191245,
    originalPrice: 229494,
    link: 'https://www.shein.com/a-p-16081736.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/05/15/16841273004dd13c3f1f95272fbfade5841311b1f3_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/05/15/1684127316b2a6f09a83cbee5b6292e19c17b2136b.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 1001
  },
  {
    id: '36333820',
    name: 'Manfinity Sport Corelite Boyfriend Style Men\'s Casual Round Neck Long Sleeve Daily Wear T-Shirt Workout Tops Gym Top Breathable',
    category: 'Men',
    subcategory: 'Shirts',
    price: 164335,
    originalPrice: 197202,
    link: 'https://www.shein.com/a-p-36333820.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/06/05/c1/1717565470a8dafcab1ffa35ce12babb678787ee03_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/06/05/7b/17175654895a708d432a01504740a7e6ccfe02fdb3.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 1001
  },
  {
    id: '107763235',
    name: 'Manfinity Homme Men\'s Single-Breasted Casual Short Sleeve Shirt, Solid Color For Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 245180,
    originalPrice: 294216,
    link: 'https://www.shein.com/a-p-107763235.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/23/54/175067168276b12cd3ffbaed1fca1ca2fa74755f92_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/23/46/1750671687a5fd358a6b11f8931510e9b2467813de.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 295
  },
  {
    id: '30118908',
    name: 'Men\'s Summer Short Sleeve Polo Shirt, Minimalist Retro Collared Thin All-Match Sporty Casual Outdoor Tops, Fashion Versatile, For Golf',
    category: 'Men',
    subcategory: 'Shirts',
    price: 238395,
    originalPrice: 286074,
    link: 'https://www.shein.com/a-p-30118908.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/02/19/9f/1708313489f41b9d4b9eb878398d944ff4e2555a0a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/18/c4/17634562617c50dd0c45d52741a297db91a4645b23.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '137677832',
    name: '1pc Men\'s 2025 New Plaid Shirt, Casual Loose Versatile Blouse, Korean Oversized Checkered Shirt, Suitable For Spring/Autumn Commuting & Casual Wear, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Shirts',
    price: 272090,
    originalPrice: 326508,
    link: 'https://www.shein.com/a-p-137677832.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/31/d8/1753948204764cb7f1a853707d899f47cfbf926d38_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/07/31/b7/1753948262eac9ded0f5c2b947ec6d9727715b0aa4.jpg'
    ],
    inStock: true,
    rating: 4.97,
    reviews: 35
  },
  {
    id: '39105775',
    name: 'Manfinity Mode Men\'s Plain Button-Up Long Sleeve Formal Shirt, Simple And Mature Style, Lavender Dress Shirt Men, Men\'s Purple Button-Down Shirt, Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 258635,
    originalPrice: 310362,
    link: 'https://www.shein.com/a-p-39105775.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/07/20/44/1721482426f81ab076aa8dd2b80e790924fd1a4a6b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/07/20/92/172148245534a4d436994bfb027b56114685818823.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '259664286',
    name: 'Manfinity Homme Men\'s Casual Contrast Color Button Half-Placket Long Sleeve Polo Shirt Men Long Sleeve Black And White Shirt Long Sleeves Striped Men Casual Long Sleeved Shirt For Men Old Money,Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions,Boyfriend/Husband Gift, Anniversary Gift Christmas',
    category: 'Men',
    subcategory: 'Shirts',
    price: 332695,
    originalPrice: 399234,
    link: 'https://www.shein.com/a-p-259664286.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/03/ef/1762154158246919a450d940e473ae79710f302fdf_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/03/6a/176215416326fcb856f47b717f7a137acbcd9032f3.jpg'
    ],
    inStock: true,
    rating: 4.73,
    reviews: 15
  },
  {
    id: '325512042',
    name: 'Men\'s Casual Fashion Street Printed Drop Shoulder Loose Breathable Short Sleeve T-Shirt, Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 137310,
    originalPrice: 164772,
    link: 'https://www.shein.com/a-p-325512042.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/04/e5/17648258378ee00535d98ad3e01935e642c503faae_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/04/11/176482584843c89219061515cc9110cd78a7408b26.jpg'
    ],
    inStock: true,
    rating: '4.5',
    reviews: 88
  },
  {
    id: '32964310',
    name: 'Manfinity Mode Men Solid Color Simple Basic Long Sleeve Shirt, Spring And Autumn Style, For Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 265305,
    originalPrice: 318366,
    link: 'https://www.shein.com/a-p-32964310.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/07/05/90/17201696402c15400a17c9ee909ff585634bf3a8e8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/04/08/86/1712553353255d2780742d828a389e5df2ac25c1fd.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '71417646',
    name: 'Manfinity Homme Men\'s Casual Summer Contrast Color Patchwork Digital Print Round Neck T-Shirt 32 Jersey',
    category: 'Men',
    subcategory: 'Shirts',
    price: 171005,
    originalPrice: 205206,
    link: 'https://www.shein.com/a-p-71417646.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/28/7b/17458288860df44420e341178c7e75d4a53124bf50_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/28/52/174582889513736a72f4e670ddcf3af7346af5e7dd.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 984
  },
  {
    id: '173234974',
    name: 'Manfinity Homme Men\'s Solid Color Half-Zip Casual Short Sleeve Polo Shirt, Summer Men T Collar T Shirt Men Casual Tops Zipper Polo Shirt Grey Top Men',
    category: 'Men',
    subcategory: 'Shirts',
    price: 278760,
    originalPrice: 334512,
    link: 'https://www.shein.com/a-p-173234974.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/05/9d/1757071406dd7db1441b504d9a5033f026f35f44aa_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/pi/2025/09/05/23/1757071412c79bfc52173b871c7fe870148cf4125d.png'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '261068365',
    name: 'Men\'s Minimalist Mountain Silhouette Graphic Round Neck Short Sleeve T-Shirt, Coffee Color, Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 184460,
    originalPrice: 221352,
    link: 'https://www.shein.com/a-p-261068365.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/01/9a/176457031977bdb0b8fcb6c1caef7400e2dcfae8f4_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/01/23/176457032811e5c5147ca699d96356872484e890d2.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 246
  },
  {
    id: '297647366',
    name: 'Manfinity Homme Men\'s Solid Color Single-Breasted Casual Pocket Long Sleeve Shirt Old Money,Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions, Boyfriend/Husband Gift, Anniversary /Birthday Gift Party Christmas New Years Wedding',
    category: 'Men',
    subcategory: 'Shirts',
    price: 231610,
    originalPrice: 277932,
    link: 'https://www.shein.com/a-p-297647366.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/97/17637106660fa8b2d03b8c3118db1f7e06c2e6f06c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/21/c7/17637106772ccab90558d8cc91f3090a9f7567462b.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 160
  },
  {
    id: '91960546',
    name: 'Manfinity Homme Men\'s Casual Letter Print Round Neck Short Sleeve T-Shirt, Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 144095,
    originalPrice: 172914,
    link: 'https://www.shein.com/a-p-91960546.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/04/da/1749016211a889b14719a72a2a4de5f70c2c3becfe_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/04/d9/1749016220cd680ca43e0698f1b36737fbacc6473e.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 1001
  },
  {
    id: '250773216',
    name: 'Manfinity Homme Men\'s Stand Collar Half-Zip Raglan Long Sleeve Ribbed T-Shirt Thermals For Men Gray Top Quarter Zip Old Money,Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions, Boyfriend/Husband Gift, Anniversary Gift Party Christmas, For Winter',
    category: 'Men',
    subcategory: 'Shirts',
    price: 231610,
    originalPrice: 277932,
    link: 'https://www.shein.com/a-p-250773216.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/31/cd/17618810493d1950295a2f1e45f9004ff5538676df_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/31/0c/1761881063f34cd4f5f8a4c3e200e7980c4862a46c.jpg'
    ],
    inStock: true,
    rating: 4.54,
    reviews: 88
  },
  {
    id: '219374160',
    name: 'Manfinity Homme Men\'s Blue Plaid Business Long Sleeve Shirt Men Shirts Dress Navy Shirt Men Manfinity Men Shirts Men S Clothing Online Business Casual Tops Men Plaid Button Up Men',
    category: 'Men',
    subcategory: 'Shirts',
    price: 339480,
    originalPrice: 407376,
    link: 'https://www.shein.com/a-p-219374160.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/24/97/17612878509478b6e623c9255b9dca06f680ad9da8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/24/fb/17612878615ede2f97207a29bb1ff4cf94959cfbad.jpg'
    ],
    inStock: true,
    rating: 4.77,
    reviews: 27
  },
  {
    id: '195502114',
    name: 'Manfinity Homme Men\'s Solid Color Front Button Dropped Shoulder Casual Versatile Short Sleeve Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 245180,
    originalPrice: 294216,
    link: 'https://www.shein.com/a-p-195502114.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/25/96/1758789358ea2b330ee6b94269a50c3cdad7850aa7_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/25/51/1758789367248632ea1135b2b4f6a61255a48a437b.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '209679056',
    name: 'Manfinity CasualCool Men\'s Solid Color Long Sleeve Casual Commuter Polo Shirt Casual Men Long Sleeve White Polo Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 278760,
    originalPrice: 334512,
    link: 'https://www.shein.com/a-p-209679056.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/4a/1759988287ce949bee801fe84278a603a739c2795e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/09/ff/17599882986dafc3b8665725f9530249c0615fb045.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 430
  },
  {
    id: '180740425',
    name: 'Manfinity Homme Men\'s Fashion Business Plaid Shirt, Long Sleeve Button-Up Formal Shirt, Office Wear, Spring & Autumn, Old Money Style, Wrinkle-Resistant Quick-Dry Opaque Fabric, Smooth Texture, Classic Collar Design, Suitable For Commute, Business, Party, Street Style,Red Checkered Shirt, Christmas Men Red Plaid Shirt Men Long Sleeve Shirt Men Shirts Plaid Men Button Up Shirt Design Men Red White And Blue Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 305785,
    originalPrice: 366942,
    link: 'https://www.shein.com/a-p-180740425.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/6e/17605097565468e624825435edb05e089b4a24c26d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/15/cc/17605097726ab8eb387ec8ab6c491c8c02684f33d5.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 14
  },
  {
    id: '61521667',
    name: '5pcs/Set Men\'s Quick Dry T-Shirts, Soft Elastic Hiking Fishing Breathable Short Sleeve Tees, Outdoor Sports Tops For Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 541535,
    originalPrice: 649842,
    link: 'https://www.shein.com/a-p-61521667.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/02/03/1751469379f8c679b36c0807ddaa61389bc1608be5_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/spmp/2025/07/02/eb/17514693685f69f9dc6ede93c318f6ee49aaf820b9.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 385
  },
  {
    id: '283276898',
    name: 'Manfinity Homme Men\'s Contrast Color Short Sleeve Casual Commuter Polo Shirt Men Black Gold T Shirt Pattern Polo Men Black And Khaki Shirt Men S Men S Knit Shirt Old Money,Daily Leisure, Weekend Trips, Outdoor Activities, Travel Expeditions, Relaxed Work Environments Or Semi-Formal Occasions, Boyfriend/Husband Gift, Anniversary /Birthday Gift Party Christmas New Years Wedding',
    category: 'Men',
    subcategory: 'Shirts',
    price: 258635,
    originalPrice: 310362,
    link: 'https://www.shein.com/a-p-283276898.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/10/2f/176273899370f1c9982995c276cc3fc40d1f44803d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/10/68/17627390049d90df109653ba59476b44434bd32fc2.jpg'
    ],
    inStock: true,
    rating: 4.96,
    reviews: 152
  },
  {
    id: '39761683',
    name: 'Manfinity Homme 3pcs/Set Men\'s Casual Solid Color Plain Collar Shirt Short Sleeve Pocket Shirt, For Summer, Going Out',
    category: 'Men',
    subcategory: 'Shirts',
    price: 474145,
    originalPrice: 568974,
    link: 'https://www.shein.com/a-p-39761683.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/07/30/6c/172232260842357f31485fc3f59fbcc854ef48e8da_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/07/30/d1/1722322618d80a9fabe676ae92319598528fc331af.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 623
  },
  {
    id: '212081690',
    name: 'Manfinity Homme Plus Size Men\'s Fashion Spade A Floral Print Short Sleeve T-Shirt, Casual Tee, Minimalist & Versatile, Great Gift For Boyfriend Or Family  Printed Sleeve T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 198030,
    originalPrice: 237636,
    link: 'https://www.shein.com/a-p-212081690.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/11/79/17601609307c3922b80397030d6985268f9e5e3a91_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/11/0b/176016093898cf0e6b3bffb05912ea7025f817f34c.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 20
  },
  {
    id: '225159947',
    name: 'Manfinity Homme Men\'s Drop Shoulder Long Sleeve Front Button Striped Casual Versatile Shirt Men Retro Shirts Striped Men Casual Inside With A Luffian Top Jacket Mechanic Button Up Men Stripe Shirt Grey Button Up Men',
    category: 'Men',
    subcategory: 'Shirts',
    price: 325910,
    originalPrice: 391092,
    link: 'https://www.shein.com/a-p-225159947.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/a9/1760947109c9b26b313f9594828c1592f6f86611e7_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/11/17609471190931af1da02cafe61a02046eee3ab40a.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 103
  },
  {
    id: '43867074',
    name: 'HIMLAND Men Casual Solid Notched Neck Half Button Blue Shirt, Old Money',
    category: 'Men',
    subcategory: 'Shirts',
    price: 312455,
    originalPrice: 374946,
    link: 'https://www.shein.com/a-p-43867074.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/09/29/25/17276014476700af8f98901bad281a3dc419dd8f73_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/09/29/ab/1727601465eea00eaff5e6a6e5d7ef4d43b29020c4.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 1001
  },
  {
    id: '37968151',
    name: 'HIMLAND Men\'s Woven Striped Slim Fit Short Sleeve Casual Shirt, Suitable For Summer, Old Money',
    category: 'Men',
    subcategory: 'Shirts',
    price: 285545,
    originalPrice: 342654,
    link: 'https://www.shein.com/a-p-37968151.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/27/b2/174574892856ce577ce430b446baf72ee821548402_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/27/f2/17457489442b061e534913857802ace2b65b026b47.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 397
  },
  {
    id: '204686587',
    name: 'GRDR Men\'s Fashionable Contrast Color Casual Long Sleeve Polo Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 292330,
    originalPrice: 350796,
    link: 'https://www.shein.com/a-p-204686587.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/17/ed/176596451247493a3746710f9af26735618415b02e_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/12/17/2e/17659645305d43abdd0d64c2631b49181d00898c79.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 11
  },
  {
    id: '212143819',
    name: 'Manfinity Homme Men\'s Contrast Trim Casual Short Sleeve Polo Shirt, Summer Red Summer For Men Polo Golf Shirt Zipper Polo Shirt Red And Black Shirt Men Polo Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 245180,
    originalPrice: 294216,
    link: 'https://www.shein.com/a-p-212143819.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/13/b1/176032098650ed4fd75439aaf274a0c2df71d99700_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/13/fb/1760320992355270243fda5ec74a653b0508859087.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 710
  },
  {
    id: '66243773',
    name: 'Claim Dot Casual Men\'s Simple Letter Print Color Block Round Neck Short Sleeve T-Shirt And Solid Color Drawstring Shorts Set, Contrast Edge Design, Suitable For Daily Wear, Going Out, School, Vacation, 2 Pieces Set Clothing Set, Cozy Outfits',
    category: 'Men',
    subcategory: 'Shirts',
    price: 319240,
    originalPrice: 383088,
    link: 'https://www.shein.com/a-p-66243773.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2025/04/03/f4/1743647478a9a42531f7658628f083e9bf15bf6619_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2025/04/03/e3/17436474864a5db5e53bc5da6e18580c71a1566b53.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 286
  },
  {
    id: '106796943',
    name: 'Men\'s Vintage Old Coin Style Digital Print Short Sleeve Shirt, Fashion Versatile, Suitable For Casual Daily Wear And Travel',
    category: 'Men',
    subcategory: 'Shirts',
    price: 218155,
    originalPrice: 261786,
    link: 'https://www.shein.com/a-p-106796943.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/22/82/1766397458620cd06b3c332a5f3ade138187f2437b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/12/22/4a/176639747043bfe63da28ef717ffe2dfc13cd0f2ce_square.png'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 435
  },
  {
    id: '323030307',
    name: 'Manfinity Homme Men Corduroy Flap Pocket Button Up Shirt Army Green Shirtmen Shirt Greengreen Shirt For Mengreen Men Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 339480,
    originalPrice: 407376,
    link: 'https://www.shein.com/a-p-323030307.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/10/77/17653610331946ab0937349ea2c3c60a0412d525ce_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/12/10/f2/1765361045d2e9b8d0ac1b180369642b0bb833b50a.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '169373333',
    name: 'Manfinity Homme Men\'s Casual Versatile Commuter Solid Color Long Sleeve Shirt Men Casual Dress Shirt Men Grey Shirt, Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 373060,
    originalPrice: 447672,
    link: 'https://www.shein.com/a-p-169373333.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/02/54/1756791897e28ce801b7849d412de7f9012e951c31_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/02/80/1756791907aa8e84606f8a00ccee73e167d568ad0e.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '38933309',
    name: 'Manfinity Homme Men Plus Size Crew Neck Fashion Short Sleeve Plain Chicago Letter Print Solid Color Casual T-Shirt, For Going Out',
    category: 'Men',
    subcategory: 'Shirts',
    price: 224940,
    originalPrice: 269928,
    link: 'https://www.shein.com/a-p-38933309.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/07/18/6b/172129317580c11642c9697229a3a68954f494d80b_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/07/18/9e/17212931955b759279d9a8e1a8778823b6e762b058.jpg'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 487
  },
  {
    id: '15768604',
    name: 'Manfinity Homme Men Solid Button Up Shirt Without Tee',
    category: 'Men',
    subcategory: 'Shirts',
    price: 265305,
    originalPrice: 318366,
    link: 'https://www.shein.com/a-p-15768604.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/05/04/168319575243b4417ff6d658aa3f1e145a70ca6066_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/05/04/16831957652a6aa21b60ddb3cb4efa30b03eadfde7.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 1001
  },
  {
    id: '63221670',
    name: 'Manfinity Homme Men\'s Summer Casual Solid Color Textured Short Sleeve Shirt Summer Shirts For Men Shirts For Guys Men Summer Shirts Shirts For Men Men Shirts Casual Shirts For Men',
    category: 'Men',
    subcategory: 'Shirts',
    price: 251850,
    originalPrice: 302220,
    link: 'https://www.shein.com/a-p-63221670.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/20/d2/17556958007bb1a1e514b7f81a272bd4b29ec6fe6d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/20/31/1755695813be7cecf15efe5784a5302e02aea511fd.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '113800867',
    name: 'Men\'s Loose Fit Thin Long Sleeve Ribbed Knit Polo Shirt, Minimalist & Fashionable, Suitable For Daily Commute, Spring/Autumn',
    category: 'Men',
    subcategory: 'Shirts',
    price: 352935,
    originalPrice: 423522,
    link: 'https://www.shein.com/a-p-113800867.html',
    images: [
      'https://img.ltwebstatic.com/v4/p/spmp/2025/11/14/86/1763109379051dd5d7b26195ecc348dc3d3f0f1c58_thumbnail_405x552.png',
      'https://img.ltwebstatic.com/v4/p/abc/2025/11/14/15/17631094038b6d449fe7b7bf41043989d77adb5f6a.png'
    ],
    inStock: true,
    rating: 4.94,
    reviews: 17
  },
  {
    id: '225242190',
    name: 'Manfinity Homme Men\'s Casual Solid Color Textured Long Sleeve Shirt, Autumn',
    category: 'Men',
    subcategory: 'Shirts',
    price: 339480,
    originalPrice: 407376,
    link: 'https://www.shein.com/a-p-225242190.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/30/cc/176181675909fcc17ba76bcd42e862c45b5c59028d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/c6/176095451802a1684a39a8c242347e37e4336a1171.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '73475598',
    name: 'Manfinity Homme Men\'s Solid Color Single-Breasted Casual/Business Short Sleeve Shirt Shirts Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 211485,
    originalPrice: 253782,
    link: 'https://www.shein.com/a-p-73475598.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/06/c6/1746525498e69ee177b5cbc43fe335edc1c0d1fb29_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/06/21/1746525510f1e8da3692eaf2ca93779c57ae3f9e3d.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 1001
  },
  {
    id: '69683939',
    name: 'PAVTROS Manfinity Streetrush Manfinity Streetrush Men\'s Loose Fit Utility Pocket Design Casual Shirt, Blue Button-Up Short Sleeve Shirt, Multi Pocket Casual Shirt, Graphic Los Angeles Reviewer Mechanic Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 285545,
    originalPrice: 342654,
    link: 'https://www.shein.com/a-p-69683939.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/27/69/1748310946abc7b9a70deb1fe63e7102d5a14164e7_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/24/84/174549452324d7e6750ce95c84a78a655e891f11d8.jpg'
    ],
    inStock: true,
    rating: 4.76,
    reviews: 232
  },
  {
    id: '67257104',
    name: 'Musero Boxy Fit Oversized T-Shirt Spring Summer Streetstyle Easter Vacation',
    category: 'Men',
    subcategory: 'Shirts',
    price: 258635,
    originalPrice: 310362,
    link: 'https://www.shein.com/a-p-67257104.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/16/09/17447670172b4b92013fe01681d07a230cc2e45391_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/16/35/17447670316cb153f330be2b9cb320a49ace344110.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 987
  },
  {
    id: '80895821',
    name: 'Glimmora Men\'s Summer Casual Cat Print Standard Size T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 171005,
    originalPrice: 205206,
    link: 'https://www.shein.com/a-p-80895821.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/17/d5/1747474252512ec1519d59d30e27797cb872c8e3c8_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/17/89/1747474264e7062c0521e5a6b1d13ca4201d5684fa.jpg'
    ],
    inStock: true,
    rating: 4.86,
    reviews: 1001
  },
  {
    id: '14017040',
    name: 'Manfinity RSRT Men Tropical Print Shirt Without Tee',
    category: 'Men',
    subcategory: 'Shirts',
    price: 211485,
    originalPrice: 253782,
    link: 'https://www.shein.com/a-p-14017040.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/03/21/1679370935805701aba2e4c00b6222e2db766fed08_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/03/21/1679370944d090ae0c0dae93e321a9f7c426956809.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 1001
  },
  {
    id: '62426237',
    name: 'Vintage Style Men\'s Shirt, Cuban Collar, Linen Short Sleeve, Loose & Comfortable, Casual Beach Shirt, Summer Vacation, Father\'s Day Gift, White Formal Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 211485,
    originalPrice: 253782,
    link: 'https://www.shein.com/a-p-62426237.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/18/57/1760753559ea533dc442fa1083e714ecccaf768933_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/18/51/1760753569532d9f815c779b83004b4587e02ddf22.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 292
  },
  {
    id: '37533676',
    name: 'Manfinity Dauomo Men\'s Summer Casual Printed T-Shirt, Fashionable Loose-Fit Top, Gift For Car Enthusiasts, Car Printed T-Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 177790,
    originalPrice: 213348,
    link: 'https://www.shein.com/a-p-37533676.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/08/19/7e/172403155914d39be9eee61741a02a471d366592a2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2024/06/25/8f/1719313842d779e4111356a74626cf5dd7941937e8.jpg'
    ],
    inStock: true,
    rating: 4.89,
    reviews: 1001
  },
  {
    id: '59141734',
    name: 'Men\'s 3D Hair Print T-Shirt - Casual Short Sleeve Crew Neck, Lightweight Polyester Tee With Realistic Body Hair Design For All Seasons, Everyday Tshirt|3D Design Shirt|Unique Fashion',
    category: 'Men',
    subcategory: 'Shirts',
    price: 177790,
    originalPrice: 213348,
    link: 'https://www.shein.com/a-p-59141734.html',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2025/03/02/48/1740920834ebac2449b91de1f727c51065bcd5508d_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_spmp/2025/03/02/40/1740920918324acb3bba1ac81f63fffe1fb9467be0.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 556
  },
  {
    id: '223591389',
    name: 'AXEPEAK Men\'s Letter Embroidery Plaid Long Sleeve Single-Breasted Casual Pocket Loose Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 453905,
    originalPrice: 544686,
    link: 'https://www.shein.com/a-p-223591389.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/4e/17609452170f285ca135605176189abe4b4c44b73a_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/20/2d/1760945232f6f47f07e9d1a679f62f49d79f1bdce2.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 4
  },
  {
    id: '33132407',
    name: 'Men\'s Letter Print Crew Neck Short Sleeve Casual T-Shirt, Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 157550,
    originalPrice: 189060,
    link: 'https://www.shein.com/a-p-33132407.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2024/04/10/79/1712730799fd8ee64b3131935051ff6c4efeeb5739_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/07/01/6f/1751353067624cded7422dd15271ad51d0e3b0e161.jpg'
    ],
    inStock: true,
    rating: 4.92,
    reviews: 1001
  },
  {
    id: '200662874',
    name: 'Looney Tunes X Manfinity Manfinity Joysei Men\'s Casual Everyday Commute Funny Cartoon & Letter Print Loose T-Shirt, Summer Baby Blue T Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 184460,
    originalPrice: 221352,
    link: 'https://www.shein.com/a-p-200662874.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/29/9a/175914444161f4ebeeae0ba00bfee96b0f4e7884c0_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/29/6e/1759144447de008375443a524303f1bfaf3eabd81d.jpg'
    ],
    inStock: true,
    rating: 4.84,
    reviews: 192
  },
  {
    id: '67369754',
    name: 'Manfinity Mode Men Plus Size Solid Color Single-Breasted Business Casual Long Sleeve Shirt, Fall',
    category: 'Men',
    subcategory: 'Shirts',
    price: 292330,
    originalPrice: 350796,
    link: 'https://www.shein.com/a-p-67369754.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/15/78/1744696359cfcc2d2794e1305d1e91f51d211bad10_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/04/15/a8/1744696371660f12896930a692e892f5b2f46aff89.jpg'
    ],
    inStock: true,
    rating: 4.81,
    reviews: 417
  },
  {
    id: '106342252',
    name: 'Men\'s Vintage Old Coin Style Digital Print Short Sleeve Shirt, Fashion Versatile, Suitable For Casual Daily Wear And Travel',
    category: 'Men',
    subcategory: 'Shirts',
    price: 218155,
    originalPrice: 261786,
    link: 'https://www.shein.com/a-p-106342252.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/12/22/96/176639740315bae64deddae4fa9deaad752c5bb901_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/spmp/2025/12/22/f7/17663974311910982d872947aef0f32c2de8b35ba5_square.png'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 435
  },
  {
    id: '17608782',
    name: 'Manfinity Homme Men Slogan Graphic Tee',
    category: 'Men',
    subcategory: 'Shirts',
    price: 191245,
    originalPrice: 229494,
    link: 'https://www.shein.com/a-p-17608782.html',
    images: [
      'https://img.ltwebstatic.com/images3_pi/2023/06/12/168653373939d91b36eebe0c67c0cc08c828352704_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/images3_pi/2023/06/12/1686533750e5fd9fe77a4131e347efa10f4601627a.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '243299728',
    name: 'Manfinity Homme Men\'s Contrast Color Short Sleeve Casual Commuter Polo Shirt Mens T Collar T Shirt Green Tops For Men',
    category: 'Men',
    subcategory: 'Shirts',
    price: 258635,
    originalPrice: 310362,
    link: 'https://www.shein.com/a-p-243299728.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/10/29/15/1761703077f268cb1c3228e75c9f2a0ec6ab52de90_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/p/pi/2025/10/29/63/17617030841d0138c43a7f9127d0f325546ff7fa66.png'
    ],
    inStock: true,
    rating: 4.87,
    reviews: 710
  },
  {
    id: '222165006',
    name: 'Calvornis Men\'s Solid Color Casual Front Button Long Sleeve Shirt Men Elegant Shirt Grey Shirt For Men Business Casual Men Shirt Light Grey Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 305785,
    originalPrice: 366942,
    link: 'https://www.shein.com/a-p-222165006.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/29/ea/1759160576507ee580d2024d7f998eecb1f76a48cb_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/29/2c/17591605858533731d70e8e287f89b547aa9fb066a.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 971
  },
  {
    id: '132030319',
    name: 'Manfinity Homme Men\'s Solid Color Round Neck Drop Shoulder Short Sleeve Casual Loose T-Shirt, Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 177790,
    originalPrice: 213348,
    link: 'https://www.shein.com/a-p-132030319.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/21/2a/1753087033df3b4d437f2d03f078f512a2364fbde2_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/07/21/e5/17530870391439f390887e208fb2aed9da2433cd78.jpg'
    ],
    inStock: true,
    rating: 4.82,
    reviews: 1001
  },
  {
    id: '45426929',
    name: 'ROMWE MEN Street Life Men\'s Jersey Racing Print Pattern Lightweight T-Shirt, Suitable For Casual Spring And Summer, Fall, Long Sleeve Top',
    category: 'Men',
    subcategory: 'Shirts',
    price: 251850,
    originalPrice: 302220,
    link: 'https://www.shein.com/a-p-45426929.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/17/ad/1758090091fd3d2eaa5ac282b8824014d2cdce7696_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/09/17/8f/17580901025256aa4c9b69d8c9921f9014ddf895b5.jpg'
    ],
    inStock: true,
    rating: 4.78,
    reviews: 536
  },
  {
    id: '78945167',
    name: 'Manfinity Homme Men\'s Letter Striped Short Sleeve Casual/Commuting Polo Shirt Polo Shirt For Men Polos For Men Polo Tshirts For Men',
    category: 'Men',
    subcategory: 'Shirts',
    price: 251850,
    originalPrice: 302220,
    link: 'https://www.shein.com/a-p-78945167.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/15/6b/174727865916ebf7edd4c435609ca52c14d2d20003_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/05/15/03/1747278671caeb9a0a3a187f31e239ff1a86e7ac43.jpg'
    ],
    inStock: true,
    rating: 4.74,
    reviews: 35
  },
  {
    id: '162886919',
    name: 'Manfinity Homme Men\'s Casual Vacation Style All-Over Print Short Sleeve Shirt, Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 177790,
    originalPrice: 213348,
    link: 'https://www.shein.com/a-p-162886919.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/25/26/1756115119e4791537b72462312b7280a3010f553c_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/08/25/5d/17561151272651128a7122be8d749181089d4ca61b.jpg'
    ],
    inStock: true,
    rating: 5,
    reviews: 24
  },
  {
    id: '65498202',
    name: 'Men\'s Fashionable Printed Loose Short Sleeve T-Shirt | Exquisite Design | Must-Have For Summer | Easy To Match, Showcasing Your Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 157550,
    originalPrice: 189060,
    link: 'https://www.shein.com/a-p-65498202.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/04/02/cb/17436014730f4f89916552764550d009aebf5b2de1_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/07/01/ce/175134940669c47d8cd1a60aca0bf9c1e6114d0f99.jpg'
    ],
    inStock: true,
    rating: 4.91,
    reviews: 1001
  },
  {
    id: '46053125',
    name: 'Plus Size Men\'s Casual Basic Ribbed Lightweight Breathable Fabric Button-Down Short Sleeve Polo Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 211485,
    originalPrice: 253782,
    link: 'https://www.shein.com/a-p-46053125.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/10/18/b2/176078078074e37f2c073e017d22c3f0b171739dc9_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/10/18/33/176078084717da507df04b848b887d578a26a4f0e9.jpg'
    ],
    inStock: true,
    rating: 4.85,
    reviews: 1001
  },
  {
    id: '165873082',
    name: 'Men\'s Fashionable Loose Fit Short Sleeve T-Shirt | Exquisite Design | Summer Essential | Easy To Match | Showcase Your Style',
    category: 'Men',
    subcategory: 'Shirts',
    price: 195385,
    originalPrice: 234462,
    link: 'https://www.shein.com/a-p-165873082.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/spmp/2025/11/18/cc/1763398242273d323b322f6b0afd3da93005cbb210_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/abc/2025/11/18/5f/1763398302fa7a45de49760e04865fa61157c3d776.jpg'
    ],
    inStock: true,
    rating: 4.88,
    reviews: 1001
  },
  {
    id: '266171817',
    name: 'Manfinity Homme Men\'s Letter Striped Short Sleeve Casual Commuter Polo Shirt Men Stripe T Shirt Striped Polo Men Fashion Designer Summer Polo T Shirts Fashion Designer Tshirts For Men Tshirts For Men Polo Men Summer Outfits Men T Shirts',
    category: 'Men',
    subcategory: 'Shirts',
    price: 245180,
    originalPrice: 294216,
    link: 'https://www.shein.com/a-p-266171817.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/05/a0/176230799047d7c5afde5614563035e00c6feb1716_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/11/05/73/1762308000a8c3d74f5b1282ca5d9a742ad626fe91.jpg'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 684
  },
  {
    id: '91971894',
    name: 'Manfinity Homme Men\'s Casual Letter Print Short Sleeve T-Shirt, Summer',
    category: 'Men',
    subcategory: 'Shirts',
    price: 144095,
    originalPrice: 172914,
    link: 'https://www.shein.com/a-p-91971894.html',
    images: [
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/04/3c/1749016675757abf69664ef80f5ed310772762e784_thumbnail_405x552.jpg',
      'https://img.ltwebstatic.com/v4/j/pi/2025/06/04/a8/174901668450ce3151ed688a1ea6a73a907e6fb6f2.jpg'
    ],
    inStock: true,
    rating: 4.93,
    reviews: 1001
  }
];

export const banners = [
  {
    id: 1,
    title: 'Summer Sale',
    subtitle: 'Up to 50% OFF',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200',
    link: '/category/sale',
  },
  {
    id: 2,
    title: 'New Arrivals',
    subtitle: 'Latest Fashion Trends',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200',
    link: '/category/new',
  },
  {
    id: 3,
    title: 'Flash Sale',
    subtitle: 'Limited Time Offer',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200',
    link: '/category/sale',
  },
];

