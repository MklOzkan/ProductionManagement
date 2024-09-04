import * as Yup from 'yup';

export const OrderSchema = Yup.object({
    customerName: Yup.string().required('Müşteri adı boş olamaz'),

    gasanNo: Yup.string()
        .matches(/\d{4} [A-Z]{1,3} \d{6}/, 'Invalid Gasan No format')
        .required('Gasan numarası boş olamaz'),

    orderNumber: Yup.string()
        .matches(/\d{6}/, 'Invalid Order No format')
        .required('Sipariş numarası boş olamaz'),

    deliveryDate: Yup.date()
        .min(new Date(), 'Teslimat tarihi bugünden önce olamaz') // Matches @Future annotation
        .required('Teslimat tarihi boş olamaz'),

    orderType: Yup.string().required('Sipariş tipi boş olamaz'),

    orderQuantity: Yup.number()
        .integer('Sipariş adedi bir sayı olmalı')
        .required('Sipariş adedi boş olamaz'),

    orderStatus: Yup.string().required('Sipariş durumu boş olamaz'),

    readyMilCount: Yup.number()
        .integer('Hazır Mil Miktarı bir sayı olmalı')
        .default(0) // Default to 0 if not provided
});
