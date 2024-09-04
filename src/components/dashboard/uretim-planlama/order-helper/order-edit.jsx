'use client';

import React, { useState } from 'react';
import {
    Container,
    Form,
    Button,
    Card,
    Col,
    Row,
    CardBody
} from 'react-bootstrap';
import {  updateOrderAction } from '@/actions/order-actions';
import { swAlert } from '@/helpers/swal';
import { useFormState } from 'react-dom';
import { initialResponse } from '@/helpers/form-validation';
import {
    BackButton,
    MaskedInput,
    SelectInput,
    SubmitButton,
    TextInput
} from '@/components/common/form-fields';
import { useRouter } from 'next/navigation';

const OrderEdit = ({ order}) => {
     const [state, setState] = useState(initialResponse);
     const router = useRouter();

     const handleSubmit = async (e) => {
         e.preventDefault();
         const formData = new FormData(e.target);
         formData.append('id', order.id);

         try {
             const result = await updateOrderAction(formData);

             if (result.ok) {
                 swAlert(result.message, 'success');
                 router.push('/dashboard/urun-planlama'); // Navigate back after success
             } else {
                 setState(result); // Update the state with errors if any
                 swAlert(result.message || 'Update failed', 'error');
             }
         } catch (err) {
             swAlert(err.message || 'An error occurred', 'error');
             console.error('Order update error:', err);
         }
     };

    return (
        <Container
            fluid
            className="d-flex justify-content-center align-items-center "
            style={{ minHeight: '100vh' }}
        >
            <Card style={{ maxWidth: '600px', width: '100%' }}>
                <Card.Body>
                    <Card.Title>Yeni Siparis</Card.Title>
                    <Form noValidate onSubmit={handleSubmit}>
                        <input type="hidden" name='id' value={order.id}  />
                        <TextInput
                            type="text"
                            name="customerName"
                            className="mb-3"
                            label="Müşteri Adı"
                            error={state?.errors?.customerName}
                            defaultValue={order.customerName}
                            required
                        />

                        <TextInput
                            type="text"
                            name="gasanNo"
                            className="mb-3"
                            label="Gasan No"
                            error={state?.errors?.gasanNo}
                            defaultValue={order.gasanNo}
                            required
                        />

                        <TextInput
                            type="text"
                            name="orderNumber"
                            className="mb-3"
                            label="Sipariş No"
                            error={state?.errors?.orderNumber}
                            defaultValue={order.orderNumber}
                            required
                        />

                        <TextInput
                            type="date"
                            name="deliveryDate"
                            className="mb-3"
                            label="Teslim Tarihi"
                            error={state?.errors?.deliveryDate}
                            defaultValue={order.deliveryDate}
                            required
                        />

                        <TextInput
                            type="text"
                            name="orderType"
                            className="mb-3"
                            label="Sipariş Türü"
                            error={state?.errors?.orderType}
                            defaultValue={order.orderType}
                            required
                        />

                        <TextInput
                            type="number"
                            name="orderQuantity"
                            className="mb-3"
                            label="Sipariş Miktarı"
                            error={state?.errors?.orderQuantity}
                            defaultValue={order.orderQuantity}
                            required
                        />

                        <TextInput
                            type="number"
                            name="readyMilCount"
                            className="mb-3"
                            label="Hazir Mil Miktarı"
                            error={state?.errors?.readyMilCount}
                            defaultValue={order.readyMilCount}
                            required
                        />

                        <TextInput
                            type="text"
                            name="orderStatus"
                            className="mb-3"
                            label="Sipariş Durumu"
                            value={'İşlenmeyi Bekliyor'}
                            readOnly
                        />
                        <Button
                            variant="primary"
                            type="submit"
                            className="w-100"
                        >
                            Kaydet
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default OrderEdit;
