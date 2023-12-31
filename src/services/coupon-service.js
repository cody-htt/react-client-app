import { getCouponBaseUrl } from './helper/getBaseUrl';
import axios from 'axios';

export const getAllCoupons = async (accessToken) => {
	return await axios.get(getCouponBaseUrl('/list'), { headers: { accessToken } });
};

export const createCoupon = async (coupon, accessToken) =>
	await axios.post(getCouponBaseUrl(''), { coupon }, { headers: { accessToken } });

export const removeCoupon = async (accessToken, couponId) =>
	await axios.delete(getCouponBaseUrl(`/${couponId}`), { headers: { accessToken } });
