import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Countries from "./Countries"

function Track() {
    const [liveStat, setStat] = useState([])
    const date = new Date(parseInt(liveStat.updated))
    const updated = date.toString()

    useEffect(() => {
        axios
        .get("https://corona.lmao.ninja/v2/all")
        .then(res =>{
            setStat(res.data)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    })
    

    return (
        <div>
        <CardDeck style={{margin:"10px"}}>
        <Card bg="dark" text="light">
          <Card.Body>
          <Card.Title>Total Cases</Card.Title>
            <Card.Text>
                {liveStat.cases}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {updated}</small>
          </Card.Footer>
        </Card>
        <Card bg="success" text="light">
          <Card.Body>
          <Card.Title>Recovered</Card.Title>
            <Card.Text>
            {liveStat.recovered}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <small>Last updated {updated}</small>
          </Card.Footer>
        </Card>
        <Card bg="danger" text="light">
          <Card.Body>
            <Card.Title>Total Death</Card.Title>
            <Card.Text>
            {liveStat.deaths}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <small>Last updated {updated}</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <Countries /> 
        </div>
    )
}

export default Track
