import Axios, { AxiosRequestConfig } from 'axios';
import { configure } from 'axios-hooks';
import LRU from 'lru-cache';
import { getCookie } from 'cookies-next';

const urlAxios: string = `http://${process.env.BACK_URL}:${process.env.BACK_PORT}`;

export const configAxios: AxiosRequestConfig = {
	baseURL: urlAxios,
	//headers: { Authorization: (typeof window !== 'undefined' && localStorage.getItem('token')) || '' },
};

const axios = Axios.create(configAxios);

axios.defaults.headers.post['Content-Type'] = 'application/json';

//For Send token
axios.interceptors.request.use(async (config: any) => {
	//console.log('interceptor', localStorage.getItem('token'));
	config.headers['Authorization'] = getCookie('token');
	return config;
});

const cache = new LRU({ max: 10 });

configure({ axios, cache });

export default axios;
