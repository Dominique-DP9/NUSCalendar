import { useState } from 'react'
import './Search.css'

interface SearchProps {
    setSearchTerm: (term: string) => void; 
  }

export const Search = ({setSearchTerm}: SearchProps) => {
    const [inputValue, setInputValue] = useState<string>("")
    return (
        <div className="searchBar">
            <input
                id="input"
                placeholder="Search Events"
                type="text"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value)
                    //setSearchTerm(e.target.value)
                    if (e.target.value === "") {
                        setSearchTerm("")
                    }
                    console.log(e.target.value)
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