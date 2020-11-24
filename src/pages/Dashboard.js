import { useState } from 'react';
import { AutoComplete } from '../components/AutoComplete';
import { Button } from '../components/Button';

const Dashboard = () => {
    let initValue = {
        title: '',
        null: null
    }
    const [value, setValue] = useState(initValue)
    return (
        <div>
            <p>Dashboard</p>
            <Button />
            <AutoComplete
                initValue={initValue}
                value={value}
                setValue={setValue}
                label="Select Film" />
            <p>{value.title}</p>
            <p>{value.year}</p>
        </div>
    )
}

export default Dashboard;