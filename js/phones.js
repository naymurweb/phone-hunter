const phonesData = async (searchText, isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  showPhones(data.data, isShowAll);
};
const showPhones = (phones, isShowAll) => {
  // console.log(isShowAll);

  const cards = document.getElementById("card-container");
  const showAll = document.getElementById("showAll");

  if (phones.length > 9 && !isShowAll) {
    phones = phones.slice(0, 9);

    showAll.classList.remove("hidden");
  } else {
    showAll.classList.add("hidden");
  }
  if (isShowAll) {
    phones = phones;
  }

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

const searchBtn = (isShowAll) => {
  // console.log(isShowAll);
  loading(true);
  const input = document.getElementById("input");
  const inputValue = input.value;
  phonesData(inputValue, isShowAll);
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

// show all btn
const showAllBtn = () => {
  searchBtn(true);
};
// phonesData("iphone");
