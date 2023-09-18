import React from "react";
import { db } from "../firebaseConfig";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const userCollectionRef = collection(db, "contactdata");
  /**
   *Pada kode di atas, db adalah objek yang merepresentasikan koneksi ke Firebase Firestore. Kemudian, collection adalah method yang digunakan untuk mengambil referensi ke koleksi di dalam database. collection menerima dua parameter: objek db dan nama koleksi yang ingin diakses, yaitu "contactdata".
   */

  const contact_info = [
    { logo: "mail", text: "ginas.tobing@gmail.com" },
    {
      logo: "location",
      text: "Tangerang,Indonesia",
    },
    {
      logo: "logo-linkedin",
      text: "Gina Sonia Br Tobing",
      url: "https://www.linkedin.com/in/ginatobing/",
    },
    {
      logo: "logo-whatsapp",
      text: "Whatsapp",
      url: "https://api.whatsapp.com/send/?phone=6281398498112&text&type=phone_number&app_absent=0",
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all fields");
    } else {
      await addDoc(userCollectionRef, {
        name: name,
        email: email,
        message: message,
      })
        .then(() => {
          if (!alert("Form Submitted Successfully!"))
            document.location = "https://portfoliofrontendgina.netlify.app/";
        })
        .catch((error) => {
          alert(error.message);
        });

      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section id="contact" className="py-10 bg-white text-black relative">
      {/* Add a black border at the top */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gray-100"></div>
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold underline text-center">
          Contact <span >Me</span>
        </h3>
        {/* Arrow-down animation */}
        <div className="mt-6 text-center">
          <div className="animate-bounce">
            <ion-icon name="arrow-down-circle-outline"></ion-icon>
          </div>
        </div>
        <div
          className="mt-16 flex md:flex-row flex-col
          gap-6 max-w-5xl bg-white border border-blue-500 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              className="bg-white text-gray-900 border border-blue-500"
            />
            <input
              type="Email"
              placeholder="Your Email Address"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              className="bg-white text-gray-900 border border-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows={10}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              className="bg-white text-gray-900 border border-blue-500"
            ></textarea>
            <button type="submit" className="btn-primary w-fit">
              Send Message
            </button>
          </form>
          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p
                  className="selectable cursor-pointer md:text-base text-sm break-words"
                  onClick={() => window.open(contact.url, "_blank")}
                  style={{
                    WebkitUserSelect: "text",
                    MozUserSelect: "text",
                    msUserSelect: "text",
                    userSelect: "text",
                  }}
                >
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
