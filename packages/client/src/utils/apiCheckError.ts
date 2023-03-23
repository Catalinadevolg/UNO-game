import { AxiosResponse } from 'axios';
export const apiErrorCheck = (
  res: AxiosResponse<any, any> | undefined
): object | unknown => {
  if (res && res.status.toString().startsWith('40') && 'reason' in res.data) {
    // на будущее надо расширить область проверки пока в виде заглушки
    return { reason: res.data.reason };
  }
};