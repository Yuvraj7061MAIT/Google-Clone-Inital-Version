import React from "react";
import { useStateValue } from "../../contex/StateProvider/Stateprovider";
import "./SearchPage.css";
import { Link } from "react-router-dom";
import Search from "../../pages/Search/Search";
import SearchIcon from "@mui/icons-material/Search";
import { Description, Image, LocalOffer, Room } from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import useGoogleSearch from "../../components/useGoogleSearch/useGoogleSearch";
import { useLocation } from "react-router-dom";
import Responce from "../../key/Responce";

const SearchPage = () => {
  const [{ term }] = useStateValue(); // Get search term from context
  const location = useLocation(); // Get location object
  const queryParams = new URLSearchParams(location.search); // Parse query parameters
  const searchTerm = queryParams.get("term") || term; // Get search term from URL or context

  // const { data } = useGoogleSearch(searchTerm); // Fetch data using the search term
  const  data = Responce;


  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
            className="searchPage_logo"
          />
        </Link>

        <div className="searchPage_headerBody">
          <div className="searchPage_searchBarContainer">
            <Search hideButtons />
          </div>

          <div className="searchPage_options">
            <div className="searchPage_optionLeft">
              <div className="searchPage_option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage_option">
                <Description />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage_option">
                <Image />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage_option">
                <LocalOffer />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage_option">
                <Room />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage_option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>

            <div className="searchPage_optionRight">
              <div className="searchPage_option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage_option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ensure the data is displayed correctly */}
      {data && data.searchInformation ? (
        <div className="searchPage_results">
          <p className="searchpage_resultCont">
            About {data.searchInformation.formattedTotalResults} results (
            {data.searchInformation.formattedSearchTime} seconds) for "{searchTerm}"
          </p>
        </div>
      ) : (
        <p>No results found</p> // Add fallback content to help debug
      )}

      {/* Map through the results */}
      {data?.items?.length > 0 ? (
        data.items.map((item, index) => (
          <div className="searchPage_result" key={item.link || index}>
            <a href={item.link}>
              {/* Conditionally render an image if available */}
              {item.pagemap?.cse_image?.length > 0 &&
                item.pagemap.cse_image[0]?.src && (
                  <img
                    className="searchPage_resultImage"
                    src={item.pagemap.cse_image[0].src}
                    alt={item.title}
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      marginRight: "8px",
                      verticalAlign: "middle",
                    }}
                  />
                )}
              <h2 style={{ display: "inline-block" }}>{item.title}</h2>
            </a>
            <p className="searchPage_result_snipit">{item.snippet}</p>
          </div>
        ))
      ) : (
        <p>No results available for "{searchTerm}"</p>
      )}
    </div>
  );
};

export default SearchPage;
