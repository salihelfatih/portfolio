"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaEnvelope, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import useStore from "@/hooks/useStore";
import ErrorMessage from "@/components/shared/ErrorMessage";
import { Toaster, toast } from "react-hot-toast";
import { sendEmail } from "@/actions/SendEmail";
import Link from "next/link";
import Magnetic from "@/components/animations/Magnetic";

const Contact = () => {
  const { selectedService, setSelectedService } = useStore();
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    service: selectedService || "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toastIdRef = useRef(null);

  useEffect(() => {
    if (selectedService) {
      setFormData((prevData) => ({
        ...prevData,
        service: selectedService,
      }));
    }
  }, [selectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prevData) => ({ ...prevData, service: value }));
    setSelectedService(value);
  };

  const validateForm = () => {
    let tempErrors = {};

    if (!formData.firstName.trim())
      tempErrors.firstName = "First name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    if (!formData.service) tempErrors.service = "Please select a service";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const showToast = (message, type) => {
    if (toastIdRef.current) {
      toast.dismiss(toastIdRef.current);
      const toastElement = document.getElementById(toastIdRef.current);
      if (toastElement) {
        toastElement.animate(
          [
            { transform: "translateX(0)" },
            { transform: "translateX(-5px)" },
            { transform: "translateX(5px)" },
            { transform: "translateX(-5px)" },
            { transform: "translateX(5px)" },
            { transform: "translateX(0)" },
          ],
          {
            duration: 500,
            iterations: 1,
          }
        );
      }
    }

    const newToast =
      type === "success"
        ? toast.success(message, { duration: 5000 })
        : toast.error(message, { duration: 5000 });

    toastIdRef.current = newToast;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const result = await sendEmail(formData);

        if (result.success) {
          showToast("We'll be in touch soon!", "success");
          setFormData({
            firstName: "",
            email: "",
            service: "",
            message: "",
          });
          setSelectedService("");
        } else {
          showToast(
            result.error || "Failed to send message. Please try again.",
            "error"
          );
        }
      } catch (error) {
        showToast("An error occurred. Please try again later.", "error");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      showToast("Please correct the errors in the form", "error");
    }
  };

  const info = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: "salih.elfatih@hey.com",
      href: "mailto:salih.elfatih@hey.com",
    },
    {
      icon: <FaLinkedinIn />,
      title: "LinkedIn",
      description: "linkedin.com/in/salihelfatih",
      href: "https://www.linkedin.com/in/salihelfatih/",
    },
    {
      icon: <FaTwitter />,
      title: "Twitter",
      description: "@salih_elfatih",
      href: "https://x.com/salih_elfatih",
    },
  ];

  const inputClasses = `custom-input border rounded-md focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 ${
    Object.keys(errors).length > 0 ? "shadow-sm shadow-red-200" : ""
  }`;

  const inputContainerClasses = "flex flex-col mb-2";

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 sm:py-8"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col xl:flex-row gap-6 sm:gap-[30px]">
          <div className="xl:w-[54%] lg:w-[60%] order-2 xl:order-none">
            <AnimatePresence>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 sm:gap-5 p-6 sm:p-8 md:p-10 bg-[#f1f5f9] dark:bg-[#27272c] rounded-xl"
                autoComplete="off"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl text-accent">
                  Let&rsquo;s build something that slaps
                </h3>
                <p className="text-sm sm:text-base text-black/60 dark:text-white/60">
                  Got an idea or want to collaborate? Drop me a message.
                </p>
                <div className={inputContainerClasses}>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`${inputClasses} ${
                      errors.firstName ? "border-red-500" : ""
                    }`}
                    autoComplete="new-password"
                  />
                  <AnimatePresence>
                    {errors.firstName && (
                      <ErrorMessage message={errors.firstName} />
                    )}
                  </AnimatePresence>
                </div>
                <div className={inputContainerClasses}>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${inputClasses} ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    autoComplete="new-password"
                  />
                  <AnimatePresence>
                    {errors.email && <ErrorMessage message={errors.email} />}
                  </AnimatePresence>
                </div>
                <div className={inputContainerClasses}>
                  <Select
                    onValueChange={handleSelectChange}
                    value={formData.service}
                    defaultValue={formData.service}
                  >
                    <SelectTrigger
                      className={`w-full ${inputClasses} ${
                        errors.service ? "border-red-500" : ""
                      }`}
                    >
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent className="custom-input">
                      <SelectGroup>
                        <SelectLabel>Select a topic</SelectLabel>
                        <SelectItem value="General Inquiry">
                          General Inquiry
                        </SelectItem>
                        <SelectItem value="Professional Opportunity">
                          Professional Opportunity
                        </SelectItem>
                        <SelectItem value="Technical Discussion">
                          Technical Discussion
                        </SelectItem>
                        <SelectItem value="Collaboration">
                          Collaboration
                        </SelectItem>
                        <SelectItem value="Open Source">
                          Open Source
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <AnimatePresence>
                    {errors.service && (
                      <ErrorMessage message={errors.service} />
                    )}
                  </AnimatePresence>
                </div>
                <div className={inputContainerClasses}>
                  <Textarea
                    className={`h-[120px] sm:h-[150px] ${inputClasses} ${
                      errors.message ? "border-red-500" : ""
                    }`}
                    placeholder="Type your message here..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <AnimatePresence>
                    {errors.message && (
                      <ErrorMessage message={errors.message} />
                    )}
                  </AnimatePresence>
                </div>
                <Button
                  type="submit"
                  variant="outline"
                  size="md"
                  className="max-w-40 self-center dark:text-white text-black border-accent hover:bg-accent hover:text-white dark:hover:text-black transition-colors duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </AnimatePresence>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-6 sm:mb-8 xl:mb-0">
            <ul className="flex flex-col gap-6 sm:gap-8 md:gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-4 sm:gap-6">
                  <Magnetic>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-[52px] h-[52px] sm:w-[62px] sm:h-[62px] xl:w-[72px] xl:h-[72px] bg-[#f1f5f9] dark:bg-[#27272c] text-accent rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0 transition-all duration-500"
                      aria-label={`Visit ${item.title}`}
                    >
                      {/* Background gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Icon */}
                      <div className="relative z-10 text-[24px] sm:text-[28px] text-accent group-hover:text-primary group-hover:scale-110 transition-all duration-500">
                        {item.icon}
                      </div>
                    </Link>
                  </Magnetic>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-black/60 dark:text-white/60">
                      {item.title}
                    </p>
                    <h3 className="text-base sm:text-lg md:text-xl text-black dark:text-white break-words">
                      {item.description}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'var(--toast-bg)',
            color: 'var(--toast-text)',
            border: '1px solid var(--toast-border)',
          },
          success: {
            iconTheme: {
              primary: '#6366f1',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </motion.section>
  );
};

export default Contact;
