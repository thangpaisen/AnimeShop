import AsyncStorage from '@react-native-async-storage/async-storage';


export const getDataHistorySearch = () => async (dispatch) => {
  try {
    const jsonValue = await AsyncStorage.getItem('HISTORY_SEARCH')
    const data =  jsonValue != null ? JSON.parse(jsonValue) : [];
    dispatch(setDataHistorySearch(data))
  } catch(e) {
    console.log(e)
  }
}

export const setDataHistorySearch =(data) => {
  return {
        type:'SET_DATA_HISTORY_SEARCH',
        payload:data,
    }
}

export const addItemSearch = (value) => {
    return {
        type:'ADD_ITEM_SEARCH',
        payload:value,
    }
}

export const deleteHistorySearch = (value)=> {
    return {
        type:'DELETE_HISTORY_SEARCH',
        payload:value,
    }
}
