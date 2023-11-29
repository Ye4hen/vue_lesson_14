import { createStore } from "vuex";
import { shopInfo, providersData, productsData, galleryData } from "@/data/shopData";

export default createStore({
	state: {
		shopInfo: {},
		productsList: [],
		providersList: [],
		galleryList: [],
		errorMessage: null,
		selectedList: []
	},
	getters: {
		shopInfo: ({ shopInfo }) => shopInfo,
		productsList: ({ productsList }) => productsList,
		providersList: ({ providersList }) => providersList,
		selectedList: ({ selectedList }) => selectedList,
		galleryList: ({ galleryList }) => galleryList,
		errorMessage: ({ errorMessage }) => errorMessage,
		getProductById: (state) => (productId) => state.productsList.productsList.find((product) => product.id == productId),
		getProviderById: (state) => (providerId) => state.providersList.providersList.find((provider) => provider.id == providerId),
		getSelectedList: (state, getters) => {
			return state.selectedList.reduce((selectedItems, item) => {
				const product = getters.getProductById(item.productId);
				const provider = getters.getProviderById(item.providerId);

				if (product && provider) {
					selectedItems.push({
						id: item.id,
						productName: product.name,
						providerName: provider.title,
					});
				}
				return selectedItems;
			}, []);
		}
	},
	mutations: {
		setShopInfo(state, list) {
			state.shopInfo = list
		},
		setProductsList(state, list) {
			state.productsList = list
		},
		setProvidersData(state, list) {
			state.providersList = list
		},
		setGalleryData(state, list) {
			state.galleryList = list
		},
		removeProduct(state, productIndex, productId) {
			state.productsList.productsList.splice(productIndex, 1)
			state.selectedList = state.selectedList.filter((item) => item.productId !== productId)
		},
		updateProduct(state, productObj) {
			const productIndex = state.productsList.productsList.findIndex((product) => product.id === productObj.id)
			state.productsList.productsList[productIndex] = productObj
		},
		addProduct(state, product) {
			state.productsList.productsList.push(product)
		},
		setErrorMessage(state, message) {
			state.errorMessage = message
		},
		addSelectedItem(state, item) {
			state.selectedList.push(item)
		},
		deleteSelectedItemByProductId(state, productId) {
			state.selectedList = state.selectedList.filter((item) => item.productId !== productId)
		},
	},
	actions: {
		setShopInfo({ commit }) {
			commit("setShopInfo", shopInfo)
		},
		setProductsList({ commit }) {
			commit("setProductsList", productsData)
		},
		setProvidersData({ commit }) {
			commit("setProvidersData", providersData)
		},
		setGalleryData({ commit }) {
			commit("setGalleryData", galleryData)
		},
		removeProduct({ commit, dispatch }, productIndex, productId) {
			commit("removeProduct", productIndex)
			dispatch("deleteSelectedItemByProductId", productId, { root: true })
		},
		updateProduct({ commit }, productObj) {
			commit("updateProduct", productObj)
		},
		addProduct({ commit }, product) {
			commit("addProduct", {
				id: new Date().getTime(),
				...product
			})
		},
		setErrorMessage({ commit }, message) {
			commit("setErrorMessage", message)
		},
		addSelectedItem({ commit }, item) {
			commit("addSelectedItem", item)
		},
	},
	modules: {},
});
