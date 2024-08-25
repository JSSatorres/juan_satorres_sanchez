import Image from "next/image";

const ContactSection = () => {
  return (
    <section>
      <Image
        className="rounded-3xl"
        width={400}
        height={400}
        src="/images/profile-image.png"
        alt="portfolio owner"
      />

      <div className="px-[2.5rem] mt-24">
        <div className="flex gap-2 items-center">
          <p className="text-lightGray font-[500] text-[1.25rem] md:text-[1.875rem]">
            Contact Information
          </p>
        </div>
        <p className="text-[1.125rem] font-[500] text-customGray90">Email</p>
        <p className="text-[1.125rem] font-[500] text-customGrayAlt2">
          juansataz@gmail.com
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
