import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

export default function DisplayBalances() {
    return(
        <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance title='Income' value='1,000.50'  alignment = 'left' color='green' size='tiny' />
            </Grid.Column>
            <Grid.Column>
              <DisplayBalance title='Expenses' value='500.50' alignment = 'left' color='red' size='tiny' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );

}