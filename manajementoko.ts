type Book = {
    id: number;
    judul: string;
    kategori: string;
    harga: number;
    stok: number;
};

//nomor 1 => daftar buku berdasarkan kategori
const books: Book[] = [
    { id: 1, judul: "TS Dasar", kategori: "Pemrograman", harga: 150000, stok: 10 },
    { id: 2, judul: "NestJS Lanjutan", kategori: "Web", harga: 200000, stok: 5 },
    { id: 3, judul: "Data Structures", kategori: "Ilmu Komputer", harga: 180000, stok: 8 },
    { id: 4, judul: "JavaScript", kategori: "Ilmu Komputer", harga: 200000, stok: 5 },
    { id: 5, judul: "Pemograman Awal", kategori: "Pemograman", harga: 160000, stok: 7 },
];
//ini buat daftar bukunya (filter)
function byCategory(kategori: string) {
    return books.filter(book => book.kategori === kategori);
}
console.log("NOMOR 1");
console.log(byCategory("Web"));
console.log("===========================================");

//no 2 => total nilai gudang
const totalGudang = books.map(book => book.stok * book.harga);
console.log("NOMOR 2");
console.log("TOTAL NILAI GUDANG: " + totalGudang);
console.log("============================================");


//no 3 => tambahkan stok untuk penjuaan terbesar 
function tambahStokTerbesar() {
    let maxBook = books.reduce((a, b) => (a.stok > b.stok ? a : b));
    maxBook.stok += 10;
    return maxBook;
}
console.log("NOMOR 3");
console.log("TAMBAHAN STOK UNTUK PENJUALAN TERBESAR: ")
console.log(tambahStokTerbesar());
console.log("=============================================");


//no 4 => konversi ke format ringkas
const formatRingkas = books.map(
    book => `${book.judul} — Rp${book.harga} (Stok: ${book.stok})`
);
console.log("NOMOR 4");
console.log(formatRingkas);
console.log("=============================================");


//no 5 => menampilkan semua judul buku
console.log("NOMOR 5");
console.log("JUDUL DARI SEMUA BUKU: ");
books.forEach(book => console.log(book.judul));
console.log("==============================================");


