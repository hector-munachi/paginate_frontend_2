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

  // get the data
  let resp = await fetch(
    `https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84&page=${currentPage}`
  );
  data = await resp.json();
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
    
};

document.addEventListener('DOMContentLoaded', startApp);