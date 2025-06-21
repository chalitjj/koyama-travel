import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Camera, Utensils, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Link } from 'react-router-dom';

// Import images
import heroImage from '../assets/japan_travel_aesthetic_1.jpg';
import tokyoImage from '../assets/tokyo_1.jpeg';
import osakaImage from '../assets/osaka_1.jpg';
import hokkaidoImage from '../assets/hokkaido_1.jpg';

const Home = () => {
  const destinations = [
    {
      name: 'Tokyo',
      image: tokyoImage,
      description: 'Modern metropolis meets traditional culture',
      highlights: ['Shibuya Crossing', 'Traditional Temples', 'Street Food']
    },
    {
      name: 'Osaka',
      image: osakaImage,
      description: 'Japan\'s kitchen with incredible food scene',
      highlights: ['Takoyaki', 'Osaka Castle', 'Dotonbori']
    },
    {
      name: 'Hokkaido',
      image: hokkaidoImage,
      description: 'Natural beauty and fresh seafood',
      highlights: ['Sapporo Snow Festival', 'Hot Springs', 'Lavender Fields']
    }
  ];

  const features = [
    {
      icon: <MapPin className="w-8 h-8 text-red-600" />,
      title: 'Hidden Gems',
      description: 'Discover secret spots only locals know about'
    },
    {
      icon: <Utensils className="w-8 h-8 text-orange-600" />,
      title: 'Authentic Food',
      description: 'Experience real Japanese cuisine beyond tourist traps'
    },
    {
      icon: <Camera className="w-8 h-8 text-blue-600" />,
      title: 'Cultural Insights',
      description: 'Learn about traditions and customs from a local perspective'
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-600" />,
      title: 'Personal Touch',
      description: 'Get personalized recommendations for your perfect trip'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center parallax-bg"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
              Discover Hidden
              <span className="block japan-gold">Japan</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-shadow">
              🇯🇵 Your Japanese mate Tenchino guides you to local gems, authentic food & unforgettable experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <Link to="/destinations">
                  Explore Destinations <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                <Link to="/about">
                  Meet Tenchino
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 japan-red">Why Choose Koyama Travel?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience Japan like a local with insider knowledge and authentic recommendations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 card-hover">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 japan-red">Popular Destinations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the most beloved regions of Japan with local insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden card-hover">
                  <div className="relative h-64">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">{destination.name}</h3>
                      <p className="text-sm opacity-90">{destination.description}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      {destination.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link to="/destinations">
                View All Destinations <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Explore Japan?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of travelers who have discovered the real Japan with Tenchino's guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                <Link to="/contact">
                  Start Planning Your Trip
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                <a href="https://www.instagram.com/koyamas_travel10/" target="_blank" rel="noopener noreferrer">
                  Follow on Instagram
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

