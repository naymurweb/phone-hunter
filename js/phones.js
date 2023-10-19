const phonesData = async (searchText) => {
  loading(true);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  showPhones(data.data);
};
const showPhones = (phones) => {
  const cards = document.getElementById("card-container");
  cards.textContent = "";

  if (phones.length === 0) {
    cards.innerHTML = `
        <div class=' text-red-600 text-4xl my-12'>
            <h1 class="text-center">No data found!!</h1>
        </div>
    
`;
    loading(false);
  }

  phones.forEach((phone) => {
    const newElement = document.createElement("div");
    newElement.classList.add("card", "w-96", "bg-base-100", "shadow-xl");
    newElement.innerHTML = `
        <figure><img src=${phone.image} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-center">
            <button class="btn btn-primary">Show Details</button>
          </div>
        </div>
      </div>    

        `;
    cards.appendChild(newElement);
    loading(false);
  });
};

// search input

const searchBtn = () => {
  const input = document.getElementById("input");
  const inputValue = input.value;
  phonesData(inputValue);
};

//loading

const loading = (isLoading) => {
  const loading = document.getElementById("loading");
  if (isLoading) {
    loading.classList.remove("hidden");
  } else {
    loading.classList.add("hidden");
  }
};

// phonesData("iphone");
