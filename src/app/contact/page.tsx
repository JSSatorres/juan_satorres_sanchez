"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormInput {
  name: string;
  email: string;
  message: string;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Must be a valid email"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        reset(); // Reset form after successful submission
      } else {
        console.error("Failed to send");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-800 text-white p-8 rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Name
          </label>
          <input
            type="text"
            {...register("name")}
            className={`w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 ${
              errors.name ? "ring-red-500" : "ring-yellow-400"
            }`}
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            className={`w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 ${
              errors.email ? "ring-red-500" : "ring-yellow-400"
            }`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Message
          </label>
          <textarea
            {...register("message")}
            className={`w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 ${
              errors.message ? "ring-red-500" : "ring-yellow-400"
            }`}
            placeholder="Enter your message"
            rows={5}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-2">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-lg font-semibold transition-all ease-in-out duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
