import axios from 'axios';

const API_BASE = 'https://www.gocomet.com/api/assignment';

export const fetchHotelNames = async () => {
  const response = await axios.get(`${API_BASE}/hotels-name`);
  return response.data;
};

export const fetchHotelsList = async (page, size) => {
  const response = await axios.get(`${API_BASE}/hotels`, { params: { page, size } });
  return response.data;
};

export const fetchHotelDetails = async (hotelId) => {
  const response = await axios.get(`${API_BASE}/hotels/${hotelId}`);
  return response.data;
};
