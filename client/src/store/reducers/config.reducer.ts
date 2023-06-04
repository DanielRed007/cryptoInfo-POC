import { SET_COLOR_THEME } from '../constants/config.constants';

export interface Config{
    theme: string;
}

const initialState: Config = {
  theme: 'dark',
};

export const configReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_COLOR_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
