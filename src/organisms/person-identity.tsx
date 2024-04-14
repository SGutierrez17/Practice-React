import { Chip, Paper } from "@mui/material";

export type PersonProps = {
    name: string;
    age: number;
    hobbies: string[];
}

export default function PersonIdentity({ name, age, hobbies = [] }: PersonProps) {
    return (
        <Paper>
            <Chip label={name} />
            <h2>{age}</h2>
            <ul>
                {hobbies.map((hobbie, index) => (
                    <li key={index}>
                        <Chip label={hobbie} />
                    </li>
                ))}
            </ul>
        </Paper>
    )
}


