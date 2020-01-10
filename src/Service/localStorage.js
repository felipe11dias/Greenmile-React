export const USER_DATA = "@user_data";

export const setUserData = (user_data) => {
   localStorage.setItem(USER_DATA, JSON.stringify(user_data));
 };

 export const getUserData = () => localStorage.getItem(USER_DATA);