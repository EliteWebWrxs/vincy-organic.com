"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Leaf,
  Users,
  HelpCircle,
} from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak with our friendly team",
    contact: "+1 (555) 123-4567",
    availability: "Mon-Fri 9AM-6PM EST",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "We'll respond within 24 hours",
    contact: "support@vincyorganic.com",
    availability: "24/7 Response",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: MessageCircle,
    title: "Text Us",
    description: "Send us a quick text",
    contact: "+1 (555) 222-3344",
    availability: "Mon-Sat 9AM-8PM EST",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    icon: MapPin,
    title: "Visit Our Store",
    description: "Come see our products in person",
    contact: "123 Organic Way, Green Valley, CA",
    availability: "Mon-Sat 10AM-7PM",
    color: "bg-brand-100 text-brand-600",
  },
];

const inquiryTypes = [
  { value: "general", label: "General Inquiry" },
  { value: "product", label: "Product Question" },
  { value: "order", label: "Order Support" },
  { value: "wholesale", label: "Wholesale/Business" },
  { value: "partnership", label: "Partnership" },
  { value: "feedback", label: "Feedback" },
];

const faqs = [
  {
    question: "What makes your products organic?",
    answer:
      "All our products are certified organic by USDA standards, sourced from farms that use no synthetic pesticides, herbicides, or fertilizers.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location.",
  },
  {
    question: "What's your return policy?",
    answer:
      "We offer a 30-day satisfaction guarantee. If you're not completely happy with your purchase, we'll provide a full refund.",
  },
  {
    question: "Are your spices tested for quality?",
    answer:
      "Every batch is tested for purity, potency, and safety in our certified laboratory facilities.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50 to-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-brand-100 text-brand-700 mb-4">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h1 className="text-5xl font-bold text-neutral-600 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-neutral-500 max-w-3xl mx-auto leading-relaxed">
              Have questions about our organic products? Need help with an
              order? Our friendly team is here to help you discover the perfect
              spices and sauces for your kitchen.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-600 mb-4">
              How Can We Help?
            </h2>
            <p className="text-lg text-neutral-500">
              Choose the best way to reach us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500"></div>
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <method.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-600 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mb-3">
                    {method.description}
                  </p>
                  <p className="text-brand-600 font-medium mb-2">
                    {method.contact}
                  </p>
                  <div className="flex items-center justify-center text-xs text-neutral-400">
                    <Clock className="w-3 h-3 mr-1" />
                    {method.availability}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-neutral-600 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-lg text-neutral-500">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              <Card className="border-0 shadow-lg bg-white rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500"></div>
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-600 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-neutral-500">
                        Thank you for contacting us. We'll respond within 24
                        hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-neutral-600 mb-2">
                            Full Name *
                          </label>
                          <Input
                            required
                            value={formData.name}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
                            placeholder="Your full name"
                            className="border-neutral-200 focus:border-brand-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-neutral-600 mb-2">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            placeholder="your@email.com"
                            className="border-neutral-200 focus:border-brand-500"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-neutral-600 mb-2">
                            Phone Number
                          </label>
                          <Input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                            placeholder="(555) 123-4567"
                            className="border-neutral-200 focus:border-brand-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-neutral-600 mb-2">
                            Inquiry Type *
                          </label>
                          <Select
                            value={formData.inquiryType}
                            onValueChange={(value) =>
                              handleInputChange("inquiryType", value)
                            }
                          >
                            <SelectTrigger className="border-neutral-200 focus:border-brand-500">
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              {inquiryTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-600 mb-2">
                          Subject *
                        </label>
                        <Input
                          required
                          value={formData.subject}
                          onChange={(e) =>
                            handleInputChange("subject", e.target.value)
                          }
                          placeholder="Brief description of your inquiry"
                          className="border-neutral-200 focus:border-brand-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-600 mb-2">
                          Message *
                        </label>
                        <Textarea
                          required
                          value={formData.message}
                          onChange={(e: any) =>
                            handleInputChange("message", e.target.value)
                          }
                          placeholder="Tell us more about how we can help you..."
                          rows={5}
                          className="border-neutral-200 focus:border-brand-500 resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-brand-500 to-brand-400 hover:from-brand-600 hover:to-brand-500 text-white shadow-lg rounded-full py-3 transform hover:scale-105 transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Company Info & Map */}
            <div className="space-y-8">
              {/* Company Info */}
              <Card className="border-0 shadow-lg bg-white rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Leaf className="h-8 w-8 text-brand-500 mr-3" />
                    <h3 className="text-2xl font-bold text-neutral-600">
                      Vincy Organic Products
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-brand-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-neutral-600">
                          Our Location
                        </p>
                        <p className="text-neutral-500">
                          123 Organic Way
                          <br />
                          Green Valley, CA 90210
                          <br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-brand-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-neutral-600">
                          Business Hours
                        </p>
                        <p className="text-neutral-500">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 10:00 AM - 4:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>

                    {/* <div className="flex items-start">
                      <Users className="h-5 w-5 text-brand-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-neutral-600">Our Team</p>
                        <p className="text-neutral-500">
                          Over 50 passionate team members dedicated to bringing
                          you the finest organic products.
                        </p>
                      </div>
                    </div> */}
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
                <div className="relative h-64 bg-gradient-to-br from-brand-100 to-brand-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-brand-500 mx-auto mb-2" />
                      <p className="text-brand-600 font-medium">
                        Interactive Map
                      </p>
                      <p className="text-brand-500 text-sm">
                        Click to view directions
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-600 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-500">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-0 shadow-md bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <HelpCircle className="h-4 w-4 text-brand-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-neutral-600 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-neutral-500 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <div className="text-center mt-8">
            <p className="text-neutral-500 mb-4">
              Can't find what you're looking for?
            </p>
            <Button
              variant="outline"
              className="border-brand-500 text-brand-600 hover:bg-brand-50"
            >
              View All FAQs
            </Button>
          </div> */}
        </div>
      </section>
    </div>
  );
}
