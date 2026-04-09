import react, { useState } from 'react'; //
import booksData from '../../Utils/books'; // 
import Footer from "../../components/shared/Footer";
import ProductList from "../../components/shared/ProductList";

export default function Books(){
    //Hooks useState untuk menampung data buku
    const [allBooks, setAllBooks] = useState(booksData);

const handleAddBook = () => {
        const newBook = {
            id: allBooks.length + 1,
            title: "Buku Baru " + (allBooks.length + 1),
            author: "Didik Sujatmiko",
            year: 2026,
            description: "Buku ini ditambahkan menggunakan Hooks!",
            image: "https://placehold.co/150",
            price: "Rp 50.000" 
        };

        // 1. Update datanya dulu
        setAllBooks([...allBooks, newBook]);

        // 2. Baru munculin Alert-nya di sini
        alert("Buku baru berhasil ditambahkan! Silakan cek di bagian bawah daftar.");
    };

    return(
        <>
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h1>Daftar Koleksi Buku</h1>
                <button 
                    onClick={handleAddBook}
                    style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                >
                    Tambah Buku Baru
                </button>
            </div>
            
            <ProductList data={allBooks} /> 
            
            <Footer />
        </>
    )
}