const products = [
  {
    name: "Real Madrid Jersi",
    price: 120,
    oldPrice: 200,
    image: "Pro1.png", // Contoh link gambar tas biru
    colors: ["#FFFFFF", "#C0C0C0", "#B8860B"]
  },
  {
    name: "Intermiami Jersi",
    price: 138,
    oldPrice: 200,
    image: "Pro2.png", // Contoh tas hitam
    colors: ["#FFB6C1", "#000000", "#FF69B4"]
  },
  {
    name: "AL-Nassar FC Jersi",
    price: 110,
    oldPrice: 200,
    image: "Pro3.png", // Contoh tas abu
    colors: ["#FFD700", "#002147", "#F0E68C"]
  },
  {
    name: "Juventus Jersi",
    price: 15,
    oldPrice: 200,
    image: "Pro4.png",
    colors: ["#808080", "#000000", "#FFFFFF"]
  },
  {
    name: "Chelse Jersi",
    price: 141,
    oldPrice: 200,
    image: "Pro5.png",
    colors: ["#0047AB", "#002366", "#FFFFFF"]
  },
  {
    name: "City Jersey",
    price: 80,
    oldPrice: 200,
    image: "Pro6.png",
    colors: ["#696969", "#ADFF2F", "#000000"]
  }
];

const container = document.getElementById("productList");
let html = "";

products.forEach(product => {
  const colorDots = product.colors.map(color => 
    `<span class="w-3 h-3 rounded-full border border-gray-200" style="background-color: ${color}"></span>`
  ).join("");

  html += `
  <div class="flex flex-col cursor-pointer group bg-white p-2 rounded-xl transition-shadow hover:shadow-md"> 
    
    <div class="bg-gray-50 rounded-lg flex items-center justify-center aspect-square overflow-hidden mb-3">
      <img src="${product.image}" 
           class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" 
           alt="${product.name}">
    </div>

    <div class="flex flex-col flex-1">

      
      <div class="mt-auto pt-3 flex justify-between items-center">
        <div>
      <h3 class="text-sm md:text-base font-semibold text-gray-800 line-clamp-2 leading-tight">
        ${product.name}
      </h3>
      
      <div class="flex gap-1 mt-2">
        ${colorDots}
      </div>
        </div>

        <a href="https://wa.me/628129937886?text=Halo%20saya%20mau%20beli%20baju%20grosir, saya tertarik dengan ${product.name}" 
           target="_blank"
           class="p-2 bg-green-50 rounded-full text-green-600 hover:bg-green-600 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        </a>
      </div>
    </div>
  </div>
  `;
});

container.innerHTML = html;
container.innerHTML = html;