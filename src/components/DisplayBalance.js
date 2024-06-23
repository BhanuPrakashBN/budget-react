import { Statistic } from "semantic-ui-react";

export default function DisplayBalance({title, value, alignment, color='black', size='small'}) {
    return (
        <Statistic size={size} color={color}>
            <Statistic.Label style={{textAlign : {alignment}}}>{title}</Statistic.Label>
            <Statistic.Value >{value}</Statistic.Value>
        </Statistic>
    );
}