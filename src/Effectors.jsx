import React from 'react';
import Effector from './Effector.jsx';

class Effectors extends React.Component {
  render() {
    return (
      <div name="effectors">
        <h5>エフェクタ</h5>
        <Effector type={'distortion'} checked={true}/>
        <Effector type={'vibrato'} checked={false}/>
        <Effector type={'delay'} checked={false}/>
        <Effector type={'bitCrash'} checked={false}/>
      </div>
    );
  }
}

module.exports = Effectors;
