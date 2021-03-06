# Burger Builder with React.js

[Try Burger Builder App Now!](https://react-my-burger-shirleyxting.web.app/)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


<p float="left">
  <img src="imgs/mobile.png" width="160" />
  <img src="imgs/checkout.png" width="160" /> 
  <img src="imgs/summary.png" width="160" /> 
  <img src="imgs/contact.png" width="160" /> 
  <img src="imgs/orders.png" width="160" /> 
</p>

## Planning an App in React 

1. **Component Tree/ Component Structure**: you might already have a design, and it's time to split the design into components/ component tree. Get an idea of what should become its own component and what shouldn't.  
2.** Application State (data)**: which data do you plan to use and manipulate in your app? 
3. **Components Vs. Containers**: which components in the app should be stateless or functional (dubm), and which should be stateful?

Plans can change, but having an initial plan is very important and can help speed up processes (especially if you're working with someone else on the project).

- **App name**: Burger Builder 
- **Goal**: users can use it to add ingridients and build a burger
- **Top UI**: header with a navbar: orders | builder | logo
- **Main UI**: 
	- in the middle section the actual burger is getting built, and we have a preview. 
	- Ingridients are added dynamically as we add them. 
	- We need controls below the burger. 
	- `+` `-` buttons to add or remove ingredients. 
	- Checkout button to buy the burger
	- Price below our burger

This is the base layout, that can already split into a number of components: 


```
|--App
	|--Layout      
		│--Toolbar
			|--DrawerToggle
			|--Logo
			|--NavigationItems
		|--SideDrawer
			|--Logo
			|--NavigationItems
		|--	Backdrop
		|--PropsChildren
			|--BurgerBuilder (page, we'll add more pages later)
				|--BuildControls
					|--List of build control components
					|--OrderButton 
				|--BrugerPreview
					|--List of ingredients below the burger
				|--Modal (checkoutPreview)
					|--reusable modal to use all kinds of things (confirmation, order summary, etc)
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.