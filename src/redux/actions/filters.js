// Action Creator - ф-ция которая возвращает объект
const setSortBy = name => ({
	type: 'SET_SORT_BY',
	payload: name // принимает какие-то дополнительные данные
})

// Action - просто возвращает объект
// const setSortBy = {
// 	type: 'SET_SORT_BY',
// 	payload: name
// }

// Action Creator
const setCategory = catIndex => ({
	type: 'SET_CATEGORY',
	payload: catIndex
})