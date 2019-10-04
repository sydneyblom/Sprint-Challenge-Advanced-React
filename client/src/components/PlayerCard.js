import React from 'react';
import { Card } from 'semantic-ui-react';


function PlayerCard({name, country, searches}) {

      return (
        <Card style= {{margin:'5px'}}>
            <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>{country}</Card.Meta>
            <Card.Description>{searches}</Card.Description>
            </Card.Content>
        </Card>
    );
}


export default PlayerCard;