import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {capital: countryAndCapitalsList[0].country}

  changeCountry = e => {
    this.setState({capital: e.target.value})
  }

  render() {
    const {capital} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="optionsContainer">
            <select onChange={this.changeCountry}>
              {countryAndCapitalsList.map(item => (
                <option value={item.country} key={item.id}>
                  {item.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="capital">{capital}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
// Write your code here
