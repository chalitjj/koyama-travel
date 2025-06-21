import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Coffee, ChefHat, Heart, Star, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const FoodCulture = () => {
  const foodCategories = [
    {
      title: 'Street Food Essentials',
      icon: <Utensils className="w-6 h-6" />,
      items: [
        {
          name: 'Takoyaki',
          description: 'Osaka\'s famous octopus balls - crispy outside, gooey inside',
          location: 'Osaka',
          price: '¥500-800',
          tips: 'Best enjoyed hot from street vendors in Dotonbori'
        },
        {
          name: 'Taiyaki',
          description: 'Fish-shaped pastry filled with sweet red bean paste',
          location: 'Tokyo',
          price: '¥200-300',
          tips: 'Try the seasonal flavors like custard or chocolate'
        },
        {
          name: 'Yakitori',
          description: 'Grilled chicken skewers with tare sauce',
          location: 'Nationwide',
          price: '¥100-200 per stick',
          tips: 'Visit yakitori alleys (yokocho) for authentic experience'
        }
      ]
    },
    {
      title: 'Regional Specialties',
      icon: <ChefHat className="w-6 h-6" />,
      items: [
        {
          name: 'Hokkaido Crab',
          description: 'Fresh snow crab and king crab from pristine waters',
          location: 'Hokkaido',
          price: '¥3000-8000',
          tips: 'Visit Sapporo\'s Susukino district for the best crab restaurants'
        },
        {
          name: 'Sendai Beef Tongue',
          description: 'Miyagi\'s signature grilled beef tongue dish',
          location: 'Miyagi',
          price: '¥1500-3000',
          tips: 'Try it with barley rice and tail soup for the complete set'
        },
        {
          name: 'Wanko Soba',
          description: 'All-you-can-eat buckwheat noodles challenge',
          location: 'Iwate',
          price: '¥2000-3000',
          tips: 'Cover your bowl when you\'re full - servers keep refilling!'
        }
      ]
    },
    {
      title: 'Traditional Sweets',
      icon: <Coffee className="w-6 h-6" />,
      items: [
        {
          name: 'Mochi',
          description: 'Soft rice cakes with various fillings',
          location: 'Nationwide',
          price: '¥150-400',
          tips: 'Try seasonal varieties like sakura mochi in spring'
        },
        {
          name: 'Dorayaki',
          description: 'Pancake sandwich filled with sweet red bean paste',
          location: 'Tokyo',
          price: '¥200-350',
          tips: 'Doraemon\'s favorite! Best from traditional confectioneries'
        },
        {
          name: 'Melonpan',
          description: 'Sweet bread with crispy cookie crust',
          location: 'Nationwide',
          price: '¥150-250',
          tips: 'Enjoy warm from convenience stores or bakeries'
        }
      ]
    }
  ];

  const culturalTips = [
    {
      title: 'Dining Etiquette',
      tips: [
        'Say "Itadakimasu" before eating and "Gochisousama" after',
        'Don\'t stick chopsticks upright in rice',
        'Slurping noodles is perfectly acceptable and shows appreciation',
        'Don\'t tip - it\'s not customary in Japan'
      ]
    },
    {
      title: 'Where to Eat',
      tips: [
        'Depachika (department store basements) for high-quality takeout',
        'Convenience stores for surprisingly good quick meals',
        'Standing bars (tachinomi) for casual drinking and snacks',
        'Family restaurants for affordable, reliable meals'
      ]
    },
    {
      title: 'Ordering Tips',
      tips: [
        'Many restaurants have plastic food displays - point if language is a barrier',
        'Vending machine restaurants: buy ticket first, then hand to staff',
        'Look for restaurants with queues - locals know best',
        'Download Google Translate app with camera feature for menus'
      ]
    }
  ];

  const seasonalFood = [
    {
      season: 'Spring (March-May)',
      foods: ['Sakura Mochi', 'Bamboo Shoots', 'Spring Vegetables', 'Cherry Blossom Flavored Items'],
      color: 'from-pink-100 to-green-100'
    },
    {
      season: 'Summer (June-August)',
      foods: ['Kakigori (Shaved Ice)', 'Eel (Unagi)', 'Cold Noodles', 'Watermelon'],
      color: 'from-blue-100 to-cyan-100'
    },
    {
      season: 'Autumn (September-November)',
      foods: ['Persimmons', 'Sweet Potatoes', 'Chestnuts', 'Mushrooms'],
      color: 'from-orange-100 to-red-100'
    },
    {
      season: 'Winter (December-February)',
      foods: ['Hot Pot (Nabe)', 'Oden', 'Mikan Oranges', 'Warm Taiyaki'],
      color: 'from-blue-100 to-purple-100'
    }
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6 japan-red">Food & Culture</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the incredible world of Japanese cuisine - from street food to fine dining, traditional sweets to regional specialties
            </p>
          </motion.div>
        </div>
      </section>

      {/* Food Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 japan-red">Must-Try Foods</h2>
            <p className="text-xl text-gray-600">
              Essential dishes that define Japanese cuisine
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {foodCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl japan-red">
                      {category.icon}
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {category.items.map((item, itemIndex) => (
                        <div key={item.name} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-lg">{item.name}</h4>
                            <Badge variant="outline" className="text-xs">
                              {item.price}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-2">{item.description}</p>
                          <div className="flex items-center gap-2 mb-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm text-gray-500">{item.location}</span>
                          </div>
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <p className="text-sm text-blue-800">
                              <strong>Tenchino's Tip:</strong> {item.tips}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Foods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 japan-red">Seasonal Delights</h2>
            <p className="text-xl text-gray-600">
              Japan's cuisine changes with the seasons - here's what to try when
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalFood.map((season, index) => (
              <motion.div
                key={season.season}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full bg-gradient-to-br ${season.color}`}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-center">{season.season}</h3>
                    <ul className="space-y-2">
                      {season.foods.map((food, foodIndex) => (
                        <li key={foodIndex} className="flex items-center text-sm">
                          <Heart className="w-3 h-3 mr-2 text-red-500" />
                          {food}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 japan-red">Cultural Insights</h2>
            <p className="text-xl text-gray-600">
              Essential knowledge for dining like a local in Japan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {culturalTips.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl japan-red">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start">
                          <Clock className="w-4 h-4 mr-3 mt-1 text-blue-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Hungry for More?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Follow Tenchino on Instagram for daily food discoveries and hidden restaurant gems across Japan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/koyamas_travel10/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Follow on Instagram
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-colors"
              >
                Watch Food Videos
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FoodCulture;

