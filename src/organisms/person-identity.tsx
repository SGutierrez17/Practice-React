import { Chip, Paper } from "@mui/material";

export type PersonProps = {
    name: string;
    age: string;
    hobbies: string[];
}

export default function PersonIdentity({name, age, hobbies = []}:PersonProps) {
    return (
        <Paper sx={{width:'180px', padding:'20px', m:'12px'}}>
            <Chip label={name}/>
            <Chip label={age}/>
            <ul>
            {hobbies.map((hobbie,index) => (
                <>
                    <li>
                    <Chip key={index} label={hobbie} />
                    </li>
                </>
            ))}
            </ul>
        </Paper>
    )
}

