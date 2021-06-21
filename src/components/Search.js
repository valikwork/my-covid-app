import { useState } from 'react'
import { Input } from '@material-ui/core'

export default function Search({ searchHandler }) {
    const [value, setValue] = useState('')

    const localHandler = (val) => {
        setValue(val)
        searchHandler(val)
    }
    return (
        <div>
            <Input style={{ marginBottom: '30px' }} value={value} onChange={(e) => localHandler(e.target.value)} placeholder={'Search'}/>
            {value.length > 0 && <button className="search-delete" onClick={() => localHandler('')}>+</button>}
        </div>
    )
}
