import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { useNavigate } from "react-router-dom"; // Updated to useNavigate
import { useStateValue } from "../../contex/StateProvider/Stateprovider";
import { actionType } from "../../contex/reducer /reducer";
import "./Search.css";


function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate(); // Updated to useNavigate

  const search = (e) => {
    e.preventDefault();
    if (input.trim()) {
      // Dispatch the search term to the global state
      dispatch({
        type: actionType.SET_SEARCH_TERM,
        term: input,
      });

      // Redirect to the search page with the input as a query parameter
      navigate(`/search?term=${encodeURIComponent(input)}`);
    }
  };

  return (
    <div className="search-container">
      <form className="search-bar" onSubmit={search}>
        <MicIcon className="mic-icon" />
        <input
          type="text"
          placeholder="Search Google or type a URL"
          className="search-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <SearchIcon className="search-icon" />
      </form>

      {!hideButtons ? (
        <div className="buttons">
          <button type="submit" className="button" onClick={search}>
            Google Search
          </button>
          <button className="button" type="button">
            I'm Feeling Lucky
          </button>
        </div>
      ) : (
        <div className="buttons">
          <button type="submit" className="hide_button" onClick={search}>
            Google Search
          </button>
          <button className="hide_button" type="button">
            I'm Feeling Lucky
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;