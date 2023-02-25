import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

export default function AddCustomer(props) {
    const [name, setName] = useState('');
    const [industry, setIndustry] = useState('');

    const [show, setShow] = useState(props.show);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button
                variant="primary"
                onClick={props.toggleShow}
                className="block mx-auto m-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                +Add Customer
            </button>

            <Modal
                show={props.show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        onSubmit={(e) => {
                            handleClose();
                            e.preventDefault();
                            console.log('Hello from Edit Customer onSubmit');
                            console.log(props.id, name, industry);
                            setName('');
                            setIndustry('');
                            props.newCustomer(name, industry);
                        }}
                        id="editModal"
                        className="w-full max-w-sm"
                    >
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="name"
                                >
                                    Customer Name
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="name"
                                    placeholder="Google"
                                    type="text"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </div>
                        </div>

                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="industry"
                                >
                                    Industry
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="industry"
                                    placeholder="Manufacturing"
                                    type="text"
                                    value={industry}
                                    onChange={(e) => {
                                        setIndustry(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        form="editModal"
                    >
                        Add
                    </button>
                    <button
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={props.toggleShow}
                    >
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
