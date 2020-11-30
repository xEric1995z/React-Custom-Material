import { useState } from 'react';
import { FormInput } from '../components/FormInput'
import { AutoComplete } from '../components/AutoComplete';
import { Button } from '../components/Button';

const Dashboard = () => {
    let initValue = {
        title: '',
        year: null
    }
    const [value, setValue] = useState(initValue);
    const [str, setStr] = useState('');
    
    const handleChange = (event) => {
        
    }

    return (
        <div>
            <p>Dashboard</p>
            <Button />
            <AutoComplete
                initValue={initValue}
                setValue={setValue}
                label="Select Film" />
            <p>{value.title}</p>
            <p>{value.year}</p>
            <FormInput />
        </div>
    )
}

export default Dashboard;