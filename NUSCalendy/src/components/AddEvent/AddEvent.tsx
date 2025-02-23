import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import axios from "axios";

function AddEvent() {
    type Category = {
        name: string,
    }

    const API_URL = import.meta.env.VITE_API_URL;
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [categories, setCategories] = useState<Category[]>([]);
    const [category, setCategory] = useState<Category>();
    const navigate = useNavigate();



    // On submitting form, send POST request to server with the post data
    async function handleSubmit(e) {
        e.preventDefault();

        if(!category) {
            throw new Error("Must enter category")
        }

        // Get token to verify current user to fetch their comment data
        const eventData = {
            event: {title, description, category: category},
        }

        try {
            const response = await axios.post(`${API_URL}/events`, eventData, {
                headers: {
                    "Content-Type": "application/json",
                },
            })

            navigate(`/`);
        } catch(e) {
            alert("Failed to create event");
        }
    }

    // Fetch available categories
    useEffect(() => {
        console.log(API_URL);
        fetch(`${API_URL}/categories.json`)
            .then(response => response.json())
            .then(data => {setCategories(data)});
    }, [])

    return (
        <div className="MainContainer">
            <div className="Content">
                <div className="CreatePostContainer">
                    <h1>Create new post</h1>
                    <FormControl
                        onSubmit={handleSubmit}
                        className="Form CreatePost"
                        component="form" // Ensures this acts as a form element
                        sx={{
                            m: 1,
                            minWidth: 200,
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: "column",
                            gap: 2,
                            width: '100%',
                            '& .MuiOutlinedInput-root': {
                            height: '3rem',
                            },
                            '& .MuiSvgIcon-root': {
                            fontSize: '1rem',
                            },
                        }}
                    >
                        <FormControl>
                            <OutlinedInput
                                className="CustomTextField"
                                type="text"
                                id="title"
                                placeholder="Title"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                // sx={{
                                //     minWidth: '350px',
                                // }}
                                required
                            />
                        </FormControl>
                        <FormControl sx={{ minWidth: 200, marginBottom: 2 }}>
                            <InputLabel id="demo-simple-select-label" className="CustomLabel">Category</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={sortOption}
                            label="Category"
                            onChange={e => setCategory(e.target.value as Category)}
                            >
                                {categories.map((category => <MenuItem value={category.name}>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</MenuItem>))}
                            </Select>
                        </FormControl>
                        <div>
                            <TextField
                                fullWidth
                                id="filled-textarea"
                                className="CustomTextField"
                                placeholder="Description"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                multiline
                                variant="filled"
                                required
                            />
                        </div>
                        <div className="PostOptions">
                            <Button
                                onClick={() => navigate("/")}
                                variant="contained"
                                type="submit"
                                sx={{
                                    width: '10% !important',
                                }}
                            >
                                    Cancel
                            </Button>
                            <Button
                                variant="contained"
                                type="submit"
                                sx={{
                                    width: '10% !important',
                                }}
                            >
                                    Submit
                            </Button>
                        </div>
                    </FormControl>
                </div>
            </div>
        </div>
    )
}

export default AddEvent;