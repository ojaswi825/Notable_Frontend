import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

function UpdateNote(props) {
    let oldTitle = "";
    let oldDescription = "";

    if (props.note != null) {
        oldTitle = props.note.title;
        oldDescription = props.note.description;
    }

    const [newTitle, setNewTitle] = useState(oldTitle);
    const [newDescription, setNewDescription] = useState(oldDescription);

    const onTitleChange = (e) => {
        setNewTitle(e.target.value);
    };

    const onDescriptionChange = (e) => {
        setNewDescription(e.target.value);
    };

    return (
        <div>
            <Modal
                show={props.show}
                onShow={props.onShow}
                onHide={props.onHide}
            >
                <Modal.Header>
                    <Modal.Title>Update Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="noteTitleUpdate">New Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="noteTitleUpdate"
                                name="noteTitleUpdate"
                                value={newTitle}
                                onChange={onTitleChange}
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="noteDescriptionUpdate">
                                New Description
                            </label>
                            <textarea
                                rows={4}
                                type="text"
                                className="form-control"
                                id="noteDescriptionUpdate"
                                name="noteDescriptionUpdate"
                                value={newDescription}
                                onChange={onDescriptionChange}
                            ></textarea>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onClose}>
                        Cancel
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() =>
                            //key can't be used as a prop so using id instead
                            props.onSubmit(props.id, newTitle, newDescription)
                        }
                    >
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

UpdateNote.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func,
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
};

export default UpdateNote;
