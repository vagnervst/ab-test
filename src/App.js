import { useEffect } from 'react'

import Button from './components/Button'

const App = () => {
  useEffect(() => {
    const { dataLayer, gtag } = window
    const users = Number(localStorage.getItem('users')) || 0
    console.log({ users })

    dataLayer.push({ users })
    dataLayer.push({ event: 'optimize.activate' })

    gtag('event', 'optimize.callback', {
      name: process.env.REACT_APP_EXPERIMENT_ID,
      callback: () => {
        console.log('experiment passed')
      }
    })
  }, [])

  return (
    <div>
      <p>
        This page has two variants of the same button that are presented
        exclusively according to Google optimize's variant configuration.
      </p>
      {window.isSegmented ? (
          <Button variant="outline">Click Me!</Button>
        ) : (
          <Button variant="solid">Click Me!</Button>
      )}
    </div>
  )
}

export default App;
