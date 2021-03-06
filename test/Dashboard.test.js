import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from '../src/components/Dashboard.jsx'

import { shallow, mount, render } from 'enzyme'
import { assert } from 'chai'

const sinon = require('sinon')

describe('Unit Test | Dashboard', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Dashboard />, div)
  })

  it('can mount with no properties', () => {
    const wrapper = shallow(<Dashboard />)
  })

  it('renders as a <div>', () => {
    const wrapper = shallow(<Dashboard />)
    assert.equal(wrapper.type(), 'div')
  })

  it('renders xml elements', () => {
    sinon.spy(Dashboard.prototype, 'render')
    const wrapper = mount(<Dashboard />)
    assert.equal(Dashboard.prototype.render.calledOnce, true)
  })

  it('renders a title for this component', () => {
    const wrapper = shallow(<Dashboard />)
    const dashboardTitle = <h1 className="dashboard-title">CHANNELS</h1>
    expect(wrapper.contains(dashboardTitle)).toEqual(true)
  })

  it('should have a dashboard section with 1 prop', function(){
    const wrapper = render(<Dashboard />)
    assert.equal(wrapper.find('.dashboard').length, 1)
  })
})
