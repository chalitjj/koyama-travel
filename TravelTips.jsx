import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Train, Wallet, Calendar, MapPin, Shield, Phone, Luggage, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const TravelTips = () => {
  const budgetGuide = [
    {
      category: 'Budget Traveler',
      dailyBudget: '¥5,000-8,000',
      accommodation: 'Hostels, Capsule Hotels',
      food: 'Convenience stores, Street food',
      transport: 'Local trains, Buses',
      tips: ['Use 7-day JR Pass for long distances', 'Eat at convenience stores', 'Stay in hostels or capsule hotels']
    },
    {
      category: 'Mid-Range Traveler',
      dailyBudget: '¥12,000-20,000',
      accommodation: 'Business Hotels, Ryokans',
      food: 'Local restaurants, Some fine dining',
      transport: 'JR Pass, Occasional taxis',
      tips: ['Mix of business hotels and traditional ryokans', 'Try local restaurants', 'Use JR Pass for convenience']
    },
    {
      category: 'Luxury Traveler',
      dailyBudget: '¥30,000+',
      accommodation: 'High-end Hotels, Premium Ryokans',
      food: 'Fine dining, Michelin restaurants',
      transport: 'First-class trains, Private cars',
      tips: ['Stay at luxury ryokans with kaiseki meals', 'Book Michelin-starred restaurants', 'Consider private guides']
    }
  ];

  const transportationTips = [
    {
      title: 'JR Pass',
      description: 'Unlimited travel on JR trains including most shinkansen',
      price: '7-day: ¥29,650 | 14-day: ¥47,250 | 21-day: ¥60,450',
      tips: 'Must be purchased before arriving in Japan. Great for multiple cities.'
    },
    {
      title: 'IC Cards (Suica/Pasmo)',
      description: 'Rechargeable cards for trains, subways, and buses',
      price: '¥500 deposit + credit',
      tips: 'Works nationwide. Can also be used for convenience store purchases.'
    },
    {
      title: 'Local Day Passes',
      description: 'City-specific unlimited day passes',
      price: '¥600-1,500 per day',
      tips: 'Great for exploring single cities. Available in Tokyo, Osaka, Kyoto, etc.'
    }
  ];

  const essentialPhrases = [
    { japanese: 'Arigatou gozaimasu', romaji: 'ah-ree-gah-toh goh-zah-ee-mahs', english: 'Thank you very much' },
    { japanese: 'Sumimasen', romaji: 'soo-mee-mah-sen', english: 'Excuse me / Sorry' },
    { japanese: 'Eigo ga dekimasu ka?', romaji: 'eh-goh gah deh-kee-mahs kah', english: 'Do you speak English?' },
    { japanese: 'Kore wa ikura desu ka?', romaji: 'koh-reh wah ee-koo-rah deh-soo kah', english: 'How much is this?' },
    { japanese: 'Toire wa doko desu ka?', romaji: 'toh-ee-reh wah doh-koh deh-soo kah', english: 'Where is the bathroom?' },
    { japanese: 'Tasukete kudasai', romaji: 'tah-soo-keh-teh koo-dah-sah-ee', english: 'Please help me' }
  ];

  const packingList = {
    essentials: [
      'Passport & visa documents',
      'JR Pass (if purchased)',
      'Cash (Japan is still cash-heavy)',
      'Portable WiFi or SIM card',
      'Universal power adapter',
      'Comfortable walking shoes'
    ],
    clothing: [
      'Layers for changing weather',
      'Modest clothing for temples',
      'Rain jacket or umbrella',
      'Slippers for indoor use',
      'Formal outfit for fine dining',
      'Swimwear for hot springs'
    ],
    technology: [
      'Smartphone with offline maps',
      'Portable charger/power bank',
      'Camera with extra batteries',
      'Translation app downloaded',
      'VPN app (some services blocked)',
      'Backup storage for photos'
    ]
  };

  const culturalEtiquette = [
    {
      title: 'Bowing',
      description: 'Slight bow when greeting, thanking, or apologizing',
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: 'Shoes Off',
      description: 'Remove shoes when entering homes, temples, and some restaurants',
      icon: <MapPin className="w-5 h-5" />
    },
    {
      title: 'Quiet Public Transport',
      description: 'Keep conversations quiet and phones on silent',
      icon: <Train className="w-5 h-5" />
    },
    {
      title: 'No Tipping',
      description: 'Tipping is not customary and can be considered rude',
      icon: <Wallet className="w-5 h-5" />
    },
    {
      title: 'Business Cards',
      description: 'Receive with both hands and treat with respect',
      icon: <Phone className="w-5 h-5" />
    },
    {
      title: 'Chopstick Etiquette',
      description: 'Never stick chopsticks upright in rice or pass food chopstick to chopstick',
      icon: <Luggage className="w-5 h-5" />
    }
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6 japan-red">Travel Tips & Resources</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know for a smooth and memorable trip to Japan - from budgeting to cultural etiquette
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="budget" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
              <TabsTrigger value="budget">Budget</TabsTrigger>
              <TabsTrigger value="transport">Transport</TabsTrigger>
              <TabsTrigger value="language">Language</TabsTrigger>
              <TabsTrigger value="packing">Packing</TabsTrigger>
              <TabsTrigger value="culture">Culture</TabsTrigger>
            </TabsList>

            {/* Budget Tab */}
            <TabsContent value="budget">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4 japan-red">Budget Planning</h2>
                  <p className="text-lg text-gray-600">Plan your Japan trip according to your budget</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {budgetGuide.map((budget, index) => (
                    <Card key={budget.category} className="card-hover">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          {budget.category}
                          <Badge variant="outline" className="text-lg font-bold">
                            {budget.dailyBudget}
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center">
                              <MapPin className="w-4 h-4 mr-2" />
                              Accommodation
                            </h4>
                            <p className="text-sm text-gray-600">{budget.accommodation}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center">
                              <Luggage className="w-4 h-4 mr-2" />
                              Food
                            </h4>
                            <p className="text-sm text-gray-600">{budget.food}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center">
                              <Train className="w-4 h-4 mr-2" />
                              Transport
                            </h4>
                            <p className="text-sm text-gray-600">{budget.transport}</p>
                          </div>
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <h4 className="font-semibold mb-2 text-blue-800">Tenchino's Tips:</h4>
                            <ul className="text-sm text-blue-700 space-y-1">
                              {budget.tips.map((tip, tipIndex) => (
                                <li key={tipIndex}>• {tip}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Transportation Tab */}
            <TabsContent value="transport">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4 japan-red">Transportation Guide</h2>
                  <p className="text-lg text-gray-600">Navigate Japan's excellent transport system</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {transportationTips.map((transport, index) => (
                    <Card key={transport.title} className="card-hover">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Train className="w-5 h-5 mr-2 text-blue-600" />
                          {transport.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-3">{transport.description}</p>
                        <div className="bg-green-50 p-3 rounded-lg mb-3">
                          <p className="text-sm font-semibold text-green-800">{transport.price}</p>
                        </div>
                        <p className="text-sm text-blue-700">{transport.tips}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-yellow-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-yellow-600" />
                      Transportation Apps to Download
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold">Hyperdia</h4>
                        <p className="text-sm text-gray-600">Train schedule and route planning</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Google Maps</h4>
                        <p className="text-sm text-gray-600">Works great for Japan public transport</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">JR East App</h4>
                        <p className="text-sm text-gray-600">Official JR app with real-time updates</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Navitime</h4>
                        <p className="text-sm text-gray-600">Comprehensive transport app in English</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Language Tab */}
            <TabsContent value="language">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4 japan-red">Essential Japanese Phrases</h2>
                  <p className="text-lg text-gray-600">Basic phrases to help you communicate</p>
                </div>

                <div className="grid gap-4 mb-8">
                  {essentialPhrases.map((phrase, index) => (
                    <Card key={index} className="card-hover">
                      <CardContent className="p-4">
                        <div className="grid md:grid-cols-3 gap-4 items-center">
                          <div>
                            <h4 className="font-bold text-lg japan-red">{phrase.japanese}</h4>
                            <p className="text-sm text-gray-500">{phrase.romaji}</p>
                          </div>
                          <div className="md:col-span-2">
                            <p className="text-gray-700">{phrase.english}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-blue-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-blue-600" />
                      Helpful Language Apps
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold">Google Translate</h4>
                        <p className="text-sm text-gray-600">Camera translation for menus and signs</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Duolingo</h4>
                        <p className="text-sm text-gray-600">Learn basic Japanese before your trip</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">VoiceTra</h4>
                        <p className="text-sm text-gray-600">Voice translation app by Japanese government</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Waygo</h4>
                        <p className="text-sm text-gray-600">Instant visual translator for Japanese text</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Packing Tab */}
            <TabsContent value="packing">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4 japan-red">Packing Checklist</h2>
                  <p className="text-lg text-gray-600">Don't forget these essentials for your Japan trip</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {Object.entries(packingList).map(([category, items]) => (
                    <Card key={category} className="card-hover">
                      <CardHeader>
                        <CardTitle className="flex items-center capitalize">
                          <Luggage className="w-5 h-5 mr-2 text-purple-600" />
                          {category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {items.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Culture Tab */}
            <TabsContent value="culture">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4 japan-red">Cultural Etiquette</h2>
                  <p className="text-lg text-gray-600">Respect local customs and traditions</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {culturalEtiquette.map((etiquette, index) => (
                    <Card key={etiquette.title} className="card-hover">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          {etiquette.icon}
                          <h3 className="font-semibold ml-2">{etiquette.title}</h3>
                        </div>
                        <p className="text-sm text-gray-600">{etiquette.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="mt-8 bg-red-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center japan-red">
                      <Heart className="w-5 h-5 mr-2" />
                      Remember: Respect and Patience
                    </h3>
                    <p className="text-gray-700">
                      Japanese culture values respect, patience, and harmony. When in doubt, observe what locals do and follow their lead. 
                      Most Japanese people are very understanding of foreigners and will appreciate any effort you make to respect their customs.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default TravelTips;

