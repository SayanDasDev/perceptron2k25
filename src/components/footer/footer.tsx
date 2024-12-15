import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer className="bg-slate-900 w-full lg:grid lg:grid-cols-5">
      <div className="lg:col-span-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.6346077758526!2d88.35109757535695!3d22.630115979450835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d7201cee84b%3A0x220345018f3fff05!2sRamakrishna%20Mission%20Vivekananda%20Educational%20and%20Research%20Institute!5e0!3m2!1sen!2sin!4v1734184622047!5m2!1sen!2sin"
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          <div>
            <p className="text-background text-xl md:text-2xl font-bold">
              Ramakrishna Mission Vivekananda Educational and Research Institute
              (RKMVERI)
            </p>
            <p className="text-background/75 md:text-lg">
              Deemed to be University as declared by Govt. of India under
              Section 3 of UGC Act, 1956
            </p>
            <p className="text-background/50">
              (Accredited by NAAC with A++ Grade)
            </p>
            <ul className="mt-8 space-y-1 text-sm text-background/50">
              <li>10th and 11th January, 2025</li>
              <li>Friday and Saturday: 9:30am - 5:30pm</li>
            </ul>

            <ul className="mt-8 flex gap-6">
              {Object.entries(siteConfig.links).map(([key, value], i) => (
                <li key={i}>
                  <a
                    href={value}
                    className="text-background/70 hover:text-background"
                    target="_blank"
                  >
                    {key == "mail" && <Mail size={24} />}
                    {key == "instagram" && <Instagram size={24} />}
                    {key == "linkedin" && <Linkedin size={24} />}
                    {key == "facebook" && <Facebook size={24} />}
                  </a>
                </li>
              ))}
            </ul>
            {siteConfig.phone.map((phone, i) => (
              <div
                key={i}
                className="flex text-background/70 hover:text-background mt-4"
              >
                <div className="ml-2 flex flex-col justify-center gap-2 ">
                  <div className="flex flex items-center gap-2">
                    <Phone size={20} />
                    <a
                      key={i}
                      href={phone}
                      className="text-background/70 hover:text-background text-lg"
                    >
                      +91 {phone.replace("tel:", "")}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12 dark:border-gray-800">
          <p className="mt-8 text-xs text-background/70 text-center lg:text-left sm:mt-0">
            &copy; 2025. Perceptron. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
