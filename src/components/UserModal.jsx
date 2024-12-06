import React, { useEffect, useState } from 'react';
import { FormField } from './components';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ClearIcon from '@mui/icons-material/Clear';

function UserModal(
    {
        btnName,
        heading,
        submitBtn,
        name = null,
        email = null,
        userId = null,
        editEmployee = null,
        addEmplooyee = null,
        deleteUser = null,
    }
) {
    const editInputArr = [
        {
            id: 1,
            label: 'Name',
            name: 'name',
            defaultValue: name
        },
        {
            id: 2,
            label: 'Email',
            name: 'email',
            defaultValue: email
        }
    ]

    const addInputArr = [
        {
            id: 1,
            label: 'Name',
            name: 'name',
            defaultValue: ''
        },
        {
            id: 2,
            label: 'Email',
            name: 'email',
            defaultValue: ''
        },
        {
            id: 3,
            label: 'Password',
            name: 'Password',
            defaultValue: ''
        },
    ]

    const [value, setValue] = useState(editInputArr.map((input) => input.defaultValue))
    const [addEmpValue, setAddEmpValue] = useState(addInputArr.map((input) => input.defaultValue))
    useEffect(() => {
        setValue(editInputArr.map((input) => input.defaultValue))
    }, [name, email])



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = () => {
        handleClose();
        if (addEmplooyee || editEmployee) {
            if (editEmployee) {
                editEmployee(userId, value[0], value[1])

            }
            else {
                addEmplooyee(addEmpValue[0], addEmpValue[1], addEmpValue[2])
                setAddEmpValue(addInputArr.map((input) => input.defaultValue))
            }
        }
        else
            deleteUser(userId)
    }

    

    return (
        <>
            <button
                className={
                    submitBtn === "Add" ?
                        "px-4 py-1 mx-auto text-sm text-indigo-500 font-semibold rounded-full border border-indigo-200 hover:text-white hover:bg-indigo-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        :
                        "hover:bg-gray-200 mr-2 rounded-sm"
                }
                onClick={handleShow}
            >
                {
                    btnName === "Edit" ?
                        <EditNoteIcon />
                        :
                        btnName === "Delete" ?
                            <ClearIcon />
                            :
                            btnName
                }
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{heading}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        heading != "Delete" ?
                            addEmplooyee ?
                                <FormField inputArr={addInputArr} value={addEmpValue} setValue={setAddEmpValue} />
                                :
                                <FormField inputArr={editInputArr} value={value} setValue={setValue} />
                            :
                            <p>Are you sure you want to delete this user?</p>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{ backgroundColor: submitBtn === "Delete" ? 'rgb(225, 0, 0)' : 'rgb(99, 102, 241)', border: 'none' }} onClick={handleSubmit}>
                        {submitBtn}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UserModal;