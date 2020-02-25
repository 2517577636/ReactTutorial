# Note

The source is Official Document.

- About this:
  - You must be careful with this in JSX callbacks.In Javascript, class methods do not bind this by default.If you forget to bind to this.handleClick and pass it onClick,when you call this function, the value of this is undefined.
  - This is not React-specific behavior; it's actually about how JavaScript functions work. Normally, if you don't add() after a method, such as onClick = {this.handleClick}, you should bind this to this method.