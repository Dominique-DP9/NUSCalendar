
import { useEffect, useState } from 'react'
import './SortBar.css'
import { useEvent } from '../../../services/useEvent'

export const SortBar = ({selectedCategories, setSelectedCategories}) => {
    const { fetchCats } = useEvent(0)
    const [categories, setCategories] = useState<any[]>([])
    const buttColors = ['rgb(255, 105, 97, 0.5)', 'rgb(255, 180, 128, 0.5)', 'rgb(248, 243, 141, 0.5)', 'rgb(66, 214, 164, 0.5)', 'rgb(8, 202, 209, 0.5)', 'rgb(89, 173, 246, 0.5)',
        'rgb(157, 148, 255, 0.5)', 'rgb(199, 128, 232, 0.5)']

    const getCategories = async () => {
        const result = await fetchCats()
        setCategories(result)
        console.log(result)
    }

    useEffect(() => {
        getCategories()
    }, [])

    const handleCategoryChange = (category: string) => {
        setSelectedCategories((prevSelected) => {
            if (prevSelected.includes(category)) {
                // If already selected, remove it
                return prevSelected.filter((cat) => cat !== category);
            } else {
                // Else add it to the selection
                return [...prevSelected, category];
            }
        });
    };

    return (
        <div className="sortBar">
            <div className="">
                Sort by types
            </div>
            <div style={{padding: '10px'}}>
                {
                    categories.map((category) => {
                        return (
                            <div className="cate"
                            style={{backgroundColor: buttColors[categories.findIndex((e) => e.name == category.name)]}}
>
                                <label key={category}>
                                    <input
                                        type="checkbox"
                                        value={category.name}
                                        checked={selectedCategories.includes(category)}
                                        onChange={() => handleCategoryChange(category)}
                                    />
                                    {category.name}
                                </label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}