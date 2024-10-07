"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "./validationSchema";
import { FormInput } from "@/lib/definitions";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormInput>({
    resolver: yupResolver(contactSchema),
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
        reset();
      } else {
        console.error("Failed to send");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <main className="min-h-screen bg-background text-white px-4 py-16 overflow-x-hidden">
      <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl mt-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Name
            </label>
            <input
              type="text"
              {...register("name")}
              className={`w-full p-3 bg-backgroundLight text-white rounded-lg border-2 ${
                errors.name ? "border-red-500" : "border-yellow-400"
              } focus:outline-none focus:ring-2 focus:ring-yellow-500`}
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
              className={`w-full p-3 bg-backgroundLight text-white rounded-lg border-2 ${
                errors.email ? "border-red-500" : "border-yellow-400"
              } focus:outline-none focus:ring-2 focus:ring-yellow-500`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Message
            </label>
            <textarea
              {...register("message")}
              className={`w-full p-3 bg-backgroundLight text-white rounded-lg border-2 ${
                errors.message ? "border-red-500" : "border-yellow-400"
              } focus:outline-none focus:ring-2 focus:ring-yellow-500`}
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
    </main>
  );
};

export default Contact;
