# React Lib

This is collection of accessible, high quality, themeable, openly available React components.

# Features of this Project

- Distributable per component
- Minimal dependencies
- Themeable
- React
- Isolated Development Environment (Storybook)
- Automated Testing (Jest)
- Automated Versioned Releases with CHANGELOG entries
- Automated npm publishing
- Automated Git release tagging
- Continuous deployment for documentation

# How to Get Started as a User

1. Install via npm

   ```sh
   $ npm i @nononsensecoding/react-lib
   ```

2. Import components as needed:

   ```jsx
   import Button from '@nononsensecoding/react-lib/Button'
   import Statistic from '@nononsensecoding/react-lib/Statistic'
   import Calendar from '@nononsensecoding/react-lib/Calendar'

   render() {
       return (
           <div>
                <Button onClick={(e) => console.log(e)}>Click me</Button>
                <p>We saved <Statistic>2000</Statistic> hours in a single week using react-lib!</p>
                <Calendar month={1} day={20} year={2019} />
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
