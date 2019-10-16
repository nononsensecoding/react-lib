# React Lib

A collection of accessible, high quality, themeable, openly available React components.

# Features of this Project

- [x] Distributable per component
- [x] Minimal dependencies
- [x] Themeable
- [x] React
- [x] Isolated Development Environment (Storybook)
- [] Automated Testing (Jest)
- [] Automated Versioned Releases with CHANGELOG entries
- [] Automated npm publishing
- [] Automated Git release tagging
- [] Continuous deployment for documentation

# How to Get Started as a User

1. Install via npm

   ```sh
   $ npm i @nononsensecoding/react-lib
   ```

2. Import components as needed:

   ```jsx
   import Button from '@nononsensecoding/react-lib/Button'

   render() {
       return (
           <div>
                <Button onClick={(e) => console.log(e)}>Click me</Button>
           </div>
       )
   }
   ```

# How to Get Started as a Developer

1. Clone Github repo

   ```sh
   $ git clone https://github.com/nononsensecoding/react-lib.git
   ```

2. Run isolated component development mode:

   ```sh
   $ npm start
   ```
