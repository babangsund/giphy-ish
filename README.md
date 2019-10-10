# giphy-ish

Giphy. Ish. Uses the Giphy search API to demonstrate infinite scroll, using the `IntersectionObserver` API.

## Getting started

### READ ME FIRST

In order to use the giphy API, you will need an API key, which can be obtained [here](https://developers.giphy.com/docs/api).
Once you have a key, simply put it in `.env.local` at the project root, like so:

	REACT_APP_API_KEY=<api_key>

### Clone the repository.

    $ git clone https://github.com/babangsund/giphy-ish

### Install dependencies 

Using [npm](https://www.npmjs.com/):

    $ npm install

Using [yarn](https://yarnpkg.com/):

    $ yarn install

### Run it

Using [npm](https://www.npmjs.com/):

    $ npm start

Using [yarn](https://yarnpkg.com/):

    $ yarn start

## Details

### Dependencies

This project was bootstrapped with [create react app](https://github.com/facebook/create-react-app).
Additional dependencies have been installed:

1.  [`Prettier`](https://prettier.io/): Code formatting.
2. [`flow-bin`](https://github.com/facebook/flow): Static type checker.
3. [`jest`](https://github.com/facebook/jest): Testing framework. (Comes with CRA, though.)
4. [`styled-components`](https://github.com/styled-components/styled-components): Locally scoped css components.

### Directories

- **`components`**: *Search, List, Item, Spinner.* - General purpose components and scaffolding.
- **`giphy`**:  Gateway between the Giphy API, and this application.
	-	`GiphyCache`: Singleton response cache with a `ttl` of 3 minutes.
	-	`GiphyClient`: Implements `fetchQuery` and `fetchMore`, to fetch and "paginate" data in a normalized state.
	-	`useGiphy`: Hook that wraps a `GiphyClient` instance in relevant state.
- **`icons`**:  A "collection" of svg icons. There's currently just the one. :^)
- **`providers`**: All app context providers.
	- `StyleProvider`: Provides the `styled-components` theme, along with global styling and a set of theme functions.
- **`utils`**: General utility.
	- `datetime`: exports `formatRelative`.
	- `types`:  exports `type Ref`, which is just a common shorthand for `{ current: ?HTMLElement }`.
	- `hooks`:  General purpose hooks.
		- `useBool`: Just `useState`, with booleans. Returns `[bool, setTrue, setFalse]`.
		- `useInfiniteScroll`: A simple implementation of `IntersectionObserver`. Takes a ref, and a callback.

## Credits

giphy-ish is built and maintained by **babangsund**.  
[@blog](https://babangsund.com/).  
[@github](https://github.com/babangsund).  
[@twitter](https://twitter.com/babangsund). 
