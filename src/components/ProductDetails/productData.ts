import originalProduct1 from '../../assets/original_product1.png'
import hazelnutProduct1 from '../../assets/hazelnut_product1.png'
import chocolateProduct1 from '../../assets/chocolate_product1.png'
import originalDecafProduct1 from '../../assets/original_decaf_product1.png'
import mugCupProduct1 from '../../assets/mug_cup_product1.png'
import disposableCupsProduct1 from '../../assets/disposable_cups_product1.png'
export interface Product {
  id: string
  name: string
  info: string
  description: string
  descriptionEn: string
  attribute1: string
  attribute1En: string
  attribute1Info: string
  attribute1InfoEn: string
  attribute2: string
  attribute2En: string
  attribute2Info: string
  attribute2InfoEn: string
  imageUrl: string
  price: string
}

export const productData: Product[] = [
  {
    id: 'original',
    name: 'drip: original',
    info: '500g / Whole beans',
    description:
      'He kawhe tūturu, māmā, taurite hoki me tōna reka, tōna rongo kikokiko. Ko te kōwhiringa tino pai mō te hunga e pai ana ki te wheako kawhe tūturu.',
    descriptionEn:
      'A classic, smooth, and balanced coffee with a rich, full-bodied flavor. This is the perfect go-to option for those who enjoy a traditional coffee experience.',
    attribute1: 'Ngā Tohu Reka',
    attribute1En: 'Flavour Notes',
    attribute1Info: 'Kākao / Āmona Tunu',
    attribute1InfoEn: 'Cacao / Toasted Almond',
    attribute2: 'Takenga Mai',
    attribute2En: 'Origin',
    attribute2Info: 'Koromōpia',
    attribute2InfoEn: 'Colombia',
    imageUrl: originalProduct1,
    price: '$34.99',
  },
  {
    id: 'hazelnut',
    name: 'drip: hazelnut',
    info: '500g / Whole beans',
    description:
      'He kawhe nāna i te āhua mīharo me te reka iti, he pai mō te tīmea me te kirīmi, e pai ana ki te riri reka.',
    descriptionEn:
      'Nutty and slightly sweet, with a subtle richness from hazelnut that pairs beautifully with milk or cream, making it perfect for a flavorful twist.',
    attribute1: 'Ngā Tohu Reka',
    attribute1En: 'Flavour Notes',
    attribute1Info: 'Hēkona Kākahu / Hīhi Pātea',
    attribute1InfoEn: 'Roasted Hazelnut / Brown Sugar',
    attribute2: 'Takenga Mai',
    attribute2En: 'Origin',
    attribute2Info: 'Parāwai / Kōta',
    attribute2InfoEn: 'Brazil / Costa Rica',
    imageUrl: hazelnutProduct1,
    price: '$34.99',
  },
  {
    id: 'chocolate',
    name: 'drip: chocolate',
    info: '500g / Whole beans',
    description:
      'He tino reka i te āhua kākahu mīharo me te tōngā mō te pākia, hei hōmāri hoki mō ngā hunga pai ki te whāngai kākahu.',
    descriptionEn:
      "Rich dark chocolate notes with a creamy hint of vanilla, delivering an indulgent and smooth flavor that's ideal for chocolate lovers.",
    attribute1: 'Ngā Tohu Reka',
    attribute1En: 'Flavour Notes',
    attribute1Info: 'Kākahu Mīharo / Wēnita',
    attribute1InfoEn: 'Dark Chocolate / Vanilla',
    attribute2: 'Takenga Mai',
    attribute2En: 'Origin',
    attribute2Info: 'Guatemala / Ekuador',
    attribute2InfoEn: 'Guatemala / Ecuador',
    imageUrl: chocolateProduct1,
    price: '$34.99',
  },
  {
    id: 'original-decaf',
    name: 'drip: original decaf',
    info: '500g / Whole beans',
    description:
      'Te kite i te reka kikokiko me ngā tākawainga māmā o tā mātou pai mō te tangata e hiahia ana i te kawhe tūturu, i te rā, i te pō.',
    descriptionEn:
      'Experience the same rich, full-bodied flavor of our original blend without caffeine. Perfect for those who want a smooth, satisfying coffee, day or night.',
    attribute1: 'Ngā Tohu Reka',
    attribute1En: 'Flavour Notes',
    attribute1Info: 'Kākao / Āmona Tunu',
    attribute1InfoEn: 'Cacao / Toasted Almond',
    attribute2: 'Takenga Mai',
    attribute2En: 'Origin',
    attribute2Info: 'Koromōpia',
    attribute2InfoEn: 'Colombia',
    imageUrl: originalDecafProduct1,
    price: '$34.99',
  },
  {
    id: 'mug-cup',
    name: 'drip: mug',
    info: '350ml',
    description: 'He karaihe rākau tino pai mō tō kawhe pai.',
    descriptionEn: 'Durable and stylish ceramic mug for your favorite brew.',
    attribute1: 'Rauemi',
    attribute1En: 'Material',
    attribute1Info: 'Rākau',
    attribute1InfoEn: 'Ceramic',
    attribute2: 'Color',
    attribute2En: 'Color',
    attribute2Info: 'drip: white',
    attribute2InfoEn: 'drip: white',
    imageUrl: mugCupProduct1,
    price: '$24.99',
  },
  {
    id: 'disposable-cups',
    name: 'drip: disposable cups',
    info: 'Pack of 50',
    description: 'He karaihe tuwhera hei mō ngā kawhe i te haere.',
    descriptionEn: 'Convenient disposable cups for coffee on the go.',
    attribute1: 'Rauemi',
    attribute1En: 'Material',
    attribute1Info: 'Pepa',
    attribute1InfoEn: 'Paper',
    attribute2: 'Color',
    attribute2En: 'Color',
    attribute2Info: 'drip: white',
    attribute2InfoEn: 'drip: white',
    imageUrl: disposableCupsProduct1,
    price: '$29.99',
  },
]
