import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Camera, Plane, Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const About = () => {
  const stats = [
    { number: '4,250+', label: 'Instagram Followers' },
    { number: '50+', label: 'Cities Explored' },
    { number: '1000+', label: 'Hidden Gems Discovered' },
    { number: '5+', label: 'Years of Guiding' }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: 'Authentic Experiences',
      description: 'I believe in showing you the real Japan - not just tourist attractions, but places where locals actually go and experiences that create lasting memories.'
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: 'Hidden Gems',
      description: 'My passion is discovering those secret spots that even many Japanese people don\'t know about. These are the places that make your trip truly special.'
    },
    {
      icon: <Camera className="w-8 h-8 text-green-600" />,
      title: 'Cultural Connection',
      description: 'Travel is about connecting with people and culture. I help you understand not just what you\'re seeing, but why it matters to Japanese people.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'California, USA',
      text: 'Tenchino\'s recommendations completely transformed our Japan trip. We discovered amazing local restaurants and hidden temples that weren\'t in any guidebook!',
      rating: 5
    },
    {
      name: 'Marco R.',
      location: 'Rome, Italy',
      text: 'Following Koyama Travel on Instagram before our trip was the best decision. The food spots in Osaka were incredible - exactly what we were looking for.',
      rating: 5
    },
    {
      name: 'Emma L.',
      location: 'London, UK',
      text: 'As a solo female traveler, Tenchino\'s safety tips and cultural insights made me feel confident exploring Japan. The local connections were invaluable.',
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold mb-6 japan-red">Meet Tenchino</h1>
              <h2 className="text-2xl text-gray-600 mb-6">Your Japanese Mate & Local Guide</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Konnichiwa! I'm Tenchino, your friendly Japanese guide who's passionate about sharing the real Japan with travelers from around the world. 
                Born and raised in Japan, I've spent years exploring every corner of my beautiful country, from bustling Tokyo streets to hidden mountain villages.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                What started as sharing my travel discoveries with friends has grown into a mission: helping visitors experience Japan like a local, 
                not just a tourist. Through Koyama Travel, I share insider knowledge, hidden gems, and authentic experiences that you won't find in guidebooks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <a href="https://www.instagram.com/koyamas_travel10/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Follow My Journey
                  </a>
                </Button>
                <Button variant="outline" size="lg">
                  <a href="#contact" className="flex items-center">
                    Get Travel Advice
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/api/placeholder/500/600"
                  alt="Tenchino exploring Japan"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-semibold">Exploring hidden Japan</p>
                  <p className="text-sm opacity-90">One adventure at a time 🇯🇵</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 japan-red">My Journey in Numbers</h2>
            <p className="text-xl text-gray-600">Building a community of Japan lovers, one discovery at a time</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold japan-red mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 japan-red">What I Believe In</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My approach to travel guiding is built on these core values that shape every recommendation I make
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-8 card-hover h-full">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-6">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 japan-red">My Story</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Growing up in Japan, I took for granted the incredible diversity of experiences my country offers. 
                  It wasn't until I started traveling abroad and meeting international visitors that I realized how special and unique Japan truly is.
                </p>
                <p>
                  I noticed that many tourists were missing out on the authentic Japan - the tiny family-run restaurants, 
                  the peaceful temples away from crowds, the local festivals that bring communities together. 
                  They were following the same routes, eating at the same places, and missing the soul of Japan.
                </p>
                <p>
                  That's when I decided to start sharing my discoveries. What began as casual recommendations to friends 
                  evolved into Koyama Travel - a platform where I could help travelers experience Japan through local eyes. 
                  Every recommendation comes from personal experience, every tip is tested, and every hidden gem is truly special.
                </p>
                <p>
                  Today, I'm proud to have helped thousands of travelers create unforgettable memories in Japan. 
                  But more than that, I've built a community of people who appreciate the deeper beauty of Japanese culture and hospitality.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="p-6 bg-blue-50">
                <CardContent className="pt-0">
                  <Quote className="w-8 h-8 text-blue-600 mb-4" />
                  <p className="text-lg italic text-blue-800 mb-4">
                    "Travel isn't just about seeing new places - it's about understanding new perspectives and connecting with people who see the world differently."
                  </p>
                  <p className="text-blue-600 font-semibold">- Tenchino</p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-100 p-4 rounded-lg text-center">
                  <Plane className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <p className="font-semibold text-red-800">Favorite Region</p>
                  <p className="text-sm text-red-600">Tohoku (Hidden Beauty)</p>
                </div>
                <div className="bg-orange-100 p-4 rounded-lg text-center">
                  <Camera className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="font-semibold text-orange-800">Specialty</p>
                  <p className="text-sm text-orange-600">Food & Culture</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 japan-red">What Travelers Say</h2>
            <p className="text-xl text-gray-600">Real experiences from real travelers</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 card-hover h-full">
                  <CardContent className="pt-0">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Explore Japan Together?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join me on this incredible journey of discovery. Let's uncover the hidden beauty of Japan, one adventure at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                <a href="https://www.instagram.com/koyamas_travel10/" target="_blank" rel="noopener noreferrer">
                  Follow on Instagram
                </a>
              </Button>
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Start Planning Your Trip
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

