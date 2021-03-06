import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import NoteContext from "../../Context/Notes/NoteContext";

export default function AddNote({ tags, showAlert }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("General");

    const onTitleChange = (event) => {
        let newTitle = event.target.value;
        setTitle(newTitle);
    };

    const onDescriptionChange = (event) => {
        let newDescription = event.target.value;
        setDescription(newDescription);
    };

    const onTagChange = (newTag) => {
        setTag(newTag);
    };

    const noteContext = useContext(NoteContext);
    const { addNote } = noteContext;
    const createNote = () => {
        const note = {
            title: title,
            description: description,
            tag: tag,
        };

        addNote(note);
        setTitle("");
        setDescription("");
        showAlert("success", "Note added successfully!");
    };

    return (
        <div>
            <h3>Add a new Note</h3>
            <hr />
            <Form>
                <Form.Group>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        placeholder="Enter title"
                        value={title}
                        onChange={onTitleChange}
                        required
                    />
                </Form.Group>
                <br />
                <Form.Group>
                    {/* style added to display new lines properly */}
                    <label htmlFor="description">Description</label>
                    <textarea
                        style={{ whiteSpace: "pre-line" }}
                        rows={4}
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        placeholder="Enter a description"
                        value={description}
                        onChange={onDescriptionChange}
                        required
                    ></textarea>
                </Form.Group>
                <br />
                <Form.Group>
                    Add a tag: &nbsp;
                    {tags.map((tag) => {
                        return (
                            <Form.Check
                                inline
                                key={tag.color}
                                type="radio"
                                name="tag"
                                label={tag.name}
                                onChange={() => onTagChange(tag.name)}
                            />
                        );
                    })}
                </Form.Group>
                <br />
                <Form.Group>
                    <Button
                        disabled={
                            title.length === 0 || description.length === 0
                        }
                        variant="primary"
                        onClick={createNote}
                    >
                        + Add
                    </Button>
                </Form.Group>
            </Form>
        </div>
    );
}

AddNote.propTypes = {
    tags: PropTypes.array,
};
