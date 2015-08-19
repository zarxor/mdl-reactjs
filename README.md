# Material Design Lite for React JS
This project is under development and will be breaking.

**Do not use in production!**

[You can find documentation and examples here](https://zarxor.github.io/mdl-reactjs/docs/)

## Usage ##
To install run
```jsx
npm install mdl-reactjs
```
Then include by using
```jsx
var MDL = require('mdl-reactjs');
```

Include the MDL css and js in your project
```
<!-- Material design lite stylesheet -->
<!-- You can generate your own at (http://www.getmdl.io/customize/index.html) -->
<link rel="stylesheet" href="//storage.googleapis.com/code.getmdl.io/1.0.3/material.indigo-pink.min.css">

<!-- Material design lite icons -->
<link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">

<!-- Material design lite script -->
<script src="//storage.googleapis.com/code.getmdl.io/1.0.3/material.min.js"></script>
```

Current supported components:
```
<MDL.Badge />
<MDL.Button />
<MDL.Progress />
<MDL.Slider />
<MDL.Spinner />
<MDL.Icon />
<MDL.Textfield />

<MDL.Card>
	<MDL.CardTitle />
	<MDL.CardSupportingText />
	<MDL.CardActions />
	<MDL.CardMenu />
</MDL.Card>

<MDL.Layout>
	<MDL.LayoutHeader>
		<MDL.LayoutHeaderRow />
	</MDL.LayoutHeader>
	<MDL.LayoutDrawer>
		<MDL.LayoutTitle />
	</MDL.LayoutDrawer>
	<MDL.LayoutContent />
	<MDL.CardMenu />
</MDL.Layout>

<MDL.Navigation>
	<MDL.NavigationLink />
	...
</MDL.Navigation>

<MDL.Menu>
	<MDL.MenuItem />
	...
</MDL.Menu>
```
