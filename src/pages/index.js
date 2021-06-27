import React, {useState} from 'react';
import { CustomBasicTable } from '../components/table';

export const Page = () => {
    const [init, setInit] = useState('basictable');
    return (
        <React.Fragment>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <button style={{margin: '0 10px'}} onClick={()=>setInit('basictable')}>table组件</button>
                <button onClick={()=>setInit('upload')}>table组件</button>
            </div>
            <br />
            <hr />
            <div>
                {init==='basictable' && <CustomBasicTable />}
                {init==='upload' && <div>上传组件</div>}
            </div>
        </React.Fragment>
    )
}