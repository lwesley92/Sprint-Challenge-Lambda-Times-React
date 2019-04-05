What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
PropTypes are used to assess what kind of data is being received by a prop, and checking it against the expected type to ensure that the correct data is being received. The reason why this is important because it allows for us to preemptively check for potential bugs and prevent them from happening in the first place.

Describe a life-cycle event in React?
The primary life-cycle event, is the render method, that is needed for our components to appear on the DOM. However, we can go a step further with, ComponentDidMount, ComponentDidUpdate, and ComponentWillUnmount, these events are considered the birth, growth and death of a component within a react app. The component is called and added to the DOM through mounting, it can then be updated and changed, lastly if and when it is removed from the DOM it is unmounted.

Explain the details of a Higher Order Component? *************
A HOC is a component that takes in another component as an argument and returns a new component. It is a technique used in React in order to reuse component logic through the application.

What are three different ways to style components in React? Explain some of the benefits of each.
The first way is basic html/css composition. This method is fairly beginner friendly and allows beginner coders easy access to styling their html.

The second way is using a preprocessor like Less where we could utilize Bootstrap if desired. Pre-processors let you nest your element styling to allow for greater organization and more fluid code navigation.

The third way is using styled components within the React app, which allows us to style our components inside of our JavaScript files themselves, eliminating the need for css files, allowing us to further organize our projects.