// Action Creator - ф-ция которая возвращает объект
export const setSortBy = ({ type, order }) => ({
  type: 'SET_SORT_BY',
  payload: { type, order }, // принимает какие-то дополнительные данные
})

// Action - просто возвращает объект
// const setSortBy = {
// 	type: 'SET_SORT_BY',
// 	payload: name
// }

// Action Creator
export const setCategory = (catIndex) => ({
  type: 'SET_CATEGORY',
  payload: catIndex,
})
