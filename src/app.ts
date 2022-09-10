let data;
const pageSize = 5;
let currentPage = 1;

interface user {
  id: string;
  row: number;
  gender: string;
  age: number;
}

const startApp = async () => {
   // Select the table (tbody)
   currentPage >= 2 ? hideLoading : displayLoading()
  // get the data
  let resp = await fetch(
    `https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84&page=${currentPage}`
  );
  data = await resp.json();
  hideLoading()
  const tableData = data.results[0];
  // ====== LOG START ======
  console.log('\n');
  console.group('Log');
  console.log(tableData);
  console.groupEnd();
  console.log('\n');
  // ====== LOG END ======
  
  renderTable(tableData[currentPage]);
};


const loading: any = document.querySelector('#loading');

const displayLoading = () => {
  loading.style.display = 'block';
};

const hideLoading = () => {
  loading.style.display = 'none';
};
    
const renderTable = async (data: user[]) => {
  const table = document.querySelector("#recordsTable tbody") as any;
  // create html
  let result = "";
  data.forEach((el: user) => {
    console.log(el);
    result += `<tr id="${el.id}">
     <td>${el.row}</td>
     <td>${el.gender}</td>
     <td>${el.age}</td>
     </tr>`;
  });

  table.innerHTML = result;
};

const nextPage = () => {
  currentPage += 1;
  startApp();
};

const prevPage = () => {
  if (currentPage <= 1) {
    const button = document.getElementById("prevButton")?.setAttribute("disabled", "");
    return;
  }
  document.getElementById("prveButton")?.removeAttribute("disabled");
  currentPage -= 1;
  startApp();
};

document.addEventListener('DOMContentLoaded', startApp);