import './SortTime.css'

export const SortTime = ({sortOldest,handleSortTime}) => {
    return (
        <button
            className="sortTimeButt"
            onClick = {() => {handleSortTime()}}
        >
            Sort by time {sortOldest ? "(oldest)" : "(latest)"}
        </button>
    )
}