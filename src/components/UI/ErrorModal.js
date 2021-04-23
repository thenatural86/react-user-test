import React from 'react'
import Card from './Card'
import Button from './Button'
import classes from './ErrorModal.module.css'

const ErrorModal = (props) => {
  return (
    <div>
      <div classes={classes.backdrop} />
      <Card classes={classes.modal}>
        <header classes={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div classes={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer classes={classes.actions}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </div>
  )
}

export default ErrorModal
