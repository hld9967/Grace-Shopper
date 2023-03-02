import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProductAsync } from '../features/allProductsSlice';

export default function deleteProduct({ id }) {
    const dispatch = useDispatch();

    const onClickHandle = async () => {
        try {
            await dispatch(deleteProductAsync(id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <button onClick={onClickHandle} title="Delete this product">
            「X」
        </button>
    );
}