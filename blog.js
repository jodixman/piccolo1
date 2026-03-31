// Data artikel blog
const posts = [
    {
        title: "Grosir Pengiriman Johor, Malaysia",
        description: "Pengiriman grosir ke Malaysia-Johor (29 Juli 2025) sukses mendarat. Dengan kapasitas tas pengemas yang besar, kita bisa masukkan semua stok jersey pesanan tanpa harus dipaksakan. Pas banget buat pengiriman jarak jauh atau aktivitas outdoor pelanggan di sana yang sangat sibuk..",
        author: "Malaysa-Johor",
        date: "07/29/2025",
        image: "Blog1.png"
    },
    {
        title: "Pengriman dari Jakarta ke Medan",
        description: "Setiap jersey yang kita kirim dari gudang Indonesia-Medan (10 Juli 2025) selalu lewat quality control yang ketat. Mulai dari material premium sampai ketelitian jahitan di logo dan kerah, semuanya kita pastikan presisi. Detail fungsional ini yang bikin pelanggan grosir kita balik lagi.",
        author: "Indonesia-Medan",
        date: "07/10/2025",
        image: "Blog2.png"
    },
    {
        title: "Proses pengiriman Kuching",
        description: "Untuk pengiriman ke Malaysia-Kuching (15 Maret 2025), kita pakai bahan kain yang lembut dengan smooth touch. Seratnya padat dan yang paling penting: tahan kusut. Jadi, meskipun dikirim dalam karung grosiran, jersey tetap terlihat mewah dan rapi saat dipajang di toko Anda.",
        author: "Malaysia-Kucing",
        date: "03/15/2025",
        image: "Blog3.png"
    },
    {
        title: "Makasar penuh pesanan",
        description: "Kiriman ke Indonesia-Makassar (20 Maret 2025) kemarin sempat terkendala cuaca, tapi aman terkendali karena kita pakai material pelindung tahan air. Barang belanjaan Anda terlindungi dari hujan dan percikan air selama proses bongkar muat di pelabuhan.",
        author: "Indonesia-Makasar",
        date: "03/20/2025",
        image: "Blog4.png"
    },
    {
        title: "Profesionalisme Distribusi Kuala Lumpur",
        description: "Dalam mengelola distribusi di Malaysia-Kuala Lumpur (29 Januari 2025), kami selalu pegang prinsip kepemimpinan yang detail. Setiap produk dikerjakan dengan presisi tinggi untuk memastikan kenyamanan maksimal bagi pemakainya. Kami siap menemani aktivitas harian Anda dengan produk terbaik.",
        author: "Malaysia-Kuala Lumpur",
        date: "01/29/2025",
        image: "Blog5.png"
    },
    {
        title: "Grosie ke Kalimantan",
        description: "Terakhir, stok dari Jakarta-Kalimantan (25 Mei 2025) ini adalah hasil dedikasi tangan-tangan ahli. Lewat proses manufaktur yang sangat teliti, setiap jersey dan tas perlengkapan yang kami buat dijamin punya ketahanan tinggi untuk pemakaian jangka panjang.",
        author: "Indonesia-Kalimantan",
        date: "05/25/2025",
        image: "Blog6.png"
    }
];

// Fungsi untuk merender data ke dalam grid
function renderBlogs() {
    const grid = document.getElementById('blog-grid');
    
    // Bersihkan grid sebelum mengisi (opsional)
    grid.innerHTML = "";

    posts.forEach(post => {
        const postHTML = `
            <div class="flex flex-col group cursor-pointer">
                <div class="rounded-2xl overflow-hidden mb-6 aspect-[4/3] bg-gray-200">
                    <img 
                        src="${post.image}" 
                        alt="${post.title}" 
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                    >
                </div>
                
                <div class="flex flex-col">
                    <h2 class="text-2xl font-bold text-gray-900 mb-3 leading-tight tracking-tight">
                        ${post.title}
                    </h2>
                    <p class="text-gray-500 text-[15px] leading-relaxed mb-5">
                        ${post.description}
                    </p>
                    <p class="text-gray-400 text-xs font-semibold uppercase tracking-widest">
                        ${post.author} | ${post.date}
                    </p>
                </div>
            </div>
        `;
        grid.innerHTML += postHTML;
    });
}

// Jalankan fungsi saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', renderBlogs);