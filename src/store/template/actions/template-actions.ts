import { createAction } from '@reduxjs/toolkit'
import { TEMPLATE_SET_NAME } from '../constants'

export const setTemplateNameAction = createAction<string>(TEMPLATE_SET_NAME)

// export const fetchProfileAsync = createAsyncThunk(PROFILE__GET, async (__, thunkApi) => {
//   try {
//     const profile = await getProfileRequest();
//     if (profile) {
//       thunkApi.dispatch(setProfileAction(profile));
//     }
//   } catch (err) {
//     // If profile has an error
//     // Redirect on login page with errors (maybe?)
//     thunkApi.dispatch(logoutAction());
//   }
// });
