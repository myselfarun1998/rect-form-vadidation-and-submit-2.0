import React from 'react';
export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      store: {
        name: '',
        city: '',
        phone: '',
        age: '',
      },
      show: {
        name: '',
        city: '',
        phone: '',
        age: '',
      },
    };
  }
  onChange = (e) => {
    this.setState((prev) => {
      return {
        ...prev,
        store: {
          ...prev.store,
          [e.target.name]: e.target.value,
        },
      };
    });
    // this.setState({
    //   store: {
    //     [e.target.name]: e.target.value,
    //   }
    // });
  };

  submitCheck = (e) => {
    e.preventDefault();
    if (!this.state.store.name) {
      alert('A name field is empty.');
    } else if (this.state.store.phone.length < 10 || !this.state.store.phone) {
      alert('Phone number is not long enough.');
    } else if (!this.state.store.city) {
      alert('Enter the city.');
    } else if (!this.state.store.age) {
      alert('Enter the age.');
    } else {
      alert(
        `         name=${this.state.store.name}
         phone =${this.state.store.phone}
         city=${this.state.store.city}
         age=${this.state.store.age} `
      );
      console.log(
        `         name=${this.state.store.name}
        phone =${this.state.store.phone}
        city=${this.state.store.city}
        age=${this.state.store.age} `
      );
    }

    // On click of submit set this state to show
    this.setState((prev) => {
      return { ...prev, show: { ...prev.store } };
    });
  };

  render() {
    const { name, city } = this.state;
    return (
      <>
        <form onSubmit={this.submitCheck}>
          <input
            type="text"
            name="name"
            value={this.state.store.name}
            onChange={this.onChange}
            placeholder="enter the name"
          />
          <input
            type="text"
            name="phone"
            value={this.state.store.phone}
            onChange={this.onChange}
            placeholder="enter the Phone Number"
          />
          <input
            type="text"
            name="city"
            value={this.state.store.city}
            placeholder="enter the city"
            onChange={this.onChange}
          />
          <input
            type="text"
            name="age"
            value={this.state.store.age}
            placeholder="enter the age"
            onChange={this.onChange}
          />

          <br />
          <button type="submit">submit</button>
        </form>
        <div className="border">
          <p>Name: {this.state.show.name}</p>
          <p>Phone: {this.state.show.phone}</p>
          <p>city: {this.state.show.city}</p>
          <p>Age: {this.state.show.age}</p>
        </div>
      </>
    );
  }
}
