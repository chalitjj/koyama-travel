import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Instagram, Youtube, MapPin, Send, Clock, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    travelDates: '',
    destinations: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would typically send this to a backend service
  };

  const contactMethods = [
    {
      icon: <Instagram className="w-6 h-6" />,
      title: 'Instagram',
      description: 'Follow for daily Japan discoveries',
      link: 'https://www.instagram.com/koyamas_travel10/',
      linkText: '@koyamas_travel10',
      color: 'text-pink-600'
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      title: 'YouTube',
      description: 'Watch travel vlogs and food tours',
      link: '#',
      linkText: 'Koyama Travel',
      color: 'text-red-600'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      description: 'For detailed travel planning',
      link: 'mailto:hello@koyamatravel.com',
      linkText: 'hello@koyamatravel.com',
      color: 'text-blue-600'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Direct Message',
      description: 'Quick questions and tips',
      link: 'https://www.instagram.com/koyamas_travel10/',
      linkText: 'DM on Instagram',
      color: 'text-green-600'
    }
  ];

  const services = [
    {
      title: 'Custom Itinerary Planning',
      description: 'Personalized travel plans based on your interests, budget, and time',
      duration: '3-5 days',
      price: 'Contact for pricing'
    },
    {
      title: 'Local Restaurant Recommendations',
      description: 'Curated list of authentic restaurants and hidden food gems',
      duration: '1-2 days',
      price: 'Contact for pricing'
    },
    {
      title: 'Cultural Experience Guidance',
      description: 'Help with temple visits, festivals, and cultural etiquette',
      duration: '1-2 days',
      price: 'Contact for pricing'
    },
    {
      title: 'Emergency Travel Support',
      description: '24/7 support during your trip for urgent questions',
      duration: 'During trip',
      price: 'Contact for pricing'
    }
  ];

  const faqs = [
    {
      question: 'How far in advance should I contact you?',
      answer: 'I recommend reaching out at least 2-4 weeks before your trip for custom itinerary planning. For quick questions, I usually respond within 24 hours.'
    },
    {
      question: 'Do you offer in-person guiding services?',
      answer: 'Currently, I focus on digital guidance and recommendations. However, I can connect you with trusted local guides in specific cities if needed.'
    },
    {
      question: 'What areas of Japan do you specialize in?',
      answer: 'I have extensive knowledge of all major regions, with special expertise in Tohoku, Tokyo, Osaka, and hidden gems throughout Japan.'
    },
    {
      question: 'Can you help with language barriers?',
      answer: 'Absolutely! I provide essential phrases, recommend translation apps, and can help you understand cultural nuances that make communication easier.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6 japan-red">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to plan your perfect Japan adventure? I'm here to help you discover the hidden gems and authentic experiences that will make your trip unforgettable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 japan-red">How to Reach Me</h2>
            <p className="text-xl text-gray-600">Choose the best way to connect based on your needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 card-hover h-full">
                  <CardContent className="pt-6">
                    <div className={`flex justify-center mb-4 ${method.color}`}>
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{method.description}</p>
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${method.color} hover:underline font-medium text-sm`}
                    >
                      {method.linkText}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl japan-red">Send Me a Message</CardTitle>
                  <p className="text-gray-600">Tell me about your Japan travel plans and I'll get back to you soon!</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What can I help you with?"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="travelDates">Travel Dates</Label>
                        <Input
                          id="travelDates"
                          name="travelDates"
                          value={formData.travelDates}
                          onChange={handleInputChange}
                          placeholder="e.g., March 2024"
                        />
                      </div>
                      <div>
                        <Label htmlFor="destinations">Interested Destinations</Label>
                        <Input
                          id="destinations"
                          name="destinations"
                          value={formData.destinations}
                          onChange={handleInputChange}
                          placeholder="e.g., Tokyo, Osaka, Kyoto"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell me about your travel plans, interests, budget, or any specific questions you have..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 japan-red">Services I Offer</h2>
                <p className="text-gray-600 mb-8">
                  From detailed itinerary planning to quick travel tips, I'm here to make your Japan experience authentic and unforgettable.
                </p>
              </div>

              <div className="space-y-4">
                {services.map((service, index) => (
                  <Card key={service.title} className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-lg">{service.title}</h3>
                        <div className="text-right text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {service.duration}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">{service.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-blue-600">{service.price}</span>
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-blue-50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Phone className="w-5 h-5 mr-2 text-blue-600" />
                    <h3 className="font-semibold text-blue-800">Response Time</h3>
                  </div>
                  <p className="text-blue-700 text-sm">
                    I typically respond to messages within 24 hours. For urgent travel questions during your trip, 
                    I aim to respond within a few hours during Japan business hours (JST).
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 japan-red">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3 text-lg">{faq.question}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
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
            <h2 className="text-4xl font-bold mb-6">Let's Plan Your Japan Adventure!</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you're a first-time visitor or a Japan veteran looking for new experiences, 
              I'm excited to help you discover the authentic side of my beautiful country.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                <Instagram className="w-5 h-5 mr-2" />
                <a href="https://www.instagram.com/koyamas_travel10/" target="_blank" rel="noopener noreferrer">
                  Follow on Instagram
                </a>
              </Button>
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                <Mail className="w-5 h-5 mr-2" />
                Send a Message
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

