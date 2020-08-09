import React from 'react';

const Style = {marginTop: "16px"}

const layout = (props) => {
    return (
    <>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main style={Style}>
            {props.children}
        </main>
    </>
    )
}


export default layout;