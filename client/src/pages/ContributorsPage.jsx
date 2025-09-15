import React, { useState, useMemo } from "react";
import NavBar from "../components/Navbar";
import HelloCard from "../components/HelloCard";
import { contributorsData } from "../data/contributorsData";

const ContributorsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Filter contributors based on search term
  const filteredContributors = useMemo(() => {
    return contributorsData.filter(contributor =>
      contributor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredContributors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentContributors = filteredContributors.slice(startIndex, endIndex);

  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  // Handle pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#8d99ae]">
      {/* NavBar Section - Same as Landing Page */}
      <div className="mt-5">
        <NavBar />
      </div>
      
      {/* Contributors Content */}
      <div className="flex-1 py-10">
        <div className="container mx-auto px-4">
         
          <h1 className=" text-5xl lg:text-7xl font-bold text-center mb-4">
            OpenHello Contributors
          </h1>
        

          {/* Search Bar */}
          <div className= "max-w-70 sm:max-w-md mx-auto mb-8 ">
            <div className="relative ">
              <input
                type="text"
                placeholder="Search contributors by name..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-4 py-3 pl-12 pr-4 text-gray-600 bg-white border-2  rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setCurrentPage(1);
                  }}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Results Info */}
          <div className="text-center m-6">
            <p className="text-base font-medium">
              {searchTerm ? (
                <>
                  Showing {filteredContributors.length} result{filteredContributors.length !== 1 ? 's' : ''} 
                  for "<span className="font-semibold text-white">{searchTerm}</span>"
                  {filteredContributors.length > itemsPerPage && (
                    <span> (Page {currentPage} of {totalPages})</span>
                  )}
                </>
              ) : (
                <>
                  Showing {contributorsData.length} total contributors
                  {contributorsData.length > itemsPerPage && (
                    <span> (Page {currentPage} of {totalPages})</span>
                  )}
                </>
              )}
            </p>
          </div>

          {/* Contributors Grid */}
          {currentContributors.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-y-12 justify-items-center mb-12">

              {currentContributors.map((contributor, index) => (
                <HelloCard
                  key={`${contributor.name}-${startIndex + index}`}
                  name={contributor.name}
                  photoUrl={contributor.photoUrl}
                  githubUrl={contributor.githubUrl}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No contributors found
              </h3>
              <p className="text-gray-200 mb-4">
                {searchTerm ? `No contributors match "${searchTerm}"` : "No contributors available"}
              </p>
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setCurrentPage(1);
                  }}
                  className="bg-[#] text-white px-4 py-2 rounded-lg hover:bg-[#ef233c] transition duration-200"
                >
                  Clear Search
                </button>
              )}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mb-8">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition duration-200 ${
                  currentPage === 1
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-purple-50 border-2 '
                }`}
              >
                Previous
              </button>

              {/* Page Numbers */}
              {getPageNumbers().map((pageNumber, index) => (
                <button
                  key={index}
                  onClick={() => pageNumber !== '...' && handlePageChange(pageNumber)}
                  disabled={pageNumber === '...'}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition duration-200 ${
                    pageNumber === currentPage
                      ? 'bg-[#ef233c]'
                      : pageNumber === '...'
                      ? 'bg-white text-gray-400 cursor-default'
                      : 'bg-white text-gray-700 hover:bg-purple-50 border-2'
                  }`}
                >
                  {pageNumber}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition duration-200 ${
                  currentPage === totalPages
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-purple-50 border-2'
                }`}
              >
                Next
              </button>
            </div>
          )}

         
        </div>
      </div>
    </div>
  );
};

export default ContributorsPage;
