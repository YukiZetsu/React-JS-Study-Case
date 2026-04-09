import React, { useRef } from "react";
import produkData from "../Utils/ProdukData";
import styles from "../styles/Produk.module.css";
import { useState } from "react";

function Produk(){
    const [produkList, setProdukList] = useState([...produkData]);
    const handleClick = () => {
        const newProduk = {
            id: produkList.length + 1,
            nama: "Printer Epson",
            tahun: 2023,
            harga: "Rp3.000.000",
            gambar: "https://placehold.co/150"
        };
        // Menambahkan produk baru ke state ProdukList
        setProdukList((prevList) => [...prevList, newProduk]);
        alert("Produk berhasil ditambahkan");
    };
    return(
        <div className={styles.produkContainer}>
            <h1 className={styles.title}>Daftar Produk</h1>
            <div className={styles.cardContainer}>
                {produkList.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <img src={item.gambar} alt={item.nama} />
                        <h3>{item.nama}</h3>
                        <p>Tahun: {item.tahun}</p>
                        <p>Harga: {item.harga}</p>
                    </div>
                ))}
            </div>
            <button onClick={handleClick} className={styles.addButton}>
                Tambah Produk Baru
            </button>
        </div>
    );
}

export default Produk;