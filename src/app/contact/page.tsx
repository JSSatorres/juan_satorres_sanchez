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
    <main className="bg-background text-main px-4 py-16 overflow-x-hidden">
      <div className="max-w-2xl mx-auto bg-secondBackgrond p-8 rounded-lg shadow-xl mt-5">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Name
            </label>
            <input
              type="text"
              {...register("name")}
              className={`w-full p-3 bg-backgroundLight text-black rounded-lg border-2 ${
                errors.name ? "border-error" : "border-primary"
              } focus:outline-none focus:ring-2 focus:ring-darkPrimary`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-error text-sm mt-2">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              className={`w-full p-3 bg-backgroundLight text-black rounded-lg border-2 ${
                errors.email ? "border-error" : "border-primary"
              } focus:outline-none focus:ring-2 focus:ring-darkPrimary`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-error text-sm mt-2">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Message
            </label>
            <textarea
              {...register("message")}
              className={`w-full p-3 bg-backgroundLight text-black rounded-lg border-2 ${
                errors.message ? "border-error" : "border-primary"
              } focus:outline-none focus:ring-2 focus:ring-darkPrimary`}
              placeholder="Enter your message"
              rows={5}
            />
            {errors.message && (
              <p className="text-error text-sm mt-2">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-main hover:bg-primary text-primary p-3 hover:text-main rounded-lg font-semibold transition-all ease-in-out duration-300"
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
