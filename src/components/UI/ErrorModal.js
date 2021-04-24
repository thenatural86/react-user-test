import React from 'react'
import ReactDOM from 'react-dom'

import Card from './Card'
import Button from './Button'
import classes from './ErrorModal.module.css'

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.errorHandler} />
}

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.errorHandler}>Okay</Button>
      </footer>
    </Card>
  )
}

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop errorHandler={props.errorHandler} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          errorHandler={props.errorHandler}
          title={props.title}
          message={props.message}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  )
}

export default ErrorModal
