import React, {useState} from 'react';
import { CustomBasicTable } from '../components/table';
import InfiniteScroll from '../components/infinite-scroll';

export const Page = () => {
    const [init, setInit] = useState('basictable');
    return (
        <React.Fragment>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <button style={{margin: '0 10px'}} onClick={()=>setInit('basictable')}>table组件</button>
                <button onClick={()=>setInit('upload')}>upload组件</button>
                <button onClick={()=>setInit('infinityScroll')}>无限滚动组件</button>
            </div>
            <br />
            <hr />
            <div>
                {init==='basictable' && <CustomBasicTable />}
                {init==='upload' && <div>上传组件</div>}
                {init==='infinityScroll' && <InfiniteScroll />}
            </div>
        </React.Fragment>
    )
}
