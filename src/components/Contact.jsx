import React from "react";
import { db } from "../firebaseConfig";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const userCollectionRef = collection(db, "contactdata");

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
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    await addDoc(userCollectionRef, {
      name: name,
      email: email,
      message: message,
    })
      .then(() => {
        if (!alert("Form Submitted Successfully!"))
          document.location = "https://www.google.com/webhp";
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-white">Me</span>
        </h3>
        <p className="text-white mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
          gap-6 max-w-5xl bg-rose-600 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <input
              type="Email"
              placeholder="Your Email Address"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <textarea
              placeholder="Your Message"
              rows={10}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
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
