"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
type Props = {};
type Inputs = {
  name: string;
  subject: string;
  massage: string;
};

const Contact = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>{
    window.location.href=`mailto:pabitrakumarpatra143@gmail.com?subject=${data.subject}&body=Hay its ${data.name},${data.massage}`
  };
  return (
    <section className="h-screen max-w-7xl p-5 mx-auto flex flex-col justify-center items-center space-y-24 w-full ">
      <h1 className=" text-2xl uppercase tracking-[20px] text-violet-500">
        Contact Me
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col justify-center items-center space-y-3 w-full md:w-[30%] "
      >
        <input
          {...register("name", { required: true })}
          className=" placeholder-violet-400 border border-violet-500 focus:outline-none p-2 bg-transparent rounded-lg w-full"
          placeholder="Your name"
          type="text"
        />
        {errors.name && (
          <span className=" text-red-500 text-sm">This field is required</span>
        )}
        <input
          {...register("subject", { required: true })}
          className=" placeholder-violet-400 border border-violet-500 focus:outline-none p-2 bg-transparent rounded-lg w-full"
          placeholder="Subject"
          type="text"
        />
        {errors.subject && (
          <span className=" text-red-500 text-sm">This field is required</span>
        )}
        <textarea
          {...register("massage", { required: true })}
          rows={8}
          className=" placeholder-violet-400 border border-violet-500 focus:outline-none p-2 bg-transparent rounded-lg w-full"
          placeholder="Your Massage"
        />
        {errors.massage && (
          <span className=" text-red-500 text-sm">This field is required</span>
        )}
        <button
          type="submit"
          className=" bg-gradient-to-r from-violet-500 to-pink-500 p-3 rounded-lg font-bold w-full text-white hover:opacity-90"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
