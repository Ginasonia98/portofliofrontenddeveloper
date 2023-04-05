import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  /**
   *Event listener yang ditambahkan adalah scroll yang mengecek apakah pengguna sedang melakukan scroll atau tidak. Jika iya, maka akan dicek apakah posisi scroll sudah melebihi 0 atau tidak.
  Jika posisi scroll melebihi 0, maka nilai state sticky akan diubah menjadi true. Ini berarti bahwa header atau navbar akan dibuat menjadi "sticky" atau menempel di atas halaman ketika pengguna melakukan scroll ke bawah.
  Jika posisi scroll kembali ke atas halaman, maka nilai state sticky akan diubah kembali menjadi false, sehingga header atau navbar akan kembali ke posisi semula.
  Ketika argumen kedua pada useEffect() diberikan array kosong [], itu berarti bahwa efek hanya akan dieksekusi sekali ketika komponen di-mount. Ini berarti bahwa event listener hanya akan ditambahkan saat pertama kali komponen dirender, dan tidak akan ditambahkan lagi saat nilai state berubah.
   */
  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-rose-700  text-white" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold">
            G<span className="text-cyan-600">IN</span>A
          </h4>
        </div>
        <div
          className={`${sticky ? "md:bg-white/0 bg-white" : "bg-white"} ${
            sticky ? "text-white" : "text-gray-900"
          } md:block hidden px-7 py-2 font-medium rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-rose-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl md:hidden m-5`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-cyan-600"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    /**
     *Kode tersebut adalah untuk membuat sebuah navbar yang akan tampil di halaman web. Pada bagian className, terdapat beberapa kondisi yang akan menentukan warna dan styling dari navbar tersebut. Kondisi tersebut dipengaruhi oleh nilai dari state sticky yang diatur dengan useEffect ketika terjadi scroll pada halaman. Jika sticky bernilai true, maka navbar akan memiliki background warna rose-700 dan tulisan berwarna putih, sedangkan jika sticky bernilai false, maka navbar akan memiliki tulisan berwarna putih dan background transparan.
      Pada bagian tengah navbar, terdapat judul GINA yang ditampilkan dalam font yang besar dan bold. Kemudian, terdapat juga menu navigasi yang ditampilkan dalam bentuk daftar. Daftar menu tersebut ditampilkan dengan warna putih jika sticky bernilai true, dan warna hitam jika sticky bernilai false. Menu navigasi ini akan tampil dalam bentuk daftar horizontal pada layar yang cukup besar, dan akan ditampilkan dalam bentuk dropdown pada layar yang lebih kecil (menggunakan tombol menu dengan icon tiga garis).
     */
  );
};

export default Navbar;
