import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

// Import destination images
import tokyoImage from '../assets/tokyo_1.jpeg';
import osakaImage from '../assets/osaka_1.jpg';
import hokkaidoImage from '../assets/hokkaido_1.jpg';
import miyagiImage from '../assets/miyagi_1.jpg';
import iwateImage from '../assets/iwate_1.jpg';

const Destinations = () => {
  const destinations = [
    {
      id: 'tokyo',
      name: 'Tokyo 🗼',
      image: tokyoImage,
      description: 'The bustling capital where ultra-modern skyscrapers meet traditional temples',
      highlights: ['Shibuya Crossing', 'Senso-ji Temple', 'Tsukiji Outer Market', 'Harajuku Fashion'],
      bestTime: 'Spring (Cherry Blossoms) & Autumn',
      duration: '4-7 days',
      difficulty: 'Easy',
      tags: ['Urban', 'Culture', 'Food', 'Shopping'],
      longDescription: 'Tokyo is a city of contrasts where you can experience cutting-edge technology alongside centuries-old traditions. From the neon-lit streets of Shibuya to the peaceful gardens of the Imperial Palace, every corner tells a story.'
    },
    {
      id: 'osaka',
      name: 'Osaka 🏯',
      image: osakaImage,
      description: 'Japan\'s kitchen - the ultimate destination for food lovers',
      highlights: ['Dotonbori District', 'Osaka Castle', 'Takoyaki & Okonomiyaki', 'Kuromon Market'],
      bestTime: 'Year-round',
      duration: '2-4 days',
      difficulty: 'Easy',
      tags: ['Food', 'Culture', 'History', 'Nightlife'],
      longDescription: 'Known as "Japan\'s Kitchen," Osaka is where culinary dreams come true. The city\'s food culture is legendary, from street food stalls to Michelin-starred restaurants. Don\'t miss the vibrant Dotonbori district!'
    },
    {
      id: 'hokkaido',
      name: 'Hokkaido ☃️',
      image: hokkaidoImage,
      description: 'Japan\'s northern wilderness with pristine nature and incredible seafood',
      highlights: ['Sapporo Snow Festival', 'Lavender Fields', 'Fresh Seafood', 'Hot Springs'],
      bestTime: 'Winter (Snow) & Summer (Lavender)',
      duration: '5-10 days',
      difficulty: 'Moderate',
      tags: ['Nature', 'Seafood', 'Winter Sports', 'Hot Springs'],
      longDescription: 'Hokkaido offers a completely different side of Japan with its vast wilderness, world-class skiing, and some of the freshest seafood you\'ll ever taste. The island is perfect for nature lovers and adventure seekers.'
    },
    {
      id: 'miyagi',
      name: 'Miyagi 🎏',
      image: miyagiImage,
      description: 'Hidden gem with stunning coastlines and rich cultural heritage',
      highlights: ['Matsushima Bay', 'Sendai Castle', 'Beef Tongue', 'Zuihoden Mausoleum'],
      bestTime: 'Spring & Autumn',
      duration: '2-3 days',
      difficulty: 'Easy',
      tags: ['Nature', 'History', 'Scenic Views', 'Local Food'],
      longDescription: 'Miyagi Prefecture is home to one of Japan\'s three most scenic views - Matsushima Bay. The region offers a perfect blend of natural beauty, historical sites, and unique local cuisine including the famous Sendai beef tongue.'
    },
    {
      id: 'iwate',
      name: 'Iwate 🐄',
      image: iwateImage,
      description: 'Untouched natural beauty and traditional Japanese countryside',
      highlights: ['Geibikei Gorge', 'Hiraizumi Temples', 'Wanko Soba', 'Traditional Crafts'],
      bestTime: 'Spring & Autumn',
      duration: '2-4 days',
      difficulty: 'Moderate',
      tags: ['Nature', 'UNESCO Sites', 'Traditional Culture', 'Adventure'],
      longDescription: 'Iwate offers an authentic glimpse into traditional Japan with its UNESCO World Heritage sites, stunning gorges, and preserved cultural practices. It\'s perfect for travelers seeking off-the-beaten-path experiences.'
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6 japan-red">Destinations</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the diverse regions of Japan, each with its own unique character, culture, and hidden gems waiting to be explored
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden card-hover">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative h-64 md:h-auto">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={getDifficultyColor(destination.difficulty)}>
                          {destination.difficulty}
                        </Badge>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-8">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl font-bold japan-red mb-2">
                          {destination.name}
                        </CardTitle>
                        <p className="text-gray-600">{destination.description}</p>
                      </CardHeader>

                      <CardContent className="p-0">
                        {/* Trip Details */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-2" />
                            {destination.duration}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Star className="w-4 h-4 mr-2" />
                            {destination.bestTime}
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {destination.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Highlights */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3 text-gray-800">Must-See Highlights:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {destination.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-600">
                                <MapPin className="w-3 h-3 mr-2 text-red-600" />
                                {highlight}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {destination.longDescription}
                        </p>

                        {/* Action Button */}
                        <Button className="bg-red-600 hover:bg-red-700 w-full md:w-auto">
                          Explore {destination.name.split(' ')[0]} <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 japan-red">Need Help Planning Your Trip?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get personalized recommendations and insider tips from Tenchino to make your Japan adventure unforgettable
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Contact Tenchino <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;

