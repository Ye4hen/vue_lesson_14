import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/products",
		name: "products",
		component: () =>
			import(/* webpackChunkName: "products" */ "../views/ProductsView.vue"),
	},
	{
		path: "/products/selector",
		name: "products_selector",
		component: () =>
			import(/* webpackChunkName: "products_selector" */ "../views/SelectorView.vue"),
	},
	{
		path: '/products/editor',
		name: 'product_editor-list',
		component: () =>
			import(/* webpackChunkName: "product_editor-list" */ "../views/ProductsListEditor.vue"),
	},
	{
		path: '/products/product_editor/:productId?',
		name: 'product_editor',
		component: () =>
			import(/* webpackChunkName: "product_editor" */ "../views/ProductEditor.vue"),
	},
	{
		path: "/providers",
		name: "providers",
		component: () =>
			import(/* webpackChunkName: "providers" */ "../views/ProvidersView.vue"),
	},
	{
		path: "/contacts",
		name: "contacts",
		component: () =>
			import(/* webpackChunkName: "contacts" */ "../views/ContactsView.vue"),
	},
	{
		path: "/shopping-rules",
		name: "rules",
		component: () =>
			import(/* webpackChunkName: "rules" */ "../views/RulesView.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
