import { useState } from 'react'
import './Search.css'

export const Search = ({setSearchTerm}) => {
    const [inputValue, setInputValue] = useState<string>("")
    return (
        <div className="searchBar">
            <input
                id="input"
                placeholder="Search"
                type="text"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value)
                    if (e.target.value === "") {
                        setSearchTerm("")
                    }
                }}
                onKeyDown={async (event) => {
                    if (event.key === "Enter") {
                        setSearchTerm(inputValue);
                    }
                }}
            />
        </div>
    )
}