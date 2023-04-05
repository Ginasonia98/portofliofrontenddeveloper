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
  /**
   *Pertama-tama, fungsi ini akan memeriksa apakah semua field telah diisi dengan memeriksa nilai dari variabel name, email, dan message. Jika salah satu atau semua field tidak diisi, maka akan muncul alert yang memberitahu pengguna untuk mengisi semua field.
  Namun, jika semua field telah diisi, maka fungsi akan memanggil addDoc untuk menambahkan dokumen baru ke koleksi "contactdata" pada database Firebase. Dokumen ini akan berisi informasi kontak pengguna yang diisi pada form.
  Setelah dokumen berhasil ditambahkan ke database, fungsi akan memanggil then dan menampilkan alert yang memberitahu pengguna bahwa form telah berhasil disubmit. Setelah alert ditampilkan, halaman akan diarahkan ke halaman portfolio.
  Jika terjadi error saat menambahkan dokumen ke database, fungsi akan memanggil catch dan menampilkan alert dengan pesan error yang dikembalikan oleh Firebase.
  Setelah form berhasil disubmit, variabel name, email, dan message akan dikosongkan kembali sehingga form siap digunakan kembali oleh pengguna.
   */

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
              /**
               *Atribut rows diatur ke 10, sehingga area teks akan memiliki tinggi yang cukup besar untuk menampilkan 10 baris teks secara default. Jika teks yang dimasukkan melebihi jumlah baris yang ditentukan, maka area teks akan otomatis menambahkan baris sesuai kebutuhan.
               */
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
                  /**
                   *Fungsi dari kode tersebut adalah membuka link yang terdapat pada contact.url di jendela baru ketika tombol atau elemen yang diberi atribut onClick tersebut diklik. Penggunaan "__blank" pada window.open menyatakan bahwa link tersebut akan dibuka di jendela/tab baru, bukan jendela/tab yang sama.
                    Sedangkan style yang diberikan pada elemen tersebut, yaitu WebkitUserSelect, MozUserSelect, msUserSelect, dan userSelect, menonaktifkan fungsi pemilihan teks (text selection) pada elemen tersebut. Hal ini berguna untuk mencegah pengguna dari melakukan pemilihan teks pada elemen tersebut, sehingga hanya tombol atau elemen yang dapat diklik.
                   */
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
