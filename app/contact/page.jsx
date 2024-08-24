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
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import useStore from "@/hooks/useStore";
import ErrorMessage from "@/components/ErrorMessage";
import { Toaster, toast } from "react-hot-toast";
import { sendEmail } from "@/actions/SendEmail";

const Contact = () => {
  const { selectedService, setSelectedService } = useStore();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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
    if (!formData.lastName.trim())
      tempErrors.lastName = "Last name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
      tempErrors.phone = "Invalid phone number format";
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
            lastName: "",
            email: "",
            phone: "",
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
        console.error("Error sending message:", error);
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
      icon: <FaPhoneAlt />,
      title: "Phone",
      description: "+1 437-219-9433",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: "hello@salihelfatih.dev",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      description: "Hamilton, Ontario, Canada",
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
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <AnimatePresence>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 p-10 bg-[#f1f5f9] dark:bg-[#27272c] rounded-xl"
                autoComplete="off"
              >
                <h3 className="text-4xl text-accent">
                  Let&rsquo;s innovate together!
                </h3>
                <p className="text-black/60 dark:text-white/60">
                  I&apos;m always open to discussing development and design
                  projects or partnership opportunities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      type="text"
                      name="lastName"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`${inputClasses} ${
                        errors.lastName ? "border-red-500" : ""
                      }`}
                      autoComplete="new-password"
                    />
                    <AnimatePresence>
                      {errors.lastName && (
                        <ErrorMessage message={errors.lastName} />
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
                    <Input
                      type="text"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`${inputClasses} ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                      autoComplete="new-password"
                    />
                    <AnimatePresence>
                      {errors.phone && <ErrorMessage message={errors.phone} />}
                    </AnimatePresence>
                  </div>
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
                        <SelectItem value="Branding">Branding</SelectItem>
                        <SelectItem value="General Inquiry">
                          General Inquiry
                        </SelectItem>
                        <SelectItem value="Mobile Development">
                          Mobile Development
                        </SelectItem>
                        <SelectItem value="Product Design">
                          Product Design
                        </SelectItem>
                        <SelectItem value="Professional Opportunity">
                          Professional Opportunity
                        </SelectItem>
                        <SelectItem value="Web Development">
                          Web Development
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
                    className={`h-[200px] ${inputClasses} ${
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
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#f1f5f9] dark:bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-black/60 dark:text-white/60">
                      {item.title}
                    </p>
                    <h3 className="text-xl text-black dark:text-white">
                      {item.description}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </motion.section>
  );
};

export default Contact;
