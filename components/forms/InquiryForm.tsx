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
        <p className="text-sm mt-1 text-default-500">
          Please fill out the form below and we'll get back to you as soon as
          possible.
        </p>
      </div>

      <div className="space-y-6 text-dark-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          <Input
            label="First Name"
            name="firstName"
            value={formData.firstName || ""}
            onChange={handleInputChange}
            placeholder="John"
            isRequired
            classNames={{ base: "w-full" }}
          />

          <Input
            label="Last Name"
            name="lastName"
            value={formData.lastName || ""}
            onChange={handleInputChange}
            placeholder="Doe"
            isRequired
            classNames={{ base: "w-full" }}
          />
        </div>

        <Input
          label="Email Address"
          name="email"
          type="email"
          value={formData.email || ""}
          onChange={handleInputChange}
          placeholder="john.doe@example.com"
          isRequired
          classNames={{ base: "w-full" }}
        />

        <div className="phone-input-wrapper">
          <label htmlFor="phone-input">
            Phone Number
            <span className="required-asterisk">*</span>
          </label>
          <PhoneInput
            id="phone-input"
            international
            defaultCountry="KE"
            value={formData.phone || ""}
            onChange={handlePhoneChange}
            placeholder="+254 712 345 678"
            aria-label="Phone number"
          />
        </div>

        <Select
          label="Area of Inquiry"
          placeholder="Select area of inquiry"
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
          className="flex-1 bg-dark-300 text-white py-2.5 px-7 rounded-full font-medium hover:bg-blue-600 transition-colors"
        >
          Submit Inquiry
        </button>
      </div>
    </div>
  );
};

export default InquiryForm;
