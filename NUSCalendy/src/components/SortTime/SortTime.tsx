import './SortTime.css'

export const SortTime = ({handleSortTime}) => {
    return (
        <button
            className="sortTimeButt"
            onClick = {() => {handleSortTime()}}
        >
            Sort by time
        </button>
    )
}