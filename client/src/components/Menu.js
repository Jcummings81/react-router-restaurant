import React from 'react'
import axios from 'axios'
import Form from './Form'

class Menu extends React.Component {
  state = { menu: {}, edit: false }

  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`/api/menus/${id}`)
      .then( res => this.setState({ menu: res.data }) )
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit })
  }

  submit = (menu) => {
    const { id } = this.props.match.params
    axios.put(`/api/menus/${id}`, { menu })
      .then( res => {
        this.setState({
          menu: res.data,
          edit: false
        })
      })
  }

  show() {
    const { menu: { name, description, price }} = this.state
    return (
      <div>
        <h1>{name}</h1>
        <h3>{description}</h3>
        <h3>${price}</h3>
      </div>
    )
  }

  form() {
    return <Form {...this.state.menu} submit={this.submit} />
  }

  render() {
    const { edit } = this.state
    return (
      <div>
        { edit ? this.form() : this.show() }
        <button onClick={this.toggleEdit}>
          { edit ? 'Cancel' : 'Edit' }
        </button>
      </div>
    )
  }
}

export default Menu
