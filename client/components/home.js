import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'

const Home = () => {
  let initialCounter = 0
  if (typeof localStorage !== 'undefined'
  && typeof localStorage.getItem('counter') !== 'undefined') {
    initialCounter = +localStorage.getItem('counter')
  }
  const [counter, setCounterNew] = useState(initialCounter)
  const updateCounter = (counterNew) => {
    setCounterNew(counterNew)
    localStorage.setItem('counter', counterNew)
  }

  return (
    <div>
      <Head title="Hello" />
      <button
        type="button"
        onClick={() => updateCounter(counter + 1)}
      >
        updateCounter
      </button>
      <div> Hello World Dashboard {counter} </div>
      <div><input type="checkbox" /></div>
    </div>
  )
}

Home.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
