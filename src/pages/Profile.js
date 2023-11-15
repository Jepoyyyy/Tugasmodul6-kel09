import { Fragment } from "react";
import CardProfile from "../components/cardForProfile";


// import Card from "../components/card";

import "./Profile.css";

export default function Movie() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;
  const data = [
    {
      name: "Manuel Zefanya",
      id: 1,
      rate: 4,
      NIM: "21120121140105",
      img1: "https://i.pinimg.com/564x/7d/b5/ed/7db5edb2b9b4246c33ec0269efd9b5fe.jpg",
    },
    {
      name: "Ivan Nabil",
      id: 2,
      rate: 4,
      NIM: "21120121120345",
      img1: "https://i.pinimg.com/564x/7d/b5/ed/7db5edb2b9b4246c33ec0269efd9b5fe.jpg",
    },
    {
      name: "Muhammad Faqih",
      id: 3,
      rate: 4,
      NIM: "21120121120103",
      img1: "https://i.pinimg.com/564x/7d/b5/ed/7db5edb2b9b4246c33ec0269efd9b5fe.jpg",
    },
    {
      name: "Rafiq Bagus",
      id: 4,
      rate: 4,
      NIM: "2112021120101",
      img1: "https://i.pinimg.com/564x/7d/b5/ed/7db5edb2b9b4246c33ec0269efd9b5fe.jpg",
    },
  ];
  return (
    <>
      <div className="judul">
        <p id="movies">Anggota Kelompok 9</p>
      </div>
      {data.map((item, index) => (
        <Fragment key={item.id}>
          <CardProfile name={item.name} img1={item.img1} NIM={item.NIM} size={STAR_SIZE} color={STAR_COLOR} onClick={() => alert("item id = " + item.id)} />
          {data.length === index + 1 && (
            <div
              style={{
                marginBottom: 80,
              }}
            />
          )}
        </Fragment>
      ))}
    </>
  );
}
