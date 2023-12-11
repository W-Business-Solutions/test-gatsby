import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import React, { useState, useEffect } from "react";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);

    return (
        <TextField
            type="search"
            onChange={(e) => setSearchTerm(e.target.value)}
            size="small"
            sx={{ height: "20px" }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton>
                            <Search />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
}

export default SearchBar;
