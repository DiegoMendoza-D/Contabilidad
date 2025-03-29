import axios from 'axios';

const API_URL = 'http://localhost:5000/transacciones'; // Ajusta según tu puerto backend

// Obtener todas las transacciones
export const getTransacciones = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener transacciones:', error);
        throw error;
    }
};

// Crear una nueva transacción
export const createTransaccion = async (transaccion) => {
    try {
        const response = await axios.post(API_URL, transaccion);
        return response.data;
    } catch (error) {
        console.error('Error al crear transacción:', error);
        throw error;
    }
};

// Actualizar una transacción
export const updateTransaccion = async (id, transaccion) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, transaccion);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar transacción:', error);
        throw error;
    }
};

// Eliminar una transacción
export const deleteTransaccion = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error('Error al eliminar transacción:', error);
        throw error;
    }
};
