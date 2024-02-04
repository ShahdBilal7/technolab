import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Stores } from "./constants.js";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const MoveQtyForm = ({show,handleClose}) => {
  const { handleSubmit, control, setValue, watch } = useForm();
  const StoresData = Stores.map((status, index) => ({
    value: index,
    label: status,
  }));
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Move Between Stores</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form >
          <Form.Group controlId="fromItems" className="mb-3">
            <Form.Label>Source Store :</Form.Label>
<Select dir="rtl" className="custom-select"   defaultValue={StoresData[0]}
options={StoresData}>
                
                </Select>
          
        
          </Form.Group>

          <Form.Group controlId="toItems" className="mb-3">
            <Form.Label>Destination Store :</Form.Label>
            <Select className="custom-select" dir="rtl"    defaultValue={StoresData[0]}
            options={StoresData}>
                            
                            </Select>
          </Form.Group>

          <Form.Group controlId="quantity" className="mb-3">
            <Form.Label>Quantity : </Form.Label>
            <Controller
              name="quantity"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <Form.Control
                  type="text"
                  {...field}
                  
                />
              )}
            />
           <p className="text-danger error-message"></p>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <button  className="submit" type="submit" >
              Submit
            </button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default MoveQtyForm;
