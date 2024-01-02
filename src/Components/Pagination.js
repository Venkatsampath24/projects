import React from "react";


function Pagination(props) {
 
    
    const{pageNumber, previousPage , nextPage} = props;

  
  return (
    <div className="flex justify-center space-x-6 pt-6">
      <div
          className="border rounded-xl bg-purple-600 cursor-pointer px-6 p-1 hover:bg-violet-600 "
          onClick={previousPage}
        >
          Previous Page
      </div>
      <div>
        <h2 className="border rounded-xl p-2  font-bold bg-gray-400">{pageNumber}</h2>
      </div>
      <div
          className="border rounded-xl bg-purple-600 cursor-pointer px-6 p-1 hover:bg-violet-600"
          onClick={nextPage}
        >
          Next Page
      </div>
    </div>
  );
}

export default Pagination;
