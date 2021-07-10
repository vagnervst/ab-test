import Button from './components/Button'

const App = () => (
  <div>
    <p>
      This page has two variants of the same button that are presented
      exclusively according to Google optimize's variant configuration.
    </p>
    <Button variant="solid">Click Me!</Button>
    <Button style={{ display: 'none' }} variant="outline">Click Me!</Button>
  </div>
)

export default App;
