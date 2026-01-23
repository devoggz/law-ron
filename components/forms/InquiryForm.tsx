"use client";
import React from "react";
import {
  Input,
  Textarea,
  Select,
  SelectItem,
  RadioGroup,
  Radio,
} from "@heroui/react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const INQUIRY_AREAS = [
  { key: "dispute", label: "Dispute" },
  { key: "energy", label: "Energy Infrastructure & Natural Resources" },
  { key: "employment", label: "Employment Law" },
  { key: "real-estate", label: "Real Estate" },
];

interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  areaOfInquiry?: string;
  howCanWeHelp?: string;
  urgent?: string;
}

const InquiryForm = () => {
  const [formData, setFormData] = React.useState<FormData>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value: string | undefined) => {
    setFormData((prev) => ({ ...prev, phone: value || "" }));
  };

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    return !!(
      formData.firstName?.trim() &&
      formData.lastName?.trim() &&
      formData.email?.trim() &&
      formData.phone?.trim() &&
      formData.areaOfInquiry &&
      formData.howCanWeHelp?.trim() &&
      formData.urgent
    );
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      // Simple alert for demo - replace with toast in production
      alert("Please complete all required fields.");
      return;
    }

    console.log("Form Data:", formData);

    // Success message
    alert("Inquiry submitted successfully! We'll contact you shortly.");

    // Reset form
    setFormData({});
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl text-black font-bold">Inquiry Form</h1>
        <p className="text-sm font-regular  text-default-500">
          Please fill out the form below and we'll get back to you as soon as
          possible.
        </p>
      </div>

      <div className="space-y-6 text-primary font-regular">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          <Input
            label="First Name"
            name="firstName"
            variant="underlined"
            value={formData.firstName || ""}
            onChange={handleInputChange}
            placeholder="John"
            isRequired
            classNames={{ base: "w-full" }}
          />

          <Input
            label="Last Name"
            name="lastName"
            variant="underlined"
            value={formData.lastName || ""}
            onChange={handleInputChange}
            placeholder="Doe"
            isRequired
            classNames={{ base: "w-full" }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          <Input
            label="Email Address"
            name="email"
            type="email"
            variant="underlined"
            value={formData.email || ""}
            onChange={handleInputChange}
            placeholder="john.doe@example.com"
            isRequired
            classNames={{ base: "w-full" }}
          />
          <Input
            label="Phone Number"
            name="phone-input"
            variant="underlined"
            type="phone-input"
            value={formData.phone || ""}
            onChange={handleInputChange}
            placeholder="+254 712 345 678"
            isRequired
            classNames={{ base: "w-full" }}
          />
        </div>

        <Select
          label="Area of Inquiry"
          placeholder="Select area of inquiry"
          variant="underlined"
          selectedKeys={formData.areaOfInquiry ? [formData.areaOfInquiry] : []}
          onSelectionChange={(keys) => {
            const value = Array.from(keys)[0] as string;
            handleSelectChange("areaOfInquiry", value);
          }}
          isRequired
          classNames={{ base: "w-full" }}
        >
          {INQUIRY_AREAS.map((area) => (
            <SelectItem key={area.key}>{area.label}</SelectItem>
          ))}
        </Select>

        <Textarea
          label="How can we help?"
          name="howCanWeHelp"
          variant="underlined"
          value={formData.howCanWeHelp || ""}
          onChange={handleInputChange}
          placeholder="Please be as detailed as possible but do not include sensitive or confidential information."
          minRows={5}
          isRequired
          classNames={{ base: "w-full" }}
        />

        <div>
          <label className="block text-sm font-medium mb-2">
            Mark as urgent
            <span className="text-red-500 ml-1">*</span>
          </label>
          <RadioGroup
            value={formData.urgent || ""}
            onValueChange={(value) => handleSelectChange("urgent", value)}
            orientation="horizontal"
          >
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </RadioGroup>
        </div>
      </div>

      <div className="flex gap-4 pt-8">
        <button
          onClick={handleSubmit}
          aria-label="Submit inquiry"
          className="flex-1 bg-teal-500 text-white py-2.5 px-7 font-medium hover:bg-orange-500 transition-colors"
        >
          Submit Inquiry
        </button>
      </div>
    </div>
  );
};

export default InquiryForm;
